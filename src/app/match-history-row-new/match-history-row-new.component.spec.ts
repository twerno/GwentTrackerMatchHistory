import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryRowNewComponent } from './match-history-row-new.component';

describe('MatchHistoryRowNewComponent', () => {
  let component: MatchHistoryRowNewComponent;
  let fixture: ComponentFixture<MatchHistoryRowNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchHistoryRowNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHistoryRowNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
