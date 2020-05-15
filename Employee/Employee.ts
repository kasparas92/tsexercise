import { EmployeeService } from './EmployeeService';

let e = new EmployeeService();
e.getEmployees();
e.addEmoloyee('Kasparas', 'SE', 'SE', 'Male');
e.deleteEmployee(3);
console.log(e.getEmployeesbyId(2));
e.updateEmployee(2, 'Peter');
console.log(e.emp);
