import { Component } from '@angular/core';

@Component({
  selector: 'app-trilogia-original',
  templateUrl: './trilogia-original.component.html',
  styleUrl: './trilogia-original.component.css',
})
export class TrilogiaOriginalComponent {
  public lineaTiempoEiv = [
    {
      title: 'Captura de la Princesa Leia',
      text: 'La princesa Leia es capturada por Darth Vader mientras intenta llevar los planos robados de la Estrella de la Muerte a la Alianza Rebelde.',
    },
    {
      title: 'Mensaje de R2-D2',
      text: 'Leia esconde un mensaje en el droide R2-D2, quien, junto con C-3PO, termina en manos de Luke Skywalker en Tatooine.',
    },
    {
      title: 'Encuentro con Obi-Wan Kenobi',
      text: 'Luke conoce a Obi-Wan, quien le revela la existencia de los Jedi y lo convence de unirse a la Rebelión.',
    },
    {
      title: 'Rescate de Leia y destrucción de la Estrella de la Muerte',
      text: 'Junto a Han Solo y Chewbacca, Luke rescata a Leia y logra destruir la Estrella de la Muerte, infligiendo un duro golpe al Imperio.',
    },
  ];

  public lineaTiempoEv = [
    {
      title: 'Base Rebelde en Hoth',
      text: 'Después de la destrucción de la Estrella de la Muerte, el Imperio ataca la base rebelde en el planeta helado Hoth, obligando a la Alianza Rebelde a huir.',
    },
    {
      title: 'Entrenamiento de Luke con Yoda',
      text: 'Luke viaja a Dagobah, donde comienza su entrenamiento como Jedi bajo la guía del Maestro Yoda.',
    },
    {
      title: 'Traición en la Ciudad de las Nubes',
      text: 'Han, Leia, y Chewbacca buscan refugio en la Ciudad de las Nubes, pero son traicionados por Lando Calrissian y capturados por el Imperio.',
    },
    {
      title: 'Revelación de Darth Vader',
      text: 'Durante un duelo en Bespin, Vader revela a Luke que es su padre, Anakin Skywalker. Luke queda conmocionado y escapa con la ayuda de sus amigos.',
    },
  ];

  public lineaTiempoEvi = [
    {
      title: 'Rescate de Han Solo',
      text: 'Luke, Leia y sus amigos realizan una misión para rescatar a Han Solo de las garras de Jabba el Hutt en Tatooine.',
    },
    {
      title: 'Alianza Rebelde contra la segunda Estrella de la Muerte',
      text: 'La Alianza Rebelde organiza un ataque final contra la segunda Estrella de la Muerte, situada en órbita sobre la luna de Endor.',
    },
    {
      title: 'Confrontación entre Luke y Vader',
      text: 'Luke decide enfrentarse a Darth Vader, con la esperanza de redimirlo. Vader, influido por el amor hacia su hijo, se redime y derrota al Emperador.',
    },
    {
      title: 'Derrota del Imperio y restauración de la paz',
      text: 'Con la muerte del Emperador y la destrucción de la segunda Estrella de la Muerte, el Imperio es derrotado y se inicia la restauración de la paz en la galaxia.',
    },
  ];

  public personajesEiv = [
    {
      imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/11/star-wars-nueva-esperanza-luke-skywalker.jpg',
      nombre: 'Luke Skywalker',
      descripcion:
        'Luke comienza su viaje como el joven héroe que descubrirá su destino como Jedi, enfrentándose a Darth Vader y al Imperio.',
    },
    {
      imagen: 'https://www.lafosadelrancor.com/wp-content/uploads/2017/03/leia-episodio-4.png',
      nombre: 'Princess Leia',
      descripcion:
        'Líder de la Rebelión, Leia es valiente, determinada y una clave para derrotar al Imperio. Su relación con Luke y Han es central en la saga.',
    },
    {
      imagen: 'https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg',
      nombre: 'Han Solo',
      descripcion:
        'Han es un contrabandista que se une a la Rebelión. Su humor, valentía y amor por Leia lo hacen uno de los personajes más queridos.',
    },
    {
      imagen: 'https://www.observatoriorh.com/wp-content/uploads/2022/12/Darth-Vader.jpg',
      nombre: 'Darth Vader',
      descripcion:
        'El villano de la saga, un Sith que fue anteriormente Anakin Skywalker. A pesar de su poder oscuro, hay un conflicto interno que se revelará más tarde.',
    },
    {
      imagen: 'https://sm.ign.com/t/ign_ap/gallery/o/obi-wans-g/obi-wans-greatest-moments_7skc.600.jpg',
      nombre: 'Obi-Wan Kenobi',
      descripcion:
        'Ahora en exilio, Obi-Wan guía a Luke en sus primeros pasos como Jedi, enfrentando a Darth Vader en un duelo final que tiene repercusiones importantes.',
    },
    {
      imagen: 'https://i.pinimg.com/originals/a5/30/07/a53007c482f0e505686bc575e18397b0.jpg',
      nombre: 'Chewbacca',
      descripcion:
        'El wookiee compañero de Han Solo, leal y valiente, Chewie es un miembro clave en la lucha contra el Imperio.',
    },
    {
      imagen: 'https://tamashiiweb.com/images/item/item_0000014933_dYL9krZy_04.jpg',
      nombre: 'C-3PO',
      descripcion:
        'El droide protocolario que acompaña a los protagonistas a lo largo de sus aventuras.',
    },
    {
      imagen: 'https://i.pinimg.com/originals/30/6a/e2/306ae27a1bc181966a09576f7f22a554.jpg',
      nombre: 'R2-D2',
      descripcion:
        'El droide astromecánico, portador de la valiosa información que es clave para la Rebelión.',
    },
  ];

