import { Component, OnInit } from '@angular/core';
import { global } from '../../services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  public page_title: string;
  public url;
  public identity;
  public token;

  constructor(
    private _userService: UserService
  ) {
    this.page_title = 'Inicio'; 
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
  }

}
