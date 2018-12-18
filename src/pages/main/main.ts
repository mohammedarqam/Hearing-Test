import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }

  startTest(){
    this.navCtrl.push(HomePage);
  }
}
