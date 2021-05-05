import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Meal } from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getMeals() : Observable<Meal[]> {
    return this.http.get<Meal[]>(this.baseUrl + 'food.json').pipe(catchError(this.handleError));
  }

  getMeal(id: number) : Observable<any> {
    return this.http.get<Meal[]>(this.baseUrl + 'food.json')
    .pipe(
      map(meals => {
        let meal = meals.filter((food: Meal) => food.id == id);
        return (meal && meal.length) ? meal[0] : null;
  }),
  catchError(this.handleError)
  )
}

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }


}
