import { Component, OnInit } from '@angular/core';
import { Player } from '../../modelos/player.interface'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    name: new FormControl(''),
    posicion: new FormControl(''),
    age: new FormControl('')
  });

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form:Player){
    this.api.postPlayer(form).subscribe(data => {
      console.log(data);
    })
  };

  salir(){
    this.router.navigate(['dashboard']);
  };


}
