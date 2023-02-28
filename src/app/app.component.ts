import { Component, VERSION } from '@angular/core';
import { timer } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  showModal(): void {
    console.log('hello');
  }

  save(data: any, dialog: DialogComponent) {
    timer(1000).subscribe(() => {
      dialog.close();
    });
  }
}
