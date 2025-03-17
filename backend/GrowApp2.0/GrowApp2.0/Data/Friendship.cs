using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using GrowApp.Models;

namespace GrowApp2._0.Data
{
    public class Friendship
    {
        [Key]
        public int FriendshipId { get; set; }
        [ForeignKey("User1")]
        public int UserId1 { get; set; }
        public User User1 { get; set; }
        public int UserId2 { get; set; }
        public string Status { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
