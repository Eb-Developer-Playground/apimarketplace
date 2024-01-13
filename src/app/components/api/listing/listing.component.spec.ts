import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingComponent } from './listing.component';

describe('ListingComponent Input Tests', () => {

  let listingFixture:ComponentFixture<ListingComponent>;
  let apiListingcomponent: ListingComponent;
 

  beforeEach(async () => {

    TestBed.configureTestingModule({
      declarations:[ListingComponent]
    }).compileComponents();

    listingFixture = TestBed.createComponent(ListingComponent);

  
    apiListingcomponent = listingFixture.componentInstance;


  });

  it('Api listing component should be created', () => {

    expect(apiListingcomponent).toBeTruthy();
    
  });

  it('Image src should update on image @Input()',() => {

    apiListingcomponent.ngOnInit();

    apiListingcomponent.image = 'assets/images/api/accountservices.svg';

    listingFixture.detectChanges();

    expect(listingFixture.nativeElement.querySelector('img').src).toContain('assets/images/api/accountservices.svg');

  });

  it('Title text should update on title @Input()',() => {

    apiListingcomponent.ngOnInit();

    apiListingcomponent.title = 'Testing';

    listingFixture.detectChanges();

    expect(listingFixture.nativeElement.querySelector('h4').textContent).toBe('Testing');

  });

  xit('Description text should update on description @Input()',() => {

    apiListingcomponent.ngOnInit();

    apiListingcomponent.description = 'Testing description';

    listingFixture.detectChanges();

    expect(listingFixture.nativeElement.querySelector('p').textContent).toContain('Testing description');

  });

});

