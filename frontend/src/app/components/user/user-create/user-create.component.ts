import { User } from './../user.model';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    email: ''
  }

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void { }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Email criado com sucesso!')
      this.router.navigate(['/user'])
    })
  }

  cancel(): void {
    this.router.navigate(['/user'])
  }

}
