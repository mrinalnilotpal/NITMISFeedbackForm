import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulterViewComponent } from './defaulter-view.component';

describe('DefaulterViewComponent', () => {
  let component: DefaulterViewComponent;
  let fixture: ComponentFixture<DefaulterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
