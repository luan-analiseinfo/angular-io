import {NgModule} from '@angular/core';

import {GiphySearchManualComponent} from './giphy-search-manual.component';
import {GiphySearchManualService} from '../giphy-search-manual.service';
import {ShareModule} from '../../share/share.module';
import {GiphySearchListComponent} from '../../giphy-search-list/giphy-search-list.component';
import {GiphySearchListModule} from "../../giphy-search-list/giphy-search-list.module";

@NgModule({
  imports: [ShareModule, GiphySearchListModule],
  exports: [GiphySearchManualComponent],
  declarations: [GiphySearchManualComponent],
  providers: [GiphySearchManualService],
})
export class GiphySearchManualModule {
}