  public personajesEv = [
    {
      imagen: 'https://i0.wp.com/culturacolectiva.com/wp-content/uploads/2023/02/E7NFI63N55ET7CWCKVRAFURL2M.jpg',
      nombre: 'Luke Skywalker',
      descripcion:
        'Luke continúa su entrenamiento Jedi, enfrentándose a los desafíos del Imperio. La revelación sobre su padre es uno de los puntos más importantes de la saga.',
    },
    {
      imagen: 'https://i.etsystatic.com/12143778/r/il/c43279/1270722705/il_570xN.1270722705_5jx3.jpg',
      nombre: 'Princess Leia',
      descripcion:
        'Leia sigue luchando en la Rebelión, mostrando su determinación y coraje mientras lidia con la guerra y la relación con Han Solo.',
    },
    {
      imagen: 'https://theouterrim.com/wp-content/uploads/2024/02/Han-Solo-Hoth-4.jpg',
      nombre: 'Han Solo',
      descripcion:
        'Han sigue luchando por la Rebelión y por su amor por Leia, mientras enfrenta las tensiones con Darth Vader y sus propios desafíos personales.',
    },
    {
      imagen: 'https://haztucuadro.com/cdn/shop/products/wallpaperbetter_28__E_160x80cm.jpg?v=1677609838',
      nombre: 'Darth Vader',
      descripcion:
        'Darth Vader sigue persiguiendo a los rebeldes y revela a Luke que es su padre, lo que cambia el curso de la saga.',
    },
    {
      imagen: 'https://i.ytimg.com/vi/0jrnwKtds6w/maxresdefault.jpg',
      nombre: 'Yoda',
      descripcion:
        'Yoda entrena a Luke en el planeta Dagobah, enseñándole a controlar la Fuerza y a enfrentar los miedos que lo limitan.',
    },
    {
      imagen: 'https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2016/08/12/3-Lando-1536x864-493364302953.jpg',
      nombre: 'Lando Calrissian',
      descripcion:
        'Lando es un antiguo aliado de Han Solo que juega un papel importante en la lucha contra el Imperio, aunque su lealtad se pone a prueba.',
    },
  ];

  public personajesEvi = [
    {
      imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD3fMGaXtZQez44Uapr-YsOYQYwQOMhDGTleNMhe8jBDwH-YQYM4lmlWJb8888mgeHHG5taYhjTeMeqAaMz9tTZf4kx-xnc_QWbwaFnSRHWKSlDNuztLIM1m_a7Buv5UDaN7bHsc7LRuZ6/s1600/luke_1.jpg',
      nombre: 'Luke Skywalker',
      descripcion:
        'Luke regresa para enfrentarse a Darth Vader y al Emperador en un enfrentamiento final que puede salvar o destruir la galaxia.',
    },
    {
      imagen: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Princess-Leia-on-Endor-in-Return-of-the-Jedi.jpg',
      nombre: 'Princess Leia',
      descripcion:
        'Leia continúa luchando por la Rebelión y se revela como hermana de Luke, desempeñando un papel clave en la derrota del Imperio.',
    },
    {
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Han_Solo_in_Carbonite_%2831649435213%29.jpg/640px-Han_Solo_in_Carbonite_%2831649435213%29.jpg',
      nombre: 'Han Solo',
      descripcion:
        'Han se une a la Rebelión en su última batalla contra el Imperio, demostrando su valía como líder y luchador.',
    },
    {
      imagen: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/darth-vader-s-death-scene-in-star-wars-return-of-the-jedi.jpg',
      nombre: 'Darth Vader',
      descripcion:
        'La batalla interna de Anakin Skywalker culmina cuando decide redimirse, sacrificándose por su hijo y destruyendo al Emperador.',
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8kPQYrr4eRV8rrwI76NNOnZurwV5M_lzVA&s',
      nombre: 'Emperador',
      descripcion:
        'El líder del Imperio, cuyo dominio sobre la galaxia llega a su fin cuando Darth Vader lo derrota en un acto de redención.',
    },
  ];

  showEpisodioIV() {
    this.animateTabChange('episodioIV');
  }

  showEpisodioV() {
    this.animateTabChange('episodioV');
  }

  showEpisodioVI() {
    this.animateTabChange('episodioVI');
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
