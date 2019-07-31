import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DDService } from '../dd/ddservice';
import { DD } from '../dd/dd';
import { BodyComponent } from '../body/body'; 

import { MessageService} from 'primeng/api';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DD, BodyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DDService, MessageService ],
  entryComponents: [DD, BodyComponent]
})
export class AppModule { }
