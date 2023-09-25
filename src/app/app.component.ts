import { CourseService } from './course/course.service';
import { Component } from '@angular/core';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LiveapiService } from './services/liveapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello_new';
  data$: Observable<any> = from(fetch(this.service.url));

  // Subscribe to begin listening for async result
//  data$.subscribe({
//     next(response) { console.log(response); },
//     error(err) { console.error('Error: ' + err); },
//     complete() { console.log('Completed'); }
//   });

  constructor( private service: LiveapiService) {
    this.data$.subscribe((p) =>{
        console.log(p)
    }, (err) => {
        return "dsfsdf sdf"
    })
  }


}
