import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent implements OnInit {
  @Input()
  titre:string;
  @Input()
  optionalClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
