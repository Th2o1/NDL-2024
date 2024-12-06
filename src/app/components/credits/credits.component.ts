import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import {ContributorComponent} from "@components/credits/contributor/contributor.component";
import { BackgroundComponent } from "../background/background.component";

@Component({
  selector: 'app-credits',
  imports: [ContributorComponent, BackgroundComponent],
  templateUrl: './credits.component.html',
  standalone: true,
  styleUrl: './credits.component.scss'
})
export class CreditsComponent {

}
