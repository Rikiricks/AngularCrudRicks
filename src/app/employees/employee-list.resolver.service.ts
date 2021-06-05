import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee-service/employee-service.component';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string>{

    constructor(private empService: EmployeeService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
        return this.empService.getEmpList()
            .pipe(catchError((error: string) => of(error)));
    }

}
