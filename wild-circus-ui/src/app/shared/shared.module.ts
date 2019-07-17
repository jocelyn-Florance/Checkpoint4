import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterGamePipe} from './pipes/filter-game.pipe';

@NgModule({
  declarations: [
    FilterGamePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterGamePipe
  ],
})
export class SharedModule { }
