import { Component, OnInit, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-service/employee-service.component';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  private _employee: Employee;
  selectedId: number;
  isHidden = false;
  @Input()
  set emp(val: Employee) {
    this._employee = val;
    console.log("Previous: " + this._employee?.name);
    console.log("Current: " + val.name);
  }
  get emp() {
    return this._employee;
  }

  @Input()
  searchTerm: string;

  @Input()
  empId: Employee;

  @Output()
  notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  @Output()
  notifyDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private activeRoute: ActivatedRoute, private router: Router,
              private empService: EmployeeService) {

  }

  ngOnInit(): void {
    this.selectedId = +this.activeRoute.snapshot.paramMap.get('id');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const change of Object.keys(changes)) {
      // console.log('Changes:' + JSON.stringify(change));
      const oldEmp = changes[change].previousValue;
      const newEmp = changes[change].currentValue;
      console.log(`Changes from ${JSON.stringify(oldEmp)} to ${JSON.stringify(newEmp)}`);
    }

    // const prev = <Employee>changes.emp.previousValue;
    // const curr = <Employee>changes.emp.currentValue;
    // console.log("Previous: "+ prev?.name);
    // console.log("Current: "+ curr.name);
  }
  handleClick() {
    return this.notify.emit(this.emp);
  }
  getNumber() {
    return this.emp.phoneNumber;
  }

  viewEmployee() {
    this.router.navigate(['employee', this.emp.id], {
      queryParams: { searchTerm: this.searchTerm, }
    });
  }
  editEmployee() {
    this.router.navigate(['edit', this.emp.id]);
  }

  deleteEmployee() {
    this.empService.deleteEmpById(this.emp.id);
    // this.notifyDelete.emit(this.emp.id);
  }

}
