import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio6Component } from './episodio6.component';

describe('Episodio6Component', () => {
  let component: Episodio6Component;
  let fixture: ComponentFixture<Episodio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
