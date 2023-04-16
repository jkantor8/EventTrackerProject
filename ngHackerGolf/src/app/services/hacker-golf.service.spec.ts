import { TestBed } from '@angular/core/testing';

import { HackerGolfService } from './hacker-golf.service';

describe('HackerGolfService', () => {
  let service: HackerGolfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerGolfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
