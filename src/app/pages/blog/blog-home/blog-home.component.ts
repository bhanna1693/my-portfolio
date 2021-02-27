import {Component, OnInit} from '@angular/core';
import {BlogStoreService} from '../services/blog-store/blog-store.service';
import {Observable} from 'rxjs';
import {BlogDto} from '../../../models/blog-dto';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {
  blogs$: Observable<BlogDto[]>;

  constructor(private blogStoreService: BlogStoreService) {
    this.blogs$ = this.blogStoreService.blogs$;
  }

  ngOnInit(): void {
    this.blogStoreService.loadBlogs();
  }

}
