import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DDService } from '../dd/ddservice';
import { DD } from '../dd/dd';
import { BodyComponent } from '../body/body'; 

import { MessageService, DialogService} from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDialogComponent, DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, DynamicDialogModule ],
  declarations: [ AppComponent, HelloComponent, DD, BodyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DDService, MessageService, DialogService ],
  entryComponents: [DD, BodyComponent]
})
export class AppModule { }
