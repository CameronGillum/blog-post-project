document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const comment = document.getElementById('comment').value;

    const newComment = {
        username,
        title,
        comment,
        timestamp: new Date().toISOString()
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);
    comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    localStorage.setItem('comments', JSON.stringify(comments));

    window.location.href = 'blog.html';
});
