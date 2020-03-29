import { Component, OnInit, ViewChild } from '@angular/core';
import { Activity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ActiveslideService } from '../activeslide.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  activities: Activity[] = ACTIVITIES;

  message: number;

  constructor(private service:ActiveslideService) { };

  getActiveslide(): void {
    this.service.currentMessage.subscribe(message => this.message = message);
  }


  ngOnInit(): void {
    this.getActiveslide();
    this.service.changeMessage(0);
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;


  onSlide(slideEvent: NgbSlideEvent) {

    this.service.changeMessage(Number((slideEvent.current)));
  }

}
