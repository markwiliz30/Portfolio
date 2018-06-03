import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorldModalComponent } from './tech-world-modal.component';

describe('TechWorldModalComponent', () => {
  let component: TechWorldModalComponent;
  let fixture: ComponentFixture<TechWorldModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorldModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
