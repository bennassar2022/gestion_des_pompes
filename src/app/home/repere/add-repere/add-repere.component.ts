import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReperesService} from '../../Services/reperes.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/notification.service';

@Component({
  selector: 'app-add-repere',
  templateUrl: './add-repere.component.html',
  styleUrls: ['./add-repere.component.css']
})
export class AddRepereComponent implements OnInit {

  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private repereservice: ReperesService, private router: Router, private notif : NotificationService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({

      reference: ['', Validators.required],

    });

  }
  onSubmit()
  {
    console.log(JSON.stringify(this.addForm.value));
    this.repereservice.add(JSON.stringify(this.addForm.value)).subscribe(() => {
      this.router.navigate(['/home/repere-list']);
    }, error => {
      this.notif.notify('Verifier vos données !');
    });

  }

}
