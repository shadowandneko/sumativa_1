import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // 定义 API 地址
  private loggedInUser = new BehaviorSubject<any>(null); // 用于保存已登录用户的信息

  constructor(private http: HttpClient) { }

  // 将已登录用户的信息存储为 BehaviorSubject
  setLoggedInUser(userData: any) {
    this.loggedInUser.next(userData);
  }

  // 获取已登录用户的信息
  getLoggedInUser(): Observable<any> {
    return this.loggedInUser.asObservable();
  }

  // 注册新用户
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // 获取所有用户
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // 根据ID获取用户信息
  getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  // 更新用户信息
  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put(url, user);
  }

  // 删除用户
  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }
}
