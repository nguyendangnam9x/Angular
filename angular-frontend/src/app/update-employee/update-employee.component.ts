import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivePerfRecorder} from "@angular/compiler-cli/src/ngtsc/perf";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
    employee: Employee = new Employee();
    id: number;
    constructor(private employeeService: EmployeeService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.employeeService.getEmployeeById(this.id).subscribe(data => {
            this.employee = data;
        },
            error => console.log(error));
    }

    updateEmployee() {
        this.employeeService.updateEmployee(this.id, this.employee)
            .subscribe(data => {
                console.log(data);
                // Clear value after update employee
                this.employee = new Employee();
                this.goToList();
            },
        error => console.log(error));
    }

    onSubmit() {
        this.updateEmployee();
    }

    goToList() {
        this.router.navigate(["/employees"])
    }
}
