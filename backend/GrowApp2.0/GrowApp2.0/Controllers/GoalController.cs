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

            // Temporarily extract the weekdays
            var weekdays = goal.Weekdays?.ToList();
            goal.Weekdays = new List<Weekday>();

            // Save goal first
            _context.Goals.Add(goal);
            await _context.SaveChangesAsync();

            // Add weekdays and associate with the newly created goal
            if (weekdays != null)
            {
                foreach (var day in weekdays)
                {
                    day.GoalId = goal.goal_id;
                    _context.Weekdays.Add(day);
                }
                await _context.SaveChangesAsync();
            }

            return CreatedAtAction(nameof(GetGoal), new { id = goal.goal_id }, goal);
        }

        // PUT: api/Goal/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGoal(int id, [FromBody] Goal updatedGoal)
        {
            if (id != updatedGoal.goal_id)
            {
                return BadRequest("Goal ID mismatch.");
            }

            var goal = await _context.Goals
                .Include(g => g.Weekdays)
                .FirstOrDefaultAsync(g => g.goal_id == id);

            if (goal == null)
            {
                return NotFound("Goal not found.");
            }

            // Update properties
            goal.title = updatedGoal.title;
            goal.reason = updatedGoal.reason;
            goal.category = updatedGoal.category;
            goal.level = updatedGoal.level;

            // If you want to replace weekdays:
            if (updatedGoal.Weekdays != null)
            {
                goal.Weekdays.Clear();
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
            return NoContent();
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
