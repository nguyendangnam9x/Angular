import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit{
    employee: Employee = new Employee();
    id: number;
    constructor(private route: ActivatedRoute,
                private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params["id"];
        this.employeeService.getEmployeeById(this.id).subscribe(data => {
            this.employee = data;
        }, error => console.log(error));
    }
}
