import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptPageComponent } from './recept-page.component';

describe('ReceptPageComponent', () => {
  let component: ReceptPageComponent;
  let fixture: ComponentFixture<ReceptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
