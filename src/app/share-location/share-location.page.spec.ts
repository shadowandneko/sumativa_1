import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareLocationPage } from './share-location.page';

describe('ShareLocationPage', () => {
  let component: ShareLocationPage;
  let fixture: ComponentFixture<ShareLocationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShareLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
