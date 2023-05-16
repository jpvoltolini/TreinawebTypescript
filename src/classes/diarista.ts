import { Pessoa } from "./pessoa";

export class Diarista extends Pessoa{
    

 atenderDiarista(clienteNome: string): void{

    console.log(`Diarista ${this.nome} está atendendo o cliente ${clienteNome}`);
 }
}