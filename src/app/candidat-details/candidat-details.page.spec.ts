import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CandidatDetailsPage } from './candidat-details.page';

describe('CandidatDetailsPage', () => {
  let component: CandidatDetailsPage;
  let fixture: ComponentFixture<CandidatDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CandidatDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
