import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

/* import { EpisodioIComponent } from './pages/starwars/tPrecuelas/episodio-i/episodio-i.component';
import { EpisodioIiComponent } from './pages/starwars/tPrecuelas/episodio-ii/episodio-ii.component';
import { EpisodioIIIComponent } from './pages/starwars/tPrecuelas/episodio-iii/episodio-iii.component';
import { EpisodioIvComponent } from './pages/starwars/tOriginal/episodio-iv/episodio-iv.component';
import { EpisodioVComponent } from './pages/starwars/tOriginal/episodio-v/episodio-v.component';
import { EpisodioViComponent } from './pages/starwars/tOriginal/episodio-vi/episodio-vi.component';
import { EpisodioViiComponent } from './pages/starwars/tSecuelas/episodio-vii/episodio-vii.component';
import { EpisodioViiiComponent } from './pages/starwars/tSecuelas/episodio-viii/episodio-viii.component';
import { EpisodioIxComponent } from './pages/starwars/tSecuelas/episodio-ix/episodio-ix.component'; */
import { HomeSTComponent } from './pages/starwars/home-st/home-st.component';

import { HomeComponent } from './pages/home/home/home.component';
import { XboxComponent } from './pages/videojuegos/xbox/xbox.component';
import { PlayStationComponent } from './pages/videojuegos/play-station/play-station.component';
import { NintendoComponent } from './pages/videojuegos/nintendo/nintendo.component';

import { HomeVDComponent } from './pages/videojuegos/home-vd/home-vd.component';
import { DragonBallComponent } from './pages/anime/dragon-ball/dragon-ball.component';
import { OnePieceComponent } from './pages/anime/one-piece/one-piece.component';
import { HomeANComponent } from './pages/anime/home-an/home-an.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TrilogiaPrecuelasComponent } from './pages/starwars/trilogia-precuelas/trilogia-precuelas.component';
import { TrilogiaSecuelasComponent } from './pages/starwars/trilogia-secuelas/trilogia-secuelas.component';
import { TrilogiaOriginalComponent } from './pages/starwars/trilogia-original/trilogia-original.component';
import { ComunidadComponent } from './pages/comunidad/comunidad/comunidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
/*     EpisodioIComponent,
    EpisodioIiComponent,
    EpisodioIIIComponent,
    EpisodioIvComponent,
    EpisodioVComponent,
    EpisodioViComponent,
    EpisodioViiComponent,
    EpisodioViiiComponent,
    EpisodioIxComponent, */
    HomeSTComponent,
    HomeComponent,
    XboxComponent,
    PlayStationComponent,
    NintendoComponent,
    HomeVDComponent,
    DragonBallComponent,
    OnePieceComponent,
    HomeANComponent,
    TrilogiaPrecuelasComponent,
    TrilogiaSecuelasComponent,
    TrilogiaOriginalComponent,
    ComunidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
