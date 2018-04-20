import { BaseModel } from './base.model';

export class User extends BaseModel {
    public static readonly ROLE_STUDENT = 'Role[student]';
    public static readonly ROLE_PARENT  = 'Role[parent]';
    public static readonly ROLE_TEACHER = 'Role[teacher]';
    public static readonly ROLE_MODER   = 'Role[moder]';
    public static readonly ROLE_ADMIN   = 'Role[admin]';

    public static readonly STATUS_ACTIVE      = 1;
    public static readonly STATUS_UNCONFIRMED = -1;
    public static readonly STATUS_DELETED     = -99;
    public static readonly STATUS_DISABLED    = 0;

    public email: string;

    public name: string;
    public surname: string;
    public patronymic: string;

    public role: string;
    public status: number;

    public lastLoginAt: Date;


    public constructor (data: any) {
        super(data);

        this.email    = data.email;

        this.name       = data.name;
        this.surname    = data.surname;
        this.patronymic = data.patronymic;

        this.role   = data.role;
        this.status = data.status;

        this.lastLoginAt = data.lastLoginAt;
    }


    public isAdmin() {
        return (this.role === User.ROLE_ADMIN);
    }


    public isTeacher() {
        return (this.role === User.ROLE_TEACHER);
    }


    public isStudent() {
        return (this.role === User.ROLE_STUDENT);
    }


    public isActive () {
        return this.status === User.STATUS_ACTIVE;
    }


    public get fullName() {
        return `${this.name} ${this.surname} ${this.patronymic}`;
    }


    public get shortFullName() {
        const n = (this.name[0]).toUpperCase();
        const p = (this.patronymic[0]).toUpperCase();

        return `${this.surname} ${n}.${p}.`;
    }
}
