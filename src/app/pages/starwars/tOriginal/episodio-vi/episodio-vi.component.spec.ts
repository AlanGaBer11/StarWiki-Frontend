import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioViComponent } from './episodio-vi.component';

describe('EpisodioViComponent', () => {
  let component: EpisodioViComponent;
  let fixture: ComponentFixture<EpisodioViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioViComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
