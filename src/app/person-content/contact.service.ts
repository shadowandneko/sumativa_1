import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ClContact } from './models/ClContact';
import {  throwError } from 'rxjs';
const apiUrl = 'http://localhost:3000/contacts'; // 请确保此地址正确
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  // 获取所有联系人
  getContacts(): Observable<ClContact[]> {
    return this.http.get<ClContact[]>(apiUrl).pipe(
      catchError(this.handleError('getContacts', []))
    );
  }

  // 通过ID获取联系人
  getContactById(id: number): Observable<ClContact> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<ClContact>(url).pipe(
      catchError(this.handleError<ClContact>(`getContactById id=${id}`))
    );
  }

  // 添加联系人
  addContact(contact: ClContact): Observable<ClContact> {
    return this.http.post<ClContact>(apiUrl, contact, httpOptions).pipe(
      catchError(this.handleError<ClContact>('addContact'))
    );
  }

  // 更新联系人
  updateContact(contact: ClContact): Observable<ClContact> {
    const url = `${apiUrl}/${contact.id}`;
    console.log('Update URL:', url); // 输出 URL
    console.log('Contact Data:', contact); // 输出联系人数据
    return this.http.put<ClContact>(url, contact, httpOptions).pipe(
      catchError(this.handleError<ClContact>('updateContact'))
    );
  }
  

  // 删除联系人
  deleteContact(id: number): Observable<ClContact> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<ClContact>(url, httpOptions).pipe(
      catchError(this.handleError<ClContact>('deleteContact'))
    );
  }

  // 处理 HTTP 请求错误
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(error.message); // 使用 throwError 替代 Observable.throw
    };
  }
}
