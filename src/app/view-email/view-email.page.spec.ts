import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewEmailPage } from './view-email.page';

describe('ViewEmailPage', () => {
  let component: ViewEmailPage;
  let fixture: ComponentFixture<ViewEmailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
