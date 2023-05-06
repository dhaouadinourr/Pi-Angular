import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbycategComponent } from './eventbycateg.component';

describe('EventbycategComponent', () => {
  let component: EventbycategComponent;
  let fixture: ComponentFixture<EventbycategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbycategComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbycategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
