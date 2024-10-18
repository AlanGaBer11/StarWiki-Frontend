import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioIIIComponent } from './episodio-iii.component';

describe('EpisodioIIIComponent', () => {
  let component: EpisodioIIIComponent;
  let fixture: ComponentFixture<EpisodioIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioIIIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
