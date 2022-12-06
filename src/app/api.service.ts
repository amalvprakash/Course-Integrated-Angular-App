import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor(private http:HttpClient) { }

  fetchCourses = () =>{
    return this.http.get("http://localhost:8080/viewall")
  }
  addCourse = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/addCourse",dataToSend)
  }
}
