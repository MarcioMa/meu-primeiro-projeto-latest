import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent  implements AfterViewInit{
  @ViewChild('name') public nameImput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.nameImput.nativeElement.value);
    console.log(this.nameH2.nativeElement.InnerText);
  }
}
