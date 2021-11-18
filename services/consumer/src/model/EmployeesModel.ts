import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {Employees} from "../../type";

@Entity({ name: "employees" })
export class EmployeesModel extends BaseEntity  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    jobTitleName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    preferredFullName: string;

    @Column()
    employeeCode: string;

    @Column()
    region: string;

    @Column()
    phoneNumber: string;

    @Column()
    emailAddress: string;


    static async setEmployees(employeesData: Employees[]) {
        return EmployeesModel.createQueryBuilder("employees")
            .insert()
            .into(EmployeesModel)
            .values(employeesData)
            .execute();
    }
}
