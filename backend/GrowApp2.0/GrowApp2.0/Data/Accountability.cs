﻿using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GrowApp2._0.Data
{
    public class Accountability
    {
        [Key]
        [Required]
        public int accountability_id { get; set; }

        public int goal_id { get; set; }

        [ForeignKey("goal_id")]
        public Goal Goal { get; set; }

        public int friendship_id { get; set; }

        [ForeignKey("friendship_id")]
        public Friendship Friendship { get; set; }

        public bool can_edit { get; set; }

        public DateTime added_at { get; set; }
    }
}