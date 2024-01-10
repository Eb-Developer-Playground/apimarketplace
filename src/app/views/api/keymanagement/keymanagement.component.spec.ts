import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeymanagementComponent } from './keymanagement.component';

describe('KeymanagementComponent', () => {
  let component: KeymanagementComponent;
  let fixture: ComponentFixture<KeymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeymanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
