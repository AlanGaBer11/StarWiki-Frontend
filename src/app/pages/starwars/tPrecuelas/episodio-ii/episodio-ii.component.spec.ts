import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioIiComponent } from './episodio-ii.component';

describe('EpisodioIiComponent', () => {
  let component: EpisodioIiComponent;
  let fixture: ComponentFixture<EpisodioIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioIiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
