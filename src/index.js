import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./models/Mago.js";
import {Arqueiro} from "./models/Arqueiro.js"
import { ArqueiroMago } from "./models/ArqueiroMago.js";
import { Guerreiro } from "./models/Guerreiro.js";

const personagemLeandro = new Mago('Leandro','fogo',3);
const personagemRafael = new Arqueiro('Rafael',2);
const personagemFelipe = new ArqueiroMago('Felipe',7,'ar',10);
const personagemMiguel = new Guerreiro('Miguel',13);


console.log(personagemLeandro);
console.log(personagemRafael);


const personagens = [personagemLeandro,personagemRafael,personagemFelipe,personagemMiguel];

new PersonagemView(personagens).render()

