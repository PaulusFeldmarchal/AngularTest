using AngulatTest.Models;
using AngulatTest.View.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Services.Interfaces
{
    public interface IGroupService : IService<GroupModel>
    {
        Task<IEnumerable<GroupDetail>> getDetailAboutGroupById(int groupId);
    }
}
