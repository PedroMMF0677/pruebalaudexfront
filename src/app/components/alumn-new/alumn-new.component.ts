import { Component } from '@angular/core';
import { alumns } from '../../models/alumns';
import { AlumnsService } from '../../services/alumns.service';
import { UserService } from 'src/app/services/user.services'; 
import { global } from '../../services/global';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'crear-alumno',
  templateUrl: './alumn-new.component.html',
  styleUrls: ['./alumn-new.component.css'],
  providers: [UserService, AlumnsService]
})
export class AlumnNewComponent {
  public page_title: string;
  public alumn: alumns;
  public status: string;
  public identity;
  public token;
  public url;

  public formSubmitted = false;
  public registerForm = this.fb.group({
    Name: ['', [Validators.required, Validators.minLength(3)]],
    LastName: ['', [Validators.required, Validators.minLength(3)]],
    SecondLastname: ['', [Validators.required, Validators.minLength(3)]],
    Birthday: ['', Validators.required],
    Gender: ['', Validators.required],
    StudyLevel: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Phone: ['', Validators.required]
  }

  );

  constructor(
    private _alumnService: AlumnsService,
    private _userService: UserService,
    private fb: FormBuilder
  ) { 
    this.page_title = "Registrar Alumno";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
  }

  crearAlumn(){
    this.formSubmitted = true;    
    if(this.registerForm.invalid){
      return;
    }
    //realizamos el posteo
    this._alumnService.crearAlumno(this.registerForm.value, this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';   
          this.registerForm.reset();                          
        } else {
          this.status = 'error';
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
