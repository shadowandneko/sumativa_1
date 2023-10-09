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
        this.contacts = data;
      },
      (error) => {
        console.error('Error loading contacts', error);
      }
    );
  }

  async editContact(contact: ClContact) {
    const modal = await this.modalController.create({
      component: EditContactPage,
      componentProps: { contact },
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
        this.contactService.addContact(result.data).subscribe(
          () => {
            this.loadContacts();
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
