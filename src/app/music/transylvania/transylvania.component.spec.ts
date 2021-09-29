import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransylvaniaComponent } from './transylvania.component';

describe('TransylvaniaComponent', () => {
  let component: TransylvaniaComponent;
  let fixture: ComponentFixture<TransylvaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransylvaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransylvaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
