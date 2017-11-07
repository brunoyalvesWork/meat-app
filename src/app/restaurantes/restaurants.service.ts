import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';

@Injectable()
export class RestaurantService {
    
    rests: Restaurant[];

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}