import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

export class RestService {
  base: string = ConfigService.get('api');
  resource: string = '/';

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get url() {
    return this.base + this.resource;
  }

  findAll<T>() {
    return this.http.get<T>(this.url);
  }

  create<T>(body: any) {
    return this.http.post<T>(this.url, body);
  }

  update<T>(id: number, body: any) {
    return this.http.put<T>(this.url + '/' + id, body);
  }

  delete<T>(id: number) {
    return this.http.delete<T>(this.url + '/' + id);
  }
}
