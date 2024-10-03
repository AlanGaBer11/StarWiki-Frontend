import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio3Component } from './episodio3.component';

describe('Episodio3Component', () => {
  let component: Episodio3Component;
  let fixture: ComponentFixture<Episodio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Episodio3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Episodio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
