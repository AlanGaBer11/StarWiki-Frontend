import { Component } from '@angular/core';

@Component({
  selector: 'app-home-vd',
  templateUrl: './home-vd.component.html',
  styleUrl: './home-vd.component.css'
})
export class HomeVDComponent {

  public consolas = [
    {
      nombre: 'Xbox',
      descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut odit fugit, sed quia consequuntur magni dolores eos qui ratione voloptatem sequi nesciunt,',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Xbox_logo_%282019%29.svg',
      link: '/xbox'
    },
    {
      nombre: 'PlayStation',
      descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut odit fugit, sed quia consequuntur magni dolores eos qui ratione voloptatem sequi nesciunt,',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png',
      link: '/play_station'
    },
    {
      nombre: 'Nintendo',
      descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut odit fugit, sed quia consequuntur magni dolores eos qui ratione voloptatem sequi nesciunt,',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/2560px-Nintendo.svg.png',
      link: '/nintendo'
    },
  ];
}
