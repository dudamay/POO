// Classe base Personagem
class Personagem {
  // Encapsulando os atributos com #, tornando-os privados
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;
  // Método Construtor
  constructor(nome, classe, nivel, vida, mana) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }
  // Métodos  Getters e Setters
  // Métodos Getters e Setters para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  // Métodos Getters e Setters para o atributo classe
  get classe() {
    return this.#classe;
  }
  // Métodos Getter e Setter para o atributo nìvel
  get nivel() {
    return this.#nivel;
  }
  // Métodos Getter e Setter para o atributo vida
  get vida() {
    return this.#vida;
  }
  // Métodos Getter e Setter para o atributo mana
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }
}
