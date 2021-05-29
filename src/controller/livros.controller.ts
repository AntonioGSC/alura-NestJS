import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LivrosService } from 'src/service/livros.service';
import { Livro } from '../model/livro.model';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Livro): string {
    produto.id = 100;
    this.livrosService.criar(produto);
    return 'Produto criado';
  }

  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params): string {
    this.livrosService.apagar(params.id);
    return `Produto ${params.id} apagado`;
  }
}
