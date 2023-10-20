export class ClUser {
  id: number;
  username: string;
  password: string;
  email: string;
  address: string;
  phone: string; // 新添加的电话属性

  constructor(obj: any) {
    this.id = obj && obj.id || null;
    this.username = obj && obj.username || null;
    this.password = obj && obj.password || null;
    this.email = obj && obj.email || null;
    this.address = obj && obj.address || null;
    this.phone = obj && obj.phone || null; // 初始化电话属性
  }
}
