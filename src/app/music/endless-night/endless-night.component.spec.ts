import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessNightComponent } from './endless-night.component';

describe('EndlessNightComponent', () => {
  let component: EndlessNightComponent;
  let fixture: ComponentFixture<EndlessNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndlessNightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlessNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
