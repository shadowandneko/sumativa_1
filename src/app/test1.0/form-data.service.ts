import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  constructor() { }

  // 检查表单状态是否存在未完成的数据
  checkFormDataExists(userId: string): boolean {
    const userData = localStorage.getItem(`formData_${userId}`);
    return !!userData; // 返回true如果有数据，否则返回false
  }

  // 保存未完成的数据到 localStorage
  saveFormData(userId: string, formData: any) {
    localStorage.setItem(`formData_${userId}`, JSON.stringify(formData));
  }

  // 获取未完成的数据
  getFormData(userId: string): any {
    const userData = localStorage.getItem(`formData_${userId}`);
    return userData ? JSON.parse(userData) : null;
  }

  // 清除特定用户的未完成数据
  clearFormData(userId: string) {
    localStorage.removeItem(`formData_${userId}`);
  }
}
