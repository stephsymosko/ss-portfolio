import { TestBed } from '@angular/core/testing';
import { CookieService } from './cookie.service';


describe('CookieService', () => {
  let service: CookieService;

    beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
    });
    it('should be created', () => {
    expect(service).toBeTruthy();
    } );

    it('should set a cookie with the correct name, value, and expiration date', () => {
      const name = 'test';
      const value = 'test';
      const days = 1;
      service.setCookie(name, value, days);
      expect(document.cookie).toContain(name);
      expect(document.cookie).toContain(value);
      expect(document.cookie).toContain(days);
    });

    it('should return the correct value for a given cookie name', () => {
      const name = 'test';
      const value = 'test';
      const days = 1;
      service.setCookie(name, value, days);
      expect(service.getCookie(name)).toEqual(value);
    });

    it('should make sure the cookie is not null before returning it', () => {
      const name = 'test';
      const value = 'test';
      const days = 1;
      service.setCookie(name, value, days);
      expect(service.getCookie(name)).not.toBeNull();
    } );




});
