import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {

  let component: LogoutComponent;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ LogoutComponent ]
    })
    .compileComponents();

    
    component = new LogoutComponent();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
