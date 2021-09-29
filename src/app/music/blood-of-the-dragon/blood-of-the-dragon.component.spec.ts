import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodOfTheDragonComponent } from './blood-of-the-dragon.component';

describe('BloodOfTheDragonComponent', () => {
  let component: BloodOfTheDragonComponent;
  let fixture: ComponentFixture<BloodOfTheDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodOfTheDragonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodOfTheDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
