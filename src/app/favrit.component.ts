import { Component,Input, Output, EventEmitter, OnInit} from "@angular/core";

@Component({
    selector: "favrit",
    template: `<div>
        <button type="button" (click)="btnOnClick()" >{{isTested ? "Hide" : "Show"}} Student</button>
            <ul *ngIf="isTested">
                <li *ngFor="let s of hobies">
                    Name: {{s.name}} Class: {{s.class}}
                </li>
            </ul>
            <input type="text" [(ngModel)]  = "content" >
            {{content}}
        <button type="button" (click)="senddata()">Send</button>
            <br>
        <input type="text" [(ngModel)]="addLeng" (keyup.enter)="addTech()">
    </div>`
})



export class FavritComponent{
    @Input() isTested:boolean = true;
    @Input() hobies:any;

    @Output() myoutput:EventEmitter<any> = new EventEmitter();
    outsting = ["javascipt", "python", "ruby"];
    content = "dgdfgdfg"
    addLeng = ""

    constructor(){

    }
    ngOnInit(){

    }
    btnOnClick(){
        this.isTested = !this.isTested

    }
    senddata(){
        this.myoutput.emit(this.outsting)

    }
    addTech(){
        if(this.addLeng.length > 5){

            this.outsting.push(this.addLeng)
            this.addLeng = ""
        }
    }


}
