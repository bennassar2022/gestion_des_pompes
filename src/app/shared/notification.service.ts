import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


@Injectable({ providedIn: 'root' })
export class NotificationService {
  public notification: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private snackbar: MatSnackBar) { }

  notify(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;

    config.verticalPosition = "top";
    config.panelClass= ['color-snackbar'];
    this.snackbar.open(message, 'X', config);
  }
  closenotif() {
    this.snackbar.dismiss();
    return '';
  }
}
