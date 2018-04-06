import { TestBed, inject } from '@angular/core/testing';

import { DataOpService } from './data-op.service';

describe('DataOpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataOpService]
    });
  });

  it('should be created', inject([DataOpService], (service: DataOpService) => {
    expect(service).toBeTruthy();
  }));
});
