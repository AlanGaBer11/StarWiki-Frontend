import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio5Component } from './episodio5.component';

describe('Episodio5Component', () => {
  let component: Episodio5Component;
  let fixture: ComponentFixture<Episodio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
