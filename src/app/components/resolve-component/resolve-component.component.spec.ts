import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveComponentComponent } from './resolve-component.component';

describe('ResolveComponentComponent', () => {
  let component: ResolveComponentComponent;
  let fixture: ComponentFixture<ResolveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
