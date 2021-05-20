import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.services';


@Injectable()
export class IdentityGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _userService: UserService
    ){

    }

    canActivate(){

        let identity = this._userService.getIdentity();

        if(identity){
            return true;
        } else {
            this._router.navigate(['/error']);
            return false;
        }       
    }
}