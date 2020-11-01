import { EOF } from '@angular/compiler';
import { Component, OnInit,SimpleChanges,ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides : []; 
  live_videos;
  arrivals;
  documentries;
  series: string[] = [];
  originals;
  talk_show;
  details:[];
  cast:[]; gallery: string[] = [];
  linktoShow;
  
  closeResult: string;
  title = 'appBootstrap';
 
  constructor(private dataservice:DataService,private modalService: NgbModal, 
    private router:Router) { 
    this.getBanners();
    this.getHomeVideos();    
  }

  ngOnInit(): void {
  }

  // ngOnChanges(changes:SimpleChanges) {
  //   this.showImages(this.linktoShow);
  // }

  getBanners() {
    this.dataservice.getBanners()
    .subscribe((res:any) => {
      // console.log(res.data)
      this.slides = res.data;
    })
  }

  getHomeVideos() {           
    this.dataservice.getHomeVideos()
    .subscribe((resp: any) => {
      console.log(resp.data)       
      this.documentries = resp.data[0]['videos'];
      this.live_videos = resp.data[1]['videos'];
      this.arrivals = resp.data[2]['videos'];
      this.originals = resp.data[3]['videos'];
      this.talk_show = resp.data[4]['videos'];  
      
       

        for(var j in resp.data) {
          for(var k in resp.data[j].videos) {
            if(resp.data[j].videos[k]['type'] == 'series') {           
              this.series.push(resp.data[j].videos[k])
            }
          }
        }      
    
    })
  }


  galleryImage(a) {
    if(a == 'live') {
      this.gallery = this.live_videos;
    }
    else if(a == 'arrivals') {
      this.gallery = this.arrivals;
    }
    else if(a == 'documentries') {
      this.gallery = this.documentries;
    }
    else if(a == 'series') {
      this.gallery = this.series;
    }
    else if(a == 'originals') {
      this.gallery = this.originals;
    }
    else if(a == 'talkshow') {
      this.gallery = this.talk_show;
    }
    
  }

  showImages(e) {
    this.linktoShow = e;
    console.log("linktoshow is " + this.linktoShow);
    this.router.navigateByUrl('livepage')
    

  }



  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}