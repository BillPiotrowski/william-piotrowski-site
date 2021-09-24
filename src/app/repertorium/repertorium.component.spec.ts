import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoriumComponent } from './repertorium.component';

describe('RepertoriumComponent', () => {
  let component: RepertoriumComponent;
  let fixture: ComponentFixture<RepertoriumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepertoriumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
