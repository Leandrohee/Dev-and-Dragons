import { Personagem } from "./Personagem.js";

export class Mago extends Personagem{
    elementoMagico
    inteligencia
    static tipo = 'Mago'
    static descricao ='O mago é implacável!';

    constructor(nome, elementoMagico,inteligencia){
        super(nome)
        this.elementoMagico = elementoMagico;
        this.inteligencia = inteligencia;
    }

    obterInsignia(){
        if(this.inteligencia >= 5){
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia();
    }
}