import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeAPIService } from '../services/employee-api.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  myForm: FormGroup = new FormGroup(
    {
      'id': new FormControl(null),
      'first': new FormControl(null, Validators.required),
      'last': new FormControl(null, Validators.required),
      'salary': new FormControl(null, [Validators.min(10000), Validators.required]),
      'department': new FormControl(null, Validators.required)
    }
  );
  constructor(private service: EmployeeAPIService, private router: Router) { }

  ngOnInit(): void {
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
    this.service.saveEmployee(emp);
    this.router.navigate(['/employees']);
  }

}
