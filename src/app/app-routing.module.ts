import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./modules/teacher/teacher.module').then((m) => m.TeacherModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
