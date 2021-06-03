import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../../global/interface/Models';
import { isVideo } from '../../global/utils/functions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Post) {}

  post: Post = this.data;

  isVid = isVideo;

  ngOnInit(): void {
    this.post = this.data;
    console.log(this.post);
  }
}
