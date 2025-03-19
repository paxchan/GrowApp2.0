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
        public string description { get; set; }

        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }

        public string status { get; set; }

        public bool visibility { get; set; }

        public DateTime created_at { get; set; }

        public int frequency { get; set; }

        //try2
    }
}
