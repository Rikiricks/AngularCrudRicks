import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { Injectable } from '@angular/core';
import { isDateValid } from 'ngx-bootstrap/chronos/public_api';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean {
        if (component.createEmpForm.dirty) {

            const isReload = confirm('Are you sure?');
            if (isReload) {
                component.createEmpForm.reset();
            }
            return isReload;
        }
        return true;
    }

}
