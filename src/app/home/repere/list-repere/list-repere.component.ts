import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Repere} from '../../Models/repere';
import {NotificationService} from '../../../shared/notification.service';
import {ReperesService} from '../../Services/reperes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-repere',
  templateUrl: './list-repere.component.html',
  styleUrls: ['./list-repere.component.css']
})
export class ListRepereComponent implements OnInit {

  displayedColumns: string[] = ['reference', 'Supprimer' ];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  reperes: Repere[];
  private _id: number;

  constructor( private notif : NotificationService, private changeDetectorRefs: ChangeDetectorRef, private repereservice: ReperesService, private router: Router) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.repereservice.getAllReperes().subscribe((data: Repere[]) => {
      this.reperes = data;

      console.log(this.reperes);

      this.dataSource = new MatTableDataSource<Repere>(this.reperes);
      this.dataSource.paginator = this.paginator;

    });


  }


  delete(model): void {
    this.repereservice.delete(model).subscribe(data => {
      this.reperes = this.reperes.filter(u => u !== model);
      this.dataSource = new MatTableDataSource<Repere>(this.reperes);
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
    }, error => {
      this.notif.notify('Supression impossible !!! ');
    });
  }

  edit(reperes) {
    this._id = reperes.id;
    this.router.navigate(['home/reperes-edit/' + this._id]);
  }



}
