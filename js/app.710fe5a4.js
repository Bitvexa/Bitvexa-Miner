(function(t) {
    function e(e) {
        for (var i, r, s = e[0], c = e[1], u = e[2], l = 0, d = []; l < s.length; l++)
            r = s[l],
            o[r] && d.push(o[r][0]),
            o[r] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        p && p(e);
        while (d.length)
            d.shift()();
        return a.push.apply(a, u || []),
            n()
    }

    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], i = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== o[c] && (i = !1)
            }
            i && (a.splice(e--, 1),
                t = s(s.s = n[0]))
        }
        return t
    }
    var i = {},
        o = {
            app: 0
        },
        a = [];

    function r(t) {
        return s.p + "js/" + ({
            about: "about"
        }[t] || t) + "." + {
            about: "ca0d488a"
        }[t] + ".js"
    }

    function s(e) {
        if (i[e])
            return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, s),
            n.l = !0,
            n.exports
    }
    s.e = function(t) {
            var e = [],
                n = o[t];
            if (0 !== n)
                if (n)
                    e.push(n[2]);
                else {
                    var i = new Promise(function(e, i) {
                        n = o[t] = [e, i]
                    });
                    e.push(n[2] = i);
                    var a, c = document.createElement("script");
                    c.charset = "utf-8",
                        c.timeout = 120,
                        s.nc && c.setAttribute("nonce", s.nc),
                        c.src = r(t),
                        a = function(e) {
                            c.onerror = c.onload = null,
                                clearTimeout(u);
                            var n = o[t];
                            if (0 !== n) {
                                if (n) {
                                    var i = e && ("load" === e.type ? "missing" : e.type),
                                        a = e && e.target && e.target.src,
                                        r = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + a + ")");
                                    r.type = i,
                                        r.request = a,
                                        n[1](r)
                                }
                                o[t] = void 0
                            }
                        };
                    var u = setTimeout(function() {
                        a({
                            type: "timeout",
                            target: c
                        })
                    }, 12e4);
                    c.onerror = c.onload = a,
                        document.head.appendChild(c)
                }
            return Promise.all(e)
        },
        s.m = t,
        s.c = i,
        s.d = function(t, e, n) {
            s.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        },
        s.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        s.t = function(t, e) {
            if (1 & e && (t = s(t)),
                8 & e)
                return t;
            if (4 & e && "object" === typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (s.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var i in t)
                    s.d(n, i, function(e) {
                            return t[e]
                        }
                        .bind(null, i));
            return n
        },
        s.n = function(t) {
            var e = t && t.__esModule ? function() {
                    return t["default"]
                } :
                function() {
                    return t
                };
            return s.d(e, "a", e),
                e
        },
        s.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        s.p = "/btv/",
        s.oe = function(t) {
            throw console.error(t),
                t
        };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = c.push.bind(c);
    c.push = e,
        c = c.slice();
    for (var l = 0; l < c.length; l++)
        e(c[l]);
    var p = u;
    a.push([0, "chunk-vendors"]),
        n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "0df0": function(t, e, n) {
        "use strict";
        var i = n("288f"),
            o = n.n(i);
        o.a
    },
    1: function(t, e) {},
    2: function(t, e) {},
    "288f": function(t, e, n) {},
    3: function(t, e) {},
    4: function(t, e) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"),
            n("551c"),
            n("f751"),
            n("097d");
        var i = n("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view")], 1)
            },
            a = [],
            r = (n("7c55"),
                n("2877")),
            s = {},
            c = Object(r["a"])(s, o, a, !1, null, null, null),
            u = c.exports,
            l = n("8c4f"),
            p = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "home"
                }, [n("HelloWorld")], 1)
            },
            d = [],
            h = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "hello"
                }, [n("modal", {
                    attrs: {
                        name: "alert-msg",
                        transition: "pop-out",
                        width: 300,
                        height: "auto"
                    }
                }, [n("div", {
                    staticClass: "box"
                }, [t._v(t._s(t.msg))])]), n("div", {
                    staticClass: "form-signin"
                }, [n("h1", {
                    staticClass: "text-left"
                }, [t._m(0), n("span", {
                    staticClass: "ver-algin"
                }, [t._v("BTV " + t._s(t.$t("i18nView.btvTitle")))]), n("span", {
                    staticClass: "lang-switch"
                }, ["zh" === this.$i18n.locale ? n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return t.changeLang("id")
                        }
                    }
                }, [t._v("ID")]) : n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return t.changeLang("en")
                        }
                    }
                }, [t._v("EN")])])]), n("h5", {
                    staticClass: "mb-3 font-weight-normal"
                }), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("\n        " + t._s(t.$t("i18nView.currentAccount")) + ":\n        "), t.currentAccount ? n("span", [t._v("\n          " + t._s(t.currentAccount) + ",\n          "), n("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            return t.logout()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.logout")))])]) : n("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            return t.login()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.login")))])])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("VEX " + t._s(t.$t("i18nView.balance")) + ": " + t._s(t.vexBalance))])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("\n        BTV " + t._s(t.$t("i18nView.balance")) + ": " + t._s(t.btvBalance) + "\n        "), t.isMobile ? n("a", {
                    attrs: {
                        href: "https://",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("i18nView.trade")))]) : n("a", {
                    attrs: {
                        href: "https://",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("i18nView.trade")))])])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", [t._v("\n        CPU " + t._s(t.$t("i18nView.used")) + ": " + t._s(t.cpuLeft) + ",\n        "), t.cpuMS < 1 ? n("span", {
                    staticClass: "error"
                }, [t._v(t._s(t.$t("i18nView.notEnough")))]) : t._e(), n("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://vexrex.net/"
                    }
                }, [t._v("REX " + t._s(t.$t("i18nView.rent")))])])]), n("div", {
                    staticClass: "mb-2 text-left"
                }, [n("label", {}, [t._v("NET " + t._s(t.$t("i18nView.used")) + ": " + t._s(t.netLeft))])]), n("p", {
                    staticClass: "text-muted text-left"
                }, [t._v(t._s(t.$t("i18nView.digTime")) + ": " + t._s(t.digCount))]), t.isMyKey || t.isMeet ? n("p", {
                    staticClass: "mykey-tip"
                }, [t._v("\n      本工具已无法在当前环境使用，请到官网tokenpocket.pro下载\n      "), n("a", {
                    attrs: {
                        href: "https://www.tokenpocket.pro/?from=mykey"
                    }
                }, [t._v("TokenPocket 钱包")]), t._v(" 体验急速低耗的挖矿功能。\n    ")]) : n("div", [t.isAuto ? n("button", {
                    staticClass: "btn mb-3 btn-danger btn-block",
                    on: {
                        click: function(e) {
                            return t.stop()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.stopAuto")))]) : n("button", {
                    staticClass: "btn mb-3 btn-primary btn-block",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.startAuto()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.enableAuto")) + " 0.0001 VEX")])]), !t.isFirstTime && t.isAuto ? n("div", {
                    staticClass: "checkbox mb-3 text-right"
                }, [n("label", [n("input", {
                    attrs: {
                        id: "fast-switch",
                        type: "checkbox",
                        value: "gogogo"
                    },
                    on: {
                        click: t.handleFast
                    }
                }), t._v("\n        " + t._s(t.$t("i18nView.fastMode")) + "\n      ")])]) : t._e(), n("div", {
                    staticClass: "settings"
                }, [n("h2", [t._v(t._s(t.$t("i18nView.advSetting")))]), n("p", {
                    staticClass: "small-tip"
                }, [t._v(t._s(t.$t("i18nView.settingTips")))]), n("p", {
                    staticClass: "text-left setting-item"
                }, [t._v("\n        " + t._s(t.$t("i18nView.diggingSetting")) + "\n        "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settingAmount,
                        expression: "settingAmount"
                    }],
                    staticStyle: {
                        width: "60px"
                    },
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.settingAmount
                    },
                    on: {
                        blur: t.recordSetting,
                        input: function(e) {
                            e.target.composing || (t.settingAmount = e.target.value)
                        }
                    }
                }), t._v("\n        " + t._s(t.$t("i18nView.diggingSetting1")) + "\n        "), n("br"), n("span", {
                    staticClass: "setting-tip"
                }, [t._v(t._s(t.$t("i18nView.digTip")) + " " + t._s(t.predictAmount))])]), n("p", {
                    staticClass: "text-left setting-item"
                }, [t._v("\n        " + t._s(t.$t("i18nView.cpuQuota")) + "\n        "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.cpuQuota,
                        expression: "cpuQuota"
                    }],
                    staticStyle: {
                        width: "60px"
                    },
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.cpuQuota
                    },
                    on: {
                        blur: t.recordCpuQuota,
                        input: function(e) {
                            e.target.composing || (t.cpuQuota = e.target.value)
                        }
                    }
                }), t._v(" %\n        "), n("br"), n("span", {
                    staticClass: "setting-tip"
                }, [t._v(t._s(t.$t("i18nView.cpuQuotaTip")))])])]), n("hr"), n("p", {
                    staticClass: "text-muted text-left"
                }, [t._v("*" + t._s(t.$t("i18nView.whiteTip")) + ".")]), n("p", {
                    staticClass: "text-muted text-left"
                }, [t._v(t._s(t.$t("i18nView.airgrabTip")) + ".")]), n("p", {
                    staticClass: "text-muted text-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentEndpoint,
                        expression: "currentEndpoint"
                    }],
                    staticClass: "form-control form-control-sm",
                    staticStyle: {
                        width: "240px",
                        display: "inline-block",
                        padding: "2px 4px",
                        "margin-right": "4px"
                    },
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.currentEndpoint
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.currentEndpoint = e.target.value)
                        }
                    }
                }), n("button", {
                    staticClass: "btn btn-sm btn-primary",
                    on: {
                        click: function(e) {
                            return t.updateNode()
                        }
                    }
                }, [t._v(t._s(t.$t("i18nView.changeNode")))])])])], 1)
            },
            f = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://"
                    }
                }, [i("img", {
                    staticClass: "pow-logo",
                    attrs: {
                        src: n("cf05"),
                        alt: "",
                        height: "30"
                    }
                })])
            }],
            m = (n("28a5"),
                n("7f7f"),
                n("4917"),
                n("d3b7")),
            g = n.n(m),
            v = n("76b0"),
            b = n.n(v),
            _ = n("876a"),
            w = n.n(_),
            y = n("1315");
        b.a.plugins(new w.a);
        var A = ["vexascan.com"],
            x = Math.floor(Math.random() * A.length),
            S = {
                blockchain: "eos",
                host: A[x],
                port: 8443,
                protocol: "https",
                chainId: "f9f432b1851b5c179d2091a96f593aaed50ec7466b74f89301f957a83e56ce1f"
            },
            C = {
                accounts: [S]
            },
            E = null,
            k = {
                name: "HelloWorld",
                data: function() {
                    return {
                        currentAccount: null,
                        currentPermission: null,
                        readOnlyEos: null,
                        isFirstTime: !0,
                        vexBalance: "",
                        btvBalance: "",
                        isAuto: !1,
                        cpuLeft: "",
                        cpuMS: 100,
                        netLeft: "",
                        contractRam: "",
                        contractCpu: "",
                        contractAmount: "",
                        predictAmount: "",
                        msg: "",
                        isFast: !1,
                        digCount: 0,
                        currentEndpoint: "",
                        isMyKey: !1,
                        isMeet: !1,
                        settingAmount: 0,
                        cpuQuota: 0,
                        isMobile: !0
                    }
                },
                created: function() {
                    var t = this;
                    this.isMobile = null != navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|tokenpocket|mmp|smartphone|midp|wap|xoom|j2me|blackberry)/i);
                    var e = S.chainId,
                        n = S.protocol + "://" + S.host + ":" + S.port;
                    this.currentEndpoint = S.protocol + "://" + S.host,
                        this.readOnlyEos = g()({
                            chainId: e,
                            httpEndpoint: n
                        }),
                        this.settingAmount = parseFloat(localStorage.getItem("amount-setting") || 0),
                        this.cpuQuota = parseFloat(localStorage.getItem("cpu-quota") || 0),
                        this.digCount = +localStorage.getItem("dig-count"),
                        b.a.scatter.connect("BTV Auto Miner").then(function(e) {
                            if (!e)
                                return !1;
                            t.scatter = b.a.scatter,
                                t.login()
                        }),
                        navigator.userAgent.toLowerCase().indexOf("mykey") > -1 && (this.isMyKey = !0),
                        navigator.userAgent.toLowerCase().indexOf("meet.one") > -1 && (this.isMeet = !0)
                },
                methods: {
                    login: function() {
                        var t = this;
                        this.scatter.getIdentity(C).then(function() {
                            var e = t.scatter.identity.accounts[0];
                            t.scatter;
                            t.pubKey = t.scatter.identity.publicKey,
                                E = t.scatter.eos(S, g.a),
                                t.currentAccount = e.name,
                                t.currentPermission = e.authority,
                                t.queryBalanceInit()
                        }).catch(function(t) {})
                    },
                    recordSetting: function() {
                        localStorage.setItem("amount-setting", this.settingAmount)
                    },
                    handleFast: function(t) {
                        var e = this;
                        this.isFast = t.target.checked,
                            this.isFast ? this.fastTimer = setInterval(function() {
                                e.transfer()
                            }, 1e3) : clearInterval(this.fastTimer)
                    },
                    logout: function() {
                        this.scatter.forgetIdentity(),
                            this.isAuto = !1,
                            this.currentAccount = "",
                            this.currentPermission = "",
                            this.cpuLeft = "",
                            this.netLeft = "",
                            this.btvBalance = "",
                            this.vexBalance = "",
                            this.cpuMS = 100
                    },
                    updateNode: function() {
                        this.currentEndpoint;
                        var t = this.currentEndpoint.split("://"),
                            e = 2 === t.length ? t[0] : "https",
                            n = 2 === t.length ? t[1] : t[0];
                        n.match("/") && (n = n.split("/")[0]);
                        var i = n.split(":");
                        S = {
                                blockchain: "eos",
                                host: i[0],
                                port: i[1] ? i[1] : "https" === e ? 8443 : 8443,
                                protocol: e,
                                chainId: "f9f432b1851b5c179d2091a96f593aaed50ec7466b74f89301f957a83e56ce1f"
                            },
                            this.login();
                        var o = S.protocol + "://" + S.host + ":" + S.port;
                        this.readOnlyEos = g()({
                            chainId: S.chainId,
                            httpEndpoint: o
                        })
                    },
                    changeLang: function(t) {
                        this.$i18n.locale = t,
                            localStorage.setItem("locale", t),
                            y["Settings"].defaultLocale = "en" === t ? "en-US" : "zh-CN"
                    },
                    startAuto: function() {
                        this.isAuto = !0,
                            this.transfer("start")
                    },
                    recordCpuQuota: function() {
                        localStorage.setItem("cpu-quota", this.cpuQuota)
                    },
                    transfer: function(t) {
                        var e = this;
                        if (this.currentAccount) {
                            if (parseFloat(this.predictAmount) < parseFloat(this.settingAmount) || 0 !== +this.cpuQuota && parseFloat(this.cpuLeft) > parseFloat(this.cpuQuota))
                                return void("start" === t && setTimeout(function() {
                                    e.transfer("start")
                                }, 5e3));
                            E.transaction({
                                actions: [{
                                    account: "vex.token",
                                    name: "transfer",
                                    authorization: [{
                                        actor: this.currentAccount,
                                        permission: this.currentPermission
                                    }],
                                    data: {
                                        from: this.currentAccount,
                                        to: "bitvexatoken",
                                        quantity: "0.0001 VEX",
                                        memo: ""
                                    }
                                }, {
                                    account: "vex.token",
                                    name: "transfer",
                                    authorization: [{
                                        actor: this.currentAccount,
                                        permission: this.currentPermission
                                    }],
                                    data: {
                                        from: this.currentAccount,
                                        to: "bitvexatoken",
                                        quantity: "0.0001 VEX",
                                        memo: ""
                                    }
                                }, {
                                    account: "vex.token",
                                    name: "transfer",
                                    authorization: [{
                                        actor: this.currentAccount,
                                        permission: this.currentPermission
                                    }],
                                    data: {
                                        from: this.currentAccount,
                                        to: "bitvexatoken",
                                        quantity: "0.0001 VEX",
                                        memo: ""
                                    }
                                }, {
                                    account: "vex.token",
                                    name: "transfer",
                                    authorization: [{
                                        actor: this.currentAccount,
                                        permission: this.currentPermission
                                    }],
                                    data: {
                                        from: this.currentAccount,
                                        to: "bitvexatoken",
                                        quantity: "0.0001 VEX",
                                        memo: ""
                                    }
                                }, {
                                    account: "vex.token",
                                    name: "transfer",
                                    authorization: [{
                                        actor: this.currentAccount,
                                        permission: this.currentPermission
                                    }],
                                    data: {
                                        from: this.currentAccount,
                                        to: "bitvexatoken",
                                        quantity: "0.0001 VEX",
                                        memo: ""
                                    }
                                }]
                            }).then(function(t) {
                                e.isFirstTime = !1,
                                    e.digCount = e.digCount + 5,
                                    localStorage.setItem("dig-count", e.digCount),
                                    e.isAuto && !e.isFast && e.transfer("start")
                            }).catch(function(t) {
                                e.isAuto && !e.isFast && setTimeout(function() {
                                    e.transfer("start")
                                }, 5e3)
                            })
                        }
                    },
                    queryBalanceInit: function() {
                        var t = this;
                        this.currentAccount && (this.balanceTimer || (this.queryBalance(),
                            this.queryState(),
                            this.balanceTimer = setInterval(function() {
                                t.queryBalance()
                            }, 2e3),
                            this.stateTimer = setInterval(function() {
                                t.queryState()
                            }, 1e4)))
                    },
                    handleError: function(t) {
                        if ("string" === typeof t)
                            try {
                                var e = JSON.parse(t);
                                e.error && e.error.details.length ? "tx_duplicate" !== e.error.name && "expired_tx_exception" !== e.error.name && (this.msg = this.$t("i18nView.error") + e.error.details[0].message,
                                    this.$modal.show("alert-msg")) : e.error ? (this.msg = this.$t("i18nView.error") + e.error.what,
                                    this.$modal.show("alert-msg")) : (this.msg = this.$t("i18nView.error") + e.message || e.code || e.msg,
                                    this.$modal.show("alert-msg"))
                            } catch (n) {
                                this.msg = this.$t("i18nView.error") + n,
                                    this.$modal.show("alert-msg")
                            }
                        else
                            this.msg = this.$t("i18nView.error") + t.message || t.type || t.code,
                            this.$modal.show("alert-msg")
                    },
                    stop: function() {
                        this.isAuto = !1,
                            clearInterval(this.fastTimer)
                    },
                    queryState: function() {
                        var t = this;
                        this.currentAccount && (this.readOnlyEos.getCurrencyBalance("vex.token", this.currentAccount, "VEX").then(function(e) {
                                t.vexBalance = e[0]
                            }),
                            this.readOnlyEos.getAccount(this.currentAccount).then(function(e) {
                                t.cpuLeft = parseFloat(e.cpu_limit.used / e.cpu_limit.max * 100).toFixed(2) + "%",
                                    t.cpuMS = e.cpu_limit.available / 1e3,
                                    t.netLeft = parseFloat(e.net_limit.used / e.net_limit.max * 100).toFixed(2) + "%"
                            }))
                    },
                    queryBalance: function() {
                        var t = this;
                        this.currentAccount && (this.readOnlyEos.getCurrencyBalance("bitvexatoken", this.currentAccount, "BTV").then(function(e) {
                                t.btvBalance = e[0]
                            }),
                            this.readOnlyEos.getCurrencyBalance("bitvexatoken", "bitvexatoken", "BTV").then(function(e) {
                                t.contractAmount = e[0],
                                    t.predictAmount = parseFloat(parseFloat(e[0]) / 4e4).toFixed(8) + " BTV"
                            }))
                    }
                }
            },
            T = k,
            O = (n("0df0"),
                Object(r["a"])(T, h, f, !1, null, null, null)),
            $ = O.exports,
            I = {
                name: "home",
                components: {
                    HelloWorld: $
                }
            },
            V = I,
            M = Object(r["a"])(V, p, d, !1, null, null, null),
            P = M.exports;
        i["a"].use(l["a"]);
        var F = new l["a"]({
                routes: [{
                    path: "/",
                    name: "home",
                    component: P
                }, {
                    path: "/about",
                    name: "about",
                    component: function() {
                        return n.e("about").then(n.bind(null, "f820"))
                    }
                }]
            }),
            L = (n("6762"),
                n("2fdb"),
                n("ac6a"),
                n("386d"),
                n("a925")),
            j = n("2ef0"),
            q = n.n(j),
            Q = {
                i18nView: {
                    login: "Login",
                    account: "Account",
                    currentAccount: "Account",
                    balance: "Balance",
                    logout: "Logout",
                    contract: "Contract",
                    used: "Used",
                    rent: "Rent",
                    contractRamTip: "If contract's RAM is run out, new users can't get the token",
                    ram: "RAM",
                    digTip: "Expected per transfer",
                    whiteTip: "Please whitelist this action and have a check on the usage of resources to see whether is it normal.",
                    airgrabTip: "Send any amount of VEX to bitvexatoken, the VEX will instantly be refunded and you will mine 0.0025% of the BTV balance of bitvexatoken",
                    enableAuto: "Automatic Transfer",
                    stopAuto: "Stop Automatic",
                    btvTitle: "Auto Miner",
                    error: "Error: ",
                    trade: "Trade",
                    fastMode: "Ultra-Fast Mode(Whitelist required)",
                    digTime: "Mining times",
                    changeNode: "Change Node",
                    diggingSetting: "When the expected per transfer is greater than",
                    diggingSetting1: "start transfer",
                    cpuTips: "It will failed when your CPU & NET is exceeds 100%",
                    settingTips: "There will be errors cause of the fluctuation of CPU and timing",
                    advSetting: "Settings",
                    cpuQuota: "CPU Quota ",
                    cpuQuotaTip: "(Stop mining when the quota is reached, 0 is unlimited by default)",
                    notEnough: "Insufficient "
                }
            },
            B = Q,
            N = {
                i18nView: {
                    login: "Login",
                    account: "Account",
                    currentAccount: "Account",
                    balance: "Balance",
                    logout: "Logout",
                    contract: "Contract",
                    used: "Used",
                    rent: "Sewa",
                    contractRamTip: "Jika RAM kontrak habis, pengguna baru tidak bisa mendapatkan token",
                    ram: "RAM",
                    digTip: "Diharapkan per transfer",
                    whiteTip: "*Harap daftar putih tindakan ini dan periksa penggunaan sumber daya untuk melihat apakah itu normal",
                    airgrabTip: "Kirim berapa pun jumlah VEX ke bitvexatoken, VEX akan langsung dikembalikan dan Anda akan menambang 0,0025% dari saldo BTV bitvexatoken.",
                    enableAuto: "Transfer Otomatis",
                    stopAuto: "Berhenti Otomatis",
                    btvTitle: "Auto Miner",
                    error: "Error: ",
                    trade: "Trade",
                    fastMode: "Mode Ultra-Cepat (Diperlukan Daftar Putih)",
                    digTime: "Waktu penambangan",
                    changeNode: "Change Node",
                    diggingSetting: "Ketika diharapkan per transfer lebih besar dari ",
                    diggingSetting1: "mulai transfer",
                    cpuTips: "Ini akan gagal ketika CPU & NET Anda melebihi 100%",
                    settingTips: "Akan ada kesalahan penyebab fluktuasi CPU dan waktu",
                    advSetting: "Pengaturan",
                    cpuQuota: "Kuota CPU ",
                    cpuQuotaTip: "(Hentikan penambangan ketika kuota tercapai, 0 tidak terbatas secara default)",
                    notEnough: "Tidak memadai "
                }
            },
            z = N;
        i["a"].use(L["a"]);
        var U = ["zh", "en"],
            D = navigator.language,
            R = "en";
        D.indexOf("zh") >= 0 && (R = "zh");
        var K = location.search.substr(1),
            W = {};
        K && q.a.forEach(K.split("&"), function(t) {
            var e = t.split("=");
            W[e[0]] = e[1]
        });
        var H = q.a.includes(U, W["locale"]) ? W["locale"] : R;
        H = localStorage.getItem("locale") || H;
        var J = new L["a"]({
                locale: H,
                messages: {
                    en: z,
                    zh: B
                }
            }),
            X = J,
            G = n("1881"),
            Y = n.n(G);
        i["a"].use(Y.a),
            i["a"].config.productionTip = !1,
            new i["a"]({
                i18n: X,
                router: F,
                render: function(t) {
                    return t(u)
                }
            }).$mount("#app")
    },
    "5c48": function(t, e, n) {},
    "7c55": function(t, e, n) {
        "use strict";
        var i = n("5c48"),
            o = n.n(i);
        o.a
    },
    cf05: function(t, e, n) {
        t.exports = n.p + "img/logo.aa22c7a2.png"
    }
});
//# sourceMappingURL=app.710fe5a4.js.map