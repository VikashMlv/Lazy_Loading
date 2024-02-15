import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FeesFormComponent } from './fees-form/fees-form.component';


@NgModule({
  declarations: [
    FeesFormComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
