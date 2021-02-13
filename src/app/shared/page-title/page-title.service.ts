import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  _originalTitle = 'Brian Hanna';

  constructor(private bodyTitle: Title) {
  }

  _title = '';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | Brian Hanna`;
    } else {
      title = this._originalTitle;
    }
    this.bodyTitle.setTitle(title);
  }
}
