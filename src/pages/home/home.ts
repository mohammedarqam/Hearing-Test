import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  freq = 100;
  ozcontext =new AudioContext();
  oz = this.ozcontext.createOscillator();
  gainNode = this.ozcontext.createGain();

  
  constructor(
    public navCtrl: NavController,
  ) {
    this.changeFre();
  }







  changeFre(){
    this.oz.connect(this.gainNode);
    this.gainNode.connect(this.ozcontext.destination);
    this.gainNode.gain.value = 0.1;
    this.oz.type = 'sine';
    this.oz.frequency.value = this.freq;
  }  
  

  start(){
    this.oz.start();

  }
  stop(){
    this.oz.stop();

  }



}
