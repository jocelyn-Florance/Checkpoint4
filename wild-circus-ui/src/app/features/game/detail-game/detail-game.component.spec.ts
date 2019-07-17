import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGameComponent } from './detail-game.component';

describe('DetailGameComponent', () => {
  let component: DetailGameComponent;
  let fixture: ComponentFixture<DetailGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
