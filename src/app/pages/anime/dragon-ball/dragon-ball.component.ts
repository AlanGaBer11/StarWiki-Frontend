import { Component } from '@angular/core';
import { RestServiceService } from '../../../services/rest-service.service';

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css'
})

export class DragonBallComponent {
  public listDragonBall: any[] = [];

  constructor( private rest: RestServiceService) { }

  ngOnInit(){
    this.CargaData(); 
  }

  CargaData() {
    this.rest.get('https://starwikibackend-dbg8hkhzf3cad2h3.eastus2-01.azurewebsites.net/api/v1/dragonball').subscribe((resultado: any) => {
      console.log(resultado);
      this.listDragonBall = resultado.items; 
    }, (error) => {
      console.error('Error al cargar los datos', error);
    });
  }
  
}
