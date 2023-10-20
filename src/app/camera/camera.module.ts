import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule,
  ],
  declarations: [CameraPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 添加 CUSTOM_ELEMENTS_SCHEMA
})
export class CameraPageModule {
  constructor() {
    // 调用 defineCustomElements 来定义 Ionic PWA 元素
    defineCustomElements(window);
  }
}
