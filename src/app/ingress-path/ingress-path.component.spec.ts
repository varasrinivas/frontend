import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressPathComponent } from './ingress-path.component';

describe('IngressPathComponent', () => {
  let component: IngressPathComponent;
  let fixture: ComponentFixture<IngressPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngressPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
