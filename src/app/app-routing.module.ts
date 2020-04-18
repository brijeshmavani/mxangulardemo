import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeserviceComponent } from './homeservice/homeservice.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/:id/:name', component: HomeComponent },
  { path: 'service', component: HomeserviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
