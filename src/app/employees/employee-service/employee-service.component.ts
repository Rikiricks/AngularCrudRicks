import { Component, OnInit, Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Observable, of, throwError, observable } from 'rxjs';
import { delay, retry, catchError } from 'rxjs/operators';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee-service',
  templateUrl: './employee-service.component.html',
  styleUrls: ['./employee-service.component.css']
})

@Injectable()
// tslint:disable-next-line: component-class-suffix
export class EmployeeService implements OnInit {

  empList: Employee[] = [
    {
      id: 1,
      name: 'Archie',
      gender: 'Male',
      email: 'arch@gmail.com',
      phoneNumber: 9033399985,
      contactPref: 'Email',
      dob: new Date(),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/u2.jpg'
    },
    {
      id: 2,
      name: 'ronni',
      gender: 'Female',
      email: 'ronni@gmail.com',
      phoneNumber: 9033399985,
      contactPref: 'Email',
      dob: new Date(),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/u1.png'
    },
    {
      id: 3,
      name: 'Kevin',
      gender: 'Male',
      email: 'arch@gmail.com',
      phoneNumber: 9033399985,
      contactPref: 'Phone',
      dob: new Date(),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/u3.png',
    }
  ];

  baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getEmpList(): Observable<Employee[]> {
    // return of(this.empList).pipe(delay(2000));

    return this.http.get<Employee[]>(this.baseUrl)
      .pipe(retry(1), catchError(this.handleError));

  }
  handleError(error) {
    let errorMsj = '';
    if (error.error instanceof ErrorEvent) {
      errorMsj = 'Client side error: ' + error.error.message;
    }
    else {
      errorMsj =   `Error code: ${error.status} \nMessage: ${error.message}`;
    }
    console.log(errorMsj);
    return throwError(errorMsj);
  }


  createEmployee(employee: Employee): Observable<Employee> {
    if (employee.id === null) {
      return this.http.post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
      // const maxId = this.empList.reduce((e1, e2) => {
      //   return e1.id > e2.id ? e1 : e2;
      // }).id;

      // employee.id = maxId + 1;
      // this.empList.push(employee);
    }
    else {
      const employeeIndex = this.empList.findIndex(a => a.id === employee.id);
      this.empList[employeeIndex] = employee;
    }
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
  
  getEmpById(id: number): Observable<Employee> {
    // return this.empList.find(a => a.id === id);
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteEmpById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
    // const i = this.empList.findIndex(a => a.id === id);
    // if (id > 0) {
    //   this.empList.splice(i, 1);
    // }
  }

}
