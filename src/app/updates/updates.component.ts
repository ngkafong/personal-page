import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities'
import { ActiveslideService } from '../activeslide.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  activities: Activity[] = ACTIVITIES;
  message: number;

  constructor(private service:ActiveslideService) { };

  getActiveslide(): void {
    this.service.currentMessage.subscribe(message => this.message = message);
  }

  ngOnInit(): void {
    this.getActiveslide();
  }

}
