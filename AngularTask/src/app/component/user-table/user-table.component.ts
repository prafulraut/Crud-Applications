import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { Router } from '@angular/router';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  editIcon = faPenToSquare;
  deleteIcon = faTrash
  constructor(
    private userSevice: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users = this.userSevice.getUsers()
    console.log(this.users);
  }

  editUser(user: User) {
    this.router.navigate(['/edit-user', user.id]);
  }

  deleteUser(user: User) {
    this.userSevice.deleteUser(user.id);
    this.users = this.userSevice.getUsers();
  }

}
