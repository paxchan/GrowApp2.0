using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using GrowApp2._0.Data;

public class Weekday
{
    [Key]
    public int WeekdayId { get; set; }

    public int GoalId { get; set; }

    [ForeignKey("GoalId")]
    [JsonIgnore]  // Prevents infinite loop on JSON serialization
    public Goal? Goal { get; set; }

    public string DayName { get; set; }
}