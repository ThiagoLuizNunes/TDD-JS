function ajax(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => dados.next(data));
}

function ajaxGen() {
  console.log('Buscando posts...');
  const posts = yield ajax('https://willianjusten.com.br/search.json');
  console.log(posts);

  console.log('Buscando dados github...')
  const github = yield ajax('https://api.github.com/users/willianjusten');
  console.log(github);

  console.log('Buscando dados github 2...')
  const github2 = yield ajax('https://api.github.com/users/thiagoluiznunes');
  console.log(github2);
}

const dados = ajaxGen();
dados.next();
