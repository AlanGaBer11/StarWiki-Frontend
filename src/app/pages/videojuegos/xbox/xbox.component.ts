import { Component } from '@angular/core';

@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrl: './xbox.component.css',
})
export class XboxComponent {
  
  public juegosPopulares = [
    {
      imagen: 'https://store-images.s-microsoft.com/image/apps.50670.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.d205e025-5444-4eb1-ae46-571ae6895928?q=90&w=480&h=270',
      juego: 'Halo Infinite',
    },
    {
      imagen: 'https://store-images.s-microsoft.com/image/apps.33953.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.afabb748-2c30-4a7e-8072-2809a222192d?q=90&w=480&h=270',
      juego: 'Forza Horizon 5',
    },
    {
      imagen: 'https://store-images.s-microsoft.com/image/apps.16127.14554784103656548.5229b523-ba31-4e1e-8b9b-af4211062227.7176a52d-9b92-4c1b-b756-af25abfa99c5?h=862&format=jpg',
      juego: 'Sea of Thieves',
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZkZZ0BqE7OY1nqxeyOLNusUBkyKHlWh-dg&s',
      juego: 'Gears 5',
    },
    {
      imagen: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a',
      juego: 'Minecraft',
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
