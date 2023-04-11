import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CookieService {

  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  getCookie(name: string) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts
        .pop()
        .split(';')
        .shift();
    }
  }

  deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }

  checkVarDateIsBeforeToday(date: Date) {
    const today = new Date();
    // format today to match date format 02-22-2021
    const date = new Date();
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getFullYear()}`;
    console.log(formattedDate);

    return date < today;
  }

  checkVarDateIsAfterToday(date: Date) {
    const today = new Date();
    return date > today;
  }

  checkCookieValue(){
    if(this.getCookie('cookieName') === 'cookieValue'){
      return true;
    } else {
      return false;
    }
  }
}
