using AngulatTest.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Interfaces
{
    interface IGroupRepository
    {
        Task<IEnumerable<GroupEntity>> GetAll();
        Task<GroupEntity> GetAsync(int id);
        Task Update(GroupEntity entity);
        Task AddAsync(GroupEntity entity);
        Task DeleteAsync(GroupEntity entity);
    }
}
