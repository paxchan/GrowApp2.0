using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrowApp2._0.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GrowApp2._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalController : ControllerBase
    {
        private readonly GrowDbContext _context;

        public GoalController(GrowDbContext context)
        {
            _context = context;
        }

        // GET: api/Goal
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Goal>>> GetAllGoals()
        {
            var goals = await _context.Goals
                .Include(g => g.Weekdays)
                .ToListAsync();

            return Ok(goals);
        }
        
        // GET: api/Goal/category/{category}
        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Goal>>> GetGoalsByCategory(string category)
        {
            var goals = await _context.Goals
                .Include(g => g.Weekdays)
                .Where(g => g.category.ToLower() == category.ToLower())
                .ToListAsync();

            if (goals == null || goals.Count == 0)
            {
                return NotFound("No goals found for this category.");
            }

            return Ok(goals);
        }

        // GET: api/Goal/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Goal>> GetGoal(int id)
        {
            var goal = await _context.Goals
                .Include(g => g.Weekdays)
                .FirstOrDefaultAsync(g => g.goal_id == id);

            if (goal == null)
            {
                return NotFound("Goal not found.");
            }

            return Ok(goal);
        }

        // POST: api/Goal
        [HttpPost]
        public async Task<IActionResult> CreateGoal([FromBody] Goal goal)
        {
            if (goal == null)
                return BadRequest("Invalid data.");

            goal.created_at = DateTime.UtcNow;
            goal.level = 1;

            // Detach weekdays temporarily
            var weekdays = goal.Weekdays?.ToList();
            goal.Weekdays = new List<Weekday>();

            _context.Goals.Add(goal);
            await _context.SaveChangesAsync(); // Now goal_id is generated

            // Attach weekdays
            if (weekdays != null)
            {
                foreach (var day in weekdays)
                {
                    day.GoalId = goal.goal_id; // 💥 This is critical
                    _context.Weekdays.Add(day);
                }
                await _context.SaveChangesAsync();
            }

            return CreatedAtAction(nameof(GetGoal), new { id = goal.goal_id }, goal);
        }
        
        // PUT: api/Goal/{id}
        [HttpPut("{goalId}")]
        public async Task<IActionResult> UpdateGoal(int goalId, [FromBody] Goal updatedGoal)
        {
            if (goalId != updatedGoal.goal_id)
            {
                return BadRequest("Goal ID mismatch.");
            }

            var goal = await _context.Goals
                .Include(g => g.Weekdays) 
                .FirstOrDefaultAsync(g => g.goal_id == goalId);

            if (goal == null)
            {
                return NotFound("Goal not found.");
            }

            // Update properties
            goal.title = updatedGoal.title;
            goal.reason = updatedGoal.reason;
            goal.category = updatedGoal.category;
            goal.level = updatedGoal.level;

            // Ensure Weekdays list is initialized before clearing
            goal.Weekdays ??= new List<Weekday>();
            goal.Weekdays.Clear();

            if (updatedGoal.Weekdays != null)
            {
                foreach (var weekday in updatedGoal.Weekdays)
                {
                    goal.Weekdays.Add(new Weekday
                    {
                        DayName = weekday.DayName,
                        GoalId = goal.goal_id
                    });
                }
            }

            await _context.SaveChangesAsync();
            return Ok("Goal updated successfully.");
        }
        
        // DELETE: api/Goal/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGoal(int id)
        {
            var goal = await _context.Goals
                .Include(g => g.Weekdays)
                .FirstOrDefaultAsync(g => g.goal_id == id);

            if (goal == null)
            {
                return NotFound("Goal not found.");
            }

            _context.Goals.Remove(goal);
            await _context.SaveChangesAsync();
            return Ok("Goal deleted successfully.");
        }
    }
}
