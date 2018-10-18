using Microsoft.EntityFrameworkCore;

namespace JobTracker.Models
{
    public class JobTrackerContext : DbContext 
    {
        public JobTrackerContext(DbContextOptions<JobTrackerContext> options) : base (options) { }
        public DbSet<Job> Job { get; set; }
        public DbSet<StatusHistory> StatusHistory { get; set; }
    }
}