import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRIME_COMPONENTS } from '@app/prime';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ...PRIME_COMPONENTS
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
