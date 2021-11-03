/* eslint-disable */

/**
 * @source https://t.ghostboard.io/min.js
 */
!(function (e, t) {
  var n = !0,
    o = null,
    i = t.querySelector('[src*="ghostboard.js"]'),
    r = 'https://api.ghostboard.io/',
    a = i && i.getAttribute('data-gbid');
  if (!a)
    return (
      console.warning(
        '👉 Please check your Ghostboard tracking code, it looks invalid. More info: https://ghostboard.io/blog/how-to-setup-ghostboard/'
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

  function u() {
    try {
      if (!n) return !1;
      n = !1;
      var i = 0,
        u = t.querySelector("link[type='application/rss+xml']"),
        d = t.querySelector('head base'),
        l = u || d,
        f = l ? l.href : '',
        h = t.querySelector("link[rel='shortcut icon']"),
        g = t.querySelector("link[rel='icon']"),
        v = h || g,
        p = v ? v.href : '',
        w = location || e.location || t.location;
      if ('undefined' != typeof ghost && ghost && ghost.url && ghost.url.api()) {
        var b = ghost.url.api();
        0 === (f = b.substring(0, b.indexOf('/ghost/') + 1)).indexOf('//') &&
          (f = location.protocol + f);
      } else {
        f && -1 !== f.indexOf('/rss/')
          ? (f = f.substring(0, f.length - 4))
          : f || (f = w.origin + '/');
      }
      var y = {
          A: f,
          C: navigator.language || navigator.userLanguage,
          F: w.origin,
          I: p,
          U: location.href || t.url,
          V: 2
        },
        m = (function () {
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
      m && (y.D = m);
      var S = t.head.querySelector('[name=generator]');
      S && S.content && (y.E = S.content);
      var T = null,
        O = null,
        x = !1,
        M = function (e) {
          if (o || x) return !1;
          (x = !0), (y.G = e), (T = new Date().getTime()), (i = 0);
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
                        s(e);
                      });
                  })());
            }),
            n.send(JSON.stringify(y));
        },
        L = function (e) {
          var t,
            n,
            a,
            c = new Date().getTime(),
            u = !O || (O && c - O >= 1e3),
            s =
              -1 !==
              [
                'beforeunload',
                'blur',
                'unload',
                'focusout',
                'pagehide',
                'visibilityState:hidden'
              ].indexOf(e);
          o &&
            (u || s) &&
            ((O = c),
            (t = o),
            (n = i),
            (a = e),
            (new Image().src =
              r + 'views/' + t + '/heartbeat.gif?t=' + n + '&e=' + encodeURIComponent(a)));
        },
        X = function (e) {
          var t = new Date().getTime();
          !o ? M(e) : ((T = t), L(e));
        },
        q = function (e) {
          var t, n;
          -1 !== ['blur', 'focusout', 'pagehide', 'visibilityState:hidden'].indexOf(e) &&
            ((t = new Date().getTime()),
            (n = t - T) > 0 && ((i += parseInt(n / 1e3, 10)), (T = t))),
            L(e);
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
      !(function (e) {
        var t = new Image(),
          n = r + a + '/e.gif?';
        (n += 'l=' + encodeURIComponent(location)),
          (n += '&e=' + encodeURIComponent(e.message || JSON.stringify(e))),
          (t.src = n);
      })(e);
    }
  }

  function s(e) {
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
    u();
  }),
    c(document, 'readystatechange', function () {
      u();
    }),
    c(window, 'load', function () {
      u();
    }),
    document && t.readyState && 'complete' === t.readyState && u();
})(window, document);
