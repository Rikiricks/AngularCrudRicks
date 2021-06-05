import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name : 'employeeFilter',
    pure: true
})

export class  EmployeeFilterPipe implements PipeTransform{
    transform(data: Employee[], searchValue: string ) : Employee[] {
        if (!data || !searchValue)
        {
            return data;
        }
        return data.filter(a => a.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
    }

}
