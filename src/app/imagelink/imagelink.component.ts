import { CompileShallowModuleMetadata } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-imagelink',
  templateUrl: './imagelink.component.html',
  styleUrls: ['./imagelink.component.css']
})
export class ImagelinkComponent implements OnInit{
  allData;
  series: string[] = [];
  videos;
  componentName;
  constructor(public dataservice:DataService, private activatedRouter:ActivatedRoute) { 
  }
  
  ngOnInit(): void {
   this.activatedRouter.paramMap.subscribe((params:any) => {
      this.componentName = params.get('cname');
      this.videos='';
      this.showData(); 
    })
         
  }

   showData() {
    this.dataservice.getHomeVideos().subscribe((resp:any) => {
    if(this.componentName == 'live') {
     this.videos = resp.data[1]['videos'];
    }
    else if(this.componentName == 'arrivals') {
      this.videos = resp.data[2]['videos'];
    }
    else if(this.componentName == 'documentries') {
      this.videos = resp.data[0]['videos'];
    }
    else if(this.componentName == 'series') {
      for(var j in resp.data) {
        for(var k in resp.data[j].videos) {
          if(resp.data[j].videos[k]['type'] == 'series') {           
            this.series.push(resp.data[j].videos[k]);
                          
          }
        }
      }  
      this.videos = this.series;
    }
    else if(this.componentName == 'originals') {
      this.videos = resp.data[3]['videos'];
    }
    else if(this.componentName == 'talkshow') {
      this.videos = resp.data[4]['videos'];
    }
    else{
      console.log('nothing to show')
    }
   })
   
   }
}
 

