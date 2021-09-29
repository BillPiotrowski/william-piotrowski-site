import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouCantPutYourArmsComponent } from './you-cant-put-your-arms.component';

describe('YouCantPutYourArmsComponent', () => {
  let component: YouCantPutYourArmsComponent;
  let fixture: ComponentFixture<YouCantPutYourArmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouCantPutYourArmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouCantPutYourArmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
