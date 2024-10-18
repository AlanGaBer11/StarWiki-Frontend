import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioIComponent } from './episodio-i.component';

describe('EpisodioIComponent', () => {
  let component: EpisodioIComponent;
  let fixture: ComponentFixture<EpisodioIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
