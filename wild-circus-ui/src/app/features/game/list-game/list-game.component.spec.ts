import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGameComponent } from './list-game.component';

describe('ListGameComponent', () => {
  let component: ListGameComponent;
  let fixture: ComponentFixture<ListGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
