import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBlackComponent } from './red-black.component';

describe('RedBlackComponent', () => {
  let component: RedBlackComponent;
  let fixture: ComponentFixture<RedBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedBlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
