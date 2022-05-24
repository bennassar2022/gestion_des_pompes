import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {User} from '../../../auth/model/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fullname', 'email', 'isactivated', 'Activer', 'Desactiver', 'Supprimer'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  users: User[];
  private _id: number;

  constructor( private changeDetectorRefs: ChangeDetectorRef, private usersService: AuthService, private router: Router) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.usersService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);

      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
    });


  }

  activate(model){
    this.usersService.activate(model).subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
    });
  }
  desactivate(model){
    this.usersService.desactivate(model).subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
    });
  }


  delete(model): void {
      this.usersService.delete(model).subscribe(data => {
        this.users = this.users.filter(u => u !== model);
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
      });
    }
/*
    edit(employe: users) {
      this._id = employe.id;
      this.router.navigate(['home/edit/' + this._id]);
    }
  */

}
