import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DialogContentDirective } from './dialog-content.directive';

@Component({
  selector: '[appDialog]',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @ContentChild(DialogContentDirective) content: DialogContentDirective;

  @ViewChild('contentVcr', { read: ViewContainerRef, static: true })
  private contentVcr: ViewContainerRef;

  @Input() title: string;

  @Output() closeEvent = new EventEmitter<void>();

  constructor(private host: ElementRef) {}

  showModal() {
    this.host.nativeElement.showModal();
  }

  close() {
    console.log('hello');
    this.element.close();
    this.closeEvent.emit();
    // this.clear();
  }

  private get element() {
    return this.host.nativeElement;
  }

  private clear() {}

  // @HostListener('click', ['$event'])
  // onDialogClick(event: MouseEvent) {
  //   console.log('hmpph not sure');
  //   if ((event.target as any).nodeName === 'DIALOG') {
  //     this.close();
  //   }
  // }

  @HostListener('cancel')
  onDialogCancel() {
    console.log('hmpph maybe');
    this.clear();
  }

  clack() {
    console.log('hello');
  }
}
