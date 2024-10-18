import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioIvComponent } from './episodio-iv.component';

describe('EpisodioIvComponent', () => {
  let component: EpisodioIvComponent;
  let fixture: ComponentFixture<EpisodioIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioIvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
