import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodOfAngelsComponent } from './blood-of-angels.component';

describe('BloodOfAngelsComponent', () => {
  let component: BloodOfAngelsComponent;
  let fixture: ComponentFixture<BloodOfAngelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodOfAngelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodOfAngelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
