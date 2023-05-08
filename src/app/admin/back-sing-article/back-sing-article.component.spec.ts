import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSingArticleComponent } from './back-sing-article.component';

describe('BackSingArticleComponent', () => {
  let component: BackSingArticleComponent;
  let fixture: ComponentFixture<BackSingArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackSingArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackSingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
