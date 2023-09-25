import { Component, Input, OnInit } from "@angular/core";
import { CourseService } from "./course/course.service";

@Component({
    selector: 'courses',
    inputs: ['isFavrate'],
    template: `<h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    <ul>
        <li *ngFor="let s of student">
           name:  {{s.name}}
           Class: {{s.class}}
        </li>
    </ul>
    <img [src]="imgurl" alt="">
    <table>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td [attr.colspan]="count">main</td>
        </tr>
    </table>
    <button class="btn btn-info" [class.active] = "isActive">sdf sdf s</button>
    <button (click)="onClick()">sdfsdfsdf</button>
    <br>
    <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()" />
    <p>{{para | summery:10 :"google.com"  }}</p>

    <favrit [isTested]="false" [hobies] = "hobies" (myoutput)="getdata($event)"></favrit>

    <ul *ngIf="lang" >
        <li *ngFor="let l of lang">
            {{l}}

        </li>

    </ul>


    `
})
export class CoursesComponent{

    lang:any[]=[]

    hobies:any[] = []
    title = "list of courses";
    isTested_p:boolean = false
    count = 5;
    para = "sdf sdfsd fsdf sdfosd nfsdfisdf nsdfisdf nsdfisdfn sdfisd fnsdf isdfn sfisdf sdifns dfisdf nsdfisdfn sdfisdn fsdif sndfisdfnsd ifsdnf sdif ndsfids fnsdifsjfsdokfsdofjnsdf isdf n "
    isActive = true
    imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhCs4f2YW-VqYSm1zPkcdznlX95UOuiO8tw&usqp=CAU"
    courses:any = [];
    student:any = [];
    @Input() newstu:any = [];
    email="emample@exl.com"
        onKeyUp(){
            console.log(this.email)
        }
    constructor(public service: CourseService){
        this.courses = service.getCourses();
        this.student = service.getStudents();
        this.hobies = service.getStudents();
    }
    ngOnInit(){

    }
    onClick(){

        console.log("sdfdf", this.newstu)
    }
    getdata(value:any ){
        this.lang = value

    }

}
