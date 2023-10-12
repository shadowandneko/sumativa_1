import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyContactPage } from './modify-contact.page';

describe('ModifyContactPage', () => {
  let component: ModifyContactPage;
  let fixture: ComponentFixture<ModifyContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifyContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
