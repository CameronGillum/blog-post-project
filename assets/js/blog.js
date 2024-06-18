document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Sort comments by timestamp (oldest first)
    comments.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    comments.forEach(comment => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('div');
        titleElement.classList.add('post-title');
        titleElement.textContent = comment.title;

        const usernameElement = document.createElement('div');
        usernameElement.classList.add('post-username');
        usernameElement.textContent = `by ${comment.username}`;

        const commentElement = document.createElement('div');
        commentElement.classList.add('post-comment');
        commentElement.textContent = comment.comment;

        postElement.appendChild(titleElement);
        postElement.appendChild(usernameElement);
        postElement.appendChild(commentElement);

        postsContainer.appendChild(postElement);
    });

    document.getElementById('back-to-form').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
