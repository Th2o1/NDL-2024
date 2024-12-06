import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "@components/nav-bar/nav-bar.component";
import { CookiesPopupComponent } from "../cookies-popup/cookies-popup.component";
import * as dictionary from './dictionary.json';
import { BackgroundComponent } from "../background/background.component";

@Component({
  selector: 'app-homepage',
  imports: [NavBarComponent, CookiesPopupComponent, CommonModule, BackgroundComponent],
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
    const any = dictionary;
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
