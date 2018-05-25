using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Domain.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Implementation
{
    public class CourseRepository : ICourseRepository
    {
        private readonly ApplicationContext _context;

        public CourseRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task AddAsync(CourseEntity entity)
        {
            await _context.Courses.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(CourseEntity entity)
        {
            _context.Courses.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<CourseEntity>> GetAll()
        {
            var userEntities = await _context.Courses.ToListAsync();
            return userEntities;
        }

        public async Task<CourseEntity> GetAsync(int id)
        {
            return await _context.Courses.FindAsync(id);
        }

        public async Task Update(CourseEntity entity)
        {
            await _context.SaveChangesAsync();
        }
    }
}
