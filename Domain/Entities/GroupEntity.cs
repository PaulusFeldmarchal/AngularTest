using System.Collections.Generic;

namespace AngulatTest.Domain.Entities
{
    public class GroupEntity 
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<StudentEntity> Students { get; set; }

        public int CourseId { get; set; }
        public CourseEntity Course { get; set; }

    }
}