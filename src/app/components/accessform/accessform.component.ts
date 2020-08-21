import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateLogonServiceService } from '../../services/validate-logon-service.service';

@Component({
  selector: 'app-accessform',
  templateUrl: './accessform.component.html'
})
export class AccessformComponent implements OnInit {

  isButtonEnabled: boolean = true;
  isSpinnerEnabled: boolean = false; 
  
  profileForm = new FormGroup({
    'email': new FormControl('',[Validators.required,Validators.minLength(5)]),
    'password': new FormControl('',[Validators.required]),
  });

  timeLeft: number = 5;
  interval;
  subscribeTimer: any;

  constructor(private router:Router,validateservice:ValidateLogonServiceService) { }

  ngOnInit(): void {
    console.log("Button:",this.isButtonEnabled);
    console.log("Form Details:",this.profileForm.valid);
    // console.log("email",email.valid);
  }

  onSubmit(){
    
    this.isButtonEnabled = false;
    this.isSpinnerEnabled = true;
    this.startTimer();
    
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 5;
      }
      if(this.timeLeft == 0)
      {
        this.pauseTimer();
        this.router.navigate(['/userdash']);
        return;
      }
      console.warn("Time left:",this.timeLeft);
      
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
