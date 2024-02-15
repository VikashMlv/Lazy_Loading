import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { NewTeacherComponent } from './new-teacher/new-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


@NgModule({
  declarations: [
    NewTeacherComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
