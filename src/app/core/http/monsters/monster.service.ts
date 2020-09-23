import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { Monster } from '../../../shared/models/monster';
import { ResultList } from '../dtos/resultList';
import { environment } from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class MonsterService {

  constructor(private httpClient: HttpClient ) { }

  getMonster(index: string): Observable<Monster>  {

    return this.httpClient.get<Monster>(`${environment.apiUrl}/monsters/${index}`).pipe(
      retry(2),
      catchError(this.handleError)
    )

  }

  listMonsters(): Observable<ResultList<Monster>> {

    return this.httpClient.get<ResultList<Monster>>(`${environment.apiUrl}/monsters`).pipe(
      retry(2),
      catchError(this.handleError)
    )

  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }

}
