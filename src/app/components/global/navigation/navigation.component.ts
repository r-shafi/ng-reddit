import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RedditService } from 'src/app/services/reddit.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  query = new FormControl('');
  links: any;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private reddit: RedditService
  ) {}

  ngOnInit() {
    this.reddit.defaultSubs().subscribe((data: any) => {
      this.links = data.data.children.map(
        (child: any) => child.data.display_name
      );
    });
  }

  getSuggestions() {
    this.reddit.autocomplete(this.query.value).subscribe((data: any) => {
      this.links = data.data.children.map(
        (child: any) => child.data.display_name
      );
    });
  }
}
