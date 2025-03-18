using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrowApp2._0.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GrowApp2._0.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
    
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
    }
}
