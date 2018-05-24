using AngulatTest.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Services.Interfaces
{
    public interface IGroupService
    {
        Task<IEnumerable<GroupModel>> GetAll();
        Task<GroupModel> Get(int id);
        Task Update(GroupModel model);
        Task Add(GroupModel model);
        Task Delete(int id);
    }
}
