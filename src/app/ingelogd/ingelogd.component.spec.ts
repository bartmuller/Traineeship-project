import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngelogdComponent } from './ingelogd.component';

describe('IngelogdComponent', () => {
  let component: IngelogdComponent;
  let fixture: ComponentFixture<IngelogdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngelogdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngelogdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
