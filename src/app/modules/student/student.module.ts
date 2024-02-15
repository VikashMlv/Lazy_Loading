import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    StudentFormComponent,
    StudentListComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
