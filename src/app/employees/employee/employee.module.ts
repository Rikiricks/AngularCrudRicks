import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ListEmployeesComponent } from '../list-employees/list-employees.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeFilterPipe } from '../employee-filter.pipe';
import { DisplayEmployeeComponent } from '../display-employee/display-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../../shared/shared/shared.module';
import { EmployeeRoutingModule } from 'src/app/employee-routing.module';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent,
    EmployeeDetailComponent,
    DisplayEmployeeComponent,
    EmployeeFilterPipe,
  ],
  imports: [
     CommonModule,
     BrowserModule,
     BrowserAnimationsModule,
     BsDatepickerModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    EmployeeRoutingModule

  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule, CommonModule, FormsModule ]
})
export class EmployeeModule { }
