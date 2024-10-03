import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio7Component } from './episodio7.component';

describe('Episodio7Component', () => {
  let component: Episodio7Component;
  let fixture: ComponentFixture<Episodio7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
