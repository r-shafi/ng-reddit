import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedditService } from 'src/app/services/reddit.service';
import { childRoute, isStringURL } from '../../global/utils/functions';
import { Location } from '@angular/common';
import { Post } from '../../global/interface/Models';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-sub',
  templateUrl: '../template/template.html',
  styleUrls: ['../template/template.scss'],
})
export class SubComponent implements OnInit {
  constructor(
    private router: Router,
    private reddit: RedditService,
    private location: Location,
    private dialog: MatDialog
  ) {}

  posts: Post[] = [];
  isURL = isStringURL;

  ngOnInit(): void {
    this.reddit
      .getSpecificSub(childRoute(this.router.url))
      .subscribe((data: any) => {
        this.posts = data.data.children.map((child: any) => child.data);
      });
    this.location.onUrlChange((url) =>
      this.reddit.getSpecificSub(childRoute(url)).subscribe((data: any) => {
        this.posts = data.data.children.map((child: any) => child.data);
      })
    );
  }

  openPost(post: Post) {
    this.dialog.open(DialogComponent, { data: post });
  }
}
