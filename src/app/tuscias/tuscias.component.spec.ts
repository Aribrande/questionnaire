import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusciasComponent } from './tuscias.component';

describe('TusciasComponent', () => {
  let component: TusciasComponent;
  let fixture: ComponentFixture<TusciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
