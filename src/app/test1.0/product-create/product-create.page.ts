import { Component } from '@angular/core';
import { productosQQ } from '../productos-qq.service'; // 请替换为正确的路径
import { ClProducto } from '../model/CllProducto';
import { UserService } from 'src/app/login2.0/user-service.service'; 
import { ClUser } from 'src/app/login2.0/modelss/user.model'; 
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage {
  personName: string = '';
  personAge: number = 0;
  personPhoneNumber: number = 0;
  personAddress: string = '';
  personDateOfBirth: string = '';
  user: ClUser | undefined;

  constructor(
    private productService: productosQQ,
    private userService: UserService,
    private formDataService: FormDataService,
    private router: Router
  ) {
    this.getUserInfo();
    this.loadFormData(); // Load any unfinished data when the page loads
  }

  // Fetch user information
  getUserInfo() {
    this.userService.getLoggedInUser().subscribe((user: ClUser) => {
      this.user = user;
    });
  }
  

  loadFormData() {
    if (this.user) {
      const userId = this.user.id || 'defaultUserId';

      if (this.formDataService.checkFormDataExists(userId)) {
        const formData = this.formDataService.getFormData(userId);
        this.personName = formData.nombreprod || '';
        this.personAge = formData.edad || 0;
        this.personPhoneNumber = formData.fonocontacto || 0;
        this.personAddress = formData.direccion || '';
        this.personDateOfBirth = formData.fechaNacimiento || '';
      }
    }
  }
  saveAndGoBack() {
    if (this.user) {
      const userId = this.user.id || 'defaultUserId';
  
      const formData = {
        nombreprod: this.personName,
        edad: this.personAge,
        fonocontacto: this.personPhoneNumber,
        direccion: this.personAddress,
        fechaNacimiento: this.personDateOfBirth,
      };
  
      this.formDataService.saveFormData(userId, formData);
      this.navigateToPreviousPage(); // 保存数据后立即返回上一页
    }
  }
  

  createProduct() {
    if (this.user) {
      const codigoPrefix = this.user.id ? this.user.id : '0';
      const codigoSuffix = Math.floor(Math.random() * 100);
      const codigo = `${codigoPrefix}-${codigoSuffix}`;
      const newPerson: ClProducto = {
        idProducto: Math.floor(Math.random() * 100),
        codigo: '08-G06',
        nombreprod: this.personName,
        precio: 0,
        cantidad: 0,
        fechaNacimiento: this.personDateOfBirth,
        rut: null,
        dv: '0',
        enfermedad: codigo,
        fonocontacto: this.personPhoneNumber,
        categoria: '0',
        editorial: '0',
        raza: '0',
        edad: this.personAge,
        altura: 0,
        hrini: '0',
        hrfin: '0',
        direccion: this.personAddress,
        fCreacion: new Date().toISOString(),
      };

      this.productService.addProduct(newPerson).subscribe((response) => {
        console.log('Person created:', response);
        this.clearFormDataAndReturn(); // 保存成功后清空表单数据并返回
      });
    }
  }

  clearFormDataAndReturn() {
    this.clearFormData(); // 清空数据
    this.navigateToPreviousPage(); // 返回上一页
  }

  clearFormData() {
    if (this.user) {
      const userId = this.user.id || 'defaultUserId';
      this.formDataService.clearFormData(userId);
      this.personName = '';
      this.personAge = 0;
      this.personPhoneNumber = 0;
      this.personAddress = '';
      this.personDateOfBirth = '';
    }
  }

  navigateToPreviousPage() {
    this.router.navigate(['/share-location']); // 替换为实际的返回路径
  }
}