import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class GiphySearchManualService {
  constructor(private httpClient: HttpClient) {
  }

  pesquisarGiphy(limit: string, term: string): Observable<any> {
    const url = 'https://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC&limit=' + limit;
    console.log('url >>', url);
    return this.httpClient.get(url);

  }


}
