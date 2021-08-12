import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private employeeSubject = new Subject<any[]>();
  constructor() { }

  public getEmployees(): Observable<any[]>{
    return this.employeeSubject.asObservable();
  }

  public updateEmployees(list: any[]): void{
    this.employeeSubject.next(list);
  }
}
