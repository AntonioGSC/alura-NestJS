import { Injectable } from '@nestjs/common';
import { Livro } from 'src/model/livro.model';

@Injectable()
export class LivrosService {
  private livros: Livro[] = [
    // new Livro('LIV1', 'Livro 1', 29.0),
    // new Livro('LIV2', 'Livro 2', 39.0),
    // new Livro('LIV3', 'Livro 3', 19.0),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro): void {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number): void {
    this.livros.pop();
  }
}
