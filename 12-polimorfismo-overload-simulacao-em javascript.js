class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    //Simulação de sobrecarga
    atacar(...args) {
        if(args.length ===0){
            console.log(`${this.nome} realiza um ataque básico!`);
        }else if(args.length === 1){
            const arma = args[0];
            console.log(`${this.nome} ataca com o ${arma}!`);
       }else if(args.length === 2){
        const arma = args[0];
        const[tipoFlecha, comArco]=args;
        if(comArco){
            console.log(`${this.nome} dispara flecha ${tipoFlecha} com um arco!`);
        }else{
            console.log(`${this.nome} dispara flecha ${tipoFlecha} sem arco!`);
        }
    }else{
        console.log("Número de argumentos não suportados!");
    }
}
receberDano(dano){
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
    
    }
}


