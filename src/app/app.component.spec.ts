import { personal-pageBed, async } from '@angular/core/personal-pageing';
import { Routerpersonal-pageingModule } from '@angular/router/personal-pageing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    personal-pageBed.configurepersonal-pageingModule({
      imports: [
        Routerpersonal-pageingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = personal-pageBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'personal-page'`, () => {
    const fixture = personal-pageBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('personal-page');
  });

  it('should render title', () => {
    const fixture = personal-pageBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('personal-page app is running!');
  });
});
