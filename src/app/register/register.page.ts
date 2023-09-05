import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async register() {
    if (this.validatePassword()) {
      // Implement registration logic here (not using a database)
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
        dob: this.dob,
        address: this.address,
        age: this.age
      };
      localStorage.setItem('userData', JSON.stringify(userData));

      // Show registration success popup
      await this.showRegistrationSuccessAlert();
      

      // Navigate to login page
      this.router.navigateByUrl('/login');
    } else {
      await this.showPasswordValidationError();
    }
  }

  async showRegistrationSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registration Complete',
      message: 'You have successfully registered!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showPasswordValidationError() {
    const alert = await this.alertController.create({
      header: 'Password Validation Error',
      message: 'Password must have 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long.',
      buttons: ['OK']
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
}
