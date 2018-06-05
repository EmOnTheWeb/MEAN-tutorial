/*list.service.ts*/

import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import { List } from '../models/List'
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable()
export class ListService {

    constructor(private http: Http) { }

    private serverApi= 'http://localhost:3000';

    public getAllLists():Observable<List[]> {

        let URI = `${this.serverApi}/bucketlist/`;
        return this.http.get(URI)
        .pipe(
            map((res) => res.json())
        );
    }

    // public deleteList(listId : string) {
    //   let URI = `${this.serverApi}/bucketlist/${listId}`;
    //     let headers = new Headers;
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.delete(URI, {headers})
    //     .map(res => res.json());
    // }
}