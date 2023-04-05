import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ButtonsComponent } from './core/components/buttons/buttons.component';
import { CreateProjectComponent } from './modules/components/create-project/create-project.component';
import { DashboardContentComponent } from './modules/components/dashboard-content/dashboard-content.component';
import { ResourceSectionComponent } from './modules/components/resource-section/resource-section.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
   
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path:"login",
      component:LoginComponent

      //path:"",
      //component:LoginComponent
  
    },
    {
      path:"home/:email",
      component:  DashboardComponent,
       canActivate: [AuthGuard] ,
    
    children: [
      {
        path:"create-project",
        component:   CreateProjectComponent, 
      },
      {
        path:"dashboard",
        component:  DashboardContentComponent
      },
      {
        path:"find-resource",
        component: ResourceSectionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
