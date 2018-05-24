using AngulatTest.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Services.Interfaces
{
    public interface IStudentService
    {
        Task<IEnumerable<StudentModel>> GetAll();
        Task<StudentModel> Get(int id);
        Task Update(StudentModel model);
        Task Add(StudentModel model);
        Task Delete(int id);
    }
}
