import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListasPage } from './product-listas.page';

describe('ProductListasPage', () => {
  let component: ProductListasPage;
  let fixture: ComponentFixture<ProductListasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductListasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
