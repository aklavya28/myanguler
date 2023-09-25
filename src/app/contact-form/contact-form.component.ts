import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact =[
    {
      id: 1, type: "Email"
    },
    {
      id: 2, type: "Phone"
    }
  ]
  gender = [
    {id:1, type: "Male"},
    {id:2, type: "Female"},
    {id:3, type: "Other"}
  ]
  log(e:any){
    console.log(e.control.errors)
  }
  submit(f:any){
    console.log(f.value)
  }

}
