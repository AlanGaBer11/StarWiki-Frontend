import { Component } from '@angular/core';

@Component({
  selector: 'app-trilogia-precuelas',
  templateUrl: './trilogia-precuelas.component.html',
  styleUrls: ['./trilogia-precuelas.component.scss'],
})
export class TrilogiaPrecuelasComponent {

  public lineaTiempoEi = [
    {
      title: 'La Invasión de Naboo',
      text:'Los Jedi intentan resolver el conflicto con la Federación de Comercio.'
    },
    {
      title: 'Encuentro con Anakin Skywalker',
      text:'Qui-Gon Jinn descubre a un niño con un gran potencial en la Fuerza.'
    },
    {
      title: 'El Duelo con Darth Maul',
      text:'Los Jedi luchan contra el Sith en un combate épico.'
    },
    {
      title: 'El Consejo Jedi Duda de Anakin',
      text:'El Consejo Jedi muestra reticencia en entrenar a Anakin debido a su edad y su futuro incierto.'
    },
  ];

  public lineaTiempoEii = [
    {
      title: 'La Guerra de los Clones',
      text:'La República enfrenta una guerra civil tras la creación del ejército de clones.'
    },
    {
      title: 'Anakin y Padmé',
      text:'Anakin desarrolla una relación prohibida con Padmé Amidala.'
    },
    {
      title: 'El Duelo en Geonosis',
      text:'Los Jedi y el ejército de clones se enfrentan a los separatistas en la arena de Geonosis.'
    },
    {
      title: 'Obi-Wan Investiga al Conde Dooku',
      text:'Obi-Wan descubre los planes secretos de los separatistas y su líder, el Conde Dooku.'
    },
  ];

  public lineaTiempoEiii = [
    {
      title: 'La Caída de los Jedi',
      text:'Anakin se pasa al lado oscuro y extermina a los Jedi.'
    },
    {
      title: 'La Orden 66',
      text:'El Canciller Palpatine ejecuta la Orden 66, ordenando la aniquilación de los Jedi en toda la galaxia.'
    },
    {
      title: 'La Batalla en Mustafar',
      text:'La confrontación entre Anakin y Obi-Wan culmina en un duelo mortal.'
    },
    {
      title: 'Padmé da a Luz a Luke y Leia',
      text:'Padmé muere tras dar a luz a los gemelos Luke y Leia, quienes serán clave en la lucha futura contra el Imperio.'
    },
  ];

  public personajesEi = [
    {
      imagen: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Qui-Gon_Jinn.png',
      nombre: 'Qui-Gon Jinn',
      descripcion: 'Maestro Jedi y mentor de Obi-Wan Kenobi, Qui-Gon Jinn es un hombre sabio y firme en su creencia en la Fuerza. Descubre a Anakin Skywalker y cree que tiene un destino importante en la galaxia.'
    },
    {
      imagen: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/10/obi-wan-kenobi.jpg?fit=2186%2C1358&quality=50&strip=all&ssl=1',
      nombre: 'Obi-Wan Kenobi',
      descripcion: 'Padawan de Qui-Gon Jinn y Jedi comprometido con la paz en la galaxia. A lo largo del Episodio I, se enfrenta a Darth Maul y se convierte en el protector de Anakin Skywalker tras la muerte de su maestro.'
    },
    {
      imagen: 'https://m.media-amazon.com/images/M/MV5BMTM1NTQzNDU3OV5BMl5BanBnXkFtZTcwODcyMzA4NA@@._V1_.jpg',
      nombre: 'Anakin Skywalker',
      descripcion: 'Un joven esclavo en el planeta Tatooine, Anakin tiene una conexión poderosa con la Fuerza. Qui-Gon Jinn cree que es el Elegido destinado a traer equilibrio a la Fuerza.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/starwars/images/4/41/Queenamidala.jpg',
      nombre: 'Padmé Amidala',
      descripcion: 'La reina y luego senadora de Naboo, Padmé es una mujer fuerte y valiente que lucha por la libertad de su planeta natal. Es uno de los personajes clave en la política galáctica.'
    },
    {
      imagen: 'https://mspfilm.org/wp-content/uploads/2024/04/mspfilm-star_wars_phantom_menace-1920x1080-1.jpg',
      nombre: 'Darth Maul',
      descripcion: 'Un Sith temible y feroz, Darth Maul es el aprendiz de Darth Sidious. Con su doble sable de luz, se enfrenta a los Jedi en una épica batalla en Naboo.'
    },
    {
      imagen: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg',
      nombre: 'Jar Jar Binks',
      descripcion: 'Un Gungan que juega un papel cómico, pero también tiene relevancia en la trama de Naboo.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/lucasfilm/images/f/fc/Mace_Windu.jpg',
      nombre: 'Mace Windu',
      descripcion: 'Miembro del Consejo Jedi, que en el Episodio I, es una figura clave en la respuesta de los Jedi a la crisis política.'
    },
    {
      imagen: 'https://m.media-amazon.com/images/M/MV5BODljZmI5ODktZmM0Ny00ZmM4LTkyMjYtOTY1OWRlMzgyYmE1XkEyXkFqcGdeQTNwaW5nZXN0._V1_QL75_UX500_CR0,0,500,281_.jpg',
      nombre: 'Yoda',
      descripcion: 'El Gran Maestro Jedi, quien asesora a los Jedi en la lucha contra la invasión y la creciente amenaza Sith.'
    },
    {
      imagen: 'https://preview.redd.it/3m2isl8rsjwa1.jpg?auto=webp&s=6e746bd14ffec40136d0de04386a088d134acfb7',
      nombre: 'Senador Palpatine',
      descripcion: 'Senador de Naboo, cuya ascensión al poder comienza en este episodio y más tarde se convierte en el Emperador.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/esstarwars/images/9/9f/Panaka2.jpg',
      nombre: 'Captain Panaka',
      descripcion: 'Capitán de la Guardia Real de Naboo, un leal defensor de la Reina Amidala durante la invasión de su planeta.'
    }
  ];

