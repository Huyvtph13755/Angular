import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DameComponent } from './dame.component';

describe('DameComponent', () => {
  let component: DameComponent;
  let fixture: ComponentFixture<DameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
