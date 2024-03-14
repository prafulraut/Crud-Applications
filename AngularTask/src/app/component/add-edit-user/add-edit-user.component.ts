import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  userForm: FormGroup;
  userId!: number;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.userForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: [ '',Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if (this.userId) {
        const user = this.userService.getUserById(this.userId);
        if (user) {
          this.userForm.patchValue(user);
        } else {
          console.log("user not found");
        }
      }
    });
  }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     const user = this.userForm.value;
  //     if (user.id) {
  //       this.userService.editUser(user);
  //     } else {
  //       this.userService.addUser(user);
  //     }
  //     this.router.navigate(['/user-list']);
  //   }
  // }
  onSubmit(): void {
    this.submitted = true; 

    if (this.userForm.invalid) {
      return;
    }

    const user = this.userForm.value;
    if (user.id) {
      this.userService.editUser(user);
    } else {
      this.userService.addUser(user);
    }
    
    this.router.navigate(['/user-list'])
    this.submitted = false;
  }


}
