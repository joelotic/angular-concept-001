import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { IEmployee } from './employee';
import {Observable,NotFoundError,throwError,of, from } from 'rxjs';
import { catchError, map,retry } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
//  import { AppError } from '../common/app-error';
//  import {NotFoundError} from 'rxjs/dist/cjs/internal/util';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService   {

  private _url: string =  '/xassets/data/employees1.json'

  constructor(private http: HttpClient) {}

  srcArray = from([1, 2, "A", 4]);

  // obs = this.srcArray.pipe(
  //   map(val => {
  //     let result = (val as number) * 2;
  //     if (Number.isNaN(result)) {
  //       console.log("Errors Occurred in Stream");
  //       throw new Error("Result is NaN");
  //     }
  //     return result;
  //   }),
  //   catchError(error => {
  //     console.log("Caught in CatchError. Throwing error");
  //     return throwError(error);
  //   })
  // );

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    .pipe(    catchError(error => {
      console.log("Caught in CatchError. Throwing error");
      return throwError(() => new Error(error));
    }))


    // (
    //   catchError(err => err.code === 404
    //     ? throwError("Not found")
    //     : throwError(err)
    //   )
    // )

    // (
    //   catchError((error: Response) => {
    //     if (error.status === 404)
    //     console.log('Caught in CatchError. Throwing error')
    //   })
    // );
    // (
    //   catchError((error: HttpErrorResponse) =>{
    //      return throwError(error.message || 'server error');
    //    })
    //   )


  }

  // import {
  //   Observable,
  //   of,
  //   pipe,
  //   from,
  //   throwError,
  //   concat,
  //   onErrorResumeNext
  // } from "rxjs";
  // import {
  //   map,
  //   filter,
  //   tap,
  //   catchError,
  //   switchMap,
  //   retry,
  //   take,
  //   skip
  // } from "rxjs/operators";

}
