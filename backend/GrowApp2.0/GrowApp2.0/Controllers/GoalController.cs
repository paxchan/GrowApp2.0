using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrowApp2._0.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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

        // PUT: api/Goal/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGoal(int id, [FromBody] Goal updatedGoal)
        {
            if (id != updatedGoal.goal_id)
            {
                return BadRequest("Goal ID mismatch");
            }

            var goal = await _context.Goals.FindAsync(id);
            if (goal == null)
            {
                return NotFound("Goal not found");
            }

            // Update goal properties
            goal.title = updatedGoal.title;
            goal.description = updatedGoal.description;
            goal.start_date = updatedGoal.start_date;
            goal.end_date = updatedGoal.end_date;
            goal.status = updatedGoal.status;
            goal.visibility = updatedGoal.visibility;
            goal.frequency = updatedGoal.frequency;

            _context.Goals.Update(goal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //Save the new goal
        [HttpPost("CreateGoal")]
        public IActionResult CreateGoal([FromBody] Goal response)
        {
            if (response == null)
            {
                return BadRequest("Invalid goal data.");
            }

            response.created_at = DateTime.UtcNow;
            _context.Goals.Add(response);
            _context.SaveChanges();
            return Ok(response);
        }

    }
}
