import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {MainComponent} from './main/main.component';
 
const routes: Routes = [
  {path:'', component:CoursesComponent},
  {path:'course', component:MainComponent},
  {path:'course1', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent];
