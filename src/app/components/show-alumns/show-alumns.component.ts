import { Component, OnInit } from '@angular/core';
import { AlumnsService } from '../../services/alumns.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-alumns',
  templateUrl: './show-alumns.component.html',
  styleUrls: ['./show-alumns.component.css'],
  providers: [AlumnsService]
})
export class ShowAlumnsComponent implements OnInit {
  public alumns;
  public status;
  
  constructor(
    private _alumnsService: AlumnsService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {

   }

  ngOnInit(): void {
    this.getAlumns();
  }
  
  getAlumns(){
    this._alumnsService.getAlumns().subscribe(
      response => {        
        if(response.status == 'success'){
          this.status = 'success';
          this.alumns = response.alumns;
        } else {
          this.status = 'error';
        }
      }, error => { console.log(error);}
    );
  }
}
