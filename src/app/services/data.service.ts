import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
// private imageArray = new Subject<string[]>();
// imageArrayParent$ = this.imageArray.asObservable();

// allPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  constructor(private http:HttpClient) { }

//   storePassedObject(passedData) {
//     this.allPassedData.next(passedData);
   
// }

  getBanners() {  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('mobile:bnbq637KtTu8NQqm4PW8TYCvoGuBEsqqvAWfMzNL')
      })
    };
    return this.http.get('https://api.sabha.tv/v1/getbanners', httpOptions); 
  }

  getHomeVideos() {  
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('mobile:bnbq637KtTu8NQqm4PW8TYCvoGuBEsqqvAWfMzNL')
      })
  };      
      return this.http.get('https://api.sabha.tv/v1/gethomevideos', options);
  }

  getVideoById(id){
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('mobile:bnbq637KtTu8NQqm4PW8TYCvoGuBEsqqvAWfMzNL')
      })
  };  
const data={
  id
}
  return this.http.post('https://api.sabha.tv/v1/getvideobyid',data,options)
  }
}
