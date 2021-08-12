import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeAPIService } from '../services/employee-api.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  param: string = '';

  constructor(private route: ActivatedRoute, private service: EmployeeAPIService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.param = params['id']; this.currentEmployee = this.service.getEmployeeById(parseInt(this.param));});
  }

  currentEmployee: any = {};

}
