using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngulatTest.Services.Interfaces
{
    public interface IService<T>
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> Get(int id);
        Task Update(T model);
        Task Add(T model);
        Task Delete(int id);
    }
}
