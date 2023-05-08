import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontArticleComponent } from './front-article.component';

describe('FrontArticleComponent', () => {
  let component: FrontArticleComponent;
  let fixture: ComponentFixture<FrontArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
