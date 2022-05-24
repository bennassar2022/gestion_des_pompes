import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../shared/notification.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  model: User = <User>{};

  private email: string;
  private password: string;
  private fullname: string;
  private matricule: string;
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

    this.formGroup= this.formBuilder.group({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required]),
      matricule: new FormControl(this.matricule, [Validators.required]),
      fullname: new FormControl(this.fullname, [Validators.required]),

    });
  }
  register() {
    if (this.formGroup.invalid) {
      return;
    }
    this.model.fullname = this.formGroup.controls.fullname.value;

    this.model.password = this.formGroup.controls.password.value;
    this.model.matricule = this.formGroup.controls.matricule.value;
    this.model.email = this.formGroup.controls.email.value;
    this.model.isactivated = false;
    this.model.role = 'user';

     this.authService.register(this.model).subscribe((response) => {
       this.notif.notify('Enregistrement avec succées ! Contactez votre admin pour l\'activation de votre compte');
       this.router.navigate(['/login']);
     }, (error) => {
         this.notif.notify('Données erronées ! ');
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
