import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountComponent } from './createaccount.component';

describe('CreateaccountComponent', () => {

  let component: CreateaccountComponent;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaccountComponent ]
    })
    .compileComponents();

    component = new CreateaccountComponent();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
