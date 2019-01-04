async function getPosts() {
  try {
    const posts = await fetch('https://willianjusten.com.br/search.json');
    const data = await posts.json();

    return data.map((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.error('We got a error:', error);  
  }
}

getPosts();
