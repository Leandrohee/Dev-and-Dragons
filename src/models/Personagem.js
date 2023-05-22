export class Personagem{
    nome
    #level
    mana = 100
    vida = 100

    constructor(nome){
        this.nome = nome;
        this.#level = 1
    }

    get level (){
        return this.#level
    }

    diminuirLevel(){
        if(this.#level > 0 && this.#level <= 10){
            this.#level -= 1;  
        }
    }

    aumentarLevel(){
        if(this.#level >= 0 && this.#level < 10){
            this.#level += 1;  
        }
    }

    obterInsignia(){
        if(this.#level >= 5){
            return `Implacavel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2){
        if(personagem1.#level === personagem2.#level){
            return 'Empate!!!'
        }
        else if (personagem1.#level > personagem2.#level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} ganhou!`
        }
        else if (personagem1.#level < personagem2.#level){
            return `${personagem2.constructor.tipo} ${personagem2.nome} ganhou!`
        }
    }
}