import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherViewPage } from './other-view.page';

describe('OtherViewPage', () => {
  let component: OtherViewPage;
  let fixture: ComponentFixture<OtherViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtherViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
