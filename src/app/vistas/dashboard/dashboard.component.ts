import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListPlayers } from '../../modelos/listplayers.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  players:ListPlayers[];

  constructor(private api: ApiService, private router: Router) {}

  
  ngOnInit(): void {
    this.api.getAllPlayers().subscribe(data => {
      console.log(data['players']);
      this.players = data['players'];
    })
  }

  entrar(){
    this.router.navigate(['nuevo']);
  }

}
