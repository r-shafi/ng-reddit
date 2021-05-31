import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { Post } from '../../global/interface/Models';
import { isMedia, extractURL } from '../../global/utils/functions';

@Component({
  selector: 'app-home',
  templateUrl: '../template/template.html',
  styleUrls: ['../template/template.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private reddit: RedditService) {}

  posts: Post[] = [];
  isMedia = isMedia;

  ngOnInit(): void {
    this.reddit.getSpecificSub('popular').subscribe((data: any) => {
      this.posts = data.data.children.map((child: any) => child.data);
    });
  }
}
