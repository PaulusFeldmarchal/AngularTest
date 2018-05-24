using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngulatTest.Models
{
    public class CourseModel
    {
        public int Id { get; set; }
        public string Specialization { get; set; }

        public GroupModel Group { get; set; }
    }
}
