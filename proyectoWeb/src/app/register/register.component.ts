import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserI } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  onRegister(form): void{
    this.authService.register(form.value).subscribe(res =>{
      this.router.navigateByUrl('/turnos');
    });
  }

}
