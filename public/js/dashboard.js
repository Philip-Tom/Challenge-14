$(document).ready(function () {
  $(".delete-post").on("click", function (event) {
    event.preventDefault();
    const postId = $(this).data("post-id");
    if (confirm("Are you sure you want to delete this post?")) {
      $.ajax({
        url: `/posts/${postId}`,
        type: "DELETE",
        success: function (response) {
          window.location.href = "/dashboard";
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Failed to delete post.");
        },
      });
    }
  });
});
