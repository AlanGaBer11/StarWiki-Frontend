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
      imagen: 'https://ionicframework.com/docs/img/demos/card-media.png',
      link: '/xbox'
    },
    {
      nombre: 'PlayStation',
      descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut odit fugit, sed quia consequuntur magni dolores eos qui ratione voloptatem sequi nesciunt,',
      imagen: 'https://ionicframework.com/docs/img/demos/card-media.png',
      link: '/play_station'
    },
    {
      nombre: 'Nintendo',
      descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut odit fugit, sed quia consequuntur magni dolores eos qui ratione voloptatem sequi nesciunt,',
      imagen: 'https://ionicframework.com/docs/img/demos/card-media.png',
      link: '/nintendo'
    },
  ];
}
