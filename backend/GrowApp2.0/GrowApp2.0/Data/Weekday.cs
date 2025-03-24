using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GrowApp2._0.Data
{
    public class Weekday
    {
        [Key]
        public int WeekdayId { get; set; }

        [Required]
        public int GoalId { get; set; }

        [ForeignKey("GoalId")]
        public Goal Goal { get; set; }

        [Required]
        public string DayName { get; set; }  // e.g., "Monday", "Wednesday"
    }
}