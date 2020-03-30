import { async, ComponentFixture, personal-pageBed } from '@angular/core/personal-pageing';

import { UpdatesComponent } from './updates.component';

describe('UpdatesComponent', () => {
  let component: UpdatesComponent;
  let fixture: ComponentFixture<UpdatesComponent>;

  beforeEach(async(() => {
    personal-pageBed.configurepersonal-pageingModule({
      declarations: [ UpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = personal-pageBed.createComponent(UpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
