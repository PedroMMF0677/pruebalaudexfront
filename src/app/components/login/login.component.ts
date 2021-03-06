import { Component, OnInit } from '@angular/core';
import { user } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.services';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {

  public page_title: string;
  public user: user; 
  public status: string;
  public token;
  public identity; 

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { 
    this.page_title = 'Identificate'; 
    this.user = new user(1, '', '', 'ROLE_USER', '', '', '', '');    
  }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(form){
    
    this._userService.signup(this.user).subscribe(
      response => {                
        if(response.status != 'error'){
          this.status = 'success';
          this.token = response;
          this._userService.signup(this.user, true).subscribe(
            response => {               
              this.identity = response;              
              //persistir los datos de la persona logeada
              localStorage.setItem('token', this.token);
              //tenemos que convertir el arreglo a jsonstring para poder almacenarlo en local storage
              localStorage.setItem('identity', JSON.stringify(this.identity));
              form.reset(); 

              //hacemos una redireccion al inicio 
              this._router.navigate(['inicio']);
            },
            error => {
              this.status = 'error';
              console.log(<any>error);
            }
          )
        } else {
          this.status = response.status;          
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    )
  }

  logout(){
    this._route.params.subscribe(params => {
      let logout = +params['sure'];

      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        //redireccion a inicio 
        this._router.navigate(['inicio']);
      }
    })
  }

}
