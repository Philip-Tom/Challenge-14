const editPostForm = document.querySelector("#edit-post-form");

editPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const postIdEdit = editPostForm.elements.postIdEdit.value;
  const title = editPostForm.elements.title.value.trim();
  const content = editPostForm.elements.content.value.trim();

  fetch(`/posts/${postIdEdit}`, {
    method: "PUT",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = `/dashboard`;
      } else {
        console.log(response);
        alert("Failed to update post...");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to update post.");
    });
});
