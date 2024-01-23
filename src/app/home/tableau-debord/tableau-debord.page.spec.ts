import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableauDebordPage } from './tableau-debord.page';

describe('TableauDebordPage', () => {
  let component: TableauDebordPage;
  let fixture: ComponentFixture<TableauDebordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableauDebordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
