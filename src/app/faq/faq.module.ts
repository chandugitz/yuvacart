import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: FaqComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
