import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {RegistrationServiceService} from '../service/registration-service.service';
import {User} from 'src/app/user';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  user: User;

  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder, private _service: RegistrationServiceService,
              private route: ActivatedRoute, private router: Router,
              private auth: AuthService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.loginForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;


    this._service.loginUserFromRemote(this.user).subscribe(result => {
      this.auth.loggedIn = true;
      this.gotoProducts();
    }, error => {
      this.loading = false;
      alert('Wrong username or password');
    });
  }

  // tslint:disable-next-line:typedef
  gotoProducts() {
    this.router.navigate(['/home']);
  }
}
