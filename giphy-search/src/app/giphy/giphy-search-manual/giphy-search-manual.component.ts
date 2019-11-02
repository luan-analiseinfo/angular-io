import {Component, OnInit} from '@angular/core';
import {GiphySearchManualService} from '../giphy-search-manual.service';

@Component({
  selector: 'giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

  gifs: any[] = [];
  term: string;
  limit: string;

  constructor(private giphySearchService: GiphySearchManualService) {
  }

  ngOnInit() {
  }


  pesquisarGiphy() {
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .subscribe(res => this.gifs = res.data);
  }

}
