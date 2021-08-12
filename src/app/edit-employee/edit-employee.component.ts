import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeAPIService } from '../services/employee-api.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  myForm: FormGroup = new FormGroup(
    {
      'id': new FormControl(null, Validators.required),
      'first': new FormControl(null, Validators.required),
      'last': new FormControl(null, Validators.required),
      'salary': new FormControl(null, Validators.required),
      'department': new FormControl(null, Validators.required)
    }
  );

  private employeeId: number = -1;
  constructor(private service: EmployeeAPIService, private activatedRoute: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {this.employeeId = params['id']; });
    let emp = this.service.getEmployeeById(this.employeeId);
    console.log(emp);
    this.myForm = new FormGroup(
      {
        'id': new FormControl(emp.id, Validators.required),
        'first': new FormControl(emp.first, Validators.required),
        'last': new FormControl(emp.last, Validators.required),
        'salary': new FormControl(emp.salary, [Validators.required, Validators.min(10000)]),
        'department': new FormControl(emp.department, Validators.required)
      }
    );
  }

  onSubmit(){
    console.log(this.myForm.value);
    let emp = {
      id: this.myForm.value.id,
      first: this.myForm.value.first,
      last: this.myForm.value.last,
      salary: this.myForm.value.salary,
      department: this.myForm.value.department
    }
    this.service.updateEmployee(emp, emp.id);
    this.router.navigate(['/employees']);
  }

}
