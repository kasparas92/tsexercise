import { IEmployee } from './IEmployee';

export class EmployeeService {
  emp: IEmployee[];
  details: any[];

  public getEmployees() {
    this.emp = [
      {
        id: 1,
        name: 'Mayura',
        designation: 'Trainer',
        department: 'Soft Eng',
        Gender: 'Female',
      },

      {
        id: 2,
        name: 'Sam',
        designation: 'HR Manager',
        department: 'Human Resource',
        Gender: 'Male',
      },
      {
        id: 3,
        name: 'James',
        designation: 'Escalation Manager',
        department: 'Support',
        Gender: 'Male',
      },
      {
        id: 4,
        name: 'Smitha',
        designation: 'Data Testing Engineer',
        department: 'DTS',
        Gender: 'Female',
      },
      {
        id: 5,
        name: 'Swathi',
        designation: 'Tech Lead',
        department: 'Soft Eng',
        Gender: 'Female',
      },
    ];

    return this.emp;
  }

  public getEmployeesbyId(id: number): any {
    this.details = this.emp.filter((e) => e.id === id);
    return this.details;
  }

  public getEmployeeCount(): number {
    return this.emp.length;
  }

  public getFemaleEmployeeCount(): number {
    return this.emp.filter((x) => x.Gender == 'Female').length;
  }

  public addEmoloyee(name: string, designation: string, department: string, gender: string): void {
    let maxId = Math.max(...this.emp.map((e) => e.id));
    let newEmp = { id: maxId + 1, name: name, designation: designation, department: department, Gender: gender };
    this.emp.push(newEmp);
  }

  public deleteEmployee(id: number): void {
    let delEmp = this.emp.filter((x) => x.id == id)[0];
    let del = this.emp.indexOf(delEmp);
    this.emp.splice(del, 1);
  }

  public updateEmployee(id: number, name?: string, designation?: string, department?: string, gender?: string): void {
    let updEmp = this.emp.filter((x) => x.id == id)[0];
    let index = this.emp.indexOf(updEmp);
    if (name) {
      updEmp.name = name;
    }
    if (designation) {
      updEmp.designation = designation;
    }
    if (department) {
      updEmp.department = department;
    }
    if (gender) {
      updEmp.Gender = gender;
    }
    this.emp[index] = updEmp;
  }
}
