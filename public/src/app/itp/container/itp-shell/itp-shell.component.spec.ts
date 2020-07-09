import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItpShellComponent } from './itp-shell.component';

describe('ItpShellComponent', () => {
  let component: ItpShellComponent;
  let fixture: ComponentFixture<ItpShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItpShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItpShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
