import { NgModule } from '@angular/core';
import {ShareModule} from '../share/share.module';
import {GiphySearchListComponent} from './giphy-search-list.component';



@NgModule({
  declarations: [GiphySearchListComponent],
  exports: [GiphySearchListComponent],
  imports: [
    ShareModule
  ]
})
export class GiphySearchListModule { }
