import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio9Component } from './episodio9.component';

describe('Episodio9Component', () => {
  let component: Episodio9Component;
  let fixture: ComponentFixture<Episodio9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
