/* eslint-disable */

!(function (e, t) {
  var n = !0,
    o = null,
    i = t.querySelector('[src*="t.ghostboard.io"]'),
    r = 'https://api.ghostboard.io/',
    a = i && i.getAttribute('data-gbid');
  if (!a)
    return (
      console.warn(
        'ðŸ‘‰ Please check your Ghostboard tracking code, it looks invalid. More info: https://ghostboard.io/blog/how-to-setup-ghostboard/'
      ),
      !1
    );

  function c(e, t, n) {
    return e.addEventListener
      ? (e.addEventListener(t, n, !1), !0)
      : e.attachEvent
      ? e.attachEvent('on' + t, n)
      : void (e['on' + t] = n);
  }

  function u(e) {
    var t = new Image(),
      n = r + a + '/e.gif?';
    (n += 'l=' + encodeURIComponent(location)),
      (n += '&e=' + encodeURIComponent(e.message || JSON.stringify(e))),
      (t.src = n);
  }

  var s = (function () {
    try {
      return /Mobile|Tablet|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune|Playbook/i.test(
        window.navigator.userAgent
      );
    } catch (e) {
      return u(e), !1;
    }
  })();

  function l() {
    try {
      if (!n) return !1;
      n = !1;
      var i = 0,
        l = t.querySelector("link[type='application/rss+xml']"),
        f = t.querySelector('head base'),
        h = l || f,
        g = h ? h.href : '',
        v = t.querySelector("link[rel='shortcut icon']"),
        w = t.querySelector("link[rel='icon']"),
        p = v || w,
        b = p ? p.href : '',
        y = location || e.location || t.location;
      if ('undefined' != typeof ghost && ghost && ghost.url && ghost.url.api()) {
        var m = ghost.url.api();
        0 === (g = m.substring(0, m.indexOf('/ghost/') + 1)).indexOf('//') &&
          (g = location.protocol + g);
      } else {
        g && -1 !== g.indexOf('/rss/')
          ? (g = g.substring(0, g.length - 4))
          : g || (g = y.origin + '/');
      }
      var S = {
          A: g,
          C: navigator.language || navigator.userLanguage,
          F: y.origin,
          I: b,
          U: location.href || t.url,
          V: 2
        },
        T = (function () {
          var n = '';
          try {
            n = e.top.doc.referrer;
          } catch (t) {
            if (e.parent)
              try {
                n = e.parent.doc.referrer;
              } catch (e) {
                n = '';
              }
          }
          return '' === n ? t.referrer : n;
        })();
      T && (S.D = T);
      var M = t.head.querySelector('[name=generator]');
      M && M.content && (S.E = M.content);
      var O = null,
        k = null,
        x = !1,
        I = function (e) {
          if (o || x) return !1;
          (x = !0), (S.G = e), (O = new Date().getTime()), (i = 0);
          var n = (function () {
            try {
              return new XMLHttpRequest();
            } catch (e) {}
            try {
              return new ActiveXObject('Msxml2.XMLHTTP.6.0');
            } catch (e) {}
            try {
              return new ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (e) {}
            try {
              return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {}
            try {
              return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {}
            return !1;
          })();
          n.open('POST', r + 'v1/views/' + a, !0),
            n.setRequestHeader('Content-Type', 'application/json; charset=utf-8'),
            (n.onreadystatechange = function () {
              (x = !1),
                n.readyState === XMLHttpRequest.DONE &&
                  200 === n.status &&
                  ((o = JSON.parse(n.responseText)),
                  (function () {
                    for (var e = t.getElementsByTagName('a'), n = 0; n < e.length; n++)
                      c(e[n], 'click', function (e) {
                        d(e);
                      });
                  })());
            }),
            n.send(JSON.stringify(S));
        },
        L = function (e, t) {
          var n,
            a,
            c,
            u = new Date().getTime();
          o &&
            (!k || (k && u - k >= 1e3) || t) &&
            ((k = u),
            (n = o),
            (a = i),
            (c = e),
            (new Image().src =
              r + 'views/' + n + '/heartbeat.gif?t=' + a + '&e=' + encodeURIComponent(c)));
        },
        X = function (e) {
          var t = new Date().getTime();
          !o ? I(e) : (O = t);
        },
        q = function (e) {
          var t, n;
          -1 !== ['blur', 'focusout', 'pagehide', 'visibilityState:hidden'].indexOf(e) &&
            ((t = new Date().getTime()),
            (n = t - O) > 0 && ((i += parseInt(n / 1e3, 10)), (O = t))),
            L(e, !0),
            s && (o = null);
        };
      c(document, 'visibilitychange', function () {
        'hidden' === t.visibilityState && q('visibilityState:hidden'),
          'visible' === t.visibilityState && X('visibilityState:visible');
      }),
        c(window, 'focus', function () {
          X('focus');
        }),
        c(window, 'focusin', function () {
          X('focusin');
        }),
        c(window, 'pageshow', function () {
          X('pageshow');
        }),
        c(window, 'blur', function () {
          q('blur');
        }),
        c(window, 'focusout', function () {
          q('focusout');
        }),
        c(window, 'pagehide', function () {
          q('pagehide');
        }),
        c(window, 'beforeunload', function () {
          q('beforeunload');
        }),
        c(window, 'unload', function () {
          q('unload');
        }),
        ((t.hasFocus && t.hasFocus()) || 'visible' === t.visibilityState) && X('document-focus');
    } catch (e) {
      u(e);
    }
  }

  function d(e) {
    if (!e) return !1;
    var t = e.target || e.currentTarget;
    if (!(t && o)) return !1;
    var n = [];
    t.href && n.push(['l', t.href]),
      t.title && n.push(['t', t.title]),
      t.innerText && n.push(['a', t.innerText]),
      t.currentSrc && n.push(['i', t.currentSrc]),
      (function (e) {
        for (var t = new Image(), n = r + a + '/c.gif?', o = 0, i = e.length; o < i; o++)
          n += (0 === o ? '' : '&') + e[o][0] + '=' + encodeURIComponent(e[o][1]);
        t.src = n;
      })(n);
  }

  c(document, 'DOMContentLoaded', function () {
    l();
  }),
    c(document, 'readystatechange', function () {
      l();
    }),
    c(window, 'load', function () {
      l();
    }),
    document && t.readyState && 'complete' === t.readyState && l();
})(window, document);
