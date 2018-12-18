import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  frequency: number = 440.0;
  context = new AudioContext();
  o = this.context.createOscillator();

  
  constructor(
    public navCtrl: NavController,
  ) {
    this.o.type = "sine";
    this.o.frequency.value = this.frequency;
    this.o.connect(this.context.destination);
  }
  
  






  start(){
    this.o.start();
    console.log("Started")

  }
  stop(){
    this.o.stop();
    console.log("Started")

  }



}
