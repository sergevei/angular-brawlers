import { NgModule } from '@angular/core';

// Angular material UI
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
  ]
})
export class AppMaterialModule {

}