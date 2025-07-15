 const form = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const comment = document.getElementById('comment').value.trim();

      if (name && email && comment) {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `<strong>${name}</strong> <em>(${email})</em><br>${comment}`;
        commentList.appendChild(commentItem);
        form.reset();
      }
    });