// edit-contact.page.ts

import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ClContact } from '../models/ClContact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage {
  contact: ClContact = { id: -1, name: '', phone: '', address: '', email: '' };// 初始化联系人对象
  editMode: boolean = false; // 是否为编辑模式

  constructor(private navParams: NavParams, private modalController: ModalController) {
    const passedContact: ClContact = this.navParams.get('contact');
    if (passedContact) {
      this.contact = { ...passedContact }; // 复制传递过来的联系人信息
      this.editMode = true; // 进入编辑模式
    }
  }

  // 保存联系人信息
  saveContact() {
    // 在这里你可以执行保存联系人信息的操作，例如通过服务保存到服务器或本地存储

    // 当保存成功后，关闭编辑页面并返回联系人信息
    this.modalController.dismiss({ contact: this.contact });
  }

  // 取消编辑
  cancel() {
    // 关闭编辑页面，不做任何操作
    this.modalController.dismiss();
  }
}
