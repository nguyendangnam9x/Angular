import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {DetailEmployeeComponent} from "./detail-employee/detail-employee.component";

const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'create-employee', component: CreateEmployeeComponent },
    { path: 'update-employee/:id', component: UpdateEmployeeComponent },
    { path: 'detail-employee/:id', component: DetailEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
