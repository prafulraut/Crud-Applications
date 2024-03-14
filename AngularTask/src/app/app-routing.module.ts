import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './component/user-table/user-table.component';
import { AddEditUserComponent } from './component/add-edit-user/add-edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  {
    path: 'user-list',
    component: UserTableComponent,
  },
  {
    path: 'add-user',
    component: AddEditUserComponent,
  },
  { path: 'edit-user/:id', component: AddEditUserComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
