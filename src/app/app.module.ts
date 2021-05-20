import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlumnNewComponent } from './components/alumn-new/alumn-new.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserService } from 'src/app/services/user.services';
import { IdentityGuard } from './services/identity.guard';
import { AlumnsDataComponent } from './components/alumns-data/alumns-data.component';
import { ShowAlumnsComponent } from './components/show-alumns/show-alumns.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlumnNewComponent,
    HomeComponent,
    ErrorComponent,
    AlumnsDataComponent,
    ShowAlumnsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
