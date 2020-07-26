import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesHolderComponent } from './categories-holder.component';

describe('CategoriesHolderComponent', () => {
  let component: CategoriesHolderComponent;
  let fixture: ComponentFixture<CategoriesHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
