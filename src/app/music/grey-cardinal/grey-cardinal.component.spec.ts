import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyCardinalComponent } from './grey-cardinal.component';

describe('GreyCardinalComponent', () => {
  let component: GreyCardinalComponent;
  let fixture: ComponentFixture<GreyCardinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreyCardinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyCardinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
