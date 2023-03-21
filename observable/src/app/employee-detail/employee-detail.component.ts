import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
      <li>name: {{employee.name}}  age:   {{employee.age}} </li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees: Array<any>  = []
  constructor(private _EmployeeService: EmployeeService){}
  ngOnInit(): void {
    this._EmployeeService.getEmployees()
    .subscribe(data => this.employees =  data)
  }
}
