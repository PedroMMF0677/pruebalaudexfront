import { Component, OnInit } from '@angular/core';
import { user } from '../../models/user';
import { UserService } from 'src/app/services/user.services';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent {
  public page_title: string;
  public user: user;
  public status: string;

  public formSubmitted = false;
  public registerForm = this.fb.group({
    Name: ['', [Validators.required, Validators.minLength(3)]],
    Surname: ['', [Validators.required, Validators.minLength(3)]],            
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(3)]]
  }

  );

  constructor(
    private _userService: UserService,
    private fb: FormBuilder
  ) { 
    this.page_title = 'Registrate'; 
  }

  crearUsuario(){  
    this.formSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }      
    this._userService.register(this.registerForm.value).subscribe(
      response => {
        this.status = response.status;
        if(this.status == "success"){
          //limpiar el formulario
          this.registerForm.reset();
        }
      },
      error => {
        this.status = 'error';
      }
    );    
  }

  campoNoValido( campo: string ): boolean {    

    if(this.registerForm.get(campo).invalid && this.formSubmitted ){
      return true;
    } else {
      return false;
    }
  }
}
