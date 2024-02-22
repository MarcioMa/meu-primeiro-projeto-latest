import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponet } from '../../new-componet/new-componet.component';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponet],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
  public isTrue = false;
  
}
