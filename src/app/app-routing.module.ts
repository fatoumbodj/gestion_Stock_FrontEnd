import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  urlApi = 'http://localhost:8080/calcul/';

/*
  getObjet (): Observable<String[]> {
    return this.http.get<String[]>(this.urlApi);
  }

  constructor(private http: HttpClient) {
    return  "Hello"
  }
*/

}
