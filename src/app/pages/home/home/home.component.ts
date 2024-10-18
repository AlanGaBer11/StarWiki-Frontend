import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public cards = [
    { titulo: 'Star Wars', class: 'card-st', link: "/cronologia" },
    { titulo: 'Videojuegos', class: 'card-vd', link: "/videojuegos" },
    { titulo: 'Anime', class: 'card-anime', link: "/anime" },
  ];
}
