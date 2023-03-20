import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <h3>
      ******* ngIf  *******
    </h3>
    <div *ngIf="isTrue;then thenBlockj; else elseBlockj">
      Joel Code
    </div>

    <ng-template #thenBlockj>
    <h2>
      Name is Showing here
    </h2>
    </ng-template>
    <ng-template #elseBlockj>
      <h2>
      Name is Hidden
      </h2>
    </ng-template>

    <h3>
      ******* ngSwitch  *******
    </h3>
    <div  [ngSwitch]="color" >
      <div *ngSwitchCase="'red'"> You picked red color </div>
      <div *ngSwitchCase="'green'"> You picked green color </div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchDefault> Pick a color</div>
    </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public isTrue = false
  public color = "bluex"
  constructor(){}
  ngOnInit(){}
}
