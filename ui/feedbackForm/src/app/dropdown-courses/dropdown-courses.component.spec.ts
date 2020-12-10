import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCoursesComponent } from './dropdown-courses.component';

describe('DropdownCoursesComponent', () => {
  let component: DropdownCoursesComponent;
  let fixture: ComponentFixture<DropdownCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
