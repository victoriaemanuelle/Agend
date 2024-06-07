import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private _http: HttpClient) { }

  addAgend(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/marcados', data)
  }
}
