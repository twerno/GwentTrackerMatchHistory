import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryRowComponent } from './match-history-row.component';

describe('MatchHistoryRowComponent', () => {
  let component: MatchHistoryRowComponent;
  let fixture: ComponentFixture<MatchHistoryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchHistoryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHistoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
