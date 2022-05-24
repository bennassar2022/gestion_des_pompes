import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Pompe} from '../../Models/pompe';
import {Router} from '@angular/router';
import {PompesService} from '../../Services/pompes.service';
import {PdfPompeComponent} from '../pdf-pompe/pdf-pompe.component';
import {NotificationService} from '../../../shared/notification.service';

@Component({
  selector: 'app-list-pompe',
  templateUrl: './list-pompe.component.html',
  styleUrls: ['./list-pompe.component.css']
})
export class ListPompeComponent implements OnInit {
  public  role = (localStorage.getItem('@pmp:user:data'));
  displayedColumns: string[] = ['region', 'usine' , 'puissanceMoteur' , 'peinture', 'Supprimer', 'fiche' , 'contrat'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pompes: Pompe[];
  private _id: number;

  constructor(private notif: NotificationService , private dialog: MatDialog , private changeDetectorRefs: ChangeDetectorRef, private pompeservice: PompesService, private router: Router) {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.pompeservice.getAllPompes().subscribe((data: Pompe[]) => {
      this.pompes = data;
      console.log(this.pompes);

      this.dataSource = new MatTableDataSource<Pompe>(this.pompes);
      this.dataSource.paginator = this.paginator;
    });


  }

  openDialogFiche(element): void {

    const dialogRef = this.dialog.open(PdfPompeComponent, {
      width: '850px',
      autoFocus: false,
      maxHeight: '90vh',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  delete(model): void {
    this.pompeservice.delete(model).subscribe(data => {
      this.pompes = this.pompes.filter(u => u !== model);
      this.dataSource = new MatTableDataSource<Pompe>(this.pompes);
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
    }, error => {
      this.notif.notify('Supression impossible !!! ');
    });
  }
  /*
      openDialogAttestation(element): void {
        const dialogRef = this.dialog.open(AttestationComponent, {
          width: '700px',
          data: element
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

        });
      }

      delete(employe: Employes): void {
        this.pompeservice.deleteEmploye(employe.id).subscribe(data => {
          this.employes = this.employes.filter(u => u !== employe);
          this.dataSource = new MatTableDataSource<Employes>(this.employes);
          this.dataSource.paginator = this.paginator;
          this.changeDetectorRefs.detectChanges();
        });
      }

      edit(employe: Employes) {
        this._id = employe.id;
        this.router.navigate(['home/edit/' + this._id]);
      }
    */

}
