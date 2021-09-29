import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnivalOfLostSoulsComponent } from './carnival-of-lost-souls.component';

describe('CarnivalOfLostSoulsComponent', () => {
  let component: CarnivalOfLostSoulsComponent;
  let fixture: ComponentFixture<CarnivalOfLostSoulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnivalOfLostSoulsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnivalOfLostSoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
