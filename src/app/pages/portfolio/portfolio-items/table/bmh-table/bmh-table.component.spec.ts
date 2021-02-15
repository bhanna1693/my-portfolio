import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmhTableComponent } from './bmh-table.component';

describe('BmhTableComponent', () => {
  let component: BmhTableComponent;
  let fixture: ComponentFixture<BmhTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmhTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmhTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
