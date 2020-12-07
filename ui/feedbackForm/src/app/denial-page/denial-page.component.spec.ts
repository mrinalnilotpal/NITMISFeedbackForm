import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenialPageComponent } from './denial-page.component';

describe('DenialPageComponent', () => {
  let component: DenialPageComponent;
  let fixture: ComponentFixture<DenialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
