import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesFormComponent } from './fees-form/fees-form.component';

const routes: Routes = [
  {path:'',component:FeesFormComponent,pathMatch:'full'},
  {path:'fees',component:FeesFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
