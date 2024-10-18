import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSTComponent } from './home-st.component';

describe('HomeSTComponent', () => {
  let component: HomeSTComponent;
  let fixture: ComponentFixture<HomeSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
