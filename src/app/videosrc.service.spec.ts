import { TestBed } from '@angular/core/testing';

import { VideosrcService } from './videosrc.service';

describe('VideosrcService', () => {
  let service: VideosrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
