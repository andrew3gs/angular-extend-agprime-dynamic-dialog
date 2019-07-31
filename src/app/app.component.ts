import { Component } from '@angular/core';

import { MessageService} from 'primeng/api';

import { DDService } from '../dd/ddservice';

import { BodyComponent } from '../body/body';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   constructor(public dialogService: DDService, public messageService: MessageService) {}

    show() {
        const ref = this.dialogService.open(BodyComponent, {
            header: 'Choose a Car',
            width: '70%',
            contentStyle: {"max-height": "350px", "overflow": "auto"}
        });

        ref.onClose.subscribe(() =>{
            
        });
    }
}
