import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogDto} from '../../models/blog-dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogControllerService {

  constructor(private http: HttpClient) {
  }

  getAllBlogs(): Observable<Array<BlogDto>> {
    return this.http.get<Array<BlogDto>>('/assets/mock-data/blog/blog.json');
  }
}
