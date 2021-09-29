import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonesomeTownComponent } from './lonesome-town.component';

describe('LonesomeTownComponent', () => {
  let component: LonesomeTownComponent;
  let fixture: ComponentFixture<LonesomeTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LonesomeTownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LonesomeTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
