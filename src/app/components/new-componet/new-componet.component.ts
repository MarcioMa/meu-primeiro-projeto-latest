import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-componet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-componet.component.html',
  styleUrl: './new-componet.component.scss'
})
export class NewComponet implements OnInit{
  constructor(){ }

  ngOnInit(): void {
    
  }
}
