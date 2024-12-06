import { Component, OnInit } from '@angular/core';
import { NgForOf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-contributor',
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './contributor.component.html',
  standalone: true,
  styleUrl: './contributor.component.scss'
})
export class ContributorComponent implements OnInit {
  people: string[] = [];
  colors: string[] = ['albinos', 'red', 'green', 'blue', 'purple', 'black', 'brown', 'fade'];
  hoverStates: boolean[] = [];
  hoverIntervals: any[] = []; // To store interval IDs for each item
  currentHoverFrame: number[] = []; // To track the current frame for each hover

  ngOnInit() {
    this.people = [
      'Pierre',
      'Théo',
      'Jaenai',
      'Lucian',
      'Constantin',
      'Audric',
      'Felix',
      'Julien'
    ];
    this.hoverStates = Array(this.people.length).fill(false);
    this.hoverIntervals = Array(this.people.length).fill(null);
    this.currentHoverFrame = Array(this.people.length).fill(1); // Start with frame 1
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
}
