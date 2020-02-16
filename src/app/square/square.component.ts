import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  
  <button nbButton *ngIf="!values">{{ values }}</button>
    <button nbButton hero status="success" *ngIf="values == 'X'">{{ values }}</button>
    <button nbButton hero status="info" *ngIf="values == 'O'">{{ values }}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  @Input() values : 'X' | 'O';

}
