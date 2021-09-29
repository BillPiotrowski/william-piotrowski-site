import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowOfTheRavenComponent } from './shadow-of-the-raven.component';

describe('ShadowOfTheRavenComponent', () => {
  let component: ShadowOfTheRavenComponent;
  let fixture: ComponentFixture<ShadowOfTheRavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowOfTheRavenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowOfTheRavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
