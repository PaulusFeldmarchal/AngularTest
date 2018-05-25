using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Domain.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Implementation
{
    public class GroupRepository : IGroupRepository
    {
        private readonly ApplicationContext _context;

        public GroupRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task AddAsync(GroupEntity entity)
        {
            await _context.Groups.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(GroupEntity entity)
        {
            _context.Groups.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<GroupEntity>> GetAll()
        {
            var userEntities = await _context.Groups.ToListAsync();
            return userEntities;
        }

        public async Task<GroupEntity> GetAsync(int id)
        {
            return await _context.Groups.FindAsync(id);
        }

        public async Task Update(GroupEntity entity)
        {
            await _context.SaveChangesAsync();
        }
    }
}
