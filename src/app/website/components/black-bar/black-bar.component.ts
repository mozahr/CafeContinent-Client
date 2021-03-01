import { Component, Input, OnInit } from '@angular/core';
import { blackBarLinks } from "../../../interfaces/interfaces";

@Component({
  selector: 'app-black-bar',
  templateUrl: './black-bar.component.html',
  styleUrls: ['./black-bar.component.scss']
})
export class BlackBarComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;
  @Input() links: blackBarLinks[];

  constructor() { }

  ngOnInit(): void {
  }

}
