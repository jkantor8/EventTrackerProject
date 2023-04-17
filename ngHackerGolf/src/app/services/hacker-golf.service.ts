import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Rounds } from '../models/rounds';

@Injectable({
  providedIn: 'root'
})
export class HackerGolfService {

  baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/rounds';

  constructor(

    private http: HttpClient

  ) { }

  index(): Observable<Rounds[]> {
    return this.http.get<Rounds[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RoundService.index(): error retrieving rounds: ' + err)
        );
      })
    );
  }



  delete(roundId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${roundId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RoundService.delete(): error deleting round: ' + err)
        );
      })
    );
  }


  create(round: Rounds): Observable<Rounds> {
    return this.http.post<Rounds>(this.url, round).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RoundService.create(): error creating round: ' + err)
        );
      })
    );
  }

  update(roundId: number, round: Rounds): Observable<Rounds> {
    return this.http.put<Rounds>(`${this.url}/${roundId}`, round).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('RoundService.update(): error updating round: ' + err)
        );
      })
    );
  }
}
