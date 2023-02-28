import { Component, EventEmitter, Output, VERSION } from '@angular/core';
import { timer } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Output() clickk = new EventEmitter<void>();

  save(data: any, dialog: DialogComponent) {
    console.log('clicked');
  }

  close() {
    console.log('close');
    this.clickk.emit();
  }

  ngOnInit() {
    console.log('init');
  }
}
