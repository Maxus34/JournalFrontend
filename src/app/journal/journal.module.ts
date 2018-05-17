import { NgModule } from '@angular/core';

import { SharedModule } from '../_shared/shared.module';
import { JournalRoutingModule } from './journal.routing.module';

import { JournalLayoutComponent } from './journal-layout.component';

// Pages
import { TEACHER_PAGE   } from './teacher';
import { ACADEMIC_PLAN_PAGE } from './academic-plan-view';
import { JOURNAl_PAGE } from './journal';


@NgModule({
  imports: [
    SharedModule,
    JournalRoutingModule
  ],
  declarations: [
    JournalLayoutComponent,
    TEACHER_PAGE,
    ACADEMIC_PLAN_PAGE,
    JOURNAl_PAGE,
  ],
  providers: [

  ]
})
export class JournalModule {}
