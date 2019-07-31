import { Component, Input, ComponentFactoryResolver, ChangeDetectorRef, Renderer2, NgZone  } from '@angular/core';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/components/dynamicdialog/dynamicdialog-config';
import { DynamicDialogRef } from 'primeng/components/dynamicdialog/dynamicdialog-ref';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class DD extends DynamicDialogComponent  {
  @Input() name: string;
  constructor( componentFactoryResolver: ComponentFactoryResolver,  cd: ChangeDetectorRef, renderer: Renderer2,
			config: DynamicDialogConfig,  dialogRef: DynamicDialogRef, zone: NgZone){
    super(componentFactoryResolver, cd, renderer, config, dialogRef, zone);
  }
}
