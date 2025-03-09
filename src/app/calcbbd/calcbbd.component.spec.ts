import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcbbdComponent } from './calcbbd.component';

describe('CalcbbdComponent', () => {
  let component: CalcbbdComponent;
  let fixture: ComponentFixture<CalcbbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcbbdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcbbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
