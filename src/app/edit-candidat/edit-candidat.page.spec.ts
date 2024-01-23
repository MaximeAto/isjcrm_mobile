import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EditCandidatPage } from './edit-candidat.page';

describe('EditCandidatPage', () => {
  let component: EditCandidatPage;
  let fixture: ComponentFixture<EditCandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditCandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
