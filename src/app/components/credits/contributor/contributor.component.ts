import { Component, OnInit } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

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
  }

  setHoverState(index: number, isHovering: boolean): void {
    this.hoverStates[index] = isHovering;
  }

  getPufferfishImage(index: number): string {
    const color = this.colors[index % this.colors.length];
    const basePath = "../../../../assets/credits/";
    const hoverImage = `${basePath}pufferfish_${color}_4_64x64.png`;
    const defaultImage = `${basePath}pufferfish_${color}_1_64x64.png`;

    if (this.hoverStates[index]) {
      return `url("` + hoverImage + `") center`;
    }
    return `url("` + defaultImage + `") center`;
  }
}
