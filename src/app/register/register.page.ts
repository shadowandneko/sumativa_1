import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  dob: string = '';
  address: string = '';
  age: number = 0;

  goToLoginPage() {
    // 使用Router导航到登录页面
    this.router.navigate(['/login']); // '/login' 是您的登录页面的路由路径
  }

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  async register() {
    if (this.validatePassword() && this.validateEmail()) {
      // Implement registration logic here (not using a database)
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
        dob: this.dob,
        address: this.address,
        age: this.age,
      };
      localStorage.setItem('userData', JSON.stringify(userData));

      // Show registration success popup
      await this.showRegistrationSuccessAlert();

      // Navigate to login page
      this.router.navigateByUrl('/login');
    } else {
      await this.showValidationErrors();
    }
  }

  async showRegistrationSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registration Complete',
      message: 'You have successfully registered!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async showValidationErrors() {
    let errorMessage = 'Password must have 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long.';
    if (!this.validateEmail()) {
      errorMessage += ' Email must contain "@" symbol.';
    }
    const alert = await this.alertController.create({
      header: 'Validation Error',
      message: errorMessage,
      buttons: ['OK'],
    });
    await alert.present();
  }

  validatePassword(): boolean {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharacterRegex = /[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?]+/;

    const uppercaseValid = uppercaseRegex.test(this.password);
    const lowercaseValid = lowercaseRegex.test(this.password);
    const digitValid = digitRegex.test(this.password);
    const specialCharacterValid = specialCharacterRegex.test(this.password);
    const lengthValid = this.password.length >= 8;

    return (
      uppercaseValid &&
      lowercaseValid &&
      digitValid &&
      specialCharacterValid &&
      lengthValid
    );
  }

  validateEmail(): boolean {
    // 使用正则表达式验证邮箱格式，包含'@'符号
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.email);
  }

  validateUsername(): boolean {
    const usernameRegex = /^[A-Za-z]+$/; // 只包含字母的正则表达式
    return usernameRegex.test(this.username);
  }
}
