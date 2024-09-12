class Pessoa{
    constructor (nome,idade,altura,peso) {// Atributos // Inicilaização dos atributos
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
     }
     // Método
     falar(){
        console.log('Olá, seu nome é $(this.nome}!');

     }

    // Objeto/Instância "pessoal" criada apartir da classe Pessoa
    const pessoal = new Pessoa('Maysa,17,1.63,56.0');
    pessoal.falar();// Chamada do método falar()da classe Pessoa

    }.