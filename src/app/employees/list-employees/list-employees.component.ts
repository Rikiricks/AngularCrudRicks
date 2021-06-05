import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee-service/employee-service.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit, OnChanges {
  employees: Employee[];
  currentEmp: Employee;
  filteredEmployees: Employee[];
  private SearchTerm: string;
  errorMsj: string;

  get searchTerm() {
    return this.SearchTerm;
  }
  set searchTerm(value: string) {
    this.SearchTerm = value;
    this.filteredEmployees = this.employees.filter(a => a.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
  }

  // const emps = [
  //   {
  //     id: 1,
  //     name: 'Archie',
  //     gender: 'Male',
  //     email: 'arch@gmail.com',
  //     phoneNumber: 9033399985,
  //     contactPref: 'bother',
  //     dob: new Date(),
  //     department: 'DotNet',
  //     isActive: true,
  //     photoPath: 'assets/images/u2.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'ronni',
  //     gender: 'Male',
  //     email: 'arch@gmail.com',
  //     phoneNumber: 9033399985,
  //     contactPref: 'bother',
  //     dob: new Date(),
  //     department: 'DotNet',
  //     isActive: true,
  //     photoPath: 'assets/images/u1.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'Kevin',
  //     gender: 'Male',
  //     email: 'arch@gmail.com',
  //     phoneNumber: 9033399985,
  //     contactPref: 'bother',
  //     dob: new Date(),
  //     department: 'DotNet',
  //     isActive: true,
  //     photoPath: 'assets/images/u3.png',
  //   }
  // ];
  employeeToDisplay: Employee;
  empIndex = 1;
  constructor(private employeeService: EmployeeService, private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    const resolvedData: Employee[] | string = this.activatedRoute.snapshot.data.employeeList;

    if (Array.isArray(resolvedData)) {
      this.employees = resolvedData;
      this.employeeToDisplay = this.employees[0];
      this.filteredEmployees = this.employees;
    }
    else {
      this.errorMsj = resolvedData;
    }


    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      if (queryParam.has('searchTerm')) {
        this.searchTerm = queryParam.get('searchTerm');
      }
    });

    // Observable retrieve ---//
    // this.employeeService.getEmpList().subscribe((empList) =>{
    //   this.employees = empList;
    //   this.employeeToDisplay = this.employees[0];
    //   this.filteredEmployees = this.employees;

    //   this.activatedRoute.queryParamMap.subscribe(queryParam => {
    //     if (queryParam.has('searchTerm')){
    //     this.searchTerm = queryParam.get('searchTerm');
    //     }
    //   });
    // } );

    // if (this.activatedRoute.snapshot.queryParamMap.has('searchTerm'))
    // {
    //  this.searchTerm = this.activatedRoute.snapshot.queryParamMap.get('searchTerm');
    // }


    console.log(this.activatedRoute.snapshot.queryParamMap.has('searchTerm'));
    console.log(this.activatedRoute.snapshot.queryParamMap.get('searchTerm'));
    console.log(this.activatedRoute.snapshot.queryParamMap.getAll('searchTerm'));
    console.log(this.activatedRoute.snapshot.queryParamMap.keys);
    console.log(this.activatedRoute.snapshot.paramMap.keys);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('riki');
  }
  nextEmployee() {
    if (this.empIndex <= 2) {
      this.employeeToDisplay = this.employees[this.empIndex];
      this.empIndex++;
    }
    else {
      this.employeeToDisplay = this.employees[0];
      this.empIndex = 1;
    }
  }
  handleNotify(event: Employee) {
    this.currentEmp = event;
  }
  employeeDetail(empId: number) {
    this.router.navigate(['/employee', empId],
      {
        queryParams: { searchTerm: this.searchTerm, testParam: 'testParam' }
      });
  }
  chnageEmpName() {
    // this.employees[0].name = 'Klaus'; // Impure change..pipe

    const empData = Object.assign([], this.employees);
    empData[0].name = 'Klaus';
    this.employees = empData; // Pure change..pipe
  }

  onDeletion(id: number) {
    const i = this.filteredEmployees.findIndex(a => a.id === id);
    if (i > 0) {
      this.filteredEmployees.splice(i, 1);
    }
  }

}
