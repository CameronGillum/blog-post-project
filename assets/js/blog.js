document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Sort comments by timestamp, newest first
    comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    comments.forEach(comment => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postTitle = document.createElement('div');
        postTitle.classList.add('post-title');
        postTitle.textContent = comment.title;

        const postUsername = document.createElement('div');
        postUsername.classList.add('post-username');
        postUsername.textContent = `by ${comment.username}`;

        const postComment = document.createElement('div');
        postComment.classList.add('post-comment');
        postComment.textContent = comment.comment;

        postElement.appendChild(postTitle);
        postElement.appendChild(postUsername);
        postElement.appendChild(postComment);

        postsContainer.appendChild(postElement);
    });
});
