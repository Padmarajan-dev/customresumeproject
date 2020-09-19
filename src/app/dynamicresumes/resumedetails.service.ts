import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResumedetailsService {
  constructor(public http:HttpClient) { }
  getresumedetails(resumedetails):Observable<any>
  {
   return this.http.post('http://localhost/resumeeditor/fetchresume_content.php',resumedetails);
  }
  getaboutusdetails(resumedetails):Observable<any>
  {
   return this.http.post('http://localhost/resumeeditor/fetchaboutus_content.php',resumedetails);
  }
  getportfoliodetails(resumedetails):Observable<any>
  {
   return this.http.post('http://localhost/resumeeditor/fetch_portfolio_details.php',resumedetails);
  }
  getskillsdetails(resumedetails):Observable<any>
  {
   return this.http.post('http://localhost/resumeeditor/fetch_skills_details.php',resumedetails);
  }
  getsocialmediadetails(resumedetails):Observable<any>
  {
   return this.http.post('http://localhost/resumeeditor/fetch_socialmedia_details.php',resumedetails);
  }
  getcarrierdetails(resumedetails):Observable<any>
  {
   return this.http.post('http://localhost/resumeeditor/fetch_carrier_details.php',resumedetails);
  }
}
