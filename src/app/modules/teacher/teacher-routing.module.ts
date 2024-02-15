import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTeacherComponent } from './new-teacher/new-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  {path:'',component:NewTeacherComponent,pathMatch:'full'},
  {path:'new-teacher',component:NewTeacherComponent},
  {path:'teacher-list',component:TeacherListComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
