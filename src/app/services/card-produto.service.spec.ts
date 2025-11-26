import { TestBed } from '@angular/core/testing';

import { CardProdutoService } from './card-produto.service';

describe('CardProdutoService', () => {
  let service: CardProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
