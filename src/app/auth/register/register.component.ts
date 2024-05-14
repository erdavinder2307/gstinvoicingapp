import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { SignUpModel } from 'src/app/models/signupmodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm: FormGroup = new FormGroup({});
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSubmit() {
    let model = new SignUpModel(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.email, this.signupForm.value.password);

    let res = this.authService.signup(model)



  }

}
