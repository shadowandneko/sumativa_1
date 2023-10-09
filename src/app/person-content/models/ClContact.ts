export class ClContact {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;

  constructor(obj: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.phone = obj && obj.phone || null;
    this.address = obj && obj.address || null;
    this.email = obj && obj.email || null;
  }
}
