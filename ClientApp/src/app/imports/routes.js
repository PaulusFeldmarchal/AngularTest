"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var group_detail_component_1 = require("../group-detail/group-detail.component");
var add_course_data_component_1 = require("../add-course-data/add-course-data.component");
var fetch_course_data_component_1 = require("../fetch-course-data/fetch-course-data.component");
var add_student_data_component_1 = require("../add-student-data/add-student-data.component");
var fetch_student_data_component_1 = require("../fetch-student-data/fetch-student-data.component");
var add_group_data_component_1 = require("../add-group-data/add-group-data.component");
var fetch_group_data_component_1 = require("../fetch-group-data/fetch-group-data.component");
exports.routes = [
    { path: '', component: fetch_group_data_component_1.FetchGroupDataComponent, pathMatch: 'full' },
    { path: 'fetch-group-data', component: fetch_group_data_component_1.FetchGroupDataComponent },
    { path: 'register-group', component: add_group_data_component_1.createGroup },
    { path: 'group/edit/:id', component: add_group_data_component_1.createGroup },
    { path: 'fetch-student-data', component: fetch_student_data_component_1.FetchStudentDataComponent },
    { path: 'register-student', component: add_student_data_component_1.createStudent },
    { path: 'student/edit/:id', component: add_student_data_component_1.createStudent },
    { path: 'fetch-course-data', component: fetch_course_data_component_1.FetchCourseDataComponent },
    { path: 'register-course', component: add_course_data_component_1.createCourse },
    { path: 'course/edit/:id', component: add_course_data_component_1.createCourse },
    { path: 'group/detail/:id', component: group_detail_component_1.groupDetail },
];
//# sourceMappingURL=routes.js.map