import { BaseService } from './base.service';

export class CourseService extends BaseService{
  getCourses() {
    return this.getElements('Course/');
  }

  getCourseById(id: number) {
    return this.getElemById('Course/Details/', id);
  }

  saveCourse(group) {
    return this.save('Course/Create', group);
  }

  updateCourse(group) {
    return this.update('Course/Edit', group);
  }

  deleteCourse(id) {
    return this.delete('Course/Delete/', id);
  }
}
