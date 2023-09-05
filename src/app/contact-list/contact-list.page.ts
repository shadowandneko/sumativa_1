import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts: Contact[] = []; // 添加 contacts 属性

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    // 在这里初始化联系人列表
    this.contacts = this.contactService.getContacts();
  }

  closeModal() {
    // 关闭弹窗
    this.modalController.dismiss();
  }

  // 其他方法和逻辑
}
