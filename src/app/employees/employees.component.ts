import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { EmployeeAPIService } from '../services/employee-api.service';
import { EmployeeService } from '../services/employee.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: any[] = [];
  public subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router, private service: EmployeeAPIService, private authService: AuthService, private sharedService: SharedService) { }
  param: string = '';

  ngOnInit(): void {
    this.service.getEmployees();
    this.subscription = this.sharedService.getEmployees().subscribe(
      (data) => {this.employees = data}
    );
    this.route.params.subscribe(params => {this.param = params['id']; });
    // this.service.getEmployees().subscribe(
    //   (data) => {this.employees = data;},
    //   (error) => {console.log(error);},
    //   () => {console.log("Completed")}
    // );
    // this.service.bindEmployees().subscribe(
    //   (data) => {this.employees = data;},
    //   (error) => {console.log(error);},
    //   () => {console.log("Completed");}
    // )
  }

  getUsername(){
    return this.authService.getUsername();
  }


  showAddEmployee(){
    this.router.navigate(['/addemployee']);
  }

  deleteEmployee(id: number){
    this.service.deleteEmployee(id);
    // let currentUrl = this.router.url;
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate([currentUrl]);
  }

  editEmployee(emp: any, id: number){
    //this.service.updateEmployee(emp, id);
    //this.router.navigate(['/employees']);
  }

  showEditEmployee(emp: any){
    this.router.navigate(['/editemployee', emp.id]);
  }

}
