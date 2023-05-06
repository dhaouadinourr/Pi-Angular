import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryeventComponent } from './categoryevent.component';

describe('CategoryeventComponent', () => {
  let component: CategoryeventComponent;
  let fixture: ComponentFixture<CategoryeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
