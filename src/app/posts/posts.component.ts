
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LiveapiService } from '../services/liveapi.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent   {

  form:any;
  data:any;
  active:boolean = true
  url:string = 'https://jsonplaceholder.typicode.com/posts';
  sunil = [{id: 10, name:"sunil"}]
  // constructor( private http: HttpClient, private fb: FormBuilder){
  constructor( private service: LiveapiService, private fb: FormBuilder){

    service.getdata().subscribe(
      res =>{
      this.data = res
      },
      error => {
        alert(error.message)
        console.log(error)
    });

  }
  ngOnInit(){

    this.form =  this.fb.group({
      title: this.fb.control('', Validators.required),
      body: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)] ),

    })

    this.form.valueChanges.subscribe(() => {
        if (this.form.valid){
                 this.active = false
        }else{
              this.active =true
        }
      });
  }

  createPost(){

    if(this.form.valid){

     let inputtitle:HTMLInputElement | string = this.form.value.title;
     let inputbody:HTMLInputElement | string = this.form.value.body;
     let post:any = {title: inputtitle, body:inputbody }

      this.service.createData(post).subscribe(
        (res:any)=>{
        // console.log(res)
        post.id = res.id
        this.data.splice(0,0,post)
        },
        (errr)=>{
          alert(errr.message)

        }
      )
      this.form.get('title')?.reset()
      this.form.get('body')?.reset()

    }

  }
  // createPost(inputTitle:HTMLInputElement, inputbody: HTMLInputElement){
  //   let post:any = {title: inputTitle, body: inputbody};
  //   // inputTitle.value = ''
  //   this.http.post(this.url, post).subscribe((res:any) =>{
  //       post.id = res.id
  //       post.title = inputTitle.value
  //       post.title = inputbody.value
  //       console.log(post)
  //     this.data.splice(0,0,post)
  //   })

  // }


}
