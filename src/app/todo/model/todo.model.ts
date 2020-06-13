export class Todo {
    id: string;
    texto: string;
    completado: boolean;

    constructor(texto: string) {
        // Texto con la primeta letra en mayuscula
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
        this.id = String(Math.random());
    }
}
