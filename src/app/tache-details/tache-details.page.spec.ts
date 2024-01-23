import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TacheDetailsPage } from './tache-details.page';

describe('TacheDetailsPage', () => {
  let component: TacheDetailsPage;
  let fixture: ComponentFixture<TacheDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TacheDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
