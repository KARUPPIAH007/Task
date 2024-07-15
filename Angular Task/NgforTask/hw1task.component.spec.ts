import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hw1taskComponent } from './hw1task.component';

describe('Hw1taskComponent', () => {
  let component: Hw1taskComponent;
  let fixture: ComponentFixture<Hw1taskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hw1taskComponent]  // Declare the component to be tested
    })
    .compileComponents();  // Compile the component's template and css

    fixture = TestBed.createComponent(Hw1taskComponent);  // Create a component fixture
    component = fixture.componentInstance;  // Get the instance of the component
    fixture.detectChanges();  // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Test that the component is created successfully
  });
});
