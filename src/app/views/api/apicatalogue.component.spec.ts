import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCataloguComponent } from './apicatalogue.component';
import { ProductServiceService } from '../../services/product/product-service.service';

describe('ApiCataloguComponent', () => {

  let component: ApiCataloguComponent;
  let fixture: ComponentFixture<ApiCataloguComponent>;
  let productService:ProductServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCataloguComponent ],
      providers:[ProductServiceService]
    })
    .compileComponents();

    component = new ApiCataloguComponent(productService);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
