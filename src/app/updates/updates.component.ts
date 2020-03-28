import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities'

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  activities: Activity[] = ACTIVITIES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
