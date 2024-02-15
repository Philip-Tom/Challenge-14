$(document).ready(function() {
  $(".delete-comment").on("click", function(e) {
    e.preventDefault();
    const commentId = $(this).data("comment-id");
    $.ajax({
      url: `/comments/${commentId}`,
      type: "DELETE",
      contentType: "application/json",
      success: function(response) {
        location.reload();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Failed to delete comment.");
      }
    });
  });
});