import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkloreManorComponent } from './darklore-manor.component';

describe('DarkloreManorComponent', () => {
  let component: DarkloreManorComponent;
  let fixture: ComponentFixture<DarkloreManorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkloreManorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkloreManorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
