import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwtaskComponent } from './hwtask.component';

describe('HwtaskComponent', () => {
  let component: HwtaskComponent;
  let fixture: ComponentFixture<HwtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HwtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
