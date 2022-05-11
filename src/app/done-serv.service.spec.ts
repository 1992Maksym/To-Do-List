import { TestBed } from '@angular/core/testing';

import { DoneServService } from './done-serv.service';

describe('DoneServService', () => {
  let service: DoneServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoneServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
