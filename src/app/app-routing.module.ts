import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/_guards/auth.guard';
import { AuthOnlyGuestGuard } from './core/_guards/auth.only-guest.guard';

const routes: Routes = [
  {
    path: 'platform/students',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'auth',
    canActivate: [AuthOnlyGuestGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [AuthOnlyGuestGuard],
    loadChildren: () =>
      import('./static-pages/static-pages.module').then(
        (m) => m.StaticPagesModule
      ),
  },
  {
    path: 'platform/teachers',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./teachers/teachers.module').then((m) => m.TeachersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
