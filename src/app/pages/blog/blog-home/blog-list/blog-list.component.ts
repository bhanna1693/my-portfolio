import {Component, Input, OnInit} from '@angular/core';
import {BlogDto} from '../../../../models/blog-dto';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Input() blogs: BlogDto[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
