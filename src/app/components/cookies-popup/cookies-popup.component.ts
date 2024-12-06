import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookies-popup',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule], // Import CommonModule here
  templateUrl: './cookies-popup.component.html',
  styleUrl: './cookies-popup.component.scss'
})
export class CookiesPopupComponent {
  showInput: boolean = false; // Controls visibility of input field
  showCookies: boolean = true; // Controls visibility of input field
  showMsg: boolean = false;
  showRandomBucket: boolean = false;
  randomDivPosition = { x: 0, y: 0 };
  userInput: string = ''; // Stores user input
  cookieCounta = 0;
  firstClickTime = 0

  acceptCookie() {
    this.showInput = true;
  }

  // Validate the user input when they submit
  submitAgreement() {
    if (this.userInput.trim().toLowerCase() === "j'accepte tous les cookies et leurs conséquences") {
      console.log('makonga:', this.userInput);
      this.showCookies = false;
      if (this.showRandomBucket){
        this.showRandomBucket = false;
      }
    } else {
      alert('Vous devez taper "J\'accepte tous les cookies et leurs conséquences"');
      console.log('Incorrect input:', this.userInput);
    }
  }

  rejectCookie() {
    console.log('Cookie rejected!');
    this.showMsg = true;
    this.showRand();
    this.cookieCounta=0;
    // Implement your logic for rejecting cookies here
    // alert('Dommage, pas de cookies pour vous !');
  }

  moveRandomDiv() {
    if(this.cookieCounta === 0) {
      this.firstClickTime = Date.now();
      this.showRand();
      return;
    }

    if(Date.now()-this.firstClickTime >= 5000) {
      this.firstClickTime = Date.now();
      this.cookieCounta = 0;
      this.showRand();
      return;
    }

    if (this.cookieCounta < 4) {
      this.showRand();
    } else {
      this.close();
    }
      
  }

  showRand() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    // Generate random positions within the viewport
    const randomX = Math.random() * (viewportWidth - 100); 
    const randomY = Math.random() * (viewportHeight -100);

    // Update the randomDivPosition with the new random position
    this.randomDivPosition = { x: randomX, y: randomY };
    this.showRandomBucket = true; // Show the div after it gets a position
    this.cookieCounta++;
  }
  close() {
    this.showCookies = false;
    this.showRandomBucket = false;
  }

}
