import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "@components/nav-bar/nav-bar.component";
import { CookiesPopupComponent } from "../cookies-popup/cookies-popup.component";

@Component({
  selector: 'app-homepage',
  imports: [NavBarComponent, CookiesPopupComponent],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  test(): void {
    const myDiv = document.getElementById('modular-window');
    if(myDiv){ // Check if div is here
      const isHidden = myDiv.style.display === 'none'; // Vérifie si elle est cachée
      myDiv.style.display = isHidden ? 'block' : 'none'
    }
    else{
      console.log("Error in homepage.components.ts : modular-window not found");
    }
    console.log("test")
  }

}
