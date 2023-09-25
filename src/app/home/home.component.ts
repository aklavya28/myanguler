import { Component } from '@angular/core';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  viewMode = "grid"
    cources:any[]= [];
    addcourse:string =""
  constructor(public service: CourseService ){
      this.cources = service.getCourses();
  }
  addCourse(){
    if (this.addcourse.length > 5){
        this.cources.push(this.addcourse)
        this.addcourse = ""
    }else{
      alert("character must be more then 6")
    }

  }


}
