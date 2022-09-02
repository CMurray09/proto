import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Object> {
    return this.http.get('https://content-cache.watchcorridor.com/v6/interview');
  }
}
