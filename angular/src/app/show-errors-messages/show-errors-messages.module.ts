import { Component, Input } from '@angular/core';


@Component({
  selector: 'myErrors',
  template: `

{{message}}
  `,
})
export class ShowErrorsMessagesModule {
  @Input() message:string="";

}
