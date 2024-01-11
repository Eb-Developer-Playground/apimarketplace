import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageComponent } from './usage.component';

describe('UsageComponent', () => {
  let component: UsageComponent;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageComponent ]
    })
    .compileComponents();

    
    component = new UsageComponent();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
