import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPageGeneralComponent } from './clubPageGeneral.component';

describe('ClubPageGeneralComponent', () => {
  let component: ClubPageGeneralComponent;
  let fixture: ComponentFixture<ClubPageGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubPageGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubPageGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
