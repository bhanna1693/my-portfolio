import {Component, Input, OnInit} from '@angular/core';
import {BlogDto} from '../../../../../models/blog-dto';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: BlogDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
