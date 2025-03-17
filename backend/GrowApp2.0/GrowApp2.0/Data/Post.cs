using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GrowApp2._0.Data
{
    public class Post
    {
        [Key]
        [Required]
        public int post_id { get; set; }
        public int user_id { get; set; }
        public string photo { get; set; }
        public string caption { get; set; }
        public DateTime posted_at { get; set; }

        [ForeignKey("goal_id")]
        public int goal_id { get; set; }
        public Goal Goal { get; set; }
    }
}
