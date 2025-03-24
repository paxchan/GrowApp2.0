using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GrowApp2._0.Data
{
    public class Goal
    {
        [Key]
        [Required]
        public int goal_id { get; set; }

        [ForeignKey("user_id")]
        public int user_id { get; set; }
        public User User { get; set; }

        [Required]
        public string title { get; set; }

        public string reason { get; set; }

        public string category { get; set; }

        public int? level { get; set; }

        public DateTime? created_at { get; set; }

        public int frequency { get; set; }
        
        public ICollection<Weekday> Weekdays { get; set; } = new List<Weekday>();

        //try2
    }
}
