import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchGraphComponent } from './witch-graph.component';

describe('WitchGraphComponent', () => {
  let component: WitchGraphComponent;
  let fixture: ComponentFixture<WitchGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitchGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
