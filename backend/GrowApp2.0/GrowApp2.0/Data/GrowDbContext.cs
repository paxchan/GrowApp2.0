using Microsoft.EntityFrameworkCore;
using GrowApp2._0.Data;
using System.Collections.Generic;

namespace GrowApp2._0.Data
{
    public class GrowDbContext : DbContext
    {
        public GrowDbContext(DbContextOptions<GrowDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Goal> Goals { get; set; }
        public DbSet<Weekday> Weekdays { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
        public DbSet<Accountability> Accountabilities { get; set; }
    }
}