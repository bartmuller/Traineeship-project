import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptenboxComponent } from './receptenbox.component';

describe('ReceptenboxComponent', () => {
  let component: ReceptenboxComponent;
  let fixture: ComponentFixture<ReceptenboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptenboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptenboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
