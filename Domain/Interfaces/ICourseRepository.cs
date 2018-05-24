using AngulatTest.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Interfaces
{
    interface ICourseRepository
    {
        Task<IEnumerable<CourseEntity>> GetAll();
        Task<CourseEntity> GetAsync(int id);
        Task Update(CourseEntity entity);
        Task AddAsync(CourseEntity entity);
        Task DeleteAsync(CourseEntity entity);
    }
}
