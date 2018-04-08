import { Injectable } from '@angular/core';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

  constructor(private http: Http) {
}

public getJSON(): Observable<any> {
    return this.http.get("assets/data.json")
                    .map((res:any) => res.json())


}

}
