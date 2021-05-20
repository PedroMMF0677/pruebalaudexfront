//Imports necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importar componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlumnNewComponent } from './components/alumn-new/alumn-new.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnsDataComponent } from './components/alumns-data/alumns-data.component';
import { ShowAlumnsComponent } from './components/show-alumns/show-alumns.component';
import { IdentityGuard } from './services/identity.guard';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'inicio', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'logout/:sure', component: LoginComponent },
    {path: 'registro', component: RegisterComponent },
    {path: 'mostrar-alumnos', component:ShowAlumnsComponent, canActivate: [IdentityGuard]},
    {path: 'crear-alumno', component:AlumnNewComponent, canActivate: [IdentityGuard] },
    {path: 'consultar-alumno/:id', component:AlumnsDataComponent, canActivate: [IdentityGuard] },    
    {path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);