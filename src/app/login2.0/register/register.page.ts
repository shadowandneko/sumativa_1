// register.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { ClUser } from '../modelss/user.model'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  newUser = {
    username: '',
    password: '',
    email: '',
    address: '',
    phone: '',
  };

  constructor(private router: Router, private userService: UserService) {}

  goBack() {
    this.router.navigate(['/login']); // 返回按钮
  }

  registerUser() {
    const user: ClUser = new ClUser(this.newUser); // 将 newUser 转换为 ClUser 实例
    this.userService.registerUser(user).subscribe((response) => {
      if (response) {
        // 注册成功，可以跳转到其他页面或显示成功消息
        console.log('User registered successfully', response);
      }
    });
  }
}
