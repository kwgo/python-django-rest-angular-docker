import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { SharedService } from './shared.service';
import { environment } from '../environments/environment';

describe('SharedService', () => {
  let service: SharedService;
  let httpMock: HttpTestingController;

  const apiUrl = environment.apiBaseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedService,
        provideHttpClient(),          // provides _HttpClient
        provideHttpClientTesting()    // provides testing backend
      ]
    });

    service = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensures there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch coaches', () => {
    const dummyCoaches = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

    service.getCoaches().subscribe(coaches => {
      expect(coaches.length).toBe(2);
      expect(coaches).toEqual(dummyCoaches);
    });

    const req = httpMock.expectOne(`${apiUrl}/coach/`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCoaches);
  });

  it('should add a coach', () => {
    const newCoach = { name: 'Mike' };

    service.addCoach(newCoach).subscribe(coach => {
      expect(coach).toEqual(newCoach);
    });

    const req = httpMock.expectOne(`${apiUrl}/coach/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCoach);
    req.flush(newCoach);
  });



});
