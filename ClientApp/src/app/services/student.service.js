"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_service_1 = require("./base.service");
var StudentService = /** @class */ (function (_super) {
    __extends(StudentService, _super);
    function StudentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentService.prototype.getStudents = function () {
        return this.getElements('Student/');
    };
    StudentService.prototype.getStudentById = function (id) {
        return this.getElemById('Student/Details/', id);
    };
    StudentService.prototype.saveStudent = function (group) {
        return this.save('Student/Create', group);
    };
    StudentService.prototype.updateStudent = function (group) {
        return this.update('Student/Edit', group);
    };
    StudentService.prototype.deleteStudent = function (id) {
        return this.delete('Student/Delete/', id);
    };
    return StudentService;
}(base_service_1.BaseService));
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map