import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
               <test>
                  <template let-item="item">{{item}}</template>
               </test>
`
})
export class AppComponent { }
