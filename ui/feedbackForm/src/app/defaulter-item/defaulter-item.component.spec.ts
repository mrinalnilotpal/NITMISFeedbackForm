import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulterItemComponent } from './defaulter-item.component';

describe('DefaulterItemComponent', () => {
  let component: DefaulterItemComponent;
  let fixture: ComponentFixture<DefaulterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
