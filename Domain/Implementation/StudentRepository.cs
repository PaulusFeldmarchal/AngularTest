using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Domain.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Implementation
{
    public class StudentRepository : IStudentRepository
    {
        private ApplicationContext _context;

        public StudentRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task AddAsync(StudentEntity entity)
        {
            await _context.Students.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(StudentEntity entity)
        {
            _context.Students.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<StudentEntity>> GetAll()
        {
            var userEntities = await _context.Students.ToListAsync();
            return userEntities;
        }

        public async Task<StudentEntity> GetAsync(int id)
        {
            return await _context.Students.FindAsync(id);
        }

        public async Task Update(StudentEntity entity)
        {
            await _context.SaveChangesAsync();
        }
    }
}
