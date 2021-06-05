import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee-service/employee-service.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  emp: Employee;
  empId: number;
  constructor(private activatedRoute: ActivatedRoute, private empServie: EmployeeService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.empId = +params.get('id');
      this.empServie.getEmpById(this.empId).subscribe(employee => {
        this.emp = employee;
      },
        (err: any) => { console.log(err); }
      );
    });


    console.log(this.activatedRoute.snapshot.queryParamMap.has('searchTerm'));
    console.log(this.activatedRoute.snapshot.queryParamMap.get('searchTerm'));
    console.log(this.activatedRoute.snapshot.queryParamMap.getAll('searchTerm'));
    console.log(this.activatedRoute.snapshot.queryParamMap.keys);
    console.log(this.activatedRoute.snapshot.paramMap.keys);

  }
  viewNextEmployee() {
    if (this.empId < 3) {
      this.empId++;
    }
    else {
      this.empId = 1;
    }
    this.router.navigate(['/employee', this.empId]);
  }
}
