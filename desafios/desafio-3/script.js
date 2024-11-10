class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago': 1 
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi('Merlin', 100, 'mago');
  const guerreiro = new Heroi('Conan', 30, 'guerreiro');
  const monge = new Heroi('Liu Kang', 25, 'monge');
  const ninja = new Heroi('Sub-Zero', 30, 'ninja');
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();