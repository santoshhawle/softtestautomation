import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "../student/student.component";

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes'},
    {path:'recipes', component:StudentComponent}];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
