import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-showmodal',
  templateUrl: './showmodal.component.html',
  styleUrls: ['./showmodal.component.css']
})
export class ShowmodalComponent implements OnInit {
  videoData;

  constructor(private modalservice: NgbModal, private dataservice:DataService) {
    this.getData();
   }
  
  ngOnInit(): void {
  }
  getData() {
      var id = '4ac3242a-cc58-4f7b-9bac-5dd0708fa64e';
      this.dataservice.getVideoById(id).subscribe((res:any) => {
        this.videoData = res.data;
        console.log(this.videoData);
      })
  }

  openModal() {
    const modalRef = this.modalservice.open(ModalComponent, {
      scrollable: true,
      windowClass: 'customModal'
    });

    // let data = {
    //   prop1: 'some data'
    // }

    
    modalRef.componentInstance.fromParent = this.videoData;
    modalRef.result.then((result) => {
      console.log(result)
    }, (reason) => {

    })
  }
}
