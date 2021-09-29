import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WintersKnightComponent } from './winters-knight.component';

describe('WintersKnightComponent', () => {
  let component: WintersKnightComponent;
  let fixture: ComponentFixture<WintersKnightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WintersKnightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WintersKnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
