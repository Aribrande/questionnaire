import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestasComponent } from './testas.component';

describe('TestasComponent', () => {
  let component: TestasComponent;
  let fixture: ComponentFixture<TestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
