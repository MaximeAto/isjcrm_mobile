import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AjouterCandidatPage } from './ajouter-candidat.page';

describe('AjouterCandidatPage', () => {
  let component: AjouterCandidatPage;
  let fixture: ComponentFixture<AjouterCandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterCandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
