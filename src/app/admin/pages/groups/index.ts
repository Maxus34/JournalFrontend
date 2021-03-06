import { GroupsListComponent  } from './groups-list/groups-list.component';
import { GroupCreateComponent } from './groups-list/group-create/group-create.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupFormComponent   } from './group-form/group-form.component';
import { GroupStudentsListComponent } from './group-detail/students-list/g-students-list.component';
import { GroupStudentAddComponent   } from './group-detail/student-add/g-student-add.component';

const GROUPS_PAGE = [
  GroupsListComponent,
  GroupCreateComponent,
  GroupDetailComponent,
  GroupFormComponent,
  GroupStudentsListComponent,
  GroupStudentAddComponent,
];

export {
  GROUPS_PAGE,

  GroupsListComponent,
  GroupCreateComponent,
  GroupDetailComponent,
  GroupFormComponent,
  GroupStudentsListComponent,
  GroupStudentAddComponent
};
