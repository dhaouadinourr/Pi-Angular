import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbydateComponent } from './eventbydate.component';

describe('EventbydateComponent', () => {
  let component: EventbydateComponent;
  let fixture: ComponentFixture<EventbydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
