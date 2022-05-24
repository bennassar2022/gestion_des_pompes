import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../../shared/notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PompesService} from '../../Services/pompes.service';
import {ReperesService} from '../../Services/reperes.service';
import {Repere} from '../../Models/repere';

@Component({
  selector: 'app-add-pompe',
  templateUrl: './add-pompe.component.html',
  styleUrls: ['./add-pompe.component.css']
})
export class AddPompeComponent implements OnInit {


  public reperes: Repere[];


  constructor(private notif: NotificationService ,private SR: ReperesService, private formBuilder: FormBuilder, private pompesService: PompesService, private router: Router,private routes: ActivatedRoute) { }
  addForm: FormGroup;
  ngOnInit() {

     this.SR.getAllReperes().subscribe(data => { this.reperes = data})
    this.addForm = this.formBuilder.group({

      region: ['', [Validators.required, Validators.maxLength(30)]],
      usine: ['', Validators.required],
      fonctionEquipement: ['', Validators.required],
      puissanceMoteur: ['', Validators.required],
      vitesse: ['', Validators.required],
      service: ['', Validators.required],
      peinture: ['', Validators.required],
      liaisonMoteur: ['', Validators.required],
      masseVol: ['', Validators.required],
      npshDisponible: ['', Validators.required],
      liquideVehicule: ['', Validators.required],
      vitesseNominale: ['', Validators.required],
      temperaturePompage: ['', Validators.required],
      debitNominal: ['', Validators.required],
      hauteManometrique: ['', Validators.required],
      disposition: ['', Validators.required],
      repere: ['', Validators.required],
    });


  }
  onSubmit() {
    console.log(JSON.stringify(this.addForm.value));
    this.pompesService.add(JSON.stringify(this.addForm.value)).subscribe(() => {
      this.router.navigate(['/home/pompe-list']);
    },error => {
      this.notif.notify('Verifier vos données !');
    });

  }

}
