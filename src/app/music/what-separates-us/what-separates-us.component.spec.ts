import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSeparatesUsComponent } from './what-separates-us.component';

describe('WhatSeparatesUsComponent', () => {
  let component: WhatSeparatesUsComponent;
  let fixture: ComponentFixture<WhatSeparatesUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatSeparatesUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatSeparatesUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
