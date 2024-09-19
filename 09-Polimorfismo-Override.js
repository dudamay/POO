// Classe base Personagem
class Personagem {
    constructor(nome, vida){
        this.nome = nome;
        this.vida = vida;
    }

atacar(){
console.log(`${this.nome}realiza um ataque básico!`);
}

receberDano(dano){
    this.vida -=dano;
    console.log(`${this.nome} recebeu ${dano}de dano. Vida restante: ${this.vida}`);
  }
}

// Classe Guerreiro que herda de Personagem
class Guerreiro extends Personagem{
    constructor(nome,vida,arma){
        super(nome, vida);
        this.arma = arma;
    }

    atacar(){
        console.log(`${this.nome} ataca com a ${this.arma}!`);
    }
}

// Classe Mago que herda de Personagem

class Mago extends Personagem{
    constructor(nome,vida,feitico){
        super(nome, vida);
        this.feitico = feitico;
    }

    atacar(){
        console.log(`${this.nome}lanca ${this.feitico}!`);

    }
}

// Classe Arqueiro que herda de Persoangem 
     class Arqueiro extends Personagem{
        constructor(nome,vida,tipoFlecha){
            super(nome, vida);
            this.tipoFlecha = tipoFlecha;
        }

        atacar(){
            console.log(`${this.nome} dispara flecha ${this.tipoFlecha}!`);

        }
    }

    // Criando instãncias de Guerreiro, Mago e Arqueiro
    const guerreiro = new Guerreiro("Thor", 100, "Espada");
    guerreiro.atacar(); // Saída: Thor ataca com a espada!
    guerreiro.receberDano(20); // Saída: Thor recebeu 20 de dano. Vida restante: 80

    const mago = new Mago("Loki", 80, "bola de Fogo");
    mago.atacar(); // Saída: Loki lança bola de Fogo!
    mago.receberDano(15); // Saída: Loki recebeu 15 de dano. Vida restante: 65

    const arqueiro = new Arqueiro("Hulk", 90, "explosiva");
    arqueiro.atacar(); // Saída: Hulk dispara flecha explosiva!
    arqueiro.receberDano(10); // Saída: Hulk recebeu 10 de dano. Vida restante: 80