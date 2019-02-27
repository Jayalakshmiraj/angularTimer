import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
arr:any=[];
  constructor() { }

  ngOnInit() {
    for(var ar=0;ar<=100;ar++){
      (function(ar){
        setTimeout(function()
        {
          console.log(ar)},ar*1000);
        })(ar);
      
    }
    
  }
}
