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
  confirmPassword: string = ''; // 用于保存确认密码的变量

  constructor(private router: Router, private userService: UserService) {}

  goBack() {
    this.router.navigate(['/login']); // 返回按钮
  }

  registerUser() {
    if (this.newUser.password === this.confirmPassword) {
      const user: ClUser = new ClUser(this.newUser);

      // 生成一个 0 到 99 之间的随机数作为 ID
      const randomNumber = Math.floor(Math.random() * 100);

      user.id = `08-G06-${randomNumber.toString().padStart(2, '0')}`;

      this.userService.registerUser(user).subscribe((response) => {
        if (response) {
          // 注册成功，可以跳转到其他页面或显示成功消息
          console.log('User registered successfully', response);
        }
      });
    } else {
      console.log("Passwords do not match");
      // 添加逻辑来通知用户密码不匹配
      // 可以通过消息或UI显示告知用户密码不匹配
    }
  }
}
