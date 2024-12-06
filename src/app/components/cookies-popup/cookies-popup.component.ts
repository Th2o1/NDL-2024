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

  acceptCookie() {
    this.showInput = true;
  }

  // Validate the user input when they submit
  submitAgreement() {
    if (this.userInput.trim().toLowerCase() === 'i agree to sell my soul to the lord of the underworld') {
      this.showCookies = false;
    } else {
      alert('Vous devez taper "I agree to sell my soul to the lord of the underworld" pour continuer.');
      console.log('Incorrect input:', this.userInput);
    }
  }

  rejectCookie() {
    console.log('Cookie rejected!');
    this.showMsg = true;
    this.moveRandomDiv();
    // Implement your logic for rejecting cookies here
    // alert('Dommage, pas de cookies pour vous !');
  }

  moveRandomDiv() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Generate random positions within the viewport
    const randomX = Math.random() * (viewportWidth); // Subtract div width
    const randomY = Math.random() * (viewportHeight/3); // Subtract div height

    // Update the randomDivPosition with the new random position
    this.randomDivPosition = { x: randomX, y: randomY };
    console.log(randomX);
    console.log(randomY)
    this.showRandomBucket = true; // Show the div after it gets a position
  }

}
