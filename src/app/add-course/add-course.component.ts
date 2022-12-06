import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courseId = ""
  courseName =""
  courseVenue=""
  courseDuration=""
  courseDate=""

  constructor(private api:ApiService){}

  readValues = () =>{
    let data:any={
        "courseId":this.courseId,
        "courseName":this.courseName,
        "courseVenue":this.courseVenue,
        "courseDuration":this.courseDuration,
        "courseDate":this.courseDate,

      }
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.status == "Course Added") {
          alert("Course Added SuccessFully")
          this.courseId = ""
          this.courseName = ""
          this.courseVenue = ""
          this.courseDate = ""
          this.courseDuration = ""
        
        } else {
          alert("Something went wrong!!!")
        }
      }
    )
  }
}
