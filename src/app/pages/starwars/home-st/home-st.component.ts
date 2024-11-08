import { Component } from '@angular/core';
import { RestServiceService } from '../../../services/rest-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-st',
  templateUrl: './home-st.component.html',
  styleUrl: './home-st.component.css',
})
export class HomeSTComponent {
  public listPersonajes: any[] = [];
  peliculas = [
    {
      title: 'Episodio I - La Amenaza Fantasma',
      imageUrl: 'assets/img/st-episodios/1.webp',
      description:'Hace mucho tiempo, en una galaxia en crisis, un joven llamado Anakin Skywalker, con habilidades sorprendentes en la Fuerza, es descubierto por los Jedi. Mientras la República Galáctica se enfrenta a una amenaza oculta, un misterioso enemigo emerge y pone en peligro el destino de millones. Acompañados por el sabio maestro Qui-Gon Jinn y su aprendiz, Obi-Wan Kenobi, Anakin se embarca en una aventura donde antiguos misterios y oscuros presagios salen a la luz. ¿Será este niño el elegido que traerá equilibrio... o desatará un caos sin precedentes?',
      route: '/trilogia_precuelas',
    },
    {
      title: 'Episodio II - El Ataque de los Clones',
      imageUrl: 'assets/img/st-episodios/2.webp',
      description:'Diez años después de los eventos de Naboo, la galaxia se encuentra dividida y al borde de la guerra civil. Anakin, ahora un joven y prometedor Jedi, es asignado para proteger a la senadora Padmé Amidala tras una serie de intentos de asesinato. Mientras descubre un amor prohibido, Anakin comienza a experimentar dudas y miedos que lo llevarán a un camino incierto. Al mismo tiempo, el peligroso Conde Dooku orquesta una conspiración que podría cambiar el destino de la galaxia para siempre. ¿Podrá la Orden Jedi detener el ataque... o caerán en la trampa del Lado Oscuro?',
      route: '/trilogia_precuelas',
    },
    {
      title: 'Episodio III - La Venganza de los Sith',
      imageUrl: 'assets/img/st-episodios/3.webp',
      description:'Las Guerras Clon han llevado a la galaxia a una espiral de destrucción. Mientras la Orden Jedi lucha desesperadamente por la paz, Anakin Skywalker se ve cada vez más seducido por el lado oscuro y su promesa de poder ilimitado. La lucha interna de Anakin y su vínculo con el enigmático Canciller Palpatine lo empujan hacia un destino inesperado. ¿Será capaz de resistir la tentación... o su caída desatará una era de oscuridad para la galaxia y la destrucción de todo lo que ama?',
      route: '/trilogia_precuelas',
    },
    {
      title: 'Episodio IV - Una Nueva Esperanza',
      imageUrl: 'assets/img/st-episodios/4.webp',
      description:'La galaxia vive bajo el yugo del implacable Imperio Galáctico, que no conoce límites en su búsqueda de dominación. Sin embargo, una chispa de esperanza nace cuando un grupo de valientes rebeldes roba los planos de una temible estación de combate: la Estrella de la Muerte. En este momento de crisis, Luke Skywalker, un joven granjero de Tatooine, descubre su verdadero destino y emprende una misión que lo cambiará para siempre. Junto a un contrabandista astuto, una princesa rebelde y un par de droides, Luke desafiará al imperio... y descubrirá el poder de la Fuerza.',
      route: '/trilogia_original'
    },
    {
      title: 'Episodio V - El Imperio Contraataca',
      imageUrl: 'assets/img/st-episodios/5.webp',
      description:'Tras la derrota en Yavin, el Imperio se vuelve implacable en su cacería de los rebeldes. Mientras las fuerzas de la Alianza luchan por sobrevivir en un inhóspito planeta helado, Luke Skywalker se embarca en un peligroso viaje hacia los confines de la galaxia para entrenarse con un misterioso y antiguo maestro Jedi. Pero el Lado Oscuro acecha, y Darth Vader está dispuesto a hacer cualquier cosa para capturar a Luke y revelarle una verdad que cambiará su vida para siempre. ¿Será el joven Jedi capaz de resistir... o caerá en la tentación?',
      route: '/trilogia_original'
    },
    {
      title: 'Episodio VI - El Regreso del Jedi',
      imageUrl: 'assets/img/st-episodios/6.webp',
      description:'Con la ayuda de aliados inesperados, Luke Skywalker, ahora un Jedi, se embarca en una última misión para salvar a su amigo Han Solo y poner fin al reinado de terror del Imperio. Mientras se prepara para enfrentarse a Darth Vader y al emperador, secretos oscuros sobre su familia y su destino se revelan. En el enfrentamiento final entre el bien y el mal, Luke deberá decidir si seguirá el camino de la luz... o sucumbirá ante la oscuridad que lo acecha. El futuro de la galaxia y el destino de los Jedi penden de un hilo.',
      route: '/trilogia_original'
    },
    {
      title: 'Episodio VII - El Despertar de la Fuerza',
      imageUrl: 'assets/img/st-episodios/7.webp',
      description:'Décadas después de la caída del Imperio, una nueva amenaza emerge de las sombras: la Primera Orden, liderada por el misterioso y oscuro Kylo Ren. En medio de la búsqueda de Luke Skywalker, el último Jedi, una chatarrera llamada Rey descubre que posee una conexión especial con la Fuerza. Con ayuda de un piloto rebelde, un ex-stormtrooper y viejos héroes, Rey enfrentará un poder que amenaza con sumir a la galaxia en la oscuridad nuevamente. ¿Quién es Rey realmente y por qué el destino parece llamarla hacia la Fuerza?',
      route: '/trilogia_secuelas'
    },
    {
      title: 'Episodio VIII - Los Últimos Jedi',
      imageUrl: 'assets/img/st-episodios/8.webp',
      description:'Mientras la Resistencia se encuentra al borde de la extinción, Rey busca al legendario Luke Skywalker, esperando que su regreso traiga esperanza. Sin embargo, Luke está atormentado por errores del pasado que lo llevaron a un autoexilio. A medida que Rey explora el poder de la Fuerza, descubre secretos que cambiarán su visión del bien y del mal. Y en el corazón de la Primera Orden, Kylo Ren lucha con sus propios demonios. La línea entre héroes y villanos se desdibuja en una batalla donde la verdad podría destruir todo en lo que creían',
      route: '/trilogia_secuelas'
    },
    {
      title: 'Episodio IX - El Ascenso de Skywalker',
      imageUrl: 'assets/img/st-episodios/9.webp',
      description:'La lucha final entre la Resistencia y la Primera Orden llega a su clímax, y Rey, la última esperanza de los Jedi, debe enfrentarse a su destino y descubrir la verdad de sus orígenes. En una carrera contra el tiempo, viejos enemigos y sorprendentes revelaciones pondrán a prueba su fe y su poder. Con la ayuda de sus amigos y aliados, Rey deberá tomar decisiones que marcarán el futuro de la galaxia y enfrentar un mal antiguo que amenaza con resurgir. ¿Será Rey capaz de traer equilibrio a la Fuerza... o caerá ante su oscuro legado?',
      route: '/trilogia_secuelas'
    },
  ];

  selectedPelicula = this.peliculas[0];

  selectPelicula(pelicula: any) {
    this.selectedPelicula = pelicula;
  }

  constructor(private rest: RestServiceService) {}

  ngOnInit() {
    this.CargaData();
  }

  CargaData() {
    this.rest
      .get(
        'https://starwikibackend-dbg8hkhzf3cad2h3.eastus2-01.azurewebsites.net/api/v1/starwars'
      )
      .subscribe(
        (resultado: any) => {
          console.log(resultado);
          this.listPersonajes = resultado.results;
        },
        (error) => {
          console.error('Error al cargar los datos', error);
        }
      );
  }
}
