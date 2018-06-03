import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechServiceModalComponent } from './tech-service-modal.component';

describe('TechServiceModalComponent', () => {
  let component: TechServiceModalComponent;
  let fixture: ComponentFixture<TechServiceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechServiceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechServiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
