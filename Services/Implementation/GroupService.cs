using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using AngulatTest.View.Models;

namespace AngulatTest.Services.Implementation
{
    public class GroupService : IGroupService
    {
        private readonly IGroupRepository _repository;

        public GroupService(IGroupRepository repository)
        {
            _repository = repository;
        }

        public async Task Add(GroupModel model)
        {
            var groupEntity = new GroupEntity
            {
                Id = model.Id,
                Name = model.Name,
                CourseId = model.CourseId
            };

            await _repository.AddAsync(groupEntity);
        }

        public async Task Delete(int id)
        {
            var entity = await _repository.GetAsync(id);
            if (entity == null)
                return;
            await _repository.DeleteAsync(entity);
        }

        public async Task<GroupModel> Get(int id)
        {
            var entity = await _repository.GetAsync(id);

            var model = new GroupModel
            {
                Id = entity.Id,
                Name = entity.Name,
                CourseId = entity.CourseId
            };

            return model;
        }

        public async Task<IEnumerable<GroupModel>> GetAll()
        {
            var entities = await _repository.GetAll();
            var result = entities.Select(entity => new GroupModel
            {
                Id = entity.Id,
                Name = entity.Name,
                CourseId = entity.CourseId
            });

            return result;
        }

        public async Task Update(GroupModel model)
        {
            var entity = await _repository.GetAsync(model.Id);
            entity.Name = model.Name;
            await _repository.Update(entity);
        }
        public async Task<GroupDetail> GetDetail(int groupId)
        {
            var result = await _repository.GetDetail(groupId);
            return result;
        }
    }
}
