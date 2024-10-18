import { Component } from '@angular/core';

@Component({
  selector: 'app-home-an',
  templateUrl: './home-an.component.html',
  styleUrl: './home-an.component.css'
})
export class HomeANComponent {

  public anime = [
    {
      nombre: 'Dragon Ball',
      imagen: 'https://ionicframework.com/docs/img/demos/card-media.png',
      link: '/dragon_ball'
    },
    {
      nombre: 'One Piece',
      imagen: 'https://ionicframework.com/docs/img/demos/card-media.png',
      link: '/one_piece'
    }
  ];
}
