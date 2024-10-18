import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioVComponent } from './episodio-v.component';

describe('EpisodioVComponent', () => {
  let component: EpisodioVComponent;
  let fixture: ComponentFixture<EpisodioVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
