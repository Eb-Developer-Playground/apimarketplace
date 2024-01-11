import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let app:AppComponent;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  });

  beforeEach(() =>{

    app = new AppComponent();

  })

  it('should create the app', () => {


    expect(app).toBeTruthy();

  });

  it(`should have as title 'Api Market Place'`, () => {

    expect(app.title).toEqual('Api Market Place');

  });

  
});