  public personajesEii = [
    {
      imagen: 'https://i.pinimg.com/474x/21/40/92/214092816743804432ade80ddafd761e.jpg',
      nombre: 'Anakin Skywalker',
      descripcion: 'Un joven Jedi en formación, Anakin comienza a mostrar su creciente poder y también su relación con Padmé Amidala. Sus emociones y temores se vuelven más fuertes a medida que avanza la trama.'
    },
    {
      imagen: 'https://rebellegion.com/wp-content/uploads/2024/02/padme-amidala-arena-battle-00.jpg',
      nombre: 'Padmé Amidala',
      descripcion: 'Ahora senadora, Padmé se ve involucrada en una conspiración política mientras trata de proteger a la República. Su relación con Anakin comienza a florecer, aunque se enfrenta a grandes retos.'
    },
    {
      imagen: 'https://avatarfiles.alphacoders.com/318/318051.jpg',
      nombre: 'Obi-Wan Kenobi',
      descripcion: 'Obi-Wan se ve envuelto en una investigación sobre los intentos de asesinato de Padmé Amidala, mientras lidia con la creación del ejército clon y los desafíos que enfrentan los Jedi en la Guerra de los Clones.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/starwars/images/5/52/Sidious_hologram.png',
      nombre: 'Darth Sidious',
      descripcion: 'El Sith que manipula los eventos desde las sombras. Juega un papel crucial en el desencadenamiento de la Guerra de los Clones y en su ascenso al poder absoluto en la galaxia.'
    },
    {
      imagen: 'https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg',
      nombre: 'Conde Dooku',
      descripcion: 'Antiguo Jedi que se convierte en Sith. Dooku lidera la Confederación de Sistemas Independientes, desafiando a la República y desatando la Guerra de los Clones.'
    },
    {
      imagen: 'https://www.lucasfilm.com/app/uploads/EP2_IA_68368_R_marquee.jpg',
      nombre: 'Yoda',
      descripcion: 'Gran Maestro Jedi, Yoda supervisa el entrenamiento de los Jedi y lidera las tropas de la República en la Guerra de los Clones.'
    },
    {
      imagen: 'https://i.pinimg.com/736x/24/53/cf/2453cfbdae6f7c14c663610564411d4e.jpg',
      nombre: 'Mace Windu',
      descripcion: 'Miembro del Consejo Jedi y líder en la defensa de la República durante la Guerra de los Clones. Lucha junto a Yoda para proteger la galaxia.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/star-wars-legends/images/1/11/JangoFett-SWE.jpg',
      nombre: 'Jango Fett',
      descripcion: 'Cazador de recompensas, cuya genética se utiliza para crear el ejército clon. Jango juega un papel clave en la creación de los soldados de la República.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/esstarwars/images/f/fa/EpII3po.jpg',
      nombre: 'C-3PO',
      descripcion: 'Droid protocolario que acompaña a Anakin y Padmé en sus viajes. Con su carácter torpe y su frecuente preocupación, es una figura cómica pero también esencial en la trama.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/starwars/images/9/95/R2-D2-TROSOCE.png',
      nombre: 'R2-D2',
      descripcion: 'Droid astromecánico que sigue a Padmé y Anakin. A pesar de ser un droide, R2 desempeña un papel crucial en la historia, salvando a los protagonistas en varias ocasiones.'
    },
    {
      imagen: 'https://es.web.img3.acsta.net/medias/nmedia/18/35/66/38/18832189.jpg',
      nombre: 'Clones Troopers',
      descripcion: 'Soldados creados a partir de la genética de Jango Fett. Son la columna vertebral del ejército de la República en la Guerra de los Clones.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/esstarwars/images/7/78/Sheev_Palpatine.png',
      nombre: 'Senador Palpatine',
      descripcion: 'Continúa su ascenso en la política galáctica mientras manipula a los líderes de la República y los Sith para hacer crecer su poder en la galaxia.'
    },
  ];

