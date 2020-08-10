import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  isOpen =  false;

  constructor() { }

  ngOnInit(): void {
  }

  afficherNotice() {
    this.isOpen = !this.isOpen
  }



}
