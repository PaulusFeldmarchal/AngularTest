using System.Collections.Generic;

namespace AngulatTest.Domain.Entities
{
    public class GroupEntity 
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<StudentEntity> Students { get; set; }
        public List<CourseEntity> CourseEntities { get; set; }

    }
}
