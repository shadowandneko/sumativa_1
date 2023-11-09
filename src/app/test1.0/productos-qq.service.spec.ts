import { TestBed } from '@angular/core/testing';

import { productosQQ } from './productos-qq.service'; // 此处导入服务

describe('ProductosQQService', () => {
  let service: productosQQ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productosQQ); // 此处创建服务实例
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

