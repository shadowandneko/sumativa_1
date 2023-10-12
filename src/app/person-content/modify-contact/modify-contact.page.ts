import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ClContact } from '../models/ClContact';

@Component({
  selector: 'app-modify-contact',
  templateUrl: './modify-contact.page.html',
  styleUrls: ['./modify-contact.page.scss'],
})
export class ModifyContactPage {
  contact: ClContact = { id: -1, name: '', phone: '', address: '', email: '' };
  isEditMode: boolean = false;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    const passedContact: ClContact = this.navParams.get('contact');
    if (passedContact) {
      this.contact = { ...passedContact };
      this.isEditMode = true;
    }
  }

  saveContact() {
    if (this.isEditMode) {
      // 在这里执行更新联系人的操作，你需要将更新后的数据发送到服务器或本地存储
      // 这里只是演示如何关闭页面并传递更新后的联系人数据
      this.modalController.dismiss({ contact: this.contact, action: 'update' });
    } else {
      // 在这里执行创建联系人的操作，你需要将新的联系人数据发送到服务器或本地存储
      // 这里只是演示如何关闭页面并传递新的联系人数据
      this.modalController.dismiss({ contact: this.contact, action: 'create' });
    }
  }

  cancel() {
    // 关闭编辑页面，不做任何操作
    this.modalController.dismiss({ action: 'cancel' });
  }
}
