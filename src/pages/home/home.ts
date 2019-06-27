import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarpenterPage } from '../carpenter/carpenter';
import { LocksmithPage } from '../locksmith/locksmith';
import { PainterPage } from '../painter/painter';
import { PlumberPage } from '../plumber/plumber';
import { DetailPage } from '../detail/detail';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController, private adDatabase: AngularFireDatabase) {

  }

  goCarpenter() {
    console.log("Click en carpintero");
    this.navCtrl.push(CarpenterPage);
  }

  goLocksmith() {
    console.log("Click en cerrajero");
    this.navCtrl.push(LocksmithPage);
  }

  goPainter() {
    console.log("Click en pintor");
    this.navCtrl.push(PainterPage);
  }

  goPlumber() {
    console.log("Click en pintor");
    this.navCtrl.push(PlumberPage);
  }

  detalles(typeId) {
    this.navCtrl.push(DetailPage, {id:0, typeId});
  }
  
  

}
