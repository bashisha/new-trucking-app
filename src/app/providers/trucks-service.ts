import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserData } from './user-data';
//import {  RequestOptions } from 'http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {
  private baseUrl = 'http://localhost:18105/api';
  data: any;
  private _options: RequestOptions = null;
  private __headers: Headers;

  constructor(public http: Http, public user: UserData) { }

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('assets/data/data.json')
        .pipe(map(this.getTrucks, this));
    }
  }

  getTrucks2(): Observable<any> {
    const corsHeaders = new Headers();
    corsHeaders.append('Access-Control-Allow-Origin', '*');
    corsHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    return this.http.get(`${this.baseUrl}/trucks`,
      { headers: corsHeaders })
      .pipe(map((response: Response) => {
        this.data = response.json();
        return this.data;
      }))
      .pipe(catchError(this.handleError('getTrucks', [])));
  }

  getFreights(): Observable<any> {
    const corsHeaders = new Headers();
    corsHeaders.append('Access-Control-Allow-Origin', '*');
    corsHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    return this.http.get(`${this.baseUrl}/freights`,
      { headers: corsHeaders })
      .pipe(map((response: Response) => {
        this.data = response.json();
        return this.data;
      }))
      .pipe(catchError(this.handleError('getFreights', [])));
  }

  getTrucks() {
    return this.load().pipe(
      map((data: any) => {
        return data.speakers.sort((a: any, b: any) => {
          const aName = a.name.split(' ').pop();
          const bName = b.name.split(' ').pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }

  getTracks() {
    return this.load().pipe(
      map((data: any) => {
        return data.tracks.sort();
      })
    );
  }

  getMap() {
    return this.load().pipe(
      map((data: any) => {
        return data.map;
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
