import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMatchComponent } from './nextMatch.component';

describe('NextMatchComponent', () => {
  let component: NextMatchComponent;
  let fixture: ComponentFixture<NextMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
