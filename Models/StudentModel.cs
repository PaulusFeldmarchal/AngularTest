﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngulatTest.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public GroupModel Group { get; set; }
    }
}