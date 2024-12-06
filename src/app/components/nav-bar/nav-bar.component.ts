import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    imports: [MatButtonModule, RouterLink, RouterLinkActive],
    templateUrl: './nav-bar.component.html',
    standalone: true,
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
