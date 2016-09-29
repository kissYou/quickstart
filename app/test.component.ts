/**
 * Created by blueyes on 2016/9/29.
 */
import { Component,ContentChild,TemplateRef } from '@angular/core';
@Component({
  selector:'test',
  template:`
  <ul>
      <li *ngFor="let item of items">
        <template [ngOutletContext]="{item:item}" [ngTemplateOutlet]="itemTemplate">
        </template>
      </li>
  </ul>
`
})
export class TestComponent{
  items = ['a','b','c'];
  @ContentChild(TemplateRef) itemTemplate:any;
}
