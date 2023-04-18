import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieEventsComponent } from './categorie-events.component';

describe('CategorieEventsComponent', () => {
  let component: CategorieEventsComponent;
  let fixture: ComponentFixture<CategorieEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
