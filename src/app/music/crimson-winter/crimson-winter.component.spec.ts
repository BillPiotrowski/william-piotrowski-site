import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimsonWinterComponent } from './crimson-winter.component';

describe('CrimsonWinterComponent', () => {
  let component: CrimsonWinterComponent;
  let fixture: ComponentFixture<CrimsonWinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimsonWinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimsonWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
