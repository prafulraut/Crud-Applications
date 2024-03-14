import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: 1, name: 'Ram', email: 'ram@123.com', role: 'Admin' },
    { id: 2, name: 'Shyam', email: 'shyam@123.com', role: 'User' }
   ];
 
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  editUser(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
