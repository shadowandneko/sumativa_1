export class ClUser {
  id: string;
  username: string;
  password: string;
  email: string;
  address: string;
  phone: string;

  constructor(obj: any) {
    this.id = obj && obj.id ? `08-G06-${obj.id}` : ''; // 更改为默认空字符串

    this.username = obj && obj.username || '';
    this.password = obj && obj.password || '';
    this.email = obj && obj.email || '';
    this.address = obj && obj.address || '';
    this.phone = obj && obj.phone || '';
  }
}
