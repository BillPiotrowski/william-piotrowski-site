import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomsOfTheHighSeasComponent } from './phantoms-of-the-high-seas.component';

describe('PhantomsOfTheHighSeasComponent', () => {
  let component: PhantomsOfTheHighSeasComponent;
  let fixture: ComponentFixture<PhantomsOfTheHighSeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhantomsOfTheHighSeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhantomsOfTheHighSeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
