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
