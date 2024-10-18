import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioIxComponent } from './episodio-ix.component';

describe('EpisodioIxComponent', () => {
  let component: EpisodioIxComponent;
  let fixture: ComponentFixture<EpisodioIxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodioIxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodioIxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
