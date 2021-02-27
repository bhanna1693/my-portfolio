import {Component, Input, OnInit} from '@angular/core';
import {BlogDto} from '../../../../models/blog-dto';

@Component({
  selector: 'app-featured-blog',
  templateUrl: './featured-blog.component.html',
  styleUrls: ['./featured-blog.component.scss']
})
export class FeaturedBlogComponent implements OnInit {
  @Input() featuredBlog: BlogDto;

  constructor() { }

  ngOnInit(): void {
  }

}
