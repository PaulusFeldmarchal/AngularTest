using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Domain.Persistence;
using AngulatTest.Models;
using AngulatTest.View.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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

        /* my query
         
                var result = await _context.Groups
                .Where(g => g.Id == id)
                .GroupJoin(
                _context.Students,
                g => g.Id,
                s => s.GroupId,
                (group, students) =>
                new GroupDetail
                {
                    Course = group.Course.Specialization,
                    Id = group.Id,
                    Name = group.Name,
                    Students = students.Select(studentEntity =>
                        new StudentModel
                        {
                            Name = studentEntity.Name,
                            Id = studentEntity.Id,
                            GroupId = studentEntity.GroupId
                        }
                    )
                }
            )
            .FirstOrDefaultAsync();



             */

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
