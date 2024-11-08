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
      imagen: 'https://imagenes.multimediostv.com/files/main_image/uploads/2020/02/19/64f2f5f2a9105.jpeg',
      link: '/dragon_ball'
    },
    {
      nombre: 'One Piece',
      imagen: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg',
      link: '/one_piece'
    }
  ];
}
