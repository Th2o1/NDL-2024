import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    imports: [MatButtonModule, RouterLink, RouterLinkActive],
    templateUrl: './nav-bar.component.html',
    standalone: true,
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  playOceanSounds() {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2024/10/12/audio_7dd52a2e33.mp3?filename=ocean-waves-250310.mp3");
    audio.load();
    audio.play();
  }
}
