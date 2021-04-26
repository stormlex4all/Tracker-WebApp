import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerDataComponent } from './tracker-data.component';

describe('TrackerDataComponent', () => {
  let component: TrackerDataComponent;
  let fixture: ComponentFixture<TrackerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
