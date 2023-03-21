import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CallService {
  makeCall(number: string) {
    window.location.href = `tel:${number}`;
  }
}