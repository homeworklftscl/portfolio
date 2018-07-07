import $ from "jquery";
import swal from "sweetalert";
$("#order-form").on("submit", submitForm);

function submitForm(ev) {
  ev.preventDefault();

  var form = $(ev.target),
    data = form.serialize(),
    url = form.attr("action"),
    type = form.attr("method");

  ajaxForm(form)
    .done(function(msg) {
      var mes = msg.mes,
        status = msg.status;

      if (status === "OK") {
        swal({
          title: "Good Job!",
          text: mes,
          icon: "success",
          button: "Закрыть"
        });
      } else {
        swal({
          title: "Oops!",
          text: mes,
          icon: "error",
          button: "Закрыть"
        });
      }
    })
    .fail(function(jqXHR, textStatus) {
      swal({
        title: "Oops!",
        text: "Request failed: " + textStatus,
        icon: "error",
        button: "Закрыть"
      });
    });
}

// Универсальная функция для работы с формами
var ajaxForm = function(form) {
  var data = form.serialize(),
    url = form.attr("action");

  return $.ajax({
    type: "POST",
    url: url,
    dataType: "JSON",
    data: data
  });
};
