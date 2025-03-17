using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using GrowApp2._0.Data;

namespace GrowApp.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Email { get; set; }
        public string ProfilePhoto { get; set; }
        public ICollection<Friendship> Friendships { get; set; }
    }
}
