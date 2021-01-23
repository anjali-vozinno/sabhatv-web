import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() fromParent;
url;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.url = this.fromParent['videourl'];
    console.log(this.url); 
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

  playVideo() {

  }


}
