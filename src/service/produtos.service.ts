import { Injectable } from '@nestjs/common';
import { Produto } from 'src/model/produto.model';

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [
    new Produto('LIV1', 'Livro 1', 29.0),
    new Produto('LIV2', 'Livro 2', 39.0),
    new Produto('LIV3', 'Livro 3', 19.0),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto): void {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number): void {
    this.produtos.pop();
  }
}
