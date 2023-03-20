import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "name1", "age":25},
      {"id": 2, "name": "name2", "age":26},
      {"id": 3, "name": "name3", "age":27},
      {"id": 4, "name": "name4", "age":28},
      {"id": 5, "name": "name5", "age":29},
      {"id": 6, "name": "name5", "age":30}
    ];
  }
}