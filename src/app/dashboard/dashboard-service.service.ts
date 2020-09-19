import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http:HttpClient) { }
  getlogginedcount():Observable<any>
  {
    return this.http.get('http://localhost/resumeeditor/user_dashboard.php');
  }
  gettemplatecount():Observable<any>
  {
    return this.http.get('http://localhost/resumeeditor/main_dahboard.php');
  }
  getusedtempcount():Observable<any>
  {
    return this.http.get('http://localhost/resumeeditor/template_performance.php');
  }
}
