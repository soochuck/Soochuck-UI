import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessformComponent } from './accessform.component';

describe('AccessformComponent', () => {
  let component: AccessformComponent;
  let fixture: ComponentFixture<AccessformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
