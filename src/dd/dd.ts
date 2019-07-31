import { Component, Input, ComponentFactoryResolver, ChangeDetectorRef, Renderer2, NgZone, AfterViewInit, OnDestroy, NgModule, ContentChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/components/dynamicdialog/dynamicdialog-config';
import { DynamicDialogRef } from 'primeng/components/dynamicdialog/dynamicdialog-ref';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicDialogContent } from 'primeng/components/dynamicdialog/dynamicdialogcontent';

import { Header, Footer, SharedModule } from 'primeng/shared';


@Component({
  templateUrl: './dd.html',
  styleUrls: ['./dd.css'],
  animations: [
    trigger('animation', [
      state('void', style({
        transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(-50%) translateY(-50%) scale(1)',
        opacity: 1
      })),
      transition('* => *', animate('{{transitionParams}}'))
    ])
  ]
})
export class DD extends DynamicDialogComponent implements AfterViewInit, OnDestroy {
  @Input() name: string;
  dismissableMask: boolean = true;
  // @ContentChildren(Header, { descendants: false }) headerFacet: QueryList<Header>;

  // @ContentChildren(Footer, { descendants: false }) footerFacet: QueryList<Header>;

  // @ViewChild('titlebar', { static: false }) headerViewChild: ElementRef;

  // @ViewChild('content', { static: false }) contentViewChild: ElementRef;

  // @ViewChild('footer', { static: false }) footerViewChild: ElementRef;
  constructor(componentFactoryResolver: ComponentFactoryResolver, cd: ChangeDetectorRef, renderer: Renderer2,
    config: DynamicDialogConfig, dialogRef: DynamicDialogRef, zone: NgZone) {
    super(componentFactoryResolver, cd, renderer, config, dialogRef, zone);
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [DD, DynamicDialogContent],
  exports: [SharedModule],
  entryComponents: [DD]
})
export class DDModule { }