import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-contributor',
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgStyle,
    NgIf
  ],
  templateUrl: './contributor.component.html',
  standalone: true,
  styleUrls: ['./contributor.component.scss']
})
export class ContributorComponent implements OnInit {
  people: { name: string; githubUrl: string; }[] | undefined;
  colors: string[] = ['albinos', 'red', 'green', 'blue', 'purple', 'black', 'brown', 'fade'];
  hoverStates: boolean[] = [];
  hoverIntervals: any[] = []; // To store interval IDs for each item
  currentHoverFrame: number[] = []; // To track the current frame for each hover
  hoverPositions: { top: string, left: string }[] = []; // To store positions for each hover-wrapper
  isModalOpen = false;
  selectedPerson: { name: string; githubUrl: string; } | null = null;
  selectedPersonImage: string | null = null;

  openModal(person: { name: string; githubUrl: string }): void {
    const githubUsername = person.githubUrl.split('/')[3]; // Extract username
    this.selectedPerson = person;
    this.selectedPersonImage = this.selectedPerson.githubUrl + `.png`;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedPerson = null;
  }

  closeModalOnBackgroundClick(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.closeModal();
    }
  }

  ngOnInit() {
    this.people = [
      { name: 'Pierre', githubUrl: 'https://github.com/rageofpseudo' },
      { name: 'Théo', githubUrl: 'https://github.com/Th2o1' },
      { name: 'Jaenai', githubUrl: 'https://github.com/JAENAI' },
      { name: 'Lucian', githubUrl: 'https://github.com/lucianmocan' },
      { name: 'Constantin', githubUrl: 'https://github.com/Nethet' },
      { name: 'Audric', githubUrl: 'https://github.com/Didibogoss' },
      { name: 'Felix', githubUrl: 'https://github.com/HarrisFelix' },
      { name: 'Julien', githubUrl: 'https://github.com/JulienClavel2002' },
    ];
    this.hoverStates = Array(this.people.length).fill(false);
    this.hoverIntervals = Array(this.people.length).fill(null);
    this.currentHoverFrame = Array(this.people.length).fill(1); // Start with frame 1

    // Initialize default positions
    this.hoverPositions = this.people.map(() => this.generateUniquePosition());
  }

  generateUniquePosition(): { top: string, left: string } {
    const maxAttempts = 100;
    let attempt = 0;
    let newPos;

    do {
      const top = `-${20 + Math.random() * 50}vh`; // Random top position between -10vh and -50vh
      const left = `${Math.random() * 50}vw`; // Random left position between 0vw and 80vw
      newPos = { top, left };

      if (this.isPositionValid(newPos)) {
        return newPos;
      }

      attempt++;
    } while (attempt < maxAttempts);

    console.warn("Could not generate a unique position after multiple attempts.");
    return newPos; // Return the last attempted position
  }

  isPositionValid(newPos: { top: string, left: string }): boolean {
    const threshold = 60; // Minimum distance threshold in vh/vw
    const newTop = parseFloat(newPos.top);
    const newLeft = parseFloat(newPos.left);

    return this.hoverPositions.every(pos => {
      if (!pos) return true; // Skip uninitialized positions
      const existingTop = parseFloat(pos.top);
      const existingLeft = parseFloat(pos.left);

      // Calculate Euclidean distance between positions
      const distance = Math.sqrt(
          Math.pow(newTop - existingTop, 2) + Math.pow(newLeft - existingLeft, 2)
      );

      return distance > threshold;
    });
  }

  setHoverState(index: number, isHovering: boolean): void {
    if (isHovering) {
      this.hoverStates[index] = true;
      this.currentHoverFrame[index] = 1; // Reset to frame 1 on hover start
      this.hoverIntervals[index] = setInterval(() => {
        if (this.currentHoverFrame[index] < 4) {
          this.currentHoverFrame[index]++;
        } else {
          clearInterval(this.hoverIntervals[index]); // Stop cycling after frame 4
        }
      }, 100); // Adjust the interval duration as needed for smooth cycling
    } else {
      this.hoverStates[index] = false;
      clearInterval(this.hoverIntervals[index]);
      this.currentHoverFrame[index] = 1; // Reset to frame 1 on hover end
    }
  }

  getPufferfishImage(index: number): string {
    const color = this.colors[index % this.colors.length];
    const basePath = "../../../../assets/credits/";
    const frame = this.hoverStates[index] ? this.currentHoverFrame[index] : 1; // Use current frame if hovering, else default to 1
    const image = `${basePath}pufferfish_${color}_${frame}_64x64.png`;
    return `url("${image}")`;
  }

  updatePosition(index: number, top: string, left: string): void {
    const newPos = { top, left };

    if (this.isPositionValid(newPos)) {
      this.hoverPositions[index] = newPos;
    } else {
      console.warn("New position overlaps or is too close, skipping update.");
    }
  }
}
