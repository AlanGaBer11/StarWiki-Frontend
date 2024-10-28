import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilogiaOriginalComponent } from './trilogia-original.component';

describe('TrilogiaOriginalComponent', () => {
  let component: TrilogiaOriginalComponent;
  let fixture: ComponentFixture<TrilogiaOriginalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrilogiaOriginalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrilogiaOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
