import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "name1" , "age": 30},
      {"id": 2, "name": "name2" , "age": 32},
      {"id": 3, "name": "name3" , "age": 34},
      {"id": 4, "name": "name4" , "age": 36}
    ];
  }
}
