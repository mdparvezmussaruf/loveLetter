$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Open the envelope when clicked
  envelope.click(function () {
      if (!envelope.hasClass("open")) {
          openEnvelope();
      }
  });

  btn_open.click(function () {
      openEnvelope();
  });

  btn_reset.click(function () {
      closeEnvelope();
  });

  function openEnvelope() {
      if (!envelope.hasClass("open")) {
          envelope.addClass("open").removeClass("close");
      }
  }

  function closeEnvelope() {
      if (!envelope.hasClass("close")) {
          envelope.addClass("close").removeClass("open");
      }
  }

  // Keyboard Support
  $(document).keydown(function (e) {
      if (e.key === "Enter") {
          openEnvelope();
      } else if (e.key === "Escape") {
          closeEnvelope();
      }
  });
});
