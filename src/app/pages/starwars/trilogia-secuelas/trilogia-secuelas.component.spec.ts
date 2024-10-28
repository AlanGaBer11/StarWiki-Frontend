import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilogiaSecuelasComponent } from './trilogia-secuelas.component';

describe('TrilogiaSecuelasComponent', () => {
  let component: TrilogiaSecuelasComponent;
  let fixture: ComponentFixture<TrilogiaSecuelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrilogiaSecuelasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrilogiaSecuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
