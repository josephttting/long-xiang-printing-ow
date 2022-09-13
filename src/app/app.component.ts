import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'longxiang-printing-ow';
  constructor(public dialog: MatDialog) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdvertisementDialog, {
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(() => {

    });
  }
}

@Component({
  selector: 'advertise-dialog',
  templateUrl: './advertise-dialog.html',
  styleUrls: ['./app.component.scss']
})
export class AdvertisementDialog {
}
