import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsavedComponent } from './detailsaved.component';

describe('DetailsavedComponent', () => {
  let component: DetailsavedComponent;
  let fixture: ComponentFixture<DetailsavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
