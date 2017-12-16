function renderAuthor(name) {
  return name || 'unknown';
}

const article = {
  title: 'Learning Template Strings',
  intro: 'I am studing javascript to be a better developer',
  tags: ['Home', 'Menu', 'Map'],
  author: 'Thiago Luiz Nunes',
};

const makeup = `
  <article>
    <head>
      <h1>${article.title}</h1>
    </head>

    <section>
      <p>${article.intro}</p>
    </section>

    <footer>
      <ul>
        ${article.tags.map(tag => `<li>${tag}</li>`).join('')}
      </ul>
      <p>
        Author: ${renderAuthor(article.author)}
      </p>
    </footer>
  </article>
`;

document.body.innerHTML = makeup;
