import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicControls } from '@ionic-native/music-controls';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  freq = 100;
  ozcontext = new AudioContext();
  oz = this.ozcontext.createOscillator();
  gainNode = this.ozcontext.createGain();


  constructor(
    public navCtrl: NavController,
    private musicControls: MusicControls,
  ) {
    this.changeFre();


    

  }
ionViewDidLoad(){
  this.musicControls.create({
    track       : 'Time is Running Out',        // optional, default : ''
    artist      : 'Muse',                       // optional, default : ''
    cover       : 'albums/absolution.jpg',      // optional, default : nothing
    // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
    //           or a remote url ('http://...', 'https://...', 'ftp://...')
    isPlaying   : true,                         // optional, default : true
    dismissable : true,                         // optional, default : false
  
    // hide previous/next/close buttons:
    hasPrev   : false,      // show previous button, optional, default: true
    hasNext   : false,      // show next button, optional, default: true
    hasClose  : true,       // show close button, optional, default: false
  
  // iOS only, optional
    album       : 'Absolution',     // optional, default: ''
    duration : 60, // optional, default: 0
    elapsed : 10, // optional, default: 0
    hasSkipForward : true,  // show skip forward button, optional, default: false
    hasSkipBackward : true, // show skip backward button, optional, default: false
    skipForwardInterval: 15, // display number for skip forward, optional, default: 0
    skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
    hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional
  
    // Android only, optional
    // text displayed in the status bar when the notification (and the ticker) are updated, optional
    ticker    : 'Now playing "Time is Running Out"',
    // All icons default to their built-in android equivalents
    playIcon: 'media_play',
    pauseIcon: 'media_pause',
    prevIcon: 'media_prev',
    nextIcon: 'media_next',
    closeIcon: 'media_close',
    notificationIcon: 'notification'
   });
  
   this.musicControls.subscribe().subscribe(action => {

    function events(action) {
      const message = JSON.parse(action).message;
          switch(message) {
              case 'music-controls-headset-unplugged':
              console.log("Unplugged")
                  break;
              case 'music-controls-headset-plugged':
              console.log("Plugged")
                  break;
              default:
                  break;
          }
      }
 
    }); 


    this.musicControls.listen(); // activates the observable above
 

  
  
  }


changeFre() {
  this.oz.connect(this.gainNode);
  this.gainNode.connect(this.ozcontext.destination);
  this.gainNode.gain.value = 0.1;
  this.oz.type = 'sine';
  this.oz.frequency.value = this.freq;
}


start() {
  this.oz.start();

}
stop() {
  this.oz.stop();

}





}
