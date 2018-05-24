using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngulatTest.Services.Implementation
{
    public class CourseService : ICourseService
    {
        private ICourseRepository _repository;

        public CourseService(ICourseRepository repository)
        {
            _repository = repository;
        }

        public async Task Add(CourseModel model)
        {
            var groupEntity = new GroupEntity
            {
                Id = model.Group.Id,
                Name = model.Group.Name
            };

            var courseEntity = new CourseEntity
            {
                Specialization = model.Specialization,
                GroupId = model.Group.Id,
                Group = groupEntity
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
                Group = new GroupModel
                {
                    Id = entity.Group.Id,
                    Name = entity.Group.Name
                }
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
                Group = new GroupModel
                {
                    Id = entity.Group.Id,
                    Name = entity.Group.Name
                }
            });

            return result;
        }

        public async Task Update(CourseModel model)
        {
            var entity = await _repository.GetAsync(model.Id);
            await _repository.Update(entity);
        }

    }
}
