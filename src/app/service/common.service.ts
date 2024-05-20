import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private dialog: MatDialog) {

  }


  confirmLogout() {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to logout?' }
    });


  }
}
