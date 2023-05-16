import { Cliente } from "./src/classes/cliente";
import { Diarista } from "./src/classes/diarista";

let diarista = new Diarista('Paulo', 483141631416, "Rua Felipe Schmidt ");
let cliente = new Cliente("JP", 48954954954, "Av. Campeche")

console.log(diarista)
diarista.atenderDiarista('joab');