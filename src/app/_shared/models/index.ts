import { IApiData } from './i.api-data';
import { iJWT     } from './i.jwt';
import { ApiError } from './api-error.model';

import { BaseModel    } from './base.model';
import { User         } from './user.model';
import { Group        } from './group.model';
import { Subject      } from './subject.model';
import { Student      } from './student.model';
import { Teacher      } from './teacher.model';
import { AcademicYear } from './academic-year.model';
import { Semester     } from './semester.model';
import { Teaches      } from './teaches.model';
import { Lesson       } from './lesson.model';
import { Grade        } from './grade.model';


const MODELS = [
  BaseModel,
  User,
  Group,
  Subject,
  ApiError,
  Student,
  Teacher,
  AcademicYear,
  Semester,
  Teaches,
  Lesson,
  Grade
];


export {
  MODELS,

  IApiData,
  iJWT,
  BaseModel,
  User,
  Group,
  Subject,
  ApiError,
  Student,
  Teacher,
  AcademicYear,
  Semester,
  Teaches,
  Lesson,
  Grade
};
