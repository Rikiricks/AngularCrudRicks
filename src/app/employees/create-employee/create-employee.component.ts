import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee-service/employee-service.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmpForm: NgForm;
  // @ViewChild('employeeForm', { static: true }) public createEmpForm: NgForm;

  datePickerConfig: Partial<BsDatepickerConfig>;
  Name: string;
  Email: string;
  Gender = 'male';
  Preference = 'Phone';
  IsActive = true;
  Department: -1;
  Dob: Date;
  PhotoPath: string;
  isPhotoShow = false;

  Departments: Department[] = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'Account' },
    { id: 3, name: 'HR' },
    { id: -1, name: 'Select' }
  ];

  employee: Employee = {
    id: null,
    name: null,
    password: null,
    pwdConfirm: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPref: null,
    dob: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };



  constructor(private empServie: EmployeeService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(1992, 1, 1),
      maxDate: new Date(),
      dateInputFormat: 'DD/MM/YYYY'
    });

    const empId = +this.activeRoute.snapshot.paramMap.get('id');
    if (empId === 0) {
      const defaultEmp = {
        id: null,
        name: null,
        password: null,
        pwdConfirm: null,
        gender: null,
        email: null,
        phoneNumber: null,
        contactPref: null,
        dob: null,
        department: '-1',
        isActive: null,
        photoPath: null
      };
      this.employee = defaultEmp;
      // this.createEmpForm.reset(defaultEmp);
    }
    else {
      this.empServie.getEmpById(empId).subscribe(employee => {
        this.employee = employee;
      },
        (err: any) => { console.log(err); }
      );
    }



  }

  // saveEmployee(empForm: NgForm)
  // {
  //   console.log(empForm.value);
  // }
  saveEmployee(empModel: Employee) {
    debugger;
    // const empData = Object.assign({}, this.employee);
    if (empModel.id == null) {
      this.empServie.createEmployee(empModel).subscribe((data: Employee) => {
        console.log(data);
        this.createEmpForm.reset({
          name: 'Test',
          phoneNumber: '1111'
        });
        this.router.navigate(['list']);
      },
        (error: any) => { console.log(error); }
      );
    }
    else {
      this.empServie.updateEmployee(empModel);
    }

  }

  togglePhotoPreview() {
    this.isPhotoShow = !this.isPhotoShow;
  }

}
