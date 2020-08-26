$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    alert(
      "Dear " + $("input#appName").val() + ", Thanks for coming to work today! "
    );
  });
});
