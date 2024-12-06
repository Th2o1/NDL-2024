import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from "@components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-background',
  imports: [NavBarComponent, CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {
  scales = [1, 2, 3, 4, 5];

}
