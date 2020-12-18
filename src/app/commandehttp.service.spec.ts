import { TestBed } from '@angular/core/testing';

import { CommandehttpService } from './commandehttp.service';

describe('CommandehttpService', () => {
  let service: CommandehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
