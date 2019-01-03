async function getPosts() {
  const posts = await fetch('https://willianjusten.com.br/search.json');
  const data = await posts.json();

  return data.map((post) => {
    console.log(post.title);
  });

  console.log(data);
}

getPosts();
