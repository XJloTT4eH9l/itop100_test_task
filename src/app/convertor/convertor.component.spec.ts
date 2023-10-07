import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertorComponent } from './convertor.component';

describe('ConvertorComponent', () => {
  let component: ConvertorComponent;
  let fixture: ComponentFixture<ConvertorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertorComponent]
    });
    fixture = TestBed.createComponent(ConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
