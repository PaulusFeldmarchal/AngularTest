import { BaseService } from './base.service';

export class StudentService extends BaseService {

  getStudents() {
    return this.getElements('Student/');
  }

  getStudentById(id: number) {
    return this.getElemById('Student/Details/', id);
  }

  saveStudent(group) {
    return this.save('Student/Create', group);
  }

  updateStudent(group) {
    return this.update('Student/Edit', group);
  }

  deleteStudent(id) {
    return this.delete('Student/Delete/', id);
  }
}
