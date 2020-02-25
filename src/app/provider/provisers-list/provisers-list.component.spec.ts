import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisersListComponent } from './provisers-list.component';

describe('ProvisersListComponent', () => {
  let component: ProvisersListComponent;
  let fixture: ComponentFixture<ProvisersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
