import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio4Component } from './episodio4.component';

describe('Episodio4Component', () => {
  let component: Episodio4Component;
  let fixture: ComponentFixture<Episodio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
