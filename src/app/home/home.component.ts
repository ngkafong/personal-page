import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  activities: Activity[] = ACTIVITIES;
  constructor() { }

  ngOnInit(): void {
  }

}
