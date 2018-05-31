using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngulatTest.Services.Implementation
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _repository;

        public CourseService(ICourseRepository repository)
        {
            _repository = repository;
        }

        public async Task Add(CourseModel model)
        {
            if (model.GroupId == 0)
                return;

            var courseEntity = new CourseEntity
            {
                Specialization = model.Specialization,
                GroupId = model.Id
            };
            await _repository.AddAsync(courseEntity);
        }

        public async Task Delete(int id)
        {
            var entity = await _repository.GetAsync(id);
            if (entity == null)
                return;
            await _repository.DeleteAsync(entity);
        }

        public async Task<CourseModel> Get(int id)
        {
            var entity = await _repository.GetAsync(id);

            var model = new CourseModel
            {
                Id = entity.Id,
                Specialization = entity.Specialization,
                GroupId = entity.GroupId
            };            

            return model;
        }

        public async Task<IEnumerable<CourseModel>> GetAll()
        {
            var entities = await _repository.GetAll();
            var result = entities.Select(entity => new CourseModel
            {
                Id = entity.Id,
                Specialization = entity.Specialization,
                GroupId = entity.GroupId
            });

            return result;
        }

        public async Task Update(CourseModel model)
        {
            var entity = await _repository.GetAsync(model.Id);
            entity.Specialization = model.Specialization;
            entity.GroupId = model.GroupId;
            await _repository.Update(entity);
        }

    }
}
