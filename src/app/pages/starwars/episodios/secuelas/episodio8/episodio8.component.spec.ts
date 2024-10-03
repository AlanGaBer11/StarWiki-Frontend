import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio8Component } from './episodio8.component';

describe('Episodio8Component', () => {
  let component: Episodio8Component;
  let fixture: ComponentFixture<Episodio8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
