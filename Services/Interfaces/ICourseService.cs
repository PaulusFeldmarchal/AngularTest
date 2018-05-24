using AngulatTest
    .Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Services.Interfaces
{
    public interface ICourseService
    {
        Task<IEnumerable<CourseModel>> GetAll();
        Task<CourseModel> Get(int id);
        Task Update(CourseModel model);
        Task Add(CourseModel model);
        Task Delete(int id);
    }
}
