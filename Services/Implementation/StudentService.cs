﻿using AngulatTest.Domain.Entities;
using AngulatTest.Domain.Interfaces;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngulatTest.Services.Implementation
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _repository;

        public StudentService(IStudentRepository repository)
        {
            _repository = repository;
        }

        public async Task Add(StudentModel model)
        {
            var courseEntity = new StudentEntity
            {
                Name = model.Name,
                GroupId = model.GroupId
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

        public async Task<StudentModel> Get(int id)
        {
            var entity = await _repository.GetAsync(id);

            var model = new StudentModel
            {
                Id = entity.Id,
                Name = entity.Name,
                GroupId = entity.GroupId
            };

            return model;
        }

        public async Task<IEnumerable<StudentModel>> GetAll()
        {
            var entities = await _repository.GetAll();
            var result = entities.Select(entity => new StudentModel
            {
                Id = entity.Id,
                Name = entity.Name,
                GroupId = entity.GroupId
            });

            return result;
        }

        public async Task Update(StudentModel model)
        {
            var entity = await _repository.GetAsync(model.Id);
            entity.Name = model.Name;
            entity.GroupId = model.GroupId;
            await _repository.Update(entity);
        }
    }
}
