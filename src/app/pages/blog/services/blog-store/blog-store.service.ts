import {Injectable} from '@angular/core';
import {BlogControllerService} from '../../../../services/controllers/blog-controller.service';
import {BehaviorSubject} from 'rxjs';
import {BlogDto} from '../../../../models/blog-dto';

@Injectable({
  providedIn: 'root'
})
export class BlogStoreService {
  private _blogs$ = new BehaviorSubject<BlogDto[]>(null);
  blogs$ = this._blogs$.asObservable();

  constructor(private blogController: BlogControllerService) {
  }

  loadBlogs(): void {
    this.blogController.getAllBlogs()
      .subscribe(resp => {
        this._blogs$.next(resp);
      });
  }
}
