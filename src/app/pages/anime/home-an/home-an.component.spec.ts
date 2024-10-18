import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeANComponent } from './home-an.component';

describe('HomeANComponent', () => {
  let component: HomeANComponent;
  let fixture: ComponentFixture<HomeANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeANComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
