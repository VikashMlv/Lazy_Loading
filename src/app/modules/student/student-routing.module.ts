import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'',component:StudentFormComponent,pathMatch:'full'},
  {path:'form',component:SectionComponent},
  {path:'section',component:StudentFormComponent},
  {path:'student-list',component:StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
