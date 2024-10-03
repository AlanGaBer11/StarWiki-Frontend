import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio2Component } from './episodio2.component';

describe('Episodio2Component', () => {
  let component: Episodio2Component;
  let fixture: ComponentFixture<Episodio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
