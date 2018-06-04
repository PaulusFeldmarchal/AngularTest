using AngulatTest.Domain.Entities;
using AngulatTest.View.Models;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Interfaces
{
    public interface IGroupRepository : IRepository<GroupEntity>
    {
        Task<GroupDetail> GetDetail(int groupId);
    }
}
