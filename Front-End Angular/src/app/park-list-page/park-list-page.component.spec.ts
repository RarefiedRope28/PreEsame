import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkListPageComponent } from './park-list-page.component';

describe('ParkListPageComponent', () => {
  let component: ParkListPageComponent;
  let fixture: ComponentFixture<ParkListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
