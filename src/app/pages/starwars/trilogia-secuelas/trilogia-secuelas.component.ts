import { Component } from '@angular/core';

@Component({
  selector: 'app-trilogia-secuelas',
  templateUrl: './trilogia-secuelas.component.html',
  styleUrl: './trilogia-secuelas.component.css'
})
export class TrilogiaSecuelasComponent {

  public lineaTiempo = [
    {
      pelicula: 'Episodio I - La Amenaza Fantasma',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_I',
    },
    {
      pelicula: 'Episodio II - El Ataque de los Clones',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_II',
    },
    {
      pelicula: 'Episodio III - La Venganza de los Sith',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_III',
    },
    {
      pelicula: 'Episodio IV - Una Nueva Esperanza',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_IV',
    },
    {
      pelicula: 'Episodio V - El Imperio Contraataca',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_V',
    },
    {
      pelicula: 'Episodio VI - El Regreso del Jedi',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_VI',
    },
    {
      pelicula: 'Episodio VII - El Despertar de la Fuerza',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_VII',
    },
    {
      pelicula: 'Episodio VIII - Los Últimos Jedi',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_VIII',
    },
    {
      pelicula: 'Episodio IX - El Ascenso de Skywalker',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo ea iure consequatur. Ea, odio et dolor praesentium nobis placeat ullamfugit cum tempore nam consequuntur qui mollitia perspiciatis.',
      link: '/episodio_IX',
    },
  ];

  showEpisodioVII() {
    this.animateTabChange('episodioVII');
  }

  showEpisodioVIII() {
    this.animateTabChange('episodioVIII');
  }

  showEpisodioIX() {
    this.animateTabChange('episodioIX');
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
