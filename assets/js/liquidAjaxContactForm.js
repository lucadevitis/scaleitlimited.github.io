!(function (t) {
    "use strict";
    t("form", ".contact-form ").submit(function (r) {
        r.preventDefault();
        var s = !0,
            e = this,
            o = t(e).siblings(".contact-form-result"),
            os = t(o).children(".form-success"),
            of = t(o).children(".form-failure"),
            om,
            i;
        if (
            (t(e)
                .find(":required")
                .each(function () {
                    t(this).css("border-color", ""), t.trim(t(this).val()) || (t(this).css("border-color", "red"), (s = !1));
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    "email" != t(this).attr("type") || r.test(t.trim(t(this).val())) || (t(this).css("border-color", "red"), (s = !1));
                })
                .keyup(function () {
                    t(this).css("border-color", "");
                })
                .change(function () {
                    t(this).css("border-color", "");
                }),
            s)
        ) {
            var a = t(this).attr("action"),
                c = t(this).attr("method"),
                n = t(this).serialize();
            t.ajax({ url: a, type: c, dataType: "json", data: n }).done(function (r) {
                "error" == r.type ? (om = of) : (t(e)[0].reset(), (om = os)),
                    om.removeClass("hidden").html(i),
                    setTimeout(function () {
                        om.addClass("hidden").html("");
                    }, 7e3);
            });
        }
    });
})(jQuery);
