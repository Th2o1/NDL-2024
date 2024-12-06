import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPopupComponent } from "../cookies-popup/cookies-popup.component";
import * as dictionary from '../../../assets/text/dictonary.json';
import { BackgroundComponent } from "../background/background.component";

interface IDictionary {
  [index: string]: string;  // Cela indique que vous pouvez utiliser n'importe quelle clé de type string
}

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, BackgroundComponent, CookiesPopupComponent],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  ngAfterViewInit(): void {
    this.positionCanvasesRandomly();  
  }

  positionCanvasesRandomly(): void {
    const canvases = document.querySelectorAll('.bodypart') as NodeListOf<HTMLElement>;
    const viewportWidth = window.innerWidth;
    const placedPositions: { x: number; y: number; width: number; height: number }[] = [];
  
    canvases.forEach(canvas => {
      let isOverlapping: boolean;
      let randomX: number, randomY: number;
  
  
      
        // Génère des positions aléatoires en vw et vh
        randomX = Math.random() * (600 - 300) + 300;
        randomY = (Math.random() * 500) - 200;
        // Vérifie si la position se chevauche avec d'autres
        
  
      // Enregistre la position
  
      // Applique la position en vh/vw
      canvas.style.left = `${randomX}px`;
      canvas.style.top = `${randomY}px`;
    });
  }


  isModalOpen: boolean = false; 
  modalStyles = {
    'opacity': '1',
    'transition': 'opacity 0.3s ease' 
  };

  openModal(keyToDict:string) {
    var example: IDictionary = dictionary
    console.log(example[keyToDict]);
    console.log(keyToDict)
    this.isModalOpen = true; 
    this.modalStyles['opacity'] = '1'; 
    if(keyToDict == "test"){
      console.log("1")
    }
  }

  closeModal() {
    this.modalStyles['opacity'] = '0'; 
    setTimeout(() => {
      this.isModalOpen = false; 
    }, 300); 
  }
  closeModalOnBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

}
