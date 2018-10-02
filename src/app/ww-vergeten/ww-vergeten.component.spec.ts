import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwVergetenComponent } from './ww-vergeten.component';

describe('WwVergetenComponent', () => {
  let component: WwVergetenComponent;
  let fixture: ComponentFixture<WwVergetenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwVergetenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwVergetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
