import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
   static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0){
            return { cannotContainSpace: true }
        }
        return null
    }
    static shoudUnique(Control: AbstractControl): Promise<ValidationErrors| null>{
        return new Promise((resolve, reject)=>{
            if(Control.value === 'aklavya28'){
                resolve({ unique: true })
            } else{
                resolve(null)
            }
        })
    }


}
