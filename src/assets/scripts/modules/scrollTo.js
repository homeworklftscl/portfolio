import $ from "jquery";
$(document).ready(function() {
  $(".arrow-down_about").click(function() {
    $("html, body").animate({ scrollTop: $("#about").position().top }, 1000);
  });
  $(".arrow-down_works").click(function() {
    $("html, body").animate({ scrollTop: $("#works").position().top }, 1000);
  });
  $(".arrow-down_blog").click(function() {
    $("html, body").animate({ scrollTop: $("#blog").position().top }, 1000);
  });
  $(".arrow-up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
