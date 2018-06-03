import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCityModalComponent } from './tech-city-modal.component';

describe('TechCityModalComponent', () => {
  let component: TechCityModalComponent;
  let fixture: ComponentFixture<TechCityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
