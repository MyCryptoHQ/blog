/* eslint-disable */

/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof _paq !== 'object') {
  _paq = [];
}
if (typeof window.Matomo !== 'object') {
  window.Matomo = window.Piwik = (function () {
    var r,
      b = {},
      z = {},
      J = document,
      g = navigator,
      ab = screen,
      W = window,
      h = W.performance || W.mozPerformance || W.msPerformance || W.webkitPerformance,
      t = W.encodeURIComponent,
      V = W.decodeURIComponent,
      k = unescape,
      L = [],
      H,
      u,
      al = [],
      y = 0,
      af = 0,
      X = 0,
      m = false;

    function p(at) {
      try {
        return V(at);
      } catch (au) {
        return unescape(at);
      }
    }

    function M(au) {
      var at = typeof au;
      return at !== 'undefined';
    }

    function C(at) {
      return typeof at === 'function';
    }

    function Z(at) {
      return typeof at === 'object';
    }

    function x(at) {
      return typeof at === 'string' || at instanceof String;
    }

    function ak(at) {
      return typeof at === 'number' || at instanceof Number;
    }

    function ac(at) {
      return M(at) && (ak(at) || (x(at) && at.length));
    }

    function D(au) {
      if (!au) {
        return true;
      }
      var at;
      var av = true;
      for (at in au) {
        if (Object.prototype.hasOwnProperty.call(au, at)) {
          av = false;
        }
      }
      return av;
    }

    function ao(at) {
      var au = typeof console;
      if (au !== 'undefined' && console && console.error) {
        console.error(at);
      }
    }

    function aj() {
      var ay, ax, aA, au, at;
      for (ay = 0; ay < arguments.length; ay += 1) {
        at = null;
        if (arguments[ay] && arguments[ay].slice) {
          at = arguments[ay].slice();
        }
        au = arguments[ay];
        aA = au.shift();
        var az, av;
        var aw = x(aA) && aA.indexOf('::') > 0;
        if (aw) {
          az = aA.split('::');
          av = az[0];
          aA = az[1];
          if ('object' === typeof u[av] && 'function' === typeof u[av][aA]) {
            u[av][aA].apply(u[av], au);
          } else {
            if (at) {
              al.push(at);
            }
          }
        } else {
          for (ax = 0; ax < L.length; ax++) {
            if (x(aA)) {
              av = L[ax];
              var aB = aA.indexOf('.') > 0;
              if (aB) {
                az = aA.split('.');
                if (av && 'object' === typeof av[az[0]]) {
                  av = av[az[0]];
                  aA = az[1];
                } else {
                  if (at) {
                    al.push(at);
                    break;
                  }
                }
              }
              if (av[aA]) {
                av[aA].apply(av, au);
              } else {
                var aC =
                  "The method '" +
                  aA +
                  '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                ao(aC);
                if (!aB) {
                  throw new TypeError(aC);
                }
              }
              if (aA === 'addTracker') {
                break;
              }
              if (aA === 'setTrackerUrl' || aA === 'setSiteId') {
                break;
              }
            } else {
              aA.apply(L[ax], au);
            }
          }
        }
      }
    }

    function ar(aw, av, au, at) {
      if (aw.addEventListener) {
        aw.addEventListener(av, au, at);
        return true;
      }
      if (aw.attachEvent) {
        return aw.attachEvent('on' + av, au);
      }
      aw['on' + av] = au;
    }

    function n(at) {
      if (J.readyState === 'complete') {
        at();
      } else {
        if (W.addEventListener) {
          W.addEventListener('load', at, false);
        } else {
          if (W.attachEvent) {
            W.attachEvent('onload', at);
          }
        }
      }
    }

    function q(aw) {
      var at = false;
      if (J.attachEvent) {
        at = J.readyState === 'complete';
      } else {
        at = J.readyState !== 'loading';
      }
      if (at) {
        aw();
        return;
      }
      var av;
      if (J.addEventListener) {
        ar(J, 'DOMContentLoaded', function au() {
          J.removeEventListener('DOMContentLoaded', au, false);
          if (!at) {
            at = true;
            aw();
          }
        });
      } else {
        if (J.attachEvent) {
          J.attachEvent('onreadystatechange', function au() {
            if (J.readyState === 'complete') {
              J.detachEvent('onreadystatechange', au);
              if (!at) {
                at = true;
                aw();
              }
            }
          });
          if (J.documentElement.doScroll && W === W.top) {
            (function au() {
              if (!at) {
                try {
                  J.documentElement.doScroll('left');
                } catch (ax) {
                  setTimeout(au, 0);
                  return;
                }
                at = true;
                aw();
              }
            })();
          }
        }
      }
      ar(
        W,
        'load',
        function () {
          if (!at) {
            at = true;
            aw();
          }
        },
        false
      );
    }

    function ag(au, az, aA) {
      if (!au) {
        return '';
      }
      var at = '',
        aw,
        av,
        ax,
        ay;
      for (aw in b) {
        if (Object.prototype.hasOwnProperty.call(b, aw)) {
          ay = b[aw] && 'function' === typeof b[aw][au];
          if (ay) {
            av = b[aw][au];
            ax = av(az || {}, aA);
            if (ax) {
              at += ax;
            }
          }
        }
      }
      return at;
    }

    function am() {
      var at;
      m = true;
      ag('unload');
      at = new Date();
      var au = at.getTimeAlias();
      if (r - au > 3000) {
        r = au + 3000;
      }
      if (r) {
        do {
          at = new Date();
        } while (at.getTimeAlias() < r);
      }
    }

    function o(av, au) {
      var at = J.createElement('script');
      at.type = 'text/javascript';
      at.src = av;
      if (at.readyState) {
        at.onreadystatechange = function () {
          var aw = this.readyState;
          if (aw === 'loaded' || aw === 'complete') {
            at.onreadystatechange = null;
            au();
          }
        };
      } else {
        at.onload = au;
      }
      J.getElementsByTagName('head')[0].appendChild(at);
    }

    function N() {
      var at = '';
      try {
        at = W.top.document.referrer;
      } catch (av) {
        if (W.parent) {
          try {
            at = W.parent.document.referrer;
          } catch (au) {
            at = '';
          }
        }
      }
      if (at === '') {
        at = J.referrer;
      }
      return at;
    }

    function s(at) {
      var av = new RegExp('^([a-z]+):'),
        au = av.exec(at);
      return au ? au[1] : null;
    }

    function d(at) {
      var av = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'),
        au = av.exec(at);
      return au ? au[1] : at;
    }

    function G(at) {
      return /^[0-9][0-9]*(\.[0-9]+)?$/.test(at);
    }

    function Q(av, aw) {
      var at = {},
        au;
      for (au in av) {
        if (av.hasOwnProperty(au) && aw(av[au])) {
          at[au] = av[au];
        }
      }
      return at;
    }

    function B(av) {
      var at = {},
        au;
      for (au in av) {
        if (av.hasOwnProperty(au)) {
          if (G(av[au])) {
            at[au] = Math.round(av[au]);
          } else {
            throw new Error(
              'Parameter "' +
                au +
                '" provided value "' +
                av[au] +
                '" is not valid. Please provide a numeric value.'
            );
          }
        }
      }
      return at;
    }

    function l(au) {
      var av = '',
        at;
      for (at in au) {
        if (au.hasOwnProperty(at)) {
          av += '&' + t(at) + '=' + t(au[at]);
        }
      }
      return av;
    }

    function an(au, at) {
      au = String(au);
      return au.lastIndexOf(at, 0) === 0;
    }

    function U(au, at) {
      au = String(au);
      return au.indexOf(at, au.length - at.length) !== -1;
    }

    function A(au, at) {
      au = String(au);
      return au.indexOf(at) !== -1;
    }

    function f(au, at) {
      au = String(au);
      return au.substr(0, au.length - at);
    }

    function I(aw, av, ay) {
      aw = String(aw);
      if (!ay) {
        ay = '';
      }
      var at = aw.indexOf('#');
      var az = aw.length;
      if (at === -1) {
        at = az;
      }
      var ax = aw.substr(0, at);
      var au = aw.substr(at, az - at);
      if (ax.indexOf('?') === -1) {
        ax += '?';
      } else {
        if (!U(ax, '?')) {
          ax += '&';
        }
      }
      return ax + t(av) + '=' + t(ay) + au;
    }

    function j(au, av) {
      au = String(au);
      if (au.indexOf('?' + av + '=') === -1 && au.indexOf('&' + av + '=') === -1) {
        return au;
      }
      var aw = au.indexOf('?');
      if (aw === -1) {
        return au;
      }
      var at = au.substr(aw + 1);
      var aA = au.substr(0, aw);
      if (at) {
        var aB = '';
        var aD = at.indexOf('#');
        if (aD !== -1) {
          aB = at.substr(aD + 1);
          at = at.substr(0, aD);
        }
        var ax;
        var az = at.split('&');
        var ay = az.length - 1;
        for (ay; ay >= 0; ay--) {
          ax = az[ay].split('=')[0];
          if (ax === av) {
            az.splice(ay, 1);
          }
        }
        var aC = az.join('&');
        if (aC) {
          aA = aA + '?' + aC;
        }
        if (aB) {
          aA += '#' + aB;
        }
      }
      return aA;
    }

    function e(av, au) {
      var at = '[\\?&#]' + au + '=([^&#]*)';
      var ax = new RegExp(at);
      var aw = ax.exec(av);
      return aw ? p(aw[1]) : '';
    }

    function a(at) {
      if (at && String(at) === at) {
        return at.replace(/^\s+|\s+$/g, '');
      }
      return at;
    }

    function F(at) {
      return unescape(t(at));
    }

    function aq(aI) {
      var av = function (aO, aN) {
          return (aO << aN) | (aO >>> (32 - aN));
        },
        aJ = function (aQ) {
          var aO = '',
            aP,
            aN;
          for (aP = 7; aP >= 0; aP--) {
            aN = (aQ >>> (aP * 4)) & 15;
            aO += aN.toString(16);
          }
          return aO;
        },
        ay,
        aL,
        aK,
        au = [],
        aC = 1732584193,
        aA = 4023233417,
        az = 2562383102,
        ax = 271733878,
        aw = 3285377520,
        aH,
        aG,
        aF,
        aE,
        aD,
        aM,
        at,
        aB = [];
      aI = F(aI);
      at = aI.length;
      for (aL = 0; aL < at - 3; aL += 4) {
        aK =
          (aI.charCodeAt(aL) << 24) |
          (aI.charCodeAt(aL + 1) << 16) |
          (aI.charCodeAt(aL + 2) << 8) |
          aI.charCodeAt(aL + 3);
        aB.push(aK);
      }
      switch (at & 3) {
        case 0:
          aL = 2147483648;
          break;
        case 1:
          aL = (aI.charCodeAt(at - 1) << 24) | 8388608;
          break;
        case 2:
          aL = (aI.charCodeAt(at - 2) << 24) | (aI.charCodeAt(at - 1) << 16) | 32768;
          break;
        case 3:
          aL =
            (aI.charCodeAt(at - 3) << 24) |
            (aI.charCodeAt(at - 2) << 16) |
            (aI.charCodeAt(at - 1) << 8) |
            128;
          break;
      }
      aB.push(aL);
      while ((aB.length & 15) !== 14) {
        aB.push(0);
      }
      aB.push(at >>> 29);
      aB.push((at << 3) & 4294967295);
      for (ay = 0; ay < aB.length; ay += 16) {
        for (aL = 0; aL < 16; aL++) {
          au[aL] = aB[ay + aL];
        }
        for (aL = 16; aL <= 79; aL++) {
          au[aL] = av(au[aL - 3] ^ au[aL - 8] ^ au[aL - 14] ^ au[aL - 16], 1);
        }
        aH = aC;
        aG = aA;
        aF = az;
        aE = ax;
        aD = aw;
        for (aL = 0; aL <= 19; aL++) {
          aM = (av(aH, 5) + ((aG & aF) | (~aG & aE)) + aD + au[aL] + 1518500249) & 4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        for (aL = 20; aL <= 39; aL++) {
          aM = (av(aH, 5) + (aG ^ aF ^ aE) + aD + au[aL] + 1859775393) & 4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        for (aL = 40; aL <= 59; aL++) {
          aM =
            (av(aH, 5) + ((aG & aF) | (aG & aE) | (aF & aE)) + aD + au[aL] + 2400959708) &
            4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        for (aL = 60; aL <= 79; aL++) {
          aM = (av(aH, 5) + (aG ^ aF ^ aE) + aD + au[aL] + 3395469782) & 4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        aC = (aC + aH) & 4294967295;
        aA = (aA + aG) & 4294967295;
        az = (az + aF) & 4294967295;
        ax = (ax + aE) & 4294967295;
        aw = (aw + aD) & 4294967295;
      }
      aM = aJ(aC) + aJ(aA) + aJ(az) + aJ(ax) + aJ(aw);
      return aM.toLowerCase();
    }

    function ae(av, at, au) {
      if (!av) {
        av = '';
      }
      if (!at) {
        at = '';
      }
      if (av === 'translate.googleusercontent.com') {
        if (au === '') {
          au = at;
        }
        at = e(at, 'u');
        av = d(at);
      } else {
        if (
          av === 'cc.bingj.com' ||
          av === 'webcache.googleusercontent.com' ||
          av.slice(0, 5) === '74.6.'
        ) {
          at = J.links[0].href;
          av = d(at);
        }
      }
      return [av, at, au];
    }

    function O(au) {
      var at = au.length;
      if (au.charAt(--at) === '.') {
        au = au.slice(0, at);
      }
      if (au.slice(0, 2) === '*.') {
        au = au.slice(1);
      }
      if (au.indexOf('/') !== -1) {
        au = au.substr(0, au.indexOf('/'));
      }
      return au;
    }

    function ap(au) {
      au = au && au.text ? au.text : au;
      if (!x(au)) {
        var at = J.getElementsByTagName('title');
        if (at && M(at[0])) {
          au = at[0].text;
        }
      }
      return au;
    }

    function S(at) {
      if (!at) {
        return [];
      }
      if (!M(at.children) && M(at.childNodes)) {
        return at.children;
      }
      if (M(at.children)) {
        return at.children;
      }
      return [];
    }

    function Y(au, at) {
      if (!au || !at) {
        return false;
      }
      if (au.contains) {
        return au.contains(at);
      }
      if (au === at) {
        return true;
      }
      if (au.compareDocumentPosition) {
        return !!(au.compareDocumentPosition(at) & 16);
      }
      return false;
    }

    function P(av, aw) {
      if (av && av.indexOf) {
        return av.indexOf(aw);
      }
      if (!M(av) || av === null) {
        return -1;
      }
      if (!av.length) {
        return -1;
      }
      var at = av.length;
      if (at === 0) {
        return -1;
      }
      var au = 0;
      while (au < at) {
        if (av[au] === aw) {
          return au;
        }
        au++;
      }
      return -1;
    }

    function i(av) {
      if (!av) {
        return false;
      }

      function at(ax, ay) {
        if (W.getComputedStyle) {
          return J.defaultView.getComputedStyle(ax, null)[ay];
        }
        if (ax.currentStyle) {
          return ax.currentStyle[ay];
        }
      }

      function aw(ax) {
        ax = ax.parentNode;
        while (ax) {
          if (ax === J) {
            return true;
          }
          ax = ax.parentNode;
        }
        return false;
      }

      function au(az, aF, ax, aC, aA, aD, aB) {
        var ay = az.parentNode,
          aE = 1;
        if (!aw(az)) {
          return false;
        }
        if (9 === ay.nodeType) {
          return true;
        }
        if (
          '0' === at(az, 'opacity') ||
          'none' === at(az, 'display') ||
          'hidden' === at(az, 'visibility')
        ) {
          return false;
        }
        if (!M(aF) || !M(ax) || !M(aC) || !M(aA) || !M(aD) || !M(aB)) {
          aF = az.offsetTop;
          aA = az.offsetLeft;
          aC = aF + az.offsetHeight;
          ax = aA + az.offsetWidth;
          aD = az.offsetWidth;
          aB = az.offsetHeight;
        }
        if (av === az && (0 === aB || 0 === aD) && 'hidden' === at(az, 'overflow')) {
          return false;
        }
        if (ay) {
          if ('hidden' === at(ay, 'overflow') || 'scroll' === at(ay, 'overflow')) {
            if (
              aA + aE > ay.offsetWidth + ay.scrollLeft ||
              aA + aD - aE < ay.scrollLeft ||
              aF + aE > ay.offsetHeight + ay.scrollTop ||
              aF + aB - aE < ay.scrollTop
            ) {
              return false;
            }
          }
          if (az.offsetParent === ay) {
            aA += ay.offsetLeft;
            aF += ay.offsetTop;
          }
          return au(ay, aF, ax, aC, aA, aD, aB);
        }
        return true;
      }

      return au(av);
    }

    var ai = {
      htmlCollectionToArray: function (av) {
        var at = [],
          au;
        if (!av || !av.length) {
          return at;
        }
        for (au = 0; au < av.length; au++) {
          at.push(av[au]);
        }
        return at;
      },
      find: function (at) {
        if (!document.querySelectorAll || !at) {
          return [];
        }
        var au = document.querySelectorAll(at);
        return this.htmlCollectionToArray(au);
      },
      findMultiple: function (av) {
        if (!av || !av.length) {
          return [];
        }
        var au, aw;
        var at = [];
        for (au = 0; au < av.length; au++) {
          aw = this.find(av[au]);
          at = at.concat(aw);
        }
        at = this.makeNodesUnique(at);
        return at;
      },
      findNodesByTagName: function (au, at) {
        if (!au || !at || !au.getElementsByTagName) {
          return [];
        }
        var av = au.getElementsByTagName(at);
        return this.htmlCollectionToArray(av);
      },
      makeNodesUnique: function (at) {
        var ay = [].concat(at);
        at.sort(function (aA, az) {
          if (aA === az) {
            return 0;
          }
          var aC = P(ay, aA);
          var aB = P(ay, az);
          if (aC === aB) {
            return 0;
          }
          return aC > aB ? -1 : 1;
        });
        if (at.length <= 1) {
          return at;
        }
        var au = 0;
        var aw = 0;
        var ax = [];
        var av;
        av = at[au++];
        while (av) {
          if (av === at[au]) {
            aw = ax.push(au);
          }
          av = at[au++] || null;
        }
        while (aw--) {
          at.splice(ax[aw], 1);
        }
        return at;
      },
      getAttributeValueFromNode: function (ax, av) {
        if (!this.hasNodeAttribute(ax, av)) {
          return;
        }
        if (ax && ax.getAttribute) {
          return ax.getAttribute(av);
        }
        if (!ax || !ax.attributes) {
          return;
        }
        var aw = typeof ax.attributes[av];
        if ('undefined' === aw) {
          return;
        }
        if (ax.attributes[av].value) {
          return ax.attributes[av].value;
        }
        if (ax.attributes[av].nodeValue) {
          return ax.attributes[av].nodeValue;
        }
        var au;
        var at = ax.attributes;
        if (!at) {
          return;
        }
        for (au = 0; au < at.length; au++) {
          if (at[au].nodeName === av) {
            return at[au].nodeValue;
          }
        }
        return null;
      },
      hasNodeAttributeWithValue: function (au, at) {
        var av = this.getAttributeValueFromNode(au, at);
        return !!av;
      },
      hasNodeAttribute: function (av, at) {
        if (av && av.hasAttribute) {
          return av.hasAttribute(at);
        }
        if (av && av.attributes) {
          var au = typeof av.attributes[at];
          return 'undefined' !== au;
        }
        return false;
      },
      hasNodeCssClass: function (av, at) {
        if (av && at && av.className) {
          var au = typeof av.className === 'string' ? av.className.split(' ') : [];
          if (-1 !== P(au, at)) {
            return true;
          }
        }
        return false;
      },
      findNodesHavingAttribute: function (ax, av, at) {
        if (!at) {
          at = [];
        }
        if (!ax || !av) {
          return at;
        }
        var aw = S(ax);
        if (!aw || !aw.length) {
          return at;
        }
        var au, ay;
        for (au = 0; au < aw.length; au++) {
          ay = aw[au];
          if (this.hasNodeAttribute(ay, av)) {
            at.push(ay);
          }
          at = this.findNodesHavingAttribute(ay, av, at);
        }
        return at;
      },
      findFirstNodeHavingAttribute: function (av, au) {
        if (!av || !au) {
          return;
        }
        if (this.hasNodeAttribute(av, au)) {
          return av;
        }
        var at = this.findNodesHavingAttribute(av, au);
        if (at && at.length) {
          return at[0];
        }
      },
      findFirstNodeHavingAttributeWithValue: function (aw, av) {
        if (!aw || !av) {
          return;
        }
        if (this.hasNodeAttributeWithValue(aw, av)) {
          return aw;
        }
        var at = this.findNodesHavingAttribute(aw, av);
        if (!at || !at.length) {
          return;
        }
        var au;
        for (au = 0; au < at.length; au++) {
          if (this.getAttributeValueFromNode(at[au], av)) {
            return at[au];
          }
        }
      },
      findNodesHavingCssClass: function (ax, aw, at) {
        if (!at) {
          at = [];
        }
        if (!ax || !aw) {
          return at;
        }
        if (ax.getElementsByClassName) {
          var ay = ax.getElementsByClassName(aw);
          return this.htmlCollectionToArray(ay);
        }
        var av = S(ax);
        if (!av || !av.length) {
          return [];
        }
        var au, az;
        for (au = 0; au < av.length; au++) {
          az = av[au];
          if (this.hasNodeCssClass(az, aw)) {
            at.push(az);
          }
          at = this.findNodesHavingCssClass(az, aw, at);
        }
        return at;
      },
      findFirstNodeHavingClass: function (av, au) {
        if (!av || !au) {
          return;
        }
        if (this.hasNodeCssClass(av, au)) {
          return av;
        }
        var at = this.findNodesHavingCssClass(av, au);
        if (at && at.length) {
          return at[0];
        }
      },
      isLinkElement: function (au) {
        if (!au) {
          return false;
        }
        var at = String(au.nodeName).toLowerCase();
        var aw = ['a', 'area'];
        var av = P(aw, at);
        return av !== -1;
      },
      setAnyAttribute: function (au, at, av) {
        if (!au || !at) {
          return;
        }
        if (au.setAttribute) {
          au.setAttribute(at, av);
        } else {
          au[at] = av;
        }
      }
    };
    var w = {
      CONTENT_ATTR: 'data-track-content',
      CONTENT_CLASS: 'matomoTrackContent',
      LEGACY_CONTENT_CLASS: 'piwikTrackContent',
      CONTENT_NAME_ATTR: 'data-content-name',
      CONTENT_PIECE_ATTR: 'data-content-piece',
      CONTENT_PIECE_CLASS: 'matomoContentPiece',
      LEGACY_CONTENT_PIECE_CLASS: 'piwikContentPiece',
      CONTENT_TARGET_ATTR: 'data-content-target',
      CONTENT_TARGET_CLASS: 'matomoContentTarget',
      LEGACY_CONTENT_TARGET_CLASS: 'piwikContentTarget',
      CONTENT_IGNOREINTERACTION_ATTR: 'data-content-ignoreinteraction',
      CONTENT_IGNOREINTERACTION_CLASS: 'matomoContentIgnoreInteraction',
      LEGACY_CONTENT_IGNOREINTERACTION_CLASS: 'piwikContentIgnoreInteraction',
      location: undefined,
      findContentNodes: function () {
        var au = '.' + this.CONTENT_CLASS;
        var av = '.' + this.LEGACY_CONTENT_CLASS;
        var at = '[' + this.CONTENT_ATTR + ']';
        var aw = ai.findMultiple([au, av, at]);
        return aw;
      },
      findContentNodesWithinNode: function (aw) {
        if (!aw) {
          return [];
        }
        var au = ai.findNodesHavingCssClass(aw, this.CONTENT_CLASS);
        au = ai.findNodesHavingCssClass(aw, this.LEGACY_CONTENT_CLASS, au);
        var at = ai.findNodesHavingAttribute(aw, this.CONTENT_ATTR);
        if (at && at.length) {
          var av;
          for (av = 0; av < at.length; av++) {
            au.push(at[av]);
          }
        }
        if (ai.hasNodeAttribute(aw, this.CONTENT_ATTR)) {
          au.push(aw);
        } else {
          if (ai.hasNodeCssClass(aw, this.CONTENT_CLASS)) {
            au.push(aw);
          } else {
            if (ai.hasNodeCssClass(aw, this.LEGACY_CONTENT_CLASS)) {
              au.push(aw);
            }
          }
        }
        au = ai.makeNodesUnique(au);
        return au;
      },
      findParentContentNode: function (au) {
        if (!au) {
          return;
        }
        var av = au;
        var at = 0;
        while (av && av !== J && av.parentNode) {
          if (ai.hasNodeAttribute(av, this.CONTENT_ATTR)) {
            return av;
          }
          if (ai.hasNodeCssClass(av, this.CONTENT_CLASS)) {
            return av;
          }
          if (ai.hasNodeCssClass(av, this.LEGACY_CONTENT_CLASS)) {
            return av;
          }
          av = av.parentNode;
          if (at > 1000) {
            break;
          }
          at++;
        }
      },
      findPieceNode: function (au) {
        var at;
        at = ai.findFirstNodeHavingAttribute(au, this.CONTENT_PIECE_ATTR);
        if (!at) {
          at = ai.findFirstNodeHavingClass(au, this.CONTENT_PIECE_CLASS);
        }
        if (!at) {
          at = ai.findFirstNodeHavingClass(au, this.LEGACY_CONTENT_PIECE_CLASS);
        }
        if (at) {
          return at;
        }
        return au;
      },
      findTargetNodeNoDefault: function (at) {
        if (!at) {
          return;
        }
        var au = ai.findFirstNodeHavingAttributeWithValue(at, this.CONTENT_TARGET_ATTR);
        if (au) {
          return au;
        }
        au = ai.findFirstNodeHavingAttribute(at, this.CONTENT_TARGET_ATTR);
        if (au) {
          return au;
        }
        au = ai.findFirstNodeHavingClass(at, this.CONTENT_TARGET_CLASS);
        if (au) {
          return au;
        }
        au = ai.findFirstNodeHavingClass(at, this.LEGACY_CONTENT_TARGET_CLASS);
        if (au) {
          return au;
        }
      },
      findTargetNode: function (at) {
        var au = this.findTargetNodeNoDefault(at);
        if (au) {
          return au;
        }
        return at;
      },
      findContentName: function (au) {
        if (!au) {
          return;
        }
        var ax = ai.findFirstNodeHavingAttributeWithValue(au, this.CONTENT_NAME_ATTR);
        if (ax) {
          return ai.getAttributeValueFromNode(ax, this.CONTENT_NAME_ATTR);
        }
        var at = this.findContentPiece(au);
        if (at) {
          return this.removeDomainIfIsInLink(at);
        }
        if (ai.hasNodeAttributeWithValue(au, 'title')) {
          return ai.getAttributeValueFromNode(au, 'title');
        }
        var av = this.findPieceNode(au);
        if (ai.hasNodeAttributeWithValue(av, 'title')) {
          return ai.getAttributeValueFromNode(av, 'title');
        }
        var aw = this.findTargetNode(au);
        if (ai.hasNodeAttributeWithValue(aw, 'title')) {
          return ai.getAttributeValueFromNode(aw, 'title');
        }
      },
      findContentPiece: function (au) {
        if (!au) {
          return;
        }
        var aw = ai.findFirstNodeHavingAttributeWithValue(au, this.CONTENT_PIECE_ATTR);
        if (aw) {
          return ai.getAttributeValueFromNode(aw, this.CONTENT_PIECE_ATTR);
        }
        var at = this.findPieceNode(au);
        var av = this.findMediaUrlInNode(at);
        if (av) {
          return this.toAbsoluteUrl(av);
        }
      },
      findContentTarget: function (av) {
        if (!av) {
          return;
        }
        var aw = this.findTargetNode(av);
        if (ai.hasNodeAttributeWithValue(aw, this.CONTENT_TARGET_ATTR)) {
          return ai.getAttributeValueFromNode(aw, this.CONTENT_TARGET_ATTR);
        }
        var au;
        if (ai.hasNodeAttributeWithValue(aw, 'href')) {
          au = ai.getAttributeValueFromNode(aw, 'href');
          return this.toAbsoluteUrl(au);
        }
        var at = this.findPieceNode(av);
        if (ai.hasNodeAttributeWithValue(at, 'href')) {
          au = ai.getAttributeValueFromNode(at, 'href');
          return this.toAbsoluteUrl(au);
        }
      },
      isSameDomain: function (at) {
        if (!at || !at.indexOf) {
          return false;
        }
        if (0 === at.indexOf(this.getLocation().origin)) {
          return true;
        }
        var au = at.indexOf(this.getLocation().host);
        if (8 >= au && 0 <= au) {
          return true;
        }
        return false;
      },
      removeDomainIfIsInLink: function (av) {
        var au = '^https?://[^/]+';
        var at = '^.*//[^/]+';
        if (av && av.search && -1 !== av.search(new RegExp(au)) && this.isSameDomain(av)) {
          av = av.replace(new RegExp(at), '');
          if (!av) {
            av = '/';
          }
        }
        return av;
      },
      findMediaUrlInNode: function (ax) {
        if (!ax) {
          return;
        }
        var av = ['img', 'embed', 'video', 'audio'];
        var at = ax.nodeName.toLowerCase();
        if (-1 !== P(av, at) && ai.findFirstNodeHavingAttributeWithValue(ax, 'src')) {
          var aw = ai.findFirstNodeHavingAttributeWithValue(ax, 'src');
          return ai.getAttributeValueFromNode(aw, 'src');
        }
        if (at === 'object' && ai.hasNodeAttributeWithValue(ax, 'data')) {
          return ai.getAttributeValueFromNode(ax, 'data');
        }
        if (at === 'object') {
          var ay = ai.findNodesByTagName(ax, 'param');
          if (ay && ay.length) {
            var au;
            for (au = 0; au < ay.length; au++) {
              if (
                'movie' === ai.getAttributeValueFromNode(ay[au], 'name') &&
                ai.hasNodeAttributeWithValue(ay[au], 'value')
              ) {
                return ai.getAttributeValueFromNode(ay[au], 'value');
              }
            }
          }
          var az = ai.findNodesByTagName(ax, 'embed');
          if (az && az.length) {
            return this.findMediaUrlInNode(az[0]);
          }
        }
      },
      trim: function (at) {
        return a(at);
      },
      isOrWasNodeInViewport: function (ay) {
        if (!ay || !ay.getBoundingClientRect || ay.nodeType !== 1) {
          return true;
        }
        var ax = ay.getBoundingClientRect();
        var aw = J.documentElement || {};
        var av = ax.top < 0;
        if (av && ay.offsetTop) {
          av = ay.offsetTop + ax.height > 0;
        }
        var au = aw.clientWidth;
        if (W.innerWidth && au > W.innerWidth) {
          au = W.innerWidth;
        }
        var at = aw.clientHeight;
        if (W.innerHeight && at > W.innerHeight) {
          at = W.innerHeight;
        }
        return (ax.bottom > 0 || av) && ax.right > 0 && ax.left < au && (ax.top < at || av);
      },
      isNodeVisible: function (au) {
        var at = i(au);
        var av = this.isOrWasNodeInViewport(au);
        return at && av;
      },
      buildInteractionRequestParams: function (at, au, av, aw) {
        var ax = '';
        if (at) {
          ax += 'c_i=' + t(at);
        }
        if (au) {
          if (ax) {
            ax += '&';
          }
          ax += 'c_n=' + t(au);
        }
        if (av) {
          if (ax) {
            ax += '&';
          }
          ax += 'c_p=' + t(av);
        }
        if (aw) {
          if (ax) {
            ax += '&';
          }
          ax += 'c_t=' + t(aw);
        }
        if (ax) {
          ax += '&ca=1';
        }
        return ax;
      },
      buildImpressionRequestParams: function (at, au, av) {
        var aw = 'c_n=' + t(at) + '&c_p=' + t(au);
        if (av) {
          aw += '&c_t=' + t(av);
        }
        if (aw) {
          aw += '&ca=1';
        }
        return aw;
      },
      buildContentBlock: function (av) {
        if (!av) {
          return;
        }
        var at = this.findContentName(av);
        var au = this.findContentPiece(av);
        var aw = this.findContentTarget(av);
        at = this.trim(at);
        au = this.trim(au);
        aw = this.trim(aw);
        return { name: at || 'Unknown', piece: au || 'Unknown', target: aw || '' };
      },
      collectContent: function (aw) {
        if (!aw || !aw.length) {
          return [];
        }
        var av = [];
        var at, au;
        for (at = 0; at < aw.length; at++) {
          au = this.buildContentBlock(aw[at]);
          if (M(au)) {
            av.push(au);
          }
        }
        return av;
      },
      setLocation: function (at) {
        this.location = at;
      },
      getLocation: function () {
        var at = this.location || W.location;
        if (!at.origin) {
          at.origin = at.protocol + '//' + at.hostname + (at.port ? ':' + at.port : '');
        }
        return at;
      },
      toAbsoluteUrl: function (au) {
        if ((!au || String(au) !== au) && au !== '') {
          return au;
        }
        if ('' === au) {
          return this.getLocation().href;
        }
        if (au.search(/^\/\//) !== -1) {
          return this.getLocation().protocol + au;
        }
        if (au.search(/:\/\//) !== -1) {
          return au;
        }
        if (0 === au.indexOf('#')) {
          return this.getLocation().origin + this.getLocation().pathname + au;
        }
        if (0 === au.indexOf('?')) {
          return this.getLocation().origin + this.getLocation().pathname + au;
        }
        if (0 === au.search('^[a-zA-Z]{2,11}:')) {
          return au;
        }
        if (au.search(/^\//) !== -1) {
          return this.getLocation().origin + au;
        }
        var at = '(.*/)';
        var av = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(at))[0];
        return av + au;
      },
      isUrlToCurrentDomain: function (au) {
        var av = this.toAbsoluteUrl(au);
        if (!av) {
          return false;
        }
        var at = this.getLocation().origin;
        if (at === av) {
          return true;
        }
        if (0 === String(av).indexOf(at)) {
          if (':' === String(av).substr(at.length, 1)) {
            return false;
          }
          return true;
        }
        return false;
      },
      setHrefAttribute: function (au, at) {
        if (!au || !at) {
          return;
        }
        ai.setAnyAttribute(au, 'href', at);
      },
      shouldIgnoreInteraction: function (at) {
        if (ai.hasNodeAttribute(at, this.CONTENT_IGNOREINTERACTION_ATTR)) {
          return true;
        }
        if (ai.hasNodeCssClass(at, this.CONTENT_IGNOREINTERACTION_CLASS)) {
          return true;
        }
        if (ai.hasNodeCssClass(at, this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS)) {
          return true;
        }
        return false;
      }
    };

    function aa(au, ax) {
      if (ax) {
        return ax;
      }
      au = w.toAbsoluteUrl(au);
      if (A(au, '?')) {
        var aw = au.indexOf('?');
        au = au.slice(0, aw);
      }
      if (U(au, 'matomo.php')) {
        au = f(au, 'matomo.php'.length);
      } else {
        if (U(au, 'piwik.php')) {
          au = f(au, 'piwik.php'.length);
        } else {
          if (U(au, '.php')) {
            var at = au.lastIndexOf('/');
            var av = 1;
            au = au.slice(0, at + av);
          }
        }
      }
      if (U(au, '/js/')) {
        au = f(au, 'js/'.length);
      }
      return au;
    }

    function R(az) {
      var aB = 'Matomo_Overlay';
      var au = new RegExp(
        'index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=[^&]*)?'
      );
      var av = au.exec(J.referrer);
      if (av) {
        var ax = av[1];
        if (ax !== String(az)) {
          return false;
        }
        var ay = av[2],
          at = av[3],
          aw = av[4];
        if (!aw) {
          aw = '';
        } else {
          if (aw.indexOf('&segment=') === 0) {
            aw = aw.substr('&segment='.length);
          }
        }
        W.name = aB + '###' + ay + '###' + at + '###' + aw;
      }
      var aA = W.name.split('###');
      return aA.length === 4 && aA[0] === aB;
    }

    function ad(au, az, av) {
      var ay = W.name.split('###'),
        ax = ay[1],
        at = ay[2],
        aw = ay[3],
        aA = aa(au, az);
      o(aA + 'plugins/Overlay/client/client.js?v=1', function () {
        Matomo_Overlay_Client.initialize(aA, av, ax, at, aw);
      });
    }

    function v() {
      var av;
      try {
        av = W.frameElement;
      } catch (au) {
        return true;
      }
      if (M(av)) {
        return av && String(av.nodeName).toLowerCase() === 'iframe' ? true : false;
      }
      try {
        return W.self !== W.top;
      } catch (at) {
        return true;
      }
    }

    function T(cj, cf) {
      var bP = this,
        bj = 'mtm_consent',
        cK = 'mtm_cookie_consent',
        cT = 'mtm_consent_removed',
        ca = ae(J.domain, W.location.href, N()),
        c1 = O(ca[0]),
        bT = p(ca[1]),
        bu = p(ca[2]),
        cZ = false,
        cn = 'GET',
        dh = cn,
        aM = 'application/x-www-form-urlencoded; charset=UTF-8',
        cD = aM,
        aI = cj || '',
        bO = '',
        c7 = '',
        cs = '',
        cc = cf || '',
        bF = '',
        bU = '',
        ba,
        bp = '',
        de = [
          '7z',
          'aac',
          'apk',
          'arc',
          'arj',
          'asf',
          'asx',
          'avi',
          'azw3',
          'bin',
          'csv',
          'deb',
          'dmg',
          'doc',
          'docx',
          'epub',
          'exe',
          'flv',
          'gif',
          'gz',
          'gzip',
          'hqx',
          'ibooks',
          'jar',
          'jpg',
          'jpeg',
          'js',
          'mobi',
          'mp2',
          'mp3',
          'mp4',
          'mpg',
          'mpeg',
          'mov',
          'movie',
          'msi',
          'msp',
          'odb',
          'odf',
          'odg',
          'ods',
          'odt',
          'ogg',
          'ogv',
          'pdf',
          'phps',
          'png',
          'ppt',
          'pptx',
          'qt',
          'qtm',
          'ra',
          'ram',
          'rar',
          'rpm',
          'rtf',
          'sea',
          'sit',
          'tar',
          'tbz',
          'tbz2',
          'bz',
          'bz2',
          'tgz',
          'torrent',
          'txt',
          'wav',
          'wma',
          'wmv',
          'wpd',
          'xls',
          'xlsx',
          'xml',
          'z',
          'zip'
        ],
        aC = [c1],
        bG = [],
        bR = [],
        be = [],
        bQ = 500,
        c4 = true,
        cQ,
        bb,
        bX,
        bV,
        at,
        cv = [
          'pk_campaign',
          'mtm_campaign',
          'piwik_campaign',
          'matomo_campaign',
          'utm_campaign',
          'utm_source',
          'utm_medium'
        ],
        bN = ['pk_kwd', 'mtm_kwd', 'piwik_kwd', 'matomo_kwd', 'utm_term'],
        bq = '_pk_',
        az = 'pk_vid',
        a5 = 180,
        c5,
        bw,
        bY = false,
        aN = 'Lax',
        bs = false,
        cX,
        bk,
        bC,
        cR = 33955200000,
        ct = 1800000,
        dd = 15768000000,
        a8 = true,
        bL = false,
        bn = false,
        bW = false,
        aV = false,
        ch,
        b2 = {},
        cr = {},
        bt = {},
        bA = 200,
        cz = {},
        c8 = {},
        df = {},
        cg = [],
        ck = false,
        cI = false,
        au = false,
        dg = false,
        cU = false,
        aS = false,
        bi = v(),
        cE = null,
        c6 = null,
        aW,
        bI,
        cd = aq,
        bv,
        aQ,
        bH = false,
        cw = 0,
        bB = ['id', 'ses', 'cvar', 'ref'],
        cH = false,
        bJ = null,
        cS = [],
        cy = [],
        aB = X++,
        aA = false;
      try {
        bp = J.title;
      } catch (cF) {
        bp = '';
      }

      function aH(dt) {
        if (bs) {
          return 0;
        }
        var dr = new RegExp('(^|;)[ ]*' + dt + '=([^;]*)'),
          ds = dr.exec(J.cookie);
        return ds ? V(ds[2]) : 0;
      }

      bJ = !aH(cT);

      function dl(dv, dw, dz, dy, dt, du, dx) {
        if (bs && dv !== cT) {
          return;
        }
        var ds;
        if (dz) {
          ds = new Date();
          ds.setTime(ds.getTime() + dz);
        }
        if (!dx) {
          dx = 'Lax';
        }
        J.cookie =
          dv +
          '=' +
          t(dw) +
          (dz ? ';expires=' + ds.toGMTString() : '') +
          ';path=' +
          (dy || '/') +
          (dt ? ';domain=' + dt : '') +
          (du ? ';secure' : '') +
          ';SameSite=' +
          dx;
        if ((!dz || dz >= 0) && aH(dv) !== String(dw)) {
          var dr = 'There was an error setting cookie `' + dv + '`. Please check domain and path.';
          ao(dr);
        }
      }

      function b8(dr) {
        var ds;
        dr = j(dr, az);
        if (bV) {
          ds = new RegExp('#.*');
          return dr.replace(ds, '');
        }
        return dr;
      }

      function b1(dt, dr) {
        var du = s(dr),
          ds;
        if (du) {
          return dr;
        }
        if (dr.slice(0, 1) === '/') {
          return s(dt) + '://' + d(dt) + dr;
        }
        dt = b8(dt);
        ds = dt.indexOf('?');
        if (ds >= 0) {
          dt = dt.slice(0, ds);
        }
        ds = dt.lastIndexOf('/');
        if (ds !== dt.length - 1) {
          dt = dt.slice(0, ds + 1);
        }
        return dt + dr;
      }

      function cO(dt, dr) {
        var ds;
        dt = String(dt).toLowerCase();
        dr = String(dr).toLowerCase();
        if (dt === dr) {
          return true;
        }
        if (dr.slice(0, 1) === '.') {
          if (dt === dr.slice(1)) {
            return true;
          }
          ds = dt.length - dr.length;
          if (ds > 0 && dt.slice(ds) === dr) {
            return true;
          }
        }
        return false;
      }

      function cq(dr) {
        var ds = document.createElement('a');
        if (dr.indexOf('//') !== 0 && dr.indexOf('http') !== 0) {
          if (dr.indexOf('*') === 0) {
            dr = dr.substr(1);
          }
          if (dr.indexOf('.') === 0) {
            dr = dr.substr(1);
          }
          dr = 'http://' + dr;
        }
        ds.href = w.toAbsoluteUrl(dr);
        if (ds.pathname) {
          return ds.pathname;
        }
        return '';
      }

      function a9(ds, dr) {
        if (!an(dr, '/')) {
          dr = '/' + dr;
        }
        if (!an(ds, '/')) {
          ds = '/' + ds;
        }
        var dt = dr === '/' || dr === '/*';
        if (dt) {
          return true;
        }
        if (ds === dr) {
          return true;
        }
        dr = String(dr).toLowerCase();
        ds = String(ds).toLowerCase();
        if (U(dr, '*')) {
          dr = dr.slice(0, -1);
          dt = !dr || dr === '/';
          if (dt) {
            return true;
          }
          if (ds === dr) {
            return true;
          }
          return ds.indexOf(dr) === 0;
        }
        if (!U(ds, '/')) {
          ds += '/';
        }
        if (!U(dr, '/')) {
          dr += '/';
        }
        return ds.indexOf(dr) === 0;
      }

      function aw(dv, dx) {
        var ds, dr, dt, du, dw;
        for (ds = 0; ds < aC.length; ds++) {
          du = O(aC[ds]);
          dw = cq(aC[ds]);
          if (cO(dv, du) && a9(dx, dw)) {
            return true;
          }
        }
        return false;
      }

      function a1(du) {
        var ds, dr, dt;
        for (ds = 0; ds < aC.length; ds++) {
          dr = O(aC[ds].toLowerCase());
          if (du === dr) {
            return true;
          }
          if (dr.slice(0, 1) === '.') {
            if (du === dr.slice(1)) {
              return true;
            }
            dt = du.length - dr.length;
            if (dt > 0 && du.slice(dt) === dr) {
              return true;
            }
          }
        }
        return false;
      }

      function cu(dr, dt) {
        dr = dr.replace('send_image=0', 'send_image=1');
        var ds = new Image(1, 1);
        ds.onload = function () {
          H = 0;
          if (typeof dt === 'function') {
            dt({ request: dr, trackerUrl: aI, success: true });
          }
        };
        ds.onerror = function () {
          if (typeof dt === 'function') {
            dt({ request: dr, trackerUrl: aI, success: false });
          }
        };
        ds.src = aI + (aI.indexOf('?') < 0 ? '?' : '&') + dr;
      }

      function cL(dr) {
        if (dh === 'POST') {
          return true;
        }
        return dr && (dr.length > 2000 || dr.indexOf('{"requests"') === 0);
      }

      function aP() {
        return (
          'object' === typeof g && 'function' === typeof g.sendBeacon && 'function' === typeof Blob
        );
      }

      function bc(dv, dy, dx) {
        var dt = aP();
        if (!dt) {
          return false;
        }
        var du = { type: 'application/x-www-form-urlencoded; charset=UTF-8' };
        var dz = false;
        var ds = aI;
        try {
          var dr = new Blob([dv], du);
          if (dx && !cL(dv)) {
            dr = new Blob([], du);
            ds = ds + (ds.indexOf('?') < 0 ? '?' : '&') + dv;
          }
          dz = g.sendBeacon(ds, dr);
        } catch (dw) {
          return false;
        }
        if (dz && typeof dy === 'function') {
          dy({ request: dv, trackerUrl: aI, success: true, isSendBeacon: true });
        }
        return dz;
      }

      function dc(ds, dt, dr) {
        if (!M(dr) || null === dr) {
          dr = true;
        }
        if (m && bc(ds, dt, dr)) {
          return;
        }
        setTimeout(function () {
          if (m && bc(ds, dt, dr)) {
            return;
          }
          var dw;
          try {
            var dv = W.XMLHttpRequest
              ? new W.XMLHttpRequest()
              : W.ActiveXObject
              ? new ActiveXObject('Microsoft.XMLHTTP')
              : null;
            dv.open('POST', aI, true);
            dv.onreadystatechange = function () {
              if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                var dx = m && bc(ds, dt, dr);
                if (!dx && dr) {
                  cu(ds, dt);
                } else {
                  if (typeof dt === 'function') {
                    dt({ request: ds, trackerUrl: aI, success: false, xhr: this });
                  }
                }
              } else {
                if (this.readyState === 4 && typeof dt === 'function') {
                  dt({ request: ds, trackerUrl: aI, success: true, xhr: this });
                }
              }
            };
            dv.setRequestHeader('Content-Type', cD);
            dv.withCredentials = true;
            dv.send(ds);
          } catch (du) {
            dw = m && bc(ds, dt, dr);
            if (!dw && dr) {
              cu(ds, dt);
            } else {
              if (typeof dt === 'function') {
                dt({ request: ds, trackerUrl: aI, success: false });
              }
            }
          }
        }, 50);
      }

      function cl(ds) {
        var dr = new Date();
        var dt = dr.getTime() + ds;
        if (!r || dt > r) {
          r = dt;
        }
      }

      function bg() {
        bi = true;
        cE = new Date().getTime();
      }

      function dk() {
        var dr = new Date().getTime();
        return !cE || dr - cE > bb;
      }

      function aD() {
        if (dk()) {
          bX();
        }
      }

      function a0() {
        if (J.visibilityState === 'hidden' && dk()) {
          bX();
        } else {
          if (J.visibilityState === 'visible') {
            cE = new Date().getTime();
          }
        }
      }

      function dn() {
        if (aS || !bb) {
          return;
        }
        aS = true;
        ar(W, 'focus', bg);
        ar(W, 'blur', aD);
        ar(W, 'visibilitychange', a0);
        af++;
        u.addPlugin('HeartBeat' + af, {
          unload: function () {
            if (aS && dk()) {
              bX();
            }
          }
        });
      }

      function cJ(dv) {
        var ds = new Date();
        var dr = ds.getTime();
        c6 = dr;
        if (cI && dr < cI) {
          var dt = cI - dr;
          setTimeout(dv, dt);
          cl(dt + 50);
          cI += 50;
          return;
        }
        if (cI === false) {
          var du = 800;
          cI = dr + du;
        }
        dv();
      }

      function aT() {
        if (aH(cT)) {
          bJ = false;
        } else {
          if (aH(bj)) {
            bJ = true;
          }
        }
      }

      function bM(ds, dr, dt) {
        aT();
        if (!bJ) {
          cS.push(ds);
          return;
        }
        aA = true;
        if (!cX && ds) {
          if (cH && bJ) {
            ds += '&consent=1';
          }
          cJ(function () {
            if (c4 && bc(ds, dt, true)) {
              cl(100);
              return;
            }
            if (cL(ds)) {
              dc(ds, dt);
            } else {
              cu(ds, dt);
            }
            cl(dr);
          });
        }
        if (!aS) {
          dn();
        }
      }

      function cp(dr) {
        if (cX) {
          return false;
        }
        return dr && dr.length;
      }

      function db(dr, dv) {
        if (!dv || dv >= dr.length) {
          return [dr];
        }
        var ds = 0;
        var dt = dr.length;
        var du = [];
        for (ds; ds < dt; ds += dv) {
          du.push(dr.slice(ds, ds + dv));
        }
        return du;
      }

      function dm(ds, dr) {
        if (!cp(ds)) {
          return;
        }
        if (!bJ) {
          cS.push(ds);
          return;
        }
        aA = true;
        cJ(function () {
          var dv = db(ds, 50);
          var dt = 0,
            du;
          for (dt; dt < dv.length; dt++) {
            du = '{"requests":["?' + dv[dt].join('","?') + '"],"send_image":0}';
            if (c4 && bc(du, null, false)) {
              cl(100);
            } else {
              dc(du, null, false);
            }
          }
          cl(dr);
        });
      }

      function aY(dr) {
        return bq + dr + '.' + cc + '.' + bv;
      }

      function b5(dt, ds, dr) {
        dl(dt, '', -86400, ds, dr);
      }

      function cb() {
        if (bs) {
          return '0';
        }
        if (!M(W.showModalDialog) && M(g.cookieEnabled)) {
          return g.cookieEnabled ? '1' : '0';
        }
        var dr = bq + 'testcookie';
        dl(dr, '1', undefined, bw, c5, bY, aN);
        var ds = aH(dr) === '1' ? '1' : '0';
        b5(dr);
        return ds;
      }

      function bo() {
        bv = cd((c5 || c1) + (bw || '/')).slice(0, 4);
      }

      function cP() {
        if (M(df.res)) {
          return df;
        }
        var ds,
          du,
          dv = {
            pdf: 'application/pdf',
            qt: 'video/quicktime',
            realp: 'audio/x-pn-realaudio-plugin',
            wma: 'application/x-mplayer2',
            fla: 'application/x-shockwave-flash',
            java: 'application/x-java-vm',
            ag: 'application/x-silverlight'
          };
        if (!new RegExp('MSIE').test(g.userAgent)) {
          if (g.mimeTypes && g.mimeTypes.length) {
            for (ds in dv) {
              if (Object.prototype.hasOwnProperty.call(dv, ds)) {
                du = g.mimeTypes[dv[ds]];
                df[ds] = du && du.enabledPlugin ? '1' : '0';
              }
            }
          }
          if (
            !new RegExp('Edge[ /](\\d+[\\.\\d]+)').test(g.userAgent) &&
            typeof navigator.javaEnabled !== 'unknown' &&
            M(g.javaEnabled) &&
            g.javaEnabled()
          ) {
            df.java = '1';
          }
          if (!M(W.showModalDialog) && M(g.cookieEnabled)) {
            df.cookie = g.cookieEnabled ? '1' : '0';
          } else {
            df.cookie = cb();
          }
        }
        var dt = parseInt(ab.width, 10);
        var dr = parseInt(ab.height, 10);
        df.res = parseInt(dt, 10) + 'x' + parseInt(dr, 10);
        return df;
      }

      function b3() {
        var ds = aY('cvar'),
          dr = aH(ds);
        if (dr && dr.length) {
          dr = W.JSON.parse(dr);
          if (Z(dr)) {
            return dr;
          }
        }
        return {};
      }

      function cM() {
        if (aV === false) {
          aV = b3();
        }
      }

      function cY() {
        var dr = cP();
        return cd(
          (g.userAgent || '') +
            (g.platform || '') +
            W.JSON.stringify(dr) +
            new Date().getTime() +
            Math.random()
        ).slice(0, 16);
      }

      function aF() {
        var dr = cP();
        return cd((g.userAgent || '') + (g.platform || '') + W.JSON.stringify(dr)).slice(0, 6);
      }

      function bl() {
        return Math.floor(new Date().getTime() / 1000);
      }

      function aO() {
        var ds = bl();
        var dt = aF();
        var dr = String(ds) + dt;
        return dr;
      }

      function da(dt) {
        dt = String(dt);
        var dw = aF();
        var du = dw.length;
        var dv = dt.substr(-1 * du, du);
        var ds = parseInt(dt.substr(0, dt.length - du), 10);
        if (ds && dv && dv === dw) {
          var dr = bl();
          if (a5 <= 0) {
            return true;
          }
          if (dr >= ds && dr <= ds + a5) {
            return true;
          }
        }
        return false;
      }

      function dp(dr) {
        if (!cU) {
          return '';
        }
        var dv = e(dr, az);
        if (!dv) {
          return '';
        }
        dv = String(dv);
        var dt = new RegExp('^[a-zA-Z0-9]+$');
        if (dv.length === 32 && dt.test(dv)) {
          var ds = dv.substr(16, 32);
          if (da(ds)) {
            var du = dv.substr(0, 16);
            return du;
          }
        }
        return '';
      }

      function cV() {
        if (!bU) {
          bU = dp(bT);
        }
        var dt = new Date(),
          dr = Math.round(dt.getTime() / 1000),
          ds = aY('id'),
          dw = aH(ds),
          dv,
          du;
        if (dw) {
          dv = dw.split('.');
          dv.unshift('0');
          if (bU.length) {
            dv[1] = bU;
          }
          return dv;
        }
        if (bU.length) {
          du = bU;
        } else {
          if ('0' === cb()) {
            du = '';
          } else {
            du = cY();
          }
        }
        dv = ['1', du, dr];
        return dv;
      }

      function a4() {
        var du = cV(),
          ds = du[0],
          dt = du[1],
          dr = du[2];
        return { newVisitor: ds, uuid: dt, createTs: dr };
      }

      function aL() {
        var du = new Date(),
          ds = du.getTime(),
          dv = a4().createTs;
        var dr = parseInt(dv, 10);
        var dt = dr * 1000 + cR - ds;
        return dt;
      }

      function aR(dr) {
        if (!cc) {
          return;
        }
        var dt = new Date(),
          ds = Math.round(dt.getTime() / 1000);
        if (!M(dr)) {
          dr = a4();
        }
        var du = dr.uuid + '.' + dr.createTs + '.';
        dl(aY('id'), du, aL(), bw, c5, bY, aN);
      }

      function bS() {
        var dr = aH(aY('ref'));
        if (dr.length) {
          try {
            dr = W.JSON.parse(dr);
            if (Z(dr)) {
              return dr;
            }
          } catch (ds) {}
        }
        return ['', '', 0, ''];
      }

      function bD(dt) {
        var ds = bq + 'testcookie_domain';
        var dr = 'testvalue';
        dl(ds, dr, 10000, null, dt, bY, aN);
        if (aH(ds) === dr) {
          b5(ds, null, dt);
          return true;
        }
        return false;
      }

      function aJ() {
        var ds = bs;
        bs = false;
        var dr, dt;
        for (dr = 0; dr < bB.length; dr++) {
          dt = aY(bB[dr]);
          if (dt !== cT && dt !== bj && 0 !== aH(dt)) {
            b5(dt, bw, c5);
          }
        }
        bs = ds;
      }

      function b9(dr) {
        cc = dr;
      }

      function dq(dv) {
        if (!dv || !Z(dv)) {
          return;
        }
        var du = [];
        var dt;
        for (dt in dv) {
          if (Object.prototype.hasOwnProperty.call(dv, dt)) {
            du.push(dt);
          }
        }
        var dw = {};
        du.sort();
        var dr = du.length;
        var ds;
        for (ds = 0; ds < dr; ds++) {
          dw[du[ds]] = dv[du[ds]];
        }
        return dw;
      }

      function ci() {
        dl(aY('ses'), '1', ct, bw, c5, bY, aN);
      }

      function bm() {
        var du = '';
        var ds = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var dt = ds.length;
        var dr;
        for (dr = 0; dr < 6; dr++) {
          du += ds.charAt(Math.floor(Math.random() * dt));
        }
        return du;
      }

      function aE(ds) {
        if (cs !== '') {
          ds += cs;
          bn = true;
          return ds;
        }
        if (!h) {
          return ds;
        }
        var dt = typeof h.timing === 'object' && h.timing ? h.timing : undefined;
        if (!dt) {
          dt =
            typeof h.getEntriesByType === 'function' && h.getEntriesByType('navigation')
              ? h.getEntriesByType('navigation')[0]
              : undefined;
        }
        if (!dt) {
          return ds;
        }
        var dr = '';
        if (dt.connectEnd && dt.fetchStart) {
          if (dt.connectEnd < dt.fetchStart) {
            return;
          }
          dr += '&pf_net=' + Math.round(dt.connectEnd - dt.fetchStart);
        }
        if (dt.responseStart && dt.requestStart) {
          if (dt.responseStart < dt.requestStart) {
            return;
          }
          dr += '&pf_srv=' + Math.round(dt.responseStart - dt.requestStart);
        }
        if (dt.responseStart && dt.responseEnd) {
          if (dt.responseEnd < dt.responseStart) {
            return;
          }
          dr += '&pf_tfr=' + Math.round(dt.responseEnd - dt.responseStart);
        }
        if (M(dt.domLoading)) {
          if (dt.domInteractive && dt.domLoading) {
            if (dt.domInteractive < dt.domLoading) {
              return;
            }
            dr += '&pf_dm1=' + Math.round(dt.domInteractive - dt.domLoading);
          }
        } else {
          if (dt.domInteractive && dt.responseEnd) {
            if (dt.domInteractive < dt.responseEnd) {
              return;
            }
            dr += '&pf_dm1=' + Math.round(dt.domInteractive - dt.responseEnd);
          }
        }
        if (dt.domComplete && dt.domInteractive) {
          if (dt.domComplete < dt.domInteractive) {
            return;
          }
          dr += '&pf_dm2=' + Math.round(dt.domComplete - dt.domInteractive);
        }
        if (dt.loadEventEnd && dt.loadEventStart) {
          if (dt.loadEventEnd < dt.loadEventStart) {
            return;
          }
          dr += '&pf_onl=' + Math.round(dt.loadEventEnd - dt.loadEventStart);
        }
        return ds + dr;
      }

      function cx(dt, dN, dO) {
        var dM,
          ds = new Date(),
          dA = Math.round(ds.getTime() / 1000),
          dx,
          dK,
          du = 1024,
          dT,
          dB,
          dJ = aV,
          dv = aY('ses'),
          dH = aY('ref'),
          dE = aY('cvar'),
          dF = aH(dv),
          dL = bS(),
          dP = ba || bT,
          dy,
          dr;
        if (bs) {
          aJ();
        }
        if (cX) {
          return '';
        }
        var dG = a4();
        var dD = J.characterSet || J.charset;
        if (!dD || dD.toLowerCase() === 'utf-8') {
          dD = null;
        }
        dy = dL[0];
        dr = dL[1];
        dx = dL[2];
        dK = dL[3];
        if (!dF) {
          if (!bC || !dy.length) {
            for (dM in cv) {
              if (Object.prototype.hasOwnProperty.call(cv, dM)) {
                dy = e(dP, cv[dM]);
                if (dy.length) {
                  break;
                }
              }
            }
            for (dM in bN) {
              if (Object.prototype.hasOwnProperty.call(bN, dM)) {
                dr = e(dP, bN[dM]);
                if (dr.length) {
                  break;
                }
              }
            }
          }
          dT = d(bu);
          dB = dK.length ? d(dK) : '';
          if (dT.length && !a1(dT) && (!bC || !dB.length || a1(dB))) {
            dK = bu;
          }
          if (dK.length || dy.length) {
            dx = dA;
            dL = [dy, dr, dx, b8(dK.slice(0, du))];
            dl(dH, W.JSON.stringify(dL), dd, bw, c5, bY, aN);
          }
        }
        dt +=
          '&idsite=' +
          cc +
          '&rec=1&r=' +
          String(Math.random()).slice(2, 8) +
          '&h=' +
          ds.getHours() +
          '&m=' +
          ds.getMinutes() +
          '&s=' +
          ds.getSeconds() +
          '&url=' +
          t(b8(dP)) +
          (bu.length ? '&urlref=' + t(b8(bu)) : '') +
          (ac(bF) ? '&uid=' + t(bF) : '') +
          '&_id=' +
          dG.uuid +
          '&_idn=' +
          dG.newVisitor +
          (dy.length ? '&_rcn=' + t(dy) : '') +
          (dr.length ? '&_rck=' + t(dr) : '') +
          '&_refts=' +
          dx +
          (String(dK).length ? '&_ref=' + t(b8(dK.slice(0, du))) : '') +
          (dD ? '&cs=' + t(dD) : '') +
          '&send_image=0';
        var dS = cP();
        for (dM in dS) {
          if (Object.prototype.hasOwnProperty.call(dS, dM)) {
            dt += '&' + dM + '=' + dS[dM];
          }
        }
        var dR = [];
        if (dN) {
          for (dM in dN) {
            if (Object.prototype.hasOwnProperty.call(dN, dM) && /^dimension\d+$/.test(dM)) {
              var dw = dM.replace('dimension', '');
              dR.push(parseInt(dw, 10));
              dR.push(String(dw));
              dt += '&' + dM + '=' + t(dN[dM]);
              delete dN[dM];
            }
          }
        }
        if (dN && D(dN)) {
          dN = null;
        }
        for (dM in cz) {
          if (Object.prototype.hasOwnProperty.call(cz, dM)) {
            dt += '&' + dM + '=' + t(cz[dM]);
          }
        }
        for (dM in bt) {
          if (Object.prototype.hasOwnProperty.call(bt, dM)) {
            var dC = -1 === P(dR, dM);
            if (dC) {
              dt += '&dimension' + dM + '=' + t(bt[dM]);
            }
          }
        }
        if (dN) {
          dt += '&data=' + t(W.JSON.stringify(dN));
        } else {
          if (at) {
            dt += '&data=' + t(W.JSON.stringify(at));
          }
        }

        function dz(dU, dV) {
          var dW = W.JSON.stringify(dU);
          if (dW.length > 2) {
            return '&' + dV + '=' + t(dW);
          }
          return '';
        }

        var dQ = dq(b2);
        var dI = dq(cr);
        dt += dz(dQ, 'cvar');
        dt += dz(dI, 'e_cvar');
        if (aV) {
          dt += dz(aV, '_cvar');
          for (dM in dJ) {
            if (Object.prototype.hasOwnProperty.call(dJ, dM)) {
              if (aV[dM][0] === '' || aV[dM][1] === '') {
                delete aV[dM];
              }
            }
          }
          if (bW) {
            dl(dE, W.JSON.stringify(aV), ct, bw, c5, bY, aN);
          }
        }
        if (a8 && bL && !bn) {
          dt = aE(dt);
          bn = true;
        }
        if (aQ) {
          dt += '&pv_id=' + aQ;
        }
        aR(dG);
        ci();
        dt += ag(dO, { tracker: bP, request: dt });
        if (c7.length) {
          dt += '&' + c7;
        }
        if (C(ch)) {
          dt = ch(dt);
        }
        return dt;
      }

      bX = function bd() {
        var dr = new Date();
        dr = dr.getTime();
        if (!c6) {
          return false;
        }
        if (c6 + bb <= dr) {
          bP.ping();
          return true;
        }
        return false;
      };

      function bx(du, dt, dy, dv, dr, dB) {
        var dx = 'idgoal=0',
          ds = new Date(),
          dz = [],
          dA,
          dw = String(du).length;
        if (dw) {
          dx += '&ec_id=' + t(du);
        }
        dx += '&revenue=' + dt;
        if (String(dy).length) {
          dx += '&ec_st=' + dy;
        }
        if (String(dv).length) {
          dx += '&ec_tx=' + dv;
        }
        if (String(dr).length) {
          dx += '&ec_sh=' + dr;
        }
        if (String(dB).length) {
          dx += '&ec_dt=' + dB;
        }
        if (c8) {
          for (dA in c8) {
            if (Object.prototype.hasOwnProperty.call(c8, dA)) {
              if (!M(c8[dA][1])) {
                c8[dA][1] = '';
              }
              if (!M(c8[dA][2])) {
                c8[dA][2] = '';
              }
              if (!M(c8[dA][3]) || String(c8[dA][3]).length === 0) {
                c8[dA][3] = 0;
              }
              if (!M(c8[dA][4]) || String(c8[dA][4]).length === 0) {
                c8[dA][4] = 1;
              }
              dz.push(c8[dA]);
            }
          }
          dx += '&ec_items=' + t(W.JSON.stringify(dz));
        }
        dx = cx(dx, at, 'ecommerce');
        bM(dx, bQ);
        if (dw) {
          c8 = {};
        }
      }

      function b4(dr, dv, du, dt, ds, dw) {
        if (String(dr).length && M(dv)) {
          bx(dr, dv, du, dt, ds, dw);
        }
      }

      function bz(dr) {
        if (M(dr)) {
          bx('', dr, '', '', '', '');
        }
      }

      function b6(ds, du, dt) {
        if (!bH) {
          aQ = bm();
        }
        var dr = cx('action_name=' + t(ap(ds || bp)), du, 'log');
        if (a8 && !bn) {
          dr = aE(dr);
        }
        bM(dr, bQ, dt);
      }

      function a6(dt, ds) {
        var du,
          dr = '(^| )(piwik[_-]' + ds + '|matomo[_-]' + ds;
        if (dt) {
          for (du = 0; du < dt.length; du++) {
            dr += '|' + dt[du];
          }
        }
        dr += ')( |$)';
        return new RegExp(dr);
      }

      function aZ(dr) {
        return aI && dr && 0 === String(dr).indexOf(aI);
      }

      function cB(dv, dr, dw, ds) {
        if (aZ(dr)) {
          return 0;
        }
        var du = a6(bR, 'download'),
          dt = a6(be, 'link'),
          dx = new RegExp('\\.(' + de.join('|') + ')([?&#]|$)', 'i');
        if (dt.test(dv)) {
          return 'link';
        }
        if (ds || du.test(dv) || dx.test(dr)) {
          return 'download';
        }
        if (dw) {
          return 0;
        }
        return 'link';
      }

      function ay(ds) {
        var dr;
        dr = ds.parentNode;
        while (dr !== null && M(dr)) {
          if (ai.isLinkElement(ds)) {
            break;
          }
          ds = dr;
          dr = ds.parentNode;
        }
        return ds;
      }

      function dj(dw) {
        dw = ay(dw);
        if (!ai.hasNodeAttribute(dw, 'href')) {
          return;
        }
        if (!M(dw.href)) {
          return;
        }
        var dv = ai.getAttributeValueFromNode(dw, 'href');
        var ds = dw.pathname || cq(dw.href);
        var dx = dw.hostname || d(dw.href);
        var dy = dx.toLowerCase();
        var dt = dw.href.replace(dx, dy);
        var du = new RegExp(
          '^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):',
          'i'
        );
        if (!du.test(dt)) {
          var dr = cB(dw.className, dt, aw(dy, ds), ai.hasNodeAttribute(dw, 'download'));
          if (dr) {
            return { type: dr, href: dt };
          }
        }
      }

      function aU(dr, ds, dt, du) {
        var dv = w.buildInteractionRequestParams(dr, ds, dt, du);
        if (!dv) {
          return;
        }
        return cx(dv, null, 'contentInteraction');
      }

      function bh(dr, ds) {
        if (!dr || !ds) {
          return false;
        }
        var dt = w.findTargetNode(dr);
        if (w.shouldIgnoreInteraction(dt)) {
          return false;
        }
        dt = w.findTargetNodeNoDefault(dr);
        if (dt && !Y(dt, ds)) {
          return false;
        }
        return true;
      }

      function cA(dt, ds, dv) {
        if (!dt) {
          return;
        }
        var dr = w.findParentContentNode(dt);
        if (!dr) {
          return;
        }
        if (!bh(dr, dt)) {
          return;
        }
        var du = w.buildContentBlock(dr);
        if (!du) {
          return;
        }
        if (!du.target && dv) {
          du.target = dv;
        }
        return w.buildInteractionRequestParams(ds, du.name, du.piece, du.target);
      }

      function a2(ds) {
        if (!cg || !cg.length) {
          return false;
        }
        var dr, dt;
        for (dr = 0; dr < cg.length; dr++) {
          dt = cg[dr];
          if (dt && dt.name === ds.name && dt.piece === ds.piece && dt.target === ds.target) {
            return true;
          }
        }
        return false;
      }

      function a3(dr) {
        return function (dv) {
          if (!dr) {
            return;
          }
          var dt = w.findParentContentNode(dr);
          var ds;
          if (dv) {
            ds = dv.target || dv.srcElement;
          }
          if (!ds) {
            ds = dr;
          }
          if (!bh(dt, ds)) {
            return;
          }
          if (!dt) {
            return false;
          }
          var dw = w.findTargetNode(dt);
          if (!dw || w.shouldIgnoreInteraction(dw)) {
            return false;
          }
          var du = dj(dw);
          if (dg && du && du.type) {
            return du.type;
          }
          return bP.trackContentInteractionNode(ds, 'click');
        };
      }

      function b7(dt) {
        if (!dt || !dt.length) {
          return;
        }
        var dr, ds;
        for (dr = 0; dr < dt.length; dr++) {
          ds = w.findTargetNode(dt[dr]);
          if (ds && !ds.contentInteractionTrackingSetupDone) {
            ds.contentInteractionTrackingSetupDone = true;
            ar(ds, 'click', a3(ds));
          }
        }
      }

      function bE(dt, du) {
        if (!dt || !dt.length) {
          return [];
        }
        var dr, ds;
        for (dr = 0; dr < dt.length; dr++) {
          if (a2(dt[dr])) {
            dt.splice(dr, 1);
            dr--;
          } else {
            cg.push(dt[dr]);
          }
        }
        if (!dt || !dt.length) {
          return [];
        }
        b7(du);
        var dv = [];
        for (dr = 0; dr < dt.length; dr++) {
          ds = cx(
            w.buildImpressionRequestParams(dt[dr].name, dt[dr].piece, dt[dr].target),
            undefined,
            'contentImpressions'
          );
          if (ds) {
            dv.push(ds);
          }
        }
        return dv;
      }

      function cG(ds) {
        var dr = w.collectContent(ds);
        return bE(dr, ds);
      }

      function bf(ds) {
        if (!ds || !ds.length) {
          return [];
        }
        var dr;
        for (dr = 0; dr < ds.length; dr++) {
          if (!w.isNodeVisible(ds[dr])) {
            ds.splice(dr, 1);
            dr--;
          }
        }
        if (!ds || !ds.length) {
          return [];
        }
        return cG(ds);
      }

      function aK(dt, dr, ds) {
        var du = w.buildImpressionRequestParams(dt, dr, ds);
        return cx(du, null, 'contentImpression');
      }

      function di(du, ds) {
        if (!du) {
          return;
        }
        var dr = w.findParentContentNode(du);
        var dt = w.buildContentBlock(dr);
        if (!dt) {
          return;
        }
        if (!ds) {
          ds = 'Unknown';
        }
        return aU(ds, dt.name, dt.piece, dt.target);
      }

      function cW(ds, du, dr, dt) {
        return (
          'e_c=' +
          t(ds) +
          '&e_a=' +
          t(du) +
          (M(dr) ? '&e_n=' + t(dr) : '') +
          (M(dt) ? '&e_v=' + t(dt) : '') +
          '&ca=1'
        );
      }

      function ax(dt, dv, dr, du, dx, dw) {
        if (!ac(dt) || !ac(dv)) {
          ao(
            'Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces'
          );
          return false;
        }
        var ds = cx(cW(dt, dv, dr, du), dx, 'event');
        bM(ds, bQ, dw);
      }

      function ce(dr, du, ds, dv) {
        var dt = cx(
          'search=' +
            t(dr) +
            (du ? '&search_cat=' + t(du) : '') +
            (M(ds) ? '&search_count=' + ds : ''),
          dv,
          'sitesearch'
        );
        bM(dt, bQ);
      }

      function c0(dr, dv, du, dt) {
        var ds = cx('idgoal=' + dr + (dv ? '&revenue=' + dv : ''), du, 'goal');
        bM(ds, bQ, dt);
      }

      function c9(du, dr, dy, dx, dt) {
        var dw = dr + '=' + t(b8(du));
        var ds = cA(dt, 'click', du);
        if (ds) {
          dw += '&' + ds;
        }
        var dv = cx(dw, dy, 'link');
        bM(dv, bQ, dx);
      }

      function b0(ds, dr) {
        if (ds !== '') {
          return ds + dr.charAt(0).toUpperCase() + dr.slice(1);
        }
        return dr;
      }

      function cm(dw) {
        var dv,
          dr,
          du = ['', 'webkit', 'ms', 'moz'],
          dt;
        if (!bk) {
          for (dr = 0; dr < du.length; dr++) {
            dt = du[dr];
            if (Object.prototype.hasOwnProperty.call(J, b0(dt, 'hidden'))) {
              if (J[b0(dt, 'visibilityState')] === 'prerender') {
                dv = true;
              }
              break;
            }
          }
        }
        if (dv) {
          ar(J, dt + 'visibilitychange', function ds() {
            J.removeEventListener(dt + 'visibilitychange', ds, false);
            dw();
          });
          return;
        }
        dw();
      }

      function by() {
        var ds = bP.getVisitorId();
        var dr = aO();
        return ds + dr;
      }

      function co(dr) {
        if (!dr) {
          return;
        }
        if (!ai.hasNodeAttribute(dr, 'href')) {
          return;
        }
        var ds = ai.getAttributeValueFromNode(dr, 'href');
        if (!ds || aZ(ds)) {
          return;
        }
        if (!bP.getVisitorId()) {
          return;
        }
        ds = j(ds, az);
        var dt = by();
        ds = I(ds, az, dt);
        ai.setAnyAttribute(dr, 'href', ds);
      }

      function br(du) {
        var dv = ai.getAttributeValueFromNode(du, 'href');
        if (!dv) {
          return false;
        }
        dv = String(dv);
        var ds =
          dv.indexOf('//') === 0 || dv.indexOf('http://') === 0 || dv.indexOf('https://') === 0;
        if (!ds) {
          return false;
        }
        var dr = du.pathname || cq(du.href);
        var dt = (du.hostname || d(du.href)).toLowerCase();
        if (aw(dt, dr)) {
          if (!cO(c1, O(dt))) {
            return true;
          }
          return false;
        }
        return false;
      }

      function cN(dr) {
        var ds = dj(dr);
        if (ds && ds.type) {
          ds.href = p(ds.href);
          c9(ds.href, ds.type, undefined, null, dr);
          return;
        }
        if (cU) {
          dr = ay(dr);
          if (br(dr)) {
            co(dr);
          }
        }
      }

      function cC() {
        return J.all && !J.addEventListener;
      }

      function c2(dr) {
        var dt = dr.which;
        var ds = typeof dr.button;
        if (!dt && ds !== 'undefined') {
          if (cC()) {
            if (dr.button & 1) {
              dt = 1;
            } else {
              if (dr.button & 2) {
                dt = 3;
              } else {
                if (dr.button & 4) {
                  dt = 2;
                }
              }
            }
          } else {
            if (dr.button === 0 || dr.button === '0') {
              dt = 1;
            } else {
              if (dr.button & 1) {
                dt = 2;
              } else {
                if (dr.button & 2) {
                  dt = 3;
                }
              }
            }
          }
        }
        return dt;
      }

      function bZ(dr) {
        switch (c2(dr)) {
          case 1:
            return 'left';
          case 2:
            return 'middle';
          case 3:
            return 'right';
        }
      }

      function a7(dr) {
        return dr.target || dr.srcElement;
      }

      function c3(dr) {
        return dr === 'A' || dr === 'AREA';
      }

      function aG(dr) {
        function ds(du) {
          var dv = a7(du);
          var dw = dv.nodeName;
          var dt = a6(bG, 'ignore');
          while (!c3(dw) && dv && dv.parentNode) {
            dv = dv.parentNode;
            dw = dv.nodeName;
          }
          if (dv && c3(dw) && !dt.test(dv.className)) {
            return dv;
          }
        }

        return function (dv) {
          dv = dv || W.event;
          var dw = ds(dv);
          if (!dw) {
            return;
          }
          var du = bZ(dv);
          if (dv.type === 'click') {
            var dt = false;
            if (dr && du === 'middle') {
              dt = true;
            }
            if (dw && !dt) {
              cN(dw);
            }
          } else {
            if (dv.type === 'mousedown') {
              if (du === 'middle' && dw) {
                aW = du;
                bI = dw;
              } else {
                aW = bI = null;
              }
            } else {
              if (dv.type === 'mouseup') {
                if (du === aW && dw === bI) {
                  cN(dw);
                }
                aW = bI = null;
              } else {
                if (dv.type === 'contextmenu') {
                  cN(dw);
                }
              }
            }
          }
        };
      }

      function av(du, dt, dr) {
        var ds = typeof dt;
        if (ds === 'undefined') {
          dt = true;
        }
        ar(du, 'click', aG(dt), dr);
        if (dt) {
          ar(du, 'mouseup', aG(dt), dr);
          ar(du, 'mousedown', aG(dt), dr);
          ar(du, 'contextmenu', aG(dt), dr);
        }
      }

      function aX(ds, dv, dw) {
        if (ck) {
          return true;
        }
        ck = true;
        var dx = false;
        var du, dt;

        function dr() {
          dx = true;
        }

        n(function () {
          function dy(dA) {
            setTimeout(function () {
              if (!ck) {
                return;
              }
              dx = false;
              dw.trackVisibleContentImpressions();
              dy(dA);
            }, dA);
          }

          function dz(dA) {
            setTimeout(function () {
              if (!ck) {
                return;
              }
              if (dx) {
                dx = false;
                dw.trackVisibleContentImpressions();
              }
              dz(dA);
            }, dA);
          }

          if (ds) {
            du = ['scroll', 'resize'];
            for (dt = 0; dt < du.length; dt++) {
              if (J.addEventListener) {
                J.addEventListener(du[dt], dr, false);
              } else {
                W.attachEvent('on' + du[dt], dr);
              }
            }
            dz(100);
          }
          if (dv && dv > 0) {
            dv = parseInt(dv, 10);
            dy(dv);
          }
        });
      }

      var bK = {
        enabled: true,
        requests: [],
        timeout: null,
        interval: 2500,
        sendRequests: function () {
          var dr = this.requests;
          this.requests = [];
          if (dr.length === 1) {
            bM(dr[0], bQ);
          } else {
            dm(dr, bQ);
          }
        },
        canQueue: function () {
          return !m && this.enabled;
        },
        pushMultiple: function (ds) {
          if (!this.canQueue()) {
            dm(ds, bQ);
            return;
          }
          var dr;
          for (dr = 0; dr < ds.length; dr++) {
            this.push(ds[dr]);
          }
        },
        push: function (dr) {
          if (!dr) {
            return;
          }
          if (!this.canQueue()) {
            bM(dr, bQ);
            return;
          }
          bK.requests.push(dr);
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
          }
          this.timeout = setTimeout(function () {
            bK.timeout = null;
            bK.sendRequests();
          }, bK.interval);
          var ds = 'RequestQueue' + aB;
          if (!Object.prototype.hasOwnProperty.call(b, ds)) {
            b[ds] = {
              unload: function () {
                if (bK.timeout) {
                  clearTimeout(bK.timeout);
                }
                bK.sendRequests();
              }
            };
          }
        }
      };
      bo();
      aR();
      this.hasConsent = function () {
        return bJ;
      };
      this.getVisitorId = function () {
        return a4().uuid;
      };
      this.getVisitorInfo = function () {
        return cV();
      };
      this.getAttributionInfo = function () {
        return bS();
      };
      this.getAttributionCampaignName = function () {
        return bS()[0];
      };
      this.getAttributionCampaignKeyword = function () {
        return bS()[1];
      };
      this.getAttributionReferrerTimestamp = function () {
        return bS()[2];
      };
      this.getAttributionReferrerUrl = function () {
        return bS()[3];
      };
      this.setTrackerUrl = function (dr) {
        aI = dr;
      };
      this.getTrackerUrl = function () {
        return aI;
      };
      this.getMatomoUrl = function () {
        return aa(this.getTrackerUrl(), bO);
      };
      this.getPiwikUrl = function () {
        return this.getMatomoUrl();
      };
      this.addTracker = function (dt, ds) {
        if (!M(dt) || null === dt) {
          dt = this.getTrackerUrl();
        }
        var dr = new T(dt, ds);
        L.push(dr);
        u.trigger('TrackerAdded', [this]);
        return dr;
      };
      this.getSiteId = function () {
        return cc;
      };
      this.setSiteId = function (dr) {
        b9(dr);
      };
      this.resetUserId = function () {
        bF = '';
      };
      this.setUserId = function (dr) {
        if (ac(dr)) {
          bF = dr;
        }
      };
      this.setVisitorId = function (ds) {
        var dr = /[0-9A-Fa-f]{16}/g;
        if (x(ds) && dr.test(ds)) {
          bU = ds;
        } else {
          ao('Invalid visitorId set' + ds);
        }
      };
      this.getUserId = function () {
        return bF;
      };
      this.setCustomData = function (dr, ds) {
        if (Z(dr)) {
          at = dr;
        } else {
          if (!at) {
            at = {};
          }
          at[dr] = ds;
        }
      };
      this.getCustomData = function () {
        return at;
      };
      this.setCustomRequestProcessing = function (dr) {
        ch = dr;
      };
      this.appendToTrackingUrl = function (dr) {
        c7 = dr;
      };
      this.getRequest = function (dr) {
        return cx(dr);
      };
      this.addPlugin = function (dr, ds) {
        b[dr] = ds;
      };
      this.setCustomDimension = function (dr, ds) {
        dr = parseInt(dr, 10);
        if (dr > 0) {
          if (!M(ds)) {
            ds = '';
          }
          if (!x(ds)) {
            ds = String(ds);
          }
          bt[dr] = ds;
        }
      };
      this.getCustomDimension = function (dr) {
        dr = parseInt(dr, 10);
        if (dr > 0 && Object.prototype.hasOwnProperty.call(bt, dr)) {
          return bt[dr];
        }
      };
      this.deleteCustomDimension = function (dr) {
        dr = parseInt(dr, 10);
        if (dr > 0) {
          delete bt[dr];
        }
      };
      this.setCustomVariable = function (ds, dr, dv, dt) {
        var du;
        if (!M(dt)) {
          dt = 'visit';
        }
        if (!M(dr)) {
          return;
        }
        if (!M(dv)) {
          dv = '';
        }
        if (ds > 0) {
          dr = !x(dr) ? String(dr) : dr;
          dv = !x(dv) ? String(dv) : dv;
          du = [dr.slice(0, bA), dv.slice(0, bA)];
          if (dt === 'visit' || dt === 2) {
            cM();
            aV[ds] = du;
          } else {
            if (dt === 'page' || dt === 3) {
              b2[ds] = du;
            } else {
              if (dt === 'event') {
                cr[ds] = du;
              }
            }
          }
        }
      };
      this.getCustomVariable = function (ds, dt) {
        var dr;
        if (!M(dt)) {
          dt = 'visit';
        }
        if (dt === 'page' || dt === 3) {
          dr = b2[ds];
        } else {
          if (dt === 'event') {
            dr = cr[ds];
          } else {
            if (dt === 'visit' || dt === 2) {
              cM();
              dr = aV[ds];
            }
          }
        }
        if (!M(dr) || (dr && dr[0] === '')) {
          return false;
        }
        return dr;
      };
      this.deleteCustomVariable = function (dr, ds) {
        if (this.getCustomVariable(dr, ds)) {
          this.setCustomVariable(dr, '', '', ds);
        }
      };
      this.deleteCustomVariables = function (dr) {
        if (dr === 'page' || dr === 3) {
          b2 = {};
        } else {
          if (dr === 'event') {
            cr = {};
          } else {
            if (dr === 'visit' || dr === 2) {
              aV = {};
            }
          }
        }
      };
      this.storeCustomVariablesInCookie = function () {
        bW = true;
      };
      this.setLinkTrackingTimer = function (dr) {
        bQ = dr;
      };
      this.getLinkTrackingTimer = function () {
        return bQ;
      };
      this.setDownloadExtensions = function (dr) {
        if (x(dr)) {
          dr = dr.split('|');
        }
        de = dr;
      };
      this.addDownloadExtensions = function (ds) {
        var dr;
        if (x(ds)) {
          ds = ds.split('|');
        }
        for (dr = 0; dr < ds.length; dr++) {
          de.push(ds[dr]);
        }
      };
      this.removeDownloadExtensions = function (dt) {
        var ds,
          dr = [];
        if (x(dt)) {
          dt = dt.split('|');
        }
        for (ds = 0; ds < de.length; ds++) {
          if (P(dt, de[ds]) === -1) {
            dr.push(de[ds]);
          }
        }
        de = dr;
      };
      this.setDomains = function (dr) {
        aC = x(dr) ? [dr] : dr;
        var dv = false,
          dt = 0,
          ds;
        for (dt; dt < aC.length; dt++) {
          ds = String(aC[dt]);
          if (cO(c1, O(ds))) {
            dv = true;
            break;
          }
          var du = cq(ds);
          if (du && du !== '/' && du !== '/*') {
            dv = true;
            break;
          }
        }
        if (!dv) {
          aC.push(c1);
        }
      };
      this.enableCrossDomainLinking = function () {
        cU = true;
      };
      this.disableCrossDomainLinking = function () {
        cU = false;
      };
      this.isCrossDomainLinkingEnabled = function () {
        return cU;
      };
      this.setCrossDomainLinkingTimeout = function (dr) {
        a5 = dr;
      };
      this.getCrossDomainLinkingUrlParameter = function () {
        return t(az) + '=' + t(by());
      };
      this.setIgnoreClasses = function (dr) {
        bG = x(dr) ? [dr] : dr;
      };
      this.setRequestMethod = function (dr) {
        if (dr) {
          dh = String(dr).toUpperCase();
        } else {
          dh = cn;
        }
        if (dh === 'GET') {
          this.disableAlwaysUseSendBeacon();
        }
      };
      this.setRequestContentType = function (dr) {
        cD = dr || aM;
      };
      this.setGenerationTimeMs = function (dr) {
        ao(
          'setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. The replacement is setPagePerformanceTiming.'
        );
      };
      this.setPagePerformanceTiming = function (dv, dx, dw, ds, dy, dt) {
        var du = { pf_net: dv, pf_srv: dx, pf_tfr: dw, pf_dm1: ds, pf_dm2: dy, pf_onl: dt };
        try {
          du = Q(du, M);
          du = B(du);
          cs = l(du);
          if (cs === '') {
            ao(
              'setPagePerformanceTiming() called without parameters. This function needs to be called with at least one performance parameter.'
            );
            return;
          }
          bn = false;
          bL = true;
        } catch (dr) {
          ao('setPagePerformanceTiming: ' + dr.toString());
        }
      };
      this.setReferrerUrl = function (dr) {
        bu = dr;
      };
      this.setCustomUrl = function (dr) {
        ba = b1(bT, dr);
      };
      this.getCurrentUrl = function () {
        return ba || bT;
      };
      this.setDocumentTitle = function (dr) {
        bp = dr;
      };
      this.setPageViewId = function (dr) {
        aQ = dr;
        bH = true;
      };
      this.setAPIUrl = function (dr) {
        bO = dr;
      };
      this.setDownloadClasses = function (dr) {
        bR = x(dr) ? [dr] : dr;
      };
      this.setLinkClasses = function (dr) {
        be = x(dr) ? [dr] : dr;
      };
      this.setCampaignNameKey = function (dr) {
        cv = x(dr) ? [dr] : dr;
      };
      this.setCampaignKeywordKey = function (dr) {
        bN = x(dr) ? [dr] : dr;
      };
      this.discardHashTag = function (dr) {
        bV = dr;
      };
      this.setCookieNamePrefix = function (dr) {
        bq = dr;
        if (aV) {
          aV = b3();
        }
      };
      this.setCookieDomain = function (dr) {
        var ds = O(dr);
        if (!bs && !bD(ds)) {
          ao("Can't write cookie on domain " + dr);
        } else {
          c5 = ds;
          bo();
        }
      };
      this.getCookieDomain = function () {
        return c5;
      };
      this.hasCookies = function () {
        return '1' === cb();
      };
      this.setSessionCookie = function (dt, ds, dr) {
        if (!dt) {
          throw new Error('Missing cookie name');
        }
        if (!M(dr)) {
          dr = ct;
        }
        bB.push(dt);
        dl(aY(dt), ds, dr, bw, c5, bY, aN);
      };
      this.getCookie = function (ds) {
        var dr = aH(aY(ds));
        if (dr === 0) {
          return null;
        }
        return dr;
      };
      this.setCookiePath = function (dr) {
        bw = dr;
        bo();
      };
      this.getCookiePath = function (dr) {
        return bw;
      };
      this.setVisitorCookieTimeout = function (dr) {
        cR = dr * 1000;
      };
      this.setSessionCookieTimeout = function (dr) {
        ct = dr * 1000;
      };
      this.getSessionCookieTimeout = function () {
        return ct;
      };
      this.setReferralCookieTimeout = function (dr) {
        dd = dr * 1000;
      };
      this.setConversionAttributionFirstReferrer = function (dr) {
        bC = dr;
      };
      this.setSecureCookie = function (dr) {
        if (dr && location.protocol !== 'https:') {
          ao('Error in setSecureCookie: You cannot use `Secure` on http.');
          return;
        }
        bY = dr;
      };
      this.setCookieSameSite = function (dr) {
        dr = String(dr);
        dr = dr.charAt(0).toUpperCase() + dr.toLowerCase().slice(1);
        if (dr !== 'None' && dr !== 'Lax' && dr !== 'Strict') {
          ao('Ignored value for sameSite. Please use either Lax, None, or Strict.');
          return;
        }
        if (dr === 'None') {
          if (location.protocol === 'https:') {
            this.setSecureCookie(true);
          } else {
            ao('sameSite=None cannot be used on http, reverted to sameSite=Lax.');
            dr = 'Lax';
          }
        }
        aN = dr;
      };
      this.disableCookies = function () {
        bs = true;
        if (cc) {
          aJ();
        }
      };
      this.areCookiesEnabled = function () {
        return !bs;
      };
      this.setCookieConsentGiven = function () {
        if (bs && !cX) {
          bs = false;
          if (cc && aA) {
            aR();
            var dr = cx('ping=1', null, 'ping');
            bM(dr, bQ);
          }
        }
      };
      this.requireCookieConsent = function () {
        if (this.getRememberedCookieConsent()) {
          return false;
        }
        this.disableCookies();
        return true;
      };
      this.getRememberedCookieConsent = function () {
        return aH(cK);
      };
      this.forgetCookieConsentGiven = function () {
        b5(cK, bw, c5);
        this.disableCookies();
      };
      this.rememberCookieConsentGiven = function (ds) {
        if (ds) {
          ds = ds * 60 * 60 * 1000;
        } else {
          ds = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        this.setCookieConsentGiven();
        var dr = new Date().getTime();
        dl(cK, dr, ds, bw, c5, bY, aN);
      };
      this.deleteCookies = function () {
        aJ();
      };
      this.setDoNotTrack = function (ds) {
        var dr = g.doNotTrack || g.msDoNotTrack;
        cX = ds && (dr === 'yes' || dr === '1');
        if (cX) {
          this.disableCookies();
        }
      };
      this.alwaysUseSendBeacon = function () {
        c4 = true;
      };
      this.disableAlwaysUseSendBeacon = function () {
        c4 = false;
      };
      this.addListener = function (ds, dr) {
        av(ds, dr, false);
      };
      this.enableLinkTracking = function (ds) {
        if (dg) {
          return;
        }
        dg = true;
        var dr = this;
        q(function () {
          au = true;
          var dt = J.body;
          av(dt, ds, true);
        });
      };
      this.enableJSErrorTracking = function () {
        if (cZ) {
          return;
        }
        cZ = true;
        var dr = W.onerror;
        W.onerror = function (dw, du, dt, dv, ds) {
          cm(function () {
            var dx = 'JavaScript Errors';
            var dy = du + ':' + dt;
            if (dv) {
              dy += ':' + dv;
            }
            if (P(cy, dx + dy + dw) === -1) {
              cy.push(dx + dy + dw);
              ax(dx, dy, dw);
            }
          });
          if (dr) {
            return dr(dw, du, dt, dv, ds);
          }
          return false;
        };
      };
      this.disablePerformanceTracking = function () {
        a8 = false;
      };
      this.enableHeartBeatTimer = function (dr) {
        dr = Math.max(dr || 15, 5);
        bb = dr * 1000;
        if (c6 !== null) {
          dn();
        }
      };
      this.disableHeartBeatTimer = function () {
        if (bb || aS) {
          if (W.removeEventListener) {
            W.removeEventListener('focus', bg);
            W.removeEventListener('blur', aD);
            W.removeEventListener('visibilitychange', a0);
          } else {
            if (W.detachEvent) {
              W.detachEvent('onfocus', bg);
              W.detachEvent('onblur', aD);
              W.removeEventListener('visibilitychange', a0);
            }
          }
        }
        bb = null;
        aS = false;
      };
      this.killFrame = function () {
        if (W.location !== W.top.location) {
          W.top.location = W.location;
        }
      };
      this.redirectFile = function (dr) {
        if (W.location.protocol === 'file:') {
          W.location = dr;
        }
      };
      this.setCountPreRendered = function (dr) {
        bk = dr;
      };
      this.trackGoal = function (dr, du, dt, ds) {
        cm(function () {
          c0(dr, du, dt, ds);
        });
      };
      this.trackLink = function (ds, dr, du, dt) {
        cm(function () {
          c9(ds, dr, du, dt);
        });
      };
      this.getNumTrackedPageViews = function () {
        return cw;
      };
      this.trackPageView = function (dr, dt, ds) {
        cg = [];
        cS = [];
        cy = [];
        if (R(cc)) {
          cm(function () {
            ad(aI, bO, cc);
          });
        } else {
          cm(function () {
            cw++;
            b6(dr, dt, ds);
          });
        }
      };
      this.trackAllContentImpressions = function () {
        if (R(cc)) {
          return;
        }
        cm(function () {
          q(function () {
            var dr = w.findContentNodes();
            var ds = cG(dr);
            bK.pushMultiple(ds);
          });
        });
      };
      this.trackVisibleContentImpressions = function (dr, ds) {
        if (R(cc)) {
          return;
        }
        if (!M(dr)) {
          dr = true;
        }
        if (!M(ds)) {
          ds = 750;
        }
        aX(dr, ds, this);
        cm(function () {
          n(function () {
            var dt = w.findContentNodes();
            var du = bf(dt);
            bK.pushMultiple(du);
          });
        });
      };
      this.trackContentImpression = function (dt, dr, ds) {
        if (R(cc)) {
          return;
        }
        dt = a(dt);
        dr = a(dr);
        ds = a(ds);
        if (!dt) {
          return;
        }
        dr = dr || 'Unknown';
        cm(function () {
          var du = aK(dt, dr, ds);
          bK.push(du);
        });
      };
      this.trackContentImpressionsWithinNode = function (dr) {
        if (R(cc) || !dr) {
          return;
        }
        cm(function () {
          if (ck) {
            n(function () {
              var ds = w.findContentNodesWithinNode(dr);
              var dt = bf(ds);
              bK.pushMultiple(dt);
            });
          } else {
            q(function () {
              var ds = w.findContentNodesWithinNode(dr);
              var dt = cG(ds);
              bK.pushMultiple(dt);
            });
          }
        });
      };
      this.trackContentInteraction = function (dt, du, dr, ds) {
        if (R(cc)) {
          return;
        }
        dt = a(dt);
        du = a(du);
        dr = a(dr);
        ds = a(ds);
        if (!dt || !du) {
          return;
        }
        dr = dr || 'Unknown';
        cm(function () {
          var dv = aU(dt, du, dr, ds);
          if (dv) {
            bK.push(dv);
          }
        });
      };
      this.trackContentInteractionNode = function (dt, ds) {
        if (R(cc) || !dt) {
          return;
        }
        var dr = null;
        cm(function () {
          dr = di(dt, ds);
          if (dr) {
            bK.push(dr);
          }
        });
        return dr;
      };
      this.logAllContentBlocksOnPage = function () {
        var dt = w.findContentNodes();
        var dr = w.collectContent(dt);
        var ds = typeof console;
        if (ds !== 'undefined' && console && console.log) {
          console.log(dr);
        }
      };
      this.trackEvent = function (ds, du, dr, dt, dw, dv) {
        cm(function () {
          ax(ds, du, dr, dt, dw, dv);
        });
      };
      this.trackSiteSearch = function (dr, dt, ds, du) {
        cg = [];
        cm(function () {
          ce(dr, dt, ds, du);
        });
      };
      this.setEcommerceView = function (dv, dr, dt, ds) {
        cz = {};
        if (ac(dt)) {
          dt = String(dt);
        }
        if (!M(dt) || dt === null || dt === false || !dt.length) {
          dt = '';
        } else {
          if (dt instanceof Array) {
            dt = W.JSON.stringify(dt);
          }
        }
        var du = '_pkc';
        cz[du] = dt;
        if (M(ds) && ds !== null && ds !== false && String(ds).length) {
          du = '_pkp';
          cz[du] = ds;
        }
        if (!ac(dv) && !ac(dr)) {
          return;
        }
        if (ac(dv)) {
          du = '_pks';
          cz[du] = dv;
        }
        if (!ac(dr)) {
          dr = '';
        }
        du = '_pkn';
        cz[du] = dr;
      };
      this.getEcommerceItems = function () {
        return JSON.parse(JSON.stringify(c8));
      };
      this.addEcommerceItem = function (dv, dr, dt, ds, du) {
        if (ac(dv)) {
          c8[dv] = [String(dv), dr, dt, ds, du];
        }
      };
      this.removeEcommerceItem = function (dr) {
        if (ac(dr)) {
          dr = String(dr);
          delete c8[dr];
        }
      };
      this.clearEcommerceCart = function () {
        c8 = {};
      };
      this.trackEcommerceOrder = function (dr, dv, du, dt, ds, dw) {
        b4(dr, dv, du, dt, ds, dw);
      };
      this.trackEcommerceCartUpdate = function (dr) {
        bz(dr);
      };
      this.trackRequest = function (ds, du, dt, dr) {
        cm(function () {
          var dv = cx(ds, du, dr);
          bM(dv, bQ, dt);
        });
      };
      this.ping = function () {
        this.trackRequest('ping=1', null, null, 'ping');
      };
      this.disableQueueRequest = function () {
        bK.enabled = false;
      };
      this.setRequestQueueInterval = function (dr) {
        if (dr < 1000) {
          throw new Error('Request queue interval needs to be at least 1000ms');
        }
        bK.interval = dr;
      };
      this.queueRequest = function (dr) {
        cm(function () {
          var ds = cx(dr);
          bK.push(ds);
        });
      };
      this.isConsentRequired = function () {
        return cH;
      };
      this.getRememberedConsent = function () {
        var dr = aH(bj);
        if (aH(cT)) {
          if (dr) {
            b5(bj, bw, c5);
          }
          return null;
        }
        if (!dr || dr === 0) {
          return null;
        }
        return dr;
      };
      this.hasRememberedConsent = function () {
        return !!this.getRememberedConsent();
      };
      this.requireConsent = function () {
        cH = true;
        bJ = this.hasRememberedConsent();
        if (!bJ) {
          bs = true;
        }
        y++;
        b['CoreConsent' + y] = {
          unload: function () {
            if (!bJ) {
              aJ();
            }
          }
        };
      };
      this.setConsentGiven = function (ds) {
        bJ = true;
        b5(cT, bw, c5);
        var dt, dr;
        for (dt = 0; dt < cS.length; dt++) {
          dr = typeof cS[dt];
          if (dr === 'string') {
            bM(cS[dt], bQ);
          } else {
            if (dr === 'object') {
              dm(cS[dt], bQ);
            }
          }
        }
        cS = [];
        if (!M(ds) || ds) {
          this.setCookieConsentGiven();
        }
      };
      this.rememberConsentGiven = function (dt) {
        if (dt) {
          dt = dt * 60 * 60 * 1000;
        } else {
          dt = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        var dr = true;
        this.setConsentGiven(dr);
        var ds = new Date().getTime();
        dl(bj, ds, dt, bw, c5, bY, aN);
      };
      this.forgetConsentGiven = function () {
        var dr = 30 * 365 * 24 * 60 * 60 * 1000;
        b5(bj, bw, c5);
        dl(cT, new Date().getTime(), dr, bw, c5, bY, aN);
        this.forgetCookieConsentGiven();
        this.requireConsent();
      };
      this.isUserOptedOut = function () {
        return !bJ;
      };
      this.optUserOut = this.forgetConsentGiven;
      this.forgetUserOptOut = function () {
        this.setConsentGiven(false);
      };
      n(function () {
        setTimeout(function () {
          bL = true;
        }, 0);
      });
      u.trigger('TrackerSetup', [this]);
    }

    function K() {
      return { push: aj };
    }

    function c(ay, ax) {
      var az = {};
      var av, aw;
      for (av = 0; av < ax.length; av++) {
        var at = ax[av];
        az[at] = 1;
        for (aw = 0; aw < ay.length; aw++) {
          if (ay[aw] && ay[aw][0]) {
            var au = ay[aw][0];
            if (at === au) {
              aj(ay[aw]);
              delete ay[aw];
              if (az[au] > 1 && au !== 'addTracker' && au !== 'enableLinkTracking') {
                ao(
                  'The method ' +
                    au +
                    ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers'
                );
              }
              az[au]++;
            }
          }
        }
      }
      return ay;
    }

    var E = [
      'addTracker',
      'forgetCookieConsentGiven',
      'requireCookieConsent',
      'disableCookies',
      'setTrackerUrl',
      'setAPIUrl',
      'enableCrossDomainLinking',
      'setCrossDomainLinkingTimeout',
      'setSessionCookieTimeout',
      'setVisitorCookieTimeout',
      'setCookieNamePrefix',
      'setCookieSameSite',
      'setSecureCookie',
      'setCookiePath',
      'setCookieDomain',
      'setDomains',
      'setUserId',
      'setVisitorId',
      'setSiteId',
      'alwaysUseSendBeacon',
      'enableLinkTracking',
      'setCookieConsentGiven',
      'requireConsent',
      'setConsentGiven',
      'disablePerformanceTracking',
      'setPagePerformanceTiming'
    ];

    function ah(av, au) {
      var at = new T(av, au);
      L.push(at);
      _paq = c(_paq, E);
      for (H = 0; H < _paq.length; H++) {
        if (_paq[H]) {
          aj(_paq[H]);
        }
      }
      _paq = new K();
      u.trigger('TrackerAdded', [at]);
      return at;
    }

    ar(W, 'beforeunload', am, false);
    ar(
      W,
      'online',
      function () {
        if (M(g.serviceWorker)) {
          g.serviceWorker.ready.then(
            function (at) {
              if (at && at.sync) {
                return at.sync.register('matomoSync');
              }
            },
            function () {}
          );
        }
      },
      false
    );
    ar(
      W,
      'message',
      function (ay) {
        if (!ay || !ay.origin) {
          return;
        }
        var aA, aw, au;
        var aB = d(ay.origin);
        var ax = u.getAsyncTrackers();
        for (aw = 0; aw < ax.length; aw++) {
          au = d(ax[aw].getMatomoUrl());
          if (au === aB) {
            aA = ax[aw];
            break;
          }
        }
        if (!aA) {
          return;
        }
        var av = null;
        try {
          av = JSON.parse(ay.data);
        } catch (az) {
          return;
        }
        if (!av) {
          return;
        }

        function at(aE) {
          var aG = J.getElementsByTagName('iframe');
          for (aw = 0; aw < aG.length; aw++) {
            var aF = aG[aw];
            var aC = d(aF.src);
            if (aF.contentWindow && M(aF.contentWindow.postMessage) && aC === aB) {
              var aD = JSON.stringify(aE);
              aF.contentWindow.postMessage(aD, '*');
            }
          }
        }

        if (M(av.maq_initial_value)) {
          at({
            maq_opted_in: av.maq_initial_value && aA.hasConsent(),
            maq_url: aA.getMatomoUrl(),
            maq_optout_by_default: aA.isConsentRequired()
          });
        } else {
          if (M(av.maq_opted_in)) {
            ax = u.getAsyncTrackers();
            for (aw = 0; aw < ax.length; aw++) {
              aA = ax[aw];
              if (av.maq_opted_in) {
                aA.rememberConsentGiven();
              } else {
                aA.forgetConsentGiven();
              }
            }
            at({
              maq_confirm_opted_in: aA.hasConsent(),
              maq_url: aA.getMatomoUrl(),
              maq_optout_by_default: aA.isConsentRequired()
            });
          }
        }
      },
      false
    );
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    u = {
      initialized: false,
      JSON: W.JSON,
      DOM: {
        addEventListener: function (aw, av, au, at) {
          var ax = typeof at;
          if (ax === 'undefined') {
            at = false;
          }
          ar(aw, av, au, at);
        },
        onLoad: n,
        onReady: q,
        isNodeVisible: i,
        isOrWasNodeVisible: w.isNodeVisible
      },
      on: function (au, at) {
        if (!z[au]) {
          z[au] = [];
        }
        z[au].push(at);
      },
      off: function (av, au) {
        if (!z[av]) {
          return;
        }
        var at = 0;
        for (at; at < z[av].length; at++) {
          if (z[av][at] === au) {
            z[av].splice(at, 1);
          }
        }
      },
      trigger: function (av, aw, au) {
        if (!z[av]) {
          return;
        }
        var at = 0;
        for (at; at < z[av].length; at++) {
          z[av][at].apply(au || W, aw);
        }
      },
      addPlugin: function (at, au) {
        b[at] = au;
      },
      getTracker: function (au, at) {
        if (!M(at)) {
          at = this.getAsyncTracker().getSiteId();
        }
        if (!M(au)) {
          au = this.getAsyncTracker().getTrackerUrl();
        }
        return new T(au, at);
      },
      getAsyncTrackers: function () {
        return L;
      },
      addTracker: function (av, au) {
        var at;
        if (!L.length) {
          at = ah(av, au);
        } else {
          at = L[0].addTracker(av, au);
        }
        return at;
      },
      getAsyncTracker: function (ax, aw) {
        var av;
        if (L && L.length && L[0]) {
          av = L[0];
        } else {
          return ah(ax, aw);
        }
        if (!aw && !ax) {
          return av;
        }
        if ((!M(aw) || null === aw) && av) {
          aw = av.getSiteId();
        }
        if ((!M(ax) || null === ax) && av) {
          ax = av.getTrackerUrl();
        }
        var au,
          at = 0;
        for (at; at < L.length; at++) {
          au = L[at];
          if (au && String(au.getSiteId()) === String(aw) && au.getTrackerUrl() === ax) {
            return au;
          }
        }
      },
      retryMissedPluginCalls: function () {
        var au = al;
        al = [];
        var at = 0;
        for (at; at < au.length; at++) {
          aj(au[at]);
        }
      }
    };
    if (typeof define === 'function' && define.amd) {
      define('piwik', [], function () {
        return u;
      });
      define('matomo', [], function () {
        return u;
      });
    }
    return u;
  })();
}
/*!!! pluginTrackerHook */
(function () {
  function b() {
    if ('object' !== typeof _paq) {
      return false;
    }
    var c = typeof _paq.length;
    if ('undefined' === c) {
      return false;
    }
    return !!_paq.length;
  }

  if (
    window &&
    'object' === typeof window.matomoPluginAsyncInit &&
    window.matomoPluginAsyncInit.length
  ) {
    var a = 0;
    for (a; a < window.matomoPluginAsyncInit.length; a++) {
      if (typeof window.matomoPluginAsyncInit[a] === 'function') {
        window.matomoPluginAsyncInit[a]();
      }
    }
  }
  if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit();
  }
  if (window && window.matomoAsyncInit) {
    window.matomoAsyncInit();
  }
  if (!window.Matomo.getAsyncTrackers().length) {
    if (b()) {
      window.Matomo.addTracker();
    } else {
      _paq = {
        push: function (c) {
          var d = typeof console;
          if (d !== 'undefined' && console && console.error) {
            console.error(
              '_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.',
              c
            );
          }
        }
      };
    }
  }
  window.Matomo.trigger('MatomoInitialized', []);
  window.Matomo.initialized = true;
})();
(function () {
  var a = typeof window.AnalyticsTracker;
  if (a === 'undefined') {
    window.AnalyticsTracker = window.Matomo;
  }
})();
if (typeof window.piwik_log !== 'function') {
  window.piwik_log = function (c, e, g, f) {
    function b(h) {
      try {
        if (window['piwik_' + h]) {
          return window['piwik_' + h];
        }
      } catch (i) {}
      return;
    }

    var d,
      a = window.Matomo.getTracker(g, e);
    a.setDocumentTitle(c);
    a.setCustomData(f);
    d = b('tracker_pause');
    if (d) {
      a.setLinkTrackingTimer(d);
    }
    d = b('download_extensions');
    if (d) {
      a.setDownloadExtensions(d);
    }
    d = b('hosts_alias');
    if (d) {
      a.setDomains(d);
    }
    d = b('ignore_classes');
    if (d) {
      a.setIgnoreClasses(d);
    }
    a.trackPageView();
    if (b('install_tracker')) {
      piwik_track = function (i, j, k, h) {
        a.setSiteId(j);
        a.setTrackerUrl(k);
        a.trackLink(i, h);
      };
      a.enableLinkTracking();
    }
  };
}
/*!! @license-end */
