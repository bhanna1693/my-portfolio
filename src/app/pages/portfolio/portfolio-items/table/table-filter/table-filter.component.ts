import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {expandOnRender} from '../../../../../animations/expand.animation';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
  animations: [expandOnRender]
})
export class TableFilterComponent implements OnInit {
  @Input() filterForm!: FormGroup;
  @Input() filterTitle = 'Filter';
  @Input() clearText = 'Clear Filters';
  @Output() clear: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  _showForm = true;

  @Input() set showForm(boo: boolean) {
    this._showForm = coerceBooleanProperty(boo);
  }

  ngOnInit(): void {
  }

  onClearFiltersClick(): void {
    this.filterForm.reset();
    this.filterForm.markAsPristine();
    this.clear.emit();
  }

  toggleFormView(): void {
    this._showForm = !this._showForm;
  }

}
