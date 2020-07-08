import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProudctComponent } from './detail-proudct.component';

describe('DetailProudctComponent', () => {
  let component: DetailProudctComponent;
  let fixture: ComponentFixture<DetailProudctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProudctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
