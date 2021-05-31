import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedditService } from 'src/app/services/reddit.service';
import { childRoute, isMedia } from '../../global/utils/functions';
import { Location } from '@angular/common';
import { Post } from '../../global/interface/Models';

@Component({
  selector: 'app-sub',
  templateUrl: '../template/template.html',
  styleUrls: ['../template/template.scss'],
})
export class SubComponent implements OnInit {
  constructor(
    private router: Router,
    private reddit: RedditService,
    private location: Location
  ) {}

  posts: Post[] = [];
  isMedia = isMedia;

  ngOnInit(): void {
    this.reddit
      .getSpecificSub(childRoute(this.router.url))
      .subscribe((data: any) => {
        console.log(data);
        this.posts = data.data.children.map((child: any) => child.data);
      });
    this.location.onUrlChange((url) =>
      this.reddit.getSpecificSub(childRoute(url)).subscribe((data: any) => {
        this.posts = data.data.children.map((child: any) => child.data);
      })
    );
  }
}
