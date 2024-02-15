import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { NaPipe } from './pipes/na.pipe';
import { TooltipDirective } from './directive/tooltip.directive';



@NgModule({
  declarations: [
    AlertComponent,
    MyTableComponent,
    NaPipe,
    TooltipDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