  public personajesEiii = [
    {
      imagen: 'https://static.wikia.nocookie.net/esstarwars/images/6/6f/Anakin_Skywalker_RotS.png',
      nombre: 'Anakin Skywalker',
      descripcion: 'Anakin cae al Lado Oscuro de la Fuerza, convirtiéndose en Darth Vader después de una serie de trágicos eventos. Su transformación marca el fin de la República y el comienzo del Imperio Galáctico.'
    },
    {
      imagen: 'https://rebellegion.com/wp-content/uploads/2024/02/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg',
      nombre: 'Obi-Wan Kenobi',
      descripcion: 'Obi-Wan busca detener a Anakin, pero la traición de su antiguo aprendiz lo lleva a una confrontación mortal. Después, se exilia en Tatooine para vigilar a Luke Skywalker.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/starwars/images/9/98/PregnantPadme.jpg',
      nombre: 'Padmé Amidala',
      descripcion: 'Padmé lucha por salvar la República mientras enfrenta los cambios dramáticos que afectan a su esposo, Anakin. La película culmina con su muerte tras el nacimiento de sus hijos.'
    },
    {
      imagen: 'https://d27csu38upkiqd.cloudfront.net/eyJidWNrZXQiOiJmZGMtc2l0ZXB1YmxpYy1tZWRpYS1wcm9kIiwia2V5IjoidXBsb2Fkc1wvMjAyM1wvMDNcLzY3MzU1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTU2LCJmaXQiOiJjb3ZlciJ9fX0=',
      nombre: 'Darth Sidious',
      descripcion: 'El Sith que manipula a la galaxia para ganar control absoluto, lo que culmina en la caída de los Jedi y la creación del Imperio Galáctico.'
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoIFzPB3b3iKmcz5Gv5QU2200cJ2654oRdg&s',
      nombre: 'Yoda',
      descripcion: 'Yoda lidera la resistencia Jedi contra el Imperio en la medida de lo posible. A pesar de su derrota, se exilia y sobrevive para ser parte de la futura lucha contra el Imperio.'
    },
    {
      imagen: 'https://i.ytimg.com/vi/zz9cEsPx5Fw/maxresdefault.jpg',
      nombre: 'Mace Windu',
      descripcion: 'Un líder del Consejo Jedi que intenta confrontar a Palpatine, pero es derrotado. Su muerte marca el fin de la resistencia de los Jedi.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/starwars/images/a/a2/C-3PO-TROSTGG.png',
      nombre: 'C-3PO',
      descripcion: 'El droide protocolario sigue siendo compañero de los protagonistas. Es parte importante de la historia, incluso si su papel es más ligero y cómico.'
    },
    {
      imagen: 'https://static.wikia.nocookie.net/starwars/images/9/95/R2-D2-TROSOCE.png',
      nombre: 'R2-D2',
      descripcion: 'R2, el droide astromecánico, sigue siendo un testigo clave de los eventos y tiene un papel fundamental en la rebelión.'
    }
  ];
  
  

  showEpisodioI() {
    this.animateTabChange('episodioI');
  }

  showEpisodioII() {
    this.animateTabChange('episodioII');
  }

  showEpisodioIII() {
    this.animateTabChange('episodioIII');
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