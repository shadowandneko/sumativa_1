import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { OtherViewPage } from '../other-view/other-view.page';
import { ContactService, Contact } from '../contact.service';
import { ContactListPage } from '../contact-list/contact-list.page'; 
@Component({
  selector: 'app-share-location',
  templateUrl: './share-location.page.html',
  styleUrls: ['./share-location.page.scss'],
})
export class ShareLocationPage {
  loggedInUsername: string = '';
  contacts: Contact[] = [];

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private contactService: ContactService
  ) {}

  ionViewWillEnter() {
    // Retrieve the username from local storage
    this.loggedInUsername = localStorage.getItem('loggedInUsername') || '';

    // Get the list of contacts
    this.contacts = this.contactService.getContacts();
  }

  async openAddContactModal() {
    try {
      const modal = await this.modalController.create({
        component: OtherViewPage,
      });
      await modal.present();
    } catch (error) {
      console.error('Error opening modal:', error);
    }
  }

  async showContactList() {
    try {
      const modal = await this.modalController.create({
        component: ContactListPage, // 使用 contact-list 页面作为弹窗
      });
      await modal.present();
    } catch (error) {
      console.error('Error opening contact list modal:', error);
    }
  }
}
