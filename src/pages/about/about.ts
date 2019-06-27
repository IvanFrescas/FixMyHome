import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobsService } from '../../services/jobs.service';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  jobs = [];
  
  
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public jobsService: JobsService) {
    jobsService.getJobs().valueChanges()
      .subscribe( jobs => {
        this.jobs = jobs;
      });

    
  }

  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id});
    
  }

 

}
 