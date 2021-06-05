import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
// import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee-service/employee-service.component';
// import { DisplayEmployeeComponent } from './employees/display-employee/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
// import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
// import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list.resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailCanActivateGuardService } from './employees/employee-detail-can-activate-guard.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './employees/Post.Service';
import { HttpClientModule } from '@angular/common/http';
import { AccordianComponent } from './shared/accordian/accordian.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EmployeeModule } from './employees/employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    // ListEmployeesComponent,
    // CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    EmployeeService,
    // DisplayEmployeeComponent,
    // EmployeeDetailComponent,
    // EmployeeFilterPipe,
    PageNotFoundComponent,
    PostListComponent,
    AccordianComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeeModule,
    AppRoutingModule,
    // ,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService,
     EmployeeDetailCanActivateGuardService, EmployeeListResolverService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
