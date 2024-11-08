import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public cards = [
    { titulo: 'Star Wars', class: 'card-st', link: '/cronologia', videoLink:'assets/video/st.mov' },
    { titulo: 'Videojuegos', class: 'card-vd', link: '/videojuegos', videoLink:'assets/video/vd.mp4'  },
    { titulo: 'Anime', class: 'card-anime', link: '/anime', videoLink:'assets/video/an.mp4'  },
  ];
}
