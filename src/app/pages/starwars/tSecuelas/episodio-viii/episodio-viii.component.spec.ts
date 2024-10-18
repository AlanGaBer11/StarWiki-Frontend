import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioViiiComponent } from './episodio-viii.component';

describe('EpisodioViiiComponent', () => {
  let component: EpisodioViiiComponent;
  let fixture: ComponentFixture<EpisodioViiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioViiiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioViiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
