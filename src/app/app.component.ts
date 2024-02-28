import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponet } from './components/new-componet/new-componet.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";
import { SignalsComponent } from './components/signals/signals/signals.component';
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <!-- 
    <router-outlet></router-outlet>
    <app-template-binding />
    <app-template-variables />
    <app-template-control-flow />
    -->

    <h1>Curso de Angular v17</h1>
    <app-signals/>
            
    `,
    imports: [
        CommonModule, 
        RouterOutlet, 
        NewComponet, 
        TemplateBindingComponent, 
        TemplateVariablesComponent, 
        TemplateControlFlowComponent, 
        TemplateDeferrableViewsComponent,
        SignalsComponent
    ]
})
export class AppComponent {

}
