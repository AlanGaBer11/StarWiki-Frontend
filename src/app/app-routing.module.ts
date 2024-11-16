import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ComunidadComponent } from './pages/comunidad/comunidad/comunidad.component';
/* STAR WARS */
import { HomeSTComponent } from './pages/starwars/home-st/home-st.component';
import { TrilogiaPrecuelasComponent } from './pages/starwars/trilogia-precuelas/trilogia-precuelas.component';
import { TrilogiaOriginalComponent } from './pages/starwars/trilogia-original/trilogia-original.component';
import { TrilogiaSecuelasComponent } from './pages/starwars/trilogia-secuelas/trilogia-secuelas.component';
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
  { path: 'comunidad', component: ComunidadComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  /* STAR WARS */
  { path: 'cronologia', component: HomeSTComponent },
  { path: 'trilogia_precuelas', component: TrilogiaPrecuelasComponent },
  { path: 'trilogia_original', component: TrilogiaOriginalComponent },
  { path: 'trilogia_secuelas', component: TrilogiaSecuelasComponent },

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
