import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCategoryTilesComponent } from './portfolio-category-tiles.component';

describe('PortfolioCategoryTilesComponent', () => {
  let component: PortfolioCategoryTilesComponent;
  let fixture: ComponentFixture<PortfolioCategoryTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCategoryTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCategoryTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
