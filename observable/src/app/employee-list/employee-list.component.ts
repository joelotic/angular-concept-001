import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List Observable
      <ul *ngFor="let employee of employees" >
        <li>{{employee.name}}</li>
      </ul>
  </h2>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees: Array<any> = []

  constructor(private _employeeService: EmployeeService  ){}
  ngOnInit(): void {
      this._employeeService.getEmployees()
          .subscribe(data => this.employees = data)
  }
}
