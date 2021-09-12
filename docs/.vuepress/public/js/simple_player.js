window.Player = (function(e) {
  var t = {}
  function n(a) {
    if (t[a]) return t[a].exports
    var r = (t[a] = { i: a, l: !1, exports: {} })
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a })
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var a = Object.create(null)
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function(t) {
              return e[t]
            }.bind(null, r)
          )
      return a
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 6))
  )
})([
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n]
            ;(a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a)
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t
        }
      })(),
      r = function e(t, n, a) {
        null === t && (t = Function.prototype)
        var r = Object.getOwnPropertyDescriptor(t, n)
        if (void 0 === r) {
          var i = Object.getPrototypeOf(t)
          return null === i ? void 0 : e(i, n, a)
        }
        if ('value' in r) return r.value
        var o = r.get
        return void 0 !== o ? o.call(a) : void 0
      },
      i = d(n(8)),
      o = d(n(3)),
      l = d(n(28)),
      s = d(n(29)),
      u = d(n(4)),
      p = d(n(30)),
      c = (n(35), d(n(36)), n(5))
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function f(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
    }
    var g = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        if (
          ((n.config = o.default.deepCopy(
            {
              width: 600,
              height: 337.5,
              ignores: [],
              whitelist: [],
              lang: (
                document.documentElement.getAttribute('lang') ||
                navigator.language ||
                'zh-cn'
              ).toLocaleLowerCase(),
              inactive: 3e3,
              volume: 0.6,
              controls: !0,
              controlsList: ['nodownload']
            },
            e
          )),
          (n.version = c.version),
          (n.userTimer = null),
          (n.waitTimer = null),
          (n.database = new l.default()),
          (n.history = []),
          (n.isProgressMoving = !1),
          (n.root = o.default.findDom(document, '#' + n.config.id)),
          (n.controls = o.default.createDom(
            'xg-controls',
            '',
            { unselectable: 'on', onselectstart: 'return false' },
            'xgplayer-controls'
          )),
          n.config.isShowControl && (n.controls.style.display = 'none'),
          !n.root)
        ) {
          var a = n.config.el
          if (!a || 1 !== a.nodeType)
            return (
              n.emit(
                'error',
                new u.default({
                  type: 'use',
                  errd: {
                    line: 45,
                    handle: 'Constructor',
                    msg: "container id can't be empty"
                  },
                  vid: n.config.vid
                })
              ),
              console.error("container id can't be empty"),
              !1,
              f(n, !1)
            )
          n.root = a
        }
        if (
          (o.default.addClass(
            n.root,
            'xgplayer xgplayer-' +
              s.default.device +
              ' xgplayer-nostart ' +
              (n.config.controls ? '' : 'no-controls')
          ),
          n.root.appendChild(n.controls),
          n.config.fluid
            ? ((n.root.style['max-width'] = '100%'),
              (n.root.style.width = '100%'),
              (n.root.style.height = '0'),
              (n.root.style['padding-top'] =
                (100 * n.config.height) / n.config.width + '%'),
              (n.video.style.position = 'absolute'),
              (n.video.style.top = '0'),
              (n.video.style.left = '0'))
            : (n.config.width &&
                ('number' != typeof n.config.width
                  ? (n.root.style.width = n.config.width)
                  : (n.root.style.width = n.config.width + 'px')),
              n.config.height &&
                ('number' != typeof n.config.height
                  ? (n.root.style.height = n.config.height)
                  : (n.root.style.height = n.config.height + 'px'))),
          n.config.execBeforePluginsCall &&
            n.config.execBeforePluginsCall.forEach(function(e) {
              e.call(n, n)
            }),
          n.config.controlStyle &&
            'String' === o.default.typeOf(n.config.controlStyle))
        ) {
          var r = n
          fetch(r.config.controlStyle, {
            method: 'GET',
            headers: { Accept: 'application/json' }
          })
            .then(function(e) {
              e.ok &&
                e.json().then(function(e) {
                  for (var t in e) e.hasOwnProperty(t) && (r.config[t] = e[t])
                  r.pluginsCall()
                })
            })
            .catch(function(e) {
              console.log('Fetch错误:' + e)
            })
        } else n.pluginsCall()
        n.ev.forEach(function(e) {
          var t = Object.keys(e)[0],
            a = n[e[t]]
          a && n.on(t, a)
        }),
          ['focus', 'blur'].forEach(function(e) {
            n.on(e, n['on' + e.charAt(0).toUpperCase() + e.slice(1)])
          })
        var i = n
        return (
          (n.mousemoveFunc = function() {
            i.emit('focus'), i.config.closeFocusVideoFocus || i.video.focus()
          }),
          n.root.addEventListener('mousemove', n.mousemoveFunc),
          (n.playFunc = function() {
            i.emit('focus'), i.config.closePlayVideoFocus || i.video.focus()
          }),
          i.once('play', n.playFunc),
          (n.getVideoSize = function() {
            if (this.video.videoWidth && this.video.videoHeight) {
              var e = i.root.getBoundingClientRect()
              'auto' === i.config.fitVideoSize
                ? e.width / e.height >
                  this.video.videoWidth / this.video.videoHeight
                  ? (i.root.style.height =
                      (this.video.videoHeight / this.video.videoWidth) *
                        e.width +
                      'px')
                  : (i.root.style.width =
                      (this.video.videoWidth / this.video.videoHeight) *
                        e.height +
                      'px')
                : 'fixWidth' === i.config.fitVideoSize
                  ? (i.root.style.height =
                      (this.video.videoHeight / this.video.videoWidth) *
                        e.width +
                      'px')
                  : 'fixHeight' === i.config.fitVideoSize &&
                    (i.root.style.width =
                      (this.video.videoWidth / this.video.videoHeight) *
                        e.height +
                      'px')
            }
          }),
          i.once('loadeddata', n.getVideoSize),
          setTimeout(function() {
            n.emit('ready'), (n.isReady = !0)
          }, 0),
          (n.config.keyShortcut && 'on' !== n.config.keyShortcut) ||
            ['video', 'controls'].forEach(function(e) {
              i[e].addEventListener('keydown', function(e) {
                i.onKeydown(e, i)
              })
            }),
          n.config.videoInit &&
            o.default.hasClass(n.root, 'xgplayer-nostart') &&
            n.start(),
          i.config.rotate &&
            (i.on('requestFullscreen', n.updateRotateDeg),
            i.on('exitFullscreen', n.updateRotateDeg)),
          i.once('destroy', function e() {
            i.root.removeEventListener('mousemove', i.mousemoveFunc),
              i.off('destroy', e)
          }),
          n
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, e),
        a(
          t,
          [
            {
              key: 'start',
              value: function() {
                var e = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.config.url
                console.log('parentUrl', n)
                var a = this.root,
                  r = this
                ;(n && '' !== n) || this.emit('urlNull'),
                  (this.logParams.playSrc = n),
                  (this.canPlayFunc = function() {
                    r.off('canplay', r.canPlayFunc)
                    var e = r.video.play()
                    void 0 !== e &&
                      e &&
                      e
                        .then(function() {
                          r.emit('autoplay started')
                        })
                        .catch(function() {
                          r.emit('autoplay was prevented'),
                            t.util.addClass(r.root, 'xgplayer-is-autoplay')
                        })
                  }),
                  'String' === o.default.typeOf(n)
                    ? (n.indexOf('blob:') > -1 && n === this.video.src) ||
                      ((this.video.src = n), (r.src = n))
                    : n.forEach(function(t) {
                        e.video.appendChild(
                          o.default.createDom('source', '', {
                            src: '' + t.src,
                            type: '' + (t.type || '')
                          })
                        )
                      }),
                  (this.logParams.pt = new Date().getTime()),
                  (this.logParams.vt = this.logParams.pt),
                  (this.loadeddataFunc = function() {
                    ;(r.logParams.vt = new Date().getTime()),
                      r.logParams.pt > r.logParams.vt &&
                        (r.logParams.pt = r.logParams.vt),
                      (r.logParams.vd = r.video.duration)
                  }),
                  this.once('loadeddata', this.loadeddataFunc),
                  this.config.autoplay &&
                    (s.default.os.isPhone
                      ? this.canPlayFunc()
                      : this.on('canplay', this.canPlayFunc)),
                  this.config.disableStartLoad || this.video.load(),
                  a.insertBefore(this.video, a.firstChild),
                  setTimeout(function() {
                    e.emit('complete'),
                      e.danmu &&
                        'function' == typeof e.danmu.resize &&
                        e.danmu.resize()
                  }, 1)
              }
            },
            {
              key: 'reload',
              value: function() {
                this.video.load(),
                  (this.reloadFunc = function() {
                    var e = this.play()
                    void 0 !== e && e && e.catch(function(e) {})
                  }),
                  this.once('loadeddata', this.reloadFunc)
              }
            },
            {
              key: 'destroy',
              value: function() {
                var e = this,
                  n =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  a = this
                for (var i in (clearInterval(this.bulletResizeTimer),
                this._interval))
                  clearInterval(this._interval[i]), (this._interval[i] = null)
                function o() {
                  if (
                    (this.emit('destroy'),
                    this.video.removeAttribute('src'),
                    this.video.load(),
                    n)
                  ) {
                    this.root.innerHTML = ''
                    var e = this.root.className.split(' ')
                    e.length > 0
                      ? (this.root.className = e
                          .filter(function(e) {
                            return e.indexOf('xgplayer') < 0
                          })
                          .join(' '))
                      : (this.root.className = '')
                  }
                  for (var t in this) delete this[t]
                  this.off('pause', o)
                }
                this.checkTimer && clearInterval(this.checkTimer),
                  this.waitTimer && clearTimeout(this.waitTimer),
                  this.ev.forEach(function(t) {
                    var n = Object.keys(t)[0],
                      a = e[t[n]]
                    a && e.off(n, a)
                  }),
                  this.loadeddataFunc &&
                    this.off('loadeddata', this.loadeddataFunc),
                  this.reloadFunc && this.off('loadeddata', this.reloadFunc),
                  this.replayFunc && this.off('play', this.replayFunc),
                  this.playFunc && this.off('play', this.playFunc),
                  this.getVideoSize &&
                    this.off('loadeddata', this.getVideoSize),
                  ['focus', 'blur'].forEach(function(t) {
                    e.off(t, e['on' + t.charAt(0).toUpperCase() + t.slice(1)])
                  }),
                  (this.config.keyShortcut &&
                    'on' !== this.config.keyShortcut) ||
                    ['video', 'controls'].forEach(function(t) {
                      e[t] &&
                        e[t].removeEventListener('keydown', function(e) {
                          a.onKeydown(e, a)
                        })
                    }),
                  this.paused
                    ? o.call(this)
                    : (this.pause(), this.once('pause', o)),
                  r(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'destroy',
                    this
                  ).call(this)
              }
            },
            {
              key: 'replay',
              value: function() {
                var e = this,
                  t = this._replay
                if (
                  (o.default.removeClass(this.root, 'xgplayer-ended'),
                  (this.logParams = {
                    bc: 0,
                    bu_acu_t: 0,
                    played: [],
                    pt: new Date().getTime(),
                    vt: new Date().getTime(),
                    vd: 0
                  }),
                  (this.logParams.pt = new Date().getTime()),
                  (this.logParams.vt = this.logParams.pt),
                  (this.replayFunc = function() {
                    ;(e.logParams.vt = new Date().getTime()),
                      e.logParams.pt > e.logParams.vt &&
                        (e.logParams.pt = e.logParams.vt),
                      (e.logParams.vd = e.video.duration)
                  }),
                  this.once('play', this.replayFunc),
                  (this.logParams.playSrc = this.video.currentSrc),
                  t && t instanceof Function)
                )
                  t()
                else {
                  this.currentTime = 0
                  var n = this.play()
                  void 0 !== n && n && n.catch(function(e) {})
                }
              }
            },
            {
              key: 'getFullscreen',
              value: function(e) {
                e.requestFullscreen
                  ? e.requestFullscreen()
                  : e.mozRequestFullScreen
                    ? e.mozRequestFullScreen()
                    : e.webkitRequestFullscreen
                      ? e.webkitRequestFullscreen(
                          window.Element.ALLOW_KEYBOARD_INPUT
                        )
                      : this.video.webkitSupportsFullscreen
                        ? this.video.webkitEnterFullscreen()
                        : e.msRequestFullscreen
                          ? e.msRequestFullscreen()
                          : o.default.addClass(e, 'xgplayer-is-cssfullscreen')
              }
            },
            {
              key: 'exitFullscreen',
              value: function(e) {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.webkitExitFullscreen
                    ? document.webkitExitFullscreen()
                    : document.mozCancelFullScreen
                      ? document.mozCancelFullScreen()
                      : document.msExitFullscreen &&
                        document.msExitFullscreen(),
                  o.default.removeClass(e, 'xgplayer-is-cssfullscreen')
              }
            },
            {
              key: 'getCssFullscreen',
              value: function() {
                this.config.fluid && (this.root.style['padding-top'] = ''),
                  o.default.addClass(this.root, 'xgplayer-is-cssfullscreen'),
                  this.emit('requestCssFullscreen')
              }
            },
            {
              key: 'exitCssFullscreen',
              value: function() {
                this.config.fluid &&
                  ((this.root.style.width = '100%'),
                  (this.root.style.height = '0'),
                  (this.root.style['padding-top'] =
                    (100 * this.config.height) / this.config.width + '%')),
                  o.default.removeClass(this.root, 'xgplayer-is-cssfullscreen'),
                  this.emit('exitCssFullscreen')
              }
            },
            {
              key: 'getRotateFullscreen',
              value: function() {
                ;(document.documentElement.style.width = '100%'),
                  (document.documentElement.style.height = '100%'),
                  this.root &&
                    !t.util.hasClass(this.root, 'xgplayer-rotate-fullscreen') &&
                    t.util.addClass(this.root, 'xgplayer-rotate-fullscreen'),
                  this.emit('getRotateFullscreen')
              }
            },
            {
              key: 'exitRotateFullscreen',
              value: function() {
                ;(document.documentElement.style.width = 'unset'),
                  (document.documentElement.style.height = 'unset'),
                  this.root &&
                    t.util.hasClass(this.root, 'xgplayer-rotate-fullscreen') &&
                    t.util.removeClass(this.root, 'xgplayer-rotate-fullscreen'),
                  this.emit('exitRotateFullscreen')
              }
            },
            { key: 'download', value: function() {} },
            {
              key: 'pluginsCall',
              value: function() {
                var e = this,
                  n = this
                if (t.plugins) {
                  var a = this.config.ignores
                  Object.keys(t.plugins).forEach(function(r) {
                    var i = t.plugins[r]
                    a.some(function(e) {
                      return r === e || r === 's_' + e
                    }) ||
                      (['pc', 'tablet', 'mobile'].some(function(e) {
                        return e === r
                      })
                        ? r === s.default.device &&
                          setTimeout(function() {
                            i.call(n, n)
                          }, 0)
                        : i.call(e, e))
                  })
                }
              }
            },
            {
              key: 'getPIP',
              value: function() {
                var e = o.default.createDom(
                  'xg-pip-lay',
                  '<div></div>',
                  {},
                  'xgplayer-pip-lay'
                )
                this.root.appendChild(e)
                var t = o.default.createDom(
                  'xg-pip-drag',
                  '<div class="drag-handle"><span>' +
                    this.lang.PIP_DRAG +
                    '</span></div>',
                  { tabindex: 9 },
                  'xgplayer-pip-drag'
                )
                this.root.appendChild(t)
                new p.default('.xgplayer', { handle: '.drag-handle' })
                o.default.addClass(this.root, 'xgplayer-pip-active'),
                  (this.root.style.right = 0),
                  (this.root.style.bottom = '200px'),
                  (this.root.style.top = ''),
                  (this.root.style.left = ''),
                  (this.root.style.width = '320px'),
                  (this.root.style.height = '180px'),
                  this.config.pipConfig &&
                    (void 0 !== this.config.pipConfig.top &&
                      ((this.root.style.top = this.config.pipConfig.top + 'px'),
                      (this.root.style.bottom = '')),
                    void 0 !== this.config.pipConfig.bottom &&
                      (this.root.style.bottom =
                        this.config.pipConfig.bottom + 'px'),
                    void 0 !== this.config.pipConfig.left &&
                      ((this.root.style.left =
                        this.config.pipConfig.left + 'px'),
                      (this.root.style.right = '')),
                    void 0 !== this.config.pipConfig.right &&
                      (this.root.style.right =
                        this.config.pipConfig.right + 'px'),
                    void 0 !== this.config.pipConfig.width &&
                      (this.root.style.width =
                        this.config.pipConfig.width + 'px'),
                    void 0 !== this.config.pipConfig.height &&
                      (this.root.style.height =
                        this.config.pipConfig.height + 'px')),
                  this.config.fluid && (this.root.style['padding-top'] = '')
                var n = this
                ;['click', 'touchend'].forEach(function(t) {
                  e.addEventListener(t, function(e) {
                    e.preventDefault(), e.stopPropagation(), n.exitPIP()
                  })
                })
              }
            },
            {
              key: 'exitPIP',
              value: function() {
                o.default.removeClass(this.root, 'xgplayer-pip-active'),
                  (this.root.style.right = ''),
                  (this.root.style.bottom = ''),
                  (this.root.style.top = ''),
                  (this.root.style.left = ''),
                  this.config.fluid
                    ? ((this.root.style.width = '100%'),
                      (this.root.style.height = '0'),
                      (this.root.style['padding-top'] =
                        (100 * this.config.height) / this.config.width + '%'))
                    : (this.config.width &&
                        ('number' != typeof this.config.width
                          ? (this.root.style.width = this.config.width)
                          : (this.root.style.width = this.config.width + 'px')),
                      this.config.height &&
                        ('number' != typeof this.config.height
                          ? (this.root.style.height = this.config.height)
                          : (this.root.style.height =
                              this.config.height + 'px')))
                var e = o.default.findDom(this.root, '.xgplayer-pip-lay')
                e && e.parentNode && e.parentNode.removeChild(e)
                var t = o.default.findDom(this.root, '.xgplayer-pip-drag')
                t && t.parentNode && t.parentNode.removeChild(t)
              }
            },
            {
              key: 'updateRotateDeg',
              value: function() {
                this.rotateDeg || (this.rotateDeg = 0)
                var e = this.root.offsetWidth,
                  t = this.root.offsetHeight,
                  n = this.video.videoWidth,
                  a = this.video.videoHeight
                !this.config.rotate.innerRotate &&
                  this.config.rotate.controlsFix &&
                  ((this.root.style.width = t + 'px'),
                  (this.root.style.height = e + 'px'))
                var r = void 0
                if (0.25 === this.rotateDeg || 0.75 === this.rotateDeg) {
                  if (this.config.rotate.innerRotate)
                    if (n / a > t / e) {
                      r = t / (a / n > t / e ? (t * n) / a : e)
                    } else {
                      r = e / (a / n > t / e ? t : (e * a) / n)
                    }
                  else r = e >= t ? e / t : t / e
                  r = Number(r.toFixed(5))
                } else r = 1
                this.config.rotate.innerRotate || this.config.rotate.controlsFix
                  ? ((this.video.style.transformOrigin = 'center center'),
                    (this.video.style.transform =
                      'rotate(' + this.rotateDeg + 'turn) scale(' + r + ')'),
                    (this.video.style.webKitTransform =
                      'rotate(' + this.rotateDeg + 'turn) scale(' + r + ')'))
                  : ((this.root.style.transformOrigin = 'center center'),
                    (this.root.style.transform =
                      'rotate(' + this.rotateDeg + 'turn) scale(1)'),
                    (this.root.style.webKitTransform =
                      'rotate(' + this.rotateDeg + 'turn) scale(1)'))
              }
            },
            {
              key: 'rotate',
              value: function() {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  n = this
                n.rotateDeg || (n.rotateDeg = 0)
                var a = e ? 1 : -1
                ;(n.rotateDeg = (n.rotateDeg + 1 + 0.25 * a * t) % 1),
                  this.updateRotateDeg(),
                  n.emit('rotate', 360 * n.rotateDeg)
              }
            },
            {
              key: 'onFocus',
              value: function() {
                var e = this
                o.default.removeClass(this.root, 'xgplayer-inactive'),
                  e.userTimer && clearTimeout(e.userTimer),
                  (e.userTimer = setTimeout(function() {
                    e.emit('blur')
                  }, e.config.inactive))
              }
            },
            {
              key: 'onBlur',
              value: function() {
                ;(!this.config.enablePausedInactive && this.paused) ||
                  this.ended ||
                  this.config.closeInactive ||
                  o.default.addClass(this.root, 'xgplayer-inactive')
              }
            },
            {
              key: 'onPlay',
              value: function() {
                o.default.addClass(this.root, 'xgplayer-isloading'),
                  o.default.addClass(this.root, 'xgplayer-playing'),
                  o.default.removeClass(this.root, 'xgplayer-pause')
              }
            },
            {
              key: 'onPause',
              value: function() {
                o.default.addClass(this.root, 'xgplayer-pause'),
                  this.userTimer && clearTimeout(this.userTimer),
                  this.emit('focus')
              }
            },
            {
              key: 'onEnded',
              value: function() {
                o.default.addClass(this.root, 'xgplayer-ended'),
                  o.default.removeClass(this.root, 'xgplayer-playing')
              }
            },
            {
              key: 'onSeeking',
              value: function() {
                ;(this.isSeeking = !0), this.onWaiting()
              }
            },
            {
              key: 'onTimeupdate',
              value: function() {
                this.waitTimer && clearTimeout(this.waitTimer),
                  o.default.removeClass(this.root, 'xgplayer-isloading')
              }
            },
            {
              key: 'onSeeked',
              value: function() {
                ;(this.isSeeking = !1),
                  this.waitTimer && clearTimeout(this.waitTimer),
                  o.default.removeClass(this.root, 'xgplayer-isloading')
              }
            },
            {
              key: 'onWaiting',
              value: function() {
                var e = this
                e.waitTimer && clearTimeout(e.waitTimer),
                  e.checkTimer &&
                    (clearInterval(e.checkTimer), (e.checkTimer = null))
                var t = e.currentTime
                e.waitTimer = setTimeout(function() {
                  o.default.addClass(e.root, 'xgplayer-isloading'),
                    (e.checkTimer = setInterval(function() {
                      e.currentTime !== t &&
                        (o.default.removeClass(this.root, 'xgplayer-isloading'),
                        clearInterval(e.checkTimer),
                        (e.checkTimer = null))
                    }, 1e3))
                }, 500)
              }
            },
            {
              key: 'onPlaying',
              value: function() {
                this.paused ||
                  ((this.isSeeking = !1),
                  this.waitTimer && clearTimeout(this.waitTimer),
                  o.default.removeClass(
                    this.root,
                    'xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay'
                  ),
                  o.default.addClass(this.root, 'xgplayer-playing'))
              }
            },
            {
              key: 'onKeydown',
              value: function(e, t) {
                var n = e || window.event
                if (
                  (!n ||
                    (37 !== n.keyCode &&
                      38 !== n.keyCode &&
                      39 !== n.keyCode &&
                      40 !== n.keyCode &&
                      32 !== n.keyCode) ||
                    t.emit('focus'),
                  !n || (40 !== n.keyCode && 38 !== n.keyCode))
                ) {
                  if (n && 39 === n.keyCode)
                    t.currentTime + 10 <= t.duration
                      ? (t.currentTime += 10)
                      : (t.currentTime = t.duration - 1)
                  else if (n && 37 === n.keyCode)
                    t.currentTime - 10 >= 0
                      ? (t.currentTime -= 10)
                      : (t.currentTime = 0)
                  else if (n && 32 === n.keyCode)
                    if (t.paused) {
                      var a = t.play()
                      void 0 !== a && a && a.catch(function(e) {})
                    } else t.pause()
                } else {
                  if (t.controls) {
                    var r = t.controls.querySelector('.xgplayer-slider')
                    r &&
                      (o.default.hasClass(r, 'xgplayer-none') &&
                        o.default.removeClass(r, 'xgplayer-none'),
                      t.sliderTimer && clearTimeout(t.sliderTimer),
                      (t.sliderTimer = setTimeout(function() {
                        o.default.addClass(r, 'xgplayer-none')
                      }, t.config.inactive)))
                  }
                  n && 40 === n.keyCode
                    ? t.volume - 0.1 >= 0
                      ? (t.volume = Number((t.volume - 0.1).toFixed(1)))
                      : (t.volume = 0)
                    : n &&
                      38 === n.keyCode &&
                      (t.volume + 0.1 <= 1
                        ? (t.volume = Number((t.volume + 0.1).toFixed(1)))
                        : (t.volume = 1))
                }
              }
            },
            {
              key: 'cumulateTime',
              get: function() {
                if (this.logParams && this.logParams.played instanceof Array) {
                  var e = o.default.computeWatchDur(this.logParams.played) || 0
                  return Number(e.toFixed(3))
                }
                return 0
              }
            }
          ],
          [
            {
              key: 'install',
              value: function(e, n) {
                t.plugins || (t.plugins = {}),
                  t.plugins[e] || (t.plugins[e] = n)
              }
            },
            {
              key: 'use',
              value: function(e, n) {
                t.plugins || (t.plugins = {}), (t.plugins[e] = n)
              }
            }
          ]
        ),
        t
      )
    })(i.default)
    ;(g.util = o.default),
      (g.sniffer = s.default),
      (g.Errors = u.default),
      (t.default = g),
      (e.exports = t.default)
  },
  function(e, t, n) {
    'use strict'
    var a = n(21)()
    e.exports = function(e) {
      return e !== a && null !== e
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      return null != e
    }
  },
  function(module, exports, __webpack_require__) {
    'use strict'
    Object.defineProperty(exports, '__esModule', { value: !0 })
    var util = {
      createDom: function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'div',
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
          r = document.createElement(e)
        return (
          (r.className = a),
          (r.innerHTML = t),
          Object.keys(n).forEach(function(t) {
            var a = t,
              i = n[t]
            'video' === e || 'audio' === e
              ? i && r.setAttribute(a, i)
              : r.setAttribute(a, i)
          }),
          r
        )
      },
      hasClass: function(e, t) {
        return (
          !!e &&
          (e.classList
            ? Array.prototype.some.call(e.classList, function(e) {
                return e === t
              })
            : !!e.className.match(new RegExp('(\\s|^)' + t + '(\\s|$)')))
        )
      },
      addClass: function(e, t) {
        e &&
          (e.classList
            ? t
                .replace(/(^\s+|\s+$)/g, '')
                .split(/\s+/g)
                .forEach(function(t) {
                  t && e.classList.add(t)
                })
            : util.hasClass(e, t) || (e.className += ' ' + t))
      },
      removeClass: function(e, t) {
        e &&
          (e.classList
            ? t.split(/\s+/g).forEach(function(t) {
                e.classList.remove(t)
              })
            : util.hasClass(e, t) &&
              t.split(/\s+/g).forEach(function(t) {
                var n = new RegExp('(\\s|^)' + t + '(\\s|$)')
                e.className = e.className.replace(n, ' ')
              }))
      },
      toggleClass: function(e, t) {
        e &&
          t.split(/\s+/g).forEach(function(t) {
            util.hasClass(e, t) ? util.removeClass(e, t) : util.addClass(e, t)
          })
      },
      findDom: function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : document,
          t = arguments[1],
          n = void 0
        try {
          n = e.querySelector(t)
        } catch (a) {
          0 === t.indexOf('#') && (n = e.getElementById(t.slice(1)))
        }
        return n
      },
      padStart: function(e, t, n) {
        for (
          var a = String(n),
            r = t >> 0,
            i = Math.ceil(r / a.length),
            o = [],
            l = String(e);
          i--;

        )
          o.push(a)
        return o.join('').substring(0, r - l.length) + l
      },
      format: function(e) {
        if (window.isNaN(e)) return ''
        var t = util.padStart(Math.floor(e / 3600), 2, 0),
          n = util.padStart(Math.floor((e - 3600 * t) / 60), 2, 0),
          a = util.padStart(Math.floor(e - 3600 * t - 60 * n), 2, 0)
        return ('00' === t ? [n, a] : [t, n, a]).join(':')
      },
      event: function(e) {
        if (e.touches) {
          var t = e.touches[0] || e.changedTouches[0]
          ;(e.clientX = t.clientX || 0),
            (e.clientY = t.clientY || 0),
            (e.offsetX = t.pageX - t.target.offsetLeft),
            (e.offsetY = t.pageY - t.target.offsetTop)
        }
        e._target = e.target || e.srcElement
      },
      typeOf: function(e) {
        return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]
      },
      deepCopy: function(e, t) {
        if ('Object' === util.typeOf(t) && 'Object' === util.typeOf(e))
          return (
            Object.keys(t).forEach(function(n) {
              'Object' !== util.typeOf(t[n]) || t[n] instanceof Node
                ? 'Array' === util.typeOf(t[n])
                  ? (e[n] =
                      'Array' === util.typeOf(e[n]) ? e[n].concat(t[n]) : t[n])
                  : (e[n] = t[n])
                : e[n]
                  ? util.deepCopy(e[n], t[n])
                  : (e[n] = t[n])
            }),
            e
          )
      },
      getBgImage: function(e) {
        var t = (e.currentStyle || window.getComputedStyle(e, null))
          .backgroundImage
        if (!t || 'none' === t) return ''
        var n = document.createElement('a')
        return (n.href = t.replace(/url\("|"\)/g, '')), n.href
      },
      copyDom: function(e) {
        if (e && 1 === e.nodeType) {
          var t = document.createElement(e.tagName)
          return (
            Array.prototype.forEach.call(e.attributes, function(e) {
              t.setAttribute(e.name, e.value)
            }),
            e.innerHTML && (t.innerHTML = e.innerHTML),
            t
          )
        }
        return ''
      },
      setInterval: function(e, t, n, a) {
        e._interval[t] || (e._interval[t] = setInterval(n.bind(e), a))
      },
      clearInterval: function(e, t) {
        clearInterval(e._interval[t]), (e._interval[t] = null)
      },
      createImgBtn: function(e, t, n, a) {
        var r = util.createDom('xg-' + e, '', {}, 'xgplayer-' + e + '-img')
        if (((r.style.backgroundImage = 'url("' + t + '")'), n && a)) {
          var i = void 0,
            o = void 0,
            l = void 0
          ;['px', 'rem', 'em', 'pt', 'dp', 'vw', 'vh', 'vm', '%'].every(
            function(e) {
              return (
                !(n.indexOf(e) > -1 && a.indexOf(e) > -1) ||
                ((i = Number(n.slice(0, n.indexOf(e)).trim())),
                (o = Number(a.slice(0, a.indexOf(e)).trim())),
                (l = e),
                !1)
              )
            }
          ),
            (r.style.width = '' + i + l),
            (r.style.height = '' + o + l),
            (r.style.backgroundSize = '' + i + l + ' ' + o + l),
            (r.style.margin =
              'start' === e
                ? '-' + o / 2 + l + ' auto auto -' + i / 2 + l
                : 'auto 5px auto 5px')
        }
        return r
      },
      Hex2RGBA: function(hex, alpha) {
        var rgb = []
        if (/^\#[0-9A-F]{3}$/i.test(hex)) {
          var sixHex = '#'
          hex.replace(/[0-9A-F]/gi, function(e) {
            sixHex += e + e
          }),
            (hex = sixHex)
        }
        return /^#[0-9A-F]{6}$/i.test(hex)
          ? (hex.replace(/[0-9A-F]{2}/gi, function(kw) {
              rgb.push(eval('0x' + kw))
            }),
            'rgba(' + rgb.join(',') + ', ' + alpha + ')')
          : 'rgba(255, 255, 255, 0.1)'
      },
      isWeiXin: function() {
        return (
          window.navigator.userAgent.toLowerCase().indexOf('micromessenger') >
          -1
        )
      },
      isUc: function() {
        return (
          window.navigator.userAgent.toLowerCase().indexOf('ucbrowser') > -1
        )
      },
      computeWatchDur: function() {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = [],
            n = 0;
          n < e.length;
          n++
        )
          if (
            !(
              !e[n].end ||
              e[n].begin < 0 ||
              e[n].end < 0 ||
              e[n].end < e[n].begin
            )
          )
            if (t.length < 1) t.push({ begin: e[n].begin, end: e[n].end })
            else
              for (var a = 0; a < t.length; a++) {
                var r = e[n].begin,
                  i = e[n].end
                if (i < t[a].begin) {
                  t.splice(a, 0, { begin: r, end: i })
                  break
                }
                if (!(r > t[a].end)) {
                  var o = t[a].begin,
                    l = t[a].end
                  ;(t[a].begin = Math.min(r, o)), (t[a].end = Math.max(i, l))
                  break
                }
                if (a > t.length - 2) {
                  t.push({ begin: r, end: i })
                  break
                }
              }
        for (var s = 0, u = 0; u < t.length; u++) s += t[u].end - t[u].begin
        return s
      },
      downloadFile: function(e) {
        var t = this
        return new Promise(function(n, a) {
          var r = new XMLHttpRequest()
          r.open('get', e),
            (r.responseType = 'arraybuffer'),
            (r.onload = function() {
              var a = void 0,
                i = r.response
              try {
                a = new Blob([i], { type: 'application/x-mpegURL' })
              } catch (e) {
                ;(window.BlobBuilder =
                  window.BlobBuilder ||
                  window.WebKitBlobBuilder ||
                  window.MozBlobBuilder),
                  (a = new BlobBuilder()).append(i),
                  (a = a.getBlob())
              }
              var o = URL.createObjectURL(a)
              ;(t.cacheBuffer[e] = { blobUrl: o, blob: a }),
                t.options.backupUrls &&
                  t.options.backupUrls.length &&
                  !t.backup_download_success &&
                  t.options.backupUrls.every(function(e) {
                    return t.cacheBuffer[e] && !isPromise(t.cacheBuffer[e])
                  }) &&
                  (t.emit('backup_download_success'),
                  (t.backup_download_success = !0)),
                n({ blobUrl: o, blob: a })
            }),
            (r.onerror = function(a) {
              delete t.cacheBuffer[e], n(e)
            }),
            (r.onprogress = function(n) {
              ;-1 == t.cacheBuffer[e] &&
                r &&
                (r.abort(), delete t.cacheBuffer[e])
            }),
            r.send()
        })
      }
    }
    ;(exports.default = util), (module.exports = exports.default)
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a = n(5)
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    var i = {
      network: {
        code: 1,
        msg: '视频下载错误',
        remark:
          '只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在'
      },
      mse: {
        code: 2,
        msg: '流追加错误',
        remark: '追加流的时候如果类型不对、无法被正确解码则会触发此类错误'
      },
      parse: {
        code: 3,
        msg: '解析错误',
        remark:
          'mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误'
      },
      format: {
        code: 4,
        msg: '格式错误',
        remark: '如果浏览器不支持的格式导致播放错误'
      },
      decoder: {
        code: 5,
        msg: '解码错误',
        remark: '浏览器解码异常会抛出此类型错误'
      },
      runtime: { code: 6, msg: '语法错误', remark: '播放器语法错误' },
      timeout: {
        code: 7,
        msg: '播放超时',
        remark: '播放过程中无法正常请求下一个分段导致播放中断'
      },
      other: {
        code: 8,
        msg: '其他错误',
        remark: '不可知的错误或被忽略的错误类型'
      }
    }
    ;(t.default = function e(t, n, o, l, s, u, p, c) {
      var d =
          arguments.length > 8 && void 0 !== arguments[8]
            ? arguments[8]
            : { line: '', handle: '', msg: '', version: '' },
        f = arguments[9],
        g = arguments[10]
      r(this, e)
      var y = {}
      if (arguments.length > 1)
        (y.playerVersion = a.version),
          (y.errorType = t),
          (y.domain = document.domain),
          (y.duration = o),
          (y.currentTime = n),
          (y.networkState = l),
          (y.readyState = s),
          (y.currentSrc = p),
          (y.src = u),
          (y.ended = c),
          (y.errd = d),
          (y.ex = (i[t] || {}).msg),
          (y.errorCode = f),
          (y.mediaError = g)
      else {
        var h = arguments[0]
        Object.keys(h).map(function(e) {
          y[e] = h[e]
        }),
          (y.ex = ((h.type && i[h.type]) || {}).msg)
      }
      return y
    }),
      (e.exports = t.default)
  },
  function(e) {
    e.exports = JSON.parse(
      '{"name":"xgplayer","version":"2.9.15","description":"video player","main":"./dist/index.js","typings":"./types/index.d.ts","bin":{"xgplayer":"bin/xgplayer.js"},"scripts":{"prepare":"npm run build","postpublish":"git push --tags","build":"webpack --progress --display-chunks -p","watch":"webpack --progress --display-chunks -p --watch --mode development","release:stable":"npm version patch && npm publish --registry=http://registry.npmjs.org","release:alpha":"npm version prerelease --preid=alpha && npm publish --tag alpha --registry=http://registry.npmjs.org","release:alpha-test":"npm publish --tag alpha-test --registry=http://registry.npmjs.org"},"keywords":["video","player"],"babel":{"presets":["es2015"],"plugins":["add-module-exports","babel-plugin-bulk-import"]},"repository":{"type":"git","url":"git+https://github.com/bytedance/xgplayer.git"},"author":"yinguohui@bytedance.com","license":"MIT","dependencies":{"chalk":"^2.3.2","commander":"^2.15.1","crypto-js":"^4.0.0","danmu.js":"^0.2.17","deepmerge":"^1.5.0","downloadjs":"1.4.7","draggabilly":"^2.2.0","event-emitter":"^0.3.5","fs-extra":"^5.0.0","install":"^0.13.0","pasition":"^1.0.1","qrcodejs":"^1.0.0","request-frame":"^1.5.3"},"browserslist":["> 5%","IE 9","iOS 7","Firefox > 20"],"devDependencies":{"@types/events":"^3.0.0","autoprefixer":"^9.1.5","babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-bulk-import":"^1.0.2","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","chai":"^4.1.2","core-js":"^2.5.4","css-loader":"^0.28.11","json-loader":"^0.5.7","node-sass":"^4.8.3","postcss-cssnext":"^3.1.0","postcss-loader":"^2.1.5","raw-loader":"^2.0.0","sass-loader":"^6.0.7","style-loader":"^0.20.3","sugarss":"^1.0.1","webpack":"^4.11.0","webpack-cli":"^3.0.2","zlib":"^1.0.5"}}'
    )
  },
  function(e, t, n) {
    e.exports = n(7)
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a = C(n(0)),
      r = C(n(37)),
      i = C(n(38)),
      o = C(n(39)),
      l = C(n(40)),
      s = C(n(41)),
      u = C(n(42)),
      p = C(n(43)),
      c = C(n(44)),
      d = C(n(45)),
      f = C(n(46)),
      g = C(n(47)),
      y = C(n(48)),
      h = C(n(49)),
      x = C(n(50)),
      m = C(n(51)),
      v = C(n(52)),
      b = C(n(53)),
      k = C(n(54)),
      w = C(n(55)),
      E = C(n(56))
    C(n(57))
    function C(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var _ = {}
    function T(e, t, n) {
      var a = e
      t.map(function(e, r) {
        ;(a[e] = r == t.length - 1 ? n : a[e] || {}), (a = a[e])
      })
    }
    T(_, ['controls', 'cssFullscreen'], E.default),
      T(_, ['controls', 'danmu'], w.default),
      T(_, ['controls', 'definition'], k.default),
      T(_, ['controls', 'download'], b.default),
      T(_, ['controls', 'errorRetry'], v.default),
      T(_, ['controls', 'fullscreen'], m.default),
      T(_, ['controls', 'i18n'], x.default),
      T(_, ['controls', 'localPreview'], h.default),
      T(_, ['controls', 'memoryPlay'], y.default),
      T(_, ['controls', 'mobile'], g.default),
      T(_, ['controls', 'pc'], f.default),
      T(_, ['controls', 'pip'], d.default),
      T(_, ['controls', 'play'], c.default),
      T(_, ['controls', 'playNext'], p.default),
      T(_, ['controls', 'reload'], u.default),
      T(_, ['controls', 'replay'], s.default),
      T(_, ['controls', 'rotate'], l.default),
      T(_, ['controls', 'screenShot'], o.default),
      T(_, ['controls', 'start'], i.default),
      T(_, ['controls', 'volume'], r.default),
      (t.default = a.default),
      (e.exports = t.default)
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n]
            ;(a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a)
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t
        }
      })(),
      r = l(n(9)),
      i = l(n(3)),
      o = l(n(4))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var s = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.logParams = { bc: 0, bu_acu_t: 0, played: [] }),
          (this._hasStart = !1),
          (this.videoConfig = {
            controls: !!t.isShowControl,
            autoplay: t.autoplay,
            playsinline: t.playsinline,
            'webkit-playsinline': t.playsinline,
            'x5-playsinline': t.playsinline,
            'x5-video-player-type':
              t['x5-video-player-type'] || t.x5VideoPlayerType,
            'x5-video-player-fullscreen':
              t['x5-video-player-fullscreen'] || t.x5VideoPlayerFullscreen,
            'x5-video-orientation':
              t['x5-video-orientation'] || t.x5VideoOrientation,
            airplay: t.airplay,
            'webkit-airplay': t.airplay,
            tabindex: 2,
            mediaType: t.mediaType || 'video'
          }),
          t.muted && (this.videoConfig.muted = 'muted'),
          t.loop && (this.videoConfig.loop = 'loop')
        var n = ''
        if (
          ((this.textTrackShowDefault = !0),
          t.textTrack &&
            Array.isArray(t.textTrack) &&
            (t.textTrack.length > 0 &&
              !t.textTrack.some(function(e) {
                return e.default
              }) &&
              ((t.textTrack[0].default = !0), (this.textTrackShowDefault = !1)),
            t.textTrack.some(function(e) {
              if (e.src && e.label && e.default)
                return (
                  (n += '<track src="' + e.src + '" '),
                  e.kind && (n += 'kind="' + e.kind + '" '),
                  (n += 'label="' + e.label + '" '),
                  e.srclang && (n += 'srclang="' + e.srclang + '" '),
                  (n += (e.default ? 'default' : '') + '>'),
                  !0
                )
            }),
            (this.videoConfig.crossorigin = 'anonymous')),
          t.textTrackStyle)
        ) {
          var a = document.createElement('style')
          ;(this.textTrackStyle = a), document.head.appendChild(a)
          var o = ''
          for (var l in t.textTrackStyle)
            o += l + ': ' + t.textTrackStyle[l] + ';'
          var s = t.id
            ? '#' + t.id
            : t.el.id
              ? '#' + t.el.id
              : '.' + t.el.className
          a.sheet.insertRule
            ? a.sheet.insertRule(s + ' video::cue { ' + o + ' }', 0)
            : a.sheet.addRule && a.sheet.addRule(s + ' video::cue', o)
        }
        ;((this.video = i.default.createDom(
          this.videoConfig.mediaType,
          n,
          this.videoConfig,
          ''
        )),
        !this.textTrackShowDefault && n) &&
          (this.video.getElementsByTagName('Track')[0].track.mode = 'hidden')
        t.autoplay &&
          ((this.video.autoplay = !0),
          t.autoplayMuted && (this.video.muted = !0)),
          (this.ev = [
            'play',
            'playing',
            'pause',
            'ended',
            'error',
            'seeking',
            'seeked',
            'timeupdate',
            'waiting',
            'canplay',
            'canplaythrough',
            'durationchange',
            'volumechange',
            'loadeddata',
            'loadstart'
          ].map(function(e) {
            return (
              (t = {}),
              (n = e),
              (a = 'on' + e.charAt(0).toUpperCase() + e.slice(1)),
              n in t
                ? Object.defineProperty(t, n, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (t[n] = a),
              t
            )
            var t, n, a
          })),
          (0, r.default)(this),
          (this._interval = {})
        var u = '0,0',
          p = this
        this.ev.forEach(function(e) {
          p.evItem = Object.keys(e)[0]
          var t = Object.keys(e)[0]
          p.video.addEventListener(
            Object.keys(e)[0],
            function() {
              p &&
                p.logParams &&
                ('play' === t
                  ? (p.hasStart = !0)
                  : 'canplay' === t
                    ? i.default.removeClass(p.root, 'xgplayer-is-enter')
                    : 'waiting' === t
                      ? (p.logParams.bc++,
                        (p.inWaitingStart = new Date().getTime()))
                      : 'playing' === t
                        ? (i.default.removeClass(p.root, 'xgplayer-is-enter'),
                          p.inWaitingStart &&
                            ((p.logParams.bu_acu_t +=
                              new Date().getTime() - p.inWaitingStart),
                            (p.inWaitingStart = void 0)))
                        : 'loadeddata' === t
                          ? p.logParams.played.push({ begin: 0, end: -1 })
                          : 'seeking' === t
                            ? p.logParams.played.push({
                                begin: p.video.currentTime,
                                end: -1
                              })
                            : p &&
                              p.logParams &&
                              p.logParams.played &&
                              'timeupdate' === t &&
                              (p.logParams.played.length < 1 &&
                                p.logParams.played.push({
                                  begin: p.video.currentTime,
                                  end: -1
                                }),
                              (p.logParams.played[
                                p.logParams.played.length - 1
                              ].end = p.video.currentTime)),
                'error' === t ? p._onError(t) : p.emit(t, p),
                p.hasOwnProperty('_interval') &&
                  (['ended', 'error', 'timeupdate'].indexOf(t) < 0
                    ? (clearInterval(p._interval.bufferedChange),
                      i.default.setInterval(
                        p,
                        'bufferedChange',
                        function() {
                          if (p.video && p.video.buffered) {
                            for (
                              var e = [], t = 0, n = p.video.buffered.length;
                              t < n;
                              t++
                            )
                              e.push([
                                p.video.buffered.start(t),
                                p.video.buffered.end(t)
                              ])
                            e.toString() !== u &&
                              ((u = e.toString()), p.emit('bufferedChange', e))
                          }
                        },
                        200
                      ))
                    : 'timeupdate' !== t &&
                      i.default.clearInterval(p, 'bufferedChange')))
            },
            !1
          )
        })
      }
      return (
        a(e, [
          {
            key: '_onError',
            value: function(e) {
              this.video &&
                this.video.error &&
                this.emit(
                  e,
                  new o.default(
                    'other',
                    this.currentTime,
                    this.duration,
                    this.networkState,
                    this.readyState,
                    this.currentSrc,
                    this.src,
                    this.ended,
                    { line: 162, msg: this.error, handle: 'Constructor' },
                    this.video.error.code,
                    this.video.error
                  )
                )
            }
          },
          {
            key: 'destroy',
            value: function() {
              this.textTrackStyle &&
                this.textTrackStyle.parentNode.removeChild(this.textTrackStyle)
            }
          },
          {
            key: 'play',
            value: function() {
              return this.video.play()
            }
          },
          {
            key: 'pause',
            value: function() {
              this.video.pause()
            }
          },
          {
            key: 'canPlayType',
            value: function(e) {
              return this.video.canPlayType(e)
            }
          },
          {
            key: 'getBufferedRange',
            value: function() {
              var e = [0, 0],
                t = this.video,
                n = t.buffered,
                a = t.currentTime
              if (n)
                for (
                  var r = 0, i = n.length;
                  r < i &&
                  ((e[0] = n.start(r)),
                  (e[1] = n.end(r)),
                  !(e[0] <= a && a <= e[1]));
                  r++
                );
              return e[0] - a <= 0 && a - e[1] <= 0 ? e : [0, 0]
            }
          },
          {
            key: 'hasStart',
            get: function() {
              return this._hasStart
            },
            set: function(e) {
              'boolean' != typeof e ||
                !0 !== e ||
                this._hasStart ||
                ((this._hasStart = !0), this.emit('hasstart'))
            }
          },
          {
            key: 'autoplay',
            set: function(e) {
              this.video.autoplay = e
            },
            get: function() {
              return this.video.autoplay
            }
          },
          {
            key: 'buffered',
            get: function() {
              return this.video.buffered
            }
          },
          {
            key: 'crossOrigin',
            get: function() {
              return this.video.crossOrigin
            },
            set: function(e) {
              this.video.crossOrigin = e
            }
          },
          {
            key: 'currentSrc',
            get: function() {
              return this.video.currentSrc
            },
            set: function(e) {
              this.video.currentSrc = e
            }
          },
          {
            key: 'currentTime',
            get: function() {
              return this.video.currentTime
            },
            set: function(e) {
              var t = this
              ;('function' != typeof isFinite || isFinite(e)) &&
                (i.default.hasClass(this.root, 'xgplayer-ended')
                  ? (this.once('playing', function() {
                      t.video.currentTime = e
                    }),
                    this.replay())
                  : (this.video.currentTime = e),
                this.emit('currentTimeChange'))
            }
          },
          {
            key: 'defaultMuted',
            get: function() {
              return this.video.defaultMuted
            },
            set: function(e) {
              this.video.defaultMuted = e
            }
          },
          {
            key: 'duration',
            get: function() {
              return this.video.duration
            }
          },
          {
            key: 'ended',
            get: function() {
              return this.video.ended
            }
          },
          {
            key: 'error',
            get: function() {
              var e = this.video.error
              if (!e) return null
              var t = [
                { en: 'MEDIA_ERR_ABORTED', cn: '取回过程被用户中止' },
                { en: 'MEDIA_ERR_NETWORK', cn: '当下载时发生错误' },
                { en: 'MEDIA_ERR_DECODE', cn: '当解码时发生错误' },
                { en: 'MEDIA_ERR_SRC_NOT_SUPPORTED', cn: '不支持音频/视频' }
              ]
              return this.lang ? this.lang[t[e.code - 1].en] : t[e.code - 1].en
            }
          },
          {
            key: 'loop',
            get: function() {
              return this.video.loop
            },
            set: function(e) {
              this.video.loop = e
            }
          },
          {
            key: 'muted',
            get: function() {
              return this.video.muted
            },
            set: function(e) {
              this.video.muted = e
            }
          },
          {
            key: 'networkState',
            get: function() {
              var e = [
                { en: 'NETWORK_EMPTY', cn: '音频/视频尚未初始化' },
                {
                  en: 'NETWORK_IDLE',
                  cn: '音频/视频是活动的且已选取资源，但并未使用网络'
                },
                { en: 'NETWORK_LOADING', cn: '浏览器正在下载数据' },
                { en: 'NETWORK_NO_SOURCE', cn: '未找到音频/视频来源' }
              ]
              return this.lang
                ? this.lang[e[this.video.networkState].en]
                : e[this.video.networkState].en
            }
          },
          {
            key: 'paused',
            get: function() {
              return this.video.paused
            }
          },
          {
            key: 'playbackRate',
            get: function() {
              return this.video.playbackRate
            },
            set: function(e) {
              this.video.playbackRate = e
            }
          },
          {
            key: 'played',
            get: function() {
              return this.video.played
            }
          },
          {
            key: 'preload',
            get: function() {
              return this.video.preload
            },
            set: function(e) {
              this.video.preload = e
            }
          },
          {
            key: 'readyState',
            get: function() {
              var e = [
                { en: 'HAVE_NOTHING', cn: '没有关于音频/视频是否就绪的信息' },
                { en: 'HAVE_METADATA', cn: '关于音频/视频就绪的元数据' },
                {
                  en: 'HAVE_CURRENT_DATA',
                  cn:
                    '关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒'
                },
                {
                  en: 'HAVE_FUTURE_DATA',
                  cn: '当前及至少下一帧的数据是可用的'
                },
                { en: 'HAVE_ENOUGH_DATA', cn: '可用数据足以开始播放' }
              ]
              return this.lang
                ? this.lang[e[this.video.readyState].en]
                : e[this.video.readyState]
            }
          },
          {
            key: 'seekable',
            get: function() {
              return this.video.seekable
            }
          },
          {
            key: 'seeking',
            get: function() {
              return this.video.seeking
            }
          },
          {
            key: 'src',
            get: function() {
              return this.video.src
            },
            set: function(e) {
              var t = this
              i.default.hasClass(this.root, 'xgplayer-ended') ||
                this.emit('urlchange', JSON.parse(JSON.stringify(t.logParams))),
                (this.logParams = {
                  bc: 0,
                  bu_acu_t: 0,
                  played: [],
                  pt: new Date().getTime(),
                  vt: new Date().getTime(),
                  vd: 0
                }),
                this.video.pause(),
                (this.video.src = e),
                this.emit('srcChange'),
                (this.logParams.playSrc = e),
                (this.logParams.pt = new Date().getTime()),
                (this.logParams.vt = this.logParams.pt),
                this.once('loadeddata', function e() {
                  ;(t.logParams.vt = new Date().getTime()),
                    t.logParams.pt > t.logParams.vt &&
                      (t.logParams.pt = t.logParams.vt),
                    (t.logParams.vd = t.video.duration),
                    t.off('loadeddata', e)
                })
            }
          },
          {
            key: 'poster',
            set: function(e) {
              var t = i.default.findDom(this.root, '.xgplayer-poster')
              t && (t.style.backgroundImage = 'url(' + e + ')')
            }
          },
          {
            key: 'volume',
            get: function() {
              return this.video.volume
            },
            set: function(e) {
              this.video.volume = e
            }
          },
          {
            key: 'fullscreen',
            get: function() {
              return (
                i.default.hasClass(this.root, 'xgplayer-is-fullscreen') ||
                i.default.hasClass(this.root, 'xgplayer-fullscreen-active')
              )
            }
          },
          {
            key: 'bullet',
            get: function() {
              return (
                !!i.default.findDom(this.root, 'xg-danmu') &&
                i.default.hasClass(
                  i.default.findDom(this.root, 'xg-danmu'),
                  'xgplayer-has-danmu'
                )
              )
            }
          },
          {
            key: 'textTrack',
            get: function() {
              return i.default.hasClass(this.root, 'xgplayer-is-textTrack')
            }
          },
          {
            key: 'pip',
            get: function() {
              return i.default.hasClass(this.root, 'xgplayer-pip-active')
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = s), (e.exports = t.default)
  },
  function(e, t, n) {
    'use strict'
    var a,
      r,
      i,
      o,
      l,
      s,
      u,
      p =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      c = n(10),
      d = n(27),
      f = Function.prototype.apply,
      g = Function.prototype.call,
      y = Object.create,
      h = Object.defineProperty,
      x = Object.defineProperties,
      m = Object.prototype.hasOwnProperty,
      v = { configurable: !0, enumerable: !1, writable: !0 }
    ;(r = function(e, t) {
      var n, r
      return (
        d(t),
        (r = this),
        a.call(
          this,
          e,
          (n = function() {
            i.call(r, e, n), f.call(t, this, arguments)
          })
        ),
        (n.__eeOnceListener__ = t),
        this
      )
    }),
      (l = {
        on: (a = function(e, t) {
          var n
          return (
            d(t),
            m.call(this, '__ee__')
              ? (n = this.__ee__)
              : ((n = v.value = y(null)),
                h(this, '__ee__', v),
                (v.value = null)),
            n[e]
              ? 'object' === p(n[e])
                ? n[e].push(t)
                : (n[e] = [n[e], t])
              : (n[e] = t),
            this
          )
        }),
        once: r,
        off: (i = function(e, t) {
          var n, a, r, i
          if ((d(t), !m.call(this, '__ee__'))) return this
          if (!(n = this.__ee__)[e]) return this
          if ('object' === (void 0 === (a = n[e]) ? 'undefined' : p(a)))
            for (i = 0; (r = a[i]); ++i)
              (r !== t && r.__eeOnceListener__ !== t) ||
                (2 === a.length ? (n[e] = a[i ? 0 : 1]) : a.splice(i, 1))
          else (a !== t && a.__eeOnceListener__ !== t) || delete n[e]
          return this
        }),
        emit: (o = function(e) {
          var t, n, a, r, i
          if (m.call(this, '__ee__') && (r = this.__ee__[e]))
            if ('object' === (void 0 === r ? 'undefined' : p(r))) {
              for (
                n = arguments.length, i = new Array(n - 1), t = 1;
                t < n;
                ++t
              )
                i[t - 1] = arguments[t]
              for (r = r.slice(), t = 0; (a = r[t]); ++t) f.call(a, this, i)
            } else
              switch (arguments.length) {
                case 1:
                  g.call(r, this)
                  break
                case 2:
                  g.call(r, this, arguments[1])
                  break
                case 3:
                  g.call(r, this, arguments[1], arguments[2])
                  break
                default:
                  for (
                    n = arguments.length, i = new Array(n - 1), t = 1;
                    t < n;
                    ++t
                  )
                    i[t - 1] = arguments[t]
                  f.call(r, this, i)
              }
        })
      }),
      (s = { on: c(a), once: c(r), off: c(i), emit: c(o) }),
      (u = x({}, s)),
      (e.exports = t = function(e) {
        return null == e ? y(u) : x(Object(e), s)
      }),
      (t.methods = l)
  },
  function(e, t, n) {
    'use strict'
    var a = n(2),
      r = n(11),
      i = n(15),
      o = n(23),
      l = n(24)
    ;(e.exports = function(e, t) {
      var n, r, s, u, p
      return (
        arguments.length < 2 || 'string' != typeof e
          ? ((u = t), (t = e), (e = null))
          : (u = arguments[2]),
        a(e)
          ? ((n = l.call(e, 'c')), (r = l.call(e, 'e')), (s = l.call(e, 'w')))
          : ((n = s = !0), (r = !1)),
        (p = { value: t, configurable: n, enumerable: r, writable: s }),
        u ? i(o(u), p) : p
      )
    }).gs = function(e, t, n) {
      var s, u, p, c
      return (
        'string' != typeof e
          ? ((p = n), (n = t), (t = e), (e = null))
          : (p = arguments[3]),
        a(t)
          ? r(t)
            ? a(n)
              ? r(n) || ((p = n), (n = void 0))
              : (n = void 0)
            : ((p = t), (t = n = void 0))
          : (t = void 0),
        a(e)
          ? ((s = l.call(e, 'c')), (u = l.call(e, 'e')))
          : ((s = !0), (u = !1)),
        (c = { get: t, set: n, configurable: s, enumerable: u }),
        p ? i(o(p), c) : c
      )
    }
  },
  function(e, t, n) {
    'use strict'
    var a = n(12),
      r = /^\s*class[\s{/}]/,
      i = Function.prototype.toString
    e.exports = function(e) {
      return !!a(e) && !r.test(i.call(e))
    }
  },
  function(e, t, n) {
    'use strict'
    var a = n(13)
    e.exports = function(e) {
      if ('function' != typeof e) return !1
      if (!hasOwnProperty.call(e, 'length')) return !1
      try {
        if ('number' != typeof e.length) return !1
        if ('function' != typeof e.call) return !1
        if ('function' != typeof e.apply) return !1
      } catch (e) {
        return !1
      }
      return !a(e)
    }
  },
  function(e, t, n) {
    'use strict'
    var a = n(14)
    e.exports = function(e) {
      if (!a(e)) return !1
      try {
        return !!e.constructor && e.constructor.prototype === e
      } catch (e) {
        return !1
      }
    }
  },
  function(e, t, n) {
    'use strict'
    var a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      r = n(2),
      i = { object: !0, function: !0, undefined: !0 }
    e.exports = function(e) {
      return !!r(e) && hasOwnProperty.call(i, void 0 === e ? 'undefined' : a(e))
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = n(16)() ? Object.assign : n(17)
  },
  function(e, t, n) {
    'use strict'
    e.exports = function() {
      var e,
        t = Object.assign
      return (
        'function' == typeof t &&
        (t((e = { foo: 'raz' }), { bar: 'dwa' }, { trzy: 'trzy' }),
        e.foo + e.bar + e.trzy === 'razdwatrzy')
      )
    }
  },
  function(e, t, n) {
    'use strict'
    var a = n(18),
      r = n(22),
      i = Math.max
    e.exports = function(e, t) {
      var n,
        o,
        l,
        s = i(arguments.length, 2)
      for (
        e = Object(r(e)),
          l = function(a) {
            try {
              e[a] = t[a]
            } catch (e) {
              n || (n = e)
            }
          },
          o = 1;
        o < s;
        ++o
      )
        a((t = arguments[o])).forEach(l)
      if (void 0 !== n) throw n
      return e
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = n(19)() ? Object.keys : n(20)
  },
  function(e, t, n) {
    'use strict'
    e.exports = function() {
      try {
        return Object.keys('primitive'), !0
      } catch (e) {
        return !1
      }
    }
  },
  function(e, t, n) {
    'use strict'
    var a = n(1),
      r = Object.keys
    e.exports = function(e) {
      return r(a(e) ? Object(e) : e)
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = function() {}
  },
  function(e, t, n) {
    'use strict'
    var a = n(1)
    e.exports = function(e) {
      if (!a(e)) throw new TypeError('Cannot use null or undefined')
      return e
    }
  },
  function(e, t, n) {
    'use strict'
    var a = n(1),
      r = Array.prototype.forEach,
      i = Object.create,
      o = function(e, t) {
        var n
        for (n in e) t[n] = e[n]
      }
    e.exports = function(e) {
      var t = i(null)
      return (
        r.call(arguments, function(e) {
          a(e) && o(Object(e), t)
        }),
        t
      )
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = n(25)() ? String.prototype.contains : n(26)
  },
  function(e, t, n) {
    'use strict'
    var a = 'razdwatrzy'
    e.exports = function() {
      return (
        'function' == typeof a.contains &&
        (!0 === a.contains('dwa') && !1 === a.contains('foo'))
      )
    }
  },
  function(e, t, n) {
    'use strict'
    var a = String.prototype.indexOf
    e.exports = function(e) {
      return a.call(this, e, arguments[1]) > -1
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      if ('function' != typeof e) throw new TypeError(e + ' is not a function')
      return e
    }
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t
      }
    })()
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    var i = (function() {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                name: 'xgplayer',
                version: 1,
                db: null,
                ojstore: { name: 'xg-m4a', keypath: 'vid' }
              }
        r(this, e),
          (this.indexedDB = window.indexedDB || window.webkitindexedDB),
          (this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange),
          (this.myDB = t)
      }
      return (
        a(e, [
          {
            key: 'openDB',
            value: function(e) {
              var t = this,
                n = this,
                a = this.myDB.version || 1,
                r = n.indexedDB.open(n.myDB.name, a)
              ;(r.onerror = function(e) {}),
                (r.onsuccess = function(a) {
                  ;(t.myDB.db = a.target.result), e.call(n)
                }),
                (r.onupgradeneeded = function(e) {
                  var t = e.target.result
                  e.target.transaction
                  t.objectStoreNames.contains(n.myDB.ojstore.name) ||
                    t.createObjectStore(n.myDB.ojstore.name, {
                      keyPath: n.myDB.ojstore.keypath
                    })
                })
            }
          },
          {
            key: 'deletedb',
            value: function() {
              this.indexedDB.deleteDatabase(this.myDB.name)
            }
          },
          {
            key: 'closeDB',
            value: function() {
              this.myDB.db.close()
            }
          },
          {
            key: 'addData',
            value: function(e, t) {
              for (
                var n = this.myDB.db.transaction(e, 'readwrite').objectStore(e),
                  a = void 0,
                  r = 0;
                r < t.length;
                r++
              )
                ((a = n.add(t[r])).onerror = function() {}),
                  (a.onsuccess = function() {})
            }
          },
          {
            key: 'putData',
            value: function(e, t) {
              for (
                var n = this.myDB.db.transaction(e, 'readwrite').objectStore(e),
                  a = void 0,
                  r = 0;
                r < t.length;
                r++
              )
                ((a = n.put(t[r])).onerror = function() {}),
                  (a.onsuccess = function() {})
            }
          },
          {
            key: 'getDataByKey',
            value: function(e, t, n) {
              var a = this,
                r = this.myDB.db
                  .transaction(e, 'readwrite')
                  .objectStore(e)
                  .get(t)
              ;(r.onerror = function() {
                n.call(a, null)
              }),
                (r.onsuccess = function(e) {
                  var t = e.target.result
                  n.call(a, t)
                })
            }
          },
          {
            key: 'deleteData',
            value: function(e, t) {
              this.myDB.db
                .transaction(e, 'readwrite')
                .objectStore(e)
                .delete(t)
            }
          },
          {
            key: 'clearData',
            value: function(e) {
              this.myDB.db
                .transaction(e, 'readwrite')
                .objectStore(e)
                .clear()
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = i), (e.exports = t.default)
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a = {
      get device() {
        return a.os.isPc ? 'pc' : 'mobile'
      },
      get browser() {
        var e = navigator.userAgent.toLowerCase(),
          t = {
            ie: /rv:([\d.]+)\) like gecko/,
            firfox: /firefox\/([\d.]+)/,
            chrome: /chrome\/([\d.]+)/,
            opera: /opera.([\d.]+)/,
            safari: /version\/([\d.]+).*safari/
          }
        return [].concat(
          Object.keys(t).filter(function(n) {
            return t[n].test(e)
          })
        )[0]
      },
      get os() {
        var e = navigator.userAgent,
          t = /(?:Windows Phone)/.test(e),
          n = /(?:SymbianOS)/.test(e) || t,
          a = /(?:Android)/.test(e),
          r = /(?:Firefox)/.test(e),
          i =
            /(?:iPad|PlayBook)/.test(e) ||
            (a && !/(?:Mobile)/.test(e)) ||
            (r && /(?:Tablet)/.test(e)),
          o = /(?:iPhone)/.test(e) && !i
        return {
          isTablet: i,
          isPhone: o,
          isAndroid: a,
          isPc: !(o || a || n || i),
          isSymbian: n,
          isWindowsPhone: t,
          isFireFox: r
        }
      }
    }
    ;(t.default = a), (e.exports = t.default)
  },
  function(e, t, n) {
    'use strict'
    var a, r
    'function' == typeof Symbol && Symbol.iterator
    /*!
 * Draggabilly v2.3.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */
    !(function(i, o) {
      ;(a = [n(31), n(32)]),
        void 0 ===
          (r = function(e, t) {
            return (function(e, t, n) {
              function a(e, t) {
                for (var n in t) e[n] = t[n]
                return e
              }
              var r = e.jQuery
              function i(e, t) {
                ;(this.element =
                  'string' == typeof e ? document.querySelector(e) : e),
                  r && (this.$element = r(this.element)),
                  (this.options = a({}, this.constructor.defaults)),
                  this.option(t),
                  this._create()
              }
              var o = (i.prototype = Object.create(n.prototype))
              ;(i.defaults = {}),
                (o.option = function(e) {
                  a(this.options, e)
                })
              var l = { relative: !0, absolute: !0, fixed: !0 }
              function s(e, t, n) {
                return (n = n || 'round'), t ? Math[n](e / t) * t : e
              }
              ;(o._create = function() {
                ;(this.position = {}),
                  this._getPosition(),
                  (this.startPoint = { x: 0, y: 0 }),
                  (this.dragPoint = { x: 0, y: 0 }),
                  (this.startPosition = a({}, this.position))
                var e = getComputedStyle(this.element)
                l[e.position] || (this.element.style.position = 'relative'),
                  this.on('pointerMove', this.onPointerMove),
                  this.on('pointerUp', this.onPointerUp),
                  this.enable(),
                  this.setHandles()
              }),
                (o.setHandles = function() {
                  ;(this.handles = this.options.handle
                    ? this.element.querySelectorAll(this.options.handle)
                    : [this.element]),
                    this.bindHandles()
                }),
                (o.dispatchEvent = function(e, t, n) {
                  var a = [t].concat(n)
                  this.emitEvent(e, a), this.dispatchJQueryEvent(e, t, n)
                }),
                (o.dispatchJQueryEvent = function(t, n, a) {
                  var r = e.jQuery
                  if (r && this.$element) {
                    var i = r.Event(n)
                    ;(i.type = t), this.$element.trigger(i, a)
                  }
                }),
                (o._getPosition = function() {
                  var e = getComputedStyle(this.element),
                    t = this._getPositionCoord(e.left, 'width'),
                    n = this._getPositionCoord(e.top, 'height')
                  ;(this.position.x = isNaN(t) ? 0 : t),
                    (this.position.y = isNaN(n) ? 0 : n),
                    this._addTransformPosition(e)
                }),
                (o._getPositionCoord = function(e, n) {
                  if (-1 != e.indexOf('%')) {
                    var a = t(this.element.parentNode)
                    return a ? (parseFloat(e) / 100) * a[n] : 0
                  }
                  return parseInt(e, 10)
                }),
                (o._addTransformPosition = function(e) {
                  var t = e.transform
                  if (0 === t.indexOf('matrix')) {
                    var n = t.split(','),
                      a = 0 === t.indexOf('matrix3d') ? 12 : 4,
                      r = parseInt(n[a], 10),
                      i = parseInt(n[a + 1], 10)
                    ;(this.position.x += r), (this.position.y += i)
                  }
                }),
                (o.onPointerDown = function(e, t) {
                  this.element.classList.add('is-pointer-down'),
                    this.dispatchJQueryEvent('pointerDown', e, [t])
                }),
                (o.pointerDown = function(e, t) {
                  this.okayPointerDown(e) && this.isEnabled
                    ? ((this.pointerDownPointer = {
                        pageX: t.pageX,
                        pageY: t.pageY
                      }),
                      e.preventDefault(),
                      this.pointerDownBlur(),
                      this._bindPostStartEvents(e),
                      this.element.classList.add('is-pointer-down'),
                      this.dispatchEvent('pointerDown', e, [t]))
                    : this._pointerReset()
                }),
                (o.dragStart = function(e, t) {
                  this.isEnabled &&
                    (this._getPosition(),
                    this.measureContainment(),
                    (this.startPosition.x = this.position.x),
                    (this.startPosition.y = this.position.y),
                    this.setLeftTop(),
                    (this.dragPoint.x = 0),
                    (this.dragPoint.y = 0),
                    this.element.classList.add('is-dragging'),
                    this.dispatchEvent('dragStart', e, [t]),
                    this.animate())
                }),
                (o.measureContainment = function() {
                  var e = this.getContainer()
                  if (e) {
                    var n = t(this.element),
                      a = t(e),
                      r = this.element.getBoundingClientRect(),
                      i = e.getBoundingClientRect(),
                      o = a.borderLeftWidth + a.borderRightWidth,
                      l = a.borderTopWidth + a.borderBottomWidth,
                      s = (this.relativeStartPosition = {
                        x: r.left - (i.left + a.borderLeftWidth),
                        y: r.top - (i.top + a.borderTopWidth)
                      })
                    this.containSize = {
                      width: a.width - o - s.x - n.width,
                      height: a.height - l - s.y - n.height
                    }
                  }
                }),
                (o.getContainer = function() {
                  var e = this.options.containment
                  if (e)
                    return e instanceof HTMLElement
                      ? e
                      : 'string' == typeof e
                        ? document.querySelector(e)
                        : this.element.parentNode
                }),
                (o.onPointerMove = function(e, t, n) {
                  this.dispatchJQueryEvent('pointerMove', e, [t, n])
                }),
                (o.dragMove = function(e, t, n) {
                  if (this.isEnabled) {
                    var a = n.x,
                      r = n.y,
                      i = this.options.grid,
                      o = i && i[0],
                      l = i && i[1]
                    ;(a = s(a, o)),
                      (r = s(r, l)),
                      (a = this.containDrag('x', a, o)),
                      (r = this.containDrag('y', r, l)),
                      (a = 'y' == this.options.axis ? 0 : a),
                      (r = 'x' == this.options.axis ? 0 : r),
                      (this.position.x = this.startPosition.x + a),
                      (this.position.y = this.startPosition.y + r),
                      (this.dragPoint.x = a),
                      (this.dragPoint.y = r),
                      this.dispatchEvent('dragMove', e, [t, n])
                  }
                }),
                (o.containDrag = function(e, t, n) {
                  if (!this.options.containment) return t
                  var a = 'x' == e ? 'width' : 'height',
                    r = s(-this.relativeStartPosition[e], n, 'ceil'),
                    i = this.containSize[a]
                  return (i = s(i, n, 'floor')), Math.max(r, Math.min(i, t))
                }),
                (o.onPointerUp = function(e, t) {
                  this.element.classList.remove('is-pointer-down'),
                    this.dispatchJQueryEvent('pointerUp', e, [t])
                }),
                (o.dragEnd = function(e, t) {
                  this.isEnabled &&
                    ((this.element.style.transform = ''),
                    this.setLeftTop(),
                    this.element.classList.remove('is-dragging'),
                    this.dispatchEvent('dragEnd', e, [t]))
                }),
                (o.animate = function() {
                  if (this.isDragging) {
                    this.positionDrag()
                    var e = this
                    requestAnimationFrame(function() {
                      e.animate()
                    })
                  }
                }),
                (o.setLeftTop = function() {
                  ;(this.element.style.left = this.position.x + 'px'),
                    (this.element.style.top = this.position.y + 'px')
                }),
                (o.positionDrag = function() {
                  this.element.style.transform =
                    'translate3d( ' +
                    this.dragPoint.x +
                    'px, ' +
                    this.dragPoint.y +
                    'px, 0)'
                }),
                (o.staticClick = function(e, t) {
                  this.dispatchEvent('staticClick', e, [t])
                }),
                (o.setPosition = function(e, t) {
                  ;(this.position.x = e),
                    (this.position.y = t),
                    this.setLeftTop()
                }),
                (o.enable = function() {
                  this.isEnabled = !0
                }),
                (o.disable = function() {
                  ;(this.isEnabled = !1), this.isDragging && this.dragEnd()
                }),
                (o.destroy = function() {
                  this.disable(),
                    (this.element.style.transform = ''),
                    (this.element.style.left = ''),
                    (this.element.style.top = ''),
                    (this.element.style.position = ''),
                    this.unbindHandles(),
                    this.$element && this.$element.removeData('draggabilly')
                }),
                (o._init = function() {}),
                r && r.bridget && r.bridget('draggabilly', i)
              return i
            })(i, e, t)
          }.apply(t, a)) || (e.exports = r)
    })(window)
  },
  function(e, t, n) {
    'use strict'
    var a,
      r,
      i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    window,
      void 0 ===
        (r =
          'function' ==
          typeof (a = function() {
            function e(e) {
              var t = parseFloat(e)
              return -1 == e.indexOf('%') && !isNaN(t) && t
            }
            var t =
                'undefined' == typeof console
                  ? function() {}
                  : function(e) {
                      console.error(e)
                    },
              n = [
                'paddingLeft',
                'paddingRight',
                'paddingTop',
                'paddingBottom',
                'marginLeft',
                'marginRight',
                'marginTop',
                'marginBottom',
                'borderLeftWidth',
                'borderRightWidth',
                'borderTopWidth',
                'borderBottomWidth'
              ],
              a = n.length
            function r(e) {
              var n = getComputedStyle(e)
              return (
                n ||
                  t(
                    'Style returned ' +
                      n +
                      '. Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1'
                  ),
                n
              )
            }
            var o,
              l = !1
            function s(t) {
              if (
                ((function() {
                  if (!l) {
                    l = !0
                    var t = document.createElement('div')
                    ;(t.style.width = '200px'),
                      (t.style.padding = '1px 2px 3px 4px'),
                      (t.style.borderStyle = 'solid'),
                      (t.style.borderWidth = '1px 2px 3px 4px'),
                      (t.style.boxSizing = 'border-box')
                    var n = document.body || document.documentElement
                    n.appendChild(t)
                    var a = r(t)
                    ;(o = 200 == Math.round(e(a.width))),
                      (s.isBoxSizeOuter = o),
                      n.removeChild(t)
                  }
                })(),
                'string' == typeof t && (t = document.querySelector(t)),
                t &&
                  'object' == (void 0 === t ? 'undefined' : i(t)) &&
                  t.nodeType)
              ) {
                var u = r(t)
                if ('none' == u.display)
                  return (function() {
                    for (
                      var e = {
                          width: 0,
                          height: 0,
                          innerWidth: 0,
                          innerHeight: 0,
                          outerWidth: 0,
                          outerHeight: 0
                        },
                        t = 0;
                      t < a;
                      t++
                    )
                      e[n[t]] = 0
                    return e
                  })()
                var p = {}
                ;(p.width = t.offsetWidth), (p.height = t.offsetHeight)
                for (
                  var c = (p.isBorderBox = 'border-box' == u.boxSizing), d = 0;
                  d < a;
                  d++
                ) {
                  var f = n[d],
                    g = u[f],
                    y = parseFloat(g)
                  p[f] = isNaN(y) ? 0 : y
                }
                var h = p.paddingLeft + p.paddingRight,
                  x = p.paddingTop + p.paddingBottom,
                  m = p.marginLeft + p.marginRight,
                  v = p.marginTop + p.marginBottom,
                  b = p.borderLeftWidth + p.borderRightWidth,
                  k = p.borderTopWidth + p.borderBottomWidth,
                  w = c && o,
                  E = e(u.width)
                !1 !== E && (p.width = E + (w ? 0 : h + b))
                var C = e(u.height)
                return (
                  !1 !== C && (p.height = C + (w ? 0 : x + k)),
                  (p.innerWidth = p.width - (h + b)),
                  (p.innerHeight = p.height - (x + k)),
                  (p.outerWidth = p.width + m),
                  (p.outerHeight = p.height + v),
                  p
                )
              }
            }
            return s
          })
            ? a.call(t, n, t, e)
            : a) || (e.exports = r)
  },
  function(e, t, n) {
    'use strict'
    var a, r
    'function' == typeof Symbol && Symbol.iterator
    /*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */
    !(function(i, o) {
      ;(a = [n(33)]),
        void 0 ===
          (r = function(e) {
            return (function(e, t) {
              function n() {}
              var a = (n.prototype = Object.create(t.prototype))
              ;(a.bindHandles = function() {
                this._bindHandles(!0)
              }),
                (a.unbindHandles = function() {
                  this._bindHandles(!1)
                }),
                (a._bindHandles = function(t) {
                  for (
                    var n = (t = void 0 === t || t)
                        ? 'addEventListener'
                        : 'removeEventListener',
                      a = t ? this._touchActionValue : '',
                      r = 0;
                    r < this.handles.length;
                    r++
                  ) {
                    var i = this.handles[r]
                    this._bindStartEvent(i, t),
                      i[n]('click', this),
                      e.PointerEvent && (i.style.touchAction = a)
                  }
                }),
                (a._touchActionValue = 'none'),
                (a.pointerDown = function(e, t) {
                  this.okayPointerDown(e) &&
                    ((this.pointerDownPointer = {
                      pageX: t.pageX,
                      pageY: t.pageY
                    }),
                    e.preventDefault(),
                    this.pointerDownBlur(),
                    this._bindPostStartEvents(e),
                    this.emitEvent('pointerDown', [e, t]))
                })
              var r = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
                i = {
                  radio: !0,
                  checkbox: !0,
                  button: !0,
                  submit: !0,
                  image: !0,
                  file: !0
                }
              return (
                (a.okayPointerDown = function(e) {
                  var t = r[e.target.nodeName],
                    n = i[e.target.type],
                    a = !t || n
                  return a || this._pointerReset(), a
                }),
                (a.pointerDownBlur = function() {
                  var e = document.activeElement
                  e && e.blur && e != document.body && e.blur()
                }),
                (a.pointerMove = function(e, t) {
                  var n = this._dragPointerMove(e, t)
                  this.emitEvent('pointerMove', [e, t, n]),
                    this._dragMove(e, t, n)
                }),
                (a._dragPointerMove = function(e, t) {
                  var n = {
                    x: t.pageX - this.pointerDownPointer.pageX,
                    y: t.pageY - this.pointerDownPointer.pageY
                  }
                  return (
                    !this.isDragging &&
                      this.hasDragStarted(n) &&
                      this._dragStart(e, t),
                    n
                  )
                }),
                (a.hasDragStarted = function(e) {
                  return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
                }),
                (a.pointerUp = function(e, t) {
                  this.emitEvent('pointerUp', [e, t]), this._dragPointerUp(e, t)
                }),
                (a._dragPointerUp = function(e, t) {
                  this.isDragging
                    ? this._dragEnd(e, t)
                    : this._staticClick(e, t)
                }),
                (a._dragStart = function(e, t) {
                  ;(this.isDragging = !0),
                    (this.isPreventingClicks = !0),
                    this.dragStart(e, t)
                }),
                (a.dragStart = function(e, t) {
                  this.emitEvent('dragStart', [e, t])
                }),
                (a._dragMove = function(e, t, n) {
                  this.isDragging && this.dragMove(e, t, n)
                }),
                (a.dragMove = function(e, t, n) {
                  e.preventDefault(), this.emitEvent('dragMove', [e, t, n])
                }),
                (a._dragEnd = function(e, t) {
                  ;(this.isDragging = !1),
                    setTimeout(
                      function() {
                        delete this.isPreventingClicks
                      }.bind(this)
                    ),
                    this.dragEnd(e, t)
                }),
                (a.dragEnd = function(e, t) {
                  this.emitEvent('dragEnd', [e, t])
                }),
                (a.onclick = function(e) {
                  this.isPreventingClicks && e.preventDefault()
                }),
                (a._staticClick = function(e, t) {
                  ;(this.isIgnoringMouseUp && 'mouseup' == e.type) ||
                    (this.staticClick(e, t),
                    'mouseup' != e.type &&
                      ((this.isIgnoringMouseUp = !0),
                      setTimeout(
                        function() {
                          delete this.isIgnoringMouseUp
                        }.bind(this),
                        400
                      )))
                }),
                (a.staticClick = function(e, t) {
                  this.emitEvent('staticClick', [e, t])
                }),
                (n.getPointerPoint = t.getPointerPoint),
                n
              )
            })(i, e)
          }.apply(t, a)) || (e.exports = r)
    })(window)
  },
  function(e, t, n) {
    'use strict'
    var a, r
    'function' == typeof Symbol && Symbol.iterator
    /*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
    !(function(i, o) {
      ;(a = [n(34)]),
        void 0 ===
          (r = function(e) {
            return (function(e, t) {
              function n() {}
              var a = (n.prototype = Object.create(t.prototype))
              ;(a.bindStartEvent = function(e) {
                this._bindStartEvent(e, !0)
              }),
                (a.unbindStartEvent = function(e) {
                  this._bindStartEvent(e, !1)
                }),
                (a._bindStartEvent = function(t, n) {
                  var a = (n = void 0 === n || n)
                      ? 'addEventListener'
                      : 'removeEventListener',
                    r = 'mousedown'
                  e.PointerEvent
                    ? (r = 'pointerdown')
                    : 'ontouchstart' in e && (r = 'touchstart'),
                    t[a](r, this)
                }),
                (a.handleEvent = function(e) {
                  var t = 'on' + e.type
                  this[t] && this[t](e)
                }),
                (a.getTouch = function(e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                    if (n.identifier == this.pointerIdentifier) return n
                  }
                }),
                (a.onmousedown = function(e) {
                  var t = e.button
                  ;(t && 0 !== t && 1 !== t) || this._pointerDown(e, e)
                }),
                (a.ontouchstart = function(e) {
                  this._pointerDown(e, e.changedTouches[0])
                }),
                (a.onpointerdown = function(e) {
                  this._pointerDown(e, e)
                }),
                (a._pointerDown = function(e, t) {
                  e.button ||
                    this.isPointerDown ||
                    ((this.isPointerDown = !0),
                    (this.pointerIdentifier =
                      void 0 !== t.pointerId ? t.pointerId : t.identifier),
                    this.pointerDown(e, t))
                }),
                (a.pointerDown = function(e, t) {
                  this._bindPostStartEvents(e),
                    this.emitEvent('pointerDown', [e, t])
                })
              var r = {
                mousedown: ['mousemove', 'mouseup'],
                touchstart: ['touchmove', 'touchend', 'touchcancel'],
                pointerdown: ['pointermove', 'pointerup', 'pointercancel']
              }
              return (
                (a._bindPostStartEvents = function(t) {
                  if (t) {
                    var n = r[t.type]
                    n.forEach(function(t) {
                      e.addEventListener(t, this)
                    }, this),
                      (this._boundPointerEvents = n)
                  }
                }),
                (a._unbindPostStartEvents = function() {
                  this._boundPointerEvents &&
                    (this._boundPointerEvents.forEach(function(t) {
                      e.removeEventListener(t, this)
                    }, this),
                    delete this._boundPointerEvents)
                }),
                (a.onmousemove = function(e) {
                  this._pointerMove(e, e)
                }),
                (a.onpointermove = function(e) {
                  e.pointerId == this.pointerIdentifier &&
                    this._pointerMove(e, e)
                }),
                (a.ontouchmove = function(e) {
                  var t = this.getTouch(e.changedTouches)
                  t && this._pointerMove(e, t)
                }),
                (a._pointerMove = function(e, t) {
                  this.pointerMove(e, t)
                }),
                (a.pointerMove = function(e, t) {
                  this.emitEvent('pointerMove', [e, t])
                }),
                (a.onmouseup = function(e) {
                  this._pointerUp(e, e)
                }),
                (a.onpointerup = function(e) {
                  e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
                }),
                (a.ontouchend = function(e) {
                  var t = this.getTouch(e.changedTouches)
                  t && this._pointerUp(e, t)
                }),
                (a._pointerUp = function(e, t) {
                  this._pointerDone(), this.pointerUp(e, t)
                }),
                (a.pointerUp = function(e, t) {
                  this.emitEvent('pointerUp', [e, t])
                }),
                (a._pointerDone = function() {
                  this._pointerReset(),
                    this._unbindPostStartEvents(),
                    this.pointerDone()
                }),
                (a._pointerReset = function() {
                  ;(this.isPointerDown = !1), delete this.pointerIdentifier
                }),
                (a.pointerDone = function() {}),
                (a.onpointercancel = function(e) {
                  e.pointerId == this.pointerIdentifier &&
                    this._pointerCancel(e, e)
                }),
                (a.ontouchcancel = function(e) {
                  var t = this.getTouch(e.changedTouches)
                  t && this._pointerCancel(e, t)
                }),
                (a._pointerCancel = function(e, t) {
                  this._pointerDone(), this.pointerCancel(e, t)
                }),
                (a.pointerCancel = function(e, t) {
                  this.emitEvent('pointerCancel', [e, t])
                }),
                (n.getPointerPoint = function(e) {
                  return { x: e.pageX, y: e.pageY }
                }),
                n
              )
            })(i, e)
          }.apply(t, a)) || (e.exports = r)
    })(window)
  },
  function(e, t, n) {
    'use strict'
    var a, r
    'function' == typeof Symbol && Symbol.iterator
    'undefined' != typeof window && window,
      void 0 ===
        (r =
          'function' ==
          typeof (a = function() {
            function e() {}
            var t = e.prototype
            return (
              (t.on = function(e, t) {
                if (e && t) {
                  var n = (this._events = this._events || {}),
                    a = (n[e] = n[e] || [])
                  return -1 == a.indexOf(t) && a.push(t), this
                }
              }),
              (t.once = function(e, t) {
                if (e && t) {
                  this.on(e, t)
                  var n = (this._onceEvents = this._onceEvents || {})
                  return ((n[e] = n[e] || {})[t] = !0), this
                }
              }),
              (t.off = function(e, t) {
                var n = this._events && this._events[e]
                if (n && n.length) {
                  var a = n.indexOf(t)
                  return -1 != a && n.splice(a, 1), this
                }
              }),
              (t.emitEvent = function(e, t) {
                var n = this._events && this._events[e]
                if (n && n.length) {
                  ;(n = n.slice(0)), (t = t || [])
                  for (
                    var a = this._onceEvents && this._onceEvents[e], r = 0;
                    r < n.length;
                    r++
                  ) {
                    var i = n[r]
                    a && a[i] && (this.off(e, i), delete a[i]), i.apply(this, t)
                  }
                  return this
                }
              }),
              (t.allOff = function() {
                delete this._events, delete this._onceEvents
              }),
              e
            )
          })
            ? a.call(t, n, t, e)
            : a) || (e.exports = r)
  },
  function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    t.getAbsoluteURL = function(e) {
      if (!e.match(/^https?:\/\//)) {
        var t = document.createElement('div')
        ;(t.innerHTML = '<a href="' + e + '">x</a>'), (e = t.firstChild.href)
      }
      return e
    }
  },
  function(e, t, n) {
    'use strict'
    var a, r, i
    'function' == typeof Symbol && Symbol.iterator
    ;(r = []),
      void 0 ===
        (i =
          'function' ==
          typeof (a = function() {
            return function e(t, n, a) {
              var r,
                i,
                o = window,
                l = 'application/octet-stream',
                s = a || l,
                u = t,
                p = !n && !a && u,
                c = document.createElement('a'),
                d = function(e) {
                  return String(e)
                },
                f = o.Blob || o.MozBlob || o.WebKitBlob || d,
                g = n || 'download'
              if (
                ((f = f.call ? f.bind(o) : Blob),
                'true' === String(this) && ((s = (u = [u, s])[0]), (u = u[1])),
                p &&
                  p.length < 2048 &&
                  ((g = p
                    .split('/')
                    .pop()
                    .split('?')[0]),
                  (c.href = p),
                  -1 !== c.href.indexOf(p)))
              ) {
                var y = new XMLHttpRequest()
                return (
                  y.open('GET', p, !0),
                  (y.responseType = 'blob'),
                  (y.onload = function(t) {
                    e(t.target.response, g, l)
                  }),
                  setTimeout(function() {
                    y.send()
                  }, 0),
                  y
                )
              }
              if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(u)) {
                if (!(u.length > 2096103.424 && f !== d))
                  return navigator.msSaveBlob
                    ? navigator.msSaveBlob(v(u), g)
                    : b(u)
                s = (u = v(u)).type || l
              } else if (/([\x80-\xff])/.test(u)) {
                for (
                  var h = 0, x = new Uint8Array(u.length), m = x.length;
                  h < m;
                  ++h
                )
                  x[h] = u.charCodeAt(h)
                u = new f([x], { type: s })
              }
              function v(e) {
                for (
                  var t = e.split(/[:;,]/),
                    n = t[1],
                    a = ('base64' == t[2] ? atob : decodeURIComponent)(t.pop()),
                    r = a.length,
                    i = 0,
                    o = new Uint8Array(r);
                  i < r;
                  ++i
                )
                  o[i] = a.charCodeAt(i)
                return new f([o], { type: n })
              }
              function b(e, t) {
                if ('download' in c)
                  return (
                    (c.href = e),
                    c.setAttribute('download', g),
                    (c.className = 'download-js-link'),
                    (c.innerHTML = 'downloading...'),
                    (c.style.display = 'none'),
                    document.body.appendChild(c),
                    setTimeout(function() {
                      c.click(),
                        document.body.removeChild(c),
                        !0 === t &&
                          setTimeout(function() {
                            o.URL.revokeObjectURL(c.href)
                          }, 250)
                    }, 66),
                    !0
                  )
                if (
                  /(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(
                    navigator.userAgent
                  )
                )
                  return (
                    /^data:/.test(e) &&
                      (e = 'data:' + e.replace(/^data:([\w\/\-\+]+)/, l)),
                    window.open(e) ||
                      (confirm(
                        'Displaying New Document\n\nUse Save As... to download, then click back to return to this page.'
                      ) &&
                        (location.href = e)),
                    !0
                  )
                var n = document.createElement('iframe')
                document.body.appendChild(n),
                  !t &&
                    /^data:/.test(e) &&
                    (e = 'data:' + e.replace(/^data:([\w\/\-\+]+)/, l)),
                  (n.src = e),
                  setTimeout(function() {
                    document.body.removeChild(n)
                  }, 333)
              }
              if (
                ((r = u instanceof f ? u : new f([u], { type: s })),
                navigator.msSaveBlob)
              )
                return navigator.msSaveBlob(r, g)
              if (o.URL) b(o.URL.createObjectURL(r), !0)
              else {
                if ('string' == typeof r || r.constructor === d)
                  try {
                    return b('data:' + s + ';base64,' + o.btoa(r))
                  } catch (e) {
                    return b('data:' + s + ',' + encodeURIComponent(r))
                  }
                ;((i = new FileReader()).onload = function(e) {
                  b(this.result)
                }),
                  i.readAsDataURL(r)
              }
              return !0
            }
          })
            ? a.apply(t, r)
            : a) || (e.exports = i)
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('volume', function() {
      var e = this,
        t = e.root,
        n = i.default.util,
        a = void 0,
        r = void 0,
        o = void 0,
        l = void 0
      function s() {
        e.controls &&
          ((e.volume = e.config.volume),
          (a = e.controls.querySelector('.xgplayer-volume')) &&
            ((r = a.querySelector('.xgplayer-slider')),
            (o = a.querySelector('.xgplayer-bar')),
            (l = a.querySelector('.xgplayer-drag')),
            'mobile' === i.default.sniffer.device && g()))
      }
      function u(t) {
        ;(e.video.muted = !1), r.focus(), n.event(t)
        var a = o.getBoundingClientRect(),
          i = (t.clientX, t.clientY),
          s = l.getBoundingClientRect().height,
          u = !1,
          p = function(t) {
            t.preventDefault(), t.stopPropagation(), n.event(t), (u = !0)
            var r = s - t.clientY + i,
              o = r / a.height
            ;(l.style.height = r + 'px'),
              (e.volume = Math.max(Math.min(o, 1), 0))
          },
          c = function t(i) {
            if (
              (i.preventDefault(),
              i.stopPropagation(),
              n.event(i),
              window.removeEventListener('mousemove', p),
              window.removeEventListener('touchmove', p),
              window.removeEventListener('mouseup', t),
              window.removeEventListener('touchend', t),
              !u)
            ) {
              var o = a.height - (i.clientY - a.top),
                s = o / a.height
              ;(l.style.height = o + 'px'),
                s <= 0 &&
                  (e.volume > 0 ? (l.volume = e.video.volume) : (s = l.volume)),
                (e.volume = Math.max(Math.min(s, 1), 0))
            }
            ;(r.volume = e.volume), (u = !1)
          }
        return (
          window.addEventListener('mousemove', p),
          window.addEventListener('touchmove', p),
          window.addEventListener('mouseup', c),
          window.addEventListener('touchend', c),
          !1
        )
      }
      function p() {
        'mobile' === i.default.sniffer.device
          ? e.video.muted
            ? ((e.video.muted = !1), e.emit('unmute'), (e.volume = 1))
            : ((e.video.muted = !0), e.emit('mute'), (e.volume = 0))
          : ((e.video.muted = !1),
            e.volume < 0.1
              ? (r.volume < 0.1 ? (e.volume = 0.6) : (e.volume = r.volume),
                e.emit('unmute'))
              : ((e.volume = 0), e.emit('mute')))
      }
      function c() {
        n.addClass(t, 'xgplayer-volume-active'), a && a.focus()
      }
      function d() {
        n.removeClass(t, 'xgplayer-volume-active')
      }
      e.once('canplay', s),
        e.on('volumeBarClick', u),
        e.on('volumeIconClick', p),
        e.on('volumeIconEnter', c),
        e.on('volumeIconLeave', d)
      var f = null
      function g() {
        f && clearTimeout(f),
          (f = setTimeout(function() {
            if ('mobile' === i.default.sniffer.device)
              n.removeClass(t, 'xgplayer-volume-muted'),
                n.removeClass(t, 'xgplayer-volume-large'),
                e.video.muted || e.video.defaultMuted
                  ? (e.video.muted || (e.video.muted = !0),
                    (e.video.defaultMuted = !1),
                    n.addClass(t, 'xgplayer-volume-muted'))
                  : n.addClass(t, 'xgplayer-volume-large')
            else {
              if (
                (n.removeClass(t, 'xgplayer-volume-muted'),
                n.removeClass(t, 'xgplayer-volume-small'),
                n.removeClass(t, 'xgplayer-volume-large'),
                0 === e.volume
                  ? n.addClass(t, 'xgplayer-volume-muted')
                  : e.volume < 0.5
                    ? n.addClass(t, 'xgplayer-volume-small')
                    : n.addClass(t, 'xgplayer-volume-large'),
                !o)
              )
                return
              var a = o.getBoundingClientRect().height || 76
              l.style.height = e.volume * a + 'px'
            }
          }, 50))
      }
      e.on('volumechange', g),
        e.once('destroy', function t() {
          e.off('canplay', s),
            e.off('volumeBarClick', u),
            e.off('volumeIconClick', p),
            e.off('volumeIconEnter', c),
            e.off('volumeIconLeave', d),
            e.off('volumechange', g),
            e.off('destroy', t),
            f && (clearTimeout(f), (f = null))
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('start', function() {
      var e = this,
        t = e.root,
        n = i.default.util
      function a() {
        if (n.hasClass(t, 'xgplayer-nostart')) {
          n.removeClass(t, 'xgplayer-nostart'),
            n.addClass(t, 'xgplayer-is-enter'),
            t.querySelector('video') || e.start()
          var a = e.play()
          void 0 !== a && a && a.catch(function(e) {})
        } else
          e.paused &&
            (n.removeClass(t, 'xgplayer-nostart xgplayer-isloading'),
            setTimeout(function() {
              var t = e.play()
              void 0 !== t && t && t.catch(function(e) {})
            }, 10))
      }
      e.on('startBtnClick', a),
        e.once('destroy', function t() {
          e.off('startBtnClick', a), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'screenShot',
      function() {
        var e = this,
          t = (e.root, e.config.screenShot)
        if (t) {
          var n = 0.92
          ;(t.quality || 0 === t.quality) && (n = t.quality)
          var a = void 0 === t.type ? 'image/png' : t.type,
            r = void 0 === t.format ? '.png' : t.format,
            i = document.createElement('canvas'),
            o = i.getContext('2d'),
            l = new Image()
          ;(i.width = this.config.width || 600),
            (i.height = this.config.height || 337.5)
          var s = function(e, t) {
            var n = document.createElement('a')
            ;(n.href = e), (n.download = t)
            var a = document.createEvent('MouseEvents')
            a.initMouseEvent(
              'click',
              !0,
              !1,
              window,
              0,
              0,
              0,
              0,
              0,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
              n.dispatchEvent(a)
          }
          e.on('screenShotBtnClick', u),
            e.once('destroy', function t() {
              e.off('screenShotBtnClick', u), e.off('destroy', t)
            })
        }
        function u() {
          var t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          ;(i.width = e.video.videoWidth || 600),
            (i.height = e.video.videoHeight || 337.5),
            (l.onload = (function() {
              o.drawImage(e.video, 0, 0, i.width, i.height),
                l.setAttribute('crossOrigin', 'anonymous'),
                (l.src = i.toDataURL(a, n).replace(a, 'image/octet-stream'))
              var u = l.src.replace(
                /^data:image\/[^;]+/,
                'data:application/octet-stream'
              )
              e.emit('screenShot', u), t && s(u, '截图' + r)
            })())
        }
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'rotate',
      function() {
        var e = this,
          t = e.config.rotate
        function n() {
          e.rotate(t.clockwise, t.innerRotate)
        }
        t &&
          (e.on('rotateBtnClick', n),
          e.once('destroy', function t() {
            e.off('rotateBtnClick', n), e.off('destroy', t)
          }))
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('replay', function() {
      var e = this,
        t = i.default.util,
        n = e.root
      function a() {
        t.removeClass(n, 'replay'), e.replay()
      }
      e.on('replayBtnClick', a),
        e.on('ended', function() {
          e.config.loop || t.addClass(n, 'replay')
        }),
        e.once('destroy', function t() {
          e.off('replayBtnClick', a), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('reload', function() {
      var e = this
      function t() {
        i.default.util.removeClass(e.root, 'xgplayer-is-error'),
          (e.src = e.config.url)
      }
      e.config.reload &&
        (e.on('reloadBtnClick', t),
        e.once('destroy', function n() {
          e.off('reloadBtnClick', t), e.off('destroy', n)
        }))
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'playNext',
      function() {
        var e = this,
          t = e.config.playNext
        function n() {
          e.currentVideoIndex + 1 < t.urlList.length &&
            (e.currentVideoIndex++,
            (e.video.autoplay = !0),
            (e.src = t.urlList[e.currentVideoIndex]),
            e.emit('playerNext', e.currentVideoIndex + 1),
            e.currentVideoIndex + 1 === t.urlList.length &&
              e.emit('urlListEnd'))
        }
        ;(e.currentVideoIndex = -1),
          e.on('playNextBtnClick', n),
          e.once('destroy', function t() {
            e.off('playNextBtnClick', n), e.off('destroy', t)
          })
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'play',
      function() {
        var e = this
        function t() {
          if (e.config.allowPlayAfterEnded || !e.ended)
            if (e.paused) {
              var t = e.play()
              void 0 !== t && t && t.catch(function(e) {})
            } else e.pause()
        }
        e.on('playBtnClick', t),
          e.once('destroy', function n() {
            e.off('playBtnClick', t), e.off('destroy', n)
          })
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('pip', function() {
      var e = this,
        t = i.default.util,
        n = e.root
      function a() {
        t.hasClass(n, 'xgplayer-pip-active') ? e.exitPIP() : e.getPIP()
      }
      e.on('pipBtnClick', a),
        e.once('destroy', function t() {
          e.off('pipBtnClick', a), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('pc', function() {
      var e = this,
        t = i.default.util,
        n = e.controls,
        a = e.root,
        r = 0,
        o = void 0
      function l() {
        clearTimeout(e.leavePlayerTimer), e.emit('focus', e)
      }
      function s() {
        e.config.closePlayerBlur ||
          (e.leavePlayerTimer = setTimeout(function() {
            e.emit('blur', e)
          }, e.config.leavePlayerTime || 0))
      }
      function u(t) {
        e.config.autoplay && e.start()
      }
      ;(e.onElementClick = function(e, n) {
        e.preventDefault(),
          this.config.closeVideoStopPropagation || e.stopPropagation()
        var a = this
        a.config.closeVideoClick ||
          (r++,
          o && clearTimeout(o),
          1 === r
            ? (o = setTimeout(function() {
                if (t.hasClass(a.root, 'xgplayer-nostart')) return !1
                if (!a.ended)
                  if (a.paused) {
                    var e = a.play()
                    void 0 !== e && e && e.catch(function(e) {})
                  } else a.pause()
                r = 0
              }, 200))
            : (r = 0))
      }),
        e.video.addEventListener(
          'click',
          function(t) {
            e.onElementClick(t, e.video)
          },
          !1
        ),
        (e.onElementDblclick = function(e, t) {
          e.preventDefault(), e.stopPropagation()
          if (!this.config.closeVideoDblclick) {
            var a = n.querySelector('.xgplayer-fullscreen')
            if (a) {
              var r = void 0
              document.createEvent
                ? (r = document.createEvent('Event')).initEvent('click', !0, !0)
                : (r = new Event('click')),
                a.dispatchEvent(r)
            }
          }
        }),
        e.video.addEventListener(
          'dblclick',
          function(t) {
            e.onElementDblclick(t, e.video)
          },
          !1
        ),
        a.addEventListener('mouseenter', l),
        a.addEventListener('mouseleave', s),
        n.addEventListener(
          'mouseenter',
          function(t) {
            e.userTimer && clearTimeout(e.userTimer)
          },
          !1
        ),
        n.addEventListener(
          'mouseleave',
          function(t) {
            e.config.closeControlsBlur || e.emit('focus', e)
          },
          !1
        ),
        e.once('ready', u),
        e.once('destroy', function t() {
          a.removeEventListener('mouseenter', l),
            a.removeEventListener('mouseleave', s),
            e.off('ready', u),
            e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('mobile', function() {
      var e = this,
        t = i.default.util,
        n = (e.controls, e.root)
      function a(t) {
        e.video.addEventListener('touchend', function(t) {
          e.onElementTouchend(t, e.video)
        }),
          e.video.addEventListener('touchstart', function() {
            e.isTouchMove = !1
          }),
          e.video.addEventListener('touchmove', function() {
            e.isTouchMove = !0
          }),
          e.config.autoplay && e.start()
      }
      ;(e.onElementTouchend = function(e, a) {
        e.preventDefault(), e.stopPropagation()
        if (
          (t.hasClass(n, 'xgplayer-inactive')
            ? this.emit('focus')
            : this.emit('blur'),
          !this.config.closeVideoTouch && !this.isTouchMove)
        ) {
          if (t.hasClass(this.root, 'xgplayer-nostart')) return !1
          if (!this.ended)
            if (this.paused) {
              var r = this.play()
              void 0 !== r && r && r.catch(function(e) {})
            } else this.pause()
        }
      }),
        e.once('ready', a),
        e.once('destroy', function t() {
          e.off('ready', a), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'memoryPlay',
      function() {
        var e = this
        e.on('memoryPlayStart', function(t) {
          e.currentTime = t
        })
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('localPreview', function() {
      var e = this,
        t = e.root
      function n(n) {
        e.uploadFile = n.files[0]
        var a = URL.createObjectURL(e.uploadFile)
        if (i.default.util.hasClass(t, 'xgplayer-nostart'))
          (e.config.url = a), e.start()
        else {
          e.src = a
          var r = e.play()
          void 0 !== r && r && r.catch(function(e) {})
        }
      }
      e.on('upload', n),
        e.once('destroy', function t() {
          e.off('upload', n), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'i18n',
      function() {
        var e = this,
          t = {},
          n = e.constructor.util
        ;(t.en = {
          HAVE_NOTHING:
            'There is no information on whether audio/video is ready',
          HAVE_METADATA: 'Audio/video metadata is ready ',
          HAVE_CURRENT_DATA:
            'Data about the current play location is available, but there is not enough data to play the next frame/millisecond',
          HAVE_FUTURE_DATA:
            'Current and at least one frame of data is available',
          HAVE_ENOUGH_DATA: 'The available data is sufficient to start playing',
          NETWORK_EMPTY: 'Audio/video has not been initialized',
          NETWORK_IDLE:
            'Audio/video is active and has been selected for resources, but no network is used',
          NETWORK_LOADING: 'The browser is downloading the data',
          NETWORK_NO_SOURCE: 'No audio/video source was found',
          MEDIA_ERR_ABORTED: 'The fetch process is aborted by the user',
          MEDIA_ERR_NETWORK: 'An error occurred while downloading',
          MEDIA_ERR_DECODE: 'An error occurred while decoding',
          MEDIA_ERR_SRC_NOT_SUPPORTED: 'Audio/video is not supported',
          REPLAY: 'Replay',
          ERROR: 'Network is offline',
          PLAY_TIPS: 'Play',
          PAUSE_TIPS: 'Pause',
          PLAYNEXT_TIPS: 'Play next',
          DOWNLOAD_TIPS: 'Download',
          ROTATE_TIPS: 'Rotate',
          RELOAD_TIPS: 'Reload',
          FULLSCREEN_TIPS: 'Fullscreen',
          EXITFULLSCREEN_TIPS: 'Exit fullscreen',
          CSSFULLSCREEN_TIPS: 'Cssfullscreen',
          EXITCSSFULLSCREEN_TIPS: 'Exit cssfullscreen',
          TEXTTRACK: 'Caption',
          PIP: 'Pip',
          SCREENSHOT: 'Screenshot',
          LIVE: 'LIVE',
          OFF: 'Off',
          PIP_DRAG: 'Click and hold to drag'
        }),
          (t['zh-cn'] = {
            HAVE_NOTHING: '没有关于音频/视频是否就绪的信息',
            HAVE_METADATA: '音频/视频的元数据已就绪',
            HAVE_CURRENT_DATA:
              '关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒',
            HAVE_FUTURE_DATA: '当前及至少下一帧的数据是可用的',
            HAVE_ENOUGH_DATA: '可用数据足以开始播放',
            NETWORK_EMPTY: '音频/视频尚未初始化',
            NETWORK_IDLE: '音频/视频是活动的且已选取资源，但并未使用网络',
            NETWORK_LOADING: '浏览器正在下载数据',
            NETWORK_NO_SOURCE: '未找到音频/视频来源',
            MEDIA_ERR_ABORTED: '取回过程被用户中止',
            MEDIA_ERR_NETWORK: '当下载时发生错误',
            MEDIA_ERR_DECODE: '当解码时发生错误',
            MEDIA_ERR_SRC_NOT_SUPPORTED: '不支持的音频/视频格式',
            REPLAY: '重播',
            ERROR: '网络连接似乎出现了问题',
            PLAY_TIPS: '播放',
            PAUSE_TIPS: '暂停',
            PLAYNEXT_TIPS: '下一集',
            DOWNLOAD_TIPS: '下载',
            ROTATE_TIPS: '旋转',
            RELOAD_TIPS: '重新载入',
            FULLSCREEN_TIPS: '进入全屏',
            EXITFULLSCREEN_TIPS: '退出全屏',
            CSSFULLSCREEN_TIPS: '进入样式全屏',
            EXITCSSFULLSCREEN_TIPS: '退出样式全屏',
            TEXTTRACK: '字幕',
            PIP: '画中画',
            SCREENSHOT: '截图',
            LIVE: '正在直播',
            OFF: '关闭',
            PIP_DRAG: '点击按住可拖动视频'
          }),
          (t['zh-hk'] = {
            HAVE_NOTHING: '沒有關於音頻/視頻是否就緒的信息',
            HAVE_METADATA: '音頻/視頻的元數據已就緒',
            HAVE_CURRENT_DATA:
              '關於當前播放位置的數據是可用的，但沒有足夠的數據來播放下壹幀/毫秒',
            HAVE_FUTURE_DATA: '當前及至少下壹幀的數據是可用的',
            HAVE_ENOUGH_DATA: '可用數據足以開始播放',
            NETWORK_EMPTY: '音頻/視頻尚未初始化',
            NETWORK_IDLE: '音頻/視頻是活動的且已選取資源，但並未使用網絡',
            NETWORK_LOADING: '瀏覽器正在下載數據',
            NETWORK_NO_SOURCE: '未找到音頻/視頻來源',
            MEDIA_ERR_ABORTED: '取回過程被用戶中止',
            MEDIA_ERR_NETWORK: '當下載時發生錯誤',
            MEDIA_ERR_DECODE: '當解碼時發生錯誤',
            MEDIA_ERR_SRC_NOT_SUPPORTED: '不支持的音頻/視頻格式',
            REPLAY: '重播',
            ERROR: '網絡連接似乎出現了問題',
            PLAY_TIPS: '播放',
            PAUSE_TIPS: '暫停',
            PLAYNEXT_TIPS: '下壹集',
            DOWNLOAD_TIPS: '下載',
            ROTATE_TIPS: '旋轉',
            RELOAD_TIPS: '重新載入',
            FULLSCREEN_TIPS: '進入全屏',
            EXITFULLSCREEN_TIPS: '退出全屏',
            CSSFULLSCREEN_TIPS: '進入樣式全屏',
            EXITCSSFULLSCREEN_TIPS: '退出樣式全屏',
            TEXTTRACK: '字幕',
            PIP: '畫中畫',
            SCREENSHOT: '截圖',
            LIVE: '正在直播',
            OFF: '關閉',
            PIP_DRAG: '點擊按住可拖動視頻'
          }),
          (t.jp = {
            HAVE_NOTHING: 'オーディオ/ビデオが準備できているか情報がありません',
            HAVE_METADATA: 'オーディオ/ビデオのメタデータは準備できています',
            HAVE_CURRENT_DATA:
              '現在の再生位置に関するデータは利用可能ですが、次のフレーム/ミリ秒を再生するのに十分なデータがありません',
            HAVE_FUTURE_DATA:
              '現在、少なくとも次のフレームのデータが利用可能です',
            HAVE_ENOUGH_DATA: '利用可能なデータは再生を開始するのに十分です',
            NETWORK_EMPTY: 'オーディオ/ビデオが初期化されていません',
            NETWORK_IDLE:
              'オーディオ/ビデオはアクティブでリソースが選択されていますが、ネットワークが使用されていません',
            NETWORK_LOADING: 'ブラウザーはデータをダウンロードしています',
            NETWORK_NO_SOURCE: 'オーディオ/ビデオ のソースが見つかりません',
            MEDIA_ERR_ABORTED:
              'ユーザーによってフェッチプロセスが中止されました',
            MEDIA_ERR_NETWORK: 'ダウンロード中にエラーが発生しました',
            MEDIA_ERR_DECODE: 'デコード中にエラーが発生しました',
            MEDIA_ERR_SRC_NOT_SUPPORTED:
              'オーディオ/ビデオ の形式がサポートされていません',
            REPLAY: 'リプレイ',
            ERROR: 'ネットワークの接続に問題が発生しました',
            PLAY_TIPS: 'プレイ',
            PAUSE_TIPS: '一時停止',
            PLAYNEXT_TIPS: '次をプレイ',
            DOWNLOAD_TIPS: 'ダウンロード',
            ROTATE_TIPS: '回転',
            RELOAD_TIPS: '再読み込み',
            FULLSCREEN_TIPS: 'フルスクリーン',
            EXITFULLSCREEN_TIPS: 'フルスクリーンを終了',
            CSSFULLSCREEN_TIPS: 'シアターモード',
            EXITCSSFULLSCREEN_TIPS: 'シアターモードを終了',
            TEXTTRACK: '字幕',
            PIP: 'ミニプレーヤー',
            SCREENSHOT: 'スクリーンショット',
            LIVE: '生放送',
            OFF: 'オフ',
            PIP_DRAG: 'ボタンを押して働画をドラッグする'
          }),
          Object.defineProperty(e, 'lang', {
            get: function() {
              return (e.config && t[e.config.lang]) || t.en
            },
            set: function(e) {
              'Object' === n.typeOf(e) &&
                Object.keys(e).forEach(function(n) {
                  t[n] = e[n]
                })
            }
          })
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('fullscreen', function() {
      var e = this,
        t = e.root,
        n = i.default.util
      function a() {
        e.config.rotateFullscreen
          ? n.hasClass(t, 'xgplayer-rotate-fullscreen')
            ? e.exitRotateFullscreen()
            : e.getRotateFullscreen()
          : n.hasClass(t, 'xgplayer-is-fullscreen')
            ? e.exitFullscreen(t)
            : e.getFullscreen(t)
      }
      function r() {
        var a =
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
        a && a === t
          ? (n.addClass(t, 'xgplayer-is-fullscreen'),
            e.emit('requestFullscreen'))
          : n.hasClass(t, 'xgplayer-is-fullscreen') &&
            (n.removeClass(t, 'xgplayer-is-fullscreen'),
            e.emit('exitFullscreen')),
          e.danmu && 'function' == typeof e.danmu.resize && e.danmu.resize()
      }
      e.on('fullscreenBtnClick', a),
        [
          'fullscreenchange',
          'webkitfullscreenchange',
          'mozfullscreenchange',
          'MSFullscreenChange'
        ].forEach(function(e) {
          document.addEventListener(e, r)
        }),
        e.once('destroy', function t() {
          e.off('fullscreenBtnClick', a),
            [
              'fullscreenchange',
              'webkitfullscreenchange',
              'mozfullscreenchange',
              'MSFullscreenChange'
            ].forEach(function(e) {
              document.removeEventListener(e, r)
            }),
            e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    var o = { maxCount: 3, backupUrl: '', isFetch: !0, fetchTimeout: 100 }
    i.default.install('errorretry', function() {
      var e = this,
        t = this
      if (t.config.errorConfig && !(t.src.indexOf('blob:') > -1)) {
        var n = {},
          a = t.config.errorConfig
        for (var r in o) void 0 === a[r] ? (n[r] = o[r]) : (n[r] = a[r])
        t.retryData = {
          count: 0,
          errfTimer: null,
          isFetchReturn: !1,
          currentTime: 0
        }
        var l = t._onError
        t._onError = function(a) {
          var r = e.retryData.count
          if (r > n.maxCount)
            n.isFetch
              ? (function(e, t, n) {
                  var a = function(t, n) {
                    e.retryData.isFetchReturn ||
                      ((e.retryData.isFetchReturn = !0), t(n))
                  }
                  return new Promise(function(r, i) {
                    try {
                      var o = new window.XMLHttpRequest()
                      o.open('get', t),
                        (o.onload = function() {
                          a(r, {
                            status: o.status,
                            statusText: o.statusText,
                            xhr: o
                          })
                        }),
                        (o.onerror = function() {
                          a(r, {
                            status: o.status,
                            statusText:
                              o.statusText ||
                              'The network environment is disconnected or the address is invalid',
                            xhr: o
                          })
                        }),
                        (o.onabort = function() {}),
                        (e.retryData.errfTimer = window.setTimeout(function() {
                          var t = e.retryData.errfTimer
                          window.clearTimeout(t),
                            (e.retryData.errfTimer = null),
                            a(r, { status: -1, statusText: 'request timeout' })
                        }, n)),
                        o.send()
                    } catch (t) {
                      ;(e.retryData.isFetchReturn = !0),
                        a(r, { status: -2, statusText: 'request error' })
                    }
                  })
                })(e, e.currentSrc, n.fetchTimeout).then(function(t) {
                  e.emit(
                    'error',
                    new i.default.Errors({
                      type: 'network',
                      currentTime: e.currentTime,
                      duration: e.duration || 0,
                      networkState: e.networkState,
                      readyState: e.readyState,
                      currentSrc: e.currentSrc,
                      src: e.src,
                      ended: e.ended,
                      httpCode: t.status,
                      httpMsg: t.statusText,
                      errd: {
                        line: 101,
                        msg: e.error,
                        handle: 'plugin errorRetry'
                      },
                      errorCode: e.video && e.video.error.code,
                      mediaError: e.video && e.video.error
                    })
                  ),
                    l.call(e, t)
                })
              : l.call(e, a)
          else {
            0 === r &&
              ((e.retryData.currentTime = e.currentTime),
              e.once('canplay', s.bind(e)))
            var o = ''
            ;(o =
              n.count < 2
                ? n.backupUrl
                  ? n.backupUrl
                  : t.currentSrc
                : n.backupUrl && r > 1
                  ? n.backupUrl
                  : t.currentSrc),
              e.retryData.count++,
              (e.src = o)
          }
        }
      }
      function s() {
        ;(this.currentTime = this.retryData.currentTime),
          this.play(),
          (this.retryData.retryCode = 0),
          (this.retryData.isFetchReturn = !1),
          (this.retryData.currentTime = 0)
      }
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'download',
      function() {
        var e = this
        function t() {
          e.download()
        }
        e.on('downloadBtnClick', t),
          e.once('destroy', function n() {
            e.off('downloadBtnClick', t), e.off('destroy', n)
          })
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0)
    ;((a = r) && a.__esModule ? a : { default: a }).default.install(
      'definition',
      function() {
        var e = this
        e.root
        e.once('destroy', function t() {
          e.off('destroy', t)
        })
      }
    )
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('danmu', function() {
      var e = this,
        t = (e.root, i.default.util)
      e.on('initDefaultDanmu', function(n) {
        var a = e.root.querySelector('xg-danmu')
        if (
          (t.addClass(a, 'xgplayer-has-danmu'), !e.config.danmu.closeDefaultBtn)
        ) {
          var r = function() {
              n.start()
            },
            i = function() {
              t.hasClass(e.danmuBtn, 'danmu-switch-active') && n.pause()
            },
            o = function() {
              t.hasClass(e.danmuBtn, 'danmu-switch-active') && n.play()
            },
            l = function() {
              t.hasClass(e.danmuBtn, 'danmu-switch-active') &&
                (n.stop(), n.start())
            }
          ;(e.danmuBtn = t.copyDom(n.bulletBtn.createSwitch(!0))),
            e.controls.appendChild(e.danmuBtn),
            ['click', 'touchend'].forEach(function(i) {
              e.danmuBtn.addEventListener(i, function(i) {
                i.preventDefault(),
                  i.stopPropagation(),
                  t.toggleClass(e.danmuBtn, 'danmu-switch-active'),
                  t.hasClass(e.danmuBtn, 'danmu-switch-active')
                    ? (e.emit('danmuBtnOn'),
                      t.addClass(a, 'xgplayer-has-danmu'),
                      e.once('timeupdate', r))
                    : (e.emit('danmuBtnOff'),
                      t.removeClass(a, 'xgplayer-has-danmu'),
                      n.stop())
              })
            }),
            e.onElementClick &&
              a.addEventListener(
                'click',
                function(t) {
                  e.onElementClick(t, a)
                },
                !1
              ),
            e.onElementDblclick &&
              a.addEventListener(
                'dblclick',
                function(t) {
                  e.onElementDblclick(t, a)
                },
                !1
              ),
            e.on('pause', i),
            e.on('play', o),
            e.on('seeked', l),
            e.once('destroy', function t() {
              e.off('timeupdate', r),
                e.off('pause', i),
                e.off('play', o),
                e.off('seeked', l),
                e.off('destroy', t)
            })
        }
      })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('cssFullscreen', function() {
      var e = this,
        t = e.root,
        n = i.default.util
      function a() {
        n.hasClass(t, 'xgplayer-is-cssfullscreen')
          ? e.exitCssFullscreen()
          : e.getCssFullscreen()
      }
      e.on('cssFullscreenBtnClick', a),
        e.on('exitFullscreen', function() {
          n.removeClass(t, 'xgplayer-is-cssfullscreen')
        }),
        e.once('destroy', function t() {
          e.off('cssFullscreenBtnClick', a), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    n(58),
      n(63),
      n(64),
      n(67),
      n(70),
      n(71),
      n(72),
      n(75),
      n(78),
      n(82),
      n(83),
      n(85),
      n(86),
      n(87),
      n(89),
      n(90),
      n(91),
      n(93),
      n(97),
      n(98),
      n(100),
      n(102),
      n(104),
      n(105),
      n(106),
      n(107),
      n(108)
  },
  function(e, t, n) {
    var a = n(59)
    'string' == typeof a && (a = [[e.i, a, '']])
    var r = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(61)(a, r)
    a.locals && (e.exports = a.locals)
  },
  function(e, t, n) {
    ;(e.exports = n(60)(!1)).push([
      e.i,
      '.xgplayer-skin-default{background:#000;width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer-skin-default *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer-skin-default.xgplayer-rotate-fullscreen{position:absolute;top:0;left:100%;bottom:0;right:0;height:100vw!important;width:100vh!important;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.xgplayer-skin-default.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer-skin-default.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer-skin-default video{width:100%;height:100%;outline:none}.xgplayer-skin-default .xgplayer-none{display:none}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}.xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:40px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:rgba(0,0,0,.38);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:115;margin:-35px auto auto -35px;cursor:pointer}.xgplayer-skin-default .xgplayer-start div{position:absolute}.xgplayer-skin-default .xgplayer-start div svg{fill:hsla(0,0%,100%,.7)}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-start:hover{opacity:.85}.xgplayer-skin-default.xgplayer-playing .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start{display:inline-block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.replay .xgplayer-start,.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default.replay .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.replay .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:#000;z-index:120}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner{display:block;position:absolute;left:50%;top:50%;height:100px;width:100px;position:relative;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div{width:12%;height:26%;background-color:hsla(0,0%,100%,.7);position:absolute;left:44%;top:37%;opacity:0;border-radius:30px;-webkit-animation:fade 1s linear infinite;animation:fade 1s linear infinite}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar1{-webkit-transform:rotate(0deg) translateY(-142%);-ms-transform:rotate(0deg) translateY(-142%);transform:rotate(0deg) translateY(-142%);-webkit-animation-delay:0s;animation-delay:0s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar2{-webkit-transform:rotate(30deg) translateY(-142%);-ms-transform:rotate(30deg) translateY(-142%);transform:rotate(30deg) translateY(-142%);-webkit-animation-delay:-.9163s;animation-delay:-.9163s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar3{-webkit-transform:rotate(60deg) translateY(-142%);-ms-transform:rotate(60deg) translateY(-142%);transform:rotate(60deg) translateY(-142%);-webkit-animation-delay:-.833s;animation-delay:-.833s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar4{-webkit-transform:rotate(90deg) translateY(-142%);-ms-transform:rotate(90deg) translateY(-142%);transform:rotate(90deg) translateY(-142%);-webkit-animation-delay:-.7497s;animation-delay:-.7497s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar5{-webkit-transform:rotate(120deg) translateY(-142%);-ms-transform:rotate(120deg) translateY(-142%);transform:rotate(120deg) translateY(-142%);-webkit-animation-delay:-.6664s;animation-delay:-.6664s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar6{-webkit-transform:rotate(150deg) translateY(-142%);-ms-transform:rotate(150deg) translateY(-142%);transform:rotate(150deg) translateY(-142%);-webkit-animation-delay:-.5831s;animation-delay:-.5831s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar7{-webkit-transform:rotate(180deg) translateY(-142%);-ms-transform:rotate(180deg) translateY(-142%);transform:rotate(180deg) translateY(-142%);-webkit-animation-delay:-.4998s;animation-delay:-.4998s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar8{-webkit-transform:rotate(210deg) translateY(-142%);-ms-transform:rotate(210deg) translateY(-142%);transform:rotate(210deg) translateY(-142%);-webkit-animation-delay:-.4165s;animation-delay:-.4165s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar9{-webkit-transform:rotate(240deg) translateY(-142%);-ms-transform:rotate(240deg) translateY(-142%);transform:rotate(240deg) translateY(-142%);-webkit-animation-delay:-.3332s;animation-delay:-.3332s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar10{-webkit-transform:rotate(270deg) translateY(-142%);-ms-transform:rotate(270deg) translateY(-142%);transform:rotate(270deg) translateY(-142%);-webkit-animation-delay:-.2499s;animation-delay:-.2499s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar11{-webkit-transform:rotate(300deg) translateY(-142%);-ms-transform:rotate(300deg) translateY(-142%);transform:rotate(300deg) translateY(-142%);-webkit-animation-delay:-.1666s;animation-delay:-.1666s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar12{-webkit-transform:rotate(330deg) translateY(-142%);-ms-transform:rotate(330deg) translateY(-142%);transform:rotate(330deg) translateY(-142%);-webkit-animation-delay:-.0833s;animation-delay:-.0833s}@-webkit-keyframes fade{0%{opacity:1}to{opacity:.25}}@keyframes fade{0%{opacity:1}to{opacity:.25}}.xgplayer-skin-default.xgplayer-is-enter .xgplayer-enter{display:block}.xgplayer-skin-default .xgplayer-poster{display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-skin-default.xgplayer-nostart .xgplayer-poster{display:block}.xgplayer-skin-default .xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}.xgplayer-skin-default .xgplayer-fullscreen,.xgplayer-skin-default .xgplayer-fullscreen-img{position:relative;-webkit-order:13;-moz-box-ordinal-group:14;order:13;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img:hover,.xgplayer-skin-default .xgplayer-fullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-fullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen,.xgplayer-skin-default .xgplayer-cssfullscreen-img{position:relative;-webkit-order:12;-moz-box-ordinal-group:13;order:12;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon{width:32px;margin-top:5px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover,.xgplayer-skin-default .xgplayer-cssfullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-47px}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen-img{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.lang-is-en .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-en .xgplayer-cssfullscreen .xgplayer-tips,.lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-46px}.lang-is-jp .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-120px}.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-60px}.xgplayer-skin-default .xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:40px;height:40px;display:block;position:relative;z-index:18}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:none}.xgplayer-skin-default .xgplayer-slider{display:none;position:absolute;width:28px;height:92px;background:rgba(0,0,0,.54);border-radius:1px;bottom:42px;outline:none}.xgplayer-skin-default .xgplayer-slider:after{content:" ";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-skin-default .xgplayer-bar,.xgplayer-skin-default .xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-skin-default .xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-skin-default .xgplayer-drag:after{content:" ";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-skin-default.xgplayer-volume-active .xgplayer-slider,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:none}.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:block}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-large,.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:none}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:block}.xgplayer-skin-default.xgplayer-mobile .xgplayer-volume .xgplayer-slider{display:none}.xgplayer-skin-default .xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:42px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-7px}.xgplayer-skin-default .xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:42px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-skin-default .xgplayer-definition ul li.selected,.xgplayer-skin-default .xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:5px;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-definition ul,.xgplayer-skin-default.xgplayer-is-definition .xgplayer-definition{display:block}.xgplayer-skin-default .xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;height:40px;text-align:center;display:inline-block;margin:auto 8px}.xgplayer-skin-default .xgplayer-time span{color:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current{color:#fff}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current:after{content:"/";display:inline-block;padding:0 3px}.xgplayer-skin-default .xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.75),rgba(0,0,0,.75));z-index:10}.xgplayer-skin-default.no-controls .xgplayer-controls,.xgplayer-skin-default.xgplayer-inactive .xgplayer-controls,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-progress,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-time,.xgplayer-skin-default.xgplayer-nostart .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-live{display:block}.xgplayer-skin-default .xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer-skin-default .xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-50px auto auto -50px}.xgplayer-skin-default .xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-skin-default .xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-skin-default.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-loading{display:none!important}.xgplayer-skin-default.xgplayer-isloading .xgplayer-loading{display:block}.xgplayer-skin-default .xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:12px;right:12px;outline:none;top:-15px;z-index:35}.xgplayer-skin-default .xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-skin-default .xgplayer-progress-cache,.xgplayer-skin-default .xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-skin-default .xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-skin-default .xgplayer-progress-btn{display:none;position:absolute;left:0;top:-5px;width:13px;height:13px;border-radius:30px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26);left:100%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}.xgplayer-skin-default .xgplayer-progress-point{position:absolute}.xgplayer-skin-default .xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-skin-default .xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-skin-default .xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;left:0;top:-40px;height:auto;line-height:30px;width:auto;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-skin-default .xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-skin-default .xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-skin-default .xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-btn{display:block;top:-3px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress-btn{display:block!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px!important;margin-top:8.5px!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-btn{display:block!important;top:-5px!important}.xgplayer-skin-default .xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:105;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.xgplayer-skin-default .xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-skin-default .xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-skin-default .xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-skin-default .xgplayer-replay svg:hover path{fill:#fff}.xgplayer-skin-default .xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:20px;z-index:18;position:relative;display:inline-block;cursor:default}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:20px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{height:20px;position:relative;top:11px;text-align:center;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}.xgplayer-skin-default .xgplayer-download{position:relative;-webkit-order:9;-moz-box-ordinal-group:10;order:9;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-download .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-download .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-download .xgplayer-icon svg{position:relative;top:5px;left:5px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips{margin-left:-20px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips .xgplayer-tip-download{display:block}.xgplayer-skin-default .xgplayer-download:hover{opacity:.85}.xgplayer-skin-default .xgplayer-download:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-download .xgplayer-tips{margin-left:-32px}.lang-is-jp .xgplayer-download .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26}.xgplayer-skin-default .xgplayer-danmu{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none}.xgplayer-skin-default .xgplayer-danmu>*{position:absolute;white-space:nowrap;z-index:9}.xgplayer-skin-default .xgplayer-danmu.xgplayer-has-danmu{display:block}.xgplayer-skin-default .xgplayer-panel{outline:none;-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:40px;height:40px;display:inline-block;position:relative;font-family:PingFangSC-Regular;font-size:13px;color:hsla(0,0%,100%,.8);z-index:36}.xgplayer-skin-default .xgplayer-panel .xgplayer-panel-icon{cursor:pointer;position:absolute;margin-left:5px;top:10px}.xgplayer-skin-default .xgplayer-panel-active{display:block!important;bottom:30px}.xgplayer-skin-default .xgplayer-panel-slider{z-index:36;display:none;position:absolute;width:230px;height:230px;background:rgba(0,0,0,.54);border-radius:1px;padding:10px 20px;outline:none;left:-115px;bottom:40px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode{padding-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-radio li{display:inline;list-style:none;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode ul{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode li{margin:0 12px;font-size:11px;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-font{margin-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency{display:block;margin-top:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-progress{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:4px;border-radius:4px;background:linear-gradient(90deg,#f85959,#f85959 100%,#aaa)}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea{display:block;margin-top:8px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-threequarters,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-twoquarters{margin-left:-6px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-full{margin-right:3px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-full-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-onequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-threequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-twoquarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-zero-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-playnext{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;cursor:pointer;top:-2px}.xgplayer-skin-default .xgplayer-playnext .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-playnext .xgplayer-tips .xgplayer-tip-playnext{display:block}.xgplayer-skin-default .xgplayer-playnext:hover{opacity:.85}.xgplayer-skin-default .xgplayer-playnext:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-playnext .xgplayer-tips{margin-left:-25px}.lang-is-jp .xgplayer-playnext .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default.xgplayer-playnext-inactive .xgplayer-playnext{display:none}.xgplayer-skin-default .xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:8px}.xgplayer-skin-default .xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-pip-lay{position:absolute;top:26px;left:0;width:100%;height:100%;z-index:130;cursor:pointer;background-color:transparent;display:none}.xgplayer-skin-default .xgplayer-pip-lay div{width:100%;height:100%}.xgplayer-skin-default .xgplayer-pip-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:130;display:none}.xgplayer-skin-default.xgplayer-pip-active{position:fixed;right:0;bottom:200px;width:320px!important;height:180px!important;z-index:110!important}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-controls,.xgplayer-skin-default.xgplayer-pip-active .xgplayer-danmu{display:none}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-pip-lay{display:block}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-pip-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default.xgplayer-inactive .xgplayer-pip-drag{display:none}.lang-is-jp .xgplayer-pip .name span{width:70px;height:20px}.xgplayer-skin-default .xgplayer-rotate{position:relative;-webkit-order:10;-moz-box-ordinal-group:11;order:10;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips .xgplayer-tip-rotate{display:block}.xgplayer-skin-default .xgplayer-rotate:hover{opacity:.85}.xgplayer-skin-default .xgplayer-rotate:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-rotate .xgplayer-tips{margin-left:-26px}.lang-is-jp .xgplayer-rotate .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-reload{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;width:40px;height:40px;cursor:pointer}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips .xgplayer-tip-reload{display:block}.xgplayer-skin-default .xgplayer-reload:hover{opacity:.85}.xgplayer-skin-default .xgplayer-reload:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-reload .xgplayer-tips{margin-left:-26px}.lang-is-jp .xgplayer-reload .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-screenshot{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:8px}.xgplayer-skin-default .xgplayer-screenshot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-screenshot .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.lang-is-en .xgplayer-screenshot .name span,.lang-is-jp .xgplayer-screenshot .name span{width:75px;height:20px}.xgplayer-skin-default .xgplayer-texttrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-texttrack ul{display:none;list-style:none;min-width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;text-align:center;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-texttrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto;padding:6px 13px}.xgplayer-skin-default .xgplayer-texttrack ul li.selected,.xgplayer-skin-default .xgplayer-texttrack ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-texttrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-is-texttrack .xgplayer-texttrack,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-texttrack ul{display:block}.xgplayer-skin-default .xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-skin-default .xgplayer-icon svg{position:absolute}.xgplayer-skin-default .xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-skin-default.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-skin-default .xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:125;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-skin-default .xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-skin-default .xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-skin-default.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default .xgplayer-memoryplay-spot{position:absolute;height:32px;left:10px;bottom:46px;background:rgba(0,0,0,.5);border-radius:32px;line-height:32px;color:#ddd;z-index:15;padding:0 32px 0 16px}.xgplayer-skin-default .xgplayer-memoryplay-spot .xgplayer-lasttime{color:red;font-weight:700}.xgplayer-skin-default .xgplayer-memoryplay-spot .btn-close{position:absolute;width:16px;height:16px;right:10px;top:2px;cursor:pointer;color:#fff;font-size:16px}.xgplayer-skin-default .xgplayer-waterMarker{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;right:10px;top:10px;height:10%;z-index:10;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-flex-direction:row-reverse;-moz-box-orient:horizontal;-moz-box-direction:reverse;flex-direction:row-reverse;opacity:.3}.xgplayer-skin-default .xgplayer-waterMarker .xgplayer-waterMarkerImg{max-height:100%}.xgplayer-skin-default .xgplayer-waterMarker .xgplayer-waterMarkerUID{color:#ddd;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer-skin-default.xgplayer-nostart .xgplayer-waterMarker{display:None}',
      ''
    ])
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      var t = []
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || '',
                a = e[3]
              if (!a) return n
              if (t && 'function' == typeof btoa) {
                var r = ((o = a),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                    ' */'),
                  i = a.sources.map(function(e) {
                    return '/*# sourceURL=' + a.sourceRoot + e + ' */'
                  })
                return [n]
                  .concat(i)
                  .concat([r])
                  .join('\n')
              }
              var o
              return [n].join('\n')
            })(t, e)
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n
          }).join('')
        }),
        (t.i = function(e, n) {
          'string' == typeof e && (e = [[null, e, '']])
          for (var a = {}, r = 0; r < this.length; r++) {
            var i = this[r][0]
            'number' == typeof i && (a[i] = !0)
          }
          for (r = 0; r < e.length; r++) {
            var o = e[r]
            ;('number' == typeof o[0] && a[o[0]]) ||
              (n && !o[2]
                ? (o[2] = n)
                : n && (o[2] = '(' + o[2] + ') and (' + n + ')'),
              t.push(o))
          }
        }),
        t
      )
    }
  },
  function(e, t, n) {
    var a,
      r,
      i = {},
      o = ((a = function() {
        return window && document && document.all && !window.atob
      }),
      function() {
        return void 0 === r && (r = a.apply(this, arguments)), r
      }),
      l = function(e) {
        return document.querySelector(e)
      },
      s = (function(e) {
        var t = {}
        return function(e) {
          if ('function' == typeof e) return e()
          if (void 0 === t[e]) {
            var n = l.call(this, e)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (e) {
                n = null
              }
            t[e] = n
          }
          return t[e]
        }
      })(),
      u = null,
      p = 0,
      c = [],
      d = n(62)
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n],
          r = i[a.id]
        if (r) {
          r.refs++
          for (var o = 0; o < r.parts.length; o++) r.parts[o](a.parts[o])
          for (; o < a.parts.length; o++) r.parts.push(v(a.parts[o], t))
        } else {
          var l = []
          for (o = 0; o < a.parts.length; o++) l.push(v(a.parts[o], t))
          i[a.id] = { id: a.id, refs: 1, parts: l }
        }
      }
    }
    function g(e, t) {
      for (var n = [], a = {}, r = 0; r < e.length; r++) {
        var i = e[r],
          o = t.base ? i[0] + t.base : i[0],
          l = { css: i[1], media: i[2], sourceMap: i[3] }
        a[o] ? a[o].parts.push(l) : n.push((a[o] = { id: o, parts: [l] }))
      }
      return n
    }
    function y(e, t) {
      var n = s(e.insertInto)
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        )
      var a = c[c.length - 1]
      if ('top' === e.insertAt)
        a
          ? a.nextSibling
            ? n.insertBefore(t, a.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          c.push(t)
      else if ('bottom' === e.insertAt) n.appendChild(t)
      else {
        if ('object' != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          )
        var r = s(e.insertInto + ' ' + e.insertAt.before)
        n.insertBefore(t, r)
      }
    }
    function h(e) {
      if (null === e.parentNode) return !1
      e.parentNode.removeChild(e)
      var t = c.indexOf(e)
      t >= 0 && c.splice(t, 1)
    }
    function x(e) {
      var t = document.createElement('style')
      return (e.attrs.type = 'text/css'), m(t, e.attrs), y(e, t), t
    }
    function m(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n])
      })
    }
    function v(e, t) {
      var n, a, r, i
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function() {}
        e.css = i
      }
      if (t.singleton) {
        var o = p++
        ;(n = u || (u = x(t))),
          (a = w.bind(null, n, o, !1)),
          (r = w.bind(null, n, o, !0))
      } else
        e.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement('link')
              return (
                (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                m(t, e.attrs),
                y(e, t),
                t
              )
            })(t)),
            (a = C.bind(null, n, t)),
            (r = function() {
              h(n), n.href && URL.revokeObjectURL(n.href)
            }))
          : ((n = x(t)),
            (a = E.bind(null, n)),
            (r = function() {
              h(n)
            }))
      return (
        a(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return
            a((e = t))
          } else r()
        }
      )
    }
    e.exports = function(e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        )
      ;((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = o()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom')
      var n = g(e, t)
      return (
        f(n, t),
        function(e) {
          for (var a = [], r = 0; r < n.length; r++) {
            var o = n[r]
            ;(l = i[o.id]).refs--, a.push(l)
          }
          e && f(g(e, t), t)
          for (r = 0; r < a.length; r++) {
            var l
            if (0 === (l = a[r]).refs) {
              for (var s = 0; s < l.parts.length; s++) l.parts[s]()
              delete i[l.id]
            }
          }
        }
      )
    }
    var b,
      k = ((b = []),
      function(e, t) {
        return (b[e] = t), b.filter(Boolean).join('\n')
      })
    function w(e, t, n, a) {
      var r = n ? '' : a.css
      if (e.styleSheet) e.styleSheet.cssText = k(t, r)
      else {
        var i = document.createTextNode(r),
          o = e.childNodes
        o[t] && e.removeChild(o[t]),
          o.length ? e.insertBefore(i, o[t]) : e.appendChild(i)
      }
    }
    function E(e, t) {
      var n = t.css,
        a = t.media
      if ((a && e.setAttribute('media', a), e.styleSheet))
        e.styleSheet.cssText = n
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild)
        e.appendChild(document.createTextNode(n))
      }
    }
    function C(e, t, n) {
      var a = n.css,
        r = n.sourceMap,
        i = void 0 === t.convertToAbsoluteUrls && r
      ;(t.convertToAbsoluteUrls || i) && (a = d(a)),
        r &&
          (a +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
            ' */')
      var o = new Blob([a], { type: 'text/css' }),
        l = e.href
      ;(e.href = URL.createObjectURL(o)), l && URL.revokeObjectURL(l)
    }
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      var t = 'undefined' != typeof window && window.location
      if (!t) throw new Error('fixUrls requires window.location')
      if (!e || 'string' != typeof e) return e
      var n = t.protocol + '//' + t.host,
        a = n + t.pathname.replace(/\/[^\/]*$/, '/')
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var r,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t
              })
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? e
            : ((r =
                0 === i.indexOf('//')
                  ? i
                  : 0 === i.indexOf('/')
                    ? n + i
                    : a + i.replace(/^\.\//, '')),
              'url(' + JSON.stringify(r) + ')')
        }
      )
    }
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_enter', function() {
      for (var e = this.root, t = i.default.util, n = '', a = 1; a <= 12; a++)
        n += '<div class="xgplayer-enter-bar' + a + '"></div>'
      var r = t.createDom(
        'xg-enter',
        '<div class="xgplayer-enter-spinner">\n                                                  ' +
          n +
          '\n                                                </div>',
        {},
        'xgplayer-enter'
      )
      e.appendChild(r)
    })
  },
  function(e, t, n) {
    'use strict'
    var a = o(n(0)),
      r = o(n(65)),
      i = o(n(66))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_play', function() {
      var e = this,
        t = a.default.util,
        n = e.config.playBtn ? e.config.playBtn : {},
        o = void 0
      o =
        'img' === n.type
          ? t.createImgBtn('play', n.url.play, n.width, n.height)
          : t.createDom(
              'xg-play',
              '<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play">' +
                r.default +
                '</div>\n                                      <div class="xgplayer-icon-pause">' +
                i.default +
                '</div>\n                                     </xg-icon>',
              {},
              'xgplayer-play'
            )
      var l = {}
      ;(l.play = e.lang.PLAY_TIPS), (l.pause = e.lang.PAUSE_TIPS)
      var s = t.createDom(
        'xg-tips',
        '<span class="xgplayer-tip-play">' +
          l.play +
          '</span>\n                                        <span class="xgplayer-tip-pause">' +
          l.pause +
          '</span>',
        {},
        'xgplayer-tips'
      )
      o.appendChild(s),
        e.once('ready', function() {
          e.controls.appendChild(o)
        }),
        ['click', 'touchend'].forEach(function(t) {
          o.addEventListener(t, function(t) {
            t.preventDefault(), t.stopPropagation(), e.emit('playBtnClick')
          })
        })
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a = o(n(0)),
      r = o(n(68)),
      i = o(n(69))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_start', function() {
      var e = this,
        t = e.root,
        n = a.default.util,
        o = n.createDom(
          'xg-start',
          '<div class="xgplayer-icon-play">' +
            r.default +
            '</div>\n                                      <div class="xgplayer-icon-pause">' +
            i.default +
            '</div>',
          {},
          'xgplayer-start'
        )
      function l(e) {
        n.addClass(e.root, 'xgplayer-skin-default'),
          e.config &&
            (e.config.autoplay &&
              !n.isWeiXin() &&
              !n.isUc() &&
              n.addClass(e.root, 'xgplayer-is-enter'),
            e.config.lang && 'en' === e.config.lang
              ? n.addClass(e.root, 'lang-is-en')
              : 'jp' === e.config.lang && n.addClass(e.root, 'lang-is-jp'),
            e.config.enableContextmenu ||
              e.video.addEventListener('contextmenu', function(e) {
                e.preventDefault(), e.stopPropagation()
              }))
      }
      e.isReady
        ? (t.appendChild(o), l(e))
        : e.once('ready', function() {
            t.appendChild(o), l(e)
          }),
        e.once('autoplay was prevented', function() {
          n.removeClass(e.root, 'xgplayer-is-enter'),
            n.addClass(e.root, 'xgplayer-nostart')
        }),
        e.once('canplay', function() {
          n.removeClass(e.root, 'xgplayer-is-enter')
        }),
        (o.onclick = function(t) {
          t.preventDefault(), t.stopPropagation(), e.emit('startBtnClick')
        })
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04,0.04)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04 0.04)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_poster', function() {
      var e = this.root,
        t = i.default.util
      if (this.config.poster) {
        var n = t.createDom('xg-poster', '', {}, 'xgplayer-poster')
        ;(n.style.backgroundImage = 'url(' + this.config.poster + ')'),
          e.appendChild(n)
      }
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_flex', function() {
      this.root
      var e = i.default.util.createDom(
        'xg-placeholder',
        '',
        {},
        'xgplayer-placeholder'
      )
      this.controls.appendChild(e)
    })
  },
  function(e, t, n) {
    'use strict'
    var a = o(n(0)),
      r = o(n(73)),
      i = o(n(74))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_fullscreen', function() {
      var e = this,
        t = a.default.util,
        n = e.config.fullscreenBtn ? e.config.fullscreenBtn : {},
        o = void 0
      o =
        'img' === n.type
          ? t.createImgBtn('fullscreen', n.url.request, n.width, n.height)
          : t.createDom(
              'xg-fullscreen',
              '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' +
                r.default +
                '</div>\n                                             <div class="xgplayer-icon-exitfull">' +
                i.default +
                '</div>\n                                           </xg-icon>',
              {},
              'xgplayer-fullscreen'
            )
      var l = {}
      ;(l.requestfull = e.lang.FULLSCREEN_TIPS),
        (l.exitfull = e.lang.EXITFULLSCREEN_TIPS)
      var s = t.createDom(
        'xg-tips',
        '<span class="xgplayer-tip-requestfull">' +
          l.requestfull +
          '</span>\n                                        <span class="xgplayer-tip-exitfull">' +
          l.exitfull +
          '</span>',
        {},
        'xgplayer-tips'
      )
      o.appendChild(s),
        e.once('ready', function() {
          e.controls.appendChild(o)
        }),
        ['click', 'touchend'].forEach(function(t) {
          o.addEventListener(t, function(t) {
            t.preventDefault(),
              t.stopPropagation(),
              e.emit('fullscreenBtnClick')
          })
        })
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a = o(n(0)),
      r = o(n(76)),
      i = o(n(77))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_cssFullscreen', function() {
      var e = this,
        t = a.default.util
      if (e.config.cssFullscreen) {
        var n = t.createDom(
            'xg-cssfullscreen',
            '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' +
              r.default +
              '</div>\n                                             <div class="xgplayer-icon-exitfull">' +
              i.default +
              '</div>\n                                           </xg-icon>',
            {},
            'xgplayer-cssfullscreen'
          ),
          o = {}
        ;(o.requestfull = e.lang.CSSFULLSCREEN_TIPS),
          (o.exitfull = e.lang.EXITCSSFULLSCREEN_TIPS)
        var l = t.createDom(
          'xg-tips',
          '<span class="xgplayer-tip-requestfull">' +
            o.requestfull +
            '</span>\n                                        <span class="xgplayer-tip-exitfull">' +
            o.exitfull +
            '</span>',
          {},
          'xgplayer-tips'
        )
        n.appendChild(l),
          e.once('ready', function() {
            e.controls.appendChild(n)
          }),
          ['click', 'touchend'].forEach(function(t) {
            n.addEventListener(t, function(t) {
              t.preventDefault(),
                t.stopPropagation(),
                e.emit('cssFullscreenBtnClick')
            })
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.028 0.028)" d="M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.028 0.028)" d="M834.56 81.92H189.44c-59.392 0-107.52 48.128-107.52 107.52v645.12c0 59.392 48.128 107.52 107.52 107.52h645.12c59.392 0 107.52-48.128 107.52-107.52V189.44c0-59.392-48.128-107.52-107.52-107.52zM458.24 727.04c0 14.848-12.288 26.624-26.624 26.624S404.48 741.888 404.48 727.04v-69.632L289.28 773.12c-10.752 10.24-27.648 10.24-37.888 0-10.24-10.752-10.24-27.648 0-37.888L366.592 619.52H296.96c-14.848 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h134.144c14.848 0 26.624 12.288 26.624 26.624V727.04z m0-295.936c0 14.848-12.288 26.624-26.624 26.624H296.96c-14.848 0-26.624-12.288-26.624-26.624S282.112 404.48 296.96 404.48h69.632L251.392 289.28c-10.24-10.752-10.24-27.648 0-37.888 5.12-5.12 12.288-7.68 18.944-7.68 6.656 0 13.824 2.56 18.944 7.68L404.48 366.592V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v134.144zM773.12 773.12c-10.752 10.24-27.648 10.24-37.888 0L619.52 657.408V727.04c0 14.848-12.288 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-134.144c0-14.848 12.288-26.624 26.624-26.624H727.04c14.848 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624h-69.632l115.2 115.2c10.752 10.752 10.752 27.648 0.512 38.4z m0-483.84L657.408 404.48H727.04c14.848 0 26.624 12.288 26.624 26.624 0 14.848-12.288 26.624-26.624 26.624h-134.144c-14.848 0-26.624-12.288-26.624-26.624V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v69.632L734.72 250.88c5.12-5.12 12.288-7.68 18.944-7.68s13.824 2.56 18.944 7.68c10.752 10.752 10.752 27.648 0.512 38.4z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a = l(n(0)),
      r = l(n(79)),
      i = l(n(80)),
      o = l(n(81))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_volume', function() {
      var e = this,
        t = a.default.util.createDom(
          'xg-volume',
          '<xg-icon class="xgplayer-icon">\n                                         <div class="xgplayer-icon-large">' +
            o.default +
            '</div>\n                                         <div class="xgplayer-icon-small">' +
            i.default +
            '</div>\n                                         <div class="xgplayer-icon-muted">' +
            r.default +
            '</div>\n                                       </xg-icon>\n                                       <xg-slider class="xgplayer-slider" tabindex="2">\n                                         <xg-bar class="xgplayer-bar">\n                                           <xg-drag class="xgplayer-drag"></xg-drag>\n                                         </xg-bar>\n                                       </xg-slider>',
          {},
          'xgplayer-volume'
        )
      e.once('ready', function() {
        e.controls.appendChild(t)
      })
      var n = t.querySelector('.xgplayer-slider'),
        l = t.querySelector('.xgplayer-bar'),
        s = t.querySelector('.xgplayer-drag'),
        u = t.querySelector('.xgplayer-icon')
      ;(s.style.height = 100 * e.config.volume + '%'),
        (n.volume = e.config.volume),
        l.addEventListener('mousedown', function(t) {
          t.preventDefault(), t.stopPropagation(), e.emit('volumeBarClick', t)
        }),
        ['click', 'touchend'].forEach(function(t) {
          u.addEventListener(t, function(t) {
            t.preventDefault(), t.stopPropagation(), e.emit('volumeIconClick')
          })
        }),
        u.addEventListener('mouseenter', function(t) {
          t.preventDefault(), t.stopPropagation(), e.emit('volumeIconEnter')
        }),
        ['blur', 'mouseleave'].forEach(function(n) {
          t.addEventListener(n, function(t) {
            t.preventDefault(), t.stopPropagation(), e.emit('volumeIconLeave')
          })
        })
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_definition', function() {
      var e = this,
        t = e.root,
        n = i.default.util,
        a = i.default.sniffer,
        r = void 0,
        o = n.createDom(
          'xg-definition',
          '',
          { tabindex: 3 },
          'xgplayer-definition'
        )
      function l() {
        var a = e.definitionList,
          r = ['<ul>'],
          i = e.config.url,
          l = document.createElement('a')
        e.switchURL
          ? ['mp4', 'hls', '__flv__', 'dash'].every(function(t) {
              return (
                !e[t] ||
                (e[t].url && (l.href = e[t].url),
                '__flv__' === t &&
                  (e[t]._options
                    ? (l.href = e[t]._options.url)
                    : (l.href = e[t]._mediaDataSource.url)),
                (i = l.href),
                !1)
              )
            })
          : (i = e.currentSrc || e.src),
          e.hls &&
            ((l.href = e.hls.url), (i = l.href), console.log('defi  src', i)),
          a.forEach(function(t) {
            ;(l.href = t.url),
              e.dash
                ? r.push(
                    "<li url='" +
                      t.url +
                      "' cname='" +
                      t.name +
                      "' class='" +
                      (t.selected ? 'selected' : '') +
                      "'>" +
                      t.name +
                      '</li>'
                  )
                : r.push(
                    "<li url='" +
                      t.url +
                      "' cname='" +
                      t.name +
                      "' class='" +
                      (l.href === i ? 'selected' : '') +
                      "'>" +
                      t.name +
                      '</li>'
                  )
          })
        var s = a.filter(function(t) {
          return (l.href = t.url), e.dash ? !0 === t.selected : l.href === i
        })
        r.push("</ul><p class='name'>" + (s[0] || { name: '' }).name + '</p>')
        var u = t.querySelector('.xgplayer-definition')
        if (u) {
          u.innerHTML = r.join('')
          var p = u.querySelector('.name')
          ;(e.config.definitionActive &&
            'hover' !== e.config.definitionActive) ||
            p.addEventListener('mouseenter', function(t) {
              t.preventDefault(),
                t.stopPropagation(),
                n.addClass(e.root, 'xgplayer-definition-active'),
                u.focus()
            })
        } else {
          o.innerHTML = r.join('')
          var c = o.querySelector('.name')
          ;(e.config.definitionActive &&
            'hover' !== e.config.definitionActive) ||
            c.addEventListener('mouseenter', function(t) {
              t.preventDefault(),
                t.stopPropagation(),
                n.addClass(e.root, 'xgplayer-definition-active'),
                o.focus()
            }),
            e.controls.appendChild(o)
        }
      }
      function s(a) {
        ;(e.definitionList = a),
          a &&
            a instanceof Array &&
            a.length > 1 &&
            (n.addClass(t, 'xgplayer-is-definition'), e.on('canplay', l))
      }
      function u() {
        if (((e.currentTime = e.curTime), !r)) {
          var t = e.play()
          void 0 !== t && t && t.catch(function(e) {})
        }
      }
      function p() {
        n.removeClass(t, 'xgplayer-definition-active')
      }
      'mobile' === a.device && (e.config.definitionActive = 'click'),
        e.on('resourceReady', s),
        ['touchend', 'click'].forEach(function(t) {
          o.addEventListener(
            t,
            function(t) {
              t.preventDefault(), t.stopPropagation()
              var i = e.definitionList,
                l = t.target || t.srcElement,
                s = document.createElement('a')
              if (l && 'li' === l.tagName.toLocaleLowerCase()) {
                e.emit('beforeDefinitionChange', s.href)
                var p,
                  c = void 0
                if (
                  (Array.prototype.forEach.call(
                    l.parentNode.childNodes,
                    function(e) {
                      n.hasClass(e, 'selected') &&
                        ((c = e.getAttribute('cname')),
                        n.removeClass(e, 'selected'))
                    }
                  ),
                  e.dash &&
                    i.forEach(function(e) {
                      ;(e.selected = !1),
                        e.name === l.innerHTML && (e.selected = !0)
                    }),
                  n.addClass(l, 'selected'),
                  (p = l.getAttribute('cname')),
                  (l.parentNode.nextSibling.innerHTML =
                    '' + l.getAttribute('cname')),
                  (s.href = l.getAttribute('url')),
                  e.switchURL)
                ) {
                  var d = document.createElement('a')
                  ;['mp4', 'hls', '__flv__', 'dash'].every(function(t) {
                    return (
                      !e[t] ||
                      (e[t].url && (d.href = e[t].url),
                      '__flv__' === t &&
                        (e[t]._options
                          ? (d.href = e[t]._options.url)
                          : (d.href = e[t]._mediaDataSource.url)),
                      !1)
                    )
                  }),
                    d.href === s.href || e.ended || e.switchURL(s.href)
                } else {
                  if (e.hls) {
                    document.createElement('a')
                    e.hls.url
                  }
                  s.href !== e.currentSrc &&
                    ((e.curTime = e.currentTime),
                    (r = e.paused),
                    e.ended || ((e.src = s.href), e.once('canplay', u)))
                }
                e.emit('definitionChange', { from: c, to: p }),
                  'mobile' === a.device &&
                    n.removeClass(e.root, 'xgplayer-definition-active')
              } else
                'click' !== e.config.definitionActive ||
                  !l ||
                  ('p' !== l.tagName.toLocaleLowerCase() &&
                    'em' !== l.tagName.toLocaleLowerCase()) ||
                  ('mobile' === a.device
                    ? n.toggleClass(e.root, 'xgplayer-definition-active')
                    : n.addClass(e.root, 'xgplayer-definition-active'),
                  o.focus())
              e.emit('focus')
            },
            !1
          )
        }),
        o.addEventListener('mouseleave', function(e) {
          e.preventDefault(),
            e.stopPropagation(),
            n.removeClass(t, 'xgplayer-definition-active')
        }),
        e.on('blur', p),
        e.once('destroy', function t() {
          e.off('resourceReady', s),
            e.off('canplay', l),
            e.off('canplay', u),
            e.off('blur', p),
            e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a = i(n(0)),
      r = i(n(84))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_loading', function() {
      var e = this.root,
        t = a.default.util.createDom(
          'xg-loading',
          '' + r.default,
          {},
          'xgplayer-loading'
        )
      this.once('ready', function() {
        e.appendChild(t)
      })
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">\n  <path d="M100,50A50,50,0,1,1,50,0"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    var o = function(e) {
      return i.default.util.hasClass(e.root, 'xgplayer-rotate-fullscreen')
    }
    i.default.install('s_progress', function() {
      var e = this,
        t = i.default.util,
        n = t.createDom(
          'xg-progress',
          '<xg-outer class="xgplayer-progress-outer">\n                                                   <xg-cache class="xgplayer-progress-cache"></xg-cache>\n                                                   <xg-played class="xgplayer-progress-played">\n                                                     <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n                                                     <xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point>\n                                                     <xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail>\n                                                   </xg-played>\n                                                 </xg-outer>',
          { tabindex: 1 },
          'xgplayer-progress'
        ),
        a = void 0
      e.controls.appendChild(n)
      var r = n.querySelector('.xgplayer-progress-played'),
        l = (n.querySelector('.xgplayer-progress-btn'),
        n.querySelector('.xgplayer-progress-outer')),
        s = n.querySelector('.xgplayer-progress-cache'),
        u = n.querySelector('.xgplayer-progress-point'),
        p = n.querySelector('.xgplayer-progress-thumbnail')
      function c(a, r) {
        a.addEventListener('mouseenter', function(e) {
          r &&
            (t.addClass(a, 'xgplayer-progress-dot-show'),
            t.addClass(n, 'xgplayer-progress-dot-active'))
        }),
          a.addEventListener('mouseleave', function(e) {
            r &&
              (t.removeClass(a, 'xgplayer-progress-dot-show'),
              t.removeClass(n, 'xgplayer-progress-dot-active'))
          }),
          a.addEventListener('touchend', function(i) {
            i.stopPropagation(),
              r &&
                (t.hasClass(a, 'xgplayer-progress-dot-show') ||
                  Object.keys(e.dotArr).forEach(function(n) {
                    e.dotArr[n] &&
                      t.removeClass(e.dotArr[n], 'xgplayer-progress-dot-show')
                  }),
                t.toggleClass(a, 'xgplayer-progress-dot-show'),
                t.toggleClass(n, 'xgplayer-progress-dot-active'))
          })
      }
      function d() {
        e.config.progressDot &&
          'Array' === t.typeOf(e.config.progressDot) &&
          e.config.progressDot.forEach(function(n) {
            if (n.time >= 0 && n.time <= e.duration) {
              var a = t.createDom(
                'xg-progress-dot',
                n.text
                  ? '<span class="xgplayer-progress-tip">' + n.text + '</span>'
                  : '',
                {},
                'xgplayer-progress-dot'
              )
              ;(a.style.left = (n.time / e.duration) * 100 + '%'),
                n.duration >= 0 &&
                  (a.style.width =
                    (Math.min(n.duration, e.duration - n.time) / e.duration) *
                      100 +
                    '%'),
                l.appendChild(a),
                (e.dotArr[n.time] = a),
                c(a, n.text)
            }
          })
      }
      ;(e.dotArr = {}),
        e.once('canplay', d),
        (e.addProgressDot = function(n, a, r) {
          if (!e.dotArr[n] && n >= 0 && n <= e.duration) {
            var i = t.createDom(
              'xg-progress-dot',
              '',
              {},
              'xgplayer-progress-dot'
            )
            ;(i.style.left = (n / e.duration) * 100 + '%'),
              r >= 0 &&
                (i.style.width =
                  (Math.min(r, e.duration - n) / e.duration) * 100 + '%'),
              l.appendChild(i),
              (e.dotArr[n] = i),
              c(i, a)
          }
        }),
        (e.removeProgressDot = function(t) {
          if (t >= 0 && t <= e.duration && e.dotArr[t]) {
            var n = e.dotArr[t]
            n.parentNode.removeChild(n), (n = null), (e.dotArr[t] = null)
          }
        }),
        (e.removeAllProgressDot = function() {
          Object.keys(e.dotArr).forEach(function(t) {
            if (e.dotArr[t]) {
              var n = e.dotArr[t]
              n.parentNode.removeChild(n), (n = null), (e.dotArr[t] = null)
            }
          })
        })
      var f = 0,
        g = 0,
        y = 0,
        h = 0,
        x = 0,
        m = 0,
        v = []
      e.config.thumbnail &&
        ((f = e.config.thumbnail.pic_num),
        (g = e.config.thumbnail.width),
        (y = e.config.thumbnail.height),
        (h = e.config.thumbnail.col),
        (x = e.config.thumbnail.row),
        (v = e.config.thumbnail.urls),
        (p.style.width = g + 'px'),
        (p.style.height = y + 'px')),
        'function' == typeof e.config.disableSwipeHandler &&
          'function' == typeof e.config.enableSwipeHandler &&
          (e.root.addEventListener('touchmove', function(t) {
            t.preventDefault(),
              e.disableSwipe ||
                ((e.disableSwipe = !0), e.config.disableSwipeHandler.call(e))
          }),
          e.root.addEventListener('touchstart', function(t) {
            ;(e.disableSwipe = !0), e.config.disableSwipeHandler.call(e)
          }),
          e.root.addEventListener('touchend', function(t) {
            ;(e.disableSwipe = !1), e.config.enableSwipeHandler.call(e)
          })),
        ['touchstart', 'mousedown'].forEach(function(i) {
          n.addEventListener(i, function(i) {
            if (!e.config.disableProgress) {
              if (
                (i.stopPropagation(),
                t.event(i),
                i._target === u || (!e.config.allowSeekAfterEnded && e.ended))
              )
                return !0
              n.focus()
              var l = r.getBoundingClientRect().left,
                s = o(e)
              s
                ? ((l = r.getBoundingClientRect().top),
                  (a = n.getBoundingClientRect().height))
                : ((a = n.getBoundingClientRect().width),
                  (l = r.getBoundingClientRect().left))
              var p = function(n) {
                  n.stopPropagation(), t.event(n), (e.isProgressMoving = !0)
                  var i = (s ? n.clientY : n.clientX) - l
                  i > a && (i = a)
                  var o = (i / a) * e.duration
                  if (
                    ((r.style.width = (100 * i) / a + '%'),
                    'video' !== e.videoConfig.mediaType ||
                      e.dash ||
                      e.config.closeMoveSeek)
                  ) {
                    var u = t.findDom(e.controls, '.xgplayer-time')
                    u &&
                      (u.innerHTML =
                        '<span class="xgplayer-time-current">' +
                        t.format(o || 0) +
                        '</span><span>' +
                        t.format(e.duration) +
                        '</span>')
                  } else e.currentTime = Number(o).toFixed(1)
                  e.emit('focus')
                },
                c = function i(o) {
                  if (
                    (o.stopPropagation(),
                    t.event(o),
                    window.removeEventListener('mousemove', p),
                    window.removeEventListener('touchmove', p, { passive: !1 }),
                    window.removeEventListener('mouseup', i),
                    window.removeEventListener('touchend', i),
                    n.blur(),
                    !e.isProgressMoving ||
                      'audio' === e.videoConfig.mediaType ||
                      e.dash ||
                      e.config.closeMoveSeek)
                  ) {
                    var u = (s ? o.clientY : o.clientX) - l
                    u > a && (u = a)
                    var c = (u / a) * e.duration
                    ;(r.style.width = (100 * u) / a + '%'),
                      (e.currentTime = Number(c).toFixed(1))
                  }
                  e.emit('focus'), (e.isProgressMoving = !1)
                }
              return (
                window.addEventListener('mousemove', p),
                window.addEventListener('touchmove', p, { passive: !1 }),
                window.addEventListener('mouseup', c),
                window.addEventListener('touchend', c),
                !0
              )
            }
          })
        }),
        n.addEventListener(
          'mouseenter',
          function(a) {
            if (!e.config.allowSeekAfterEnded && e.ended) return !0
            var r = o(e),
              i = r
                ? n.getBoundingClientRect().top
                : n.getBoundingClientRect().left,
              l = r
                ? n.getBoundingClientRect().height
                : n.getBoundingClientRect().width,
              s = function(a) {
                var o = (((r ? a.clientY : a.clientX) - i) / l) * e.duration
                ;(o = o < 0 ? 0 : o), (u.textContent = t.format(o))
                var s = u.getBoundingClientRect().width
                if (e.config.thumbnail) {
                  m = e.duration / f
                  var c = Math.floor(o / m)
                  p.style.backgroundImage =
                    'url(' + v[Math.ceil((c + 1) / (h * x)) - 1] + ')'
                  var d = c + 1 - h * x * (Math.ceil((c + 1) / (h * x)) - 1),
                    b = Math.ceil(d / x) - 1,
                    k = d - b * x - 1
                  p.style['background-position'] =
                    '-' + k * g + 'px -' + b * y + 'px'
                  var w = (r ? a.clientY : a.clientX) - i - g / 2
                  ;(w = (w = w > 0 ? w : 0) < l - g ? w : l - g),
                    (p.style.left = w + 'px'),
                    (p.style.top = -10 - y + 'px'),
                    (p.style.display = 'block'),
                    (u.style.left = w + g / 2 - s / 2 + 'px')
                } else {
                  var E = a.clientX - i - s / 2
                  ;(E = (E = E > 0 ? E : 0) > l - s ? l - s : E),
                    (u.style.left = E + 'px')
                }
                t.hasClass(n, 'xgplayer-progress-dot-active')
                  ? (u.style.display = 'none')
                  : (u.style.display = 'block')
              },
              c = function(e) {
                s(e)
              }
            n.addEventListener('mousemove', c, !1),
              n.addEventListener(
                'mouseleave',
                function e(t) {
                  n.removeEventListener('mousemove', c, !1),
                    n.removeEventListener('mouseleave', e, !1),
                    s(t),
                    (u.style.display = 'none'),
                    (p.style.display = 'none')
                },
                !1
              ),
              s(a)
          },
          !1
        )
      var b = function() {
        if (
          (!a && n && (a = n.getBoundingClientRect().width),
          'audio' !== e.videoConfig.mediaType || !e.isProgressMoving || !e.dash)
        ) {
          var t = e.currentTime / e.duration,
            i =
              Number(r.style.width.replace('%', '') || '0') /
              Number(n.style.width || '100')
          Math.abs(t - i) <= 1 &&
            (r.style.width = (100 * e.currentTime) / e.duration + '%')
        }
      }
      e.on('timeupdate', b)
      var k = function() {
        r.style.width = (100 * e.currentTime) / e.duration + '%'
      }
      e.on('currentTimeChange', k)
      var w = function() {
        r.style.width = '0%'
      }
      e.on('srcChange', w)
      var E = function() {
          var t = e.buffered
          if (t && t.length > 0) {
            for (var n = t.end(t.length - 1), a = 0, r = t.length; a < r; a++)
              if (e.currentTime >= t.start(a) && e.currentTime <= t.end(a)) {
                n = t.end(a)
                for (var i = a + 1; i < t.length; i++)
                  if (t.start(i) - t.end(i - 1) >= 2) {
                    n = t.end(i - 1)
                    break
                  }
                break
              }
            s.style.width = (n / e.duration) * 100 + '%'
          }
        },
        C = ['bufferedChange', 'cacheupdate', 'ended', 'timeupdate']
      C.forEach(function(t) {
        e.on(t, E)
      }),
        e.once('destroy', function t() {
          e.removeAllProgressDot(),
            e.off('canplay', d),
            e.off('timeupdate', b),
            e.off('currentTimeChange', k),
            e.off('srcChange', w),
            C.forEach(function(t) {
              e.off(t, E)
            }),
            e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_time', function() {
      var e = this,
        t = (e.root, i.default.util),
        n = t.createDom(
          'xg-time',
          '<span class="xgplayer-time-current">' +
            (e.currentTime || t.format(0)) +
            '</span>\n                                           <span>' +
            (e.duration || t.format(0)) +
            '</span>',
          {},
          'xgplayer-time'
        )
      e.once('ready', function() {
        e.controls.appendChild(n)
      })
      var a = function() {
        ;('audio' === e.videoConfig.mediaType &&
          e.isProgressMoving &&
          e.dash) ||
          (n.innerHTML =
            '<span class="xgplayer-time-current">' +
            t.format(e.currentTime || 0) +
            '</span><span>' +
            t.format(e.duration) +
            '</span>')
      }
      e.on('durationchange', a),
        e.on('timeupdate', a),
        e.once('destroy', function t() {
          e.off('durationchange', a),
            e.off('timeupdate', a),
            e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a = i(n(0)),
      r = i(n(88))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_replay', function() {
      var e = this,
        t = a.default.util,
        n = e.root,
        i = e.lang.REPLAY,
        o = t.createDom(
          'xg-replay',
          r.default +
            '\n                                         <xg-replay-txt class="xgplayer-replay-txt">' +
            i +
            '</xg-replay-txt>\n                                        ',
          {},
          'xgplayer-replay'
        )
      function l() {
        var e = o.querySelector('path')
        if (e) {
          var t = window.getComputedStyle(e).getPropertyValue('transform')
          if ('string' == typeof t && t.indexOf('none') > -1) return
          e.setAttribute('transform', t)
        }
      }
      e.once('ready', function() {
        n.appendChild(o)
      }),
        e.on('ended', l)
      var s = o.querySelector('svg')
      ;['click', 'touchend'].forEach(function(t) {
        s.addEventListener(t, function(t) {
          t.preventDefault(), t.stopPropagation(), e.emit('replayBtnClick')
        })
      }),
        e.once('destroy', function t() {
          e.off('ended', l), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">\n  <path d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_playbackRate', function() {
      var e = this,
        t = i.default.sniffer,
        n = i.default.util
      if (!e.config.playbackRate) return !1
      e.config.playbackRate.sort(function(e, t) {
        return t - e
      })
      var a = n.createDom('xg-playbackrate', ' ', {}, 'xgplayer-playbackrate')
      'mobile' === t.device && (e.config.playbackRateActive = 'click')
      var r = []
      e.config.playbackRate.forEach(function(e) {
        r.push({ name: '' + e, rate: e + 'x', selected: !1 })
      })
      var o = 1,
        l = ['<ul>']
      r.forEach(function(t) {
        e.config.defaultPlaybackRate &&
        e.config.defaultPlaybackRate.toString() === t.name
          ? ((t.selected = !0),
            (o = e.config.defaultPlaybackRate),
            e.once('playing', function() {
              e.video.playbackRate = e.config.defaultPlaybackRate
            }))
          : ('1.0' !== t.name && '1' !== t.name) ||
            (e.config.defaultPlaybackRate &&
              1 !== e.config.defaultPlaybackRate) ||
            (t.selected = !0),
          l.push(
            "<li cname='" +
              t.name +
              "' class='" +
              (t.selected ? 'selected' : '') +
              "'>" +
              t.rate +
              '</li>'
          )
      }),
        l.push("</ul><p class='name'>" + o + 'x</p>')
      var s = e.root.querySelector('.xgplayer-playbackrate')
      if (s) {
        s.innerHTML = l.join('')
        var u = s.querySelector('.name')
        ;(e.config.playbackRateActive &&
          'hover' !== e.config.playbackRateActive) ||
          u.addEventListener('mouseenter', function(t) {
            t.preventDefault(),
              t.stopPropagation(),
              n.addClass(e.root, 'xgplayer-playbackrate-active'),
              s.focus()
          })
      } else {
        a.innerHTML = l.join('')
        var p = a.querySelector('.name')
        ;(e.config.playbackRateActive &&
          'hover' !== e.config.playbackRateActive) ||
          p.addEventListener('mouseenter', function(t) {
            t.preventDefault(),
              t.stopPropagation(),
              n.addClass(e.root, 'xgplayer-playbackrate-active'),
              a.focus()
          }),
          e.once('ready', function() {
            e.controls.appendChild(a)
          })
      }
      ;['touchend', 'click'].forEach(function(i) {
        a.addEventListener(
          i,
          function(i) {
            i.stopPropagation(), i.preventDefault()
            var l = i.target
            if (l && 'li' === l.tagName.toLocaleLowerCase()) {
              var s,
                u = void 0
              r.forEach(function(t) {
                ;(t.selected = !1),
                  l.textContent.replace(/\s+/g, '') === t.rate &&
                    (Array.prototype.forEach.call(
                      l.parentNode.childNodes,
                      function(e) {
                        n.hasClass(e, 'selected') &&
                          ((u = Number(e.getAttribute('cname'))),
                          n.removeClass(e, 'selected'))
                      }
                    ),
                    (t.selected = !0),
                    (e.video.playbackRate = 1 * t.name),
                    (o = 1 * t.name))
              }),
                n.addClass(l, 'selected'),
                (s = Number(l.getAttribute('cname'))),
                (l.parentNode.nextSibling.innerHTML =
                  l.getAttribute('cname') + 'x'),
                e.emit('playbackrateChange', { from: u, to: s }),
                'mobile' === t.device &&
                  n.removeClass(e.root, 'xgplayer-playbackrate-active')
            } else
              'click' !== e.config.playbackRateActive ||
                !l ||
                ('p' !== l.tagName.toLocaleLowerCase() &&
                  'span' !== l.tagName.toLocaleLowerCase()) ||
                ('mobile' === t.device
                  ? n.toggleClass(e.root, 'xgplayer-playbackrate-active')
                  : n.addClass(e.root, 'xgplayer-playbackrate-active'),
                a.focus())
            e.emit('focus')
          },
          !1
        )
      }),
        a.addEventListener('mouseleave', function(t) {
          t.preventDefault(),
            t.stopPropagation(),
            n.removeClass(e.root, 'xgplayer-playbackrate-active')
        }),
        e.on('blur', function() {
          n.removeClass(e.root, 'xgplayer-playbackrate-active')
        }),
        e.on('play', function() {
          e.video.playbackRate.toFixed(1) !== o.toFixed(1) &&
            (e.video.playbackRate = o)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_localPreview', function() {
      var e = this,
        t = (e.root, i.default.util)
      if (e.config.preview && e.config.preview.uploadEl) {
        var n = t.createDom(
            'xg-preview',
            '<input type="file">',
            {},
            'xgplayer-preview'
          ),
          a = n.querySelector('input')
        e.config.preview.uploadEl.appendChild(n),
          (a.onchange = function() {
            e.emit('upload', a)
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    var a = i(n(0)),
      r = i(n(92))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_download', function() {
      var e = this,
        t = a.default.util
      if (e.config.download) {
        var n = t.createDom(
            'xg-download',
            '<xg-icon class="xgplayer-icon">' + r.default + '</xg-icon>',
            {},
            'xgplayer-download'
          ),
          i = e.lang.DOWNLOAD_TIPS,
          o = t.createDom(
            'xg-tips',
            '<span class="xgplayer-tip-download">' + i + '</span>',
            {},
            'xgplayer-tips'
          )
        n.appendChild(o),
          e.once('ready', function() {
            e.controls.appendChild(n)
          }),
          ['click', 'touchend'].forEach(function(t) {
            n.addEventListener(t, function(t) {
              t.preventDefault(),
                t.stopPropagation(),
                e.emit('downloadBtnClick')
            })
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(-488.000000, -340.000000)" fill="#FFFFFF">\n      <g id="Group-2">\n        <g id="volme_big-copy" transform="translate(488.000000, 340.000000)">\n          <rect id="Rectangle-18" x="11" y="4" width="2" height="12" rx="1"></rect>\n          <rect id="Rectangle-2" x="3" y="18" width="18" height="2" rx="1"></rect>\n          <rect id="Rectangle-2" transform="translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) " x="1.5" y="16.5" width="5" height="2" rx="1"></rect><rect id="Rectangle-2-Copy-3" transform="translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) " x="17.5" y="16.5" width="5" height="2" rx="1"></rect>\n          <path d="M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z" id="Combined-Shape" transform="translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) "></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a = o(n(0)),
      r = o(n(94)),
      i = o(n(96))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_danmu', function() {
      var e = this,
        t = e.root,
        n = a.default.util
      if (e.config.danmu) {
        var o = n.createDom('xg-danmu', '', {}, 'xgplayer-danmu')
        e.once('ready', function() {
          t.appendChild(o)
        })
        var l = n.deepCopy(
            {
              container: o,
              player: e.video,
              comments: [],
              area: { start: 0, end: 1 }
            },
            e.config.danmu
          ),
          s = void 0
        e.config.danmu.panel &&
          ((s = a.default.util.createDom(
            'xg-panel',
            '<xg-panel-icon class="xgplayer-panel-icon">\n                                                ' +
              i.default +
              '\n                                              </xg-panel-icon>\n                                              <xg-panel-slider class="xgplayer-panel-slider">\n                                                <xg-hidemode class="xgplayer-hidemode">\n                                                  <p class="xgplayer-hidemode-font">屏蔽类型</p>\n                                                  <ul class="xgplayer-hidemode-radio">\n                                                    <li class="xgplayer-hidemode-scroll" id="false">滚动</li><li class="xgplayer-hidemode-top" id="false">顶部</li><li class="xgplayer-hidemode-bottom" id="false">底部</li><li class="xgplayer-hidemode-color" id="false">色彩</li>\n                                                  </ul>\n                                                </xg-hidemode>\n                                                <xg-transparency class="xgplayer-transparency">\n                                                  <span>不透明度</span>\n                                                  <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>\n                                                </xg-transparency>\n                                                <xg-showarea class="xgplayer-showarea">\n                                                  <div class="xgplayer-showarea-name">显示区域</div>\n                                                  <div class="xgplayer-showarea-control">\n                                                    <div class="xgplayer-showarea-control-up">\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-onequarters">1/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-twoquarters selected-color">1/2</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-threequarters">3/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-full">1</span>\n                                                    </div>\n                                                    <div class="xgplayer-showarea-control-down">\n                                                      <div class="xgplayer-showarea-control-down-dots">\n                                                        <span class="xgplayer-showarea-onequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-twoquarters-dot"></span>\n                                                        <span class="xgplayer-showarea-threequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-full-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="1" max="4" step="1" value="1">\n                                                    </div>\n                                                  </div>\n                                                </xg-showarea>\n                                                <xg-danmuspeed class="xgplayer-danmuspeed">\n                                                  <div class="xgplayer-danmuspeed-name">弹幕速度</div>\n                                                  <div class="xgplayer-danmuspeed-control">\n                                                    <div class="xgplayer-danmuspeed-control-up">\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-small">慢</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-middle selected-color">中</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-large">快</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmuspeed-control-down">\n                                                      <div class="xgplayer-danmuspeed-control-down-dots">\n                                                        <span class="xgplayer-danmuspeed-small-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-middle-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-gradient" type="range" min="50" max="150" step="50" value="100">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmuspeed>\n                                                <xg-danmufont class="xgplayer-danmufont">\n                                                  <div class="xgplayer-danmufont-name">字体大小</div>\n                                                  <div class="xgplayer-danmufont-control">\n                                                    <div class="xgplayer-danmufont-control-up">\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-small">小</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-middle">中</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-large selected-color">大</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmufont-control-down">\n                                                      <div class="xgplayer-danmufont-control-down-dots">\n                                                        <span class="xgplayer-danmufont-small-dot"></span>\n                                                        <span class="xgplayer-danmufont-middle-dot"></span>\n                                                        <span class="xgplayer-danmufont-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-gradient" type="range" min="20" max="30" step="5" value="25">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmufont>\n                                              </xg-panel-slider>',
            { tabindex: 7 },
            'xgplayer-panel'
          )),
          e.once('ready', function() {
            e.controls.appendChild(s)
          })),
          e.once('complete', function() {
            var t = new r.default(l)
            if (
              (e.emit('initDefaultDanmu', t),
              (e.danmu = t),
              e.config.danmu.panel)
            ) {
              var n = s.querySelector('.xgplayer-panel-slider'),
                i = void 0
              ;['mouseenter', 'touchend', 'click'].forEach(function(e) {
                s.addEventListener(e, function(e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    a.default.util.addClass(n, 'xgplayer-panel-active'),
                    s.focus(),
                    (i = !0)
                })
              }),
                s.addEventListener('mouseleave', function(e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    a.default.util.removeClass(n, 'xgplayer-panel-active'),
                    (i = !1)
                }),
                n.addEventListener('mouseleave', function(e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    !1 === i &&
                      a.default.util.removeClass(n, 'xgplayer-panel-active')
                })
              var o = e.config.danmu,
                u = {
                  scroll: s.querySelector('.xgplayer-hidemode-scroll'),
                  top: s.querySelector('.xgplayer-hidemode-top'),
                  bottom: s.querySelector('.xgplayer-hidemode-bottom'),
                  color: s.querySelector('.xgplayer-hidemode-color')
                },
                p = function(t) {
                  var n = t
                  ;['touchend', 'click'].forEach(function(t) {
                    u[n].addEventListener(t, function(t) {
                      'true' !== u[n].getAttribute('id')
                        ? ((u[n].style.color = '#f85959'),
                          u[n].setAttribute('id', 'true'),
                          e.danmu.hide(n))
                        : ((u[n].style.color = '#aaa'),
                          u[n].setAttribute('id', 'false'),
                          e.danmu.show(n))
                    })
                  })
                }
              for (var c in u) p(c)
              var d = s.querySelector('.xgplayer-transparency-line'),
                f = s.querySelector('.xgplayer-transparency-gradient'),
                g = 50
              if (
                ((f.style.background =
                  'linear-gradient(to right, #f85959 0%, #f85959 ' +
                  g +
                  '%, #aaa ' +
                  g +
                  '%, #aaa)'),
                d.addEventListener('input', function(e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    (g = e.target.value),
                    (f.style.background =
                      'linear-gradient(to right, #f85959 0%, #f85959 ' +
                      g +
                      '%, #aaa ' +
                      g +
                      '%, #aaa)'),
                    o.comments.forEach(function(e) {
                      e.style.opacity = g / 100
                    })
                }),
                s
                  .querySelector('.xgplayer-showarea-line')
                  .addEventListener('input', function(t) {
                    t.preventDefault(), t.stopPropagation()
                    var n = t.target.value
                    ;(e.danmu.config.area.end = n / 100),
                      (e.config.danmu.area.end = n / 100),
                      e.danmu.bulletBtn.main.channel.resize()
                  }),
                s
                  .querySelector('.xgplayer-danmuspeed-line')
                  .addEventListener('input', function(e) {
                    e.preventDefault(), e.stopPropagation()
                    var t = e.target.value
                    o.comments.forEach(function(e) {
                      e.duration = 100 * (200 - t)
                    })
                  }),
                s
                  .querySelector('.xgplayer-danmufont-line')
                  .addEventListener('input', function(e) {
                    e.preventDefault(), e.stopPropagation()
                    var t = e.target.value
                    o.comments.forEach(function(e) {
                      e.style.fontSize = t + 'px'
                    })
                  }),
                navigator.userAgent.indexOf('Firefox') > -1)
              )
                for (var y = 0; y < n.querySelectorAll('input').length; y++)
                  n.querySelectorAll('input')[y].style.marginTop = '10px'
            }
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    ;(function(e) {
      var n,
        a,
        r,
        i,
        o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }
      window,
        (i = function() {
          return (function(e) {
            var t = {}
            function n(a) {
              if (t[a]) return t[a].exports
              var r = (t[a] = { i: a, l: !1, exports: {} })
              return (
                e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              )
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function(e, t, a) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: a })
              }),
              (n.r = function(e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 })
              }),
              (n.t = function(e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e
                if (
                  4 & t &&
                  'object' == (void 0 === e ? 'undefined' : o(e)) &&
                  e &&
                  e.__esModule
                )
                  return e
                var a = Object.create(null)
                if (
                  (n.r(a),
                  Object.defineProperty(a, 'default', {
                    enumerable: !0,
                    value: e
                  }),
                  2 & t && 'string' != typeof e)
                )
                  for (var r in e)
                    n.d(
                      a,
                      r,
                      function(t) {
                        return e[t]
                      }.bind(null, r)
                    )
                return a
              }),
              (n.n = function(e) {
                var t =
                  e && e.__esModule
                    ? function() {
                        return e.default
                      }
                    : function() {
                        return e
                      }
                return n.d(t, 'a', t), t
              }),
              (n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
              }),
              (n.p = ''),
              n((n.s = 3))
            )
          })([
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a = {
                createDom: function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'div',
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '',
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : '',
                    r = document.createElement(e)
                  return (
                    (r.className = a),
                    (r.innerHTML = t),
                    Object.keys(n).forEach(function(t) {
                      var a = t,
                        i = n[t]
                      'video' === e || 'audio' === e
                        ? i && r.setAttribute(a, i)
                        : r.setAttribute(a, i)
                    }),
                    r
                  )
                },
                hasClass: function(e, t) {
                  return e.classList
                    ? Array.prototype.some.call(e.classList, function(e) {
                        return e === t
                      })
                    : !!e.className.match(new RegExp('(\\s|^)' + t + '(\\s|$)'))
                },
                addClass: function(e, t) {
                  e.classList
                    ? t
                        .replace(/(^\s+|\s+$)/g, '')
                        .split(/\s+/g)
                        .forEach(function(t) {
                          t && e.classList.add(t)
                        })
                    : a.hasClass(e, t) || (e.className += ' ' + t)
                },
                removeClass: function(e, t) {
                  e.classList
                    ? t.split(/\s+/g).forEach(function(t) {
                        e.classList.remove(t)
                      })
                    : a.hasClass(e, t) &&
                      t.split(/\s+/g).forEach(function(t) {
                        var n = new RegExp('(\\s|^)' + t + '(\\s|$)')
                        e.className = e.className.replace(n, ' ')
                      })
                },
                toggleClass: function(e, t) {
                  t.split(/\s+/g).forEach(function(t) {
                    a.hasClass(e, t) ? a.removeClass(e, t) : a.addClass(e, t)
                  })
                },
                findDom: function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : document,
                    t = arguments[1],
                    n = void 0
                  try {
                    n = e.querySelector(t)
                  } catch (a) {
                    t.startsWith('#') && (n = e.getElementById(t.slice(1)))
                  }
                  return n
                },
                deepCopy: function(e, t) {
                  if ('Object' === a.typeOf(t) && 'Object' === a.typeOf(e))
                    return (
                      Object.keys(t).forEach(function(n) {
                        'Object' !== a.typeOf(t[n]) || t[n] instanceof Node
                          ? 'Array' === a.typeOf(t[n])
                            ? (e[n] =
                                'Array' === a.typeOf(e[n])
                                  ? e[n].concat(t[n])
                                  : t[n])
                            : (e[n] = t[n])
                          : e[n]
                            ? a.deepCopy(e[n], t[n])
                            : (e[n] = t[n])
                      }),
                      e
                    )
                },
                typeOf: function(e) {
                  return Object.prototype.toString
                    .call(e)
                    .match(/([^\s.*]+)(?=]$)/g)[0]
                },
                copyDom: function(e) {
                  if (e && 1 === e.nodeType) {
                    var t = document.createElement(e.tagName)
                    return (
                      Array.prototype.forEach.call(e.attributes, function(e) {
                        t.setAttribute(e.name, e.value)
                      }),
                      e.innerHTML && (t.innerHTML = e.innerHTML),
                      t
                    )
                  }
                  return ''
                },
                formatTime: function(e) {
                  var t = Math.floor(e)
                  return 1e3 * t + (e - t)
                },
                offInDestroy: function(e, t, n, a) {
                  e.once(a, function r() {
                    e.off(t, n), e.off(a, r)
                  })
                },
                on: function(e, t, n, r) {
                  r
                    ? (e.on(t, n), a.offInDestroy(e, t, n, r))
                    : e.on(t, function a(r) {
                        n(r), e.off(t, a)
                      })
                }
              }
              ;(t.default = a), (e.exports = t.default)
            },
            function(e, t, n) {
              var a = n(18)()
              e.exports = function(e) {
                return e !== a && null !== e
              }
            },
            function(e, t, n) {
              e.exports = function(e) {
                return null != e
              }
            },
            function(e, t, n) {
              e.exports = n(4)
            },
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a,
                r = (a = n(5)) && a.__esModule ? a : { default: a }
              n(30), (t.default = r.default), (e.exports = t.default)
            },
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a = (function() {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var a = t[n]
                      ;(a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                    }
                  }
                  return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                  }
                })(),
                r = s(n(6)),
                i = s(n(25)),
                o = s(n(29)),
                l = s(n(0))
              function s(e) {
                return e && e.__esModule ? e : { default: e }
              }
              var u = (function() {
                function e(t) {
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function')
                  })(this, e)
                  var n = this
                  if (
                    ((n.config = l.default.deepCopy(
                      {
                        overlap: !1,
                        area: { start: 0, end: 1 },
                        live: !1,
                        comments: [],
                        direction: 'r2l'
                      },
                      t
                    )),
                    (n.hideArr = []),
                    (n.domObj = new o.default()),
                    (0, r.default)(n),
                    n.config.comments.forEach(function(e) {
                      ;(e.duration = e.duration ? e.duration : 5e3),
                        e.mode || (e.mode = 'scroll')
                    }),
                    !n.config.container || 1 !== n.config.container.nodeType)
                  )
                    return n.emit('error', "container id can't be empty"), !1
                  if (
                    ((n.container = n.config.container),
                    n.config.containerStyle)
                  ) {
                    var a = n.config.containerStyle
                    Object.keys(a).forEach(function(e) {
                      n.container.style[e] = a[e]
                    })
                  }
                  ;(n.live = n.config.live),
                    (n.player = n.config.player),
                    (n.direction = n.config.direction),
                    l.default.addClass(n.container, 'danmu'),
                    (n.bulletBtn = new i.default(n)),
                    n.emit('ready')
                }
                return (
                  a(e, [
                    {
                      key: 'start',
                      value: function() {
                        this.bulletBtn.main.start()
                      }
                    },
                    {
                      key: 'pause',
                      value: function() {
                        this.bulletBtn.main.pause()
                      }
                    },
                    {
                      key: 'play',
                      value: function() {
                        this.bulletBtn.main.play()
                      }
                    },
                    {
                      key: 'stop',
                      value: function() {
                        this.bulletBtn.main.stop()
                      }
                    },
                    {
                      key: 'destroy',
                      value: function() {
                        for (var e in (this.stop(),
                        this.bulletBtn.destroy(),
                        this.domObj.destroy(),
                        this))
                          delete this[e]
                        this.emit('destroy')
                      }
                    },
                    {
                      key: 'sendComment',
                      value: function(e) {
                        e.duration || (e.duration = 15e3),
                          e &&
                            e.id &&
                            e.duration &&
                            (e.el || e.txt) &&
                            ((e.duration = e.duration ? e.duration : 5e3),
                            e.style &&
                              (this.opacity &&
                                this.opacity !== e.style.opacity &&
                                (e.style.opacity = this.opacity),
                              this.fontSize &&
                                this.fontSize !== e.style.fontSize &&
                                (e.style.fontSize = this.fontSize),
                              this.like &&
                                (e.like = e.like ? e.like : this.like)),
                            e.prior || e.realTime
                              ? (this.bulletBtn.main.data.unshift(e),
                                e.realTime &&
                                  (this.bulletBtn.main.readData(),
                                  this.bulletBtn.main.dataHandle()))
                              : this.bulletBtn.main.data.push(e))
                      }
                    },
                    {
                      key: 'setCommentID',
                      value: function(e, t) {
                        var n = this,
                          a = this.container.getBoundingClientRect()
                        e &&
                          t &&
                          (this.bulletBtn.main.data.some(function(n) {
                            return n.id === e && ((n.id = t), !0)
                          }),
                          this.bulletBtn.main.queue.some(function(r) {
                            return (
                              r.id === e &&
                              ((r.id = t),
                              r.pauseMove(a),
                              'paused' !== n.bulletBtn.main.status &&
                                r.startMove(a),
                              !0)
                            )
                          }))
                      }
                    },
                    {
                      key: 'setCommentDuration',
                      value: function(e, t) {
                        var n = this,
                          a = this.container.getBoundingClientRect()
                        e &&
                          t &&
                          ((t = t || 5e3),
                          this.bulletBtn.main.data.some(function(n) {
                            return n.id === e && ((n.duration = t), !0)
                          }),
                          this.bulletBtn.main.queue.some(function(r) {
                            return (
                              r.id === e &&
                              ((r.duration = t),
                              r.pauseMove(a),
                              'paused' !== n.bulletBtn.main.status &&
                                r.startMove(a),
                              !0)
                            )
                          }))
                      }
                    },
                    {
                      key: 'setCommentLike',
                      value: function(e, t) {
                        var n = this.container.getBoundingClientRect()
                        ;(this.like = t),
                          e &&
                            t &&
                            (this.bulletBtn.main.data.some(function(n) {
                              return n.id === e && ((n.like = t), !0)
                            }),
                            this.bulletBtn.main.queue.some(function(a) {
                              return (
                                a.id === e &&
                                (a.pauseMove(n),
                                a.setLikeDom(t.el, t.style),
                                'paused' !== a.danmu.bulletBtn.main.status &&
                                  a.startMove(n),
                                !0)
                              )
                            }))
                      }
                    },
                    {
                      key: 'restartComment',
                      value: function(e) {
                        this.mouseControl = !1
                        var t = this.container.getBoundingClientRect()
                        e &&
                          this.bulletBtn.main.queue.some(function(n) {
                            return (
                              n.id === e &&
                              ('paused' !== n.danmu.bulletBtn.main.status
                                ? n.startMove(t, !0)
                                : (n.status = 'paused'),
                              !0)
                            )
                          })
                      }
                    },
                    {
                      key: 'freezeComment',
                      value: function(e) {
                        this.mouseControl = !0
                        var t = this.container.getBoundingClientRect()
                        e &&
                          this.bulletBtn.main.queue.some(function(n) {
                            return (
                              n.id === e &&
                              ((n.status = 'forcedPause'),
                              n.pauseMove(t),
                              n.el && n.el.style && (n.el.style.zIndex = 10),
                              !0)
                            )
                          })
                      }
                    },
                    {
                      key: 'removeComment',
                      value: function(e) {
                        e &&
                          (this.bulletBtn.main.queue.some(function(t) {
                            return t.id === e && (t.remove(), !0)
                          }),
                          (this.bulletBtn.main.data = this.bulletBtn.main.data.filter(
                            function(t) {
                              return t.id !== e
                            }
                          )))
                      }
                    },
                    {
                      key: 'setAllDuration',
                      value: function() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 'scroll',
                          t = arguments[1],
                          n =
                            !(
                              arguments.length > 2 && void 0 !== arguments[2]
                            ) || arguments[2],
                          a = this.container.getBoundingClientRect()
                        t &&
                          ((t = t || 5e3),
                          n && (this.bulletBtn.main.forceDuration = t),
                          this.bulletBtn.main.data.forEach(function(n) {
                            e === n.mode && (n.duration = t)
                          }),
                          this.bulletBtn.main.queue.forEach(function(n) {
                            e === n.mode &&
                              ((n.duration = t),
                              n.pauseMove(a),
                              'paused' !== n.danmu.bulletBtn.main.status &&
                                n.startMove(a))
                          }))
                      }
                    },
                    {
                      key: 'setOpacity',
                      value: function(e) {
                        this.container.style.opacity = e
                      }
                    },
                    {
                      key: 'setFontSize',
                      value: function(e, t) {
                        var n = this
                        ;(this.fontSize = e + 'px'),
                          e &&
                            (this.bulletBtn.main.data.forEach(function(e) {
                              e.style && (e.style.fontSize = n.fontSize)
                            }),
                            this.bulletBtn.main.queue.forEach(function(e) {
                              e.options.style || (e.options.style = {}),
                                (e.options.style.fontSize = n.fontSize),
                                e.setFontSize(n.fontSize),
                                t &&
                                  ((e.top = e.channel_id[0] * t), e.topInit())
                            })),
                          t &&
                            ((this.config.channelSize = t),
                            this.bulletBtn.main.channel.resize(!0))
                      }
                    },
                    {
                      key: 'setArea',
                      value: function(e) {
                        ;(this.config.area = e),
                          this.bulletBtn.main.channel.resize(!0)
                      }
                    },
                    {
                      key: 'hide',
                      value: function() {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'scroll'
                        this.hideArr.indexOf(e) < 0 && this.hideArr.push(e)
                        var t = this.bulletBtn.main.queue.filter(function(t) {
                          return e === t.mode || ('color' === e && t.color)
                        })
                        t.forEach(function(e) {
                          return e.remove()
                        })
                      }
                    },
                    {
                      key: 'show',
                      value: function() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 'scroll',
                          t = this.hideArr.indexOf(e)
                        t > -1 && this.hideArr.splice(t, 1)
                      }
                    },
                    {
                      key: 'setDirection',
                      value: function() {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'r2l'
                        this.emit('changeDirection', e)
                      }
                    },
                    {
                      key: 'resize',
                      value: function() {
                        this.emit('channel_resize')
                      }
                    }
                  ]),
                  e
                )
              })()
              ;(t.default = u), (e.exports = t.default)
            },
            function(e, t, n) {
              var a,
                r,
                i,
                l,
                s,
                u,
                p,
                c = n(7),
                d = n(24),
                f = Function.prototype.apply,
                g = Function.prototype.call,
                y = Object.create,
                h = Object.defineProperty,
                x = Object.defineProperties,
                m = Object.prototype.hasOwnProperty,
                v = { configurable: !0, enumerable: !1, writable: !0 }
              ;(r = function(e, t) {
                var n, r
                return (
                  d(t),
                  (r = this),
                  a.call(
                    this,
                    e,
                    (n = function() {
                      i.call(r, e, n), f.call(t, this, arguments)
                    })
                  ),
                  (n.__eeOnceListener__ = t),
                  this
                )
              }),
                (s = {
                  on: (a = function(e, t) {
                    var n
                    return (
                      d(t),
                      m.call(this, '__ee__')
                        ? (n = this.__ee__)
                        : ((n = v.value = y(null)),
                          h(this, '__ee__', v),
                          (v.value = null)),
                      n[e]
                        ? 'object' == o(n[e])
                          ? n[e].push(t)
                          : (n[e] = [n[e], t])
                        : (n[e] = t),
                      this
                    )
                  }),
                  once: r,
                  off: (i = function(e, t) {
                    var n, a, r, i
                    if ((d(t), !m.call(this, '__ee__'))) return this
                    if (!(n = this.__ee__)[e]) return this
                    if ('object' == o((a = n[e])))
                      for (i = 0; (r = a[i]); ++i)
                        (r !== t && r.__eeOnceListener__ !== t) ||
                          (2 === a.length
                            ? (n[e] = a[i ? 0 : 1])
                            : a.splice(i, 1))
                    else (a !== t && a.__eeOnceListener__ !== t) || delete n[e]
                    return this
                  }),
                  emit: (l = function(e) {
                    var t, n, a, r, i
                    if (m.call(this, '__ee__') && (r = this.__ee__[e]))
                      if ('object' == (void 0 === r ? 'undefined' : o(r))) {
                        for (
                          n = arguments.length, i = new Array(n - 1), t = 1;
                          t < n;
                          ++t
                        )
                          i[t - 1] = arguments[t]
                        for (r = r.slice(), t = 0; (a = r[t]); ++t)
                          f.call(a, this, i)
                      } else
                        switch (arguments.length) {
                          case 1:
                            g.call(r, this)
                            break
                          case 2:
                            g.call(r, this, arguments[1])
                            break
                          case 3:
                            g.call(r, this, arguments[1], arguments[2])
                            break
                          default:
                            for (
                              n = arguments.length, i = new Array(n - 1), t = 1;
                              t < n;
                              ++t
                            )
                              i[t - 1] = arguments[t]
                            f.call(r, this, i)
                        }
                  })
                }),
                (u = { on: c(a), once: c(r), off: c(i), emit: c(l) }),
                (p = x({}, u)),
                (e.exports = t = function(e) {
                  return null == e ? y(p) : x(Object(e), u)
                }),
                (t.methods = s)
            },
            function(e, t, n) {
              var a = n(2),
                r = n(8),
                i = n(12),
                o = n(20),
                l = n(21)
              ;(e.exports = function(e, t) {
                var n, r, s, u, p
                return (
                  arguments.length < 2 || 'string' != typeof e
                    ? ((u = t), (t = e), (e = null))
                    : (u = arguments[2]),
                  a(e)
                    ? ((n = l.call(e, 'c')),
                      (r = l.call(e, 'e')),
                      (s = l.call(e, 'w')))
                    : ((n = s = !0), (r = !1)),
                  (p = {
                    value: t,
                    configurable: n,
                    enumerable: r,
                    writable: s
                  }),
                  u ? i(o(u), p) : p
                )
              }).gs = function(e, t, n) {
                var s, u, p, c
                return (
                  'string' != typeof e
                    ? ((p = n), (n = t), (t = e), (e = null))
                    : (p = arguments[3]),
                  a(t)
                    ? r(t)
                      ? a(n)
                        ? r(n) || ((p = n), (n = void 0))
                        : (n = void 0)
                      : ((p = t), (t = n = void 0))
                    : (t = void 0),
                  a(e)
                    ? ((s = l.call(e, 'c')), (u = l.call(e, 'e')))
                    : ((s = !0), (u = !1)),
                  (c = { get: t, set: n, configurable: s, enumerable: u }),
                  p ? i(o(p), c) : c
                )
              }
            },
            function(e, t, n) {
              var a = n(9),
                r = /^\s*class[\s{/}]/,
                i = Function.prototype.toString
              e.exports = function(e) {
                return !!a(e) && !r.test(i.call(e))
              }
            },
            function(e, t, n) {
              var a = n(10)
              e.exports = function(e) {
                if ('function' != typeof e) return !1
                if (!hasOwnProperty.call(e, 'length')) return !1
                try {
                  if ('number' != typeof e.length) return !1
                  if ('function' != typeof e.call) return !1
                  if ('function' != typeof e.apply) return !1
                } catch (e) {
                  return !1
                }
                return !a(e)
              }
            },
            function(e, t, n) {
              var a = n(11)
              e.exports = function(e) {
                if (!a(e)) return !1
                try {
                  return !!e.constructor && e.constructor.prototype === e
                } catch (e) {
                  return !1
                }
              }
            },
            function(e, t, n) {
              var a = n(2),
                r = { object: !0, function: !0, undefined: !0 }
              e.exports = function(e) {
                return (
                  !!a(e) &&
                  hasOwnProperty.call(r, void 0 === e ? 'undefined' : o(e))
                )
              }
            },
            function(e, t, n) {
              e.exports = n(13)() ? Object.assign : n(14)
            },
            function(e, t, n) {
              e.exports = function() {
                var e,
                  t = Object.assign
                return (
                  'function' == typeof t &&
                  (t((e = { foo: 'raz' }), { bar: 'dwa' }, { trzy: 'trzy' }),
                  e.foo + e.bar + e.trzy === 'razdwatrzy')
                )
              }
            },
            function(e, t, n) {
              var a = n(15),
                r = n(19),
                i = Math.max
              e.exports = function(e, t) {
                var n,
                  o,
                  l,
                  s = i(arguments.length, 2)
                for (
                  e = Object(r(e)),
                    l = function(a) {
                      try {
                        e[a] = t[a]
                      } catch (e) {
                        n || (n = e)
                      }
                    },
                    o = 1;
                  o < s;
                  ++o
                )
                  a((t = arguments[o])).forEach(l)
                if (void 0 !== n) throw n
                return e
              }
            },
            function(e, t, n) {
              e.exports = n(16)() ? Object.keys : n(17)
            },
            function(e, t, n) {
              e.exports = function() {
                try {
                  return Object.keys('primitive'), !0
                } catch (e) {
                  return !1
                }
              }
            },
            function(e, t, n) {
              var a = n(1),
                r = Object.keys
              e.exports = function(e) {
                return r(a(e) ? Object(e) : e)
              }
            },
            function(e, t, n) {
              e.exports = function() {}
            },
            function(e, t, n) {
              var a = n(1)
              e.exports = function(e) {
                if (!a(e)) throw new TypeError('Cannot use null or undefined')
                return e
              }
            },
            function(e, t, n) {
              var a = n(1),
                r = Array.prototype.forEach,
                i = Object.create,
                o = function(e, t) {
                  var n
                  for (n in e) t[n] = e[n]
                }
              e.exports = function(e) {
                var t = i(null)
                return (
                  r.call(arguments, function(e) {
                    a(e) && o(Object(e), t)
                  }),
                  t
                )
              }
            },
            function(e, t, n) {
              e.exports = n(22)() ? String.prototype.contains : n(23)
            },
            function(e, t, n) {
              var a = 'razdwatrzy'
              e.exports = function() {
                return (
                  'function' == typeof a.contains &&
                  !0 === a.contains('dwa') &&
                  !1 === a.contains('foo')
                )
              }
            },
            function(e, t, n) {
              var a = String.prototype.indexOf
              e.exports = function(e) {
                return a.call(this, e, arguments[1]) > -1
              }
            },
            function(e, t, n) {
              e.exports = function(e) {
                if ('function' != typeof e)
                  throw new TypeError(e + ' is not a function')
                return e
              }
            },
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a = (function() {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var a = t[n]
                      ;(a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                    }
                  }
                  return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                  }
                })(),
                r = o(n(0)),
                i = o(n(26))
              function o(e) {
                return e && e.__esModule ? e : { default: e }
              }
              var l = (function() {
                function e(t) {
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function')
                  })(this, e),
                    (this.danmu = t),
                    (this.main = new i.default(t)),
                    t.config.defaultOff || this.main.start()
                }
                return (
                  a(e, [
                    {
                      key: 'createSwitch',
                      value: function() {
                        var e =
                          !(arguments.length > 0 && void 0 !== arguments[0]) ||
                          arguments[0]
                        return (
                          (this.switchBtn = r.default.createDom(
                            'dk-switch',
                            '<span class="txt">弹</span>',
                            {},
                            'danmu-switch ' + (e ? 'danmu-switch-active' : '')
                          )),
                          this.switchBtn
                        )
                      }
                    },
                    {
                      key: 'destroy',
                      value: function() {
                        for (var e in (this.main.destroy(), this))
                          delete this[e]
                      }
                    }
                  ]),
                  e
                )
              })()
              ;(t.default = l), (e.exports = t.default)
            },
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a = (function() {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var a = t[n]
                      ;(a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                    }
                  }
                  return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                  }
                })(),
                r = l(n(27)),
                i = l(n(28)),
                o = l(n(0))
              function l(e) {
                return e && e.__esModule ? e : { default: e }
              }
              var s = (function() {
                function e(t) {
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function')
                  })(this, e),
                    (this.danmu = t),
                    (this.container = t.container),
                    (this.channel = new r.default(t)),
                    (this.data = [].concat(t.config.comments)),
                    (this.playedData = []),
                    (this.queue = []),
                    (this.timer = null),
                    (this.retryTimer = null),
                    (this.retryStatus = 'normal'),
                    (this.interval = t.config.interval || 2e3),
                    (this.status = 'idle'),
                    o.default.on(
                      t,
                      'bullet_remove',
                      this.updateQueue.bind(this),
                      'destroy'
                    )
                  var n = this
                  o.default.on(
                    this.danmu,
                    'changeDirection',
                    function(e) {
                      n.danmu.direction = e
                    },
                    'destroy'
                  ),
                    (this.nums = 0)
                }
                return (
                  a(e, [
                    {
                      key: 'destroy',
                      value: function() {
                        for (var e in (clearTimeout(this.dataHandleTimer),
                        this.channel.destroy(),
                        (this.data = []),
                        this))
                          delete this[e]
                      }
                    },
                    {
                      key: 'updateQueue',
                      value: function(e) {
                        var t = this
                        t.queue.some(function(n, a) {
                          return (
                            n.id === e.bullet.id && (t.queue.splice(a, 1), !0)
                          )
                        })
                      }
                    },
                    {
                      key: 'init',
                      value: function(e, t) {
                        t || (t = this),
                          (t.retryStatus = 'normal'),
                          t.data.sort(function(e, t) {
                            return e.start - t.start
                          }),
                          t.retryTimer ||
                            (function e() {
                              ;('closed' === t.status &&
                                'stop' === t.retryStatus) ||
                                ('playing' === t.status &&
                                  (t.readData(), t.dataHandle()),
                                ('stop' === t.retryStatus &&
                                  'paused' !== this.status) ||
                                  (t.dataHandleTimer = setTimeout(function() {
                                    e()
                                  }, t.interval - 1e3)))
                            })()
                      }
                    },
                    {
                      key: 'start',
                      value: function() {
                        ;(this.status = 'playing'),
                          (this.queue = []),
                          (this.container.innerHTML = ''),
                          this.channel.resetWithCb(this.init, this)
                      }
                    },
                    {
                      key: 'stop',
                      value: function() {
                        ;(this.status = 'closed'),
                          (this.retryTimer = null),
                          (this.retryStatus = 'stop'),
                          this.channel.reset(),
                          (this.queue = []),
                          (this.container.innerHTML = '')
                      }
                    },
                    {
                      key: 'play',
                      value: function() {
                        var e = this
                        this.status = 'playing'
                        var t = this.channel.channels,
                          n = this.danmu.container.getBoundingClientRect()
                        t &&
                          t.length > 0 &&
                          ['scroll', 'top', 'bottom'].forEach(function(a) {
                            e.queue.forEach(function(e) {
                              e.startMove(n), (e.resized = !0)
                            })
                            for (var r = 0; r < t.length; r++)
                              t[r].queue[a].forEach(function(e) {
                                e.resized = !1
                              })
                          })
                      }
                    },
                    {
                      key: 'pause',
                      value: function() {
                        this.status = 'paused'
                        var e = this.channel.channels,
                          t = this.danmu.container.getBoundingClientRect()
                        e &&
                          e.length > 0 &&
                          this.queue.forEach(function(e) {
                            e.pauseMove(t)
                          })
                      }
                    },
                    {
                      key: 'dataHandle',
                      value: function() {
                        var e = this
                        'paused' !== this.status &&
                          'closed' !== this.status &&
                          e.queue.length &&
                          e.queue.forEach(function(t) {
                            'waiting' === t.status &&
                              t.startMove(e.channel.containerPos)
                          })
                      }
                    },
                    {
                      key: 'readData',
                      value: function() {
                        var e = this,
                          t = this.danmu,
                          n = 0
                        t.player &&
                          t.player.currentTime &&
                          (n = o.default.formatTime(t.player.currentTime))
                        var a = void 0,
                          r = e.interval,
                          l = e.channel,
                          s = void 0
                        t.player
                          ? ((s = e.data.filter(function(t) {
                              return (
                                !t.start &&
                                  e.danmu.hideArr.indexOf(t.mode) < 0 &&
                                  (!t.color ||
                                    e.danmu.hideArr.indexOf('color') < 0) &&
                                  (t.start = n),
                                e.danmu.hideArr.indexOf(t.mode) < 0 &&
                                  (!t.color ||
                                    e.danmu.hideArr.indexOf('color') < 0) &&
                                  t.start - r <= n &&
                                  n <= t.start + r
                              )
                            })),
                            t.live &&
                              (e.data = e.data.filter(function(e) {
                                return (
                                  e.start || (e.start = n), e.start > n - 3 * r
                                )
                              })))
                          : 0 === (s = e.data.splice(0, 1)).length &&
                            (s = e.playedData.splice(0, 1)),
                          s.length > 0 &&
                            s.forEach(function(n) {
                              e.forceDuration &&
                                e.forceDuration != n.duration &&
                                (n.duration = e.forceDuration),
                                (a = new i.default(t, n)),
                                n.hasAttached ||
                                  (a.attach(), (n.hasAttach = !0)),
                                l.addBullet(a).result
                                  ? (e.queue.push(a), e.nums++, a.topInit())
                                  : (a.detach(),
                                    n.noDiscard &&
                                      (n.prior
                                        ? e.data.unshift(n)
                                        : e.data.push(n)))
                            })
                      }
                    }
                  ]),
                  e
                )
              })()
              ;(t.default = s), (e.exports = t.default)
            },
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a,
                r = (function() {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var a = t[n]
                      ;(a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                    }
                  }
                  return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                  }
                })(),
                i = (a = n(0)) && a.__esModule ? a : { default: a },
                o = (function() {
                  function e(t) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function')
                    })(this, e),
                      (this.danmu = t),
                      this.reset()
                    var n = this
                    i.default.on(
                      this.danmu,
                      'bullet_remove',
                      function(e) {
                        n.removeBullet(e.bullet)
                      },
                      'destroy'
                    ),
                      (this.direction = t.direction),
                      i.default.on(
                        this.danmu,
                        'changeDirection',
                        function(e) {
                          n.direction = e
                        },
                        'destroy'
                      ),
                      (this.containerPos = this.danmu.container.getBoundingClientRect()),
                      (this.containerWidth = this.containerPos.width),
                      (this.containerHeight = this.containerPos.height),
                      (this.containerLeft = this.containerPos.left),
                      (this.containerRight = this.containerPos.right),
                      i.default.on(
                        this.danmu,
                        'channel_resize',
                        function() {
                          ;(n.containerPos = n.danmu.container.getBoundingClientRect()),
                            n.resizing ||
                              ((n.containerWidth = n.containerPos.width),
                              (n.containerHeight = n.containerPos.height),
                              (n.containerLeft = n.containerPos.left),
                              (n.containerRight = n.containerPos.right),
                              n.resize(!0))
                        },
                        'destroy'
                      )
                  }
                  return (
                    r(e, [
                      {
                        key: 'destroy',
                        value: function() {
                          for (var e in (clearTimeout(this.resizeTimer),
                          clearTimeout(this.resetTimer),
                          (this.channels = []),
                          this))
                            delete this[e]
                        }
                      },
                      {
                        key: 'resize',
                        value: function() {
                          var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            t = this.danmu.container,
                            n = this
                          n.resizing ||
                            ((n.resizing = !0),
                            (this.resizeTimer = setTimeout(function() {
                              n.danmu.bulletBtn.main.status,
                                n.danmu.bulletBtn.main.data &&
                                  n.danmu.bulletBtn.main.data.forEach(function(
                                    e
                                  ) {
                                    e.bookChannelId && delete e.bookChannelId
                                  })
                              var a = t.getBoundingClientRect()
                              ;(n.width = a.width),
                                (n.height = a.height),
                                n.danmu.config.area &&
                                  n.danmu.config.area.start >= 0 &&
                                  n.danmu.config.area.end >=
                                    n.danmu.config.area.start &&
                                  ('b2t' === n.direction
                                    ? (n.width =
                                        n.width *
                                        (n.danmu.config.area.end -
                                          n.danmu.config.area.start))
                                    : (n.height =
                                        n.height *
                                        (n.danmu.config.area.end -
                                          n.danmu.config.area.start))),
                                (n.container = t)
                              var r,
                                i =
                                  n.danmu.config.channelSize ||
                                  (/mobile/gi.test(navigator.userAgent)
                                    ? 10
                                    : 12)
                              r =
                                'b2t' === n.direction
                                  ? Math.floor(n.width / i)
                                  : Math.floor(n.height / i)
                              for (var o = [], l = 0; l < r; l++)
                                o[l] = {
                                  id: l,
                                  queue: { scroll: [], top: [], bottom: [] },
                                  operating: {
                                    scroll: !1,
                                    top: !1,
                                    bottom: !1
                                  },
                                  bookId: {}
                                }
                              if (n.channels && n.channels.length <= o.length) {
                                for (
                                  var s = function(t) {
                                      ;(o[t] = {
                                        id: t,
                                        queue: {
                                          scroll: [],
                                          top: [],
                                          bottom: []
                                        },
                                        operating: {
                                          scroll: !1,
                                          top: !1,
                                          bottom: !1
                                        },
                                        bookId: {}
                                      }),
                                        ['scroll', 'top'].forEach(function(a) {
                                          n.channels[t].queue[a].forEach(
                                            function(r) {
                                              r.el &&
                                                (o[t].queue[a].push(r),
                                                r.resized ||
                                                  (r.pauseMove(
                                                    n.containerPos,
                                                    e
                                                  ),
                                                  'paused' !==
                                                    r.danmu.bulletBtn.main
                                                      .status &&
                                                    r.startMove(n.containerPos),
                                                  (r.resized = !0)))
                                            }
                                          )
                                        }),
                                        n.channels[t].queue.bottom.forEach(
                                          function(a) {
                                            if (a.el) {
                                              if (
                                                (o[
                                                  t +
                                                    o.length -
                                                    n.channels.length
                                                ].queue.bottom.push(a),
                                                a.channel_id[0] +
                                                  a.channel_id[1] -
                                                  1 ===
                                                  t)
                                              ) {
                                                var r = [].concat(a.channel_id)
                                                ;(a.channel_id = [
                                                  r[0] -
                                                    n.channels.length +
                                                    o.length,
                                                  r[1]
                                                ]),
                                                  (a.top = a.channel_id[0] * i),
                                                  n.danmu.config.area &&
                                                    n.danmu.config.area.start &&
                                                    (a.top +=
                                                      n.containerHeight *
                                                      n.danmu.config.area
                                                        .start),
                                                  a.topInit()
                                              }
                                              a.resized ||
                                                (a.pauseMove(n.containerPos, e),
                                                'paused' !==
                                                  a.danmu.bulletBtn.main
                                                    .status &&
                                                  a.startMove(n.containerPos),
                                                (a.resized = !0))
                                            }
                                          }
                                        )
                                    },
                                    u = 0;
                                  u < n.channels.length;
                                  u++
                                )
                                  s(u)
                                for (
                                  var p = function(e) {
                                      ;['scroll', 'top', 'bottom'].forEach(
                                        function(t) {
                                          o[e].queue[t].forEach(function(e) {
                                            e.resized = !1
                                          })
                                        }
                                      )
                                    },
                                    c = 0;
                                  c < o.length;
                                  c++
                                )
                                  p(c)
                                ;(n.channels = o),
                                  'b2t' === n.direction
                                    ? (n.channelWidth = i)
                                    : (n.channelHeight = i)
                              } else if (
                                n.channels &&
                                n.channels.length > o.length
                              ) {
                                for (
                                  var d = function(t) {
                                      ;(o[t] = {
                                        id: t,
                                        queue: {
                                          scroll: [],
                                          top: [],
                                          bottom: []
                                        },
                                        operating: {
                                          scroll: !1,
                                          top: !1,
                                          bottom: !1
                                        },
                                        bookId: {}
                                      }),
                                        ['scroll', 'top', 'bottom'].forEach(
                                          function(a) {
                                            if (
                                              'top' === a &&
                                              t > Math.floor(o.length / 2)
                                            );
                                            else if (
                                              'bottom' === a &&
                                              t <= Math.floor(o.length / 2)
                                            );
                                            else {
                                              var r =
                                                'bottom' === a
                                                  ? t -
                                                    o.length +
                                                    n.channels.length
                                                  : t
                                              n.channels[r].queue[a].forEach(
                                                function(l, s) {
                                                  if (l.el) {
                                                    if (
                                                      (o[t].queue[a].push(l),
                                                      'bottom' === a &&
                                                        l.channel_id[0] +
                                                          l.channel_id[1] -
                                                          1 ===
                                                          r)
                                                    ) {
                                                      var u = [].concat(
                                                        l.channel_id
                                                      )
                                                      ;(l.channel_id = [
                                                        u[0] -
                                                          n.channels.length +
                                                          o.length,
                                                        u[1]
                                                      ]),
                                                        (l.top =
                                                          l.channel_id[0] * i),
                                                        n.danmu.config.area &&
                                                          n.danmu.config.area
                                                            .start &&
                                                          (l.top +=
                                                            n.containerHeight *
                                                            n.danmu.config.area
                                                              .start),
                                                        l.topInit()
                                                    }
                                                    l.pauseMove(
                                                      n.containerPos,
                                                      e
                                                    ),
                                                      'paused' !==
                                                        l.danmu.bulletBtn.main
                                                          .status &&
                                                        l.startMove(
                                                          n.containerPos
                                                        ),
                                                      l.resized ||
                                                        (l.resized = !0)
                                                  }
                                                  n.channels[r].queue[a].splice(
                                                    s,
                                                    1
                                                  )
                                                }
                                              )
                                            }
                                          }
                                        )
                                    },
                                    f = 0;
                                  f < o.length;
                                  f++
                                )
                                  d(f)
                                for (
                                  var g = function(e) {
                                      ;['scroll', 'top', 'bottom'].forEach(
                                        function(t) {
                                          o[e].queue[t].forEach(function(e) {
                                            e.resized = !1
                                          })
                                        }
                                      )
                                    },
                                    y = 0;
                                  y < o.length;
                                  y++
                                )
                                  g(y)
                                ;(n.channels = o),
                                  'b2t' === n.direction
                                    ? (n.channelWidth = i)
                                    : (n.channelHeight = i)
                              }
                              n.resizing = !1
                            }, 10)))
                        }
                      },
                      {
                        key: 'addBullet',
                        value: function(e) {
                          var t = this,
                            n = this.danmu,
                            a = this.channels,
                            r = void 0,
                            i = void 0,
                            o = void 0
                          if (
                            ('b2t' === t.direction
                              ? ((i = this.channelWidth),
                                (o = Math.ceil(e.width / i)))
                              : ((r = this.channelHeight),
                                (o = Math.ceil(e.height / r))),
                            o > a.length)
                          )
                            return {
                              result: !1,
                              message:
                                'exceed channels.length, occupy=' +
                                o +
                                ',channelsSize=' +
                                a.length
                            }
                          for (
                            var l = !0, s = void 0, u = -1, p = 0, c = a.length;
                            p < c;
                            p++
                          )
                            if (
                              a[p].queue[e.mode].some(function(t) {
                                return t.id === e.id
                              })
                            )
                              return {
                                result: !1,
                                message:
                                  'exsited, channelOrder=' +
                                  p +
                                  ',danmu_id=' +
                                  e.id
                              }
                          if ('scroll' === e.mode)
                            for (var d = 0, f = a.length - o; d <= f; d++) {
                              l = !0
                              for (var g = d; g < d + o; g++) {
                                if ((s = a[g]).operating.scroll) {
                                  l = !1
                                  break
                                }
                                if (
                                  (s.bookId.scroll || e.prior) &&
                                  s.bookId.scroll !== e.id
                                ) {
                                  l = !1
                                  break
                                }
                                s.operating.scroll = !0
                                var y = s.queue.scroll[0]
                                if (y) {
                                  var h = y.el.getBoundingClientRect()
                                  if ('b2t' === t.direction) {
                                    if (h.bottom > t.containerPos.bottom) {
                                      ;(l = !1), (s.operating.scroll = !1)
                                      break
                                    }
                                  } else if (h.right > t.containerPos.right) {
                                    ;(l = !1), (s.operating.scroll = !1)
                                    break
                                  }
                                  var x,
                                    m = void 0,
                                    v = void 0,
                                    b = void 0,
                                    k = void 0
                                  if (
                                    ('b2t' === t.direction
                                      ? ((v =
                                          (h.top -
                                            t.containerPos.top +
                                            h.height) /
                                          (m =
                                            (t.containerPos.height + h.height) /
                                            y.duration)),
                                        (b = t.containerPos.height),
                                        (k =
                                          (t.containerPos.height + e.height) /
                                          e.duration))
                                      : ((v =
                                          (h.left -
                                            t.containerPos.left +
                                            h.width) /
                                          (m =
                                            (t.containerPos.width + h.width) /
                                            y.duration)),
                                        (b = t.containerPos.width),
                                        (k =
                                          (t.containerPos.width + e.width) /
                                          e.duration)),
                                    (x = b / k),
                                    n.config.bOffset || (n.config.bOffset = 0),
                                    m < k && v + n.config.bOffset > x)
                                  ) {
                                    ;(l = !1), (s.operating.scroll = !1)
                                    break
                                  }
                                }
                                s.operating.scroll = !1
                              }
                              if (l) {
                                u = d
                                break
                              }
                            }
                          else if ('top' === e.mode)
                            for (var w = 0, E = a.length - o; w <= E; w++) {
                              l = !0
                              for (var C = w; C < w + o; C++) {
                                if (C > Math.floor(a.length / 2)) {
                                  l = !1
                                  break
                                }
                                if ((s = a[C]).operating[e.mode]) {
                                  l = !1
                                  break
                                }
                                if (
                                  (s.bookId[e.mode] || e.prior) &&
                                  s.bookId[e.mode] !== e.id
                                ) {
                                  l = !1
                                  break
                                }
                                if (
                                  ((s.operating[e.mode] = !0),
                                  s.queue[e.mode].length > 0)
                                ) {
                                  ;(l = !1), (s.operating[e.mode] = !1)
                                  break
                                }
                                s.operating[e.mode] = !1
                              }
                              if (l) {
                                u = w
                                break
                              }
                            }
                          else if ('bottom' === e.mode)
                            for (var _ = a.length - o; _ >= 0; _--) {
                              l = !0
                              for (var T = _; T < _ + o; T++) {
                                if (T <= Math.floor(a.length / 2)) {
                                  l = !1
                                  break
                                }
                                if ((s = a[T]).operating[e.mode]) {
                                  l = !1
                                  break
                                }
                                if (
                                  (s.bookId[e.mode] || e.prior) &&
                                  s.bookId[e.mode] !== e.id
                                ) {
                                  l = !1
                                  break
                                }
                                if (
                                  ((s.operating[e.mode] = !0),
                                  s.queue[e.mode].length > 0)
                                ) {
                                  ;(l = !1), (s.operating[e.mode] = !1)
                                  break
                                }
                                s.operating[e.mode] = !1
                              }
                              if (l) {
                                u = _
                                break
                              }
                            }
                          if (-1 !== u) {
                            for (var S = u, P = u + o; S < P; S++)
                              ((s = a[S]).operating[e.mode] = !0),
                                s.queue[e.mode].unshift(e),
                                e.prior && delete s.bookId[e.mode],
                                (s.operating[e.mode] = !1)
                            return (
                              e.prior &&
                                (delete e.bookChannelId,
                                n.player &&
                                  n.bulletBtn.main.data.some(function(t) {
                                    return (
                                      t.id === e.id &&
                                      (delete t.bookChannelId, !0)
                                    )
                                  })),
                              (e.channel_id = [u, o]),
                              'b2t' === t.direction
                                ? ((e.top = u * i),
                                  t.danmu.config.area &&
                                    t.danmu.config.area.start &&
                                    (e.top +=
                                      t.containerWidth *
                                      t.danmu.config.area.start))
                                : ((e.top = u * r),
                                  t.danmu.config.area &&
                                    t.danmu.config.area.start &&
                                    (e.top +=
                                      t.containerHeight *
                                      t.danmu.config.area.start)),
                              { result: e, message: 'success' }
                            )
                          }
                          if (e.options.realTime) {
                            var L = 0,
                              D = null
                            if (
                              (t.danmu.bulletBtn.main.queue.forEach(function(
                                e,
                                n
                              ) {
                                e.el &&
                                  e.el.getBoundingClientRect().right >
                                    t.containerPos.right &&
                                  e.start >= L &&
                                  ((L = e.start), (D = e))
                              }),
                              D)
                            ) {
                              e.channel_id = D.channel_id
                              for (
                                var M = D.channel_id[0],
                                  R = D.channel_id[0] + D.channel_id[1];
                                M < R;
                                M++
                              )
                                ((s = a[M]).operating[e.mode] = !0),
                                  s.queue[e.mode].unshift(e),
                                  e.prior && delete s.bookId[e.mode],
                                  (s.operating[e.mode] = !1)
                              return (
                                (e.top = D.top),
                                t.danmu.config.area &&
                                  t.danmu.config.area.start &&
                                  (e.top +=
                                    t.containerHeight *
                                    t.danmu.config.area.start),
                                { result: e, message: 'success' }
                              )
                            }
                          }
                          if (e.prior)
                            if (e.bookChannelId)
                              n.player &&
                                n.bulletBtn.main.data.some(function(t) {
                                  return t.id === e.id && ((t.start += 2e3), !0)
                                })
                            else {
                              u = -1
                              for (var O = 0, A = a.length - o; O <= A; O++) {
                                l = !0
                                for (var z = O; z < O + o; z++)
                                  if (a[z].bookId[e.mode]) {
                                    l = !1
                                    break
                                  }
                                if (l) {
                                  u = O
                                  break
                                }
                              }
                              if (-1 !== u) {
                                for (var B = u; B < u + o; B++)
                                  a[B].bookId[e.mode] = e.id
                                n.player &&
                                  n.bulletBtn.main.data.some(function(t) {
                                    return (
                                      t.id === e.id &&
                                      ((t.start += 2e3),
                                      (t.bookChannelId = [u, o]),
                                      !0)
                                    )
                                  })
                              }
                            }
                          return {
                            result: !1,
                            message: 'no surplus will right'
                          }
                        }
                      },
                      {
                        key: 'removeBullet',
                        value: function(e) {
                          for (
                            var t = this.channels,
                              n = e.channel_id,
                              a = void 0,
                              r = n[0],
                              i = n[0] + n[1];
                            r < i;
                            r++
                          )
                            if ((a = t[r])) {
                              a.operating[e.mode] = !0
                              var o = -1
                              a.queue[e.mode].some(function(t, n) {
                                return t.id === e.id && ((o = n), !0)
                              }),
                                o > -1 && a.queue[e.mode].splice(o, 1),
                                (a.operating[e.mode] = !1)
                            }
                          e.options.loop &&
                            this.danmu.bulletBtn.main.playedData.push(e.options)
                        }
                      },
                      {
                        key: 'resetArea',
                        value: function() {
                          var e = this.danmu.container,
                            t = this,
                            n = e.getBoundingClientRect()
                          ;(t.width = n.width),
                            (t.height = n.height),
                            t.danmu.config.area &&
                              t.danmu.config.area.start >= 0 &&
                              t.danmu.config.area.end >=
                                t.danmu.config.area.start &&
                              ('b2t' === t.direction
                                ? (t.width =
                                    t.width *
                                    (t.danmu.config.area.end -
                                      t.danmu.config.area.start))
                                : (t.height =
                                    t.height *
                                    (t.danmu.config.area.end -
                                      t.danmu.config.area.start))),
                            (t.container = e)
                          var a,
                            r =
                              t.danmu.config.channelSize ||
                              (/mobile/gi.test(navigator.userAgent) ? 10 : 12)
                          a =
                            'b2t' === t.direction
                              ? Math.floor(t.width / r)
                              : Math.floor(t.height / r)
                          for (var i = [], o = 0; o < a; o++)
                            i[o] = {
                              id: o,
                              queue: { scroll: [], top: [], bottom: [] },
                              operating: { scroll: !1, top: !1, bottom: !1 },
                              bookId: {}
                            }
                          if (t.channels && t.channels.length <= i.length) {
                            for (
                              var l = function(e) {
                                  ;(i[e] = {
                                    id: e,
                                    queue: { scroll: [], top: [], bottom: [] },
                                    operating: {
                                      scroll: !1,
                                      top: !1,
                                      bottom: !1
                                    },
                                    bookId: {}
                                  }),
                                    ['scroll', 'top'].forEach(function(n) {
                                      t.channels[e].queue[n].forEach(function(
                                        a
                                      ) {
                                        a.el &&
                                          (i[e].queue[n].push(a),
                                          a.resized ||
                                            (a.pauseMove(t.containerPos, !1),
                                            a.startMove(t.containerPos),
                                            (a.resized = !0)))
                                      })
                                    }),
                                    t.channels[e].queue.bottom.forEach(function(
                                      n
                                    ) {
                                      if (n.el) {
                                        if (
                                          (i[
                                            e + i.length - t.channels.length
                                          ].queue.bottom.push(n),
                                          n.channel_id[0] +
                                            n.channel_id[1] -
                                            1 ===
                                            e)
                                        ) {
                                          var a = [].concat(n.channel_id)
                                          ;(n.channel_id = [
                                            a[0] - t.channels.length + i.length,
                                            a[1]
                                          ]),
                                            (n.top = n.channel_id[0] * r),
                                            t.danmu.config.area &&
                                              t.danmu.config.area.start &&
                                              (n.top +=
                                                t.containerHeight *
                                                t.danmu.config.area.start),
                                            n.topInit()
                                        }
                                        n.resized ||
                                          (n.pauseMove(t.containerPos, !1),
                                          n.startMove(t.containerPos),
                                          (n.resized = !0))
                                      }
                                    })
                                },
                                s = 0;
                              s < t.channels.length;
                              s++
                            )
                              l(s)
                            for (
                              var u = function(e) {
                                  ;['scroll', 'top', 'bottom'].forEach(function(
                                    t
                                  ) {
                                    i[e].queue[t].forEach(function(e) {
                                      e.resized = !1
                                    })
                                  })
                                },
                                p = 0;
                              p < i.length;
                              p++
                            )
                              u(p)
                            ;(t.channels = i),
                              'b2t' === t.direction
                                ? (t.channelWidth = r)
                                : (t.channelHeight = r)
                          } else if (
                            t.channels &&
                            t.channels.length > i.length
                          ) {
                            for (
                              var c = function(e) {
                                  ;(i[e] = {
                                    id: e,
                                    queue: { scroll: [], top: [], bottom: [] },
                                    operating: {
                                      scroll: !1,
                                      top: !1,
                                      bottom: !1
                                    },
                                    bookId: {}
                                  }),
                                    ['scroll', 'top', 'bottom'].forEach(
                                      function(n) {
                                        if (
                                          'top' === n &&
                                          e > Math.floor(i.length / 2)
                                        );
                                        else if (
                                          'bottom' === n &&
                                          e <= Math.floor(i.length / 2)
                                        );
                                        else {
                                          var a =
                                            'bottom' === n
                                              ? e - i.length + t.channels.length
                                              : e
                                          t.channels[a].queue[n].forEach(
                                            function(o, l) {
                                              if (o.el) {
                                                if (
                                                  (i[e].queue[n].push(o),
                                                  'bottom' === n &&
                                                    o.channel_id[0] +
                                                      o.channel_id[1] -
                                                      1 ===
                                                      a)
                                                ) {
                                                  var s = [].concat(
                                                    o.channel_id
                                                  )
                                                  ;(o.channel_id = [
                                                    s[0] -
                                                      t.channels.length +
                                                      i.length,
                                                    s[1]
                                                  ]),
                                                    (o.top =
                                                      o.channel_id[0] * r),
                                                    t.danmu.config.area &&
                                                      t.danmu.config.area
                                                        .start &&
                                                      (o.top +=
                                                        t.containerHeight *
                                                        t.danmu.config.area
                                                          .start),
                                                    o.topInit()
                                                }
                                                o.resized ||
                                                  (o.pauseMove(
                                                    t.containerPos,
                                                    !1
                                                  ),
                                                  o.startMove(t.containerPos),
                                                  (o.resized = !0))
                                              }
                                              t.channels[a].queue[n].splice(
                                                l,
                                                1
                                              )
                                            }
                                          )
                                        }
                                      }
                                    )
                                },
                                d = 0;
                              d < i.length;
                              d++
                            )
                              c(d)
                            for (
                              var f = function(e) {
                                  ;['scroll', 'top', 'bottom'].forEach(function(
                                    t
                                  ) {
                                    i[e].queue[t].forEach(function(e) {
                                      e.resized = !1
                                    })
                                  })
                                },
                                g = 0;
                              g < i.length;
                              g++
                            )
                              f(g)
                            ;(t.channels = i),
                              'b2t' === t.direction
                                ? (t.channelWidth = r)
                                : (t.channelHeight = r)
                          }
                        }
                      },
                      {
                        key: 'reset',
                        value: function() {
                          var e = this.danmu.container,
                            t = this
                          t.danmu.bulletBtn &&
                            t.danmu.bulletBtn.main &&
                            t.danmu.bulletBtn.main.queue.forEach(function(e) {
                              e.pauseMove(t.containerPos), e.remove()
                            }),
                            t.channels &&
                              t.channels.length > 0 &&
                              ['scroll', 'top', 'bottom'].forEach(function(e) {
                                for (var n = 0; n < t.channels.length; n++)
                                  t.channels[n].queue[e].forEach(function(e) {
                                    e.pauseMove(t.containerPos), e.remove()
                                  })
                              }),
                            (this.resetTimer = setTimeout(function() {
                              var n = e.getBoundingClientRect()
                              ;(t.width = n.width),
                                (t.height = n.height),
                                t.danmu.config.area &&
                                  t.danmu.config.area.start >= 0 &&
                                  t.danmu.config.area.end >=
                                    t.danmu.config.area.start &&
                                  ('b2t' === t.direction
                                    ? (t.width =
                                        t.width *
                                        (t.danmu.config.area.end -
                                          t.danmu.config.area.start))
                                    : (t.height =
                                        t.height *
                                        (t.danmu.config.area.end -
                                          t.danmu.config.area.start))),
                                (t.container = e)
                              var a,
                                r =
                                  t.danmu.config.channelSize ||
                                  (/mobile/gi.test(navigator.userAgent)
                                    ? 10
                                    : 12)
                              a =
                                'b2t' === t.direction
                                  ? Math.floor(t.width / r)
                                  : Math.floor(t.height / r)
                              for (var i = [], o = 0; o < a; o++)
                                i[o] = {
                                  id: o,
                                  queue: { scroll: [], top: [], bottom: [] },
                                  operating: {
                                    scroll: !1,
                                    top: !1,
                                    bottom: !1
                                  },
                                  bookId: {}
                                }
                              ;(t.channels = i),
                                'b2t' === t.direction
                                  ? (t.channelWidth = r)
                                  : (t.channelHeight = r)
                            }, 200))
                        }
                      },
                      {
                        key: 'resetWithCb',
                        value: function(e, t) {
                          var n = this.danmu.container,
                            a = this
                          a.channels &&
                            a.channels.length > 0 &&
                            ['scroll', 'top', 'bottom'].forEach(function(e) {
                              for (var t = 0; t < a.channels.length; t++)
                                a.channels[t].queue[e].forEach(function(e) {
                                  e.pauseMove(a.containerPos), e.remove()
                                })
                            })
                          var r = n.getBoundingClientRect()
                          ;(a.width = r.width),
                            (a.height = r.height),
                            a.danmu.config.area &&
                              a.danmu.config.area.start >= 0 &&
                              a.danmu.config.area.end >=
                                a.danmu.config.area.start &&
                              ('b2t' === a.direction
                                ? (a.width =
                                    a.width *
                                    (a.danmu.config.area.end -
                                      a.danmu.config.area.start))
                                : (a.height =
                                    a.height *
                                    (a.danmu.config.area.end -
                                      a.danmu.config.area.start))),
                            (a.container = n)
                          var i,
                            o =
                              a.danmu.config.channelSize ||
                              (/mobile/gi.test(navigator.userAgent) ? 10 : 12)
                          i =
                            'b2t' === a.direction
                              ? Math.floor(a.width / o)
                              : Math.floor(a.height / o)
                          for (var l = [], s = 0; s < i; s++)
                            l[s] = {
                              id: s,
                              queue: { scroll: [], top: [], bottom: [] },
                              operating: { scroll: !1, top: !1, bottom: !1 },
                              bookId: {}
                            }
                          ;(a.channels = l),
                            (a.channelHeight = o),
                            e && e(!0, t)
                        }
                      }
                    ]),
                    e
                  )
                })()
              ;(t.default = o), (e.exports = t.default)
            },
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a,
                r = (function() {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var a = t[n]
                      ;(a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                    }
                  }
                  return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                  }
                })(),
                i = (a = n(0)) && a.__esModule ? a : { default: a },
                o = (function() {
                  function e(t, n) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function')
                    })(this, e),
                      (this.danmu = t),
                      (this.options = n),
                      (this.duration = n.duration),
                      (this.moveV = n.moveV),
                      (this.id = n.id),
                      (this.container = t.container),
                      (this.start = n.start),
                      (this.prior = n.prior),
                      (this.color = n.color),
                      (this.bookChannelId = n.bookChannelId),
                      (this.direction = t.direction)
                    var a = this
                    ;(this.onChangeDirection = function(e) {
                      a.direction = e
                    }),
                      this.danmu.on('changeDirection', this.onChangeDirection)
                    var r = void 0
                    if (((this.domObj = t.domObj), n.el && 1 === n.el.nodeType))
                      (r = this.domObj.use()).appendChild(
                        i.default.copyDom(n.el)
                      )
                    else if (
                      (((r = this.domObj.use()).textContent = n.txt), n.style)
                    ) {
                      var o = n.style
                      Object.keys(o).forEach(function(e) {
                        r.style[e] = o[e]
                      })
                    }
                    'top' === n.mode || 'bottom' === n.mode
                      ? (this.mode = n.mode)
                      : (this.mode = 'scroll'),
                      (this.el = r),
                      n.like &&
                        n.like.el &&
                        this.setLikeDom(n.like.el, n.like.style),
                      (this.status = 'waiting')
                    var l = this.container.getBoundingClientRect(),
                      s = Math.floor(
                        Math.random() *
                          (l.width / 10 > 100 ? 200 : l.width / 10)
                      )
                    n.realTime && (s = 0),
                      (this.el.style.left = l.width + s + 'px'),
                      (this.containerPos = l)
                  }
                  return (
                    r(e, [
                      {
                        key: 'attach',
                        value: function() {
                          if (
                            (this.container.appendChild(this.el),
                            (this.elPos = this.el.getBoundingClientRect()),
                            'b2t' === this.direction
                              ? ((this.width = this.elPos.height),
                                (this.height = this.elPos.width))
                              : ((this.width = this.elPos.width),
                                (this.height = this.elPos.height)),
                            this.moveV)
                          ) {
                            var e = this.containerPos
                            this.duration =
                              ((e.width + this.width) / this.moveV) * 1e3
                          }
                          this.danmu.config.mouseControl &&
                            this.el.addEventListener(
                              'mouseover',
                              this.mouseoverFun.bind(this)
                            )
                        }
                      },
                      {
                        key: 'mouseoverFun',
                        value: function(e) {
                          ;(this.danmu.mouseControl &&
                            this.danmu.config.mouseControlPause) ||
                            'waiting' === this.status ||
                            'end' === this.status ||
                            this.danmu.emit('bullet_hover', {
                              bullet: this,
                              event: e
                            })
                        }
                      },
                      {
                        key: 'detach',
                        value: function() {
                          this.container &&
                            this.el &&
                            this.domObj.unuse(this.el),
                            this.danmu.off(
                              'changeDirection',
                              this.onChangeDirection
                            )
                        }
                      },
                      {
                        key: 'topInit',
                        value: function() {
                          if ('b2t' === this.direction) {
                            var e = this.containerPos
                            ;(this.el.style.transformOrigin = 'left top'),
                              (this.el.style.transform =
                                'translateX(-' +
                                this.top +
                                'px) translateY(' +
                                e.height +
                                'px) translateZ(0px) rotate(90deg)'),
                              (this.el.style.transition =
                                'transform 0s linear 0s')
                          } else this.el.style.top = this.top + 'px'
                        }
                      },
                      {
                        key: 'pauseMove',
                        value: function(e) {
                          var t =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            n = this
                          if (
                            'paused' !== this.status &&
                            ('forcedPause' !== n.status &&
                              (this.status = 'paused'),
                            clearTimeout(n.removeTimer),
                            this.el)
                          )
                            if (
                              ((this.el.style.willChange = 'auto'),
                              'scroll' === this.mode)
                            ) {
                              if (t) {
                                var a =
                                    (new Date().getTime() - n.moveTime) / 1e3,
                                  r = a * this.moveV,
                                  i = 0
                                ;(i =
                                  n.moveMoreS - r >= 0
                                    ? 'b2t' === this.direction
                                      ? ((n.moveMoreS - r) /
                                          n.moveContainerHeight) *
                                        e.height
                                      : ((n.moveMoreS - r) /
                                          n.moveContainerWidth) *
                                        e.width
                                    : n.moveMoreS - r),
                                  'b2t' === this.direction
                                    ? (this.el.style.transform =
                                        'translateX(-' +
                                        this.top +
                                        'px) translateY(' +
                                        i +
                                        'px) translateZ(0px) rotate(90deg)')
                                    : (this.el.style.left = i + 'px')
                              } else
                                'b2t' === this.direction
                                  ? (this.el.style.transform =
                                      'translateX(-' +
                                      this.top +
                                      'px) translateY(' +
                                      (this.el.getBoundingClientRect().top -
                                        e.top) +
                                      'px) translateZ(0px) rotate(90deg)')
                                  : (this.el.style.left =
                                      this.el.getBoundingClientRect().left -
                                      e.left +
                                      'px')
                              'b2t' === this.direction ||
                                (this.el.style.transform =
                                  'translateX(0px) translateY(0px) translateZ(0px)'),
                                (this.el.style.transition =
                                  'transform 0s linear 0s')
                            } else
                              this.pastDuration && this.startTime
                                ? (this.pastDuration =
                                    this.pastDuration +
                                    new Date().getTime() -
                                    this.startTime)
                                : (this.pastDuration = 1)
                        }
                      },
                      {
                        key: 'startMove',
                        value: function(e, t) {
                          var n = this
                          if (
                            (n.hasMove ||
                              (n.danmu.emit('bullet_start', n),
                              (n.hasMove = !0)),
                            ('forcedPause' !== n.status || t) &&
                              this.el &&
                              'start' !== this.status)
                          )
                            if (
                              ((this.status = 'start'),
                              (this.el.style.willChange = 'transform'),
                              'scroll' === this.mode)
                            )
                              if ('b2t' === this.direction) {
                                this.moveV =
                                  ((e.height + this.height) / this.duration) *
                                  1e3
                                var a =
                                  (n.el.getBoundingClientRect().bottom -
                                    e.top) /
                                  this.moveV
                                ;(this.el.style.transition =
                                  'transform ' + a + 's linear 0s'),
                                  (this.startMoveTimer = setTimeout(function() {
                                    n.el &&
                                      ((n.el.style.transform =
                                        'translateX(-' +
                                        n.top +
                                        'px) translateY(-' +
                                        n.height +
                                        'px) translateZ(0px) rotate(90deg)'),
                                      (n.moveTime = new Date().getTime()),
                                      (n.moveMoreS =
                                        n.el.getBoundingClientRect().top -
                                        e.top),
                                      (n.moveContainerHeight = e.height),
                                      (n.removeTimer = setTimeout(o, 1e3 * a)))
                                  }, 20))
                              } else {
                                this.moveV =
                                  ((e.width + this.width) / this.duration) * 1e3
                                var r =
                                  (n.el.getBoundingClientRect().right -
                                    e.left) /
                                  this.moveV
                                ;(this.el.style.transition =
                                  'transform ' + r + 's linear 0s'),
                                  (this.startMoveTimer = setTimeout(function() {
                                    n.el &&
                                      ((n.el.style.transform =
                                        'translateX(-' +
                                        (n.el.getBoundingClientRect().right -
                                          e.left) +
                                        'px) translateY(0px) translateZ(0px)'),
                                      (n.moveTime = new Date().getTime()),
                                      (n.moveMoreS =
                                        n.el.getBoundingClientRect().left -
                                        e.left),
                                      (n.moveContainerWidth = e.width),
                                      (n.removeTimer = setTimeout(o, 1e3 * r)))
                                  }, 20))
                              }
                            else {
                              ;(this.el.style.left = '50%'),
                                (this.el.style.margin =
                                  '0 0 0 -' + this.width / 2 + 'px'),
                                this.pastDuration || (this.pastDuration = 1)
                              var i =
                                this.duration >= this.pastDuration
                                  ? this.duration - this.pastDuration
                                  : 0
                              ;(this.removeTimer = setTimeout(o, i)),
                                (this.startTime = new Date().getTime())
                            }
                          function o() {
                            if (n.el)
                              if ('scroll' === n.mode) {
                                var e = n.containerPos,
                                  t = n.el.getBoundingClientRect()
                                'b2t' === n.direction
                                  ? t && t.bottom <= e.top + 100
                                    ? ((n.status = 'end'), n.remove())
                                    : (n.pauseMove(e),
                                      'paused' !==
                                        n.danmu.bulletBtn.main.status &&
                                        n.startMove(e))
                                  : t && t.right <= e.left + 100
                                    ? ((n.status = 'end'), n.remove())
                                    : (n.pauseMove(e),
                                      'paused' !==
                                        n.danmu.bulletBtn.main.status &&
                                        n.startMove(e))
                              } else (n.status = 'end'), n.remove()
                          }
                        }
                      },
                      {
                        key: 'remove',
                        value: function() {
                          this.removeTimer && clearTimeout(this.removeTimer),
                            this.startMoveTimer &&
                              clearTimeout(this.startMoveTimer),
                            this.el &&
                              this.el.parentNode &&
                              ((this.el.style.willChange = 'auto'),
                              this.danmu.off(
                                'changeDirection',
                                this.onChangeDirection
                              ),
                              this.domObj.unuse(this.el),
                              this.el.parentNode.removeChild(this.el),
                              (this.el = null),
                              this.danmu.emit('bullet_remove', {
                                bullet: this
                              }))
                        }
                      },
                      {
                        key: 'setFontSize',
                        value: function(e) {
                          this.el && (this.el.style.fontSize = e)
                        }
                      },
                      {
                        key: 'setLikeDom',
                        value: function(e, t) {
                          if (
                            e &&
                            (Object.keys(t).forEach(function(n) {
                              e.style[n] = t[n]
                            }),
                            (e.className = 'danmu-like'),
                            this.el)
                          ) {
                            var n = this.el.querySelector('.danmu-like')
                            n && this.el.removeChild(n),
                              (this.el.innerHTML =
                                '' + this.el.innerHTML + e.outerHTML)
                          }
                          return e
                        }
                      }
                    ]),
                    e
                  )
                })()
              ;(t.default = o), (e.exports = t.default)
            },
            function(e, t, n) {
              Object.defineProperty(t, '__esModule', { value: !0 })
              var a = (function() {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var a = t[n]
                      ;(a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                    }
                  }
                  return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                  }
                })(),
                r = (function() {
                  function e(t) {
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function')
                    })(this, e),
                      (t = {
                        initDOM: function() {
                          return document.createElement('div')
                        },
                        initSize: 10
                      }),
                      this.init(t)
                  }
                  return (
                    a(e, [
                      {
                        key: 'init',
                        value: function(e) {
                          ;(this.idleList = []),
                            (this.usingList = []),
                            (this._id = 0),
                            (this.options = e),
                            this._expand(e.initSize)
                        }
                      },
                      {
                        key: 'use',
                        value: function() {
                          this.idleList.length || this._expand(1)
                          var e = this.idleList.shift()
                          return this.usingList.push(e), e
                        }
                      },
                      {
                        key: 'unuse',
                        value: function(e) {
                          var t = this.usingList.indexOf(e)
                          t < 0 ||
                            (this.usingList.splice(t, 1),
                            (e.innerHTML = ''),
                            (e.textcontent = ''),
                            (e.style = ''),
                            this.idleList.push(e))
                        }
                      },
                      {
                        key: '_expand',
                        value: function(e) {
                          for (var t = 0; t < e; t++)
                            this.idleList.push(this.options.initDOM(this._id++))
                        }
                      },
                      {
                        key: 'destroy',
                        value: function() {
                          for (var e = 0; e < this.idleList.length; e++)
                            (this.idleList[e].innerHTML = ''),
                              (this.idleList[e].textcontent = ''),
                              (this.idleList[e].style = '')
                          for (var t = 0; t < this.usingList.length; t++)
                            (this.usingList[t].innerHTML = ''),
                              (this.usingList[t].textcontent = ''),
                              (this.usingList[t].style = '')
                          for (var n in this) delete this[n]
                        }
                      }
                    ]),
                    e
                  )
                })()
              ;(t.default = r), (e.exports = t.default)
            },
            function(e, t, n) {
              var a = n(31)
              'string' == typeof a && (a = [[e.i, a, '']]),
                n(33)(a, { hmr: !0, transform: void 0, insertInto: void 0 }),
                a.locals && (e.exports = a.locals)
            },
            function(e, t, n) {
              ;(e.exports = n(32)(!1)).push([
                e.i,
                '.danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#ffffff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}\n',
                ''
              ])
            },
            function(e, t) {
              e.exports = function(e) {
                var t = []
                return (
                  (t.toString = function() {
                    return this.map(function(t) {
                      var n = (function(e, t) {
                        var n,
                          a = e[1] || '',
                          r = e[3]
                        if (!r) return a
                        if (t && 'function' == typeof btoa) {
                          var i = ((n = r),
                            '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(n)))
                              ) +
                              ' */'),
                            o = r.sources.map(function(e) {
                              return '/*# sourceURL=' + r.sourceRoot + e + ' */'
                            })
                          return [a]
                            .concat(o)
                            .concat([i])
                            .join('\n')
                        }
                        return [a].join('\n')
                      })(t, e)
                      return t[2] ? '@media ' + t[2] + '{' + n + '}' : n
                    }).join('')
                  }),
                  (t.i = function(e, n) {
                    'string' == typeof e && (e = [[null, e, '']])
                    for (var a = {}, r = 0; r < this.length; r++) {
                      var i = this[r][0]
                      'number' == typeof i && (a[i] = !0)
                    }
                    for (r = 0; r < e.length; r++) {
                      var o = e[r]
                      ;('number' == typeof o[0] && a[o[0]]) ||
                        (n && !o[2]
                          ? (o[2] = n)
                          : n && (o[2] = '(' + o[2] + ') and (' + n + ')'),
                        t.push(o))
                    }
                  }),
                  t
                )
              }
            },
            function(e, t, n) {
              var a,
                r,
                i = {},
                l = ((a = function() {
                  return window && document && document.all && !window.atob
                }),
                function() {
                  return void 0 === r && (r = a.apply(this, arguments)), r
                }),
                s = function(e) {
                  return document.querySelector(e)
                },
                u = (function(e) {
                  var t = {}
                  return function(e) {
                    if ('function' == typeof e) return e()
                    if (void 0 === t[e]) {
                      var n = s.call(this, e)
                      if (
                        window.HTMLIFrameElement &&
                        n instanceof window.HTMLIFrameElement
                      )
                        try {
                          n = n.contentDocument.head
                        } catch (e) {
                          n = null
                        }
                      t[e] = n
                    }
                    return t[e]
                  }
                })(),
                p = null,
                c = 0,
                d = [],
                f = n(34)
              function g(e, t) {
                for (var n = 0; n < e.length; n++) {
                  var a = e[n],
                    r = i[a.id]
                  if (r) {
                    r.refs++
                    for (var o = 0; o < r.parts.length; o++)
                      r.parts[o](a.parts[o])
                    for (; o < a.parts.length; o++)
                      r.parts.push(b(a.parts[o], t))
                  } else {
                    var l = []
                    for (o = 0; o < a.parts.length; o++)
                      l.push(b(a.parts[o], t))
                    i[a.id] = { id: a.id, refs: 1, parts: l }
                  }
                }
              }
              function y(e, t) {
                for (var n = [], a = {}, r = 0; r < e.length; r++) {
                  var i = e[r],
                    o = t.base ? i[0] + t.base : i[0],
                    l = { css: i[1], media: i[2], sourceMap: i[3] }
                  a[o]
                    ? a[o].parts.push(l)
                    : n.push((a[o] = { id: o, parts: [l] }))
                }
                return n
              }
              function h(e, t) {
                var n = u(e.insertInto)
                if (!n)
                  throw new Error(
                    "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                  )
                var a = d[d.length - 1]
                if ('top' === e.insertAt)
                  a
                    ? a.nextSibling
                      ? n.insertBefore(t, a.nextSibling)
                      : n.appendChild(t)
                    : n.insertBefore(t, n.firstChild),
                    d.push(t)
                else if ('bottom' === e.insertAt) n.appendChild(t)
                else {
                  if ('object' != o(e.insertAt) || !e.insertAt.before)
                    throw new Error(
                      "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                    )
                  var r = u(e.insertInto + ' ' + e.insertAt.before)
                  n.insertBefore(t, r)
                }
              }
              function x(e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
                var t = d.indexOf(e)
                t >= 0 && d.splice(t, 1)
              }
              function m(e) {
                var t = document.createElement('style')
                return (
                  void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                  v(t, e.attrs),
                  h(e, t),
                  t
                )
              }
              function v(e, t) {
                Object.keys(t).forEach(function(n) {
                  e.setAttribute(n, t[n])
                })
              }
              function b(e, t) {
                var n, a, r, i
                if (t.transform && e.css) {
                  if (!(i = t.transform(e.css))) return function() {}
                  e.css = i
                }
                if (t.singleton) {
                  var o = c++
                  ;(n = p || (p = m(t))),
                    (a = E.bind(null, n, o, !1)),
                    (r = E.bind(null, n, o, !0))
                } else
                  e.sourceMap &&
                  'function' == typeof URL &&
                  'function' == typeof URL.createObjectURL &&
                  'function' == typeof URL.revokeObjectURL &&
                  'function' == typeof Blob &&
                  'function' == typeof btoa
                    ? ((n = (function(e) {
                        var t = document.createElement('link')
                        return (
                          void 0 === e.attrs.type &&
                            (e.attrs.type = 'text/css'),
                          (e.attrs.rel = 'stylesheet'),
                          v(t, e.attrs),
                          h(e, t),
                          t
                        )
                      })(t)),
                      (a = _.bind(null, n, t)),
                      (r = function() {
                        x(n), n.href && URL.revokeObjectURL(n.href)
                      }))
                    : ((n = m(t)),
                      (a = C.bind(null, n)),
                      (r = function() {
                        x(n)
                      }))
                return (
                  a(e),
                  function(t) {
                    if (t) {
                      if (
                        t.css === e.css &&
                        t.media === e.media &&
                        t.sourceMap === e.sourceMap
                      )
                        return
                      a((e = t))
                    } else r()
                  }
                )
              }
              e.exports = function(e, t) {
                if (
                  'undefined' != typeof DEBUG &&
                  DEBUG &&
                  'object' !=
                    ('undefined' == typeof document ? 'undefined' : o(document))
                )
                  throw new Error(
                    'The style-loader cannot be used in a non-browser environment'
                  )
                ;((t = t || {}).attrs = 'object' == o(t.attrs) ? t.attrs : {}),
                  t.singleton ||
                    'boolean' == typeof t.singleton ||
                    (t.singleton = l()),
                  t.insertInto || (t.insertInto = 'head'),
                  t.insertAt || (t.insertAt = 'bottom')
                var n = y(e, t)
                return (
                  g(n, t),
                  function(e) {
                    for (var a = [], r = 0; r < n.length; r++) {
                      var o = n[r]
                      ;(l = i[o.id]).refs--, a.push(l)
                    }
                    for (e && g(y(e, t), t), r = 0; r < a.length; r++) {
                      var l
                      if (0 === (l = a[r]).refs) {
                        for (var s = 0; s < l.parts.length; s++) l.parts[s]()
                        delete i[l.id]
                      }
                    }
                  }
                )
              }
              var k,
                w = ((k = []),
                function(e, t) {
                  return (k[e] = t), k.filter(Boolean).join('\n')
                })
              function E(e, t, n, a) {
                var r = n ? '' : a.css
                if (e.styleSheet) e.styleSheet.cssText = w(t, r)
                else {
                  var i = document.createTextNode(r),
                    o = e.childNodes
                  o[t] && e.removeChild(o[t]),
                    o.length ? e.insertBefore(i, o[t]) : e.appendChild(i)
                }
              }
              function C(e, t) {
                var n = t.css,
                  a = t.media
                if ((a && e.setAttribute('media', a), e.styleSheet))
                  e.styleSheet.cssText = n
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild)
                  e.appendChild(document.createTextNode(n))
                }
              }
              function _(e, t, n) {
                var a = n.css,
                  r = n.sourceMap,
                  i = void 0 === t.convertToAbsoluteUrls && r
                ;(t.convertToAbsoluteUrls || i) && (a = f(a)),
                  r &&
                    (a +=
                      '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                      ' */')
                var o = new Blob([a], { type: 'text/css' }),
                  l = e.href
                ;(e.href = URL.createObjectURL(o)), l && URL.revokeObjectURL(l)
              }
            },
            function(e, t) {
              e.exports = function(e) {
                var t = 'undefined' != typeof window && window.location
                if (!t) throw new Error('fixUrls requires window.location')
                if (!e || 'string' != typeof e) return e
                var n = t.protocol + '//' + t.host,
                  a = n + t.pathname.replace(/\/[^\/]*$/, '/')
                return e.replace(
                  /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                  function(e, t) {
                    var r,
                      i = t
                        .trim()
                        .replace(/^"(.*)"$/, function(e, t) {
                          return t
                        })
                        .replace(/^'(.*)'$/, function(e, t) {
                          return t
                        })
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                      i
                    )
                      ? e
                      : ((r =
                          0 === i.indexOf('//')
                            ? i
                            : 0 === i.indexOf('/')
                              ? n + i
                              : a + i.replace(/^\.\//, '')),
                        'url(' + JSON.stringify(r) + ')')
                  }
                )
              }
            }
          ])
        }),
        'object' == o(t) && 'object' == o(e)
          ? (e.exports = i())
          : ((a = []),
            void 0 === (r = 'function' == typeof (n = i) ? n.apply(t, a) : n) ||
              (e.exports = r))
    }.call(this, n(95)(e)))
  },
  function(e, t, n) {
    'use strict'
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l
            }
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      )
    }
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z"/>\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z"/>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_pip', function() {
      var e = this,
        t = i.default.util
      if (e.config.pip) {
        var n = e.lang.PIP,
          a = t.createDom(
            'xg-pip',
            '<p class="name"><span>' + n + '</span></p>',
            { tabindex: 9 },
            'xgplayer-pip'
          )
        e.once('ready', function() {
          e.controls.appendChild(a)
        }),
          ['click', 'touchend'].forEach(function(t) {
            a.addEventListener(t, function(t) {
              t.preventDefault(), t.stopPropagation(), e.emit('pipBtnClick')
            })
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    var a = i(n(0)),
      r = i(n(99))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_playNext', function() {
      var e = this,
        t = a.default.util,
        n = e.config.playNext
      if (n && n.urlList) {
        var i = t.createDom(
            'xg-playnext',
            '<xg-icon class="xgplayer-icon">' + r.default + '</xg-icon>',
            {},
            'xgplayer-playnext'
          ),
          o = e.lang.PLAYNEXT_TIPS,
          l = t.createDom(
            'xg-tips',
            '<span class="xgplayer-tip-playnext">' + o + '</span>',
            {},
            'xgplayer-tips'
          )
        i.appendChild(l),
          e.once('ready', function() {
            e.controls.appendChild(i)
          }),
          ['click', 'touchend'].forEach(function(t) {
            i.addEventListener(t, function(t) {
              t.preventDefault(),
                t.stopPropagation(),
                a.default.util.addClass(e.root, 'xgplayer-is-enter'),
                e.emit('playNextBtnClick')
            })
          })
        var s = function() {
          a.default.util.addClass(e.root, 'xgplayer-playnext-inactive')
        }
        e.on('urlListEnd', s),
          e.once('destroy', function t() {
            e.off('urlListEnd', s), e.off('destroy', t)
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.038 0.028)" d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a = i(n(0)),
      r = i(n(101))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_rotate', function() {
      var e = this,
        t = a.default.util
      if (e.config.rotate) {
        var n = t.createDom(
            'xg-rotate',
            '<xg-icon class="xgplayer-icon">' + r.default + '</xg-icon>',
            {},
            'xgplayer-rotate'
          ),
          i = e.lang.ROTATE_TIPS,
          o = t.createDom(
            'xg-tips',
            '<span class="xgplayer-tip-rotate">' + i + '</span>',
            {},
            'xgplayer-tips'
          )
        n.appendChild(o),
          e.once('ready', function() {
            e.controls.appendChild(n)
          }),
          ['click', 'touchend'].forEach(function(t) {
            n.addEventListener(t, function(t) {
              t.preventDefault(), t.stopPropagation(), e.emit('rotateBtnClick')
            })
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">\n  <g clip-path="url(#clip0)">\n    <path transform="scale(1.5 1.5)" d="M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z" fill="white"/>\n    <path transform="scale(1.5 1.5)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z" fill="white"/>\n  </g>\n  <defs>\n    <clipPath id="clip0">\n      <rect width="40" height="40" fill="white"/>\n    </clipPath>\n  </defs>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a = i(n(0)),
      r = i(n(103))
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_reload', function() {
      var e = this,
        t = a.default.util
      if (e.config.reload) {
        var n = t.createDom(
            'xg-reload',
            '<xg-icon class="xgplayer-icon">' + r.default + '</xg-icon>',
            {},
            'xgplayer-reload'
          ),
          i = e.lang.RELOAD_TIPS,
          o = t.createDom(
            'xg-tips',
            '<span class="xgplayer-tip-reload">' + i + '</span>',
            {},
            'xgplayer-tips'
          )
        n.appendChild(o),
          e.once('ready', function() {
            e.controls.appendChild(n)
          }),
          ['click', 'touchend'].forEach(function(t) {
            n.addEventListener(t, function(t) {
              t.preventDefault(), t.stopPropagation(), e.emit('reloadBtnClick')
            })
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    n.r(t),
      (t.default =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n    <path fill="#FFF" fill-opacity="1" fill-rule="nonzero" d="M18.17 19.988a7.182 7.182 0 0 1-4.256 1.318 7.806 7.806 0 0 1-.595-.03c-.08-.008-.16-.021-.242-.031a8.004 8.004 0 0 1-.458-.071c-.094-.018-.185-.042-.276-.063a7.743 7.743 0 0 1-.439-.113c-.068-.022-.136-.047-.205-.07a7.03 7.03 0 0 1-.492-.181c-.037-.015-.072-.032-.108-.049a7.295 7.295 0 0 1-.554-.269l-.025-.012a7.347 7.347 0 0 1-2.111-1.753c-.03-.036-.057-.074-.086-.11a7.305 7.305 0 0 1-1.594-4.557h1.686a.123.123 0 0 0 .108-.064.119.119 0 0 0-.006-.125L5.684 9.532a.123.123 0 0 0-.103-.056.123.123 0 0 0-.102.056l-2.834 4.276a.121.121 0 0 0-.005.125c.022.04.064.064.107.064h1.687c0 2.025.627 3.902 1.693 5.454.013.021.022.044.037.066.11.159.233.305.352.455.043.057.085.116.13.171.175.213.36.413.55.61.02.018.036.038.054.055a9.447 9.447 0 0 0 2.91 1.996c.058.026.115.054.175.079.202.084.41.158.619.228.098.034.196.069.296.1.183.054.37.1.558.145.125.029.249.06.376.085.052.01.102.027.155.035.177.032.355.05.533.071.064.007.128.018.19.026.32.03.639.052.956.052a9.46 9.46 0 0 0 5.47-1.746 1.16 1.16 0 0 0 .282-1.608 1.143 1.143 0 0 0-1.6-.283zm5.397-5.991a9.604 9.604 0 0 0-1.685-5.441c-.016-.027-.026-.054-.043-.078-.132-.19-.276-.366-.419-.543-.017-.022-.032-.044-.05-.065a9.467 9.467 0 0 0-3.571-2.7l-.114-.051a11.2 11.2 0 0 0-.673-.248c-.082-.027-.163-.057-.247-.082a9.188 9.188 0 0 0-.6-.156c-.113-.026-.224-.055-.337-.077-.057-.011-.109-.028-.164-.037-.151-.027-.304-.039-.455-.058-.104-.013-.208-.03-.313-.04a10.05 10.05 0 0 0-.759-.039c-.045 0-.09-.007-.136-.007l-.025.003a9.45 9.45 0 0 0-5.46 1.737 1.16 1.16 0 0 0-.284 1.608c.363.523 1.08.65 1.6.284a7.182 7.182 0 0 1 4.222-1.32c.217.002.429.013.639.033.065.007.129.017.193.025.173.021.344.046.513.08.075.014.149.033.221.05.166.037.331.077.494.127l.152.051c.185.061.366.127.545.201l.054.025a7.308 7.308 0 0 1 2.741 2.067l.013.018a7.302 7.302 0 0 1 1.652 4.633h-1.686a.123.123 0 0 0-.108.064.12.12 0 0 0 .006.124l2.834 4.277c.022.033.06.054.103.054.042 0 .08-.021.102-.054l2.833-4.277a.12.12 0 0 0 .005-.124.123.123 0 0 0-.108-.064h-1.685z"/>\n</svg>\n')
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_screenShot', function() {
      var e = this,
        t = i.default.util
      if (e.config.screenShot) {
        var n = e.lang.SCREENSHOT,
          a = t.createDom(
            'xg-screenshot',
            '<p class="name"><span>' + n + '</span></p>',
            { tabindex: 11 },
            'xgplayer-screenshot'
          )
        e.once('ready', function() {
          e.controls.appendChild(a)
        }),
          ['click', 'touchend'].forEach(function(t) {
            a.addEventListener(t, function(t) {
              t.preventDefault(),
                t.stopPropagation(),
                e.emit('screenShotBtnClick')
            })
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_textTrack', function() {
      if (this.config.textTrack) {
        var e = this,
          t = e.root,
          n = i.default.util,
          a = (i.default.sniffer,
          e.controls,
          n.createDom(
            'xg-texttrack',
            '',
            { tabindex: 7 },
            'xgplayer-texttrack'
          )),
          r = e.config.textTrack
        r &&
          Array.isArray(r) &&
          r.length > 0 &&
          (n.addClass(e.root, 'xgplayer-is-texttrack'),
          e.once('canplay', function() {
            var i = this,
              o = ['<ul>']
            o.push(
              "<li class='" +
                (this.textTrackShowDefault ? '' : 'selected') +
                "'}'>" +
                e.lang.OFF +
                '</li>'
            ),
              r.forEach(function(e) {
                o.push(
                  "<li class='" +
                    (e.default && i.textTrackShowDefault ? 'selected' : '') +
                    "'>" +
                    e.label +
                    '</li>'
                )
              })
            var l = e.lang.TEXTTRACK
            o.push('</ul><p class="name">' + l + '</p>')
            var s = t.querySelector('.xgplayer-texttrack')
            if (s) {
              s.innerHTML = o.join('')
              var u = s.querySelector('.name')
              ;(e.config.textTrackActive &&
                'hover' !== e.config.textTrackActive) ||
                u.addEventListener('mouseenter', function(e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    n.addClass(t, 'xgplayer-texttrack-active'),
                    s.focus()
                })
            } else {
              a.innerHTML = o.join('')
              var p = a.querySelector('.name')
              ;(e.config.textTrackActive &&
                'hover' !== e.config.textTrackActive) ||
                p.addEventListener('mouseenter', function(t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    n.addClass(e.root, 'xgplayer-texttrack-active'),
                    a.focus()
                }),
                e.controls.appendChild(a)
            }
          })),
          ['touchend', 'click'].forEach(function(t) {
            a.addEventListener(
              t,
              function(t) {
                t.preventDefault(), t.stopPropagation()
                var i = t.target || t.srcElement
                if (i && 'li' === i.tagName.toLocaleLowerCase()) {
                  Array.prototype.forEach.call(
                    i.parentNode.childNodes,
                    function(e) {
                      n.removeClass(e, 'selected')
                    }
                  ),
                    n.addClass(i, 'selected')
                  var o = e.root.getElementsByTagName('Track')
                  i.innerHTML === e.lang.OFF
                    ? ((o[0].track.mode = 'hidden'),
                      (o[0].src = ''),
                      n.removeClass(e.root, 'xgplayer-texttrack-active'))
                    : ((o[0].style.display = 'block'),
                      n.addClass(e.root, 'xgplayer-texttrack-active'),
                      (o[0].track.mode = 'showing'),
                      r.some(function(e) {
                        if (e.label === i.innerHTML)
                          return (
                            (o[0].src = e.src),
                            e.kind && (o[0].kind = e.kind),
                            (o[0].label = e.label),
                            e.srclang && (o[0].srclang = e.srclang),
                            !0
                          )
                      }),
                      e.emit('textTrackChange', i.innerHTML))
                } else
                  'click' !== e.config.textTrackActive ||
                    !i ||
                    ('p' !== i.tagName.toLocaleLowerCase() &&
                      'em' !== i.tagName.toLocaleLowerCase()) ||
                    (n.addClass(e.root, 'xgplayer-texttrack-active'), a.focus())
              },
              !1
            )
          }),
          e.on('play', function() {
            var a = t.querySelector('.xgplayer-texttrack ul'),
              i = t.getElementsByTagName('Track')
            e.hls &&
              a &&
              i &&
              ((i[0].src = ''),
              Array.prototype.forEach.call(a.childNodes, function(t) {
                n.hasClass(t, 'selected') &&
                  (t.innerHTML === e.lang.OFF
                    ? ((i[0].track.mode = 'hidden'), (i[0].src = ''))
                    : ((i[0].track.mode = 'hidden'),
                      r.some(function(e) {
                        if (e.label !== t.innerHTML)
                          return (
                            (i[0].src = e.src),
                            e.kind && (i[0].kind = e.kind),
                            (i[0].label = e.label),
                            e.srclang && (i[0].srclang = e.srclang),
                            !0
                          )
                      }),
                      r.some(function(e) {
                        if (e.label === t.innerHTML)
                          return (
                            setTimeout(function() {
                              ;(i[0].src = e.src),
                                e.kind && (i[0].kind = e.kind),
                                (i[0].label = e.label),
                                e.srclang && (i[0].srclang = e.srclang),
                                (i[0].track.mode = 'showing')
                            }),
                            !0
                          )
                      })))
              }),
              n.removeClass(e.root, 'xgplayer-texttrack-active'))
          }),
          a.addEventListener('mouseleave', function(t) {
            t.preventDefault(),
              t.stopPropagation(),
              n.removeClass(e.root, 'xgplayer-texttrack-active')
          })
      }
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_error', function() {
      var e = this,
        t = e.root,
        n = i.default.util,
        a = n.createDom(
          'xg-error',
          '<span class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</span>',
          {},
          'xgplayer-error'
        )
      e.once('ready', function() {
        t.appendChild(a)
      })
      var r = a.querySelector('.xgplayer-error-text'),
        o = null
      function l() {
        e.config.lang && 'zh-cn' === e.config.lang
          ? (r.innerHTML =
              e.config.errorTips ||
              '请<span class="xgplayer-error-refresh">刷新</span>试试')
          : (r.innerHTML =
              e.config.errorTips ||
              'please try to <span class="xgplayer-error-refresh">refresh</span>'),
          n.addClass(e.root, 'xgplayer-is-error'),
          (o = a.querySelector('.xgplayer-error-refresh')) &&
            ['touchend', 'click'].forEach(function(t) {
              o.addEventListener(t, function(t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  (e.autoplay = !0),
                  e.once('playing', function() {
                    n.removeClass(e.root, 'xgplayer-is-error')
                  }),
                  (e.src = e.config.url)
              })
            })
      }
      e.on('error', l),
        e.once('destroy', function t() {
          e.off('error', l), e.off('destroy', t)
        })
    })
  },
  function(e, t, n) {
    'use strict'
    var a,
      r = n(0),
      i = (a = r) && a.__esModule ? a : { default: a }
    i.default.install('s_memoryPlay', function() {
      var e = this,
        t = i.default.util,
        n = e.config.lastPlayTime || 0,
        a = e.config.lastPlayTimeHideDelay || 3,
        r = null
      if (!(n <= 0)) {
        ;(r = t.createDom(
          'xg-memoryplay',
          '<div class="xgplayer-memoryplay-spot"><div class="xgplayer-progress-tip">您上次观看到 <span class="xgplayer-lasttime">' +
            t.format(n) +
            '</span> ，为您自动续播 <span class="btn-close"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></div></div>',
          {},
          'xgplayer-memoryplay'
        )).addEventListener('mouseover', function(e) {
          e.stopPropagation()
        })
        var o = function() {
          r && r.parentNode.removeChild(r), (r = null)
        }
        r.querySelector('.xgplayer-progress-tip .btn-close').addEventListener(
          'click',
          o
        )
        e.once('play', function() {
          e.root.appendChild(r),
            e.emit('memoryPlayStart', n),
            a > 0 &&
              setTimeout(function() {
                o()
              }, 1e3 * a)
        }),
          e.once('ended', o)
      }
    })
  },
  function(e, t, n) {
    'use strict'
    var a = r(n(0))
    r(n(109))
    function r(e) {
      return e && e.__esModule ? e : { default: e }
    }
    a.default.install('s_waterMarker', function() {
      var e = this.root,
        t = a.default.util
      console.log('user', this.config.user),
        (this.config.user = this.config.user || '')
      var n = Math.round(new Date().getTime() / 1e3),
        r = this.config.user + '-' + n,
        i = t.createDom(
          'xg-waterMarker',
          '<div id="qr"></div><span class="xgplayer-waterMarkerUID">' +
            r +
            '</span><img class="xgplayer-waterMarkerImg" src="' +
            this.config.waterMarkerUrl +
            '"/>',
          {},
          'xgplayer-waterMarker'
        )
      this.once('ready', function() {
        e.appendChild(i)
      }),
        this.on('fullscreenBtnClick', function() {
          t.hasClass(e, 'xgplayer-is-fullscreen')
            ? (i.style.fontSize = '10%')
            : (i.style.fontSize = '150%')
        })
    })
  },
  function(e, t, n) {
    'use strict'
    e.exports = 'qrcodejs'
  }
])
