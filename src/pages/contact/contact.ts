import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { JobsService } from '../../services/jobs.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  
})


export class ContactPage {
  //info = [];
  
  info = {firstName: null, lastName: null, username: null, address: null, phone: null, about: null};
  userId: string;
  uid: string;
  email: string;
  

  constructor(public navCtrl: NavController,
     private afDatabase: AngularFireDatabase,
     private afAuth: AngularFireAuth,
     public jobsService: JobsService) {
    
    

    this.afAuth.authState.subscribe(user =>{
      if(user) this.userId = user.uid
    }); 

    this.email = jobsService.getEmail();
    console.log(this.email);

    jobsService.getinfo().valueChanges()
    .subscribe( info =>{
      this.info = <{firstName: null, lastName: null, username: null, address: null, phone: null, about: null}>info;
    }); 
  }

  
  
}
