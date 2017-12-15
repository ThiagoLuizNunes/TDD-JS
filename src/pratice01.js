const cities = ['Jampa', 'Recife', 'Natal'];

const loveCities = cities.map(name => `I love ${name}`);

console.log(loveCities);

const loveJampa = cities.filter(name => name === 'Jampa').map(name => `I love ${name}`);

console.log(loveJampa);
