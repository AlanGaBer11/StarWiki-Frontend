import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio1Component } from './episodio1.component';

describe('Episodio1Component', () => {
  let component: Episodio1Component;
  let fixture: ComponentFixture<Episodio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
