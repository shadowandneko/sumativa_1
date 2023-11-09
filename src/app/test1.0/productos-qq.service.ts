import { Injectable } from '@angular/core';
import { ClProducto } from '../test1.0/model/CllProducto';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiUrl = "https://sumativa2.onrender.com/api/productos/";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class productosQQ {  // 更改服务类名为 productosQQ
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error);
      return of(result as T);
    };
  }

  addProduct(producto: ClProducto): Observable<ClProducto> {
    console.log("Res-api Enviando AddProducto : ", producto);
    return this.http.post<ClProducto>(apiUrl, producto, httpOptions)
      .pipe(
        tap((producto: ClProducto) => console.log('added product w/:', producto)),
        catchError(this.handleError<ClProducto>('addProduct'))
      );
  }
 //CODIGO="08-G06"
  getProducts(): Observable<ClProducto[]> {
    console.log("getProducts ()");
    return this.http.get<ClProducto[]>(apiUrl)
      .pipe(
         // 过滤数量大于0的产品
        tap(products => console.log('fetched products', products)),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: string): Observable<ClProducto> {
    console.log("getProduct ID:" + id);
    return this.http.get<ClProducto>(apiUrl + id)
      .pipe(
        tap(_ => console.log('fetched product id=${id}')),
        catchError(this.handleError<ClProducto>('getProduct id=${id}'))
      );
  }

  deleteProduct(id: number): Observable<ClProducto> {
    return this.http.delete<ClProducto>(apiUrl + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted product id=${id}')),
        catchError(this.handleError<ClProducto>('deleteProduct'))
      );
  }

  updateProduct(id: number, producto: ClProducto): Observable<ClProducto> {
    return this.http.put<ClProducto>(apiUrl + id, producto, httpOptions)
      .pipe(
        tap(_ => console.log('updated product id=${id}')),
        catchError(this.handleError<any>('updateProduct'))
      );
  }
}