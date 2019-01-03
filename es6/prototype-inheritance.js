function Animal(kind, sound) {
  this.kind = kind;
  this.sound = sound;
}

Animal.prototype.hello = () => {
  console.log(`${this.sound} I'm a ${this.kind}`);
};

const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'miau');

console.log(dog);
console.log(cat);
dog.hello();
cat.hello();

