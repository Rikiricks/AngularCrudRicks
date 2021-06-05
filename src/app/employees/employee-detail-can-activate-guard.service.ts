import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee-service/employee-service.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeDetailCanActivateGuardService implements CanActivate {
    constructor(private empService: EmployeeService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        // const isEmpExits = !!this.empService.getEmpById(+route.paramMap.get('id'));
        return this.empService.getEmpById(+route.paramMap.get('id')).pipe(
            map(employee => {
                const isEmpExits = !!employee;

                if (isEmpExits) {
                    return true;
                }
                else {
                    this.router.navigate(['notfound']);
                    return false;
                }
            })
        );


    }
}

