import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBlogModalComponent } from './tech-blog-modal.component';

describe('TechBlogModalComponent', () => {
  let component: TechBlogModalComponent;
  let fixture: ComponentFixture<TechBlogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechBlogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
