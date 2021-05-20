import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../services/global';
import { UserService } from 'src/app/services/user.services';
import { AlumnsService } from '../../services/alumns.service';

@Component({
  selector: 'consultar-alumno',
  templateUrl: './alumns-data.component.html',
  styleUrls: ['./alumns-data.component.css'],
  providers: [AlumnsService, UserService]
})
export class AlumnsDataComponent implements OnInit {

  public page_title;
  public url: string;
  public identity;
  public token;
  public alumn; 

  constructor(
    private _alumnsService: AlumnsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) { 
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.getAlumnById();
  }

  getAlumnById(){
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        if(id) {
          this._alumnsService.getAlumn(id).subscribe(
            response => {
              if(response.status == 'success'){
                this.alumn = response.alumn;
              }
            },
            error => { console.log(error) }
          );
        }
      }
    );
  }

}
