import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-imagelink',
  templateUrl: './imagelink.component.html',
  styleUrls: ['./imagelink.component.css']
})
export class ImagelinkComponent implements OnChanges {
  @Input() linkRef:string;
 
  
  constructor(public dataservice:DataService) { 
    // this.showImages(this.linkRef);
  }

  allVideos: string[];

  // ngOnInit(): void {
  // }
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
      this.dataservice.getHomeVideos()
      .subscribe((resp:any) => {
        this.allVideos = resp.data;
  
        // console.log(this.allVideos);
  
      })
  }
 
    // showImages(a) {
    //   console.log(a);
    //   this.dataservice.getHomeVideos()
    //   .subscribe((resp:any) => {
    //     this.allVideos = resp.data;
  
    //     console.log(this.allVideos);
  
    //   })
  
    // }
  
  
 
 
}
