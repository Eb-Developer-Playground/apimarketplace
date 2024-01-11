import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ProductServiceService } from '../../services/product/product-service.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let productService:ProductServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[ProductServiceService]
    })
    .compileComponents();

    
    component = new HomeComponent(productService);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
