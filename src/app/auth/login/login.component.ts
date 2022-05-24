import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {



  User: Array<any>;

  private email: string;
  private password: string;
  private errors = {
    email: {
      required: 'L\'email ne doit pas être vide.',
      email: 'Format email invalide'
    },
    password: {
      required: 'Le mot de passe ne doit pas être vide'
    },
    server: null,
    badCredentials: null
  };
  public formGroup: FormGroup;


  constructor( private notif: NotificationService,private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.authService.logout();
    document.body.className = 'app';
      this.formGroup = this.formBuilder.group({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required]),

    });
      this.formGroup.reset();
  }
  login() {
    if (this.formGroup.invalid) {

       return;
     }
    console.log('eeeeeeeee')



    this.authService.login(this.formGroup.value).subscribe((response) => {
       const responseJson = JSON.parse(JSON.stringify(response))
       console.log('response' + response);
       localStorage.setItem('@pmp:user:token', 'string');
       localStorage.setItem('@pmp:user:data', response.role);
       this.router.navigate(['/home']);
     }, (error) => {
      if(error.status === 401) {
        this.notif.notify('utilisateur n\'est pas encore activé contactez votre admin ! ');
      } else {
        this.notif.notify('données erronés ');
      }

     });

   }


  validateItem(item): boolean {

    if (this.formGroup.get(item).invalid && (this.formGroup.get(item).dirty || this.formGroup.get(item).touched)) {
      return true;
    }
    return false;
  }

  getFormErrors(item) {
    return this.formGroup.get(item).errors;
  }

  clearCredentialsErrors() {
    this.errors.badCredentials = null;
  }
}
