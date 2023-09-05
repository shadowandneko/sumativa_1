import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-other-view',
  templateUrl: './other-view.page.html',
  styleUrls: ['./other-view.page.scss'],
})
export class OtherViewPage {
  contact: Contact = {
    name: '',
    phone: '',
    address: '',
    email: '', // Add the email property here
  };

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) {}

  closeModal() {
    this.modalController.dismiss();
  }

  saveContact() {
    // Save contact using the ContactService
    this.contactService.addContact(this.contact);

    // Close the modal
    this.modalController.dismiss();
  }
}
