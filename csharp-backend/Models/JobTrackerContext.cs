using Microsoft.EntityFrameworkCore;

namespace JobTracker.Models
{
    public class JobTrackerContext : DbContext 
    {
        public JobTrackerContext(DbContextOptions<JobTrackerContext> options) : base (options) { }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Site> Sites { get; set; }
        public DbSet<JobTrackerUser> JobTrackerUsers { get; set; }

        public DbSet<StatusType> StatusTypes{ get; set; }

        public DbSet<StatusHistory> StatusHistory { get; set; }
    }
}