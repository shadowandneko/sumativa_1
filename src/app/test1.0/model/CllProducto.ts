// export class ClProducto {
//   id: number;
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   cantidad: number;
//   fecha: Date;
//     constructor(values: Object= {}){
//         Object.assign(this, values);
//     }
// }
export class ClProducto {
  idProducto: number;
  codigo: string;
  nombreprod: string;
  precio: number;
  cantidad: number;
  fechaNacimiento: string;
  rut: string | null;
  dv: string;
  enfermedad: string;
  fonocontacto: number;
  categoria: string;
  editorial: string;
  raza: string;
  edad: number;
  altura: number;
  hrini: string;
  hrfin: string;
  direccion: string;
  fCreacion: string;

  constructor(obj: any) {
    this.idProducto = obj && obj.idProducto || 0;
    this.codigo = obj && obj.codigo || '0';
    this.nombreprod = obj && obj.nombreprod || '';
    this.precio = obj && obj.precio || 0;
    this.cantidad = obj && obj.cantidad || 0;
    this.fechaNacimiento = obj && obj.fechaNacimiento || '';
    this.rut = obj && obj.rut || null;
    this.dv = obj && obj.dv || '0';
    this.enfermedad = obj && obj.enfermedad || '0';
    this.fonocontacto = obj && obj.fonocontacto || 0;
    this.categoria = obj && obj.categoria || '0';
    this.editorial = obj && obj.editorial || '0';
    this.raza = obj && obj.raza || '0';
    this.edad = obj && obj.edad || 0;
    this.altura = obj && obj.altura || 0;
    this.hrini = obj && obj.hrini || '0';
    this.hrfin = obj && obj.hrfin || '0';
    this.direccion = obj && obj.direccion || '0';
    this.fCreacion = obj && obj.fCreacion || '';
  }
}
