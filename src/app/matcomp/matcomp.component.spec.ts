import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcompComponent } from './matcomp.component';

describe('MatcompComponent', () => {
  let component: MatcompComponent;
  let fixture: ComponentFixture<MatcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
