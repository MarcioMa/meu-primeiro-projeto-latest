import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

  public isDisabled = true;
  public srcValue = '../../../../../Esquema.png';
  public name: string = 'Marcio M Araujo';
  public age: number = 20;
  public condition = this.age < 18 ? 'Menor de idade' : 'Maior de idade'; 

  constructor(){
    setTimeout( () => {
      this.name = 'João';

    }, 1000);
  }
}


