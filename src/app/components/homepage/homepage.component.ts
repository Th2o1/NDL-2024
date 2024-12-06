import { Component } from '@angular/core';
import { NavBarComponent } from "@components/nav-bar/nav-bar.component";
import { CookiesPopupComponent } from "../cookies-popup/cookies-popup.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [NavBarComponent, CookiesPopupComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  scales = [1, 2, 3, 4, 5];
}
