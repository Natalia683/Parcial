import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 em="";
 pass="";

 loginForm = new FormGroup({

   username:new FormControl('',Validators.required),
   password: new FormControl('',Validators.required),

 });
 constructor(public loginservice:LoginService){}
 async onSubmit(){
  this.em=this.loginForm.controls["username"].value;
  this.pass=this.loginForm.controls["password"].value;

  console.log(this.em);
  console.log(this.pass)

 
  if(this.em =="" && this.pass =="1234"){
   Swal.fire(
    'Muy Bien',
    'Se ha logrado correctamente',
    'success'

   )
   localStorage.setItem('login','login');
   this.loginservice.login.next("login");
  }else{
    
   Swal.fire({
   icon: 'error',
   title:'Opps...',
   text: 'Datos incorrectos',
   footer:'intentelo de nuevo'



   })


  }





 }
}
