import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-skills',
  templateUrl: './main-skills.component.html',
  styleUrls: ['./main-skills.component.scss']
})
export class MainSkillsComponent implements OnInit {

  enabled: boolean = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.enabled = true;
    }, 500);
  }

}
