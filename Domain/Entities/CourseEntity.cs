namespace AngulatTest.Domain.Entities
{
    public class CourseEntity 
    {
        public int Id { get; set; }
        public string Specialization { get; set; }

        public int GroupId { get; set; }
        public GroupEntity Group { get; set; }
    }
}
