import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiveapiService {

  constructor(private http: HttpClient ) { }
   url:string = 'https://jsonplaceholder.typicode.com/posts';
  getdata(){
    return this.http.get(this.url)
  }
  createData(post:any){
    return this.http.post(this.url, post)
  }
}
