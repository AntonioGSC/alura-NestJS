import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from '../model/produto.model';

@Controller('produtos')
export class ProdutosController {
  private produtos: Produto[] = [
    new Produto('LIV1', 'Livro 1', 29.0),
    new Produto('LIV2', 'Livro 2', 39.0),
    new Produto('LIV3', 'Livro 3', 19.0),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  criar(@Body() produto: Produto): string {
    produto.id = 100;
    this.produtos.push(produto);
    return 'Produto criado';
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params): string {
    this.produtos.pop();
    return `Produto ${params.id} apagado`;
  }
}
