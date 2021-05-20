import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { global } from './global';


@Injectable()
export class AlumnsService {
    public url: string;
    public identity;
    public token;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    crearAlumno( formData: any, token): Observable<any>{            
        let params = 'json='+JSON.stringify(formData);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

        return this._http.post(`${this.url}alumns`, params, {headers: headers});
    }

    getAlumn(id):Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form.urlencoded');
        return this._http.get(`${this.url}alumns/${id}`, {headers: headers});
    }
    
    getAlumns():Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form.urlencoded');
        return this._http.get(`${this.url}alumns`, {headers: headers});
    }

    register(token, alumn): Observable<any>{
        let json = JSON.stringify(alumn);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + 'register', params, {headers: headers});
    }
}