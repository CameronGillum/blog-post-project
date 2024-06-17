document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const comment = document.getElementById('comment').value;
    const timestamp = new Date().toISOString();

    // Save the comment to localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ username, title, comment, timestamp });
    localStorage.setItem('comments', JSON.stringify(comments));

    // Redirect to the blog page
    window.location.href = 'blog.html';
});
