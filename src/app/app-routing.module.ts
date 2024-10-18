import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
/* STAR WARS */
import { HomeSTComponent } from './pages/starwars/home-st/home-st.component';
import { EpisodioIComponent } from './pages/starwars/tPrecuelas/episodio-i/episodio-i.component';
import { EpisodioIiComponent } from './pages/starwars/tPrecuelas/episodio-ii/episodio-ii.component';
import { EpisodioIIIComponent } from './pages/starwars/tPrecuelas/episodio-iii/episodio-iii.component';
import { EpisodioIvComponent } from './pages/starwars/tOriginal/episodio-iv/episodio-iv.component';
import { EpisodioVComponent } from './pages/starwars/tOriginal/episodio-v/episodio-v.component';
import { EpisodioViComponent } from './pages/starwars/tOriginal/episodio-vi/episodio-vi.component';
import { EpisodioViiiComponent } from './pages/starwars/tSecuelas/episodio-viii/episodio-viii.component';
import { EpisodioIxComponent } from './pages/starwars/tSecuelas/episodio-ix/episodio-ix.component';
/* VIDEOJUEGOS */
import { HomeVDComponent } from './pages/videojuegos/home-vd/home-vd.component';
import { XboxComponent } from './pages/videojuegos/xbox/xbox.component';
import { PlayStationComponent } from './pages/videojuegos/play-station/play-station.component';
import { NintendoComponent } from './pages/videojuegos/nintendo/nintendo.component';
/* ANIME */
import { HomeANComponent } from './pages/anime/home-an/home-an.component';
import { DragonBallComponent } from './pages/anime/dragon-ball/dragon-ball.component';
import { OnePieceComponent } from './pages/anime/one-piece/one-piece.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  /* STAR WARS */
  { path: 'cronologia', component: HomeSTComponent },
  { path: 'episodio_I', component: EpisodioIComponent },
  { path: 'episodio_II', component: EpisodioIiComponent },
  { path: 'episodio_III', component: EpisodioIIIComponent },
  { path: 'episodio_IV', component: EpisodioIvComponent },
  { path: 'episodio_V', component: EpisodioVComponent },
  { path: 'episodio_VI', component: EpisodioViComponent },
  { path: 'episodio_VII', component: EpisodioViComponent },
  { path: 'episodio_VIII', component: EpisodioViiiComponent },
  { path: 'episodio_IX', component: EpisodioIxComponent },

  /* VIDEOJUEGOS */
  { path: 'videojuegos', component: HomeVDComponent },
  { path: 'xbox', component: XboxComponent },
  { path: 'play_station', component: PlayStationComponent },
  { path: 'nintendo', component: NintendoComponent },

  /* ANIME */
  { path: 'anime', component: HomeANComponent },
  { path: 'dragon_ball', component: DragonBallComponent },
  { path: 'one_piece', component: OnePieceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
