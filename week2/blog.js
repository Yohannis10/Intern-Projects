
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".submit-buttton");
    const input = document.querySelector(".comment-section");

    // Create a container for comments
    const commentContainer = document.createElement("div");
    commentContainer.style.marginTop = "30px";
    document.body.appendChild(commentContainer);

    button.addEventListener("click", function () {
      const commentText = input.value.trim();

      if (commentText === "") {
        alert("Please enter a comment.");
        return;
      }

      const commentElement = document.createElement("div");
      commentElement.textContent = commentText;

      commentContainer.appendChild(commentElement);
      input.value = ""; // Clear input field
    });
  });
