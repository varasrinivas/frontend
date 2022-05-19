import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyPathComponent } from './proxy-path.component';

describe('ProxyPathComponent', () => {
  let component: ProxyPathComponent;
  let fixture: ComponentFixture<ProxyPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
