using Microsoft.EntityFrameworkCore;
using AngulatTest.Domain.Entities;

namespace AngulatTest.Domain.Persistence
{
    public class ApplicationContext : DbContext
    {
        public DbSet<StudentEntity> Students { get; set; }
        public DbSet<GroupEntity> Groups { get; set; }
        public DbSet<CourseEntity> Courses { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
             : base(options)
        { }
    }
}
