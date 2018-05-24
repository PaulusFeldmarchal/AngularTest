namespace AngulatTest.Domain.Entities
{
    public class StudentEntity 
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int GroupId { get; set; }
        public GroupEntity Group { get; set; }
    }
}
