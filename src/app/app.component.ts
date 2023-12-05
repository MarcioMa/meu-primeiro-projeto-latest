import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponet } from './components/new-componet/new-componet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponet],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular v17</h1>
    <app-new-componet />
    `,
})
export class AppComponent {

}
