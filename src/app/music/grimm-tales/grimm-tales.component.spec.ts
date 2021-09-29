import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimmTalesComponent } from './grimm-tales.component';

describe('GrimmTalesComponent', () => {
  let component: GrimmTalesComponent;
  let fixture: ComponentFixture<GrimmTalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrimmTalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimmTalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
