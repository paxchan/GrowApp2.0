using System.ComponentModel.DataAnnotations;

namespace GrowApp2._0.Data
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
