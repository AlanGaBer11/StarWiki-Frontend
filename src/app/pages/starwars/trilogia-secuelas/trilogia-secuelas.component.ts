import { Component } from '@angular/core';

@Component({
  selector: 'app-trilogia-secuelas',
  templateUrl: './trilogia-secuelas.component.html',
  styleUrl: './trilogia-secuelas.component.css'
})
export class TrilogiaSecuelasComponent {

  public lineaTiempoEvii = [
    {
      title: 'Búsqueda de Luke Skywalker',
      text: 'La Primera Orden, surgida de los restos del Imperio, busca a Luke Skywalker, quien ha desaparecido. La Resistencia, liderada por Leia, también lo busca para restaurar la paz.'
    },
    {
      title: 'Encuentro con Rey y BB-8',
      text: 'Rey, una chatarrera en Jakku, encuentra a BB-8, un droide que posee el mapa para localizar a Luke.'
    },
    {
      title: 'Destrucción de la Base Starkiller',
      text: 'La Primera Orden crea una superarma llamada Starkiller, que destruye sistemas enteros. La Resistencia ataca y logra destruir la base.'
    },
    {
      title: 'Confrontación entre Kylo Ren y Han Solo',
      text: 'Kylo Ren, hijo de Han y Leia, asesina a su padre en su camino hacia el lado oscuro.'
    },
    {
      title: 'Rey encuentra a Luke',
      text: 'Al final, Rey sigue el mapa y encuentra a Luke Skywalker en el planeta Ahch-To.'
    }
  ];
  
  public lineaTiempoEviii = [
    {
      title: 'Batalla en la Base de la Resistencia',
      text: 'La Primera Orden ataca la base de la Resistencia, obligando a sus miembros a evacuar y escapar.'
    },
    {
      title: 'Entrenamiento de Rey con Luke',
      text: 'Rey intenta convencer a Luke para que regrese y entrene a nuevos Jedi, pero Luke duda debido a su pasado fracaso con Kylo Ren.'
    },
    {
      title: 'Conexión entre Rey y Kylo Ren',
      text: 'A través de la Fuerza, Rey y Kylo tienen visiones compartidas que los acercan y crean un vínculo inesperado.'
    },
    {
      title: 'Sacrificio de Luke Skywalker',
      text: 'Luke se proyecta a través de la Fuerza en Crait, distrayendo a la Primera Orden y permitiendo que la Resistencia escape. Luego, muere pacíficamente en Ahch-To.'
    },
    {
      title: 'Renovada Esperanza para la Resistencia',
      text: 'La Resistencia, aunque diezmada, se fortalece gracias al sacrificio de Luke y a la creencia en una nueva generación de héroes.'
    }
  ];
  
  public lineaTiempoEix = [
    {
      title: 'Regreso del Emperador Palpatine',
      text: 'Se revela que el Emperador Palpatine ha sobrevivido y está detrás de la Primera Orden, planeando crear un nuevo Imperio.'
    },
    {
      title: 'Búsqueda del Sith Wayfinder',
      text: 'Rey, Poe y Finn buscan el Sith Wayfinder para localizar a Palpatine en Exegol, la base secreta Sith.'
    },
    {
      title: 'Rey descubre su linaje',
      text: 'Rey descubre que es nieta de Palpatine, lo que la enfrenta a una difícil decisión sobre su destino.'
    },
    {
      title: 'Redención de Kylo Ren',
      text: 'Kylo Ren, influido por el recuerdo de sus padres y el sacrificio de Leia, se redime y regresa como Ben Solo.'
    },
    {
      title: 'Derrota final del Emperador',
      text: 'Con la ayuda de Ben Solo y el apoyo de la Resistencia, Rey derrota al Emperador, acabando con la amenaza Sith.'
    }
  ];
  

