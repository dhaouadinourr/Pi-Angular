import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSingArticleComponent } from './front-sing-article.component';

describe('FrontSingArticleComponent', () => {
  let component: FrontSingArticleComponent;
  let fixture: ComponentFixture<FrontSingArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontSingArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
