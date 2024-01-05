import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCataloguComponent } from './apicatalogue.component';

describe('ApiCataloguComponent', () => {
  let component: ApiCataloguComponent;
  let fixture: ComponentFixture<ApiCataloguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCataloguComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCataloguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
