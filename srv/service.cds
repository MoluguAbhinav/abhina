using company as db from '../db/data';
service EmployeeService {
 entity Employees as projection on db.Employees;
}