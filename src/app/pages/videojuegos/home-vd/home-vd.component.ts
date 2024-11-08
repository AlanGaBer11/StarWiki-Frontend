import { Component } from '@angular/core';

@Component({
  selector: 'app-home-vd',
  templateUrl: './home-vd.component.html',
  styleUrls: ['./home-vd.component.css']
})
export class HomeVDComponent {

  public consolas = [
    {
      nombre: 'Xbox',
      descripcion: 'Descubre la potencia y los exclusivos que definen a Xbox. ¿Estás listo para unirte a la batalla? Haz clic y explora.',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Xbox_logo_%282019%29.svg',
      link: '/xbox'
    },
    {
      nombre: 'PlayStation',
      descripcion: 'Explora mundos asombrosos y vive historias épicas. ¿Te atreves a enfrentar los desafíos de PlayStation?',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png',
      link: '/play_station'
    },
    {
      nombre: 'Nintendo',
      descripcion: 'Diversión para toda la familia con los juegos más innovadores. ¿Qué aventuras te esperan en Nintendo? Descúbrelo aquí.',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/2560px-Nintendo.svg.png',
      link: '/nintendo'
    },
  ];
}
