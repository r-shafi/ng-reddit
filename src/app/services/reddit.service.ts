import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  constructor(private http: HttpClient) {}

  // header = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  defaultSubs() {
    return this.http.get('https://www.reddit.com/subreddits.json');
  }

  autocomplete(query: string) {
    return this.http.get(
      `https://www.reddit.com/subreddits/search.json?q=${query}&include_over_18=on`
    );
  }

  getSpecificSub(sub: string) {
    return this.http.get(`https://www.reddit.com/r/${sub}.json`);
  }
}
