import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClProducto } from '../model/CllProducto';
import { productosQQ } from '../productos-qq.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage {
  @Input() product: ClProducto = {
    idProducto: 0,
    codigo: '',
    nombreprod: '',
    precio: 0,
    cantidad: 0,
    fechaNacimiento: '',
    rut: '',
    dv: '',
    enfermedad: '',
    fonocontacto: 0,
    categoria: '',
    editorial: '',
    raza: '',
    edad: 0,
    altura: 0,
    hrini: '',
    hrfin: '',
    direccion: '',
    fCreacion: ''
  };

  constructor(private modalController: ModalController, private productService: productosQQ) {}

  saveChanges() {
    // 在这里添加保存修改的逻辑
    // 这里示例假设所有字段都是从表单中获取的
    // 你需要根据实际的编辑表单来获取值并更新 product 对象
    // 例如：
    // this.product.nombreprod = '新的产品名称';
    // this.product.precio = 1000;
    // 继续添加其他字段的赋值

    // 现在调用服务来更新产品
    this.productService.updateProduct(this.product.idProducto, this.product).subscribe(updatedProduct => {
      // 通过 ModalController 关闭弹窗并传递更新后的产品对象
      this.modalController.dismiss({ updatedProduct });
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
