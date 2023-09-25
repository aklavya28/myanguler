import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course/course.service";
@Component({
    selector:"class-binding",
    template: `
        <div>
            <button class="btn" [ngClass]="{
                'btn-outline-info': attrbinding,
                'btn-dark': !attrbinding,
                'disabled': disable

            }" (click)="bindBtn()"> click me</button>
        </div>
    `
})
export class ClassbindingComponent{


    attrbinding:boolean = false
    disable:boolean = false
    constructor( public like: CourseService){
        this.attrbinding = this.like.getlike()
    }


    bindBtn(){
        this.attrbinding = !this.attrbinding
    }
}
