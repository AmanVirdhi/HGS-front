import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from 'src/auth-guard/auth.guard';
import { HgsTypesComponent } from './hgs-types/hgs-types.component';
import { GrievanceListComponent } from './grievance-list/grievance-list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[authGuard] },
  { path: 'types', component: HgsTypesComponent, canActivate:[authGuard] },
  { path: 'grievanceList', component: GrievanceListComponent, canActivate:[authGuard]},
  { path: 'updateList/:id', component: EditComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
