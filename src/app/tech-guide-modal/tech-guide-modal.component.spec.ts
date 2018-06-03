import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechGuideModalComponent } from './tech-guide-modal.component';

describe('TechGuideModalComponent', () => {
  let component: TechGuideModalComponent;
  let fixture: ComponentFixture<TechGuideModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechGuideModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechGuideModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
