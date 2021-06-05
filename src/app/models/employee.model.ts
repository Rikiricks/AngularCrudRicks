export class Employee{
    id: number;
    name: string;
    password?: string;
    pwdConfirm?: string;
    gender: string;
    email?: string;
    phoneNumber?: number;
    contactPref: string;
    dob: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;
}
