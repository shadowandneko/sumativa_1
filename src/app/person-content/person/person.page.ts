import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ContactService } from '../contact.service';
import { EditContactPage } from '../edit-contact/edit-contact.page';
import { ClContact } from '../models/ClContact';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage {
  contacts: ClContact[] = [];

  constructor(
    private modalController: ModalController,
    private contactService: ContactService,
    private alertController: AlertController // 引入 AlertController 用于确认删除
  ) {}

  ionViewWillEnter() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(
      (data) => {
        // 在这里处理数据格式
        this.contacts = this.transformData(data);
      },
      (error) => {
        console.error('Error loading contacts', error);
      }
    );
  }
  
  // 自定义方法，用于将数据转换为所需的格式
  transformData(data: any[]): ClContact[] {
    // 在这里进行数据格式转换的逻辑
    const transformedData: ClContact[] = data.map((item) => {
      // 如果数据中包含 "contact" 属性，则使用 "contact" 中的数据，否则使用原始数据
      const contactInfo = item.contact ? item.contact : item;
  
      return {
        id: item.id,
        name: contactInfo.name,
        phone: contactInfo.phone,
        address: contactInfo.address,
        email: contactInfo.email,
        // 可以根据需要添加更多字段的转换
      };
    });
  
    return transformedData;
  }
  

  async editContact(contact: ClContact | { contact: ClContact, id: number }) {
    const modal = await this.modalController.create({
      component: EditContactPage,
      componentProps: { contact: 'contact' in contact ? contact.contact : contact },
    });
  
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const updatedContact = result.data;
        this.contactService.updateContact(updatedContact).subscribe(
          () => {
            this.loadContacts();
          },
          (error) => {
            console.error('Error updating contact', error);
          }
        );
      }
    });
  
    await modal.present();
  }

  async deleteContact(contact: ClContact) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete ${contact.name}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.contactService.deleteContact(contact.id).subscribe(
              () => {
                this.loadContacts();
              },
              (error) => {
                console.error('Error deleting contact', error);
              }
            );
          },
        },
      ],
    });

    await alert.present();
  }

  async addContact() {
    const modal = await this.modalController.create({
      component: EditContactPage,
    });
  
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const newContact = result.data; // 获取新添加的联系人数据
        this.contactService.addContact(newContact).subscribe(
          () => {
            this.loadContacts(); // 重新加载联系人列表
          },
          (error) => {
            console.error('Error adding contact', error);
          }
        );
      }
    });
  
    await modal.present();
  }
}
