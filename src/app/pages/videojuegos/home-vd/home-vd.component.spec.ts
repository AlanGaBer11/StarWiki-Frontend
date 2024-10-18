import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVDComponent } from './home-vd.component';

describe('HomeVDComponent', () => {
  let component: HomeVDComponent;
  let fixture: ComponentFixture<HomeVDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeVDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
