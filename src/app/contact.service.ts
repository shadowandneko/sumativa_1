import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {}

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  getContacts() {
    return this.contacts;
  }
}

export interface Contact {
  name: string;
  phone: string;
  address: string;
  email: string;
}
