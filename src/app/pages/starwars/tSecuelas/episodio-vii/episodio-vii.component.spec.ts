import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioViiComponent } from './episodio-vii.component';

describe('EpisodioViiComponent', () => {
  let component: EpisodioViiComponent;
  let fixture: ComponentFixture<EpisodioViiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioViiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
