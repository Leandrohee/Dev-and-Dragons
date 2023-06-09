import { Personagem } from "./Personagem.js";
import { Arqueiro } from "./Arqueiro.js";
import { Mago } from "./Mago.js";

export class ArqueiroMago extends Personagem{
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao ='Detentor de lancas e flechas mágicas!';

    constructor(nome,destreza,elementoMagico,inteligencia){
        super(nome);
        this.ladoArqueiro = new Arqueiro(nome,destreza);
        this.ladoMago =  new Mago(nome,elementoMagico,inteligencia);
    }

        obterInsignia(){
            return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
        }
    }
