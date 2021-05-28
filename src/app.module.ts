import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './controller/produtos.controller';
import { ProdutosService } from './service/produtos.service';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
