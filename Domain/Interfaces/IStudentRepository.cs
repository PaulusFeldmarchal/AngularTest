using AngulatTest.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Interfaces
{
    public interface IStudentRepository
    {
        Task<IEnumerable<StudentEntity>> GetAll();
        Task<StudentEntity> GetAsync(int id);
        Task Update(StudentEntity entity);
        Task AddAsync(StudentEntity entity);
        Task DeleteAsync(StudentEntity entity);
    }
}
