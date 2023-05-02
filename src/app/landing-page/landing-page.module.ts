import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class LandingPageModule {}
