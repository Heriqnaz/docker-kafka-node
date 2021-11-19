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

    static async getEmployees() {
        return EmployeesModel.createQueryBuilder("employees")
            .select()
            .from(EmployeesModel, "Employees")
            .execute();
    }

    static async getEmployerById(id: number) {
        return EmployeesModel.createQueryBuilder("employees")
            .select()
            .where("employees.id = :id", { id })
            .getRawOne();
    }

    static async updateEmployerById(id: number) {
        return EmployeesModel.createQueryBuilder("employees")
            .update(EmployeesModel)
            .set({ firstName: "NewFirstName", lastName: "NewLastName" })
            .where("id = :id", { id })
            .execute();
    }

    static async deleteEmployerById(id: number) {
        return EmployeesModel.createQueryBuilder("employees")
            .delete()
            .from(EmployeesModel)
            .where("id = :id", { id })
            .execute();
    }
}
