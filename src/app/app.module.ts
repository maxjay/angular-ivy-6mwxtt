import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogComponent } from './dialog/dialog.component';
// import { DialogFooterDirective } from './dialog-footer.directive';
// import { DialogHeaderDirective } from './dialog-header.directive';
// import { DialogContentDirective } from './dialog-content.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DialogComponent,
    // DialogFooterDirective,
    // DialogHeaderDirective,
    // DialogContentDirective,
    TestComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
