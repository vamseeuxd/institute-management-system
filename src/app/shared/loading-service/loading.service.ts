import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loaders: number[] = [];

  constructor() {}
  show(): number {
    const loaderId = new Date().getTime();
    this.loaders.push(loaderId);
    return loaderId;
  }
  hide(loaderId: number) {
    for (let i = 0; i < this.loaders.length; i++) {
      if (this.loaders[i] == loaderId) {
        this.loaders.splice(i, 1);
      }
    }
  }
}
