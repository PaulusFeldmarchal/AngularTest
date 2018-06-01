using AngulatTest.Models;
using System;
using System.Collections.Generic;

namespace AngulatTest.View.Models
{
    public class GroupDetail
    {
        public int Id { get; set; }
        public String Name { get; set; }

        public string Course { get; set; }
        public IEnumerable<StudentModel> Students { get; set; }
    }
}
