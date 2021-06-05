import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListResolverService } from './employees/employee-list.resolver.service';
import { EmployeeDetailCanActivateGuardService } from './employees/employee-detail-can-activate-guard.service';


const routes: Routes = [
    {
        path: 'list', component: ListEmployeesComponent,
        resolve: { employeeList: EmployeeListResolverService }
    },
    {
        path: 'edit/:id',
        component: CreateEmployeeComponent,
        canDeactivate: [CreateEmployeeCanDeactivateGuardService]
    },
    {
        path: 'employee/:id',
        component: EmployeeDetailComponent,
        canActivate: [EmployeeDetailCanActivateGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
