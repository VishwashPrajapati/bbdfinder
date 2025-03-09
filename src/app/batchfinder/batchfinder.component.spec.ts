import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchfinderComponent } from './batchfinder.component';

describe('BatchfinderComponent', () => {
  let component: BatchfinderComponent;
  let fixture: ComponentFixture<BatchfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchfinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
