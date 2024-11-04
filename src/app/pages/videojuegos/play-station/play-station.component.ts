import { Component } from '@angular/core';

@Component({
  selector: 'app-play-station',
  templateUrl: './play-station.component.html',
  styleUrl: './play-station.component.css'
})
export class PlayStationComponent {

  public juegosPopulares = [
    {
      imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/ca6Dr3k7PXKaDgEbhN9eODeD.png',
      juego: 'The Last of Us Part I',
    },
    {
      imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/b3iB2zf2xHj9shC0XDTULxND.png',
      juego: 'Ghost of Tsushima',
    },
    {
      imagen: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg',
      juego: 'God of War',
    },
    {
      imagen: 'https://i.blogs.es/b929e9/uncharted4/1366_2000.jpeg',
      juego: 'Uncharted 4: A Thief\'s End',
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpd97r70GASSC7KmZDCH6nEFCD6nFMxkS5tw&s',
      juego: 'Horizon Zero Dawn',
    },
    {
      imagen: 'https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0',
      juego: 'Spider-Man: Miles Morales',
    },

    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Zga6lxAe8pOEv2WvafXpg2VuX8CXV1HD7A&s',
      juego: 'Gran Turismo Sport',
    },
    {
      imagen: 'https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S1_2560x1440-85f829541a833442eaace75d02e0f07d',
      juego: 'Final Fantasy VII Remake',
    },
    {
      imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/5wUNGl8SSVEurJ2odm0hC1jJ.jpg',
      juego: 'Ratchet & Clank: Rift Apart',
    },
  ];

  showHistoria() {
    this.animateTabChange('historia');
  }

  showJuegosPopulares() {
    this.animateTabChange('juegoPopulares');
  }

  private animateTabChange(tabId: string) {
    const tabsContent = document.querySelectorAll('.tabs-content');
    const activeTab = document.getElementById(tabId);
    const triggers = document.querySelectorAll('.tabs-trigger');
    const activeTrigger = document.querySelector(`[data-tab="${tabId}"]`);

    tabsContent.forEach((content) => {
      if (content.classList.contains('active')) {
        content.classList.remove('active');
        setTimeout(() => {
          (content as HTMLElement).style.display = 'none';
        }, 500);
      }
    });

    if (activeTab) {
      (activeTab as HTMLElement).style.display = 'block';
      setTimeout(() => {
        activeTab.classList.add('active');
      }, 50);
    }

    // Update trigger styles
    triggers.forEach((trigger) => {
      trigger.classList.remove('active');
    });
    activeTrigger?.classList.add('active');
  }

}
