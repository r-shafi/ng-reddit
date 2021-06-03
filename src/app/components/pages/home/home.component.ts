import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RedditService } from 'src/app/services/reddit.service';
import { Post } from '../../global/interface/Models';
import { isStringURL } from '../../global/utils/functions';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: '../template/template.html',
  styleUrls: ['../template/template.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private reddit: RedditService, private dialog: MatDialog) {}

  posts: Post[] = [];
  isURL = isStringURL;

  ngOnInit(): void {
    this.reddit.getSpecificSub('popular').subscribe((data: any) => {
      this.posts = data.data.children.map((child: any) => child.data);
    });
  }

  openPost(post: Post) {
    this.dialog.open(DialogComponent, { data: post });
  }
}
