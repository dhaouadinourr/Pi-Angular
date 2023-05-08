import { TestBed } from '@angular/core/testing';

import { CategeventService } from './categevent.service';

describe('CategeventService', () => {
  let service: CategeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
