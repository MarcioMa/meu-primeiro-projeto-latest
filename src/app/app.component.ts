import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponet } from './components/new-componet/new-componet.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponet, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent ],
  template: `
    <!-- 
    <router-outlet></router-outlet>
    <app-new-componet />
    <app-template-binding />
    <app-template-variables />
    -->

    <h1>Curso de Angular v17</h1>
    <app-template-control-flow />
        
    `,
})
export class AppComponent {

}
