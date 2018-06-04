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
var CourseService = /** @class */ (function (_super) {
    __extends(CourseService, _super);
    function CourseService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CourseService.prototype.getCourses = function () {
        return this.getElements('Course/');
    };
    CourseService.prototype.getCourseById = function (id) {
        return this.getElemById('Course/Details/', id);
    };
    CourseService.prototype.saveCourse = function (group) {
        return this.save('Course/Create', group);
    };
    CourseService.prototype.updateCourse = function (group) {
        return this.update('Course/Edit', group);
    };
    CourseService.prototype.deleteCourse = function (id) {
        return this.delete('Course/Delete/', id);
    };
    return CourseService;
}(base_service_1.BaseService));
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map