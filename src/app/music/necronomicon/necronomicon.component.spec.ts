import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecronomiconComponent } from './necronomicon.component';

describe('NecronomiconComponent', () => {
  let component: NecronomiconComponent;
  let fixture: ComponentFixture<NecronomiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecronomiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecronomiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
