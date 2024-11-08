import { Component } from '@angular/core';
import { RestServiceService } from '../../../services/rest-service.service';

@Component({
  selector: 'app-one-piece',
  templateUrl: './one-piece.component.html',
  styleUrl: './one-piece.component.css'
})
export class OnePieceComponent {
  public listOnePiece: any[] = [];

  constructor(private rest: RestServiceService) { }

  ngOnInit() {
    this.CargaData();
  }

  CargaData() {
    this.rest.get('https://starwikibackend-dbg8hkhzf3cad2h3.eastus2-01.azurewebsites.net/api/v1/onepiece').subscribe((resultado: any) => {
      console.log(resultado);
      this.listOnePiece = resultado;
    }, (error) => {
      console.error('Error al cargar los datos', error);
    });
  }

}
