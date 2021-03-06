import { GlobalService } from './global.service';
import { AlertService  } from './alert.service';
import { AuthService   } from './auth.service';
import { ApiService    } from './api.service';

import { UserService         } from './user.service';
import { GroupService        } from './group.service';
import { StudentService      } from './student.service';
import { SubjectService      } from './subject.service';
import { TeacherService      } from './teacher.service';
import { AcademicYearService } from './academic-year.service';
import { SemesterService     } from './semester.service';
import { LessonService       } from './lesson.service';
import { TeachesService      } from './teaches.service';
import { GradeService        } from './grade.service';


const SERVICES = [
  GlobalService,
  AuthService,
  UserService,
  ApiService,
  GroupService,
  StudentService,
  SubjectService,
  TeacherService,
  AlertService,
  AcademicYearService,
  SemesterService,
  LessonService,
  TeachesService,
  GradeService
];


export {
  SERVICES,

  GlobalService,
  UserService,
  AuthService,
  ApiService,
  GroupService,
  StudentService,
  SubjectService,
  TeacherService,
  AlertService,
  AcademicYearService,
  SemesterService,
  LessonService,
  TeachesService,
  GradeService
};
