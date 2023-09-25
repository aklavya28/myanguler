import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-sing-up-forms',
  templateUrl: './sing-up-forms.component.html',
  styleUrls: ['./sing-up-forms.component.css']
})
export class SingUpFormsComponent {
  form:any;
  // ngOnInit(){

  //   this.form = new FormGroup({
  //     username: new FormControl('',[
  //       Validators.required,
  //       Validators.minLength(3),
  //       UsernameValidators.cannotContainSpace,
  //       // UsernameValidators.shoudUnique
  //       this.unique

  //     ]),
  //     password: new FormControl(),
  //     email: new FormControl('',[
  //       Validators.required,
  //       // Validators.nullValidator,
  //       Validators.email
  //     ]),
  //     showpass: new FormControl(),
  //   })
  // }

  constructor(fb: FormBuilder){
    this.form = fb.group({
      username: fb.control('', [Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace, this.unique] ),
      password: fb.control(''),
      email: fb.control('',[Validators.required, Validators.email]),
      showpass: fb.control('')

    })
  }


  get username(){
    return this.form.get('username');
  }
  siginSubmit(){
    this.form.setErrors({
        invalidlogin: true
    })
    console.log(this.form)
  }
   unique(Control: AbstractControl): ValidationErrors| null{
        if(Control.value === 'aklavya28'){
            return{ unique: true }
        }
       return null
    }
}