  public personajesEvii = [
    {
      imagen: 'https://medias.spotern.com/spots/w640/12/12510-1532336916.jpg',
      nombre: 'Rey',
      descripcion: 'Rey es una joven que descubre su conexión con la Fuerza mientras lucha por encontrar su lugar en un universo sumido en el caos.'
    },
    {
      imagen: 'https://lumiere-a.akamaihd.net/v1/images/finn-bio-1_92f4d3db.jpeg?region=0%2C0%2C1280%2C853',
      nombre: 'Finn',
      descripcion: 'Finn, un stormtrooper desertor, se une a la Resistencia y se convierte en un valioso miembro en la lucha contra la Primera Orden.'
    },
    {
      imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2015/10/529272-star-wars-episodio-vii-despertar-fuerza-todos-personajes.jpg?tf=3840x',
      nombre: 'Poe Dameron',
      descripcion: 'Poe es un piloto de la Resistencia que lucha contra la Primera Orden, ayudando a la causa con su destreza y valentía.'
    },
    {
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_817717-MLM44777898497_022021-O.webp',
      nombre: 'Kylo Ren',
      descripcion: 'Kylo Ren es el líder de la Primera Orden, luchando con su herencia y su relación con la Fuerza. Su conflicto interno es un tema central.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/esstarwars/images/e/e2/TFAHanSolo.png',
      nombre: 'Han Solo',
      descripcion: 'Han regresa para ayudar a la Resistencia, y su encuentro con su hijo Kylo Ren tiene un impacto profundo en el futuro de la galaxia.'
    },
    {
      imagen: 'https://rebellegion.com/wp-content/uploads/2016/03/general-leia-episode-7.jpg',
      nombre: 'Leia Organa',
      descripcion: 'Leia sigue siendo una figura clave en la Resistencia, luchando para mantener la paz en la galaxia mientras enfrenta la pérdida de su hijo.'
    }
  ];

  public personajesEviii = [
    {
      imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/02/rey-star-wars-ultimos-jedi.jpg?tf=3840x',
      nombre: 'Rey',
      descripcion: 'Rey se enfrenta a su destino como Jedi, mientras busca respuestas sobre su origen y su conexión con la Fuerza.'
    },
    {
      imagen: 'https://i.blogs.es/2e31ff/luke/450_1000.jpeg',
      nombre: 'Luke Skywalker',
      descripcion: 'Luke se exilia pero finalmente regresa para enfrentar sus miedos y enseñarle a Rey los caminos de la Fuerza.'
    },
    {
      imagen: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/08/kylo-ren-star-wars-concepto-original-force-awakens.jpg',
      nombre: 'Kylo Ren',
      descripcion: 'Kylo Ren lucha con su identidad y su destino, enfrentándose a Rey mientras también lucha por el control de la Primera Orden.'
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgDOynyOhDjeNGlUniMDzlp6bv6oePZy0UQ&s',
      nombre: 'Leia Organa',
      descripcion: 'Leia lidera la Resistencia mientras enfrenta grandes desafíos. Su fuerza y determinación continúan siendo una inspiración para todos.'
    }
  ];

  public personajesEix = [
    {
      imagen: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/09/hipertextual-2020719240.png?fit=1920%2C832&quality=50&strip=all&ssl=1',
      nombre: 'Rey',
      descripcion: 'Rey finalmente acepta su legado y se enfrenta a Palpatine para salvar la galaxia, descubriendo su verdadero propósito como Jedi.'
    },
    {
      imagen: 'https://img.europapress.es/fotoweb/fotonoticia_20231213171713_690.jpg',
      nombre: 'Kylo Ren',
      descripcion: 'Kylo Ren se redime al regresar a su verdadera identidad como Ben Solo, ayudando a Rey a derrotar a Palpatine.'
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDwxNBnsGNElyzahQ7ePAmvwt7tPed0jETw&s',
      nombre: 'Leia Organa',
      descripcion: 'Leia juega un papel crucial en la batalla final contra la Primera Orden, antes de pasar la antorcha a Rey.'
    },
    {
      imagen: 'https://i.blogs.es/6ba5de/960x0/840_560.jpeg',
      nombre: 'Palpatine',
      descripcion: 'El Emperador regresa con un plan para destruir la galaxia y restaurar el Imperio, pero es finalmente derrotado por Rey y Ben Solo.'
    }
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
