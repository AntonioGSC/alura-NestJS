export class Produto {
  id: number;
  private codigo: string;
  private nome: string;
  private preco: number;

  constructor(codigo: string, nome: string, preco: number) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }
}
