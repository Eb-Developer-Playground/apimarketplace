import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordComponent } from './resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ResetpasswordComponent', () => {

  let component: ResetpasswordComponent;
  let fixture: ComponentFixture<ResetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordComponent ],
      imports:[FormsModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeDefined();

  });

  it('Should contain title of reset password',() =>{

    const resetPasswordTitle:HTMLElement = fixture.nativeElement;

    expect(resetPasswordTitle.textContent).toContain('resetpassword');

  })

});

