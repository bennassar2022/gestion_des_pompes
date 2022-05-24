import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Pompe} from "../../Models/pompe";
declare var html2pdf: any;
@Component({
  selector: 'app-pdf-pompe',
  templateUrl: './pdf-pompe.component.html',
  styleUrls: ['./pdf-pompe.component.css']
})
export class PdfPompeComponent implements OnInit {

  date: Date;
  constructor(public dialogRef: MatDialogRef<PdfPompeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Pompe) {
    this.date = new Date();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  pdf(){
    const element = document.getElementById('pdf');
    html2pdf(element);

  }

}
