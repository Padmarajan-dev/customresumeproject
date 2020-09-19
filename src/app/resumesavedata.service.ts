import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumesavedataService {
  headers:any;

  constructor(private http:HttpClient) { }
  getavgstars():Observable<any>
  {
    return this.http.get('http://localhost:3000/avgrating');
  }
  checkreview(ratingdetails):Observable<any>
  {
    return this.http.post('http://localhost:3000/checkreview',ratingdetails);
  }
  starrating(ratingdetails):Observable<any>
  {
    return this.http.post('http://localhost:3000/starrating',ratingdetails);
  }
  savetopdetails(topdetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/resumetopdetails.php',topdetails);
  }
  saveaboutusdetails(aboutusdetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/aboutusdetails.php',aboutusdetails);
  }
  saveportfoliodetails(portfoliodetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/portfoliodetails.php',portfoliodetails);
  }
  saveskillsdetails(skillsdetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/skillsdetails.php',skillsdetails);
  }
  savesocialmediadetails(socialmediadetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/socialmediadetails.php',socialmediadetails);
  }
  savecarrierdetails(carrierdetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/carrierdetails.php',carrierdetails);
  }
  signin(userdetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/signin.php',userdetails);
  }
  login(userdetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/login.php',userdetails);
  }
  admincredent(payload){
    return this.http.post('http://localhost/resumeeditor/admin_login.php',payload);
  }
  saveresumedetails(resumedetails):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/aboutresume.php',resumedetails);
  }
  fetchresumedetails():Observable<any>
  {
    return this.http.get('http://localhost/resumeeditor/fetchaboutresume.php');
  }
  checkresumeactivity(details)
  {
    return this.http.post('http://localhost/resumeeditor/checkresumeactivity.php',details);
  }
  postratingdetails(payload):Observable<any>
  {
    return this.http.post('http://localhost/resumeeditor/group.php',payload);
  }
}
