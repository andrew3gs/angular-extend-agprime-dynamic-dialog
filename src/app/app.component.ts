import { Component } from '@angular/core';

import { MessageService, DialogService} from 'primeng/api';

import { DDService } from '../dd/ddservice'


import { BodyComponent } from '../body/body';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   constructor(public mydialogService: DDService, public messageService: MessageService,public dialogService: DialogService) {}

    show() {
        const ref = this.mydialogService.open(BodyComponent, {
            header: 'Choose a Car',
            width: '70%',
            contentStyle: {"max-height": "350px", "overflow": "auto"},
            dismissableMask: true,
            data: {
              showHeaderCustomContent: true
            },
            footer: '<button type="button">Close Me</button>'
        });

        ref.onClose.subscribe(() =>{
            
        });
    }

    show2() {
      const ref = this.dialogService.open(BodyComponent, {
          header: 'Choose a Car',
          width: '70%',
          contentStyle: {"max-height": "350px", "overflow": "auto"}
      });

      ref.onClose.subscribe(() =>{
          
      });
  }
}
