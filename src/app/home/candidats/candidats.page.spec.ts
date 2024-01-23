import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CandidatsPage } from './candidats.page';

describe('CandidatsPage', () => {
  let component: CandidatsPage;
  let fixture: ComponentFixture<CandidatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CandidatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
