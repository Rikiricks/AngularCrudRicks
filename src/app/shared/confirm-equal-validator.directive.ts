import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})

export class ConfirmEqualValidatorDirective implements Validator {
    @Input()
    appConfirmEqualValidator: string;

    validate(passwordGrp: AbstractControl): { [key: string]: any } | null {
        const pwd = passwordGrp.parent.get('password')?.value;
        const pwdC = passwordGrp.parent.get('pwdConfirm')?.value;
        if (pwd && pwdC && pwd !== pwdC){
            return { notEqual: true };
        }
        return null;
    }
}
// export class ConfirmEqualValidatorDirective implements Validator {
//     @Input()
//     appConfirmEqualValidator: string;

//     validate(control: AbstractControl): { [key: string]: any } | null {
//         const compareField = control.parent.get(this.appConfirmEqualValidator).value;
//         if (compareField && control.value !== compareField){
//             return { notEqual: true };
//         }
//         return null;
//     }
// }

