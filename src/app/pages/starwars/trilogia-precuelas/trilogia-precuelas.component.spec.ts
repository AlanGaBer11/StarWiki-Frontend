import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilogiaPrecuelasComponent } from './trilogia-precuelas.component';

describe('TrilogiaPrecuelasComponent', () => {
  let component: TrilogiaPrecuelasComponent;
  let fixture: ComponentFixture<TrilogiaPrecuelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrilogiaPrecuelasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrilogiaPrecuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
