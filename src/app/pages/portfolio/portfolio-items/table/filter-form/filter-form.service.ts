import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

export interface FilterForm {
  name: string;
}

@Injectable()
export class FilterFormService {
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.buildForm();
  }

  private buildForm() {
    return this.fb.group({
      name: [null]
    });
  }
}
