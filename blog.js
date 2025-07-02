
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
      commentElement.style.padding = "10px";
      commentElement.style.marginTop = "10px";
      commentElement.style.backgroundColor = "#e0f7ff";
      commentElement.style.borderRadius = "8px";
      commentElement.style.fontFamily = "Arial, sans-serif";

      commentContainer.appendChild(commentElement);
      input.value = ""; // Clear input field
    });
  });
