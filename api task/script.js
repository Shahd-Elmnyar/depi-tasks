document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            injectData(data);
        })
        .catch(error => {
            displayError(error.message);
        });
});

const injectData = (posts) => {
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('col');

        const card = document.createElement('div');
        card.classList.add('card', 'post-card', 'h-100');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const postTitle = document.createElement('h5');
        postTitle.classList.add('card-title', 'post-title');
        postTitle.textContent = post.title;

        const postSubtitle = document.createElement('h6');
        postSubtitle.classList.add('card-subtitle', 'mb-2', 'text-body-secondary', 'post-subtitle');
        postSubtitle.textContent = `Post ID: ${post.id}`;

        const postBody = document.createElement('p');
        postBody.classList.add('card-text', 'post-body');
        postBody.textContent = post.body;

        cardBody.appendChild(postTitle);
        cardBody.appendChild(postSubtitle);
        cardBody.appendChild(postBody);
        card.appendChild(cardBody);
        postElement.appendChild(card);
        postsContainer.appendChild(postElement);
    });
}

const displayError = (errorMessage) => {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = `
    <div class="alert alert-danger" role="alert">
      Error fetching posts: ${errorMessage}
    </div>
  `;
}
