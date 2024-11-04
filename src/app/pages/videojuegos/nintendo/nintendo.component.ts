import { Component } from '@angular/core';

@Component({
  selector: 'app-nintendo',
  templateUrl: './nintendo.component.html',
  styleUrl: './nintendo.component.css'
})
export class NintendoComponent {

  public juegosPopulares = [
    {
      imagen: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5',
      juego: 'Super Mario Odyssey',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58',
      juego: 'The Legend of Zelda: Breath of the Wild',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453',
      juego: 'Mario Kart 8 Deluxe',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9',
      juego: 'Super Smash Bros. Ultimate',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a',
      juego: 'Animal Crossing: New Horizons',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000004496/1a7e765fe91da863330208620c5446908cc7ae47108a80a168ff65356df764db',
      juego: 'Pokémon Sword',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000004492/6a824ace8e4b9504eb2937a1a054536d5dc2538ef8c9ef5ac7f1d9ab0f39a78a',
      juego: 'Pokémon Shield',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000529/b0b183a9860296016649fadb03b929411e7e5e0809af241e2e9652ebf0c5a715',
      juego: 'Splatoon 2',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000002365/959d01b3ef73bb4dd663bd39df343558368fa8453a157e53084e798dedb426cc',
      juego: 'Kirby Star Allies',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ncom/software/switch/70010000007606/c499fdc86779ca95e61daed1f94288a245d196360d278138e56d44097d1a3878',
      juego: 'Fire Emblem: Three Houses',
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
