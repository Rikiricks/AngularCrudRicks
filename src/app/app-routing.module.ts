import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListResolverService } from './employees/employee-list.resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailCanActivateGuardService } from './employees/employee-detail-can-activate-guard.service';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';


const routes: Routes = [
  { path: 'createpost', component: CreatePostComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'postList', component: PostListComponent},
  { path: 'notfound', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing : false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
