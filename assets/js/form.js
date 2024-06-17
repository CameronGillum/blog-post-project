document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const comment = document.getElementById('comment').value;

    // Save the comment to localStorage or send to server
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ username, title, comment });
    localStorage.setItem('comments', JSON.stringify(comments));

    // Redirect to the blog page
    window.location.href = 'blog.html';
});
