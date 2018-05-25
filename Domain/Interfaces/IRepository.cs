using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Domain.Interfaces
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetAsync(int id);
        Task Update(T entity);
        Task AddAsync(T entity);
        Task DeleteAsync(T entity);
    }
}
