"undefined" != typeof jQuery
  ? console.log("jQuery Loaded")
  : console.log("not loaded yet");
var $j = jQuery.noConflict();
function myFunction() {
  var t =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  document.getElementById("myBar").style.width = t + "%";
}
function startCounter() {
  $(window).scrollTop() > 3500 &&
    ($(window).off("scroll", startCounter),
    $(".count-number").each(function () {
      var t = $(this);
      jQuery({ Counter: 0 }).animate(
        { Counter: t.text() },
        {
          duration: 5e3,
          easing: "swing",
          step: function () {
            t.text(Math.ceil(this.Counter));
          },
        }
      );
    }));
}
document.addEventListener("contextmenu", (t) => t.preventDefault()),
  $(window).on("load", function () {
    $("#status").delay(2500).fadeOut("slow"),
      $("#iconloader").delay(2500).fadeOut("slow"),
      $("body").delay(0);
  }),
  jQuery(".dropdown-toggle").click(function () {
    var t = jQuery(this).attr("href");
    return (window.location.href = t), !1;
  }),
  $("body").on("mouseenter mouseleave", ".dropdown", function (t) {
    var o = $(t.target).closest(".dropdown"),
      e = $(".dropdown-menu", o);
    o.addClass("show"),
      e.addClass("show"),
      setTimeout(function () {
        o[o.is(":hover") ? "addClass" : "removeClass"]("show"),
          e[o.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 100);
  }),
  $(document).ready(function () {
    var t = function (t, o, e) {
      var n = t.outerHeight(),
        r = o.offset().top;
      e.scrollTop() >= r
        ? (o.height(n), t.addClass("is-sticky"))
        : (t.removeClass("is-sticky"), o.height("auto"));
    };
    $('[data-toggle="sticky-onscroll"]').each(function () {
      var o = $(this),
        e = $("<div>").addClass("sticky-wrapper");
      o.before(e),
        o.addClass("sticky"),
        $(window).on(
          "scroll.sticky-onscroll resize.sticky-onscroll",
          function () {
            t(o, e, $(this));
          }
        ),
        t(o, e, $(window));
    });
  }),
  (window.onscroll = function () {
    myFunction();
  }),
  ($x = "#productIndicators"),
  (function (t) {
    "use strict";
    t(".next").click(function () {
      return $(".carousel").carousel("next"), !1;
    }),
      t(".prev").click(function () {
        return $(".carousel").carousel("prev"), !1;
      });
  })(jQuery),
  (function (t) {
    (t.fn.countTo = function (o) {
      return (
        (o = o || {}),
        t(this).each(function () {
          var e = t.extend(
              {},
              t.fn.countTo.defaults,
              {
                from: t(this).data("from"),
                to: t(this).data("to"),
                speed: t(this).data("speed"),
                refreshInterval: t(this).data("refresh-interval"),
                decimals: t(this).data("decimals"),
              },
              o
            ),
            n = Math.ceil(e.speed / e.refreshInterval),
            r = (e.to - e.from) / n,
            a = this,
            c = t(this),
            l = 0,
            i = e.from,
            s = c.data("countTo") || {};
          function u(t) {
            var o = e.formatter.call(a, t, e);
            c.html(o);
          }
          c.data("countTo", s),
            s.interval && clearInterval(s.interval),
            (s.interval = setInterval(function () {
              l++,
                u((i += r)),
                "function" == typeof e.onUpdate && e.onUpdate.call(a, i);
              l >= n &&
                (c.removeData("countTo"),
                clearInterval(s.interval),
                (i = e.to),
                "function" == typeof e.onComplete && e.onComplete.call(a, i));
            }, e.refreshInterval)),
            u(i);
        })
      );
    }),
      (t.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 10,
        decimals: 0,
        formatter: function (t, o) {
          return t.toFixed(o.decimals);
        },
        onUpdate: null,
        onComplete: null,
      });
  })(jQuery),
  jQuery(function (t) {
    t(".count-number").data("countToOptions", {
      formatter: function (t, o) {
        return t.toFixed(o.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      },
    }),
      t(".timer").each(function (o) {
        var e = t(this);
        (o = t.extend({}, o || {}, e.data("countToOptions") || {})),
          e.countTo(o);
      });
  }),
  $(window).scroll(startCounter),
  $(window).scroll(function () {
    $(this).scrollTop() >= 30
      ? $("#return-to-top").fadeIn(200)
      : $("#return-to-top").fadeOut(200);
  }),
  $("#return-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 300);
  }),
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
