window.AXXPlayer = (function(e) {
  var t = {}
  function r(i) {
    if (t[i]) return t[i].exports
    var n = (t[i] = { i: i, l: !1, exports: {} })
    return e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i })
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var i = Object.create(null)
      if (
        (r.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          r.d(
            i,
            n,
            function(t) {
              return e[t]
            }.bind(null, n)
          )
      return i
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ''),
    r((r.s = 44))
  )
})([
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.logger = t.enableLogs = void 0)
    var i =
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
      n = r(5)
    function a() {}
    var o = { trace: a, debug: a, log: a, warn: a, info: a, error: a },
      s = o
    function l(e, t) {
      return (t = '[' + e + '] > ' + t)
    }
    var u = (0, n.getSelfScope)()
    function d(e) {
      var t = u.console[e]
      return t
        ? function() {
            for (var r = arguments.length, i = Array(r), n = 0; n < r; n++)
              i[n] = arguments[n]
            i[0] && (i[0] = l(e, i[0])), t.apply(u.console, i)
          }
        : a
    }
    ;(t.enableLogs = function(e) {
      if (!0 === e || 'object' === (void 0 === e ? 'undefined' : i(e))) {
        !(function(e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i]
          r.forEach(function(t) {
            s[t] = e[t] ? e[t].bind(e) : d(t)
          })
        })(e, 'debug', 'log', 'info', 'warn', 'error')
        try {
          s.log()
        } catch (e) {
          s = o
        }
      } else s = o
    }),
      (t.logger = s)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    ;(t.default = {
      MEDIA_ATTACHING: 'hlsMediaAttaching',
      MEDIA_ATTACHED: 'hlsMediaAttached',
      MEDIA_DETACHING: 'hlsMediaDetaching',
      MEDIA_DETACHED: 'hlsMediaDetached',
      BUFFER_RESET: 'hlsBufferReset',
      BUFFER_CODECS: 'hlsBufferCodecs',
      BUFFER_CREATED: 'hlsBufferCreated',
      BUFFER_APPENDING: 'hlsBufferAppending',
      BUFFER_APPENDED: 'hlsBufferAppended',
      BUFFER_EOS: 'hlsBufferEos',
      BUFFER_FLUSHING: 'hlsBufferFlushing',
      BUFFER_FLUSHED: 'hlsBufferFlushed',
      MANIFEST_LOADING: 'hlsManifestLoading',
      MANIFEST_LOADED: 'hlsManifestLoaded',
      MANIFEST_PARSED: 'hlsManifestParsed',
      LEVEL_SWITCHING: 'hlsLevelSwitching',
      LEVEL_SWITCHED: 'hlsLevelSwitched',
      LEVEL_LOADING: 'hlsLevelLoading',
      LEVEL_LOADED: 'hlsLevelLoaded',
      LEVEL_UPDATED: 'hlsLevelUpdated',
      LEVEL_PTS_UPDATED: 'hlsLevelPtsUpdated',
      AUDIO_TRACKS_UPDATED: 'hlsAudioTracksUpdated',
      AUDIO_TRACK_SWITCHING: 'hlsAudioTrackSwitching',
      AUDIO_TRACK_SWITCHED: 'hlsAudioTrackSwitched',
      AUDIO_TRACK_LOADING: 'hlsAudioTrackLoading',
      AUDIO_TRACK_LOADED: 'hlsAudioTrackLoaded',
      SUBTITLE_TRACKS_UPDATED: 'hlsSubtitleTracksUpdated',
      SUBTITLE_TRACK_SWITCH: 'hlsSubtitleTrackSwitch',
      SUBTITLE_TRACK_LOADING: 'hlsSubtitleTrackLoading',
      SUBTITLE_TRACK_LOADED: 'hlsSubtitleTrackLoaded',
      SUBTITLE_FRAG_PROCESSED: 'hlsSubtitleFragProcessed',
      INIT_PTS_FOUND: 'hlsInitPtsFound',
      FRAG_LOADING: 'hlsFragLoading',
      FRAG_LOAD_PROGRESS: 'hlsFragLoadProgress',
      FRAG_LOAD_EMERGENCY_ABORTED: 'hlsFragLoadEmergencyAborted',
      FRAG_LOADED: 'hlsFragLoaded',
      FRAG_DECRYPTED: 'hlsFragDecrypted',
      FRAG_PARSING_INIT_SEGMENT: 'hlsFragParsingInitSegment',
      FRAG_PARSING_USERDATA: 'hlsFragParsingUserdata',
      FRAG_PARSING_METADATA: 'hlsFragParsingMetadata',
      FRAG_PARSING_DATA: 'hlsFragParsingData',
      FRAG_PARSED: 'hlsFragParsed',
      FRAG_BUFFERED: 'hlsFragBuffered',
      FRAG_CHANGED: 'hlsFragChanged',
      FPS_DROP: 'hlsFpsDrop',
      FPS_DROP_LEVEL_CAPPING: 'hlsFpsDropLevelCapping',
      ERROR: 'hlsError',
      DESTROYING: 'hlsDestroying',
      KEY_LOADING: 'hlsKeyLoading',
      KEY_LOADED: 'hlsKeyLoaded',
      KEY_LOAD_FAILED: 'hlsKeyLoadFailed',
      STREAM_STATE_TRANSITION: 'hlsStreamStateTransition'
    }),
      (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    ;(t.ErrorTypes = {
      NETWORK_ERROR: 'networkError',
      MEDIA_ERROR: 'mediaError',
      KEY_SYSTEM_ERROR: 'keySystemError',
      MUX_ERROR: 'muxError',
      OTHER_ERROR: 'otherError'
    }),
      (t.ErrorDetails = {
        KEY_SYSTEM_NO_KEYS: 'keySystemNoKeys',
        KEY_SYSTEM_NO_ACCESS: 'keySystemNoAccess',
        KEY_SYSTEM_NO_SESSION: 'keySystemNoSession',
        KEY_SYSTEM_LICENSE_REQUEST_FAILED: 'keySystemLicenseRequestFailed',
        MANIFEST_LOAD_ERROR: 'manifestLoadError',
        MANIFEST_LOAD_TIMEOUT: 'manifestLoadTimeOut',
        MANIFEST_PARSING_ERROR: 'manifestParsingError',
        MANIFEST_INCOMPATIBLE_CODECS_ERROR: 'manifestIncompatibleCodecsError',
        LEVEL_LOAD_ERROR: 'levelLoadError',
        LEVEL_LOAD_TIMEOUT: 'levelLoadTimeOut',
        LEVEL_SWITCH_ERROR: 'levelSwitchError',
        AUDIO_TRACK_LOAD_ERROR: 'audioTrackLoadError',
        AUDIO_TRACK_LOAD_TIMEOUT: 'audioTrackLoadTimeOut',
        FRAG_LOAD_ERROR: 'fragLoadError',
        FRAG_LOAD_TIMEOUT: 'fragLoadTimeOut',
        FRAG_DECRYPT_ERROR: 'fragDecryptError',
        FRAG_PARSING_ERROR: 'fragParsingError',
        REMUX_ALLOC_ERROR: 'remuxAllocError',
        KEY_LOAD_ERROR: 'keyLoadError',
        KEY_LOAD_TIMEOUT: 'keyLoadTimeOut',
        BUFFER_ADD_CODEC_ERROR: 'bufferAddCodecError',
        BUFFER_APPEND_ERROR: 'bufferAppendError',
        BUFFER_APPENDING_ERROR: 'bufferAppendingError',
        BUFFER_STALLED_ERROR: 'bufferStalledError',
        BUFFER_FULL_ERROR: 'bufferFullError',
        BUFFER_SEEK_OVER_HOLE: 'bufferSeekOverHole',
        BUFFER_NUDGE_ON_STALL: 'bufferNudgeOnStall',
        INTERNAL_EXCEPTION: 'internalException'
      })
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n =
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
      a = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      o = r(0),
      s = r(2),
      l = r(1),
      u = (i = l) && i.__esModule ? i : { default: i }
    function d(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    var f = new Set([
        'hlsEventGeneric',
        'hlsHandlerDestroying',
        'hlsHandlerDestroyed'
      ]),
      c = (function() {
        function e(t) {
          d(this, e), (this.hls = t), (this.onEvent = this.onEvent.bind(this))
          for (
            var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1;
            n < r;
            n++
          )
            i[n - 1] = arguments[n]
          ;(this.handledEvents = i),
            (this.useGenericHandler = !0),
            this.registerListeners()
        }
        return (
          a(e, [
            {
              key: 'destroy',
              value: function() {
                this.onHandlerDestroying(),
                  this.unregisterListeners(),
                  this.onHandlerDestroyed()
              }
            },
            { key: 'onHandlerDestroying', value: function() {} },
            { key: 'onHandlerDestroyed', value: function() {} },
            {
              key: 'isEventHandler',
              value: function() {
                return (
                  'object' === n(this.handledEvents) &&
                  this.handledEvents.length &&
                  'function' == typeof this.onEvent
                )
              }
            },
            {
              key: 'registerListeners',
              value: function() {
                this.isEventHandler() &&
                  this.handledEvents.forEach(function(e) {
                    if (f.has(e)) throw new Error('Forbidden event-name: ' + e)
                    this.hls.on(e, this.onEvent)
                  }, this)
              }
            },
            {
              key: 'unregisterListeners',
              value: function() {
                this.isEventHandler() &&
                  this.handledEvents.forEach(function(e) {
                    this.hls.off(e, this.onEvent)
                  }, this)
              }
            },
            {
              key: 'onEvent',
              value: function(e, t) {
                this.onEventGeneric(e, t)
              }
            },
            {
              key: 'onEventGeneric',
              value: function(e, t) {
                try {
                  ;(function(e, t) {
                    var r = 'on' + e.replace('hls', '')
                    if ('function' != typeof this[r])
                      throw new Error(
                        'Event ' +
                          e +
                          ' has no generic handler in this ' +
                          this.constructor.name +
                          ' class (tried ' +
                          r +
                          ')'
                      )
                    return this[r].bind(this, t)
                  }
                    .call(this, e, t)
                    .call())
                } catch (t) {
                  o.logger.error(
                    'An internal error happened while handling event ' +
                      e +
                      '. Error message: "' +
                      t.message +
                      '". Here is a stacktrace:',
                    t
                  ),
                    this.hls.trigger(u.default.ERROR, {
                      type: s.ErrorTypes.OTHER_ERROR,
                      details: s.ErrorDetails.INTERNAL_EXCEPTION,
                      fatal: !1,
                      event: e,
                      err: t
                    })
                }
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = c), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    var i = r(26),
      n = Object.prototype.toString
    function a(e) {
      return '[object Array]' === n.call(e)
    }
    function o(e) {
      return void 0 === e
    }
    function s(e) {
      return null !== e && 'object' == typeof e
    }
    function l(e) {
      if ('[object Object]' !== n.call(e)) return !1
      var t = Object.getPrototypeOf(e)
      return null === t || t === Object.prototype
    }
    function u(e) {
      return '[object Function]' === n.call(e)
    }
    function d(e, t) {
      if (null != e)
        if (('object' != typeof e && (e = [e]), a(e)))
          for (var r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e)
        else
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.call(null, e[n], n, e)
    }
    e.exports = {
      isArray: a,
      isArrayBuffer: function(e) {
        return '[object ArrayBuffer]' === n.call(e)
      },
      isBuffer: function(e) {
        return (
          null !== e &&
          !o(e) &&
          null !== e.constructor &&
          !o(e.constructor) &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        )
      },
      isFormData: function(e) {
        return 'undefined' != typeof FormData && e instanceof FormData
      },
      isArrayBufferView: function(e) {
        return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer
      },
      isString: function(e) {
        return 'string' == typeof e
      },
      isNumber: function(e) {
        return 'number' == typeof e
      },
      isObject: s,
      isPlainObject: l,
      isUndefined: o,
      isDate: function(e) {
        return '[object Date]' === n.call(e)
      },
      isFile: function(e) {
        return '[object File]' === n.call(e)
      },
      isBlob: function(e) {
        return '[object Blob]' === n.call(e)
      },
      isFunction: u,
      isStream: function(e) {
        return s(e) && u(e.pipe)
      },
      isURLSearchParams: function(e) {
        return (
          'undefined' != typeof URLSearchParams && e instanceof URLSearchParams
        )
      },
      isStandardBrowserEnv: function() {
        return (
          ('undefined' == typeof navigator ||
            ('ReactNative' !== navigator.product &&
              'NativeScript' !== navigator.product &&
              'NS' !== navigator.product)) &&
          ('undefined' != typeof window && 'undefined' != typeof document)
        )
      },
      forEach: d,
      merge: function e() {
        var t = {}
        function r(r, i) {
          l(t[i]) && l(r)
            ? (t[i] = e(t[i], r))
            : l(r)
              ? (t[i] = e({}, r))
              : a(r)
                ? (t[i] = r.slice())
                : (t[i] = r)
        }
        for (var i = 0, n = arguments.length; i < n; i++) d(arguments[i], r)
        return t
      },
      extend: function(e, t, r) {
        return (
          d(t, function(t, n) {
            e[n] = r && 'function' == typeof t ? i(t, r) : t
          }),
          e
        )
      },
      trim: function(e) {
        return e.replace(/^\s*/, '').replace(/\s*$/, '')
      },
      stripBOM: function(e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
      }
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getSelfScope = function() {
        return 'undefined' == typeof window ? self : window
      })
  },
  function(e, t, r) {
    var i, n, a, o, s
    ;(i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/),
      (n = /^([^\/?#]*)(.*)$/),
      (a = /(?:\/|^)\.(?=\/)/g),
      (o = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
      (s = {
        buildAbsoluteURL: function(e, t, r) {
          if (((r = r || {}), (e = e.trim()), !(t = t.trim()))) {
            if (!r.alwaysNormalize) return e
            var i = s.parseURL(e)
            if (!i) throw new Error('Error trying to parse base URL.')
            return (i.path = s.normalizePath(i.path)), s.buildURLFromParts(i)
          }
          var a = s.parseURL(t)
          if (!a) throw new Error('Error trying to parse relative URL.')
          if (a.scheme)
            return r.alwaysNormalize
              ? ((a.path = s.normalizePath(a.path)), s.buildURLFromParts(a))
              : t
          var o = s.parseURL(e)
          if (!o) throw new Error('Error trying to parse base URL.')
          if (!o.netLoc && o.path && '/' !== o.path[0]) {
            var l = n.exec(o.path)
            ;(o.netLoc = l[1]), (o.path = l[2])
          }
          o.netLoc && !o.path && (o.path = '/')
          var u = {
            scheme: o.scheme,
            netLoc: a.netLoc,
            path: null,
            params: a.params,
            query: a.query,
            fragment: a.fragment
          }
          if (!a.netLoc && ((u.netLoc = o.netLoc), '/' !== a.path[0]))
            if (a.path) {
              var d = o.path,
                f = d.substring(0, d.lastIndexOf('/') + 1) + a.path
              u.path = s.normalizePath(f)
            } else
              (u.path = o.path),
                a.params ||
                  ((u.params = o.params), a.query || (u.query = o.query))
          return (
            null === u.path &&
              (u.path = r.alwaysNormalize ? s.normalizePath(a.path) : a.path),
            s.buildURLFromParts(u)
          )
        },
        parseURL: function(e) {
          var t = i.exec(e)
          return t
            ? {
                scheme: t[1] || '',
                netLoc: t[2] || '',
                path: t[3] || '',
                params: t[4] || '',
                query: t[5] || '',
                fragment: t[6] || ''
              }
            : null
        },
        normalizePath: function(e) {
          for (
            e = e
              .split('')
              .reverse()
              .join('')
              .replace(a, '');
            e.length !== (e = e.replace(o, '')).length;

          );
          return e
            .split('')
            .reverse()
            .join('')
        },
        buildURLFromParts: function(e) {
          return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
        }
      }),
      (e.exports = s)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    ;(t.default = {
      search: function(e, t) {
        for (var r = 0, i = e.length - 1, n = null, a = null; r <= i; ) {
          var o = t((a = e[(n = ((r + i) / 2) | 0)]))
          if (o > 0) r = n + 1
          else {
            if (!(o < 0)) return a
            i = n - 1
          }
        }
        return null
      }
    }),
      (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    var n = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        return (
          i(e, null, [
            {
              key: 'isHeader',
              value: function(e, t) {
                return (
                  t + 10 <= e.length &&
                  73 === e[t] &&
                  68 === e[t + 1] &&
                  51 === e[t + 2] &&
                  e[t + 3] < 255 &&
                  e[t + 4] < 255 &&
                  e[t + 6] < 128 &&
                  e[t + 7] < 128 &&
                  e[t + 8] < 128 &&
                  e[t + 9] < 128
                )
              }
            },
            {
              key: 'isFooter',
              value: function(e, t) {
                return (
                  t + 10 <= e.length &&
                  51 === e[t] &&
                  68 === e[t + 1] &&
                  73 === e[t + 2] &&
                  e[t + 3] < 255 &&
                  e[t + 4] < 255 &&
                  e[t + 6] < 128 &&
                  e[t + 7] < 128 &&
                  e[t + 8] < 128 &&
                  e[t + 9] < 128
                )
              }
            },
            {
              key: 'getID3Data',
              value: function(t, r) {
                for (var i = r, n = 0; e.isHeader(t, r); ) {
                  ;(n += 10),
                    (n += e._readSize(t, r + 6)),
                    e.isFooter(t, r + 10) && (n += 10),
                    (r += n)
                }
                if (n > 0) return t.subarray(i, i + n)
              }
            },
            {
              key: '_readSize',
              value: function(e, t) {
                var r = 0
                return (
                  (r = (127 & e[t]) << 21),
                  (r |= (127 & e[t + 1]) << 14),
                  (r |= (127 & e[t + 2]) << 7),
                  (r |= 127 & e[t + 3])
                )
              }
            },
            {
              key: 'getTimeStamp',
              value: function(t) {
                for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) {
                  var n = r[i]
                  if (e.isTimeStampFrame(n)) return e._readTimeStamp(n)
                }
              }
            },
            {
              key: 'isTimeStampFrame',
              value: function(e) {
                return (
                  e &&
                  'PRIV' === e.key &&
                  'com.apple.streaming.transportStreamTimestamp' === e.info
                )
              }
            },
            {
              key: '_getFrameData',
              value: function(t) {
                var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
                  i = e._readSize(t, 4)
                return { type: r, size: i, data: t.subarray(10, 10 + i) }
              }
            },
            {
              key: 'getID3Frames',
              value: function(t) {
                for (var r = 0, i = []; e.isHeader(t, r); ) {
                  for (
                    var n = e._readSize(t, r + 6), a = (r += 10) + n;
                    r + 8 < a;

                  ) {
                    var o = e._getFrameData(t.subarray(r)),
                      s = e._decodeFrame(o)
                    s && i.push(s), (r += o.size + 10)
                  }
                  e.isFooter(t, r) && (r += 10)
                }
                return i
              }
            },
            {
              key: '_decodeFrame',
              value: function(t) {
                return 'PRIV' === t.type
                  ? e._decodePrivFrame(t)
                  : 'T' === t.type[0]
                    ? e._decodeTextFrame(t)
                    : 'W' === t.type[0]
                      ? e._decodeURLFrame(t)
                      : void 0
              }
            },
            {
              key: '_readTimeStamp',
              value: function(e) {
                if (8 === e.data.byteLength) {
                  var t = new Uint8Array(e.data),
                    r = 1 & t[3],
                    i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7]
                  return (i /= 45), r && (i += 47721858.84), Math.round(i)
                }
              }
            },
            {
              key: '_decodePrivFrame',
              value: function(t) {
                if (!(t.size < 2)) {
                  var r = e._utf8ArrayToStr(t.data, !0),
                    i = new Uint8Array(t.data.subarray(r.length + 1))
                  return { key: t.type, info: r, data: i.buffer }
                }
              }
            },
            {
              key: '_decodeTextFrame',
              value: function(t) {
                if (!(t.size < 2)) {
                  if ('TXXX' === t.type) {
                    var r = 1,
                      i = e._utf8ArrayToStr(t.data.subarray(r))
                    r += i.length + 1
                    var n = e._utf8ArrayToStr(t.data.subarray(r))
                    return { key: t.type, info: i, data: n }
                  }
                  var a = e._utf8ArrayToStr(t.data.subarray(1))
                  return { key: t.type, data: a }
                }
              }
            },
            {
              key: '_decodeURLFrame',
              value: function(t) {
                if ('WXXX' === t.type) {
                  if (t.size < 2) return
                  var r = 1,
                    i = e._utf8ArrayToStr(t.data.subarray(r))
                  r += i.length + 1
                  var n = e._utf8ArrayToStr(t.data.subarray(r))
                  return { key: t.type, info: i, data: n }
                }
                var a = e._utf8ArrayToStr(t.data)
                return { key: t.type, data: a }
              }
            },
            {
              key: '_utf8ArrayToStr',
              value: function(e) {
                for (
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = e.length,
                    i = void 0,
                    n = void 0,
                    a = void 0,
                    o = '',
                    s = 0;
                  s < r;

                ) {
                  if (0 === (i = e[s++]) && t) return o
                  if (0 !== i && 3 !== i)
                    switch (i >> 4) {
                      case 0:
                      case 1:
                      case 2:
                      case 3:
                      case 4:
                      case 5:
                      case 6:
                      case 7:
                        o += String.fromCharCode(i)
                        break
                      case 12:
                      case 13:
                        ;(n = e[s++]),
                          (o += String.fromCharCode(((31 & i) << 6) | (63 & n)))
                        break
                      case 14:
                        ;(n = e[s++]),
                          (a = e[s++]),
                          (o += String.fromCharCode(
                            ((15 & i) << 12) | ((63 & n) << 6) | ((63 & a) << 0)
                          ))
                    }
                }
                return o
              }
            }
          ]),
          e
        )
      })(),
      a = n._utf8ArrayToStr
    ;(t.default = n), (t.utf8ArrayToStr = a)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = r(3)
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function s(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
    }
    var l = (function(e) {
      function t(e) {
        var r
        o(this, t)
        for (
          var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1;
          a < i;
          a++
        )
          n[a - 1] = arguments[a]
        var l = s(
          this,
          (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
            r,
            [this, e].concat(n)
          )
        )
        return (
          (l._tickInterval = null),
          (l._tickTimer = null),
          (l._tickCallCount = 0),
          (l._boundTick = l.tick.bind(l)),
          l
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
        n(t, [
          {
            key: 'onHandlerDestroying',
            value: function() {
              this.clearNextTick(), this.clearInterval()
            }
          },
          {
            key: 'hasInterval',
            value: function() {
              return !!this._tickInterval
            }
          },
          {
            key: 'hasNextTick',
            value: function() {
              return !!this._tickTimer
            }
          },
          {
            key: 'setInterval',
            value: (function(e) {
              function t(t) {
                return e.apply(this, arguments)
              }
              return (
                (t.toString = function() {
                  return e.toString()
                }),
                t
              )
            })(function(e) {
              return (
                !this._tickInterval &&
                ((this._tickInterval = setInterval(this._boundTick, e)), !0)
              )
            })
          },
          {
            key: 'clearInterval',
            value: (function(e) {
              function t() {
                return e.apply(this, arguments)
              }
              return (
                (t.toString = function() {
                  return e.toString()
                }),
                t
              )
            })(function() {
              return (
                !!this._tickInterval &&
                (clearInterval(this._tickInterval),
                (this._tickInterval = null),
                !0)
              )
            })
          },
          {
            key: 'clearNextTick',
            value: function() {
              return (
                !!this._tickTimer &&
                (clearTimeout(this._tickTimer), (this._tickTimer = null), !0)
              )
            }
          },
          {
            key: 'tick',
            value: function() {
              this._tickCallCount++,
                1 === this._tickCallCount &&
                  (this.doTick(),
                  this._tickCallCount > 1 &&
                    (this.clearNextTick(),
                    (this._tickTimer = setTimeout(this._boundTick, 0))),
                  (this._tickCallCount = 0))
            }
          },
          { key: 'doTick', value: function() {} }
        ]),
        t
      )
    })(((i = a) && i.__esModule ? i : { default: i }).default)
    ;(t.default = l), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = o(r(6)),
      a = o(r(22))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function s(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = r),
        e
      )
    }
    var l = (function() {
      function e() {
        var t
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this._url = null),
          (this._byteRange = null),
          (this._decryptdata = null),
          (this.tagList = []),
          (this._elementaryStreams = (s(
            (t = {}),
            e.ElementaryStreamTypes.AUDIO,
            !1
          ),
          s(t, e.ElementaryStreamTypes.VIDEO, !1),
          t))
      }
      return (
        i(
          e,
          [
            {
              key: 'addElementaryStream',
              value: function(e) {
                this._elementaryStreams[e] = !0
              }
            },
            {
              key: 'hasElementaryStream',
              value: function(e) {
                return !0 === this._elementaryStreams[e]
              }
            },
            {
              key: 'createInitializationVector',
              value: function(e) {
                for (var t = new Uint8Array(16), r = 12; r < 16; r++)
                  t[r] = (e >> (8 * (15 - r))) & 255
                return t
              }
            },
            {
              key: 'fragmentDecryptdataFromLevelkey',
              value: function(e, t) {
                var r = e
                return (
                  e &&
                    e.method &&
                    e.uri &&
                    !e.iv &&
                    (((r = new a.default()).method = e.method),
                    (r.baseuri = e.baseuri),
                    (r.reluri = e.reluri),
                    (r.iv = this.createInitializationVector(t))),
                  r
                )
              }
            },
            {
              key: 'url',
              get: function() {
                return (
                  !this._url &&
                    this.relurl &&
                    (this._url = n.default.buildAbsoluteURL(
                      this.baseurl,
                      this.relurl,
                      { alwaysNormalize: !0 }
                    )),
                  this._url
                )
              },
              set: function(e) {
                this._url = e
              }
            },
            {
              key: 'programDateTime',
              get: function() {
                return (
                  !this._programDateTime &&
                    this.rawProgramDateTime &&
                    (this._programDateTime = new Date(
                      Date.parse(this.rawProgramDateTime)
                    )),
                  this._programDateTime
                )
              }
            },
            {
              key: 'byteRange',
              get: function() {
                if (!this._byteRange && !this.rawByteRange) return []
                if (this._byteRange) return this._byteRange
                var e = []
                if (this.rawByteRange) {
                  var t = this.rawByteRange.split('@', 2)
                  if (1 === t.length) {
                    var r = this.lastByteRangeEndOffset
                    e[0] = r || 0
                  } else e[0] = parseInt(t[1])
                  ;(e[1] = parseInt(t[0]) + e[0]), (this._byteRange = e)
                }
                return e
              }
            },
            {
              key: 'byteRangeStartOffset',
              get: function() {
                return this.byteRange[0]
              }
            },
            {
              key: 'byteRangeEndOffset',
              get: function() {
                return this.byteRange[1]
              }
            },
            {
              key: 'decryptdata',
              get: function() {
                return (
                  this._decryptdata ||
                    (this._decryptdata = this.fragmentDecryptdataFromLevelkey(
                      this.levelkey,
                      this.sn
                    )),
                  this._decryptdata
                )
              }
            },
            {
              key: 'encrypted',
              get: function() {
                return !(
                  !this.decryptdata ||
                  null === this.decryptdata.uri ||
                  null !== this.decryptdata.key
                )
              }
            }
          ],
          [
            {
              key: 'ElementaryStreamTypes',
              get: function() {
                return { AUDIO: 'audio', VIDEO: 'video' }
              }
            }
          ]
        ),
        e
      )
    })()
    ;(t.default = l), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    t.axxPlayerConfig = {
      playListUrl: 'http://aiapi.aixuexi.com/vod-kms/vod-portal/:vid/playlist',
      token: '',
      authUrl: '',
      hlsTokenUrl: 'http://aiapi.aixuexi.com/vod/vod/hlsToken',
      player: null
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i =
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
      n = {}
    ;(n.StringIndex = function(e) {
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(e)
    }),
      (n.getCookie = function(e) {
        var t,
          r = new RegExp('(^| )' + e + '=([^;]*)(;|$)')
        return (t = document.cookie.match(r)) ? t[2] : null
      }),
      (n.toPercent = function(e) {
        return Math.round((1e4 * e) / 100)
      }),
      (n.judgeResult = function(e) {
        return !!(e.succeeded && e.code >= 200 && e.code < 300)
      }),
      (n.groupByType = function(e, t) {
        for (var r = {}, i = [], n = 0; n < e.length; n++) {
          var a = e[n]
          if (a[t] && !r[a[t]]) i.push({ name: a[t], data: [a] }), (r[a[t]] = a)
          else
            for (var o = 0; o < i.length; o++) {
              var s = i[o]
              if (s.name == a[t]) {
                s.data.push(a)
                break
              }
            }
        }
        return i
      }),
      (n.setCookie = function(e, t) {
        var r = 1e3 * t,
          i = new Date()
        for (var n in (i.setTime(i.getTime() + r), e))
          document.cookie =
            n + '=' + escape(e[n]) + ';path=/;expires=' + new Date(i)
      }),
      (n.debounce0 = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
          r = 0
        return function() {
          for (
            var i = this, n = arguments.length, a = Array(n), o = 0;
            o < n;
            o++
          )
            a[o] = arguments[o]
          r && clearTimeout(r),
            (r = setTimeout(function() {
              e.apply(i, a)
            }, t))
        }
      }),
      (n.debounce1 = function(e) {
        var t = null,
          r = function r() {
            r.cancel(),
              (t = setTimeout(
                e.bind.apply(
                  e,
                  [this].concat(Array.prototype.slice.call(arguments))
                )
              ))
          }
        return (
          (r.cancel = function() {
            clearTimeout(t)
          }),
          r
        )
      }),
      (n.debounce = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
          r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = void 0,
          n = void 0,
          a = void 0,
          o = function() {
            return setTimeout(function() {
              ;(i = null), r || (e.apply(n, a), (n = a = null))
            }, t)
          }
        return function() {
          if (i) clearTimeout(i), (i = o())
          else {
            i = o()
            for (var t = arguments.length, s = Array(t), l = 0; l < t; l++)
              s[l] = arguments[l]
            r ? e.apply(this, s) : ((n = this), (a = s))
          }
        }
      }),
      (n.clearCookie = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = document.cookie.match(/[^ =;]+(?=\=)/g)
        if (t)
          for (var r = t.length; r--; )
            e.includes(t[r]) ||
              (document.cookie = t[r] + '=0;path=/;expires=' + new Date(0))
      }),
      (n.randomAbbr = function(e, t, r) {
        var i = '',
          n = t,
          a = '0123456789abcdefghijklmnopqrstuvwxyz'.split('')
        e && (n = Math.round(Math.random() * (r - t)) + t)
        for (var o = 0; o < n; o++)
          i += a[Math.round(Math.random() * (a.length - 1))]
        return i
      }),
      (n.deepClone = function e(t) {
        var r = t
        return t && 'object' === (void 0 === t ? 'undefined' : i(t))
          ? ((r = Array.isArray(t) ? [] : {}),
            Object.keys(t).forEach(function(i) {
              null === t[i] ? (r[i] = null) : (r[i] = e(t[i]))
            }),
            r)
          : r
      }),
      (n.getUuid = function() {
        return Math.random()
          .toString(36)
          .slice(2)
      }),
      (n.getQueryValue = function(e) {
        for (
          var t = decodeURI(window.location.search.substring(1)).split('&'),
            r = 0;
          r < t.length;
          r++
        ) {
          var i = t[r].split('=')
          if (i[0] == e) return i[1]
        }
        return null
      }),
      (n.fromNow = function(e) {
        var t = Math.round(new Date() / 1e3) - e,
          r = t > 0 ? '前' : '后'
        t = Math.abs(t)
        for (
          var i = ['年', '个月', '星期', '天', '小时', '分钟', '秒'],
            n = [31536e3, 2592e3, 604800, 86400, 3600, 60, 1],
            a = 0;
          a < 7;
          a++
        ) {
          var o = Math.floor(t / n[a])
          if (0 !== o) return o + i[a] + r
        }
      }),
      (t.default = n),
      (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    var i = Object.prototype.hasOwnProperty,
      n = Array.isArray,
      a = (function() {
        for (var e = [], t = 0; t < 256; ++t)
          e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
        return e
      })(),
      o = function(e, t) {
        for (
          var r = t && t.plainObjects ? Object.create(null) : {}, i = 0;
          i < e.length;
          ++i
        )
          void 0 !== e[i] && (r[i] = e[i])
        return r
      }
    e.exports = {
      arrayToObject: o,
      assign: function(e, t) {
        return Object.keys(t).reduce(function(e, r) {
          return (e[r] = t[r]), e
        }, e)
      },
      combine: function(e, t) {
        return [].concat(e, t)
      },
      compact: function(e) {
        for (
          var t = [{ obj: { o: e }, prop: 'o' }], r = [], i = 0;
          i < t.length;
          ++i
        )
          for (
            var a = t[i], o = a.obj[a.prop], s = Object.keys(o), l = 0;
            l < s.length;
            ++l
          ) {
            var u = s[l],
              d = o[u]
            'object' == typeof d &&
              null !== d &&
              -1 === r.indexOf(d) &&
              (t.push({ obj: o, prop: u }), r.push(d))
          }
        return (
          (function(e) {
            for (; e.length > 1; ) {
              var t = e.pop(),
                r = t.obj[t.prop]
              if (n(r)) {
                for (var i = [], a = 0; a < r.length; ++a)
                  void 0 !== r[a] && i.push(r[a])
                t.obj[t.prop] = i
              }
            }
          })(t),
          e
        )
      },
      decode: function(e, t, r) {
        var i = e.replace(/\+/g, ' ')
        if ('iso-8859-1' === r) return i.replace(/%[0-9a-f]{2}/gi, unescape)
        try {
          return decodeURIComponent(i)
        } catch (e) {
          return i
        }
      },
      encode: function(e, t, r) {
        if (0 === e.length) return e
        var i = e
        if (
          ('symbol' == typeof e
            ? (i = Symbol.prototype.toString.call(e))
            : 'string' != typeof e && (i = String(e)),
          'iso-8859-1' === r)
        )
          return escape(i).replace(/%u[0-9a-f]{4}/gi, function(e) {
            return '%26%23' + parseInt(e.slice(2), 16) + '%3B'
          })
        for (var n = '', o = 0; o < i.length; ++o) {
          var s = i.charCodeAt(o)
          45 === s ||
          46 === s ||
          95 === s ||
          126 === s ||
          (s >= 48 && s <= 57) ||
          (s >= 65 && s <= 90) ||
          (s >= 97 && s <= 122)
            ? (n += i.charAt(o))
            : s < 128
              ? (n += a[s])
              : s < 2048
                ? (n += a[192 | (s >> 6)] + a[128 | (63 & s)])
                : s < 55296 || s >= 57344
                  ? (n +=
                      a[224 | (s >> 12)] +
                      a[128 | ((s >> 6) & 63)] +
                      a[128 | (63 & s)])
                  : ((o += 1),
                    (s =
                      65536 + (((1023 & s) << 10) | (1023 & i.charCodeAt(o)))),
                    (n +=
                      a[240 | (s >> 18)] +
                      a[128 | ((s >> 12) & 63)] +
                      a[128 | ((s >> 6) & 63)] +
                      a[128 | (63 & s)]))
        }
        return n
      },
      isBuffer: function(e) {
        return (
          !(!e || 'object' != typeof e) &&
          !!(
            e.constructor &&
            e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          )
        )
      },
      isRegExp: function(e) {
        return '[object RegExp]' === Object.prototype.toString.call(e)
      },
      maybeMap: function(e, t) {
        if (n(e)) {
          for (var r = [], i = 0; i < e.length; i += 1) r.push(t(e[i]))
          return r
        }
        return t(e)
      },
      merge: function e(t, r, a) {
        if (!r) return t
        if ('object' != typeof r) {
          if (n(t)) t.push(r)
          else {
            if (!t || 'object' != typeof t) return [t, r]
            ;((a && (a.plainObjects || a.allowPrototypes)) ||
              !i.call(Object.prototype, r)) &&
              (t[r] = !0)
          }
          return t
        }
        if (!t || 'object' != typeof t) return [t].concat(r)
        var s = t
        return (
          n(t) && !n(r) && (s = o(t, a)),
          n(t) && n(r)
            ? (r.forEach(function(r, n) {
                if (i.call(t, n)) {
                  var o = t[n]
                  o && 'object' == typeof o && r && 'object' == typeof r
                    ? (t[n] = e(o, r, a))
                    : t.push(r)
                } else t[n] = r
              }),
              t)
            : Object.keys(r).reduce(function(t, n) {
                var o = r[n]
                return i.call(t, n) ? (t[n] = e(t[n], o, a)) : (t[n] = o), t
              }, s)
        )
      }
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.FragmentTracker = t.FragmentState = void 0)
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = o(r(3)),
      a = o(r(1))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var s = (t.FragmentState = {
      NOT_LOADED: 'NOT_LOADED',
      APPENDING: 'APPENDING',
      PARTIAL: 'PARTIAL',
      OK: 'OK'
    })
    t.FragmentTracker = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            a.default.BUFFER_APPENDED,
            a.default.FRAG_BUFFERED,
            a.default.FRAG_LOADED
          )
        )
        return (
          (r.bufferPadding = 0.2),
          (r.fragments = Object.create(null)),
          (r.timeRanges = Object.create(null)),
          (r.config = e.config),
          r
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
        i(t, [
          {
            key: 'destroy',
            value: function() {
              ;(this.fragments = null),
                (this.timeRanges = null),
                (this.config = null),
                n.default.prototype.destroy.call(this),
                (function e(t, r, i) {
                  null === t && (t = Function.prototype)
                  var n = Object.getOwnPropertyDescriptor(t, r)
                  if (void 0 === n) {
                    var a = Object.getPrototypeOf(t)
                    return null === a ? void 0 : e(a, r, i)
                  }
                  if ('value' in n) return n.value
                  var o = n.get
                  return void 0 !== o ? o.call(i) : void 0
                })(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  'destroy',
                  this
                ).call(this)
            }
          },
          {
            key: 'getBufferedFrag',
            value: function(e, t) {
              var r = this.fragments,
                i = Object.keys(r).filter(function(i) {
                  var n = r[i]
                  if (n.body.type !== t) return !1
                  if (!n.buffered) return !1
                  var a = n.body
                  return a.startPTS <= e && e <= a.endPTS
                })
              if (0 === i.length) return null
              var n = i.pop()
              return r[n].body
            }
          },
          {
            key: 'detectEvictedFragments',
            value: function(e, t) {
              var r = this,
                i = void 0,
                n = void 0
              Object.keys(this.fragments).forEach(function(a) {
                var o = r.fragments[a]
                if (!0 === o.buffered) {
                  var s = o.range[e]
                  if (s) {
                    i = s.time
                    for (var l = 0; l < i.length; l++)
                      if (
                        ((n = i[l]),
                        !1 === r.isTimeBuffered(n.startPTS, n.endPTS, t))
                      ) {
                        r.removeFragment(o.body)
                        break
                      }
                  }
                }
              })
            }
          },
          {
            key: 'detectPartialFragments',
            value: function(e) {
              var t = this,
                r = this.getFragmentKey(e),
                i = this.fragments[r]
              i &&
                ((i.buffered = !0),
                Object.keys(this.timeRanges).forEach(function(r) {
                  if (!0 === e.hasElementaryStream(r)) {
                    var n = t.timeRanges[r]
                    i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, n)
                  }
                }))
            }
          },
          {
            key: 'getBufferedTimes',
            value: function(e, t, r) {
              for (
                var i = [], n = void 0, a = void 0, o = !1, s = 0;
                s < r.length;
                s++
              ) {
                if (
                  ((n = r.start(s) - this.bufferPadding),
                  (a = r.end(s) + this.bufferPadding),
                  e >= n && t <= a)
                ) {
                  i.push({
                    startPTS: Math.max(e, r.start(s)),
                    endPTS: Math.min(t, r.end(s))
                  })
                  break
                }
                if (e < a && t > n)
                  i.push({
                    startPTS: Math.max(e, r.start(s)),
                    endPTS: Math.min(t, r.end(s))
                  }),
                    (o = !0)
                else if (t <= n) break
              }
              return { time: i, partial: o }
            }
          },
          {
            key: 'getFragmentKey',
            value: function(e) {
              return e.type + '_' + e.level + '_' + e.urlId + '_' + e.sn
            }
          },
          {
            key: 'getPartialFragment',
            value: function(e) {
              var t = this,
                r = void 0,
                i = void 0,
                n = void 0,
                a = null,
                o = 0
              return (
                Object.keys(this.fragments).forEach(function(s) {
                  var l = t.fragments[s]
                  t.isPartial(l) &&
                    ((i = l.body.startPTS - t.bufferPadding),
                    (n = l.body.endPTS + t.bufferPadding),
                    e >= i &&
                      e <= n &&
                      ((r = Math.min(e - i, n - e)),
                      o <= r && ((a = l.body), (o = r))))
                }),
                a
              )
            }
          },
          {
            key: 'getState',
            value: function(e) {
              var t = this.getFragmentKey(e),
                r = this.fragments[t],
                i = s.NOT_LOADED
              return (
                void 0 !== r &&
                  (i = r.buffered
                    ? !0 === this.isPartial(r)
                      ? s.PARTIAL
                      : s.OK
                    : s.APPENDING),
                i
              )
            }
          },
          {
            key: 'isPartial',
            value: function(e) {
              return (
                !0 === e.buffered &&
                ((void 0 !== e.range.video && !0 === e.range.video.partial) ||
                  (void 0 !== e.range.audio && !0 === e.range.audio.partial))
              )
            }
          },
          {
            key: 'isTimeBuffered',
            value: function(e, t, r) {
              for (var i = void 0, n = void 0, a = 0; a < r.length; a++) {
                if (
                  ((i = r.start(a) - this.bufferPadding),
                  (n = r.end(a) + this.bufferPadding),
                  e >= i && t <= n)
                )
                  return !0
                if (t <= i) return !1
              }
              return !1
            }
          },
          {
            key: 'onFragLoaded',
            value: function(e) {
              var t = e.frag
              if (!isNaN(t.sn) && !t.bitrateTest) {
                var r = this.getFragmentKey(t),
                  i = { body: t, range: Object.create(null), buffered: !1 }
                this.fragments[r] = i
              }
            }
          },
          {
            key: 'onBufferAppended',
            value: function(e) {
              var t = this
              ;(this.timeRanges = e.timeRanges),
                Object.keys(this.timeRanges).forEach(function(e) {
                  var r = t.timeRanges[e]
                  t.detectEvictedFragments(e, r)
                })
            }
          },
          {
            key: 'onFragBuffered',
            value: function(e) {
              this.detectPartialFragments(e.frag)
            }
          },
          {
            key: 'hasFragment',
            value: function(e) {
              var t = this.getFragmentKey(e)
              return void 0 !== this.fragments[t]
            }
          },
          {
            key: 'removeFragment',
            value: function(e) {
              var t = this.getFragmentKey(e)
              delete this.fragments[t]
            }
          },
          {
            key: 'removeAllFragments',
            value: function() {
              this.fragments = Object.create(null)
            }
          }
        ]),
        t
      )
    })(n.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    t.BufferHelper = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e)
      }
      return (
        i(e, null, [
          {
            key: 'isBuffered',
            value: function(e, t) {
              try {
                if (e)
                  for (var r = e.buffered, i = 0; i < r.length; i++)
                    if (t >= r.start(i) && t <= r.end(i)) return !0
              } catch (e) {}
              return !1
            }
          },
          {
            key: 'bufferInfo',
            value: function(e, t, r) {
              try {
                if (e) {
                  var i = e.buffered,
                    n = [],
                    a = void 0
                  for (a = 0; a < i.length; a++)
                    n.push({ start: i.start(a), end: i.end(a) })
                  return this.bufferedInfo(n, t, r)
                }
              } catch (e) {}
              return { len: 0, start: t, end: t, nextStart: void 0 }
            }
          },
          {
            key: 'bufferedInfo',
            value: function(e, t, r) {
              var i = [],
                n = void 0,
                a = void 0,
                o = void 0,
                s = void 0,
                l = void 0
              for (
                e.sort(function(e, t) {
                  var r = e.start - t.start
                  return r || t.end - e.end
                }),
                  l = 0;
                l < e.length;
                l++
              ) {
                var u = i.length
                if (u) {
                  var d = i[u - 1].end
                  e[l].start - d < r
                    ? e[l].end > d && (i[u - 1].end = e[l].end)
                    : i.push(e[l])
                } else i.push(e[l])
              }
              for (l = 0, n = 0, a = o = t; l < i.length; l++) {
                var f = i[l].start,
                  c = i[l].end
                if (t + r >= f && t < c) (a = f), (n = (o = c) - t)
                else if (t + r < f) {
                  s = f
                  break
                }
              }
              return { len: n, start: a, end: o, nextStart: s }
            }
          }
        ]),
        e
      )
    })()
  },
  function(e, t, r) {
    'use strict'
    var i,
      n = 'object' == typeof Reflect ? Reflect : null,
      a =
        n && 'function' == typeof n.apply
          ? n.apply
          : function(e, t, r) {
              return Function.prototype.apply.call(e, t, r)
            }
    i =
      n && 'function' == typeof n.ownKeys
        ? n.ownKeys
        : Object.getOwnPropertySymbols
          ? function(e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              )
            }
          : function(e) {
              return Object.getOwnPropertyNames(e)
            }
    var o =
      Number.isNaN ||
      function(e) {
        return e != e
      }
    function s() {
      s.init.call(this)
    }
    ;(e.exports = s),
      (e.exports.once = function(e, t) {
        return new Promise(function(r, i) {
          function n() {
            void 0 !== a && e.removeListener('error', a),
              r([].slice.call(arguments))
          }
          var a
          'error' !== t &&
            ((a = function(r) {
              e.removeListener(t, n), i(r)
            }),
            e.once('error', a)),
            e.once(t, n)
        })
      }),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0)
    var l = 10
    function u(e) {
      if ('function' != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        )
    }
    function d(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners
    }
    function f(e, t, r, i) {
      var n, a, o, s
      if (
        (u(r),
        void 0 === (a = e._events)
          ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== a.newListener &&
              (e.emit('newListener', t, r.listener ? r.listener : r),
              (a = e._events)),
            (o = a[t])),
        void 0 === o)
      )
        (o = a[t] = r), ++e._eventsCount
      else if (
        ('function' == typeof o
          ? (o = a[t] = i ? [r, o] : [o, r])
          : i
            ? o.unshift(r)
            : o.push(r),
        (n = d(e)) > 0 && o.length > n && !o.warned)
      ) {
        o.warned = !0
        var l = new Error(
          'Possible EventEmitter memory leak detected. ' +
            o.length +
            ' ' +
            String(t) +
            ' listeners added. Use emitter.setMaxListeners() to increase limit'
        )
        ;(l.name = 'MaxListenersExceededWarning'),
          (l.emitter = e),
          (l.type = t),
          (l.count = o.length),
          (s = l),
          console && console.warn && console.warn(s)
      }
      return e
    }
    function c() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        )
    }
    function h(e, t, r) {
      var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
        n = c.bind(i)
      return (n.listener = r), (i.wrapFn = n), n
    }
    function p(e, t, r) {
      var i = e._events
      if (void 0 === i) return []
      var n = i[t]
      return void 0 === n
        ? []
        : 'function' == typeof n
          ? r
            ? [n.listener || n]
            : [n]
          : r
            ? (function(e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                  t[r] = e[r].listener || e[r]
                return t
              })(n)
            : g(n, n.length)
    }
    function v(e) {
      var t = this._events
      if (void 0 !== t) {
        var r = t[e]
        if ('function' == typeof r) return 1
        if (void 0 !== r) return r.length
      }
      return 0
    }
    function g(e, t) {
      for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i]
      return r
    }
    Object.defineProperty(s, 'defaultMaxListeners', {
      enumerable: !0,
      get: function() {
        return l
      },
      set: function(e) {
        if ('number' != typeof e || e < 0 || o(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          )
        l = e
      }
    }),
      (s.init = function() {
        ;(void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0)
      }),
      (s.prototype.setMaxListeners = function(e) {
        if ('number' != typeof e || e < 0 || o(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          )
        return (this._maxListeners = e), this
      }),
      (s.prototype.getMaxListeners = function() {
        return d(this)
      }),
      (s.prototype.emit = function(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r])
        var i = 'error' === e,
          n = this._events
        if (void 0 !== n) i = i && void 0 === n.error
        else if (!i) return !1
        if (i) {
          var o
          if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o
          var s = new Error(
            'Unhandled error.' + (o ? ' (' + o.message + ')' : '')
          )
          throw ((s.context = o), s)
        }
        var l = n[e]
        if (void 0 === l) return !1
        if ('function' == typeof l) a(l, this, t)
        else {
          var u = l.length,
            d = g(l, u)
          for (r = 0; r < u; ++r) a(d[r], this, t)
        }
        return !0
      }),
      (s.prototype.addListener = function(e, t) {
        return f(this, e, t, !1)
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function(e, t) {
        return f(this, e, t, !0)
      }),
      (s.prototype.once = function(e, t) {
        return u(t), this.on(e, h(this, e, t)), this
      }),
      (s.prototype.prependOnceListener = function(e, t) {
        return u(t), this.prependListener(e, h(this, e, t)), this
      }),
      (s.prototype.removeListener = function(e, t) {
        var r, i, n, a, o
        if ((u(t), void 0 === (i = this._events))) return this
        if (void 0 === (r = i[e])) return this
        if (r === t || r.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete i[e],
              i.removeListener &&
                this.emit('removeListener', e, r.listener || t))
        else if ('function' != typeof r) {
          for (n = -1, a = r.length - 1; a >= 0; a--)
            if (r[a] === t || r[a].listener === t) {
              ;(o = r[a].listener), (n = a)
              break
            }
          if (n < 0) return this
          0 === n
            ? r.shift()
            : (function(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1]
                e.pop()
              })(r, n),
            1 === r.length && (i[e] = r[0]),
            void 0 !== i.removeListener &&
              this.emit('removeListener', e, o || t)
        }
        return this
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function(e) {
        var t, r, i
        if (void 0 === (r = this._events)) return this
        if (void 0 === r.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== r[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete r[e]),
            this
          )
        if (0 === arguments.length) {
          var n,
            a = Object.keys(r)
          for (i = 0; i < a.length; ++i)
            'removeListener' !== (n = a[i]) && this.removeAllListeners(n)
          return (
            this.removeAllListeners('removeListener'),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          )
        }
        if ('function' == typeof (t = r[e])) this.removeListener(e, t)
        else if (void 0 !== t)
          for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i])
        return this
      }),
      (s.prototype.listeners = function(e) {
        return p(this, e, !0)
      }),
      (s.prototype.rawListeners = function(e) {
        return p(this, e, !1)
      }),
      (s.listenerCount = function(e, t) {
        return 'function' == typeof e.listenerCount
          ? e.listenerCount(t)
          : v.call(e, t)
      }),
      (s.prototype.listenerCount = v),
      (s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? i(this._events) : []
      })
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = d(r(75)),
      a = d(r(76)),
      o = d(r(77)),
      s = r(2),
      l = r(0),
      u = d(r(1))
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function f(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    var c = (0, r(5).getSelfScope)(),
      h = (c.performance, c.crypto),
      p = (function() {
        function e(t, r) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = i.removePKCS7Padding,
            a = void 0 === n || n
          if (
            (f(this, e),
            (this.logEnabled = !0),
            (this.observer = t),
            (this.config = r),
            (this.removePKCS7Padding = a),
            a)
          )
            try {
              var o = h || c.crypto
              this.subtle = o.subtle || o.webkitSubtle
            } catch (e) {}
          this.disableWebCrypto = !this.subtle
        }
        return (
          i(e, [
            {
              key: 'isSync',
              value: function() {
                return this.disableWebCrypto && this.config.enableSoftwareAES
              }
            },
            {
              key: 'decrypt',
              value: function(e, t, r, i) {
                var s = this
                if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                  this.logEnabled &&
                    (l.logger.log('JS AES decrypt'), (this.logEnabled = !1))
                  var u = this.decryptor
                  u || (this.decryptor = u = new o.default()),
                    u.expandKey(t),
                    i(u.decrypt(e, 0, r, this.removePKCS7Padding))
                } else {
                  this.logEnabled &&
                    (l.logger.log('WebCrypto AES decrypt'),
                    (this.logEnabled = !1))
                  var d = this.subtle
                  this.key !== t &&
                    ((this.key = t), (this.fastAesKey = new a.default(d, t))),
                    this.fastAesKey
                      .expandKey()
                      .then(function(a) {
                        new n.default(d, r)
                          .decrypt(e, a)
                          .catch(function(n) {
                            s.onWebCryptoError(n, e, t, r, i)
                          })
                          .then(function(e) {
                            i(e)
                          })
                      })
                      .catch(function(n) {
                        s.onWebCryptoError(n, e, t, r, i)
                      })
                }
              }
            },
            {
              key: 'onWebCryptoError',
              value: function(e, t, r, i, n) {
                this.config.enableSoftwareAES
                  ? (l.logger.log('WebCrypto Error, disable WebCrypto API'),
                    (this.disableWebCrypto = !0),
                    (this.logEnabled = !0),
                    this.decrypt(t, r, i, n))
                  : (l.logger.error('decrypting error : ' + e.message),
                    this.observer.trigger(u.default.ERROR, {
                      type: s.ErrorTypes.MEDIA_ERROR,
                      details: s.ErrorDetails.FRAG_DECRYPT_ERROR,
                      fatal: !0,
                      reason: e.message
                    }))
              }
            },
            {
              key: 'destroy',
              value: function() {
                var e = this.decryptor
                e && (e.destroy(), (this.decryptor = void 0))
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = p), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getMediaSource = function() {
        if ('undefined' != typeof window)
          return window.MediaSource || window.WebKitMediaSource
      })
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.addGroupId = function(e, t, r) {
        switch (t) {
          case 'audio':
            e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r)
            break
          case 'text':
            e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
        }
      }),
      (t.updatePTS = n),
      (t.updateFragPTSDTS = a),
      (t.mergeDetails = function(e, t) {
        var r = Math.max(e.startSN, t.startSN) - t.startSN,
          n = Math.min(e.endSN, t.endSN) - t.startSN,
          o = t.startSN - e.startSN,
          s = e.fragments,
          l = t.fragments,
          u = 0,
          d = void 0
        t.initSegment && e.initSegment && (t.initSegment = e.initSegment)
        if (n < r) return void (t.PTSKnown = !1)
        for (var f = r; f <= n; f++) {
          var c = s[o + f],
            h = l[f]
          h &&
            c &&
            ((u = c.cc - h.cc),
            isNaN(c.startPTS) ||
              ((h.start = h.startPTS = c.startPTS),
              (h.endPTS = c.endPTS),
              (h.duration = c.duration),
              (h.backtracked = c.backtracked),
              (h.dropped = c.dropped),
              (d = h)))
        }
        if (u)
          for (
            i.logger.log(
              'discontinuity sliding from playlist, take drift into account'
            ),
              f = 0;
            f < l.length;
            f++
          )
            l[f].cc += u
        if (d) a(t, d, d.startPTS, d.endPTS, d.startDTS, d.endDTS)
        else if (o >= 0 && o < s.length) {
          var p = s[o].start
          for (f = 0; f < l.length; f++) l[f].start += p
        }
        t.PTSKnown = e.PTSKnown
      })
    var i = r(0)
    function n(e, t, r) {
      var n = e[t],
        a = e[r],
        o = a.startPTS
      isNaN(o)
        ? (a.start =
            r > t ? n.start + n.duration : Math.max(n.start - a.duration, 0))
        : r > t
          ? ((n.duration = o - n.start),
            n.duration < 0 &&
              i.logger.warn(
                'negative duration computed for frag ' +
                  n.sn +
                  ',level ' +
                  n.level +
                  ', there should be some duration drift between playlist and fragment!'
              ))
          : ((a.duration = n.start - o),
            a.duration < 0 &&
              i.logger.warn(
                'negative duration computed for frag ' +
                  a.sn +
                  ',level ' +
                  a.level +
                  ', there should be some duration drift between playlist and fragment!'
              ))
    }
    function a(e, t, r, i, a, o) {
      var s = r
      if (!isNaN(t.startPTS)) {
        var l = Math.abs(t.startPTS - r)
        isNaN(t.deltaPTS)
          ? (t.deltaPTS = l)
          : (t.deltaPTS = Math.max(l, t.deltaPTS)),
          (s = Math.max(r, t.startPTS)),
          (r = Math.min(r, t.startPTS)),
          (i = Math.max(i, t.endPTS)),
          (a = Math.min(a, t.startDTS)),
          (o = Math.max(o, t.endDTS))
      }
      var u = r - t.start
      ;(t.start = t.startPTS = r),
        (t.maxStartPTS = s),
        (t.endPTS = i),
        (t.startDTS = a),
        (t.endDTS = o),
        (t.duration = i - r)
      var d = t.sn
      if (!e || d < e.startSN || d > e.endSN) return 0
      var f,
        c = void 0,
        h = void 0
      for (f = d - e.startSN, (c = e.fragments)[f] = t, h = f; h > 0; h--)
        n(c, h, h - 1)
      for (h = f; h < c.length - 1; h++) n(c, h, h + 1)
      return (e.PTSKnown = !0), u
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = d(r(1)),
      a = d(r(3)),
      o = r(2),
      s = r(0),
      l = d(r(21)),
      u = d(r(48))
    r(11)
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var f = window.performance,
      c = {
        MANIFEST: 'manifest',
        LEVEL: 'level',
        AUDIO_TRACK: 'audioTrack',
        SUBTITLE_TRACK: 'subtitleTrack'
      },
      h = { MAIN: 'main', AUDIO: 'audio', SUBTITLE: 'subtitle' },
      p = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var r = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              n.default.MANIFEST_LOADING,
              n.default.LEVEL_LOADING,
              n.default.AUDIO_TRACK_LOADING,
              n.default.SUBTITLE_TRACK_LOADING
            )
          )
          return (r.loaders = {}), r
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
          i(
            t,
            [
              {
                key: 'createInternalLoader',
                value: function(e) {
                  var t = this.hls.config,
                    r = t.pLoader,
                    i = t.loader,
                    n = new (r || i)(t)
                  return (e.loader = n), (this.loaders[e.type] = n), n
                }
              },
              {
                key: 'getInternalLoader',
                value: function(e) {
                  return this.loaders[e.type]
                }
              },
              {
                key: 'resetInternalLoader',
                value: function(e) {
                  this.loaders[e] && delete this.loaders[e]
                }
              },
              {
                key: 'destroyInternalLoaders',
                value: function() {
                  for (var e in this.loaders) {
                    var t = this.loaders[e]
                    t && t.destroy(), this.resetInternalLoader(e)
                  }
                }
              },
              {
                key: 'destroy',
                value: function() {
                  this.destroyInternalLoaders(),
                    (function e(t, r, i) {
                      null === t && (t = Function.prototype)
                      var n = Object.getOwnPropertyDescriptor(t, r)
                      if (void 0 === n) {
                        var a = Object.getPrototypeOf(t)
                        return null === a ? void 0 : e(a, r, i)
                      }
                      if ('value' in n) return n.value
                      var o = n.get
                      return void 0 !== o ? o.call(i) : void 0
                    })(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      'destroy',
                      this
                    ).call(this)
                }
              },
              {
                key: 'onManifestLoading',
                value: function(e) {
                  this.load(e.url, { type: c.MANIFEST, level: 0, id: null })
                }
              },
              {
                key: 'onLevelLoading',
                value: function(e) {
                  this.load(e.url, { type: c.LEVEL, level: e.level, id: e.id })
                }
              },
              {
                key: 'onAudioTrackLoading',
                value: function(e) {
                  this.load(e.url, {
                    type: c.AUDIO_TRACK,
                    level: null,
                    id: e.id
                  })
                }
              },
              {
                key: 'onSubtitleTrackLoading',
                value: function(e) {
                  this.load(e.url, {
                    type: c.SUBTITLE_TRACK,
                    level: null,
                    id: e.id
                  })
                }
              },
              {
                key: 'load',
                value: function(e, t) {
                  var r = this.hls.config
                  s.logger.debug(
                    'Loading playlist of type ' +
                      t.type +
                      ', level: ' +
                      t.level +
                      ', id: ' +
                      t.id
                  )
                  var i = this.getInternalLoader(t)
                  if (i) {
                    var n = i.context
                    if (n && n.url === e)
                      return s.logger.trace('playlist request ongoing'), !1
                    s.logger.warn(
                      'aborting previous loader for type: ' + t.type
                    ),
                      i.abort()
                  }
                  var a = void 0,
                    o = void 0,
                    l = void 0,
                    u = void 0
                  switch (t.type) {
                    case c.MANIFEST:
                      ;(a = r.manifestLoadingMaxRetry),
                        (o = r.manifestLoadingTimeOut),
                        (l = r.manifestLoadingRetryDelay),
                        (u = r.manifestLoadingMaxRetryTimeout)
                      break
                    case c.LEVEL:
                      ;(a = 0), (o = r.levelLoadingTimeOut)
                      break
                    default:
                      ;(a = r.levelLoadingMaxRetry),
                        (o = r.levelLoadingTimeOut),
                        (l = r.levelLoadingRetryDelay),
                        (u = r.levelLoadingMaxRetryTimeout)
                  }
                  ;(i = this.createInternalLoader(t)),
                    (t.url = e),
                    (t.responseType = t.responseType || '')
                  var d = {
                      timeout: o,
                      maxRetry: a,
                      retryDelay: l,
                      maxRetryDelay: u
                    },
                    f = {
                      onSuccess: this.loadsuccess.bind(this),
                      onError: this.loaderror.bind(this),
                      onTimeout: this.loadtimeout.bind(this)
                    }
                  return (
                    s.logger.debug(
                      'Calling internal loader delegate for URL: ' + e
                    ),
                    i.load(t, d, f),
                    !0
                  )
                }
              },
              {
                key: 'loadsuccess',
                value: function(e, t, r) {
                  var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : null
                  if (r.isSidxRequest)
                    return (
                      this._handleSidxRequest(e, r),
                      void this._handlePlaylistLoaded(e, t, r, i)
                    )
                  this.resetInternalLoader(r.type)
                  var n = e.data
                  ;(t.tload = f.now()),
                    0 === n.indexOf('#EXTM3U')
                      ? n.indexOf('#EXTINF:') > 0 ||
                        n.indexOf('#EXT-X-TARGETDURATION:') > 0
                        ? this._handleTrackOrLevelPlaylist(e, t, r, i)
                        : this._handleMasterPlaylist(e, t, r, i)
                      : this._handleManifestParsingError(
                          e,
                          r,
                          'no EXTM3U delimiter',
                          i
                        )
                }
              },
              {
                key: 'loaderror',
                value: function(e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null
                  this._handleNetworkError(t, r, !1, e)
                }
              },
              {
                key: 'loadtimeout',
                value: function(e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null
                  this._handleNetworkError(t, r, !0)
                }
              },
              {
                key: '_handleMasterPlaylist',
                value: function(e, r, i, a) {
                  var o = this.hls,
                    l = e.data,
                    d = t.getResponseUrl(e, i),
                    f = u.default.parseMasterPlaylist(l, d)
                  if (f.length) {
                    var c = f.map(function(e) {
                        return { id: e.attrs.AUDIO, codec: e.audioCodec }
                      }),
                      h = u.default.parseMasterPlaylistMedia(l, d, 'AUDIO', c),
                      p = u.default.parseMasterPlaylistMedia(l, d, 'SUBTITLES')
                    if (h.length) {
                      var v = !1
                      h.forEach(function(e) {
                        e.url || (v = !0)
                      }),
                        !1 === v &&
                          f[0].audioCodec &&
                          !f[0].attrs.AUDIO &&
                          (s.logger.log(
                            'audio codec signaled in quality level, but no embedded audio track signaled, create one'
                          ),
                          h.unshift({ type: 'main', name: 'main' }))
                    }
                    o.trigger(n.default.MANIFEST_LOADED, {
                      levels: f,
                      audioTracks: h,
                      subtitles: p,
                      url: d,
                      stats: r,
                      networkDetails: a
                    })
                  } else
                    this._handleManifestParsingError(
                      e,
                      i,
                      'no level found in manifest',
                      a
                    )
                }
              },
              {
                key: '_handleTrackOrLevelPlaylist',
                value: function(e, r, i, a) {
                  var o = this.hls,
                    s = i.id,
                    l = i.level,
                    d = i.type,
                    h = t.getResponseUrl(e, i),
                    p = Number.isFinite(s) ? s : 0,
                    v = Number.isFinite(l) ? l : p,
                    g = t.mapContextToLevelType(i),
                    y = u.default.parseLevelPlaylist(e.data, h, v, g, p)
                  if (((y.tload = r.tload), d === c.MANIFEST)) {
                    var m = { url: h, details: y }
                    o.trigger(n.default.MANIFEST_LOADED, {
                      levels: [m],
                      audioTracks: [],
                      url: h,
                      stats: r,
                      networkDetails: a
                    })
                  }
                  if (((r.tparsed = f.now()), y.needSidxRanges)) {
                    var b = y.initSegment.url
                    this.load(b, {
                      isSidxRequest: !0,
                      type: d,
                      level: l,
                      levelDetails: y,
                      id: s,
                      rangeStart: 0,
                      rangeEnd: 2048,
                      responseType: 'arraybuffer'
                    })
                  } else
                    (i.levelDetails = y), this._handlePlaylistLoaded(e, r, i, a)
                }
              },
              {
                key: '_handleSidxRequest',
                value: function(e, t) {
                  var r = l.default.parseSegmentIndex(new Uint8Array(e.data))
                  if (r) {
                    var i = r.references,
                      n = t.levelDetails
                    i.forEach(function(e, t) {
                      var r = e.info,
                        i = n.fragments[t]
                      0 === i.byteRange.length &&
                        (i.rawByteRange =
                          String(1 + r.end - r.start) + '@' + String(r.start))
                    }),
                      (n.initSegment.rawByteRange =
                        String(r.moovEndOffset) + '@0')
                  }
                }
              },
              {
                key: '_handleManifestParsingError',
                value: function(e, t, r, i) {
                  this.hls.trigger(n.default.ERROR, {
                    type: o.ErrorTypes.NETWORK_ERROR,
                    details: o.ErrorDetails.MANIFEST_PARSING_ERROR,
                    fatal: !0,
                    url: e.url,
                    reason: r,
                    networkDetails: i
                  })
                }
              },
              {
                key: '_handleNetworkError',
                value: function(e, t) {
                  var r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null
                  s.logger.info(
                    'A network error occured while loading a ' +
                      e.type +
                      '-type playlist'
                  )
                  var a = void 0,
                    l = void 0,
                    u = this.getInternalLoader(e)
                  switch (e.type) {
                    case c.MANIFEST:
                      ;(a = r
                        ? o.ErrorDetails.MANIFEST_LOAD_TIMEOUT
                        : o.ErrorDetails.MANIFEST_LOAD_ERROR),
                        (l = !0)
                      break
                    case c.LEVEL:
                      ;(a = r
                        ? o.ErrorDetails.LEVEL_LOAD_TIMEOUT
                        : o.ErrorDetails.LEVEL_LOAD_ERROR),
                        (l = !1)
                      break
                    case c.AUDIO_TRACK:
                      ;(a = r
                        ? o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                        : o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR),
                        (l = !1)
                      break
                    default:
                      l = !1
                  }
                  u && (u.abort(), this.resetInternalLoader(e.type))
                  var d = {
                    type: o.ErrorTypes.NETWORK_ERROR,
                    details: a,
                    fatal: l,
                    url: u.url,
                    loader: u,
                    context: e,
                    networkDetails: t
                  }
                  i && (d.response = i), this.hls.trigger(n.default.ERROR, d)
                }
              },
              {
                key: '_handlePlaylistLoaded',
                value: function(e, r, i, a) {
                  var o = i.type,
                    s = i.level,
                    l = i.id,
                    u = i.levelDetails
                  if (u.targetduration)
                    if (t.canHaveQualityLevels(i.type))
                      this.hls.trigger(n.default.LEVEL_LOADED, {
                        details: u,
                        level: s || 0,
                        id: l || 0,
                        stats: r,
                        networkDetails: a
                      })
                    else
                      switch (o) {
                        case c.AUDIO_TRACK:
                          this.hls.trigger(n.default.AUDIO_TRACK_LOADED, {
                            details: u,
                            id: l,
                            stats: r,
                            networkDetails: a
                          })
                          break
                        case c.SUBTITLE_TRACK:
                          this.hls.trigger(n.default.SUBTITLE_TRACK_LOADED, {
                            details: u,
                            id: l,
                            stats: r,
                            networkDetails: a
                          })
                      }
                  else
                    this._handleManifestParsingError(
                      e,
                      i,
                      'invalid target duration',
                      a
                    )
                }
              }
            ],
            [
              {
                key: 'canHaveQualityLevels',
                value: function(e) {
                  return e !== c.AUDIO_TRACK && e !== c.SUBTITLE_TRACK
                }
              },
              {
                key: 'mapContextToLevelType',
                value: function(e) {
                  switch (e.type) {
                    case c.AUDIO_TRACK:
                      return h.AUDIO
                    case c.SUBTITLE_TRACK:
                      return h.SUBTITLE
                    default:
                      return h.MAIN
                  }
                }
              },
              {
                key: 'getResponseUrl',
                value: function(e, t) {
                  var r = e.url
                  return (
                    (void 0 !== r && 0 !== r.indexOf('data:')) || (r = t.url), r
                  )
                }
              },
              {
                key: 'ContextType',
                get: function() {
                  return c
                }
              },
              {
                key: 'LevelType',
                get: function() {
                  return h
                }
              }
            ]
          ),
          t
        )
      })(a.default)
    ;(t.default = p), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = r(0),
      o = r(1),
      s = (i = o) && i.__esModule ? i : { default: i }
    var l = Math.pow(2, 32) - 1,
      u = (function() {
        function e(t, r) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.observer = t),
            (this.remuxer = r)
        }
        return (
          n(
            e,
            [
              {
                key: 'resetTimeStamp',
                value: function(e) {
                  this.initPTS = e
                }
              },
              {
                key: 'resetInitSegment',
                value: function(t, r, i, n) {
                  if (t && t.byteLength) {
                    var a = (this.initData = e.parseInitSegment(t))
                    null == r && (r = 'mp4a.40.5'),
                      null == i && (i = 'avc1.42e01e')
                    var o = {}
                    a.audio && a.video
                      ? (o.audiovideo = {
                          container: 'video/mp4',
                          codec: r + ',' + i,
                          initSegment: n ? t : null
                        })
                      : (a.audio &&
                          (o.audio = {
                            container: 'audio/mp4',
                            codec: r,
                            initSegment: n ? t : null
                          }),
                        a.video &&
                          (o.video = {
                            container: 'video/mp4',
                            codec: i,
                            initSegment: n ? t : null
                          })),
                      this.observer.trigger(
                        s.default.FRAG_PARSING_INIT_SEGMENT,
                        { tracks: o }
                      )
                  } else r && (this.audioCodec = r), i && (this.videoCodec = i)
                }
              },
              {
                key: 'append',
                value: function(t, r, i, n) {
                  var a = this.initData
                  a ||
                    (this.resetInitSegment(
                      t,
                      this.audioCodec,
                      this.videoCodec,
                      !1
                    ),
                    (a = this.initData))
                  var o,
                    l = this.initPTS
                  if (void 0 === l) {
                    var u = e.getStartDTS(a, t)
                    ;(this.initPTS = l = u - r),
                      this.observer.trigger(s.default.INIT_PTS_FOUND, {
                        initPTS: l
                      })
                  }
                  e.offsetStartDTS(a, t, l),
                    (o = e.getStartDTS(a, t)),
                    this.remuxer.remux(a.audio, a.video, null, null, o, i, n, t)
                }
              },
              { key: 'destroy', value: function() {} }
            ],
            [
              {
                key: 'probe',
                value: function(t) {
                  return (
                    e.findBox(
                      { data: t, start: 0, end: Math.min(t.length, 16384) },
                      ['moof']
                    ).length > 0
                  )
                }
              },
              {
                key: 'bin2str',
                value: function(e) {
                  return String.fromCharCode.apply(null, e)
                }
              },
              {
                key: 'readUint16',
                value: function(e, t) {
                  e.data && ((t += e.start), (e = e.data))
                  var r = (e[t] << 8) | e[t + 1]
                  return r < 0 ? 65536 + r : r
                }
              },
              {
                key: 'readUint32',
                value: function(e, t) {
                  e.data && ((t += e.start), (e = e.data))
                  var r =
                    (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
                  return r < 0 ? 4294967296 + r : r
                }
              },
              {
                key: 'writeUint32',
                value: function(e, t, r) {
                  e.data && ((t += e.start), (e = e.data)),
                    (e[t] = r >> 24),
                    (e[t + 1] = (r >> 16) & 255),
                    (e[t + 2] = (r >> 8) & 255),
                    (e[t + 3] = 255 & r)
                }
              },
              {
                key: 'findBox',
                value: function(t, r) {
                  var i = [],
                    n = void 0,
                    a = void 0,
                    o = void 0,
                    s = void 0,
                    l = void 0,
                    u = void 0
                  if (
                    (t.data
                      ? ((l = t.start), (o = t.end), (t = t.data))
                      : ((l = 0), (o = t.byteLength)),
                    !r.length)
                  )
                    return null
                  for (n = l; n < o; )
                    (u = (a = e.readUint32(t, n)) > 1 ? n + a : o),
                      e.bin2str(t.subarray(n + 4, n + 8)) === r[0] &&
                        (1 === r.length
                          ? i.push({ data: t, start: n + 8, end: u })
                          : (s = e.findBox(
                              { data: t, start: n + 8, end: u },
                              r.slice(1)
                            )).length && (i = i.concat(s))),
                      (n = u)
                  return i
                }
              },
              {
                key: 'parseSegmentIndex',
                value: function(t) {
                  var r = e.findBox(t, ['moov'])[0],
                    i = r ? r.end : null,
                    n = 0,
                    a = e.findBox(t, ['sidx']),
                    o = void 0
                  if (!a || !a[0]) return null
                  o = []
                  var s = (a = a[0]).data[0]
                  n = 0 === s ? 8 : 16
                  var l = e.readUint32(a, n)
                  n += 4
                  ;(n += 0 === s ? 8 : 16), (n += 2)
                  var u = a.end + 0,
                    d = e.readUint16(a, n)
                  n += 2
                  for (var f = 0; f < d; f++) {
                    var c = n,
                      h = e.readUint32(a, c)
                    c += 4
                    var p = 2147483647 & h
                    if (1 === (2147483648 & h) >>> 31)
                      return void console.warn(
                        'SIDX has hierarchical references (not supported)'
                      )
                    var v = e.readUint32(a, c)
                    ;(c += 4),
                      o.push({
                        referenceSize: p,
                        subsegmentDuration: v,
                        info: { duration: v / l, start: u, end: u + p - 1 }
                      }),
                      (u += p),
                      (n = c += 4)
                  }
                  return {
                    earliestPresentationTime: 0,
                    timescale: l,
                    version: s,
                    referencesCount: d,
                    references: o,
                    moovEndOffset: i
                  }
                }
              },
              {
                key: 'parseInitSegment',
                value: function(t) {
                  var r = []
                  return (
                    e.findBox(t, ['moov', 'trak']).forEach(function(t) {
                      var i = e.findBox(t, ['tkhd'])[0]
                      if (i) {
                        var n = i.data[i.start],
                          o = 0 === n ? 12 : 20,
                          s = e.readUint32(i, o),
                          l = e.findBox(t, ['mdia', 'mdhd'])[0]
                        if (l) {
                          o = 0 === (n = l.data[l.start]) ? 12 : 20
                          var u = e.readUint32(l, o),
                            d = e.findBox(t, ['mdia', 'hdlr'])[0]
                          if (d) {
                            var f = { soun: 'audio', vide: 'video' }[
                              e.bin2str(
                                d.data.subarray(d.start + 8, d.start + 12)
                              )
                            ]
                            if (f) {
                              var c = e.findBox(t, [
                                'mdia',
                                'minf',
                                'stbl',
                                'stsd'
                              ])
                              if (c.length) {
                                c = c[0]
                                var h = e.bin2str(
                                  c.data.subarray(c.start + 12, c.start + 16)
                                )
                                a.logger.log(
                                  'MP4Demuxer:' + f + ':' + h + ' found'
                                )
                              }
                              ;(r[s] = { timescale: u, type: f }),
                                (r[f] = { timescale: u, id: s })
                            }
                          }
                        }
                      }
                    }),
                    r
                  )
                }
              },
              {
                key: 'getStartDTS',
                value: function(t, r) {
                  var i,
                    n,
                    a = void 0
                  return (
                    (a = e.findBox(r, ['moof', 'traf'])),
                    (i = [].concat.apply(
                      [],
                      a.map(function(r) {
                        return e.findBox(r, ['tfhd']).map(function(i) {
                          var n, a
                          return (
                            (n = e.readUint32(i, 4)),
                            (a = t[n].timescale || 9e4),
                            e.findBox(r, ['tfdt']).map(function(t) {
                              var r,
                                i = void 0
                              return (
                                (r = t.data[t.start]),
                                (i = e.readUint32(t, 4)),
                                1 === r &&
                                  ((i *= Math.pow(2, 32)),
                                  (i += e.readUint32(t, 8))),
                                i
                              )
                            })[0] / a
                          )
                        })
                      })
                    )),
                    (n = Math.min.apply(null, i)),
                    isFinite(n) ? n : 0
                  )
                }
              },
              {
                key: 'offsetStartDTS',
                value: function(t, r, i) {
                  e.findBox(r, ['moof', 'traf']).map(function(r) {
                    return e.findBox(r, ['tfhd']).map(function(n) {
                      var a = e.readUint32(n, 4),
                        o = t[a].timescale || 9e4
                      e.findBox(r, ['tfdt']).map(function(t) {
                        var r = t.data[t.start],
                          n = e.readUint32(t, 4)
                        if (0 === r) e.writeUint32(t, 4, n - i * o)
                        else {
                          ;(n *= Math.pow(2, 32)),
                            (n += e.readUint32(t, 8)),
                            (n -= i * o),
                            (n = Math.max(n, 0))
                          var a = Math.floor(n / (l + 1)),
                            s = Math.floor(n % (l + 1))
                          e.writeUint32(t, 4, a), e.writeUint32(t, 8, s)
                        }
                      })
                    })
                  })
                }
              }
            ]
          ),
          e
        )
      })()
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = r(6),
      o = (i = a) && i.__esModule ? i : { default: i }
    var s = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.method = null),
          (this.key = null),
          (this.iv = null),
          (this._uri = null)
      }
      return (
        n(e, [
          {
            key: 'uri',
            get: function() {
              return (
                !this._uri &&
                  this.reluri &&
                  (this._uri = o.default.buildAbsoluteURL(
                    this.baseuri,
                    this.reluri,
                    { alwaysNormalize: !0 }
                  )),
                this._uri
              )
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = s), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = {
      audio: {
        a3ds: !0,
        'ac-3': !0,
        'ac-4': !0,
        alac: !0,
        alaw: !0,
        dra1: !0,
        'dts+': !0,
        'dts-': !0,
        dtsc: !0,
        dtse: !0,
        dtsh: !0,
        'ec-3': !0,
        enca: !0,
        g719: !0,
        g726: !0,
        m4ae: !0,
        mha1: !0,
        mha2: !0,
        mhm1: !0,
        mhm2: !0,
        mlpa: !0,
        mp4a: !0,
        'raw ': !0,
        Opus: !0,
        samr: !0,
        sawb: !0,
        sawp: !0,
        sevc: !0,
        sqcp: !0,
        ssmv: !0,
        twos: !0,
        ulaw: !0
      },
      video: {
        avc1: !0,
        avc2: !0,
        avc3: !0,
        avc4: !0,
        avcp: !0,
        drac: !0,
        dvav: !0,
        dvhe: !0,
        encv: !0,
        hev1: !0,
        hvc1: !0,
        mjp2: !0,
        mp4v: !0,
        mvc1: !0,
        mvc2: !0,
        mvc3: !0,
        mvc4: !0,
        resv: !0,
        rv60: !0,
        s263: !0,
        svc1: !0,
        svc2: !0,
        'vc-1': !0,
        vp08: !0,
        vp09: !0
      }
    }
    ;(t.isCodecType = function(e, t) {
      var r = i[t]
      return !!r && !0 === r[e.slice(0, 4)]
    }),
      (t.isCodecSupportedInMp4 = function(e, t) {
        return window.MediaSource.isTypeSupported(
          (t || 'video') + '/mp4;codecs="' + e + '"'
        )
      })
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getAuth = function(e) {
        return (0, i.post)(e)
      }),
      (t.loadPlayList = function(e) {
        return (0, i.get)(e, {}, { token: !0, tokenType: 'bearer' })
      }),
      (t.getHlsToken = function(e) {
        return (0, i.get)(e, {}, { token: !0, tokenType: 'bearer' })
      }),
      (t.hb = function(e) {
        return (0, i.get)(e, {}, { token: !0, tokenType: 'bearer' })
      })
    var i = r(25)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.post = function(e, t, r) {
        var i = { headers: {} },
          o = t
        null !== n.default.getCookie('Inner-Vod-Token') &&
          r &&
          r.token &&
          (i.headers = {
            Authorization: r.tokenType
              ? r.tokenType + ' ' + n.default.getCookie('Inner-Vod-Token')
              : n.default.getCookie('Inner-Vod-Token')
          })
        r &&
          ((i.headers['Content-Type'] =
            r.ContentType || 'application/json;charset=UTF-8'),
          -1 === i.headers['Content-Type'].indexOf('json') &&
            (o = a.stringify(t)))
        return l.post(e, o, { otherConfig: i })
      }),
      (t.put = function(e, t, r) {
        var i = { headers: {} },
          o = t
        r &&
          r.token &&
          (i.headers = { access_token: n.default.getCookie('access_token') })
        r &&
          ((i.headers['Content-Type'] =
            r.ContentType || 'application/json;charset=UTF-8'),
          -1 === i.headers['Content-Type'].indexOf('json') &&
            (o = a.stringify(t)),
          r.isLoading && (i.headers.isLoading = !0))
        return l.put(e, o, { otherConfig: i })
      }),
      (t.get = function(e, t, r) {
        var i = { headers: {} }
        r &&
          ((i.headers['Content-Type'] =
            r.ContentType || 'application/x-www-form-urlencoded'),
          null !== n.default.getCookie('Inner-Vod-Token') &&
            r.token &&
            (i.headers = {
              Authorization: r.tokenType
                ? r.tokenType + ' ' + n.default.getCookie('Inner-Vod-Token')
                : n.default.getCookie('Inner-Vod-Token')
            }),
          r.isLoading && (i.headers.isLoading = !0))
        return l.get(e, { params: t, otherConfig: i })
      }),
      (t.deleteMethod = function(e, t, r) {
        var i = { headers: {} }
        r &&
          ((i.headers['Content-Type'] =
            r.ContentType || 'application/x-www-form-urlencoded'),
          r.token &&
            (i.headers = { access_token: n.default.getCookie('access_token') }),
          r.isLoading && (i.headers.isLoading = !0))
        return l.delete(e, { params: t, otherConfig: i })
      })
    var i = o(r(52)),
      n = o(r(12)),
      a = (function(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        return (t.default = e), t
      })(r(70))
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var s = {
        200: '服务器成功返回请求的数据。',
        201: '新建或修改数据成功。',
        202: '一个请求已经进入后台排队（异步任务）。',
        204: '删除数据成功。',
        400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
        401: '用户没有权限（令牌、用户名、密码错误）。',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除，且不会再得到的。',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误，请检查服务器。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。'
      },
      l = i.default.create({
        timeout: 3e4,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    l.interceptors.request.use(
      function(e) {
        e.otherConfig.headers.isLoading
        return (
          Object.keys(e.otherConfig).length > 0 &&
            (e.headers = Object.assign(e.headers, e.otherConfig.headers)),
          e
        )
      },
      function(e) {
        return Promise.reject(e)
      }
    ),
      l.interceptors.response.use(
        function(e) {
          var t = e.data
          window.location.pathname
          return (
            t.code,
            t.code < 200 || t.code >= 300
              ? Promise.reject(t)
              : 'string' == typeof t || 200 !== t.code
                ? Promise.resolve(t)
                : Promise.resolve(t.data)
          )
        },
        function(e) {
          e.config ? e.config.headers.isLoading : (!0, 1)
          var t = e.response
          if (t && t.status) s[t.status] || t.statusText, t.status, t.config.url
          return Promise.reject(e)
        }
      )
  },
  function(e, t, r) {
    'use strict'
    e.exports = function(e, t) {
      return function() {
        for (var r = new Array(arguments.length), i = 0; i < r.length; i++)
          r[i] = arguments[i]
        return e.apply(t, r)
      }
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(4)
    function n(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    e.exports = function(e, t, r) {
      if (!t) return e
      var a
      if (r) a = r(t)
      else if (i.isURLSearchParams(t)) a = t.toString()
      else {
        var o = []
        i.forEach(t, function(e, t) {
          null != e &&
            (i.isArray(e) ? (t += '[]') : (e = [e]),
            i.forEach(e, function(e) {
              i.isDate(e)
                ? (e = e.toISOString())
                : i.isObject(e) && (e = JSON.stringify(e)),
                o.push(n(t) + '=' + n(e))
            }))
        }),
          (a = o.join('&'))
      }
      if (a) {
        var s = e.indexOf('#')
        ;-1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf('?') ? '?' : '&') + a)
      }
      return e
    }
  },
  function(e, t, r) {
    'use strict'
    e.exports = function(e) {
      return !(!e || !e.__CANCEL__)
    }
  },
  function(e, t, r) {
    'use strict'
    ;(function(t) {
      var i = r(4),
        n = r(59),
        a = { 'Content-Type': 'application/x-www-form-urlencoded' }
      function o(e, t) {
        !i.isUndefined(e) &&
          i.isUndefined(e['Content-Type']) &&
          (e['Content-Type'] = t)
      }
      var s,
        l = {
          adapter: (('undefined' != typeof XMLHttpRequest ||
            (void 0 !== t &&
              '[object process]' === Object.prototype.toString.call(t))) &&
            (s = r(30)),
          s),
          transformRequest: [
            function(e, t) {
              return (
                n(t, 'Accept'),
                n(t, 'Content-Type'),
                i.isFormData(e) ||
                i.isArrayBuffer(e) ||
                i.isBuffer(e) ||
                i.isStream(e) ||
                i.isFile(e) ||
                i.isBlob(e)
                  ? e
                  : i.isArrayBufferView(e)
                    ? e.buffer
                    : i.isURLSearchParams(e)
                      ? (o(
                          t,
                          'application/x-www-form-urlencoded;charset=utf-8'
                        ),
                        e.toString())
                      : i.isObject(e)
                        ? (o(t, 'application/json;charset=utf-8'),
                          JSON.stringify(e))
                        : e
              )
            }
          ],
          transformResponse: [
            function(e) {
              if ('string' == typeof e)
                try {
                  e = JSON.parse(e)
                } catch (e) {}
              return e
            }
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function(e) {
            return e >= 200 && e < 300
          }
        }
      ;(l.headers = {
        common: { Accept: 'application/json, text/plain, */*' }
      }),
        i.forEach(['delete', 'get', 'head'], function(e) {
          l.headers[e] = {}
        }),
        i.forEach(['post', 'put', 'patch'], function(e) {
          l.headers[e] = i.merge(a)
        }),
        (e.exports = l)
    }.call(this, r(58)))
  },
  function(e, t, r) {
    'use strict'
    var i = r(4),
      n = r(60),
      a = r(62),
      o = r(27),
      s = r(63),
      l = r(66),
      u = r(67),
      d = r(31)
    e.exports = function(e) {
      return new Promise(function(t, r) {
        var f = e.data,
          c = e.headers
        i.isFormData(f) && delete c['Content-Type'],
          (i.isBlob(f) || i.isFile(f)) && f.type && delete c['Content-Type']
        var h = new XMLHttpRequest()
        if (e.auth) {
          var p = e.auth.username || '',
            v = unescape(encodeURIComponent(e.auth.password)) || ''
          c.Authorization = 'Basic ' + btoa(p + ':' + v)
        }
        var g = s(e.baseURL, e.url)
        if (
          (h.open(
            e.method.toUpperCase(),
            o(g, e.params, e.paramsSerializer),
            !0
          ),
          (h.timeout = e.timeout),
          (h.onreadystatechange = function() {
            if (
              h &&
              4 === h.readyState &&
              (0 !== h.status ||
                (h.responseURL && 0 === h.responseURL.indexOf('file:')))
            ) {
              var i =
                  'getAllResponseHeaders' in h
                    ? l(h.getAllResponseHeaders())
                    : null,
                a = {
                  data:
                    e.responseType && 'text' !== e.responseType
                      ? h.response
                      : h.responseText,
                  status: h.status,
                  statusText: h.statusText,
                  headers: i,
                  config: e,
                  request: h
                }
              n(t, r, a), (h = null)
            }
          }),
          (h.onabort = function() {
            h && (r(d('Request aborted', e, 'ECONNABORTED', h)), (h = null))
          }),
          (h.onerror = function() {
            r(d('Network Error', e, null, h)), (h = null)
          }),
          (h.ontimeout = function() {
            var t = 'timeout of ' + e.timeout + 'ms exceeded'
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              r(d(t, e, 'ECONNABORTED', h)),
              (h = null)
          }),
          i.isStandardBrowserEnv())
        ) {
          var y =
            (e.withCredentials || u(g)) && e.xsrfCookieName
              ? a.read(e.xsrfCookieName)
              : void 0
          y && (c[e.xsrfHeaderName] = y)
        }
        if (
          ('setRequestHeader' in h &&
            i.forEach(c, function(e, t) {
              void 0 === f && 'content-type' === t.toLowerCase()
                ? delete c[t]
                : h.setRequestHeader(t, e)
            }),
          i.isUndefined(e.withCredentials) ||
            (h.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            h.responseType = e.responseType
          } catch (t) {
            if ('json' !== e.responseType) throw t
          }
        'function' == typeof e.onDownloadProgress &&
          h.addEventListener('progress', e.onDownloadProgress),
          'function' == typeof e.onUploadProgress &&
            h.upload &&
            h.upload.addEventListener('progress', e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function(e) {
              h && (h.abort(), r(e), (h = null))
            }),
          f || (f = null),
          h.send(f)
      })
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(61)
    e.exports = function(e, t, r, n, a) {
      var o = new Error(e)
      return i(o, t, r, n, a)
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(4)
    e.exports = function(e, t) {
      t = t || {}
      var r = {},
        n = ['url', 'method', 'data'],
        a = ['headers', 'auth', 'proxy', 'params'],
        o = [
          'baseURL',
          'transformRequest',
          'transformResponse',
          'paramsSerializer',
          'timeout',
          'timeoutMessage',
          'withCredentials',
          'adapter',
          'responseType',
          'xsrfCookieName',
          'xsrfHeaderName',
          'onUploadProgress',
          'onDownloadProgress',
          'decompress',
          'maxContentLength',
          'maxBodyLength',
          'maxRedirects',
          'transport',
          'httpAgent',
          'httpsAgent',
          'cancelToken',
          'socketPath',
          'responseEncoding'
        ],
        s = ['validateStatus']
      function l(e, t) {
        return i.isPlainObject(e) && i.isPlainObject(t)
          ? i.merge(e, t)
          : i.isPlainObject(t)
            ? i.merge({}, t)
            : i.isArray(t)
              ? t.slice()
              : t
      }
      function u(n) {
        i.isUndefined(t[n])
          ? i.isUndefined(e[n]) || (r[n] = l(void 0, e[n]))
          : (r[n] = l(e[n], t[n]))
      }
      i.forEach(n, function(e) {
        i.isUndefined(t[e]) || (r[e] = l(void 0, t[e]))
      }),
        i.forEach(a, u),
        i.forEach(o, function(n) {
          i.isUndefined(t[n])
            ? i.isUndefined(e[n]) || (r[n] = l(void 0, e[n]))
            : (r[n] = l(void 0, t[n]))
        }),
        i.forEach(s, function(i) {
          i in t ? (r[i] = l(e[i], t[i])) : i in e && (r[i] = l(void 0, e[i]))
        })
      var d = n
          .concat(a)
          .concat(o)
          .concat(s),
        f = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function(e) {
            return -1 === d.indexOf(e)
          })
      return i.forEach(f, u), r
    }
  },
  function(e, t, r) {
    'use strict'
    function i(e) {
      this.message = e
    }
    ;(i.prototype.toString = function() {
      return 'Cancel' + (this.message ? ': ' + this.message : '')
    }),
      (i.prototype.__CANCEL__ = !0),
      (e.exports = i)
  },
  function(e, t, r) {
    'use strict'
    var i = String.prototype.replace,
      n = /%20/g,
      a = r(13),
      o = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' }
    e.exports = a.assign(
      {
        default: o.RFC3986,
        formatters: {
          RFC1738: function(e) {
            return i.call(e, n, '+')
          },
          RFC3986: function(e) {
            return String(e)
          }
        }
      },
      o
    )
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = f(r(16)),
      a = f(r(74)),
      o = f(r(1)),
      s = f(r(36)),
      l = r(0),
      u = r(2),
      d = r(18)
    function f(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var c = (0, r(5).getSelfScope)(),
      h = (0, d.getMediaSource)(),
      p = (function() {
        function e(t, r) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.hls = t),
            (this.id = r)
          var i = (this.observer = new n.default()),
            d = t.config
          ;(i.trigger = function(e) {
            for (
              var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n]
            i.emit.apply(i, [e, e].concat(r))
          }),
            (i.off = function(e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
                n < t;
                n++
              )
                r[n - 1] = arguments[n]
              i.removeListener.apply(i, [e].concat(r))
            })
          var f = function(e, r) {
            ;((r = r || {}).frag = this.frag), (r.id = this.id), t.trigger(e, r)
          }.bind(this)
          i.on(o.default.FRAG_DECRYPTED, f),
            i.on(o.default.FRAG_PARSING_INIT_SEGMENT, f),
            i.on(o.default.FRAG_PARSING_DATA, f),
            i.on(o.default.FRAG_PARSED, f),
            i.on(o.default.ERROR, f),
            i.on(o.default.FRAG_PARSING_METADATA, f),
            i.on(o.default.FRAG_PARSING_USERDATA, f),
            i.on(o.default.INIT_PTS_FOUND, f)
          var p = {
              mp4: h.isTypeSupported('video/mp4'),
              mpeg: h.isTypeSupported('audio/mpeg'),
              mp3: h.isTypeSupported('audio/mp4; codecs="mp3"')
            },
            v = navigator.vendor
          if (d.enableWorker && 'undefined' != typeof Worker) {
            l.logger.log('demuxing in webworker')
            var g = void 0
            try {
              ;(g = this.w = (0, a.default)(88)),
                (this.onwmsg = this.onWorkerMessage.bind(this)),
                g.addEventListener('message', this.onwmsg),
                (g.onerror = function(e) {
                  t.trigger(o.default.ERROR, {
                    type: u.ErrorTypes.OTHER_ERROR,
                    details: u.ErrorDetails.INTERNAL_EXCEPTION,
                    fatal: !0,
                    event: 'demuxerWorker',
                    err: {
                      message:
                        e.message + ' (' + e.filename + ':' + e.lineno + ')'
                    }
                  })
                }),
                g.postMessage({
                  cmd: 'init',
                  typeSupported: p,
                  vendor: v,
                  id: r,
                  config: JSON.stringify(d)
                })
            } catch (e) {
              l.logger.error(
                'error while initializing DemuxerWorker, fallback on DemuxerInline'
              ),
                g && c.URL.revokeObjectURL(g.objectURL),
                (this.demuxer = new s.default(i, p, d, v)),
                (this.w = void 0)
            }
          } else this.demuxer = new s.default(i, p, d, v)
        }
        return (
          i(e, [
            {
              key: 'destroy',
              value: function() {
                var e = this.w
                if (e)
                  e.removeEventListener('message', this.onwmsg),
                    e.terminate(),
                    (this.w = null)
                else {
                  var t = this.demuxer
                  t && (t.destroy(), (this.demuxer = null))
                }
                var r = this.observer
                r && (r.removeAllListeners(), (this.observer = null))
              }
            },
            {
              key: 'push',
              value: function(e, t, r, i, n, a, o, s) {
                var u = this.w,
                  d = isNaN(n.startDTS) ? n.start : n.startDTS,
                  f = n.decryptdata,
                  c = this.frag,
                  h = !(c && n.cc === c.cc),
                  p = !(c && n.level === c.level),
                  v = c && n.sn === c.sn + 1,
                  g = !p && v
                if (
                  (h && l.logger.log(this.id + ':discontinuity detected'),
                  p && l.logger.log(this.id + ':switch detected'),
                  (this.frag = n),
                  u)
                )
                  u.postMessage(
                    {
                      cmd: 'demux',
                      data: e,
                      decryptdata: f,
                      initSegment: t,
                      audioCodec: r,
                      videoCodec: i,
                      timeOffset: d,
                      discontinuity: h,
                      trackSwitch: p,
                      contiguous: g,
                      duration: a,
                      accurateTimeOffset: o,
                      defaultInitPTS: s
                    },
                    e instanceof ArrayBuffer ? [e] : []
                  )
                else {
                  var y = this.demuxer
                  y && y.push(e, f, t, r, i, d, h, p, g, a, o, s)
                }
              }
            },
            {
              key: 'onWorkerMessage',
              value: function(e) {
                var t = e.data,
                  r = this.hls
                switch (t.event) {
                  case 'init':
                    c.URL.revokeObjectURL(this.w.objectURL)
                    break
                  case o.default.FRAG_PARSING_DATA:
                    ;(t.data.data1 = new Uint8Array(t.data1)),
                      t.data2 && (t.data.data2 = new Uint8Array(t.data2))
                  default:
                    ;(t.data = t.data || {}),
                      (t.data.frag = this.frag),
                      (t.data.id = this.id),
                      r.trigger(t.event, t.data)
                }
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = p), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = h(r(1)),
      a = r(2),
      o = h(r(17)),
      s = h(r(78)),
      l = h(r(21)),
      u = h(r(79)),
      d = h(r(82)),
      f = h(r(83)),
      c = h(r(87))
    function h(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var p = (0, r(5).getSelfScope)().performance,
      v = (function() {
        function e(t, r, i, n) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.observer = t),
            (this.typeSupported = r),
            (this.config = i),
            (this.vendor = n)
        }
        return (
          i(e, [
            {
              key: 'destroy',
              value: function() {
                var e = this.demuxer
                e && e.destroy()
              }
            },
            {
              key: 'push',
              value: function(e, t, r, i, a, s, l, u, d, f, c, h) {
                if (
                  e.byteLength > 0 &&
                  null != t &&
                  null != t.key &&
                  'AES-128' === t.method
                ) {
                  var v = this.decrypter
                  null == v &&
                    (v = this.decrypter = new o.default(
                      this.observer,
                      this.config
                    ))
                  var g = this,
                    y = void 0
                  try {
                    y = p.now()
                  } catch (e) {
                    y = Date.now()
                  }
                  v.decrypt(e, t.key.buffer, t.iv.buffer, function(e) {
                    var o = void 0
                    try {
                      o = p.now()
                    } catch (e) {
                      o = Date.now()
                    }
                    g.observer.trigger(n.default.FRAG_DECRYPTED, {
                      stats: { tstart: y, tdecrypt: o }
                    }),
                      g.pushDecrypted(
                        new Uint8Array(e),
                        t,
                        new Uint8Array(r),
                        i,
                        a,
                        s,
                        l,
                        u,
                        d,
                        f,
                        c,
                        h
                      )
                  })
                } else
                  this.pushDecrypted(
                    new Uint8Array(e),
                    t,
                    new Uint8Array(r),
                    i,
                    a,
                    s,
                    l,
                    u,
                    d,
                    f,
                    c,
                    h
                  )
              }
            },
            {
              key: 'pushDecrypted',
              value: function(e, t, r, i, o, h, p, v, g, y, m, b) {
                var E = this.demuxer
                if (!E || ((p || v) && !this.probe(e))) {
                  for (
                    var T = this.observer,
                      k = this.typeSupported,
                      _ = this.config,
                      S = [
                        { demux: u.default, remux: f.default },
                        { demux: l.default, remux: c.default },
                        { demux: s.default, remux: f.default },
                        { demux: d.default, remux: f.default }
                      ],
                      w = 0,
                      A = S.length;
                    w < A;
                    w++
                  ) {
                    var R = S[w],
                      O = R.demux.probe
                    if (O(e)) {
                      var L = (this.remuxer = new R.remux(T, _, k, this.vendor))
                      ;(E = new R.demux(T, L, _, k)), (this.probe = O)
                      break
                    }
                  }
                  if (!E)
                    return void T.trigger(n.default.ERROR, {
                      type: a.ErrorTypes.MEDIA_ERROR,
                      details: a.ErrorDetails.FRAG_PARSING_ERROR,
                      fatal: !0,
                      reason: 'no demux matching with content found'
                    })
                  this.demuxer = E
                }
                var D = this.remuxer
                ;(p || v) &&
                  (E.resetInitSegment(r, i, o, y), D.resetInitSegment()),
                  p && (E.resetTimeStamp(b), D.resetTimeStamp(b)),
                  'function' == typeof E.setDecryptData && E.setDecryptData(t),
                  E.append(e, h, g, m)
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = v), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getAudioConfig = l),
      (t.isHeaderPattern = u),
      (t.getHeaderLength = d),
      (t.getFullFrameLength = f),
      (t.isHeader = function(e, t) {
        if (t + 1 < e.length && u(e, t)) return !0
        return !1
      }),
      (t.probe = function(e, t) {
        if (t + 1 < e.length && u(e, t)) {
          var r = d(e, t)
          t + 5 < e.length && (r = f(e, t))
          var i = t + r
          if (i === e.length || (i + 1 < e.length && u(e, i))) return !0
        }
        return !1
      }),
      (t.initTrackConfig = function(e, t, r, i, a) {
        if (!e.samplerate) {
          var o = l(t, r, i, a)
          ;(e.config = o.config),
            (e.samplerate = o.samplerate),
            (e.channelCount = o.channelCount),
            (e.codec = o.codec),
            (e.manifestCodec = o.manifestCodec),
            n.logger.log(
              'parsed codec:' +
                e.codec +
                ',rate:' +
                o.samplerate +
                ',nb channel:' +
                o.channelCount
            )
        }
      }),
      (t.getFrameDuration = c),
      (t.parseFrameHeader = h),
      (t.appendFrame = function(e, t, r, i, n) {
        var a = c(e.samplerate),
          o = h(t, r, i, n, a)
        if (o) {
          var s = o.stamp,
            l = o.headerLength,
            u = o.frameLength,
            d = { unit: t.subarray(r + l, r + l + u), pts: s, dts: s }
          return e.samples.push(d), (e.len += u), { sample: d, length: u + l }
        }
        return
      })
    var i,
      n = r(0),
      a = r(2),
      o = r(1),
      s = (i = o) && i.__esModule ? i : { default: i }
    r(5)
    function l(e, t, r, i) {
      var o,
        l = void 0,
        u = void 0,
        d = void 0,
        f = void 0,
        c = navigator.userAgent.toLowerCase(),
        h = i,
        p = [
          96e3,
          88200,
          64e3,
          48e3,
          44100,
          32e3,
          24e3,
          22050,
          16e3,
          12e3,
          11025,
          8e3,
          7350
        ]
      if (
        ((l = 1 + ((192 & t[r + 2]) >>> 6)),
        !((o = (60 & t[r + 2]) >>> 2) > p.length - 1))
      )
        return (
          (d = (1 & t[r + 2]) << 2),
          (d |= (192 & t[r + 3]) >>> 6),
          n.logger.log(
            'manifest codec:' +
              i +
              ',ADTS data:type:' +
              l +
              ',sampleingIndex:' +
              o +
              '[' +
              p[o] +
              'Hz],channelConfig:' +
              d
          ),
          /firefox/i.test(c)
            ? o >= 6
              ? ((l = 5), (f = new Array(4)), (u = o - 3))
              : ((l = 2), (f = new Array(2)), (u = o))
            : -1 !== c.indexOf('android')
              ? ((l = 2), (f = new Array(2)), (u = o))
              : ((l = 5),
                (f = new Array(4)),
                (i &&
                  (-1 !== i.indexOf('mp4a.40.29') ||
                    -1 !== i.indexOf('mp4a.40.5'))) ||
                (!i && o >= 6)
                  ? (u = o - 3)
                  : (((i &&
                      -1 !== i.indexOf('mp4a.40.2') &&
                      ((o >= 6 && 1 === d) || /vivaldi/i.test(c))) ||
                      (!i && 1 === d)) &&
                      ((l = 2), (f = new Array(2))),
                    (u = o))),
          (f[0] = l << 3),
          (f[0] |= (14 & o) >> 1),
          (f[1] |= (1 & o) << 7),
          (f[1] |= d << 3),
          5 === l &&
            ((f[1] |= (14 & u) >> 1),
            (f[2] = (1 & u) << 7),
            (f[2] |= 8),
            (f[3] = 0)),
          {
            config: f,
            samplerate: p[o],
            channelCount: d,
            codec: 'mp4a.40.' + l,
            manifestCodec: h
          }
        )
      e.trigger(s.default.ERROR, {
        type: a.ErrorTypes.MEDIA_ERROR,
        details: a.ErrorDetails.FRAG_PARSING_ERROR,
        fatal: !0,
        reason: 'invalid ADTS sampling index:' + o
      })
    }
    function u(e, t) {
      return 255 === e[t] && 240 == (246 & e[t + 1])
    }
    function d(e, t) {
      return 1 & e[t + 1] ? 7 : 9
    }
    function f(e, t) {
      return ((3 & e[t + 3]) << 11) | (e[t + 4] << 3) | ((224 & e[t + 5]) >>> 5)
    }
    function c(e) {
      return 9216e4 / e
    }
    function h(e, t, r, i, n) {
      var a,
        o = void 0,
        s = e.length
      if (((a = d(e, t)), (o = f(e, t)), (o -= a) > 0 && t + a + o <= s))
        return { headerLength: a, frameLength: o, stamp: r + i * n }
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = {
      BitratesMap: [
        32,
        64,
        96,
        128,
        160,
        192,
        224,
        256,
        288,
        320,
        352,
        384,
        416,
        448,
        32,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        160,
        192,
        224,
        256,
        320,
        384,
        32,
        40,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        160,
        192,
        224,
        256,
        320,
        32,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        144,
        160,
        176,
        192,
        224,
        256,
        8,
        16,
        24,
        32,
        40,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        144,
        160
      ],
      SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
      SamplesCoefficients: [
        [0, 72, 144, 12],
        [0, 0, 0, 0],
        [0, 72, 144, 12],
        [0, 144, 144, 12]
      ],
      BytesInSlot: [0, 1, 1, 4],
      appendFrame: function(e, t, r, i, n) {
        if (!(r + 24 > t.length)) {
          var a = this.parseHeader(t, r)
          if (a && r + a.frameLength <= t.length) {
            var o = i + n * ((9e4 * a.samplesPerFrame) / a.sampleRate),
              s = { unit: t.subarray(r, r + a.frameLength), pts: o, dts: o }
            return (
              (e.config = []),
              (e.channelCount = a.channelCount),
              (e.samplerate = a.sampleRate),
              e.samples.push(s),
              (e.len += a.frameLength),
              { sample: s, length: a.frameLength }
            )
          }
        }
      },
      parseHeader: function(e, t) {
        var r = (e[t + 1] >> 3) & 3,
          n = (e[t + 1] >> 1) & 3,
          a = (e[t + 2] >> 4) & 15,
          o = (e[t + 2] >> 2) & 3,
          s = (e[t + 2] >> 1) & 1
        if (1 !== r && 0 !== a && 15 !== a && 3 !== o) {
          var l = 3 === r ? 3 - n : 3 === n ? 3 : 4,
            u = 1e3 * i.BitratesMap[14 * l + a - 1],
            d = 3 === r ? 0 : 2 === r ? 1 : 2,
            f = i.SamplingRateMap[3 * d + o],
            c = e[t + 3] >> 6 == 3 ? 1 : 2,
            h = i.SamplesCoefficients[r][n],
            p = i.BytesInSlot[n],
            v = 8 * h * p
          return {
            sampleRate: f,
            channelCount: c,
            frameLength: parseInt((h * u) / f + s, 10) * p,
            samplesPerFrame: v
          }
        }
      },
      isHeaderPattern: function(e, t) {
        return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
      },
      isHeader: function(e, t) {
        return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
      },
      probe: function(e, t) {
        if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
          var r = this.parseHeader(e, t),
            i = 4
          r && r.frameLength && (i = r.frameLength)
          var n = t + i
          if (
            n === e.length ||
            (n + 1 < e.length && this.isHeaderPattern(e, n))
          )
            return !0
        }
        return !1
      }
    }
    ;(t.default = i), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    ;(t.default = {
      toString: function(e) {
        for (var t = '', r = e.length, i = 0; i < r; i++)
          t += '[' + e.start(i).toFixed(3) + ',' + e.end(i).toFixed(3) + ']'
        return t
      }
    }),
      (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.findFirstFragWithCC = s),
      (t.findFragWithCC = function(e, t) {
        return a.default.search(e, function(e) {
          return e.cc < t ? 1 : e.cc > t ? -1 : 0
        })
      }),
      (t.shouldAlignOnDiscontinuities = l),
      (t.findDiscontinuousReferenceFrag = u),
      (t.adjustPts = d),
      (t.alignDiscontinuities = function(e, t, r) {
        if (l(e, t, r)) {
          var i = u(t.details, r)
          i &&
            (o.logger.log(
              'Adjusting PTS using last level due to CC increase within current level'
            ),
            d(i.start, r))
        }
        if (
          !1 === r.PTSKnown &&
          t &&
          t.details &&
          t.details.fragments &&
          t.details.fragments.length
        ) {
          var n = t.details.programDateTime,
            a = (r.programDateTime - n) / 1e3 + t.details.fragments[0].start
          isNaN(a) ||
            (o.logger.log(
              'adjusting PTS using programDateTime delta, sliding:' +
                a.toFixed(3)
            ),
            d(a, r))
        }
      })
    var i,
      n = r(7),
      a = (i = n) && i.__esModule ? i : { default: i },
      o = r(0)
    function s(e, t) {
      for (var r = null, i = 0; i < e.length; i += 1) {
        var n = e[i]
        if (n && n.cc === t) {
          r = n
          break
        }
      }
      return r
    }
    function l(e, t, r) {
      var i = !1
      return (
        t &&
          t.details &&
          r &&
          (r.endCC > r.startCC || (e && e.cc < r.startCC)) &&
          (i = !0),
        i
      )
    }
    function u(e, t) {
      var r = e.fragments,
        i = t.fragments
      if (i.length && r.length) {
        var n = s(r, i[0].cc)
        if (n && (!n || n.startPTS)) return n
        o.logger.log('No frag in previous level to align on')
      } else o.logger.log('No fragments to align')
    }
    function d(e, t) {
      t.fragments.forEach(function(t) {
        if (t) {
          var r = t.start + e
          ;(t.start = t.startPTS = r), (t.endPTS = r + t.duration)
        }
      }),
        (t.PTSKnown = !0)
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.sendAddTrackEvent = function(e, t) {
        var r = null
        try {
          r = new window.Event('addtrack')
        } catch (e) {
          ;(r = document.createEvent('Event')).initEvent('addtrack', !1, !1)
        }
        ;(r.track = e), t.dispatchEvent(r)
      }),
      (t.clearCurrentCues = function(e) {
        if (e && e.cues) for (; e.cues.length > 0; ) e.removeCue(e.cues[0])
      })
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = r(0)
    var a = window,
      o = a.performance,
      s = a.XMLHttpRequest,
      l = (function() {
        function e(t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            t && t.xhrSetup && (this.xhrSetup = t.xhrSetup)
        }
        return (
          i(e, [
            {
              key: 'destroy',
              value: function() {
                this.abort(), (this.loader = null)
              }
            },
            {
              key: 'abort',
              value: function() {
                var e = this.loader
                e &&
                  4 !== e.readyState &&
                  ((this.stats.aborted = !0), e.abort()),
                  window.clearTimeout(this.requestTimeout),
                  (this.requestTimeout = null),
                  window.clearTimeout(this.retryTimeout),
                  (this.retryTimeout = null)
              }
            },
            {
              key: 'load',
              value: function(e, t, r) {
                ;(this.context = e),
                  (this.config = t),
                  (this.callbacks = r),
                  (this.stats = { trequest: o.now(), retry: 0 }),
                  (this.retryDelay = t.retryDelay),
                  this.loadInternal()
              }
            },
            {
              key: 'loadInternal',
              value: function() {
                var e = void 0,
                  t = this.context
                e = this.loader = new s()
                var r = this.stats
                ;(r.tfirst = 0), (r.loaded = 0)
                var i = this.xhrSetup
                try {
                  if (i)
                    try {
                      i(e, t.url)
                    } catch (r) {
                      e.open('GET', t.url, !0), i(e, t.url)
                    }
                  e.readyState || e.open('GET', t.url, !0)
                } catch (r) {
                  return void this.callbacks.onError(
                    { code: e.status, text: r.message },
                    t,
                    e
                  )
                }
                t.rangeEnd &&
                  e.setRequestHeader(
                    'Range',
                    'bytes=' + t.rangeStart + '-' + (t.rangeEnd - 1)
                  ),
                  (e.onreadystatechange = this.readystatechange.bind(this)),
                  (e.onprogress = this.loadprogress.bind(this)),
                  (e.responseType = t.responseType),
                  (this.requestTimeout = window.setTimeout(
                    this.loadtimeout.bind(this),
                    this.config.timeout
                  )),
                  e.send()
              }
            },
            {
              key: 'readystatechange',
              value: function(e) {
                var t = e.currentTarget,
                  r = t.readyState,
                  i = this.stats,
                  a = this.context,
                  s = this.config
                if (!i.aborted && r >= 2)
                  if (
                    (window.clearTimeout(this.requestTimeout),
                    0 === i.tfirst &&
                      (i.tfirst = Math.max(o.now(), i.trequest)),
                    4 === r)
                  ) {
                    var l = t.status
                    if (l >= 200 && l < 300) {
                      i.tload = Math.max(i.tfirst, o.now())
                      var u = void 0,
                        d = void 0
                      ;(d =
                        'arraybuffer' === a.responseType
                          ? (u = t.response).byteLength
                          : (u = t.responseText).length),
                        (i.loaded = i.total = d)
                      var f = { url: t.responseURL, data: u }
                      this.callbacks.onSuccess(f, i, a, t)
                    } else
                      i.retry >= s.maxRetry || (l >= 400 && l < 499)
                        ? (n.logger.error(l + ' while loading ' + a.url),
                          this.callbacks.onError(
                            { code: l, text: t.statusText },
                            a,
                            t
                          ))
                        : (n.logger.warn(
                            l +
                              ' while loading ' +
                              a.url +
                              ', retrying in ' +
                              this.retryDelay +
                              '...'
                          ),
                          this.destroy(),
                          (this.retryTimeout = window.setTimeout(
                            this.loadInternal.bind(this),
                            this.retryDelay
                          )),
                          (this.retryDelay = Math.min(
                            2 * this.retryDelay,
                            s.maxRetryDelay
                          )),
                          i.retry++)
                  } else
                    this.requestTimeout = window.setTimeout(
                      this.loadtimeout.bind(this),
                      s.timeout
                    )
              }
            },
            {
              key: 'loadtimeout',
              value: function() {
                n.logger.warn('timeout while loading ' + this.context.url),
                  this.callbacks.onTimeout(this.stats, this.context, null)
              }
            },
            {
              key: 'loadprogress',
              value: function(e) {
                var t = e.currentTarget,
                  r = this.stats
                ;(r.loaded = e.loaded),
                  e.lengthComputable && (r.total = e.total)
                var i = this.callbacks.onProgress
                i && i(r, this.context, null, t)
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = l), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.fixLineBreaks = void 0)
    var i,
      n = r(103),
      a = (i = n) && i.__esModule ? i : { default: i }
    var o = function() {
      return {
        decode: function(e) {
          if (!e) return ''
          if ('string' != typeof e)
            throw new Error('Error - expected string data.')
          return decodeURIComponent(encodeURIComponent(e))
        }
      }
    }
    function s() {
      ;(this.window = window),
        (this.state = 'INITIAL'),
        (this.buffer = ''),
        (this.decoder = new o()),
        (this.regionList = [])
    }
    function l() {
      this.values = Object.create(null)
    }
    function u(e, t, r, i) {
      var n = i ? e.split(i) : [e]
      for (var a in n)
        if ('string' == typeof n[a]) {
          var o = n[a].split(r)
          if (2 === o.length) t(o[0], o[1])
        }
    }
    l.prototype = {
      set: function(e, t) {
        this.get(e) || '' === t || (this.values[e] = t)
      },
      get: function(e, t, r) {
        return r
          ? this.has(e)
            ? this.values[e]
            : t[r]
          : this.has(e)
            ? this.values[e]
            : t
      },
      has: function(e) {
        return e in this.values
      },
      alt: function(e, t, r) {
        for (var i = 0; i < r.length; ++i)
          if (t === r[i]) {
            this.set(e, t)
            break
          }
      },
      integer: function(e, t) {
        ;/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
      },
      percent: function(e, t) {
        return (
          !!(
            t.match(/^([\d]{1,3})(\.[\d]*)?%$/) &&
            (t = parseFloat(t)) >= 0 &&
            t <= 100
          ) && (this.set(e, t), !0)
        )
      }
    }
    var d = new a.default(0, 0, 0),
      f = 'middle' === d.align ? 'middle' : 'center'
    function c(e, t, r) {
      var i = e
      function n() {
        var t = (function(e) {
          function t(e, t, r, i) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3
          }
          var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/)
          return r
            ? r[3]
              ? t(r[1], r[2], r[3].replace(':', ''), r[4])
              : r[1] > 59
                ? t(r[1], r[2], 0, r[4])
                : t(0, r[1], r[2], r[4])
            : null
        })(e)
        if (null === t) throw new Error('Malformed timestamp: ' + i)
        return (e = e.replace(/^[^\sa-zA-Z-]+/, '')), t
      }
      function a() {
        e = e.replace(/^\s+/, '')
      }
      if ((a(), (t.startTime = n()), a(), '--\x3e' !== e.substr(0, 3)))
        throw new Error(
          "Malformed time stamp (time stamps must be separated by '--\x3e'): " +
            i
        )
      ;(e = e.substr(3)),
        a(),
        (t.endTime = n()),
        a(),
        (function(e, t) {
          var i = new l()
          u(
            e,
            function(e, t) {
              switch (e) {
                case 'region':
                  for (var n = r.length - 1; n >= 0; n--)
                    if (r[n].id === t) {
                      i.set(e, r[n].region)
                      break
                    }
                  break
                case 'vertical':
                  i.alt(e, t, ['rl', 'lr'])
                  break
                case 'line':
                  var a = t.split(','),
                    o = a[0]
                  i.integer(e, o),
                    i.percent(e, o) && i.set('snapToLines', !1),
                    i.alt(e, o, ['auto']),
                    2 === a.length &&
                      i.alt('lineAlign', a[1], ['start', f, 'end'])
                  break
                case 'position':
                  ;(a = t.split(',')),
                    i.percent(e, a[0]),
                    2 === a.length &&
                      i.alt('positionAlign', a[1], [
                        'start',
                        f,
                        'end',
                        'line-left',
                        'line-right',
                        'auto'
                      ])
                  break
                case 'size':
                  i.percent(e, t)
                  break
                case 'align':
                  i.alt(e, t, ['start', f, 'end', 'left', 'right'])
              }
            },
            /:/,
            /\s/
          ),
            (t.region = i.get('region', null)),
            (t.vertical = i.get('vertical', ''))
          var n = i.get('line', 'auto')
          'auto' === n && -1 === d.line && (n = -1),
            (t.line = n),
            (t.lineAlign = i.get('lineAlign', 'start')),
            (t.snapToLines = i.get('snapToLines', !0)),
            (t.size = i.get('size', 100)),
            (t.align = i.get('align', f))
          var a = i.get('position', 'auto')
          'auto' === a &&
            50 === d.position &&
            (a =
              'start' === t.align || 'left' === t.align
                ? 0
                : 'end' === t.align || 'right' === t.align
                  ? 100
                  : 50),
            (t.position = a)
        })(e, t)
    }
    function h(e) {
      return e.replace(/<br(?: \/)?>/gi, '\n')
    }
    ;(s.prototype = {
      parse: function(e) {
        var t = this
        function r() {
          var e = t.buffer,
            r = 0
          for (e = h(e); r < e.length && '\r' !== e[r] && '\n' !== e[r]; ) ++r
          var i = e.substr(0, r)
          return (
            '\r' === e[r] && ++r,
            '\n' === e[r] && ++r,
            (t.buffer = e.substr(r)),
            i
          )
        }
        e && (t.buffer += t.decoder.decode(e, { stream: !0 }))
        try {
          var i = void 0
          if ('INITIAL' === t.state) {
            if (!/\r\n|\n/.test(t.buffer)) return this
            var n = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/)
            if (!n || !n[0]) throw new Error('Malformed WebVTT signature.')
            t.state = 'HEADER'
          }
          for (var o = !1; t.buffer; ) {
            if (!/\r\n|\n/.test(t.buffer)) return this
            switch ((o ? (o = !1) : (i = r()), t.state)) {
              case 'HEADER':
                ;/:/.test(i)
                  ? u(i, function(e, t) {}, /:/)
                  : i || (t.state = 'ID')
                continue
              case 'NOTE':
                i || (t.state = 'ID')
                continue
              case 'ID':
                if (/^NOTE($|[ \t])/.test(i)) {
                  t.state = 'NOTE'
                  break
                }
                if (!i) continue
                if (
                  ((t.cue = new a.default(0, 0, '')),
                  (t.state = 'CUE'),
                  -1 === i.indexOf('--\x3e'))
                ) {
                  t.cue.id = i
                  continue
                }
              case 'CUE':
                try {
                  c(i, t.cue, t.regionList)
                } catch (e) {
                  ;(t.cue = null), (t.state = 'BADCUE')
                  continue
                }
                t.state = 'CUETEXT'
                continue
              case 'CUETEXT':
                var s = -1 !== i.indexOf('--\x3e')
                if (!i || (s && (o = !0))) {
                  t.oncue && t.oncue(t.cue), (t.cue = null), (t.state = 'ID')
                  continue
                }
                t.cue.text && (t.cue.text += '\n'), (t.cue.text += i)
                continue
              case 'BADCUE':
                i || (t.state = 'ID')
                continue
            }
          }
        } catch (e) {
          'CUETEXT' === t.state && t.cue && t.oncue && t.oncue(t.cue),
            (t.cue = null),
            (t.state = 'INITIAL' === t.state ? 'BADWEBVTT' : 'BADCUE')
        }
        return this
      },
      flush: function() {
        try {
          if (
            ((this.buffer += this.decoder.decode()),
            (this.cue || 'HEADER' === this.state) &&
              ((this.buffer += '\n\n'), this.parse()),
            'INITIAL' === this.state)
          )
            throw new Error('Malformed WebVTT signature.')
        } catch (e) {
          throw e
        }
        return this.onflush && this.onflush(), this
      }
    }),
      (t.fixLineBreaks = h),
      (t.default = s)
  },
  function(e, t, r) {
    e.exports = r(45)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = d(r(46)),
      a = d(r(47)),
      o = d(r(112)),
      s = (d(r(25)), r(11)),
      l = (r(0), d(r(42)), r(24)),
      u = d(r(12))
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var f = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        return (
          (r.hlsOpts = e.hlsOpts || {}),
          (r.vid = e.vid),
          (r.authFailed = e.authFailed),
          r.init(e),
          r
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
        i(t, [
          {
            key: 'init',
            value: async function(e) {
              var t = n.default.util,
                r = this
              u.default.getCookie('Inner-Vod-Token')
              r.on('resourceUrl403', function() {}),
                await this.loadMainPlayList(),
                (this.browser = o.default.getBrowserVersion()),
                (Number.isFinite =
                  Number.isFinite ||
                  function(e) {
                    return 'number' == typeof e && isFinite(e)
                  })
              var i = void 0
              ;(i = new a.default(this.hlsOpts)),
                (this.hls = i),
                Object.defineProperty(r, 'src', {
                  get: function() {
                    return r.currentSrc
                  },
                  set: function(e) {
                    t.removeClass(r.root, 'xgplayer-is-live')
                    var i = document.querySelector('.xgplayer-live')
                    i && i.parentNode.removeChild(i)
                    var n = r.paused
                    r.hls.stopLoad(),
                      r.hls.detachMedia(),
                      r.hls.destroy(),
                      (r.hls = new a.default(r.hlsOpts)),
                      r.register(e),
                      n
                        ? r.hls.loadSource(e)
                        : (r.pause(),
                          r.once('pause', function() {
                            r.hls.loadSource(e)
                          }),
                          r.once('canplay', function() {
                            r.play().catch(function(e) {})
                          })),
                      r.hls.attachMedia(r.video),
                      r.once('canplay', function() {
                        r.currentTime = 0
                      })
                  },
                  configurable: !0
                }),
                (r._replay = function() {
                  ;(r.src = r.config.url),
                    r.once('canplay', function() {
                      r.play().catch(function(e) {})
                    })
                }),
                this.register(this.config.url),
                this.once('complete', function() {
                  i.attachMedia(r.video),
                    r.once('canplay', function() {
                      r.play().catch(function(e) {})
                    })
                }),
                this.once('destroy', function() {
                  i.stopLoad()
                })
            }
          },
          {
            key: 'cgvid',
            value: async function(e) {
              ;(this.vid = e), await this.loadMainPlayList(!0)
            }
          },
          {
            key: 'loadMainPlayList',
            value: async function(e) {
              var t = n.default.util,
                r = s.axxPlayerConfig.playListUrl.replace(':vid', this.vid),
                i = [],
                a = await (0, l.loadPlayList)(r)
              !a.hasOwnProperty('code') ||
                ('200' === a.code && 200 === a.code) ||
                this.authFailed(a)
              var u = a.playList
              if (u && u.length > 0) {
                for (var d = 0; d < u.length; d++)
                  'OD' !== u[d].definition &&
                    i.push({
                      name: o.default.getDefinitionName(u[d].definition),
                      url: u[d].url
                    })
                this.emit('resourceReady', i), (this.config.url = i[0].url)
                var f = a.coverUrl,
                  c = this.root,
                  h = t.createDom('xg-poster', '', {}, 'xgplayer-poster')
                ;(h.style.backgroundImage = 'url(' + f + ')'),
                  c.appendChild(h),
                  e && (this.src = i[0].url)
              }
            }
          },
          {
            key: 'typeOf',
            value: function(e) {
              return Object.prototype.toString
                .call(e)
                .match(/([^\s.*]+)(?=]$)/g)[0]
            }
          },
          {
            key: 'des',
            value: function() {
              this.destroy()
            }
          },
          {
            key: 'register',
            value: function(e) {
              var t = this.hls,
                r = n.default.util,
                i = this
              t.on(a.default.Events.MEDIA_ATTACHED, function() {
                t.loadSource(e)
              }),
                t.on(a.default.Events.LEVEL_LOADED, function(e, n) {
                  if (
                    !t.inited &&
                    ((t.inited = !0),
                    n &&
                      n.details &&
                      n.details.live &&
                      (r.addClass(i.root, 'xgplayer-is-live'),
                      !r.findDom(i.root, '.xgplayer-live')))
                  ) {
                    var a = r.createDom(
                      'xg-live',
                      '正在直播',
                      {},
                      'xgplayer-live'
                    )
                    i.controls.appendChild(a)
                  }
                }),
                t.on(a.default.Events.ERROR, function(e, r) {
                  if (
                    (i.emit('HLS_ERROR', {
                      errorType: r.type,
                      errorDetails: r.details,
                      errorFatal: r.fatal
                    }),
                    r.fatal)
                  )
                    switch (r.type) {
                      case a.default.ErrorTypes.NETWORK_ERROR:
                        t.startLoad()
                        break
                      case a.default.ErrorTypes.MEDIA_ERROR:
                        t.recoverMediaError()
                        break
                      default:
                        i.emit('error', r)
                    }
                }),
                this._statistics()
            }
          },
          {
            key: '_statistics',
            value: function() {
              var e = { speed: 0, playerType: 'HlsPlayer' },
                t = { videoDataRate: 0, audioDataRate: 0 },
                r = this.hls,
                i = this
              r.on(a.default.Events.FRAG_LOAD_PROGRESS, function(t, r) {
                e.speed = r.stats.loaded / 1e3
              }),
                r.on(a.default.Events.FRAG_PARSING_DATA, function(e, r) {
                  'video' === r.type &&
                    (t.fps = parseInt(r.nb / (r.endPTS - r.startPTS)))
                }),
                r.on(a.default.Events.KEY_LOAD_FAILED, function(e, t) {
                  ;('401' !== t.code &&
                    401 !== t.code &&
                    '403' !== t.code &&
                    403 !== t.code) ||
                    i.authFailed(t.code)
                }),
                r.on(a.default.Events.FRAG_PARSING_INIT_SEGMENT, function(
                  e,
                  r
                ) {
                  if (
                    ((t.hasAudio = !(!r.tracks || !r.tracks.audio)),
                    (t.hasVideo = !(!r.tracks || !r.tracks.audio)),
                    t.hasAudio)
                  ) {
                    var n = r.tracks.audio
                    ;(t.audioChannelCount =
                      n.metadata && n.metadata.channelCount
                        ? n.metadata.channelCount
                        : 0),
                      (t.audioCodec = n.codec)
                  }
                  if (t.hasVideo) {
                    var a = r.tracks.video
                    ;(t.videoCodec = a.codec),
                      (t.width =
                        a.metadata && a.metadata.width ? a.metadata.width : 0),
                      (t.height =
                        a.metadata && a.metadata.height ? a.metadata.height : 0)
                  }
                  ;(t.duration =
                    r.frag && r.frag.duration ? r.frag.duration : 0),
                    (t.level = r.frag && r.frag.level ? r.frag.level : 0),
                    (t.videoCodec || t.audioCodec) &&
                      (t.mimeType =
                        'video/hls; codecs="' +
                        t.videoCodec +
                        ';' +
                        t.audioCodec +
                        '"'),
                    (i.mediainfo = t),
                    i.emit('media_info', t)
                }),
                (this._statisticsTimmer = setInterval(function() {
                  i.emit('statistics_info', e), (e.speed = 0)
                }, 1e3))
            }
          },
          {
            key: 'destroy',
            value: function() {
              ;(function e(t, r, i) {
                null === t && (t = Function.prototype)
                var n = Object.getOwnPropertyDescriptor(t, r)
                if (void 0 === n) {
                  var a = Object.getPrototypeOf(t)
                  return null === a ? void 0 : e(a, r, i)
                }
                if ('value' in n) return n.value
                var o = n.get
                return void 0 !== o ? o.call(i) : void 0
              })(
                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                'destroy',
                this
              ).call(this),
                clearInterval(this._statisticsTimmer),
                clearInterval(this.hbb),
                this.hls.stopLoad(),
                this.hls.detachMedia(),
                this.hls.destroy(),
                console.log('destroy')
            }
          }
        ]),
        t
      )
    })(n.default)
    ;(f.isSupported = a.default.isSupported),
      (t.default = f),
      (e.exports = t.default)
  },
  function(e, t) {
    e.exports = window.Player
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = m(r(6)),
      a = r(2),
      o = m(r(20)),
      s = m(r(50)),
      l = m(r(51)),
      u = r(14),
      d = m(r(73)),
      f = m(r(90)),
      c = m(r(91)),
      h = r(92),
      p = r(0),
      v = r(93),
      g = m(r(1)),
      y = m(r(16))
    function m(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function b(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    var E = (function() {
      function e() {
        var t = this,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        b(this, e)
        var i = e.DefaultConfig
        if (
          (r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) &&
          (r.liveSyncDuration || r.liveMaxLatencyDuration)
        )
          throw new Error(
            "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"
          )
        for (var n in i) n in r || (r[n] = i[n])
        if (
          void 0 !== r.liveMaxLatencyDurationCount &&
          r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount
        )
          throw new Error(
            'Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"'
          )
        if (
          void 0 !== r.liveMaxLatencyDuration &&
          (r.liveMaxLatencyDuration <= r.liveSyncDuration ||
            void 0 === r.liveSyncDuration)
        )
          throw new Error(
            'Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"'
          )
        ;(0, p.enableLogs)(r.debug),
          (this.config = r),
          (this._autoLevelCapping = -1)
        var a = (this.observer = new y.default())
        ;(a.trigger = function(e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i]
          a.emit.apply(a, [e, e].concat(r))
        }),
          (a.off = function(e) {
            for (
              var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i]
            a.removeListener.apply(a, [e].concat(r))
          }),
          (this.on = a.on.bind(a)),
          (this.off = a.off.bind(a)),
          (this.once = a.once.bind(a)),
          (this.trigger = a.trigger.bind(a))
        var h = (this.abrController = new r.abrController(this)),
          v = new r.bufferController(this),
          g = new r.capLevelController(this),
          m = new r.fpsController(this),
          E = new o.default(this),
          T = new s.default(this),
          k = new l.default(this),
          _ = new c.default(this),
          S = (this.levelController = new f.default(this)),
          w = new u.FragmentTracker(this),
          A = (this.streamController = new d.default(this, w)),
          R = [S, A],
          O = r.audioStreamController
        O && R.push(new O(this, w)), (this.networkControllers = R)
        var L = [E, T, k, h, v, g, m, _, w]
        if ((O = r.audioTrackController)) {
          var D = new O(this)
          ;(this.audioTrackController = D), L.push(D)
        }
        if ((O = r.subtitleTrackController)) {
          var P = new O(this)
          ;(this.subtitleTrackController = P), L.push(P)
        }
        if ((O = r.emeController)) {
          var C = new O(this)
          ;(this.emeController = C), L.push(C)
        }
        ;[r.subtitleStreamController, r.timelineController].forEach(function(
          e
        ) {
          e && L.push(new e(t))
        }),
          (this.coreComponents = L)
      }
      return (
        i(e, null, [
          {
            key: 'isSupported',
            value: function() {
              return (0, h.isSupported)()
            }
          },
          {
            key: 'version',
            get: function() {
              return __VERSION__
            }
          },
          {
            key: 'Events',
            get: function() {
              return g.default
            }
          },
          {
            key: 'ErrorTypes',
            get: function() {
              return a.ErrorTypes
            }
          },
          {
            key: 'ErrorDetails',
            get: function() {
              return a.ErrorDetails
            }
          },
          {
            key: 'DefaultConfig',
            get: function() {
              return e.defaultConfig ? e.defaultConfig : v.hlsDefaultConfig
            },
            set: function(t) {
              e.defaultConfig = t
            }
          }
        ]),
        i(e, [
          {
            key: 'destroy',
            value: function() {
              p.logger.log('destroy'),
                this.trigger(g.default.DESTROYING),
                this.detachMedia(),
                this.coreComponents
                  .concat(this.networkControllers)
                  .forEach(function(e) {
                    e.destroy()
                  }),
                (this.url = null),
                this.observer.removeAllListeners(),
                (this._autoLevelCapping = -1)
            }
          },
          {
            key: 'attachMedia',
            value: function(e) {
              p.logger.log('attachMedia'),
                (this.media = e),
                this.trigger(g.default.MEDIA_ATTACHING, { media: e })
            }
          },
          {
            key: 'detachMedia',
            value: function() {
              p.logger.log('detachMedia'),
                this.trigger(g.default.MEDIA_DETACHING),
                (this.media = null)
            }
          },
          {
            key: 'loadSource',
            value: function(e) {
              ;(e = n.default.buildAbsoluteURL(window.location.href, e, {
                alwaysNormalize: !0
              })),
                p.logger.log('loadSource:' + e),
                (this.url = e),
                this.trigger(g.default.MANIFEST_LOADING, { url: e })
            }
          },
          {
            key: 'startLoad',
            value: function() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : -1
              p.logger.log('startLoad(' + e + ')'),
                this.networkControllers.forEach(function(t) {
                  t.startLoad(e)
                })
            }
          },
          {
            key: 'stopLoad',
            value: function() {
              p.logger.log('stopLoad'),
                this.networkControllers.forEach(function(e) {
                  e.stopLoad()
                })
            }
          },
          {
            key: 'swapAudioCodec',
            value: function() {
              p.logger.log('swapAudioCodec'),
                this.streamController.swapAudioCodec()
            }
          },
          {
            key: 'recoverMediaError',
            value: function() {
              p.logger.log('recoverMediaError')
              var e = this.media
              this.detachMedia(), this.attachMedia(e)
            }
          },
          {
            key: 'levels',
            get: function() {
              return this.levelController.levels
            }
          },
          {
            key: 'currentLevel',
            get: function() {
              return this.streamController.currentLevel
            },
            set: function(e) {
              p.logger.log('set currentLevel:' + e),
                (this.loadLevel = e),
                this.streamController.immediateLevelSwitch()
            }
          },
          {
            key: 'nextLevel',
            get: function() {
              return this.streamController.nextLevel
            },
            set: function(e) {
              p.logger.log('set nextLevel:' + e),
                (this.levelController.manualLevel = e),
                this.streamController.nextLevelSwitch()
            }
          },
          {
            key: 'loadLevel',
            get: function() {
              return this.levelController.level
            },
            set: function(e) {
              p.logger.log('set loadLevel:' + e),
                (this.levelController.manualLevel = e)
            }
          },
          {
            key: 'nextLoadLevel',
            get: function() {
              return this.levelController.nextLoadLevel
            },
            set: function(e) {
              this.levelController.nextLoadLevel = e
            }
          },
          {
            key: 'firstLevel',
            get: function() {
              return Math.max(
                this.levelController.firstLevel,
                this.minAutoLevel
              )
            },
            set: function(e) {
              p.logger.log('set firstLevel:' + e),
                (this.levelController.firstLevel = e)
            }
          },
          {
            key: 'startLevel',
            get: function() {
              return this.levelController.startLevel
            },
            set: function(e) {
              p.logger.log('set startLevel:' + e)
              ;-1 !== e && (e = Math.max(e, this.minAutoLevel)),
                (this.levelController.startLevel = e)
            }
          },
          {
            key: 'autoLevelCapping',
            get: function() {
              return this._autoLevelCapping
            },
            set: function(e) {
              p.logger.log('set autoLevelCapping:' + e),
                (this._autoLevelCapping = e)
            }
          },
          {
            key: 'autoLevelEnabled',
            get: function() {
              return -1 === this.levelController.manualLevel
            }
          },
          {
            key: 'manualLevel',
            get: function() {
              return this.levelController.manualLevel
            }
          },
          {
            key: 'minAutoLevel',
            get: function() {
              for (
                var e = this.levels,
                  t = this.config.minAutoBitrate,
                  r = e ? e.length : 0,
                  i = 0;
                i < r;
                i++
              ) {
                if (
                  (e[i].realBitrate
                    ? Math.max(e[i].realBitrate, e[i].bitrate)
                    : e[i].bitrate) > t
                )
                  return i
              }
              return 0
            }
          },
          {
            key: 'maxAutoLevel',
            get: function() {
              var e = this.levels,
                t = this.autoLevelCapping
              return -1 === t && e && e.length ? e.length - 1 : t
            }
          },
          {
            key: 'nextAutoLevel',
            get: function() {
              return Math.min(
                Math.max(this.abrController.nextAutoLevel, this.minAutoLevel),
                this.maxAutoLevel
              )
            },
            set: function(e) {
              this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
            }
          },
          {
            key: 'audioTracks',
            get: function() {
              var e = this.audioTrackController
              return e ? e.audioTracks : []
            }
          },
          {
            key: 'audioTrack',
            get: function() {
              var e = this.audioTrackController
              return e ? e.audioTrack : -1
            },
            set: function(e) {
              var t = this.audioTrackController
              t && (t.audioTrack = e)
            }
          },
          {
            key: 'liveSyncPosition',
            get: function() {
              return this.streamController.liveSyncPosition
            }
          },
          {
            key: 'subtitleTracks',
            get: function() {
              var e = this.subtitleTrackController
              return e ? e.subtitleTracks : []
            }
          },
          {
            key: 'subtitleTrack',
            get: function() {
              var e = this.subtitleTrackController
              return e ? e.subtitleTrack : -1
            },
            set: function(e) {
              var t = this.subtitleTrackController
              t && (t.subtitleTrack = e)
            }
          },
          {
            key: 'subtitleDisplay',
            get: function() {
              var e = this.subtitleTrackController
              return !!e && e.subtitleDisplay
            },
            set: function(e) {
              var t = this.subtitleTrackController
              t && (t.subtitleDisplay = e)
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = E), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = d(r(6)),
      a = d(r(10)),
      o = d(r(22)),
      s = d(r(49)),
      l = r(0),
      u = r(23)
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var f = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
      c = /#EXT-X-MEDIA:(.*)/g,
      h = new RegExp(
        [
          /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
          /|(?!#)(\S+)/.source,
          /|#EXT-X-BYTERANGE:*(.+)/.source,
          /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
          /|#.*/.source
        ].join(''),
        'g'
      ),
      p = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
      v = /\.(mp4|m4s|m4v|m4a)$/i,
      g = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        return (
          i(e, null, [
            {
              key: 'findGroup',
              value: function(e, t) {
                if (!e) return null
                for (var r = null, i = 0; i < e.length; i++) {
                  var n = e[i]
                  n.id === t && (r = n)
                }
                return r
              }
            },
            {
              key: 'convertAVC1ToAVCOTI',
              value: function(e) {
                var t = void 0,
                  r = e.split('.')
                return (
                  r.length > 2
                    ? ((t = r.shift() + '.'),
                      (t += parseInt(r.shift()).toString(16)),
                      (t += ('000' + parseInt(r.shift()).toString(16)).substr(
                        -4
                      )))
                    : (t = e),
                  t
                )
              }
            },
            {
              key: 'resolve',
              value: function(e, t) {
                return n.default.buildAbsoluteURL(t, e, { alwaysNormalize: !0 })
              }
            },
            {
              key: 'parseMasterPlaylist',
              value: function(t, r) {
                var i = [],
                  n = void 0
                function a(e, t) {
                  ;['video', 'audio'].forEach(function(r) {
                    var i = e.filter(function(e) {
                      return (0, u.isCodecType)(e, r)
                    })
                    if (i.length) {
                      var n = i.filter(function(e) {
                        return (
                          0 === e.lastIndexOf('avc1', 0) ||
                          0 === e.lastIndexOf('mp4a', 0)
                        )
                      })
                      ;(t[r + 'Codec'] = n.length > 0 ? n[0] : i[0]),
                        (e = e.filter(function(e) {
                          return -1 === i.indexOf(e)
                        }))
                    }
                  }),
                    (t.unknownCodecs = e)
                }
                for (f.lastIndex = 0; null != (n = f.exec(t)); ) {
                  var o = {},
                    l = (o.attrs = new s.default(n[1]))
                  o.url = e.resolve(n[2], r)
                  var d = l.decimalResolution('RESOLUTION')
                  d && ((o.width = d.width), (o.height = d.height)),
                    (o.bitrate =
                      l.decimalInteger('AVERAGE-BANDWIDTH') ||
                      l.decimalInteger('BANDWIDTH')),
                    (o.name = l.NAME),
                    a([].concat((l.CODECS || '').split(/[ ,]+/)), o),
                    o.videoCodec &&
                      -1 !== o.videoCodec.indexOf('avc1') &&
                      (o.videoCodec = e.convertAVC1ToAVCOTI(o.videoCodec)),
                    i.push(o)
                }
                return i
              }
            },
            {
              key: 'parseMasterPlaylistMedia',
              value: function(t, r, i) {
                var n =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : [],
                  a = void 0,
                  o = [],
                  l = 0
                for (c.lastIndex = 0; null !== (a = c.exec(t)); ) {
                  var u = {},
                    d = new s.default(a[1])
                  if (d.TYPE === i) {
                    if (
                      ((u.groupId = d['GROUP-ID']),
                      (u.name = d.NAME),
                      (u.type = i),
                      (u.default = 'YES' === d.DEFAULT),
                      (u.autoselect = 'YES' === d.AUTOSELECT),
                      (u.forced = 'YES' === d.FORCED),
                      d.URI && (u.url = e.resolve(d.URI, r)),
                      (u.lang = d.LANGUAGE),
                      u.name || (u.name = u.lang),
                      n.length)
                    ) {
                      var f = e.findGroup(n, u.groupId)
                      u.audioCodec = f ? f.codec : n[0].codec
                    }
                    ;(u.id = l++), o.push(u)
                  }
                }
                return o
              }
            },
            {
              key: 'parseLevelPlaylist',
              value: function(e, t, r, i, n) {
                var u = 0,
                  d = 0,
                  f = {
                    type: null,
                    version: null,
                    url: t,
                    fragments: [],
                    live: !0,
                    startSN: 0
                  },
                  c = new o.default(),
                  g = 0,
                  y = null,
                  m = new a.default(),
                  b = void 0,
                  E = void 0
                for (h.lastIndex = 0; null !== (b = h.exec(e)); ) {
                  var T = b[1]
                  if (T) {
                    m.duration = parseFloat(T)
                    var k = (' ' + b[2]).slice(1)
                    ;(m.title = k || null),
                      m.tagList.push(k ? ['INF', T, k] : ['INF', T])
                  } else if (b[3]) {
                    if (!isNaN(m.duration)) {
                      var _ = u++
                      ;(m.type = i),
                        (m.start = d),
                        (m.levelkey = c),
                        (m.sn = _),
                        (m.level = r),
                        (m.cc = g),
                        (m.urlId = n),
                        (m.baseurl = t),
                        (m.relurl = (' ' + b[3]).slice(1)),
                        f.programDateTime &&
                          (y
                            ? m.rawProgramDateTime
                              ? (m.pdt = Date.parse(m.rawProgramDateTime))
                              : (m.pdt = y.pdt + 1e3 * y.duration)
                            : (m.pdt = Date.parse(f.programDateTime)),
                          (m.endPdt = m.pdt + 1e3 * m.duration)),
                        f.fragments.push(m),
                        (y = m),
                        (d += m.duration),
                        (m = new a.default())
                    }
                  } else if (b[4]) {
                    if (((m.rawByteRange = (' ' + b[4]).slice(1)), y)) {
                      var S = y.byteRangeEndOffset
                      S && (m.lastByteRangeEndOffset = S)
                    }
                  } else if (b[5])
                    (m.rawProgramDateTime = (' ' + b[5]).slice(1)),
                      m.tagList.push([
                        'PROGRAM-DATE-TIME',
                        m.rawProgramDateTime
                      ]),
                      void 0 === f.programDateTime &&
                        (f.programDateTime = new Date(
                          new Date(Date.parse(b[5])) - 1e3 * d
                        ))
                  else {
                    for (
                      b = b[0].match(p), E = 1;
                      E < b.length && void 0 === b[E];
                      E++
                    );
                    var w = (' ' + b[E + 1]).slice(1),
                      A = (' ' + b[E + 2]).slice(1)
                    switch (b[E]) {
                      case '#':
                        m.tagList.push(A ? [w, A] : [w])
                        break
                      case 'PLAYLIST-TYPE':
                        f.type = w.toUpperCase()
                        break
                      case 'MEDIA-SEQUENCE':
                        u = f.startSN = parseInt(w)
                        break
                      case 'TARGETDURATION':
                        f.targetduration = parseFloat(w)
                        break
                      case 'VERSION':
                        f.version = parseInt(w)
                        break
                      case 'EXTM3U':
                        break
                      case 'ENDLIST':
                        f.live = !1
                        break
                      case 'DIS':
                        g++, m.tagList.push(['DIS'])
                        break
                      case 'DISCONTINUITY-SEQ':
                        g = parseInt(w)
                        break
                      case 'KEY':
                        var R = w,
                          O = new s.default(R),
                          L = O.enumeratedString('METHOD'),
                          D = O.URI,
                          P = O.hexadecimalInteger('IV')
                        L &&
                          ((c = new o.default()),
                          D &&
                            [
                              'AES-128',
                              'SAMPLE-AES',
                              'SAMPLE-AES-CENC'
                            ].indexOf(L) >= 0 &&
                            ((c.method = L),
                            (c.baseuri = t),
                            (c.reluri = D),
                            (c.key = null),
                            (c.iv = P)))
                        break
                      case 'START':
                        var C = w,
                          I = new s.default(C).decimalFloatingPoint(
                            'TIME-OFFSET'
                          )
                        isNaN(I) || (f.startTimeOffset = I)
                        break
                      case 'MAP':
                        var x = new s.default(w)
                        ;(m.relurl = x.URI),
                          (m.rawByteRange = x.BYTERANGE),
                          (m.baseurl = t),
                          (m.level = r),
                          (m.type = i),
                          (m.sn = 'initSegment'),
                          (f.initSegment = m),
                          (m = new a.default())
                        break
                      default:
                        l.logger.warn('line parsed but not handled: ' + b)
                    }
                  }
                }
                return (
                  (m = y) &&
                    !m.relurl &&
                    (f.fragments.pop(), (d -= m.duration)),
                  (f.totalduration = d),
                  (f.averagetargetduration = d / f.fragments.length),
                  (f.endSN = u - 1),
                  (f.startCC = f.fragments[0] ? f.fragments[0].cc : 0),
                  (f.endCC = g),
                  !f.initSegment &&
                    f.fragments.length &&
                    f.fragments.every(function(e) {
                      return v.test(e.relurl)
                    }) &&
                    (l.logger.warn(
                      'MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX'
                    ),
                    ((m = new a.default()).relurl = f.fragments[0].relurl),
                    (m.baseurl = t),
                    (m.level = r),
                    (m.type = i),
                    (m.sn = 'initSegment'),
                    (f.initSegment = m),
                    (f.needSidxRanges = !0)),
                  f
                )
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = g), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    var n = /^(\d+)x(\d+)$/,
      a = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
      o = (function() {
        function e(t) {
          for (var r in ((function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
          'string' == typeof t && (t = e.parseAttrList(t)),
          t))
            t.hasOwnProperty(r) && (this[r] = t[r])
        }
        return (
          i(
            e,
            [
              {
                key: 'decimalInteger',
                value: function(e) {
                  var t = parseInt(this[e], 10)
                  return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                }
              },
              {
                key: 'hexadecimalInteger',
                value: function(e) {
                  if (this[e]) {
                    var t = (this[e] || '0x').slice(2)
                    t = (1 & t.length ? '0' : '') + t
                    for (
                      var r = new Uint8Array(t.length / 2), i = 0;
                      i < t.length / 2;
                      i++
                    )
                      r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16)
                    return r
                  }
                  return null
                }
              },
              {
                key: 'hexadecimalIntegerAsNumber',
                value: function(e) {
                  var t = parseInt(this[e], 16)
                  return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                }
              },
              {
                key: 'decimalFloatingPoint',
                value: function(e) {
                  return parseFloat(this[e])
                }
              },
              {
                key: 'enumeratedString',
                value: function(e) {
                  return this[e]
                }
              },
              {
                key: 'decimalResolution',
                value: function(e) {
                  var t = n.exec(this[e])
                  if (null !== t)
                    return {
                      width: parseInt(t[1], 10),
                      height: parseInt(t[2], 10)
                    }
                }
              }
            ],
            [
              {
                key: 'parseAttrList',
                value: function(e) {
                  var t = void 0,
                    r = {}
                  for (a.lastIndex = 0; null !== (t = a.exec(e)); ) {
                    var i = t[2]
                    0 === i.indexOf('"') &&
                      i.lastIndexOf('"') === i.length - 1 &&
                      (i = i.slice(1, -1)),
                      (r[t[1]] = i)
                  }
                  return r
                }
              }
            ]
          ),
          e
        )
      })()
    ;(t.default = o), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = l(r(1)),
      a = l(r(3)),
      o = r(2),
      s = r(0)
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            n.default.FRAG_LOADING
          )
        )
        return (r.loaders = {}), r
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
        i(t, [
          {
            key: 'destroy',
            value: function() {
              var e = this.loaders
              for (var r in e) {
                var i = e[r]
                i && i.destroy()
              }
              ;(this.loaders = {}),
                (function e(t, r, i) {
                  null === t && (t = Function.prototype)
                  var n = Object.getOwnPropertyDescriptor(t, r)
                  if (void 0 === n) {
                    var a = Object.getPrototypeOf(t)
                    return null === a ? void 0 : e(a, r, i)
                  }
                  if ('value' in n) return n.value
                  var o = n.get
                  return void 0 !== o ? o.call(i) : void 0
                })(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  'destroy',
                  this
                ).call(this)
            }
          },
          {
            key: 'onFragLoading',
            value: function(e) {
              var t = e.frag,
                r = t.type,
                i = this.loaders,
                n = this.hls.config,
                a = n.fLoader,
                o = n.loader
              t.loaded = 0
              var l = i[r]
              l &&
                (s.logger.warn('abort previous fragment loader for type: ' + r),
                l.abort()),
                (l = i[r] = t.loader = n.fLoader ? new a(n) : new o(n))
              var u,
                d,
                f = void 0
              f = {
                url: t.url,
                frag: t,
                responseType: 'arraybuffer',
                progressData: !1
              }
              var c = t.byteRangeStartOffset,
                h = t.byteRangeEndOffset
              isNaN(c) || isNaN(h) || ((f.rangeStart = c), (f.rangeEnd = h)),
                (u = {
                  timeout: n.fragLoadingTimeOut,
                  maxRetry: 0,
                  retryDelay: 0,
                  maxRetryDelay: n.fragLoadingMaxRetryTimeout
                }),
                (d = {
                  onSuccess: this.loadsuccess.bind(this),
                  onError: this.loaderror.bind(this),
                  onTimeout: this.loadtimeout.bind(this),
                  onProgress: this.loadprogress.bind(this)
                }),
                l.load(f, u, d)
            }
          },
          {
            key: 'loadsuccess',
            value: function(e, t, r) {
              var i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                a = e.data,
                o = r.frag
              ;(o.loader = void 0),
                (this.loaders[o.type] = void 0),
                this.hls.trigger(n.default.FRAG_LOADED, {
                  payload: a,
                  frag: o,
                  stats: t,
                  networkDetails: i
                })
            }
          },
          {
            key: 'loaderror',
            value: function(e, t) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                i = t.loader
              i && i.abort(),
                (this.loaders[t.type] = void 0),
                this.hls.trigger(n.default.ERROR, {
                  type: o.ErrorTypes.NETWORK_ERROR,
                  details: o.ErrorDetails.FRAG_LOAD_ERROR,
                  fatal: !1,
                  frag: t.frag,
                  response: e,
                  networkDetails: r
                })
            }
          },
          {
            key: 'loadtimeout',
            value: function(e, t) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                i = t.loader
              i && i.abort(),
                (this.loaders[t.type] = void 0),
                this.hls.trigger(n.default.ERROR, {
                  type: o.ErrorTypes.NETWORK_ERROR,
                  details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
                  fatal: !1,
                  frag: t.frag,
                  networkDetails: r
                })
            }
          },
          {
            key: 'loadprogress',
            value: function(e, t, r) {
              var i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                a = t.frag
              ;(a.loaded = e.loaded),
                this.hls.trigger(n.default.FRAG_LOAD_PROGRESS, {
                  frag: a,
                  stats: e,
                  networkDetails: i
                })
            }
          }
        ]),
        t
      )
    })(a.default)
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = u(r(1)),
      a = u(r(3)),
      o = r(2),
      s = r(0),
      l = (r(24), r(11), u(r(12)))
    function u(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var d = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            n.default.KEY_LOADING
          )
        )
        return (r.loaders = {}), (r.decryptkey = null), (r.decrypturl = null), r
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
        i(t, [
          {
            key: 'destroy',
            value: function() {
              for (var e in this.loaders) {
                var t = this.loaders[e]
                t && t.destroy()
              }
              ;(this.loaders = {}), a.default.prototype.destroy.call(this)
            }
          },
          {
            key: 'onKeyLoading',
            value: async function(e) {
              var t = e.frag,
                r = t.type,
                i = this.loaders[r],
                a = t.decryptdata,
                o = a.uri
              if (o !== this.decrypturl || null === this.decryptkey) {
                var u = this.hls.config
                i &&
                  (s.logger.warn('abort previous key loader for type:' + r),
                  i.abort()),
                  (t.loader = this.loaders[r] = new u.loader(u)),
                  (this.decrypturl = o),
                  (this.decryptkey = null)
                var d, f, c
                ;(d = { url: o, frag: t, responseType: 'arraybuffer' }),
                  (f = {
                    Authorization: l.default.getCookie('Inner-Vod-Token'),
                    timeout: u.fragLoadingTimeOut,
                    maxRetry: 0,
                    retryDelay: u.fragLoadingRetryDelay,
                    maxRetryDelay: u.fragLoadingMaxRetryTimeout
                  }),
                  (c = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this)
                  }),
                  t.loader.load(d, f, c)
              } else
                this.decryptkey &&
                  ((a.key = this.decryptkey),
                  this.hls.trigger(n.default.KEY_LOADED, { frag: t }))
            }
          },
          {
            key: 'loadsuccess',
            value: function(e, t, r) {
              var i = e.data,
                a = r.frag,
                o = new Uint8Array(i)
              if (o.length > 16) {
                var s = String.fromCharCode.apply(null, o),
                  l = JSON.parse(s)
                !l.hasOwnProperty('code') ||
                  (200 === l.code && '200' === l.code) ||
                  this.hls.trigger(n.default.KEY_LOAD_FAILED, { code: l.code })
              } else {
                this.decryptkey = a.decryptdata.key = new Uint8Array(e.data)
                var u = this.chunk(this.decryptkey, 4)
                ;(this.decryptkey = Uint8Array.from(
                  u[0]
                    .concat(u[1])
                    .concat(u[3])
                    .concat(u[2])
                )),
                  (a.loader = void 0),
                  (this.loaders[a.type] = void 0),
                  this.hls.trigger(n.default.KEY_LOADED, { frag: a })
              }
            }
          },
          {
            key: 'chunk',
            value: function(e, t) {
              for (var r = [], i = 0, n = e.length / t, a = 0; a < n; a++) {
                for (
                  var o = [], s = 0;
                  s < t && ((o[s] = e[i++]), i !== e.length);
                  s++
                );
                r[a] = o
              }
              return r
            }
          },
          {
            key: 'loaderror',
            value: function(e, t) {
              console.log('load key error')
              var r = t.frag,
                i = r.loader
              i && i.abort(),
                (this.loaders[t.type] = void 0),
                this.hls.trigger(n.default.ERROR, {
                  type: o.ErrorTypes.NETWORK_ERROR,
                  details: o.ErrorDetails.KEY_LOAD_ERROR,
                  fatal: !1,
                  frag: r,
                  response: e
                })
            }
          },
          {
            key: 'loadtimeout',
            value: function(e, t) {
              var r = t.frag,
                i = r.loader
              i && i.abort(),
                (this.loaders[t.type] = void 0),
                this.hls.trigger(n.default.ERROR, {
                  type: o.ErrorTypes.NETWORK_ERROR,
                  details: o.ErrorDetails.KEY_LOAD_TIMEOUT,
                  fatal: !1,
                  frag: r
                })
            }
          }
        ]),
        t
      )
    })(a.default)
    ;(t.default = d), (e.exports = t.default)
  },
  function(e, t, r) {
    e.exports = r(53)
  },
  function(e, t, r) {
    'use strict'
    var i = r(4),
      n = r(26),
      a = r(54),
      o = r(32)
    function s(e) {
      var t = new a(e),
        r = n(a.prototype.request, t)
      return i.extend(r, a.prototype, t), i.extend(r, t), r
    }
    var l = s(r(29))
    ;(l.Axios = a),
      (l.create = function(e) {
        return s(o(l.defaults, e))
      }),
      (l.Cancel = r(33)),
      (l.CancelToken = r(68)),
      (l.isCancel = r(28)),
      (l.all = function(e) {
        return Promise.all(e)
      }),
      (l.spread = r(69)),
      (e.exports = l),
      (e.exports.default = l)
  },
  function(e, t, r) {
    'use strict'
    var i = r(4),
      n = r(27),
      a = r(55),
      o = r(56),
      s = r(32)
    function l(e) {
      ;(this.defaults = e),
        (this.interceptors = { request: new a(), response: new a() })
    }
    ;(l.prototype.request = function(e) {
      'string' == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = s(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = 'get')
      var t = [o, void 0],
        r = Promise.resolve(e)
      for (
        this.interceptors.request.forEach(function(e) {
          t.unshift(e.fulfilled, e.rejected)
        }),
          this.interceptors.response.forEach(function(e) {
            t.push(e.fulfilled, e.rejected)
          });
        t.length;

      )
        r = r.then(t.shift(), t.shift())
      return r
    }),
      (l.prototype.getUri = function(e) {
        return (
          (e = s(this.defaults, e)),
          n(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
        )
      }),
      i.forEach(['delete', 'get', 'head', 'options'], function(e) {
        l.prototype[e] = function(t, r) {
          return this.request(s(r || {}, { method: e, url: t }))
        }
      }),
      i.forEach(['post', 'put', 'patch'], function(e) {
        l.prototype[e] = function(t, r, i) {
          return this.request(s(i || {}, { method: e, url: t, data: r }))
        }
      }),
      (e.exports = l)
  },
  function(e, t, r) {
    'use strict'
    var i = r(4)
    function n() {
      this.handlers = []
    }
    ;(n.prototype.use = function(e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      )
    }),
      (n.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
      }),
      (n.prototype.forEach = function(e) {
        i.forEach(this.handlers, function(t) {
          null !== t && e(t)
        })
      }),
      (e.exports = n)
  },
  function(e, t, r) {
    'use strict'
    var i = r(4),
      n = r(57),
      a = r(28),
      o = r(29)
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = n(e.data, e.headers, e.transformRequest)),
        (e.headers = i.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        i.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function(t) {
            delete e.headers[t]
          }
        ),
        (e.adapter || o.adapter)(e).then(
          function(t) {
            return s(e), (t.data = n(t.data, t.headers, e.transformResponse)), t
          },
          function(t) {
            return (
              a(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = n(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            )
          }
        )
      )
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(4)
    e.exports = function(e, t, r) {
      return (
        i.forEach(r, function(r) {
          e = r(e, t)
        }),
        e
      )
    }
  },
  function(e, t) {
    var r,
      i,
      n = (e.exports = {})
    function a() {
      throw new Error('setTimeout has not been defined')
    }
    function o() {
      throw new Error('clearTimeout has not been defined')
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0)
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0)
      try {
        return r(e, 0)
      } catch (t) {
        try {
          return r.call(null, e, 0)
        } catch (t) {
          return r.call(this, e, 0)
        }
      }
    }
    !(function() {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : a
      } catch (e) {
        r = a
      }
      try {
        i = 'function' == typeof clearTimeout ? clearTimeout : o
      } catch (e) {
        i = o
      }
    })()
    var l,
      u = [],
      d = !1,
      f = -1
    function c() {
      d &&
        l &&
        ((d = !1), l.length ? (u = l.concat(u)) : (f = -1), u.length && h())
    }
    function h() {
      if (!d) {
        var e = s(c)
        d = !0
        for (var t = u.length; t; ) {
          for (l = u, u = []; ++f < t; ) l && l[f].run()
          ;(f = -1), (t = u.length)
        }
        ;(l = null),
          (d = !1),
          (function(e) {
            if (i === clearTimeout) return clearTimeout(e)
            if ((i === o || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(e)
            try {
              i(e)
            } catch (t) {
              try {
                return i.call(null, e)
              } catch (t) {
                return i.call(this, e)
              }
            }
          })(e)
      }
    }
    function p(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function v() {}
    ;(n.nextTick = function(e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
      u.push(new p(e, t)), 1 !== u.length || d || s(h)
    }),
      (p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }),
      (n.title = 'browser'),
      (n.browser = !0),
      (n.env = {}),
      (n.argv = []),
      (n.version = ''),
      (n.versions = {}),
      (n.on = v),
      (n.addListener = v),
      (n.once = v),
      (n.off = v),
      (n.removeListener = v),
      (n.removeAllListeners = v),
      (n.emit = v),
      (n.prependListener = v),
      (n.prependOnceListener = v),
      (n.listeners = function(e) {
        return []
      }),
      (n.binding = function(e) {
        throw new Error('process.binding is not supported')
      }),
      (n.cwd = function() {
        return '/'
      }),
      (n.chdir = function(e) {
        throw new Error('process.chdir is not supported')
      }),
      (n.umask = function() {
        return 0
      })
  },
  function(e, t, r) {
    'use strict'
    var i = r(4)
    e.exports = function(e, t) {
      i.forEach(e, function(r, i) {
        i !== t &&
          i.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[i])
      })
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(31)
    e.exports = function(e, t, r) {
      var n = r.config.validateStatus
      r.status && n && !n(r.status)
        ? t(
            i(
              'Request failed with status code ' + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r)
    }
  },
  function(e, t, r) {
    'use strict'
    e.exports = function(e, t, r, i, n) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = i),
        (e.response = n),
        (e.isAxiosError = !0),
        (e.toJSON = function() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code
          }
        }),
        e
      )
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(4)
    e.exports = i.isStandardBrowserEnv()
      ? {
          write: function(e, t, r, n, a, o) {
            var s = []
            s.push(e + '=' + encodeURIComponent(t)),
              i.isNumber(r) && s.push('expires=' + new Date(r).toGMTString()),
              i.isString(n) && s.push('path=' + n),
              i.isString(a) && s.push('domain=' + a),
              !0 === o && s.push('secure'),
              (document.cookie = s.join('; '))
          },
          read: function(e) {
            var t = document.cookie.match(
              new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
            )
            return t ? decodeURIComponent(t[3]) : null
          },
          remove: function(e) {
            this.write(e, '', Date.now() - 864e5)
          }
        }
      : {
          write: function() {},
          read: function() {
            return null
          },
          remove: function() {}
        }
  },
  function(e, t, r) {
    'use strict'
    var i = r(64),
      n = r(65)
    e.exports = function(e, t) {
      return e && !i(t) ? n(e, t) : t
    }
  },
  function(e, t, r) {
    'use strict'
    e.exports = function(e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  },
  function(e, t, r) {
    'use strict'
    e.exports = function(e, t) {
      return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(4),
      n = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent'
      ]
    e.exports = function(e) {
      var t,
        r,
        a,
        o = {}
      return e
        ? (i.forEach(e.split('\n'), function(e) {
            if (
              ((a = e.indexOf(':')),
              (t = i.trim(e.substr(0, a)).toLowerCase()),
              (r = i.trim(e.substr(a + 1))),
              t)
            ) {
              if (o[t] && n.indexOf(t) >= 0) return
              o[t] =
                'set-cookie' === t
                  ? (o[t] ? o[t] : []).concat([r])
                  : o[t]
                    ? o[t] + ', ' + r
                    : r
            }
          }),
          o)
        : o
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(4)
    e.exports = i.isStandardBrowserEnv()
      ? (function() {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement('a')
          function n(e) {
            var i = e
            return (
              t && (r.setAttribute('href', i), (i = r.href)),
              r.setAttribute('href', i),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, '') : '',
                hash: r.hash ? r.hash.replace(/^#/, '') : '',
                hostname: r.hostname,
                port: r.port,
                pathname:
                  '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname
              }
            )
          }
          return (
            (e = n(window.location.href)),
            function(t) {
              var r = i.isString(t) ? n(t) : t
              return r.protocol === e.protocol && r.host === e.host
            }
          )
        })()
      : function() {
          return !0
        }
  },
  function(e, t, r) {
    'use strict'
    var i = r(33)
    function n(e) {
      if ('function' != typeof e)
        throw new TypeError('executor must be a function.')
      var t
      this.promise = new Promise(function(e) {
        t = e
      })
      var r = this
      e(function(e) {
        r.reason || ((r.reason = new i(e)), t(r.reason))
      })
    }
    ;(n.prototype.throwIfRequested = function() {
      if (this.reason) throw this.reason
    }),
      (n.source = function() {
        var e
        return {
          token: new n(function(t) {
            e = t
          }),
          cancel: e
        }
      }),
      (e.exports = n)
  },
  function(e, t, r) {
    'use strict'
    e.exports = function(e) {
      return function(t) {
        return e.apply(null, t)
      }
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(71),
      n = r(72),
      a = r(34)
    e.exports = { formats: a, parse: n, stringify: i }
  },
  function(e, t, r) {
    'use strict'
    var i = r(13),
      n = r(34),
      a = Object.prototype.hasOwnProperty,
      o = {
        brackets: function(e) {
          return e + '[]'
        },
        comma: 'comma',
        indices: function(e, t) {
          return e + '[' + t + ']'
        },
        repeat: function(e) {
          return e
        }
      },
      s = Array.isArray,
      l = Array.prototype.push,
      u = function(e, t) {
        l.apply(e, s(t) ? t : [t])
      },
      d = Date.prototype.toISOString,
      f = n.default,
      c = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: i.encode,
        encodeValuesOnly: !1,
        format: f,
        formatter: n.formatters[f],
        indices: !1,
        serializeDate: function(e) {
          return d.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
      },
      h = function e(t, r, n, a, o, l, d, f, h, p, v, g, y) {
        var m,
          b = t
        if (
          ('function' == typeof d
            ? (b = d(r, b))
            : b instanceof Date
              ? (b = p(b))
              : 'comma' === n &&
                s(b) &&
                (b = i
                  .maybeMap(b, function(e) {
                    return e instanceof Date ? p(e) : e
                  })
                  .join(',')),
          null === b)
        ) {
          if (a) return l && !g ? l(r, c.encoder, y, 'key') : r
          b = ''
        }
        if (
          'string' == typeof (m = b) ||
          'number' == typeof m ||
          'boolean' == typeof m ||
          'symbol' == typeof m ||
          'bigint' == typeof m ||
          i.isBuffer(b)
        )
          return l
            ? [
                v(g ? r : l(r, c.encoder, y, 'key')) +
                  '=' +
                  v(l(b, c.encoder, y, 'value'))
              ]
            : [v(r) + '=' + v(String(b))]
        var E,
          T = []
        if (void 0 === b) return T
        if (s(d)) E = d
        else {
          var k = Object.keys(b)
          E = f ? k.sort(f) : k
        }
        for (var _ = 0; _ < E.length; ++_) {
          var S = E[_],
            w = b[S]
          if (!o || null !== w) {
            var A = s(b)
              ? 'function' == typeof n
                ? n(r, S)
                : r
              : r + (h ? '.' + S : '[' + S + ']')
            u(T, e(w, A, n, a, o, l, d, f, h, p, v, g, y))
          }
        }
        return T
      }
    e.exports = function(e, t) {
      var r,
        i = e,
        l = (function(e) {
          if (!e) return c
          if (
            null !== e.encoder &&
            void 0 !== e.encoder &&
            'function' != typeof e.encoder
          )
            throw new TypeError('Encoder has to be a function.')
          var t = e.charset || c.charset
          if (
            void 0 !== e.charset &&
            'utf-8' !== e.charset &&
            'iso-8859-1' !== e.charset
          )
            throw new TypeError(
              'The charset option must be either utf-8, iso-8859-1, or undefined'
            )
          var r = n.default
          if (void 0 !== e.format) {
            if (!a.call(n.formatters, e.format))
              throw new TypeError('Unknown format option provided.')
            r = e.format
          }
          var i = n.formatters[r],
            o = c.filter
          return (
            ('function' == typeof e.filter || s(e.filter)) && (o = e.filter),
            {
              addQueryPrefix:
                'boolean' == typeof e.addQueryPrefix
                  ? e.addQueryPrefix
                  : c.addQueryPrefix,
              allowDots: void 0 === e.allowDots ? c.allowDots : !!e.allowDots,
              charset: t,
              charsetSentinel:
                'boolean' == typeof e.charsetSentinel
                  ? e.charsetSentinel
                  : c.charsetSentinel,
              delimiter: void 0 === e.delimiter ? c.delimiter : e.delimiter,
              encode: 'boolean' == typeof e.encode ? e.encode : c.encode,
              encoder: 'function' == typeof e.encoder ? e.encoder : c.encoder,
              encodeValuesOnly:
                'boolean' == typeof e.encodeValuesOnly
                  ? e.encodeValuesOnly
                  : c.encodeValuesOnly,
              filter: o,
              formatter: i,
              serializeDate:
                'function' == typeof e.serializeDate
                  ? e.serializeDate
                  : c.serializeDate,
              skipNulls:
                'boolean' == typeof e.skipNulls ? e.skipNulls : c.skipNulls,
              sort: 'function' == typeof e.sort ? e.sort : null,
              strictNullHandling:
                'boolean' == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : c.strictNullHandling
            }
          )
        })(t)
      'function' == typeof l.filter
        ? (i = (0, l.filter)('', i))
        : s(l.filter) && (r = l.filter)
      var d,
        f = []
      if ('object' != typeof i || null === i) return ''
      d =
        t && t.arrayFormat in o
          ? t.arrayFormat
          : t && 'indices' in t
            ? t.indices
              ? 'indices'
              : 'repeat'
            : 'indices'
      var p = o[d]
      r || (r = Object.keys(i)), l.sort && r.sort(l.sort)
      for (var v = 0; v < r.length; ++v) {
        var g = r[v]
        ;(l.skipNulls && null === i[g]) ||
          u(
            f,
            h(
              i[g],
              g,
              p,
              l.strictNullHandling,
              l.skipNulls,
              l.encode ? l.encoder : null,
              l.filter,
              l.sort,
              l.allowDots,
              l.serializeDate,
              l.formatter,
              l.encodeValuesOnly,
              l.charset
            )
          )
      }
      var y = f.join(l.delimiter),
        m = !0 === l.addQueryPrefix ? '?' : ''
      return (
        l.charsetSentinel &&
          ('iso-8859-1' === l.charset
            ? (m += 'utf8=%26%2310003%3B&')
            : (m += 'utf8=%E2%9C%93&')),
        y.length > 0 ? m + y : ''
      )
    }
  },
  function(e, t, r) {
    'use strict'
    var i = r(13),
      n = Object.prototype.hasOwnProperty,
      a = Array.isArray,
      o = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: i.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
      },
      s = function(e) {
        return e.replace(/&#(\d+);/g, function(e, t) {
          return String.fromCharCode(parseInt(t, 10))
        })
      },
      l = function(e, t) {
        return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1
          ? e.split(',')
          : e
      },
      u = function(e, t, r, i) {
        if (e) {
          var a = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
            o = /(\[[^[\]]*])/g,
            s = r.depth > 0 && /(\[[^[\]]*])/.exec(a),
            u = s ? a.slice(0, s.index) : a,
            d = []
          if (u) {
            if (
              !r.plainObjects &&
              n.call(Object.prototype, u) &&
              !r.allowPrototypes
            )
              return
            d.push(u)
          }
          for (
            var f = 0;
            r.depth > 0 && null !== (s = o.exec(a)) && f < r.depth;

          ) {
            if (
              ((f += 1),
              !r.plainObjects &&
                n.call(Object.prototype, s[1].slice(1, -1)) &&
                !r.allowPrototypes)
            )
              return
            d.push(s[1])
          }
          return (
            s && d.push('[' + a.slice(s.index) + ']'),
            (function(e, t, r, i) {
              for (var n = i ? t : l(t, r), a = e.length - 1; a >= 0; --a) {
                var o,
                  s = e[a]
                if ('[]' === s && r.parseArrays) o = [].concat(n)
                else {
                  o = r.plainObjects ? Object.create(null) : {}
                  var u =
                      '[' === s.charAt(0) && ']' === s.charAt(s.length - 1)
                        ? s.slice(1, -1)
                        : s,
                    d = parseInt(u, 10)
                  r.parseArrays || '' !== u
                    ? !isNaN(d) &&
                      s !== u &&
                      String(d) === u &&
                      d >= 0 &&
                      r.parseArrays &&
                      d <= r.arrayLimit
                      ? ((o = [])[d] = n)
                      : (o[u] = n)
                    : (o = { 0: n })
                }
                n = o
              }
              return n
            })(d, t, r, i)
          )
        }
      }
    e.exports = function(e, t) {
      var r = (function(e) {
        if (!e) return o
        if (
          null !== e.decoder &&
          void 0 !== e.decoder &&
          'function' != typeof e.decoder
        )
          throw new TypeError('Decoder has to be a function.')
        if (
          void 0 !== e.charset &&
          'utf-8' !== e.charset &&
          'iso-8859-1' !== e.charset
        )
          throw new TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined'
          )
        var t = void 0 === e.charset ? o.charset : e.charset
        return {
          allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
          allowPrototypes:
            'boolean' == typeof e.allowPrototypes
              ? e.allowPrototypes
              : o.allowPrototypes,
          arrayLimit:
            'number' == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
          charset: t,
          charsetSentinel:
            'boolean' == typeof e.charsetSentinel
              ? e.charsetSentinel
              : o.charsetSentinel,
          comma: 'boolean' == typeof e.comma ? e.comma : o.comma,
          decoder: 'function' == typeof e.decoder ? e.decoder : o.decoder,
          delimiter:
            'string' == typeof e.delimiter || i.isRegExp(e.delimiter)
              ? e.delimiter
              : o.delimiter,
          depth:
            'number' == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
          ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
          interpretNumericEntities:
            'boolean' == typeof e.interpretNumericEntities
              ? e.interpretNumericEntities
              : o.interpretNumericEntities,
          parameterLimit:
            'number' == typeof e.parameterLimit
              ? e.parameterLimit
              : o.parameterLimit,
          parseArrays: !1 !== e.parseArrays,
          plainObjects:
            'boolean' == typeof e.plainObjects
              ? e.plainObjects
              : o.plainObjects,
          strictNullHandling:
            'boolean' == typeof e.strictNullHandling
              ? e.strictNullHandling
              : o.strictNullHandling
        }
      })(t)
      if ('' === e || null == e)
        return r.plainObjects ? Object.create(null) : {}
      for (
        var d =
            'string' == typeof e
              ? (function(e, t) {
                  var r,
                    u = {},
                    d = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                    f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                    c = d.split(t.delimiter, f),
                    h = -1,
                    p = t.charset
                  if (t.charsetSentinel)
                    for (r = 0; r < c.length; ++r)
                      0 === c[r].indexOf('utf8=') &&
                        ('utf8=%E2%9C%93' === c[r]
                          ? (p = 'utf-8')
                          : 'utf8=%26%2310003%3B' === c[r] &&
                            (p = 'iso-8859-1'),
                        (h = r),
                        (r = c.length))
                  for (r = 0; r < c.length; ++r)
                    if (r !== h) {
                      var v,
                        g,
                        y = c[r],
                        m = y.indexOf(']='),
                        b = -1 === m ? y.indexOf('=') : m + 1
                      ;-1 === b
                        ? ((v = t.decoder(y, o.decoder, p, 'key')),
                          (g = t.strictNullHandling ? null : ''))
                        : ((v = t.decoder(y.slice(0, b), o.decoder, p, 'key')),
                          (g = i.maybeMap(l(y.slice(b + 1), t), function(e) {
                            return t.decoder(e, o.decoder, p, 'value')
                          }))),
                        g &&
                          t.interpretNumericEntities &&
                          'iso-8859-1' === p &&
                          (g = s(g)),
                        y.indexOf('[]=') > -1 && (g = a(g) ? [g] : g),
                        n.call(u, v) ? (u[v] = i.combine(u[v], g)) : (u[v] = g)
                    }
                  return u
                })(e, r)
              : e,
          f = r.plainObjects ? Object.create(null) : {},
          c = Object.keys(d),
          h = 0;
        h < c.length;
        ++h
      ) {
        var p = c[h],
          v = u(p, d[p], r, 'string' == typeof e)
        f = i.merge(f, v, r)
      }
      return i.compact(f)
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.State = void 0)
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = function e(t, r, i) {
        null === t && (t = Function.prototype)
        var n = Object.getOwnPropertyDescriptor(t, r)
        if (void 0 === n) {
          var a = Object.getPrototypeOf(t)
          return null === a ? void 0 : e(a, r, i)
        }
        if ('value' in n) return n.value
        var o = n.get
        return void 0 !== o ? o.call(i) : void 0
      },
      a = b(r(7)),
      o = r(15),
      s = b(r(35)),
      l = b(r(1)),
      u = r(14),
      d = b(r(10)),
      f = b(r(20)),
      c = (function(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        return (t.default = e), t
      })(r(19)),
      h = b(r(39)),
      p = r(2),
      v = r(0),
      g = r(40),
      y = b(r(9)),
      m = r(89)
    function b(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var E = (t.State = {
        STOPPED: 'STOPPED',
        IDLE: 'IDLE',
        KEY_LOADING: 'KEY_LOADING',
        FRAG_LOADING: 'FRAG_LOADING',
        FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
        WAITING_LEVEL: 'WAITING_LEVEL',
        PARSING: 'PARSING',
        PARSED: 'PARSED',
        BUFFER_FLUSHING: 'BUFFER_FLUSHING',
        ENDED: 'ENDED',
        ERROR: 'ERROR'
      }),
      T = (function(e) {
        function t(e, r) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var i = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              l.default.MEDIA_ATTACHED,
              l.default.MEDIA_DETACHING,
              l.default.MANIFEST_LOADING,
              l.default.MANIFEST_PARSED,
              l.default.LEVEL_LOADED,
              l.default.KEY_LOADED,
              l.default.FRAG_LOADED,
              l.default.FRAG_LOAD_EMERGENCY_ABORTED,
              l.default.FRAG_PARSING_INIT_SEGMENT,
              l.default.FRAG_PARSING_DATA,
              l.default.FRAG_PARSED,
              l.default.ERROR,
              l.default.AUDIO_TRACK_SWITCHING,
              l.default.AUDIO_TRACK_SWITCHED,
              l.default.BUFFER_CREATED,
              l.default.BUFFER_APPENDED,
              l.default.BUFFER_FLUSHED
            )
          )
          return (
            (i.fragmentTracker = r),
            (i.config = e.config),
            (i.audioCodecSwap = !1),
            (i._state = E.STOPPED),
            (i.stallReported = !1),
            i
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
          i(t, [
            {
              key: 'onHandlerDestroying',
              value: function() {
                this.stopLoad(),
                  n(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'onHandlerDestroying',
                    this
                  ).call(this)
              }
            },
            {
              key: 'onHandlerDestroyed',
              value: function() {
                ;(this.state = E.STOPPED),
                  (this.fragmentTracker = null),
                  n(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'onHandlerDestroyed',
                    this
                  ).call(this)
              }
            },
            {
              key: 'startLoad',
              value: function(e) {
                if (this.levels) {
                  var t = this.lastCurrentTime,
                    r = this.hls
                  if (
                    (this.stopLoad(),
                    this.setInterval(100),
                    (this.level = -1),
                    (this.fragLoadError = 0),
                    !this.startFragRequested)
                  ) {
                    var i = r.startLevel
                    ;-1 === i && ((i = 0), (this.bitrateTest = !0)),
                      (this.level = r.nextLoadLevel = i),
                      (this.loadedmetadata = !1)
                  }
                  t > 0 &&
                    -1 === e &&
                    (v.logger.log(
                      'override startPosition with lastCurrentTime @' +
                        t.toFixed(3)
                    ),
                    (e = t)),
                    (this.state = E.IDLE),
                    (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e),
                    this.tick()
                } else (this.forceStartLoad = !0), (this.state = E.STOPPED)
              }
            },
            {
              key: 'stopLoad',
              value: function() {
                var e = this.fragCurrent
                e &&
                  (e.loader && e.loader.abort(),
                  this.fragmentTracker.removeFragment(e),
                  (this.fragCurrent = null)),
                  (this.fragPrevious = null),
                  this.demuxer &&
                    (this.demuxer.destroy(), (this.demuxer = null)),
                  this.clearInterval(),
                  (this.state = E.STOPPED),
                  (this.forceStartLoad = !1)
              }
            },
            {
              key: 'doTick',
              value: function() {
                switch (this.state) {
                  case E.BUFFER_FLUSHING:
                    this.fragLoadError = 0
                    break
                  case E.IDLE:
                    this._doTickIdle()
                    break
                  case E.WAITING_LEVEL:
                    var e = this.levels[this.level]
                    e && e.details && (this.state = E.IDLE)
                    break
                  case E.FRAG_LOADING_WAITING_RETRY:
                    var t = window.performance.now(),
                      r = this.retryDate
                    ;(!r || t >= r || (this.media && this.media.seeking)) &&
                      (v.logger.log(
                        'mediaController: retryDate reached, switch back to IDLE state'
                      ),
                      (this.state = E.IDLE))
                }
                this._checkBuffer(), this._checkFragmentChanged()
              }
            },
            {
              key: '_doTickIdle',
              value: function() {
                var e = this.hls,
                  t = e.config,
                  r = this.media
                if (
                  void 0 !== this.levelLastLoaded &&
                  (r || (!this.startFragRequested && t.startFragPrefetch))
                ) {
                  var i = void 0
                  i = this.loadedmetadata
                    ? r.currentTime
                    : this.nextLoadPosition
                  var n = e.nextLoadLevel,
                    a = this.levels[n]
                  if (a) {
                    var s = a.bitrate,
                      u = void 0
                    ;(u = s
                      ? Math.max((8 * t.maxBufferSize) / s, t.maxBufferLength)
                      : t.maxBufferLength),
                      (u = Math.min(u, t.maxMaxBufferLength))
                    var d = o.BufferHelper.bufferInfo(
                        this.mediaBuffer ? this.mediaBuffer : r,
                        i,
                        t.maxBufferHole
                      ),
                      f = d.len
                    if (!(f >= u)) {
                      v.logger.trace(
                        'buffer length of ' +
                          f.toFixed(3) +
                          ' is below max of ' +
                          u.toFixed(3) +
                          '. checking for more payload ...'
                      ),
                        (this.level = e.nextLoadLevel = n)
                      var c = a.details
                      if (!c || (c.live && this.levelLastLoaded !== n))
                        this.state = E.WAITING_LEVEL
                      else {
                        var h = this.fragPrevious
                        if (
                          !c.live &&
                          h &&
                          !h.backtracked &&
                          h.sn === c.endSN &&
                          !d.nextStart
                        )
                          if (
                            Math.min(r.duration, h.start + h.duration) -
                              Math.max(d.end, h.start) <=
                            Math.max(0.2, h.duration)
                          ) {
                            var p = {}
                            return (
                              this.altAudio && (p.type = 'video'),
                              this.hls.trigger(l.default.BUFFER_EOS, p),
                              void (this.state = E.ENDED)
                            )
                          }
                        this._fetchPayloadOrEos(i, d, c)
                      }
                    }
                  }
                }
              }
            },
            {
              key: '_fetchPayloadOrEos',
              value: function(e, t, r) {
                var i = this.fragPrevious,
                  n = this.level,
                  a = r.fragments,
                  o = a.length
                if (0 !== o) {
                  var s = a[0].start,
                    l = a[o - 1].start + a[o - 1].duration,
                    u = t.end,
                    d = void 0
                  if (r.initSegment && !r.initSegment.data) d = r.initSegment
                  else if (r.live) {
                    var f = this.config.initialLiveManifestSize
                    if (o < f)
                      return void v.logger.warn(
                        'Can not start playback of a level, reason: not enough fragments ' +
                          o +
                          ' < ' +
                          f
                      )
                    if (
                      null ===
                      (d = this._ensureFragmentAtLivePoint(r, u, s, l, i, a, o))
                    )
                      return
                  } else u < s && (d = a[0])
                  d || (d = this._findFragment(s, i, o, a, u, l, r)),
                    d &&
                      (d.encrypted
                        ? (v.logger.log(
                            'Loading key for ' +
                              d.sn +
                              ' of [' +
                              r.startSN +
                              ' ,' +
                              r.endSN +
                              '],level ' +
                              n
                          ),
                          this._loadKey(d))
                        : (v.logger.log(
                            'Loading ' +
                              d.sn +
                              ' of [' +
                              r.startSN +
                              ' ,' +
                              r.endSN +
                              '],level ' +
                              n +
                              ', currentTime:' +
                              e.toFixed(3) +
                              ',bufferEnd:' +
                              u.toFixed(3)
                          ),
                          this._loadFragment(d)))
                }
              }
            },
            {
              key: '_ensureFragmentAtLivePoint',
              value: function(e, t, r, i, n, o, s) {
                var l = this.hls.config,
                  u = this.media,
                  d = void 0,
                  f =
                    void 0 !== l.liveMaxLatencyDuration
                      ? l.liveMaxLatencyDuration
                      : l.liveMaxLatencyDurationCount * e.targetduration
                if (t < Math.max(r - l.maxFragLookUpTolerance, i - f)) {
                  var c = (this.liveSyncPosition = this.computeLivePosition(
                    r,
                    e
                  ))
                  v.logger.log(
                    'buffer end: ' +
                      t.toFixed(3) +
                      ' is located too far from the end of live sliding playlist, reset currentTime to : ' +
                      c.toFixed(3)
                  ),
                    (t = c),
                    u && u.readyState && u.duration > c && (u.currentTime = c),
                    (this.nextLoadPosition = c)
                }
                if (e.PTSKnown && t > i && u && u.readyState) return null
                if (this.startFragRequested && !e.PTSKnown) {
                  if (n)
                    if (e.programDateTime)
                      d = (0, m.findFragmentByPDT)(o, n.endPdt + 1)
                    else {
                      var h = n.sn + 1
                      if (h >= e.startSN && h <= e.endSN) {
                        var p = o[h - e.startSN]
                        n.cc === p.cc &&
                          ((d = p),
                          v.logger.log(
                            'live playlist, switching playlist, load frag with next SN: ' +
                              d.sn
                          ))
                      }
                      d ||
                        ((d = a.default.search(o, function(e) {
                          return n.cc - e.cc
                        })) &&
                          v.logger.log(
                            'live playlist, switching playlist, load frag with same CC: ' +
                              d.sn
                          ))
                    }
                  d ||
                    ((d = o[Math.min(s - 1, Math.round(s / 2))]),
                    v.logger.log(
                      'live playlist, switching playlist, unknown, load middle frag : ' +
                        d.sn
                    ))
                }
                return d
              }
            },
            {
              key: '_findFragment',
              value: function(e, t, r, i, n, a, o) {
                var s = this.hls.config,
                  l = void 0,
                  u = void 0
                if (
                  (n < a
                    ? o.programDateTime
                      ? ((u = (0, m.findFragmentByPDT)(
                          i,
                          (0, m.calculateNextPDT)(e, n, o)
                        )) &&
                          !(0, m.fragmentWithinToleranceTest)(
                            n,
                            s.maxFragLookUpTolerance,
                            u
                          )) ||
                        (v.logger.warn(
                          'Frag found by PDT search did not fit within tolerance; falling back to finding by SN'
                        ),
                        (u = (0, m.findFragmentBySN)(
                          t,
                          i,
                          n,
                          a,
                          s.maxFragLookUpTolerance
                        )))
                      : (u = (0, m.findFragmentBySN)(
                          t,
                          i,
                          n,
                          a,
                          s.maxFragLookUpTolerance
                        ))
                    : (u = i[r - 1]),
                  u)
                ) {
                  var d = (l = u).sn - o.startSN,
                    f = t && l.level === t.level,
                    c = i[d - 1],
                    h = i[d + 1]
                  if (t && l.sn === t.sn)
                    if (f && !l.backtracked)
                      if (l.sn < o.endSN) {
                        var p = t.deltaPTS
                        p && p > s.maxBufferHole && t.dropped && d
                          ? ((l = c),
                            v.logger.warn(
                              'SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this'
                            ))
                          : ((l = h),
                            v.logger.log(
                              'SN just loaded, load next one: ' + l.sn
                            ))
                      } else l = null
                    else
                      l.backtracked &&
                        (h && h.backtracked
                          ? (v.logger.warn(
                              'Already backtracked from fragment ' +
                                h.sn +
                                ', will not backtrack to fragment ' +
                                l.sn +
                                '. Loading fragment ' +
                                h.sn
                            ),
                            (l = h))
                          : (v.logger.warn(
                              'Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe'
                            ),
                            (l.dropped = 0),
                            c ? ((l = c).backtracked = !0) : d && (l = null)))
                }
                return l
              }
            },
            {
              key: '_loadKey',
              value: function(e) {
                ;(this.state = E.KEY_LOADING),
                  this.hls.trigger(l.default.KEY_LOADING, { frag: e })
              }
            },
            {
              key: '_loadFragment',
              value: function(e) {
                var t = this.fragmentTracker.getState(e)
                ;(this.fragCurrent = e),
                  (this.startFragRequested = !0),
                  isNaN(e.sn) ||
                    e.bitrateTest ||
                    (this.nextLoadPosition = e.start + e.duration),
                  e.backtracked ||
                  t === u.FragmentState.NOT_LOADED ||
                  t === u.FragmentState.PARTIAL
                    ? ((e.autoLevel = this.hls.autoLevelEnabled),
                      (e.bitrateTest = this.bitrateTest),
                      this.hls.trigger(l.default.FRAG_LOADING, { frag: e }),
                      this.demuxer ||
                        (this.demuxer = new s.default(this.hls, 'main')),
                      (this.state = E.FRAG_LOADING))
                    : t === u.FragmentState.APPENDING &&
                      this._reduceMaxBufferLength(e.duration) &&
                      this.fragmentTracker.removeFragment(e)
              }
            },
            {
              key: 'getBufferedFrag',
              value: function(e) {
                return this.fragmentTracker.getBufferedFrag(
                  e,
                  f.default.LevelType.MAIN
                )
              }
            },
            {
              key: 'followingBufferedFrag',
              value: function(e) {
                return e ? this.getBufferedFrag(e.endPTS + 0.5) : null
              }
            },
            {
              key: '_checkFragmentChanged',
              value: function() {
                var e = void 0,
                  t = void 0,
                  r = this.media
                if (
                  r &&
                  r.readyState &&
                  !1 === r.seeking &&
                  ((t = r.currentTime) > this.lastCurrentTime &&
                    (this.lastCurrentTime = t),
                  o.BufferHelper.isBuffered(r, t)
                    ? (e = this.getBufferedFrag(t))
                    : o.BufferHelper.isBuffered(r, t + 0.1) &&
                      (e = this.getBufferedFrag(t + 0.1)),
                  e)
                ) {
                  var i = e
                  if (i !== this.fragPlaying) {
                    this.hls.trigger(l.default.FRAG_CHANGED, { frag: i })
                    var n = i.level
                    ;(this.fragPlaying && this.fragPlaying.level === n) ||
                      this.hls.trigger(l.default.LEVEL_SWITCHED, { level: n }),
                      (this.fragPlaying = i)
                  }
                }
              }
            },
            {
              key: 'immediateLevelSwitch',
              value: function() {
                if (
                  (v.logger.log('immediateLevelSwitch'), !this.immediateSwitch)
                ) {
                  this.immediateSwitch = !0
                  var e = this.media,
                    t = void 0
                  e ? ((t = e.paused), e.pause()) : (t = !0),
                    (this.previouslyPaused = t)
                }
                var r = this.fragCurrent
                r && r.loader && r.loader.abort(),
                  (this.fragCurrent = null),
                  this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
              }
            },
            {
              key: 'immediateLevelSwitchEnd',
              value: function() {
                var e = this.media
                e &&
                  e.buffered.length &&
                  ((this.immediateSwitch = !1),
                  o.BufferHelper.isBuffered(e, e.currentTime) &&
                    (e.currentTime -= 1e-4),
                  this.previouslyPaused || e.play())
              }
            },
            {
              key: 'nextLevelSwitch',
              value: function() {
                var e = this.media
                if (e && e.readyState) {
                  var t,
                    r = void 0,
                    i = void 0
                  if (
                    ((t = this.getBufferedFrag(e.currentTime)) &&
                      t.startPTS > 1 &&
                      this.flushMainBuffer(0, t.startPTS - 1),
                    e.paused)
                  )
                    r = 0
                  else {
                    var n = this.hls.nextLoadLevel,
                      a = this.levels[n],
                      o = this.fragLastKbps
                    r =
                      o && this.fragCurrent
                        ? (this.fragCurrent.duration * a.bitrate) / (1e3 * o) +
                          1
                        : 0
                  }
                  if (
                    (i = this.getBufferedFrag(e.currentTime + r)) &&
                    (i = this.followingBufferedFrag(i))
                  ) {
                    var s = this.fragCurrent
                    s && s.loader && s.loader.abort(),
                      (this.fragCurrent = null),
                      this.flushMainBuffer(
                        i.maxStartPTS,
                        Number.POSITIVE_INFINITY
                      )
                  }
                }
              }
            },
            {
              key: 'flushMainBuffer',
              value: function(e, t) {
                this.state = E.BUFFER_FLUSHING
                var r = { startOffset: e, endOffset: t }
                this.altAudio && (r.type = 'video'),
                  this.hls.trigger(l.default.BUFFER_FLUSHING, r)
              }
            },
            {
              key: 'onMediaAttached',
              value: function(e) {
                var t = (this.media = this.mediaBuffer = e.media)
                ;(this.onvseeking = this.onMediaSeeking.bind(this)),
                  (this.onvseeked = this.onMediaSeeked.bind(this)),
                  (this.onvended = this.onMediaEnded.bind(this)),
                  t.addEventListener('seeking', this.onvseeking),
                  t.addEventListener('seeked', this.onvseeked),
                  t.addEventListener('ended', this.onvended)
                var r = this.config
                this.levels &&
                  r.autoStartLoad &&
                  this.hls.startLoad(r.startPosition)
              }
            },
            {
              key: 'onMediaDetaching',
              value: function() {
                var e = this.media
                e &&
                  e.ended &&
                  (v.logger.log(
                    'MSE detaching and video ended, reset startPosition'
                  ),
                  (this.startPosition = this.lastCurrentTime = 0))
                var t = this.levels
                t &&
                  t.forEach(function(e) {
                    e.details &&
                      e.details.fragments.forEach(function(e) {
                        e.backtracked = void 0
                      })
                  }),
                  e &&
                    (e.removeEventListener('seeking', this.onvseeking),
                    e.removeEventListener('seeked', this.onvseeked),
                    e.removeEventListener('ended', this.onvended),
                    (this.onvseeking = this.onvseeked = this.onvended = null)),
                  (this.media = this.mediaBuffer = null),
                  (this.loadedmetadata = !1),
                  this.stopLoad()
              }
            },
            {
              key: 'onMediaSeeking',
              value: function() {
                var e = this.media,
                  t = e ? e.currentTime : void 0,
                  r = this.config
                isNaN(t) || v.logger.log('media seeking to ' + t.toFixed(3))
                var i = this.mediaBuffer ? this.mediaBuffer : e,
                  n = o.BufferHelper.bufferInfo(i, t, this.config.maxBufferHole)
                if (this.state === E.FRAG_LOADING) {
                  var a = this.fragCurrent
                  if (0 === n.len && a) {
                    var s = r.maxFragLookUpTolerance,
                      l = a.start - s,
                      u = a.start + a.duration + s
                    t < l || t > u
                      ? (a.loader &&
                          (v.logger.log(
                            'seeking outside of buffer while fragment load in progress, cancel fragment load'
                          ),
                          a.loader.abort()),
                        (this.fragCurrent = null),
                        (this.fragPrevious = null),
                        (this.state = E.IDLE))
                      : v.logger.log(
                          'seeking outside of buffer but within currently loaded fragment range'
                        )
                  }
                } else
                  this.state === E.ENDED &&
                    (0 === n.len && (this.fragPrevious = 0),
                    (this.state = E.IDLE))
                e && (this.lastCurrentTime = t),
                  this.loadedmetadata ||
                    (this.nextLoadPosition = this.startPosition = t),
                  this.tick()
              }
            },
            {
              key: 'onMediaSeeked',
              value: function() {
                var e = this.media,
                  t = e ? e.currentTime : void 0
                isNaN(t) || v.logger.log('media seeked to ' + t.toFixed(3)),
                  this.tick()
              }
            },
            {
              key: 'onMediaEnded',
              value: function() {
                v.logger.log('media ended'),
                  (this.startPosition = this.lastCurrentTime = 0)
              }
            },
            {
              key: 'onManifestLoading',
              value: function() {
                v.logger.log('trigger BUFFER_RESET'),
                  this.hls.trigger(l.default.BUFFER_RESET),
                  this.fragmentTracker.removeAllFragments(),
                  (this.stalled = !1),
                  (this.startPosition = this.lastCurrentTime = 0)
              }
            },
            {
              key: 'onManifestParsed',
              value: function(e) {
                var t = !1,
                  r = !1,
                  i = void 0
                e.levels.forEach(function(e) {
                  ;(i = e.audioCodec) &&
                    (-1 !== i.indexOf('mp4a.40.2') && (t = !0),
                    -1 !== i.indexOf('mp4a.40.5') && (r = !0))
                }),
                  (this.audioCodecSwitch = t && r),
                  this.audioCodecSwitch &&
                    v.logger.log(
                      'both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC'
                    ),
                  (this.levels = e.levels),
                  (this.startFragRequested = !1)
                var n = this.config
                ;(n.autoStartLoad || this.forceStartLoad) &&
                  this.hls.startLoad(n.startPosition)
              }
            },
            {
              key: 'onLevelLoaded',
              value: function(e) {
                var t = e.details,
                  r = e.level,
                  i = this.levels[this.levelLastLoaded],
                  n = this.levels[r],
                  a = t.totalduration,
                  o = 0
                if (
                  (v.logger.log(
                    'level ' +
                      r +
                      ' loaded [' +
                      t.startSN +
                      ',' +
                      t.endSN +
                      '],duration:' +
                      a
                  ),
                  t.live)
                ) {
                  var s = n.details
                  s && t.fragments.length > 0
                    ? (c.mergeDetails(s, t),
                      (o = t.fragments[0].start),
                      (this.liveSyncPosition = this.computeLivePosition(o, s)),
                      t.PTSKnown && !isNaN(o)
                        ? v.logger.log('live playlist sliding:' + o.toFixed(3))
                        : (v.logger.log(
                            'live playlist - outdated PTS, unknown sliding'
                          ),
                          (0, g.alignDiscontinuities)(this.fragPrevious, i, t)))
                    : (v.logger.log(
                        'live playlist - first load, unknown sliding'
                      ),
                      (t.PTSKnown = !1),
                      (0, g.alignDiscontinuities)(this.fragPrevious, i, t))
                } else t.PTSKnown = !1
                if (
                  ((n.details = t),
                  (this.levelLastLoaded = r),
                  this.hls.trigger(l.default.LEVEL_UPDATED, {
                    details: t,
                    level: r
                  }),
                  !1 === this.startFragRequested)
                ) {
                  if (
                    -1 === this.startPosition ||
                    -1 === this.lastCurrentTime
                  ) {
                    var u = t.startTimeOffset
                    isNaN(u)
                      ? t.live
                        ? ((this.startPosition = this.computeLivePosition(
                            o,
                            t
                          )),
                          v.logger.log(
                            'configure startPosition to ' + this.startPosition
                          ))
                        : (this.startPosition = 0)
                      : (u < 0 &&
                          (v.logger.log(
                            'negative start time offset ' +
                              u +
                              ', count from end of last fragment'
                          ),
                          (u = o + a + u)),
                        v.logger.log(
                          'start time offset found in playlist, adjust startPosition to ' +
                            u
                        ),
                        (this.startPosition = u)),
                      (this.lastCurrentTime = this.startPosition)
                  }
                  this.nextLoadPosition = this.startPosition
                }
                this.state === E.WAITING_LEVEL && (this.state = E.IDLE),
                  this.tick()
              }
            },
            {
              key: 'onKeyLoaded',
              value: function() {
                this.state === E.KEY_LOADING &&
                  ((this.state = E.IDLE), this.tick())
              }
            },
            {
              key: 'onFragLoaded',
              value: function(e) {
                var t = this.fragCurrent,
                  r = e.frag
                if (
                  this.state === E.FRAG_LOADING &&
                  t &&
                  'main' === r.type &&
                  r.level === t.level &&
                  r.sn === t.sn
                ) {
                  var i = e.stats,
                    n = this.levels[t.level],
                    a = n.details
                  if (
                    (v.logger.log(
                      'Loaded  ' +
                        t.sn +
                        ' of [' +
                        a.startSN +
                        ' ,' +
                        a.endSN +
                        '],level ' +
                        t.level
                    ),
                    (this.bitrateTest = !1),
                    (this.stats = i),
                    !0 === r.bitrateTest && this.hls.nextLoadLevel)
                  )
                    (this.state = E.IDLE),
                      (this.startFragRequested = !1),
                      (i.tparsed = i.tbuffered = window.performance.now()),
                      this.hls.trigger(l.default.FRAG_BUFFERED, {
                        stats: i,
                        frag: t,
                        id: 'main'
                      }),
                      this.tick()
                  else if ('initSegment' === r.sn)
                    (this.state = E.IDLE),
                      (i.tparsed = i.tbuffered = window.performance.now()),
                      (a.initSegment.data = e.payload),
                      this.hls.trigger(l.default.FRAG_BUFFERED, {
                        stats: i,
                        frag: t,
                        id: 'main'
                      }),
                      this.tick()
                  else {
                    this.state = E.PARSING
                    var o = a.totalduration,
                      u = t.level,
                      d = t.sn,
                      f = this.config.defaultAudioCodec || n.audioCodec
                    this.audioCodecSwap &&
                      (v.logger.log('swapping playlist audio codec'),
                      void 0 === f && (f = this.lastAudioCodec),
                      f &&
                        (f =
                          -1 !== f.indexOf('mp4a.40.5')
                            ? 'mp4a.40.2'
                            : 'mp4a.40.5')),
                      (this.pendingBuffering = !0),
                      (this.appended = !1),
                      v.logger.log(
                        'Parsing ' +
                          d +
                          ' of [' +
                          a.startSN +
                          ' ,' +
                          a.endSN +
                          '],level ' +
                          u +
                          ', cc ' +
                          t.cc
                      )
                    var c = this.demuxer
                    c || (c = this.demuxer = new s.default(this.hls, 'main'))
                    var h = this.media,
                      p = !(h && h.seeking) && (a.PTSKnown || !a.live),
                      g = a.initSegment ? a.initSegment.data : []
                    c.push(e.payload, g, f, n.videoCodec, t, o, p, void 0)
                  }
                }
                this.fragLoadError = 0
              }
            },
            {
              key: 'onFragParsingInitSegment',
              value: function(e) {
                var t = this.fragCurrent,
                  r = e.frag
                if (
                  t &&
                  'main' === e.id &&
                  r.sn === t.sn &&
                  r.level === t.level &&
                  this.state === E.PARSING
                ) {
                  var i = e.tracks,
                    n = void 0,
                    a = void 0
                  if (
                    (i.audio && this.altAudio && delete i.audio, (a = i.audio))
                  ) {
                    var o = this.levels[this.level].audioCodec,
                      s = navigator.userAgent.toLowerCase()
                    o &&
                      this.audioCodecSwap &&
                      (v.logger.log('swapping playlist audio codec'),
                      (o =
                        -1 !== o.indexOf('mp4a.40.5')
                          ? 'mp4a.40.2'
                          : 'mp4a.40.5')),
                      this.audioCodecSwitch &&
                        1 !== a.metadata.channelCount &&
                        -1 === s.indexOf('firefox') &&
                        (o = 'mp4a.40.5'),
                      -1 !== s.indexOf('android') &&
                        'audio/mpeg' !== a.container &&
                        ((o = 'mp4a.40.2'),
                        v.logger.log('Android: force audio codec to ' + o)),
                      (a.levelCodec = o),
                      (a.id = e.id)
                  }
                  for (n in ((a = i.video) &&
                    ((a.levelCodec = this.levels[this.level].videoCodec),
                    (a.id = e.id)),
                  this.hls.trigger(l.default.BUFFER_CODECS, i),
                  i)) {
                    ;(a = i[n]),
                      v.logger.log(
                        'main track:' +
                          n +
                          ',container:' +
                          a.container +
                          ',codecs[level/parsed]=[' +
                          a.levelCodec +
                          '/' +
                          a.codec +
                          ']'
                      )
                    var u = a.initSegment
                    u &&
                      ((this.appended = !0),
                      (this.pendingBuffering = !0),
                      this.hls.trigger(l.default.BUFFER_APPENDING, {
                        type: n,
                        data: u,
                        parent: 'main',
                        content: 'initSegment'
                      }))
                  }
                  this.tick()
                }
              }
            },
            {
              key: 'onFragParsingData',
              value: function(e) {
                var t = this,
                  r = this.fragCurrent,
                  i = e.frag
                if (
                  r &&
                  'main' === e.id &&
                  i.sn === r.sn &&
                  i.level === r.level &&
                  ('audio' !== e.type || !this.altAudio) &&
                  this.state === E.PARSING
                ) {
                  var n = this.levels[this.level],
                    a = r
                  if (
                    (isNaN(e.endPTS) &&
                      ((e.endPTS = e.startPTS + r.duration),
                      (e.endDTS = e.startDTS + r.duration)),
                    !0 === e.hasAudio &&
                      a.addElementaryStream(
                        d.default.ElementaryStreamTypes.AUDIO
                      ),
                    !0 === e.hasVideo &&
                      a.addElementaryStream(
                        d.default.ElementaryStreamTypes.VIDEO
                      ),
                    v.logger.log(
                      'Parsed ' +
                        e.type +
                        ',PTS:[' +
                        e.startPTS.toFixed(3) +
                        ',' +
                        e.endPTS.toFixed(3) +
                        '],DTS:[' +
                        e.startDTS.toFixed(3) +
                        '/' +
                        e.endDTS.toFixed(3) +
                        '],nb:' +
                        e.nb +
                        ',dropped:' +
                        (e.dropped || 0)
                    ),
                    'video' === e.type)
                  )
                    if (((a.dropped = e.dropped), a.dropped))
                      if (a.backtracked)
                        v.logger.warn(
                          'Already backtracked on this fragment, appending with the gap',
                          a.sn
                        )
                      else {
                        var o = n.details
                        if (!o || a.sn !== o.startSN)
                          return (
                            v.logger.warn(
                              'missing video frame(s), backtracking fragment',
                              a.sn
                            ),
                            this.fragmentTracker.removeFragment(a),
                            (a.backtracked = !0),
                            (this.nextLoadPosition = e.startPTS),
                            (this.state = E.IDLE),
                            (this.fragPrevious = a),
                            void this.tick()
                          )
                        v.logger.warn(
                          'missing video frame(s) on first frag, appending with gap',
                          a.sn
                        )
                      }
                    else a.backtracked = !1
                  var s = c.updateFragPTSDTS(
                      n.details,
                      a,
                      e.startPTS,
                      e.endPTS,
                      e.startDTS,
                      e.endDTS
                    ),
                    u = this.hls
                  u.trigger(l.default.LEVEL_PTS_UPDATED, {
                    details: n.details,
                    level: this.level,
                    drift: s,
                    type: e.type,
                    start: e.startPTS,
                    end: e.endPTS
                  }),
                    [e.data1, e.data2].forEach(function(r) {
                      r &&
                        r.length &&
                        t.state === E.PARSING &&
                        ((t.appended = !0),
                        (t.pendingBuffering = !0),
                        u.trigger(l.default.BUFFER_APPENDING, {
                          type: e.type,
                          data: r,
                          parent: 'main',
                          content: 'data'
                        }))
                    }),
                    this.tick()
                }
              }
            },
            {
              key: 'onFragParsed',
              value: function(e) {
                var t = this.fragCurrent,
                  r = e.frag
                t &&
                  'main' === e.id &&
                  r.sn === t.sn &&
                  r.level === t.level &&
                  this.state === E.PARSING &&
                  ((this.stats.tparsed = window.performance.now()),
                  (this.state = E.PARSED),
                  this._checkAppendedParsed())
              }
            },
            {
              key: 'onAudioTrackSwitching',
              value: function(e) {
                var t = !!e.url,
                  r = e.id
                if (!t) {
                  if (this.mediaBuffer !== this.media) {
                    v.logger.log(
                      'switching on main audio, use media.buffered to schedule main fragment loading'
                    ),
                      (this.mediaBuffer = this.media)
                    var i = this.fragCurrent
                    i.loader &&
                      (v.logger.log(
                        'switching to main audio track, cancel main fragment load'
                      ),
                      i.loader.abort()),
                      (this.fragCurrent = null),
                      (this.fragPrevious = null),
                      this.demuxer &&
                        (this.demuxer.destroy(), (this.demuxer = null)),
                      (this.state = E.IDLE)
                  }
                  var n = this.hls
                  n.trigger(l.default.BUFFER_FLUSHING, {
                    startOffset: 0,
                    endOffset: Number.POSITIVE_INFINITY,
                    type: 'audio'
                  }),
                    n.trigger(l.default.AUDIO_TRACK_SWITCHED, { id: r }),
                    (this.altAudio = !1)
                }
              }
            },
            {
              key: 'onAudioTrackSwitched',
              value: function(e) {
                var t = e.id,
                  r = !!this.hls.audioTracks[t].url
                if (r) {
                  var i = this.videoBuffer
                  i &&
                    this.mediaBuffer !== i &&
                    (v.logger.log(
                      'switching on alternate audio, use video.buffered to schedule main fragment loading'
                    ),
                    (this.mediaBuffer = i))
                }
                ;(this.altAudio = r), this.tick()
              }
            },
            {
              key: 'onBufferCreated',
              value: function(e) {
                var t = e.tracks,
                  r = void 0,
                  i = void 0,
                  n = !1
                for (var a in t) {
                  var o = t[a]
                  'main' === o.id
                    ? ((i = a),
                      (r = o),
                      'video' === a && (this.videoBuffer = t[a].buffer))
                    : (n = !0)
                }
                n && r
                  ? (v.logger.log(
                      'alternate track found, use ' +
                        i +
                        '.buffered to schedule main fragment loading'
                    ),
                    (this.mediaBuffer = r.buffer))
                  : (this.mediaBuffer = this.media)
              }
            },
            {
              key: 'onBufferAppended',
              value: function(e) {
                if ('main' === e.parent) {
                  var t = this.state
                  ;(t !== E.PARSING && t !== E.PARSED) ||
                    ((this.pendingBuffering = e.pending > 0),
                    this._checkAppendedParsed())
                }
              }
            },
            {
              key: '_checkAppendedParsed',
              value: function() {
                if (
                  !(
                    this.state !== E.PARSED ||
                    (this.appended && this.pendingBuffering)
                  )
                ) {
                  var e = this.fragCurrent
                  if (e) {
                    var t = this.mediaBuffer ? this.mediaBuffer : this.media
                    v.logger.log(
                      'main buffered : ' + h.default.toString(t.buffered)
                    ),
                      (this.fragPrevious = e)
                    var r = this.stats
                    ;(r.tbuffered = window.performance.now()),
                      (this.fragLastKbps = Math.round(
                        (8 * r.total) / (r.tbuffered - r.tfirst)
                      )),
                      this.hls.trigger(l.default.FRAG_BUFFERED, {
                        stats: r,
                        frag: e,
                        id: 'main'
                      }),
                      (this.state = E.IDLE)
                  }
                  this.tick()
                }
              }
            },
            {
              key: 'onError',
              value: function(e) {
                var t = e.frag || this.fragCurrent
                if (!t || 'main' === t.type) {
                  var r =
                    !!this.media &&
                    o.BufferHelper.isBuffered(
                      this.media,
                      this.media.currentTime
                    ) &&
                    o.BufferHelper.isBuffered(
                      this.media,
                      this.media.currentTime + 0.5
                    )
                  switch (e.details) {
                    case p.ErrorDetails.FRAG_LOAD_ERROR:
                    case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case p.ErrorDetails.KEY_LOAD_ERROR:
                    case p.ErrorDetails.KEY_LOAD_TIMEOUT:
                      if (!e.fatal)
                        if (
                          this.fragLoadError + 1 <=
                          this.config.fragLoadingMaxRetry
                        ) {
                          var i = Math.min(
                            Math.pow(2, this.fragLoadError) *
                              this.config.fragLoadingRetryDelay,
                            this.config.fragLoadingMaxRetryTimeout
                          )
                          v.logger.warn(
                            'mediaController: frag loading failed, retry in ' +
                              i +
                              ' ms'
                          ),
                            (this.retryDate = window.performance.now() + i),
                            this.loadedmetadata ||
                              ((this.startFragRequested = !1),
                              (this.nextLoadPosition = this.startPosition)),
                            this.fragLoadError++,
                            (this.state = E.FRAG_LOADING_WAITING_RETRY)
                        } else
                          v.logger.error(
                            'mediaController: ' +
                              e.details +
                              ' reaches max retry, redispatch as fatal ...'
                          ),
                            (e.fatal = !0),
                            (this.state = E.ERROR)
                      break
                    case p.ErrorDetails.LEVEL_LOAD_ERROR:
                    case p.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                      this.state !== E.ERROR &&
                        (e.fatal
                          ? ((this.state = E.ERROR),
                            v.logger.warn(
                              'streamController: ' +
                                e.details +
                                ',switch to ' +
                                this.state +
                                ' state ...'
                            ))
                          : e.levelRetry ||
                            this.state !== E.WAITING_LEVEL ||
                            (this.state = E.IDLE))
                      break
                    case p.ErrorDetails.BUFFER_FULL_ERROR:
                      'main' !== e.parent ||
                        (this.state !== E.PARSING && this.state !== E.PARSED) ||
                        (r
                          ? (this._reduceMaxBufferLength(
                              this.config.maxBufferLength
                            ),
                            (this.state = E.IDLE))
                          : (v.logger.warn(
                              'buffer full error also media.currentTime is not buffered, flush everything'
                            ),
                            (this.fragCurrent = null),
                            this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                  }
                }
              }
            },
            {
              key: '_reduceMaxBufferLength',
              value: function(e) {
                var t = this.config
                return (
                  t.maxMaxBufferLength >= e &&
                  ((t.maxMaxBufferLength /= 2),
                  v.logger.warn(
                    'main:reduce max buffer length to ' +
                      t.maxMaxBufferLength +
                      's'
                  ),
                  !0)
                )
              }
            },
            {
              key: '_checkBuffer',
              value: function() {
                var e = this.config,
                  t = this.media
                if (t && 0 !== t.readyState) {
                  var r = t.currentTime,
                    i = (this.mediaBuffer ? this.mediaBuffer : t).buffered
                  if (!this.loadedmetadata && i.length)
                    (this.loadedmetadata = !0), this._seekToStartPos()
                  else if (this.immediateSwitch) this.immediateLevelSwitchEnd()
                  else {
                    var n = !(
                        (t.paused && t.readyState > 1) ||
                        t.ended ||
                        0 === t.buffered.length
                      ),
                      a = window.performance.now()
                    if (r !== this.lastCurrentTime)
                      this.stallReported &&
                        (v.logger.warn(
                          'playback not stuck anymore @' +
                            r +
                            ', after ' +
                            Math.round(a - this.stalled) +
                            'ms'
                        ),
                        (this.stallReported = !1)),
                        (this.stalled = null),
                        (this.nudgeRetry = 0)
                    else if (n) {
                      var s = a - this.stalled,
                        l = o.BufferHelper.bufferInfo(t, r, e.maxBufferHole)
                      if (!this.stalled) return void (this.stalled = a)
                      s >= 1e3 && this._reportStall(l.len),
                        this._tryFixBufferStall(l, s)
                    }
                  }
                }
              }
            },
            {
              key: 'onFragLoadEmergencyAborted',
              value: function() {
                ;(this.state = E.IDLE),
                  this.loadedmetadata ||
                    ((this.startFragRequested = !1),
                    (this.nextLoadPosition = this.startPosition)),
                  this.tick()
              }
            },
            {
              key: 'onBufferFlushed',
              value: function() {
                var e = this.mediaBuffer ? this.mediaBuffer : this.media
                e &&
                  this.fragmentTracker.detectEvictedFragments(
                    d.default.ElementaryStreamTypes.VIDEO,
                    e.buffered
                  ),
                  (this.state = E.IDLE),
                  (this.fragPrevious = null)
              }
            },
            {
              key: 'swapAudioCodec',
              value: function() {
                this.audioCodecSwap = !this.audioCodecSwap
              }
            },
            {
              key: 'computeLivePosition',
              value: function(e, t) {
                var r =
                  void 0 !== this.config.liveSyncDuration
                    ? this.config.liveSyncDuration
                    : this.config.liveSyncDurationCount * t.targetduration
                return e + Math.max(0, t.totalduration - r)
              }
            },
            {
              key: '_tryFixBufferStall',
              value: function(e, t) {
                var r = this.config,
                  i = this.media.currentTime,
                  n = this.fragmentTracker.getPartialFragment(i)
                n && this._trySkipBufferHole(n),
                  e.len > 0.5 &&
                    t > 1e3 * r.highBufferWatchdogPeriod &&
                    ((this.stalled = null), this._tryNudgeBuffer())
              }
            },
            {
              key: '_reportStall',
              value: function(e) {
                var t = this.hls,
                  r = this.media
                this.stallReported ||
                  ((this.stallReported = !0),
                  v.logger.warn(
                    'Playback stalling at @' +
                      r.currentTime +
                      ' due to low buffer'
                  ),
                  t.trigger(l.default.ERROR, {
                    type: p.ErrorTypes.MEDIA_ERROR,
                    details: p.ErrorDetails.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    buffer: e
                  }))
              }
            },
            {
              key: '_trySkipBufferHole',
              value: function(e) {
                for (
                  var t = this.hls,
                    r = this.media,
                    i = r.currentTime,
                    n = 0,
                    a = 0;
                  a < r.buffered.length;
                  a++
                ) {
                  var o = r.buffered.start(a)
                  if (i >= n && i < o)
                    return (
                      (r.currentTime = Math.max(o, r.currentTime + 0.1)),
                      v.logger.warn(
                        'skipping hole, adjusting currentTime from ' +
                          i +
                          ' to ' +
                          r.currentTime
                      ),
                      (this.stalled = null),
                      void t.trigger(l.default.ERROR, {
                        type: p.ErrorTypes.MEDIA_ERROR,
                        details: p.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                        fatal: !1,
                        reason:
                          'fragment loaded with buffer holes, seeking from ' +
                          i +
                          ' to ' +
                          r.currentTime,
                        frag: e
                      })
                    )
                  n = r.buffered.end(a)
                }
              }
            },
            {
              key: '_tryNudgeBuffer',
              value: function() {
                var e = this.config,
                  t = this.hls,
                  r = this.media,
                  i = r.currentTime,
                  n = (this.nudgeRetry || 0) + 1
                if (((this.nudgeRetry = n), n < e.nudgeMaxRetry)) {
                  var a = i + n * e.nudgeOffset
                  v.logger.log('adjust currentTime from ' + i + ' to ' + a),
                    (r.currentTime = a),
                    t.trigger(l.default.ERROR, {
                      type: p.ErrorTypes.MEDIA_ERROR,
                      details: p.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                      fatal: !1
                    })
                } else
                  v.logger.error(
                    'still stuck in high buffer @' +
                      i +
                      ' after ' +
                      e.nudgeMaxRetry +
                      ', raise fatal error'
                  ),
                    t.trigger(l.default.ERROR, {
                      type: p.ErrorTypes.MEDIA_ERROR,
                      details: p.ErrorDetails.BUFFER_STALLED_ERROR,
                      fatal: !0
                    })
              }
            },
            {
              key: '_seekToStartPos',
              value: function() {
                var e = this.media,
                  t = e.currentTime,
                  r = e.seeking ? t : this.startPosition
                t !== r &&
                  (v.logger.log(
                    'target start position not buffered, seek to buffered.start(0) ' +
                      r +
                      ' from current time ' +
                      t +
                      ' '
                  ),
                  (e.currentTime = r))
              }
            },
            {
              key: 'state',
              set: function(e) {
                if (this.state !== e) {
                  var t = this.state
                  ;(this._state = e),
                    v.logger.log('main stream:' + t + '->' + e),
                    this.hls.trigger(l.default.STREAM_STATE_TRANSITION, {
                      previousState: t,
                      nextState: e
                    })
                }
              },
              get: function() {
                return this._state
              }
            },
            {
              key: 'currentLevel',
              get: function() {
                var e = this.media
                if (e) {
                  var t = this.getBufferedFrag(e.currentTime)
                  if (t) return t.level
                }
                return -1
              }
            },
            {
              key: 'nextBufferedFrag',
              get: function() {
                var e = this.media
                return e
                  ? this.followingBufferedFrag(
                      this.getBufferedFrag(e.currentTime)
                    )
                  : null
              }
            },
            {
              key: 'nextLevel',
              get: function() {
                var e = this.nextBufferedFrag
                return e ? e.level : -1
              }
            },
            {
              key: 'liveSyncPosition',
              get: function() {
                return this._liveSyncPosition
              },
              set: function(e) {
                this._liveSyncPosition = e
              }
            }
          ]),
          t
        )
      })(y.default)
    t.default = T
  },
  function(e, t, r) {
    function i(e) {
      var t = {}
      function r(i) {
        if (t[i]) return t[i].exports
        var n = (t[i] = { i: i, l: !1, exports: {} })
        return e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
      }
      ;(r.m = e),
        (r.c = t),
        (r.i = function(e) {
          return e
        }),
        (r.d = function(e, t, i) {
          r.o(e, t) ||
            Object.defineProperty(e, t, {
              configurable: !1,
              enumerable: !0,
              get: i
            })
        }),
        (r.r = function(e) {
          Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (r.n = function(e) {
          var t =
            e && e.__esModule
              ? function() {
                  return e.default
                }
              : function() {
                  return e
                }
          return r.d(t, 'a', t), t
        }),
        (r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (r.p = '/'),
        (r.oe = function(e) {
          throw (console.error(e), e)
        })
      var i = r((r.s = ENTRY_MODULE))
      return i.default || i
    }
    function n(e) {
      return (e + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
    }
    function a(e, t, i) {
      var a = {}
      a[i] = []
      var o = t.toString(),
        s = o.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/)
      if (!s) return a
      for (
        var l,
          u = s[1],
          d = new RegExp(
            '(\\\\n|\\W)' +
              n(u) +
              '\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',
            'g'
          );
        (l = d.exec(o));

      )
        'dll-reference' !== l[3] && a[i].push(l[3])
      for (
        d = new RegExp(
          '\\(' +
            n(u) +
            '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',
          'g'
        );
        (l = d.exec(o));

      )
        e[l[2]] || (a[i].push(l[1]), (e[l[2]] = r(l[1]).m)),
          (a[l[2]] = a[l[2]] || []),
          a[l[2]].push(l[4])
      for (var f, c = Object.keys(a), h = 0; h < c.length; h++)
        for (var p = 0; p < a[c[h]].length; p++)
          (f = a[c[h]][p]), isNaN(1 * f) || (a[c[h]][p] = 1 * a[c[h]][p])
      return a
    }
    function o(e) {
      return Object.keys(e).reduce(function(t, r) {
        return t || e[r].length > 0
      }, !1)
    }
    e.exports = function(e, t) {
      t = t || {}
      var n = { main: r.m },
        s = t.all
          ? { main: Object.keys(n.main) }
          : (function(e, t) {
              for (
                var r = { main: [t] }, i = { main: [] }, n = { main: {} };
                o(r);

              )
                for (var s = Object.keys(r), l = 0; l < s.length; l++) {
                  var u = s[l],
                    d = r[u].pop()
                  if (((n[u] = n[u] || {}), !n[u][d] && e[u][d])) {
                    ;(n[u][d] = !0), (i[u] = i[u] || []), i[u].push(d)
                    for (
                      var f = a(e, e[u][d], u), c = Object.keys(f), h = 0;
                      h < c.length;
                      h++
                    )
                      (r[c[h]] = r[c[h]] || []),
                        (r[c[h]] = r[c[h]].concat(f[c[h]]))
                  }
                }
              return i
            })(n, e),
        l = ''
      Object.keys(s)
        .filter(function(e) {
          return 'main' !== e
        })
        .forEach(function(e) {
          for (var t = 0; s[e][t]; ) t++
          s[e].push(t),
            (n[e][t] =
              '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'),
            (l =
              l +
              'var ' +
              e +
              ' = (' +
              i.toString().replace('ENTRY_MODULE', JSON.stringify(t)) +
              ')({' +
              s[e]
                .map(function(t) {
                  return JSON.stringify(t) + ': ' + n[e][t].toString()
                })
                .join(',') +
              '});\n')
        }),
        (l =
          l +
          'new ((' +
          i.toString().replace('ENTRY_MODULE', JSON.stringify(e)) +
          ')({' +
          s.main
            .map(function(e) {
              return JSON.stringify(e) + ': ' + n.main[e].toString()
            })
            .join(',') +
          '}))(self);')
      var u = new window.Blob([l], { type: 'text/javascript' })
      if (t.bare) return u
      var d = (
          window.URL ||
          window.webkitURL ||
          window.mozURL ||
          window.msURL
        ).createObjectURL(u),
        f = new window.Worker(d)
      return (f.objectURL = d), f
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    var n = (function() {
      function e(t, r) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.subtle = t),
          (this.aesIV = r)
      }
      return (
        i(e, [
          {
            key: 'decrypt',
            value: function(e, t) {
              return this.subtle.decrypt(
                { name: 'AES-CBC', iv: this.aesIV },
                t,
                e
              )
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = n), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    var n = (function() {
      function e(t, r) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.subtle = t),
          (this.key = r)
      }
      return (
        i(e, [
          {
            key: 'expandKey',
            value: function() {
              return this.subtle.importKey(
                'raw',
                this.key,
                { name: 'AES-CBC' },
                !1,
                ['encrypt', 'decrypt']
              )
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = n), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    function n(e) {
      var t = e.byteLength,
        r = t && new DataView(e).getUint8(t - 1)
      return r ? e.slice(0, t - r) : e
    }
    t.removePadding = n
    var a = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
          (this.subMix = [
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256)
          ]),
          (this.invSubMix = [
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256)
          ]),
          (this.sBox = new Uint32Array(256)),
          (this.invSBox = new Uint32Array(256)),
          (this.key = new Uint32Array(0)),
          this.initTable()
      }
      return (
        i(e, [
          {
            key: 'uint8ArrayToUint32Array_',
            value: function(e) {
              for (
                var t = new DataView(e), r = new Uint32Array(4), i = 0;
                i < 4;
                i++
              )
                r[i] = t.getUint32(4 * i)
              return r
            }
          },
          {
            key: 'initTable',
            value: function() {
              var e = this.sBox,
                t = this.invSBox,
                r = this.subMix,
                i = r[0],
                n = r[1],
                a = r[2],
                o = r[3],
                s = this.invSubMix,
                l = s[0],
                u = s[1],
                d = s[2],
                f = s[3],
                c = new Uint32Array(256),
                h = 0,
                p = 0,
                v = 0
              for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : (v << 1) ^ 283
              for (v = 0; v < 256; v++) {
                var g = p ^ (p << 1) ^ (p << 2) ^ (p << 3) ^ (p << 4)
                ;(g = (g >>> 8) ^ (255 & g) ^ 99), (e[h] = g), (t[g] = h)
                var y = c[h],
                  m = c[y],
                  b = c[m],
                  E = (257 * c[g]) ^ (16843008 * g)
                ;(i[h] = (E << 24) | (E >>> 8)),
                  (n[h] = (E << 16) | (E >>> 16)),
                  (a[h] = (E << 8) | (E >>> 24)),
                  (o[h] = E),
                  (E =
                    (16843009 * b) ^ (65537 * m) ^ (257 * y) ^ (16843008 * h)),
                  (l[g] = (E << 24) | (E >>> 8)),
                  (u[g] = (E << 16) | (E >>> 16)),
                  (d[g] = (E << 8) | (E >>> 24)),
                  (f[g] = E),
                  h ? ((h = y ^ c[c[c[b ^ y]]]), (p ^= c[c[p]])) : (h = p = 1)
              }
            }
          },
          {
            key: 'expandKey',
            value: function(e) {
              for (
                var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0;
                i < t.length && r;

              )
                (r = t[i] === this.key[i]), i++
              if (!r) {
                this.key = t
                var n = (this.keySize = t.length)
                if (4 !== n && 6 !== n && 8 !== n)
                  throw new Error('Invalid aes key size=' + n)
                var a = (this.ksRows = 4 * (n + 6 + 1)),
                  o = void 0,
                  s = void 0,
                  l = (this.keySchedule = new Uint32Array(a)),
                  u = (this.invKeySchedule = new Uint32Array(a)),
                  d = this.sBox,
                  f = this.rcon,
                  c = this.invSubMix,
                  h = c[0],
                  p = c[1],
                  v = c[2],
                  g = c[3],
                  y = void 0,
                  m = void 0
                for (o = 0; o < a; o++)
                  o < n
                    ? (y = l[o] = t[o])
                    : ((m = y),
                      o % n == 0
                        ? ((m =
                            (d[(m = (m << 8) | (m >>> 24)) >>> 24] << 24) |
                            (d[(m >>> 16) & 255] << 16) |
                            (d[(m >>> 8) & 255] << 8) |
                            d[255 & m]),
                          (m ^= f[(o / n) | 0] << 24))
                        : n > 6 &&
                          o % n == 4 &&
                          (m =
                            (d[m >>> 24] << 24) |
                            (d[(m >>> 16) & 255] << 16) |
                            (d[(m >>> 8) & 255] << 8) |
                            d[255 & m]),
                      (l[o] = y = (l[o - n] ^ m) >>> 0))
                for (s = 0; s < a; s++)
                  (o = a - s),
                    (m = 3 & s ? l[o] : l[o - 4]),
                    (u[s] =
                      s < 4 || o <= 4
                        ? m
                        : h[d[m >>> 24]] ^
                          p[d[(m >>> 16) & 255]] ^
                          v[d[(m >>> 8) & 255]] ^
                          g[d[255 & m]]),
                    (u[s] = u[s] >>> 0)
              }
            }
          },
          {
            key: 'networkToHostOrderSwap',
            value: function(e) {
              return (
                (e << 24) |
                ((65280 & e) << 8) |
                ((16711680 & e) >> 8) |
                (e >>> 24)
              )
            }
          },
          {
            key: 'decrypt',
            value: function(e, t, r, i) {
              for (
                var a = this.keySize + 6,
                  o = this.invKeySchedule,
                  s = this.invSBox,
                  l = this.invSubMix,
                  u = l[0],
                  d = l[1],
                  f = l[2],
                  c = l[3],
                  h = this.uint8ArrayToUint32Array_(r),
                  p = h[0],
                  v = h[1],
                  g = h[2],
                  y = h[3],
                  m = new Int32Array(e),
                  b = new Int32Array(m.length),
                  E = void 0,
                  T = void 0,
                  k = void 0,
                  _ = void 0,
                  S = void 0,
                  w = void 0,
                  A = void 0,
                  R = void 0,
                  O = void 0,
                  L = void 0,
                  D = void 0,
                  P = void 0,
                  C = void 0,
                  I = void 0,
                  x = this.networkToHostOrderSwap;
                t < m.length;

              ) {
                for (
                  O = x(m[t]),
                    L = x(m[t + 1]),
                    D = x(m[t + 2]),
                    P = x(m[t + 3]),
                    S = O ^ o[0],
                    w = P ^ o[1],
                    A = D ^ o[2],
                    R = L ^ o[3],
                    C = 4,
                    I = 1;
                  I < a;
                  I++
                )
                  (E =
                    u[S >>> 24] ^
                    d[(w >> 16) & 255] ^
                    f[(A >> 8) & 255] ^
                    c[255 & R] ^
                    o[C]),
                    (T =
                      u[w >>> 24] ^
                      d[(A >> 16) & 255] ^
                      f[(R >> 8) & 255] ^
                      c[255 & S] ^
                      o[C + 1]),
                    (k =
                      u[A >>> 24] ^
                      d[(R >> 16) & 255] ^
                      f[(S >> 8) & 255] ^
                      c[255 & w] ^
                      o[C + 2]),
                    (_ =
                      u[R >>> 24] ^
                      d[(S >> 16) & 255] ^
                      f[(w >> 8) & 255] ^
                      c[255 & A] ^
                      o[C + 3]),
                    (S = E),
                    (w = T),
                    (A = k),
                    (R = _),
                    (C += 4)
                ;(E =
                  (s[S >>> 24] << 24) ^
                  (s[(w >> 16) & 255] << 16) ^
                  (s[(A >> 8) & 255] << 8) ^
                  s[255 & R] ^
                  o[C]),
                  (T =
                    (s[w >>> 24] << 24) ^
                    (s[(A >> 16) & 255] << 16) ^
                    (s[(R >> 8) & 255] << 8) ^
                    s[255 & S] ^
                    o[C + 1]),
                  (k =
                    (s[A >>> 24] << 24) ^
                    (s[(R >> 16) & 255] << 16) ^
                    (s[(S >> 8) & 255] << 8) ^
                    s[255 & w] ^
                    o[C + 2]),
                  (_ =
                    (s[R >>> 24] << 24) ^
                    (s[(S >> 16) & 255] << 16) ^
                    (s[(w >> 8) & 255] << 8) ^
                    s[255 & A] ^
                    o[C + 3]),
                  (C += 3),
                  (b[t] = x(E ^ p)),
                  (b[t + 1] = x(_ ^ v)),
                  (b[t + 2] = x(k ^ g)),
                  (b[t + 3] = x(T ^ y)),
                  (p = O),
                  (v = L),
                  (g = D),
                  (y = P),
                  (t += 4)
              }
              return i ? n(b.buffer) : b.buffer
            }
          },
          {
            key: 'destroy',
            value: function() {
              ;(this.key = void 0),
                (this.keySize = void 0),
                (this.ksRows = void 0),
                (this.sBox = void 0),
                (this.invSBox = void 0),
                (this.subMix = void 0),
                (this.invSubMix = void 0),
                (this.keySchedule = void 0),
                (this.invKeySchedule = void 0),
                (this.rcon = void 0)
            }
          }
        ]),
        e
      )
    })()
    t.default = a
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = (function(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        return (t.default = e), t
      })(r(37)),
      o = r(0),
      s = r(8),
      l = (i = s) && i.__esModule ? i : { default: i }
    var u = (function() {
      function e(t, r, i) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.observer = t),
          (this.config = i),
          (this.remuxer = r)
      }
      return (
        n(
          e,
          [
            {
              key: 'resetInitSegment',
              value: function(e, t, r, i) {
                this._audioTrack = {
                  container: 'audio/adts',
                  type: 'audio',
                  id: 0,
                  sequenceNumber: 0,
                  isAAC: !0,
                  samples: [],
                  len: 0,
                  manifestCodec: t,
                  duration: i,
                  inputTimeScale: 9e4
                }
              }
            },
            { key: 'resetTimeStamp', value: function() {} },
            {
              key: 'append',
              value: function(e, t, r, i) {
                for (
                  var n = this._audioTrack,
                    s = l.default.getID3Data(e, 0) || [],
                    u = l.default.getTimeStamp(s),
                    d = u ? 90 * u : 9e4 * t,
                    f = 0,
                    c = d,
                    h = e.length,
                    p = s.length,
                    v = [{ pts: c, dts: c, data: s }];
                  p < h - 1;

                )
                  if (a.isHeader(e, p) && p + 5 < h) {
                    a.initTrackConfig(n, this.observer, e, p, n.manifestCodec)
                    var g = a.appendFrame(n, e, p, d, f)
                    if (!g) {
                      o.logger.log('Unable to parse AAC frame')
                      break
                    }
                    ;(p += g.length), (c = g.sample.pts), f++
                  } else
                    l.default.isHeader(e, p)
                      ? ((s = l.default.getID3Data(e, p)),
                        v.push({ pts: c, dts: c, data: s }),
                        (p += s.length))
                      : p++
                this.remuxer.remux(
                  n,
                  { samples: [] },
                  { samples: v, inputTimeScale: 9e4 },
                  { samples: [] },
                  t,
                  r,
                  i
                )
              }
            },
            { key: 'destroy', value: function() {} }
          ],
          [
            {
              key: 'probe',
              value: function(e) {
                if (!e) return !1
                for (
                  var t = (l.default.getID3Data(e, 0) || []).length,
                    r = e.length;
                  t < r;
                  t++
                )
                  if (a.probe(e, t))
                    return o.logger.log('ADTS sync word found !'), !0
                return !1
              }
            }
          ]
        ),
        e
      )
    })()
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = (function(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        return (t.default = e), t
      })(r(37)),
      a = f(r(38)),
      o = f(r(1)),
      s = f(r(80)),
      l = f(r(81)),
      u = r(0),
      d = r(2)
    function f(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var c = { video: 1, audio: 2, id3: 3, text: 4 },
      h = (function() {
        function e(t, r, i, n) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.observer = t),
            (this.config = i),
            (this.typeSupported = n),
            (this.remuxer = r),
            (this.sampleAes = null)
        }
        return (
          i(
            e,
            [
              {
                key: 'setDecryptData',
                value: function(e) {
                  null != e && null != e.key && 'SAMPLE-AES' === e.method
                    ? (this.sampleAes = new l.default(
                        this.observer,
                        this.config,
                        e,
                        this.discardEPB
                      ))
                    : (this.sampleAes = null)
                }
              },
              {
                key: 'resetInitSegment',
                value: function(t, r, i, n) {
                  ;(this.pmtParsed = !1),
                    (this._pmtId = -1),
                    (this._avcTrack = e.createTrack('video', n)),
                    (this._audioTrack = e.createTrack('audio', n)),
                    (this._id3Track = e.createTrack('id3', n)),
                    (this._txtTrack = e.createTrack('text', n)),
                    (this.aacOverFlow = null),
                    (this.aacLastPTS = null),
                    (this.avcSample = null),
                    (this.audioCodec = r),
                    (this.videoCodec = i),
                    (this._duration = n)
                }
              },
              { key: 'resetTimeStamp', value: function() {} },
              {
                key: 'append',
                value: function(t, r, i, n) {
                  var a = void 0,
                    s = t.length,
                    l = void 0,
                    f = void 0,
                    c = void 0,
                    h = void 0,
                    p = !1
                  this.contiguous = i
                  var v = this.pmtParsed,
                    g = this._avcTrack,
                    y = this._audioTrack,
                    m = this._id3Track,
                    b = g.pid,
                    E = y.pid,
                    T = m.pid,
                    k = this._pmtId,
                    _ = g.pesData,
                    S = y.pesData,
                    w = m.pesData,
                    A = this._parsePAT,
                    R = this._parsePMT,
                    O = this._parsePES,
                    L = this._parseAVCPES.bind(this),
                    D = this._parseAACPES.bind(this),
                    P = this._parseMPEGPES.bind(this),
                    C = this._parseID3PES.bind(this),
                    I = e._syncOffset(t)
                  for (s -= (s + I) % 188, a = I; a < s; a += 188)
                    if (71 === t[a]) {
                      if (
                        ((l = !!(64 & t[a + 1])),
                        (f = ((31 & t[a + 1]) << 8) + t[a + 2]),
                        (48 & t[a + 3]) >> 4 > 1)
                      ) {
                        if ((c = a + 5 + t[a + 4]) === a + 188) continue
                      } else c = a + 4
                      switch (f) {
                        case b:
                          l &&
                            (_ && (h = O(_)) && void 0 !== h.pts && L(h, !1),
                            (_ = { data: [], size: 0 })),
                            _ &&
                              (_.data.push(t.subarray(c, a + 188)),
                              (_.size += a + 188 - c))
                          break
                        case E:
                          l &&
                            (S &&
                              (h = O(S)) &&
                              void 0 !== h.pts &&
                              (y.isAAC ? D(h) : P(h)),
                            (S = { data: [], size: 0 })),
                            S &&
                              (S.data.push(t.subarray(c, a + 188)),
                              (S.size += a + 188 - c))
                          break
                        case T:
                          l &&
                            (w && (h = O(w)) && void 0 !== h.pts && C(h),
                            (w = { data: [], size: 0 })),
                            w &&
                              (w.data.push(t.subarray(c, a + 188)),
                              (w.size += a + 188 - c))
                          break
                        case 0:
                          l && (c += t[c] + 1), (k = this._pmtId = A(t, c))
                          break
                        case k:
                          l && (c += t[c] + 1)
                          var x = R(
                            t,
                            c,
                            !0 === this.typeSupported.mpeg ||
                              !0 === this.typeSupported.mp3,
                            null != this.sampleAes
                          )
                          ;(b = x.avc) > 0 && (g.pid = b),
                            (E = x.audio) > 0 &&
                              ((y.pid = E), (y.isAAC = x.isAAC)),
                            (T = x.id3) > 0 && (m.pid = T),
                            p &&
                              !v &&
                              (u.logger.log('reparse from beginning'),
                              (p = !1),
                              (a = I - 188)),
                            (v = this.pmtParsed = !0)
                          break
                        case 17:
                        case 8191:
                          break
                        default:
                          p = !0
                      }
                    } else
                      this.observer.trigger(o.default.ERROR, {
                        type: d.ErrorTypes.MEDIA_ERROR,
                        details: d.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !1,
                        reason: 'TS packet did not start with 0x47'
                      })
                  _ && (h = O(_)) && void 0 !== h.pts
                    ? (L(h, !0), (g.pesData = null))
                    : (g.pesData = _),
                    S && (h = O(S)) && void 0 !== h.pts
                      ? (y.isAAC ? D(h) : P(h), (y.pesData = null))
                      : (S &&
                          S.size &&
                          u.logger.log(
                            'last AAC PES packet truncated,might overlap between fragments'
                          ),
                        (y.pesData = S)),
                    w && (h = O(w)) && void 0 !== h.pts
                      ? (C(h), (m.pesData = null))
                      : (m.pesData = w),
                    null == this.sampleAes
                      ? this.remuxer.remux(y, g, m, this._txtTrack, r, i, n)
                      : this.decryptAndRemux(y, g, m, this._txtTrack, r, i, n)
                }
              },
              {
                key: 'decryptAndRemux',
                value: function(e, t, r, i, n, a, o) {
                  if (e.samples && e.isAAC) {
                    var s = this
                    this.sampleAes.decryptAacSamples(e.samples, 0, function() {
                      s.decryptAndRemuxAvc(e, t, r, i, n, a, o)
                    })
                  } else this.decryptAndRemuxAvc(e, t, r, i, n, a, o)
                }
              },
              {
                key: 'decryptAndRemuxAvc',
                value: function(e, t, r, i, n, a, o) {
                  if (t.samples) {
                    var s = this
                    this.sampleAes.decryptAvcSamples(
                      t.samples,
                      0,
                      0,
                      function() {
                        s.remuxer.remux(e, t, r, i, n, a, o)
                      }
                    )
                  } else this.remuxer.remux(e, t, r, i, n, a, o)
                }
              },
              {
                key: 'destroy',
                value: function() {
                  ;(this._initPTS = this._initDTS = void 0),
                    (this._duration = 0)
                }
              },
              {
                key: '_parsePAT',
                value: function(e, t) {
                  return ((31 & e[t + 10]) << 8) | e[t + 11]
                }
              },
              {
                key: '_parsePMT',
                value: function(e, t, r, i) {
                  var n,
                    a = void 0,
                    o = { audio: -1, avc: -1, id3: -1, isAAC: !0 }
                  for (
                    n = t + 3 + (((15 & e[t + 1]) << 8) | e[t + 2]) - 4,
                      t += 12 + (((15 & e[t + 10]) << 8) | e[t + 11]);
                    t < n;

                  ) {
                    switch (((a = ((31 & e[t + 1]) << 8) | e[t + 2]), e[t])) {
                      case 207:
                        if (!i) {
                          u.logger.log('unkown stream type:' + e[t])
                          break
                        }
                      case 15:
                        ;-1 === o.audio && (o.audio = a)
                        break
                      case 21:
                        ;-1 === o.id3 && (o.id3 = a)
                        break
                      case 219:
                        if (!i) {
                          u.logger.log('unkown stream type:' + e[t])
                          break
                        }
                      case 27:
                        ;-1 === o.avc && (o.avc = a)
                        break
                      case 3:
                      case 4:
                        r
                          ? -1 === o.audio && ((o.audio = a), (o.isAAC = !1))
                          : u.logger.log(
                              'MPEG audio found, not supported in this browser for now'
                            )
                        break
                      case 36:
                        u.logger.warn(
                          'HEVC stream type found, not supported for now'
                        )
                        break
                      default:
                        u.logger.log('unkown stream type:' + e[t])
                    }
                    t += 5 + (((15 & e[t + 3]) << 8) | e[t + 4])
                  }
                  return o
                }
              },
              {
                key: '_parsePES',
                value: function(e) {
                  var t = 0,
                    r = void 0,
                    i = void 0,
                    n = void 0,
                    a = void 0,
                    o = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0,
                    f = e.data
                  if (!e || 0 === e.size) return null
                  for (; f[0].length < 19 && f.length > 1; ) {
                    var c = new Uint8Array(f[0].length + f[1].length)
                    c.set(f[0]),
                      c.set(f[1], f[0].length),
                      (f[0] = c),
                      f.splice(1, 1)
                  }
                  if (1 === ((r = f[0])[0] << 16) + (r[1] << 8) + r[2]) {
                    if ((n = (r[4] << 8) + r[5]) && n > e.size - 6) return null
                    192 & (i = r[7]) &&
                      ((s =
                        536870912 * (14 & r[9]) +
                        4194304 * (255 & r[10]) +
                        16384 * (254 & r[11]) +
                        128 * (255 & r[12]) +
                        (254 & r[13]) / 2) > 4294967295 && (s -= 8589934592),
                      64 & i
                        ? ((l =
                            536870912 * (14 & r[14]) +
                            4194304 * (255 & r[15]) +
                            16384 * (254 & r[16]) +
                            128 * (255 & r[17]) +
                            (254 & r[18]) / 2) > 4294967295 &&
                            (l -= 8589934592),
                          s - l > 54e5 &&
                            (u.logger.warn(
                              Math.round((s - l) / 9e4) +
                                's delta between PTS and DTS, align them'
                            ),
                            (s = l)))
                        : (l = s)),
                      (d = (a = r[8]) + 9),
                      (e.size -= d),
                      (o = new Uint8Array(e.size))
                    for (var h = 0, p = f.length; h < p; h++) {
                      var v = (r = f[h]).byteLength
                      if (d) {
                        if (d > v) {
                          d -= v
                          continue
                        }
                        ;(r = r.subarray(d)), (v -= d), (d = 0)
                      }
                      o.set(r, t), (t += v)
                    }
                    return (
                      n && (n -= a + 3), { data: o, pts: s, dts: l, len: n }
                    )
                  }
                  return null
                }
              },
              {
                key: 'pushAccesUnit',
                value: function(e, t) {
                  if (e.units.length && e.frame) {
                    var r = t.samples,
                      i = r.length
                    !this.config.forceKeyFrameOnDiscontinuity ||
                    !0 === e.key ||
                    (t.sps && (i || this.contiguous))
                      ? ((e.id = i), r.push(e))
                      : t.dropped++
                  }
                  e.debug.length &&
                    u.logger.log(e.pts + '/' + e.dts + ':' + e.debug)
                }
              },
              {
                key: '_parseAVCPES',
                value: function(e, t) {
                  var r = this,
                    i = this._avcTrack,
                    n = this._parseAVCNALu(e.data),
                    a = void 0,
                    o = this.avcSample,
                    l = void 0,
                    u = !1,
                    d = void 0,
                    f = this.pushAccesUnit.bind(this),
                    c = function(e, t, r, i) {
                      return { key: e, pts: t, dts: r, units: [], debug: i }
                    }
                  ;(e.data = null),
                    o &&
                      n.length &&
                      !i.audFound &&
                      (f(o, i), (o = this.avcSample = c(!1, e.pts, e.dts, ''))),
                    n.forEach(function(t) {
                      switch (t.type) {
                        case 1:
                          ;(l = !0),
                            o || (o = r.avcSample = c(!0, e.pts, e.dts, '')),
                            (o.frame = !0)
                          var n = t.data
                          if (u && n.length > 4) {
                            var h = new s.default(n).readSliceType()
                            ;(2 !== h && 4 !== h && 7 !== h && 9 !== h) ||
                              (o.key = !0)
                          }
                          break
                        case 5:
                          ;(l = !0),
                            o || (o = r.avcSample = c(!0, e.pts, e.dts, '')),
                            (o.key = !0),
                            (o.frame = !0)
                          break
                        case 6:
                          ;(l = !0),
                            (a = new s.default(
                              r.discardEPB(t.data)
                            )).readUByte()
                          for (
                            var p = 0, v = 0, g = !1, y = 0;
                            !g && a.bytesAvailable > 1;

                          ) {
                            p = 0
                            do {
                              p += y = a.readUByte()
                            } while (255 === y)
                            v = 0
                            do {
                              v += y = a.readUByte()
                            } while (255 === y)
                            if (4 === p && 0 !== a.bytesAvailable) {
                              if (((g = !0), 181 === a.readUByte()))
                                if (49 === a.readUShort())
                                  if (1195456820 === a.readUInt())
                                    if (3 === a.readUByte()) {
                                      var m = a.readUByte(),
                                        b = 31 & m,
                                        E = [m, a.readUByte()]
                                      for (d = 0; d < b; d++)
                                        E.push(a.readUByte()),
                                          E.push(a.readUByte()),
                                          E.push(a.readUByte())
                                      r._insertSampleInOrder(
                                        r._txtTrack.samples,
                                        { type: 3, pts: e.pts, bytes: E }
                                      )
                                    }
                            } else if (v < a.bytesAvailable)
                              for (d = 0; d < v; d++) a.readUByte()
                          }
                          break
                        case 7:
                          if (((l = !0), (u = !0), !i.sps)) {
                            var T = (a = new s.default(t.data)).readSPS()
                            ;(i.width = T.width),
                              (i.height = T.height),
                              (i.pixelRatio = T.pixelRatio),
                              (i.sps = [t.data]),
                              (i.duration = r._duration)
                            var k = t.data.subarray(1, 4),
                              _ = 'avc1.'
                            for (d = 0; d < 3; d++) {
                              var S = k[d].toString(16)
                              S.length < 2 && (S = '0' + S), (_ += S)
                            }
                            i.codec = _
                          }
                          break
                        case 8:
                          ;(l = !0), i.pps || (i.pps = [t.data])
                          break
                        case 9:
                          ;(l = !1),
                            (i.audFound = !0),
                            o && f(o, i),
                            (o = r.avcSample = c(!1, e.pts, e.dts, ''))
                          break
                        case 12:
                          l = !1
                          break
                        default:
                          ;(l = !1),
                            o && (o.debug += 'unknown NAL ' + t.type + ' ')
                      }
                      o && l && o.units.push(t)
                    }),
                    t && o && (f(o, i), (this.avcSample = null))
                }
              },
              {
                key: '_insertSampleInOrder',
                value: function(e, t) {
                  var r = e.length
                  if (r > 0) {
                    if (t.pts >= e[r - 1].pts) e.push(t)
                    else
                      for (var i = r - 1; i >= 0; i--)
                        if (t.pts < e[i].pts) {
                          e.splice(i, 0, t)
                          break
                        }
                  } else e.push(t)
                }
              },
              {
                key: '_getLastNalUnit',
                value: function() {
                  var e = this.avcSample,
                    t = void 0
                  if (!e || 0 === e.units.length) {
                    var r = this._avcTrack.samples
                    e = r[r.length - 1]
                  }
                  if (e) {
                    var i = e.units
                    t = i[i.length - 1]
                  }
                  return t
                }
              },
              {
                key: '_parseAVCNALu',
                value: function(e) {
                  var t = 0,
                    r = e.byteLength,
                    i = void 0,
                    n = void 0,
                    a = this._avcTrack,
                    o = a.naluState || 0,
                    s = o,
                    l = [],
                    u = void 0,
                    d = -1,
                    f = void 0
                  for (
                    -1 === o && ((d = 0), (f = 31 & e[0]), (o = 0), (t = 1));
                    t < r;

                  )
                    if (((i = e[t++]), o))
                      if (1 !== o)
                        if (i)
                          if (1 === i) {
                            if (d >= 0)
                              (u = { data: e.subarray(d, t - o - 1), type: f }),
                                l.push(u)
                            else {
                              var c = this._getLastNalUnit()
                              if (
                                c &&
                                (s &&
                                  t <= 4 - s &&
                                  c.state &&
                                  (c.data = c.data.subarray(
                                    0,
                                    c.data.byteLength - s
                                  )),
                                (n = t - o - 1) > 0)
                              ) {
                                var h = new Uint8Array(c.data.byteLength + n)
                                h.set(c.data, 0),
                                  h.set(e.subarray(0, n), c.data.byteLength),
                                  (c.data = h)
                              }
                            }
                            t < r
                              ? ((d = t), (f = 31 & e[t]), (o = 0))
                              : (o = -1)
                          } else o = 0
                        else o = 3
                      else o = i ? 0 : 2
                    else o = i ? 0 : 1
                  if (
                    (d >= 0 &&
                      o >= 0 &&
                      ((u = { data: e.subarray(d, r), type: f, state: o }),
                      l.push(u)),
                    0 === l.length)
                  ) {
                    var p = this._getLastNalUnit()
                    if (p) {
                      var v = new Uint8Array(p.data.byteLength + e.byteLength)
                      v.set(p.data, 0),
                        v.set(e, p.data.byteLength),
                        (p.data = v)
                    }
                  }
                  return (a.naluState = o), l
                }
              },
              {
                key: 'discardEPB',
                value: function(e) {
                  for (
                    var t, r = e.byteLength, i = [], n = 1, a = void 0;
                    n < r - 2;

                  )
                    0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2]
                      ? (i.push(n + 2), (n += 2))
                      : n++
                  if (0 === i.length) return e
                  ;(t = r - i.length), (a = new Uint8Array(t))
                  var o = 0
                  for (n = 0; n < t; o++, n++)
                    o === i[0] && (o++, i.shift()), (a[n] = e[o])
                  return a
                }
              },
              {
                key: '_parseAACPES',
                value: function(e) {
                  var t,
                    r,
                    i = this._audioTrack,
                    a = e.data,
                    s = e.pts,
                    l = this.aacOverFlow,
                    f = this.aacLastPTS,
                    c = void 0,
                    h = void 0,
                    p = void 0
                  if (l) {
                    var v = new Uint8Array(l.byteLength + a.byteLength)
                    v.set(l, 0), v.set(a, l.byteLength), (a = v)
                  }
                  for (
                    h = 0, r = a.length;
                    h < r - 1 && !n.isHeader(a, h);
                    h++
                  );
                  if (h) {
                    var g = void 0,
                      y = void 0
                    if (
                      (h < r - 1
                        ? ((g =
                            'AAC PES did not start with ADTS header,offset:' +
                            h),
                          (y = !1))
                        : ((g = 'no ADTS header found in AAC PES'), (y = !0)),
                      u.logger.warn('parsing error:' + g),
                      this.observer.trigger(o.default.ERROR, {
                        type: d.ErrorTypes.MEDIA_ERROR,
                        details: d.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: y,
                        reason: g
                      }),
                      y)
                    )
                      return
                  }
                  if (
                    (n.initTrackConfig(i, this.observer, a, h, this.audioCodec),
                    (c = 0),
                    (t = n.getFrameDuration(i.samplerate)),
                    l && f)
                  ) {
                    var m = f + t
                    Math.abs(m - s) > 1 &&
                      (u.logger.log(
                        'AAC: align PTS for overlapping frames by ' +
                          Math.round((m - s) / 90)
                      ),
                      (s = m))
                  }
                  for (; h < r; )
                    if (n.isHeader(a, h) && h + 5 < r) {
                      var b = n.appendFrame(i, a, h, s, c)
                      if (!b) break
                      ;(h += b.length), (p = b.sample.pts), c++
                    } else h++
                  ;(l = h < r ? a.subarray(h, r) : null),
                    (this.aacOverFlow = l),
                    (this.aacLastPTS = p)
                }
              },
              {
                key: '_parseMPEGPES',
                value: function(e) {
                  for (
                    var t = e.data, r = t.length, i = 0, n = 0, o = e.pts;
                    n < r;

                  )
                    if (a.default.isHeader(t, n)) {
                      var s = a.default.appendFrame(
                        this._audioTrack,
                        t,
                        n,
                        o,
                        i
                      )
                      if (!s) break
                      ;(n += s.length), i++
                    } else n++
                }
              },
              {
                key: '_parseID3PES',
                value: function(e) {
                  this._id3Track.samples.push(e)
                }
              }
            ],
            [
              {
                key: 'probe',
                value: function(t) {
                  var r = e._syncOffset(t)
                  return (
                    !(r < 0) &&
                    (r &&
                      u.logger.warn(
                        'MPEG2-TS detected but first sync word found @ offset ' +
                          r +
                          ', junk ahead ?'
                      ),
                    !0)
                  )
                }
              },
              {
                key: '_syncOffset',
                value: function(e) {
                  for (var t = Math.min(1e3, e.length - 564), r = 0; r < t; ) {
                    if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376])
                      return r
                    r++
                  }
                  return -1
                }
              },
              {
                key: 'createTrack',
                value: function(e, t) {
                  return {
                    container:
                      'video' === e || 'audio' === e ? 'video/mp2t' : void 0,
                    type: e,
                    id: c[e],
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    len: 0,
                    dropped: 'video' === e ? 0 : void 0,
                    isAAC: 'audio' === e || void 0,
                    duration: 'audio' === e ? t : void 0
                  }
                }
              }
            ]
          ),
          e
        )
      })()
    ;(t.default = h), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = r(0)
    var a = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.data = t),
          (this.bytesAvailable = t.byteLength),
          (this.word = 0),
          (this.bitsAvailable = 0)
      }
      return (
        i(e, [
          {
            key: 'loadWord',
            value: function() {
              var e = this.data,
                t = this.bytesAvailable,
                r = e.byteLength - t,
                i = new Uint8Array(4),
                n = Math.min(4, t)
              if (0 === n) throw new Error('no bytes available')
              i.set(e.subarray(r, r + n)),
                (this.word = new DataView(i.buffer).getUint32(0)),
                (this.bitsAvailable = 8 * n),
                (this.bytesAvailable -= n)
            }
          },
          {
            key: 'skipBits',
            value: function(e) {
              var t = void 0
              this.bitsAvailable > e
                ? ((this.word <<= e), (this.bitsAvailable -= e))
                : ((e -= this.bitsAvailable),
                  (e -= (t = e >> 3) >> 3),
                  (this.bytesAvailable -= t),
                  this.loadWord(),
                  (this.word <<= e),
                  (this.bitsAvailable -= e))
            }
          },
          {
            key: 'readBits',
            value: function(e) {
              var t = Math.min(this.bitsAvailable, e),
                r = this.word >>> (32 - t)
              return (
                e > 32 &&
                  n.logger.error('Cannot read more than 32 bits at a time'),
                (this.bitsAvailable -= t),
                this.bitsAvailable > 0
                  ? (this.word <<= t)
                  : this.bytesAvailable > 0 && this.loadWord(),
                (t = e - t) > 0 && this.bitsAvailable
                  ? (r << t) | this.readBits(t)
                  : r
              )
            }
          },
          {
            key: 'skipLZ',
            value: function() {
              var e = void 0
              for (e = 0; e < this.bitsAvailable; ++e)
                if (0 != (this.word & (2147483648 >>> e)))
                  return (this.word <<= e), (this.bitsAvailable -= e), e
              return this.loadWord(), e + this.skipLZ()
            }
          },
          {
            key: 'skipUEG',
            value: function() {
              this.skipBits(1 + this.skipLZ())
            }
          },
          {
            key: 'skipEG',
            value: function() {
              this.skipBits(1 + this.skipLZ())
            }
          },
          {
            key: 'readUEG',
            value: function() {
              var e = this.skipLZ()
              return this.readBits(e + 1) - 1
            }
          },
          {
            key: 'readEG',
            value: function() {
              var e = this.readUEG()
              return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1)
            }
          },
          {
            key: 'readBoolean',
            value: function() {
              return 1 === this.readBits(1)
            }
          },
          {
            key: 'readUByte',
            value: function() {
              return this.readBits(8)
            }
          },
          {
            key: 'readUShort',
            value: function() {
              return this.readBits(16)
            }
          },
          {
            key: 'readUInt',
            value: function() {
              return this.readBits(32)
            }
          },
          {
            key: 'skipScalingList',
            value: function(e) {
              var t = 8,
                r = 8,
                i = void 0
              for (i = 0; i < e; i++)
                0 !== r && (r = (t + this.readEG() + 256) % 256),
                  (t = 0 === r ? t : r)
            }
          },
          {
            key: 'readSPS',
            value: function() {
              var e,
                t,
                r,
                i,
                n = 0,
                a = 0,
                o = 0,
                s = 0,
                l = void 0,
                u = void 0,
                d = void 0,
                f = this.readUByte.bind(this),
                c = this.readBits.bind(this),
                h = this.readUEG.bind(this),
                p = this.readBoolean.bind(this),
                v = this.skipBits.bind(this),
                g = this.skipEG.bind(this),
                y = this.skipUEG.bind(this),
                m = this.skipScalingList.bind(this)
              if (
                (f(),
                (e = f()),
                c(5),
                v(3),
                f(),
                y(),
                100 === e ||
                  110 === e ||
                  122 === e ||
                  244 === e ||
                  44 === e ||
                  83 === e ||
                  86 === e ||
                  118 === e ||
                  128 === e)
              ) {
                var b = h()
                if ((3 === b && v(1), y(), y(), v(1), p()))
                  for (u = 3 !== b ? 8 : 12, d = 0; d < u; d++)
                    p() && m(d < 6 ? 16 : 64)
              }
              y()
              var E = h()
              if (0 === E) h()
              else if (1 === E)
                for (v(1), g(), g(), l = h(), d = 0; d < l; d++) g()
              y(),
                v(1),
                (t = h()),
                (r = h()),
                0 === (i = c(1)) && v(1),
                v(1),
                p() && ((n = h()), (a = h()), (o = h()), (s = h()))
              var T = [1, 1]
              if (p() && p())
                switch (f()) {
                  case 1:
                    T = [1, 1]
                    break
                  case 2:
                    T = [12, 11]
                    break
                  case 3:
                    T = [10, 11]
                    break
                  case 4:
                    T = [16, 11]
                    break
                  case 5:
                    T = [40, 33]
                    break
                  case 6:
                    T = [24, 11]
                    break
                  case 7:
                    T = [20, 11]
                    break
                  case 8:
                    T = [32, 11]
                    break
                  case 9:
                    T = [80, 33]
                    break
                  case 10:
                    T = [18, 11]
                    break
                  case 11:
                    T = [15, 11]
                    break
                  case 12:
                    T = [64, 33]
                    break
                  case 13:
                    T = [160, 99]
                    break
                  case 14:
                    T = [4, 3]
                    break
                  case 15:
                    T = [3, 2]
                    break
                  case 16:
                    T = [2, 1]
                    break
                  case 255:
                    T = [(f() << 8) | f(), (f() << 8) | f()]
                }
              return {
                width: Math.ceil(16 * (t + 1) - 2 * n - 2 * a),
                height: (2 - i) * (r + 1) * 16 - (i ? 2 : 4) * (o + s),
                pixelRatio: T
              }
            }
          },
          {
            key: 'readSliceType',
            value: function() {
              return this.readUByte(), this.readUEG(), this.readUEG()
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = a), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = r(17),
      o = (i = a) && i.__esModule ? i : { default: i }
    var s = (function() {
      function e(t, r, i, n) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.decryptdata = i),
          (this.discardEPB = n),
          (this.decrypter = new o.default(t, r, { removePKCS7Padding: !1 }))
      }
      return (
        n(e, [
          {
            key: 'decryptBuffer',
            value: function(e, t) {
              this.decrypter.decrypt(
                e,
                this.decryptdata.key.buffer,
                this.decryptdata.iv.buffer,
                t
              )
            }
          },
          {
            key: 'decryptAacSample',
            value: function(e, t, r, i) {
              var n = e[t].unit,
                a = n.subarray(16, n.length - (n.length % 16)),
                o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                s = this
              this.decryptBuffer(o, function(a) {
                ;(a = new Uint8Array(a)),
                  n.set(a, 16),
                  i || s.decryptAacSamples(e, t + 1, r)
              })
            }
          },
          {
            key: 'decryptAacSamples',
            value: function(e, t, r) {
              for (; ; t++) {
                if (t >= e.length) return void r()
                if (!(e[t].unit.length < 32)) {
                  var i = this.decrypter.isSync()
                  if ((this.decryptAacSample(e, t, r, i), !i)) return
                }
              }
            }
          },
          {
            key: 'getAvcEncryptedData',
            value: function(e) {
              for (
                var t = 16 * Math.floor((e.length - 48) / 160) + 16,
                  r = new Int8Array(t),
                  i = 0,
                  n = 32;
                n <= e.length - 16;
                n += 160, i += 16
              )
                r.set(e.subarray(n, n + 16), i)
              return r
            }
          },
          {
            key: 'getAvcDecryptedUnit',
            value: function(e, t) {
              t = new Uint8Array(t)
              for (var r = 0, i = 32; i <= e.length - 16; i += 160, r += 16)
                e.set(t.subarray(r, r + 16), i)
              return e
            }
          },
          {
            key: 'decryptAvcSample',
            value: function(e, t, r, i, n, a) {
              var o = this.discardEPB(n.data),
                s = this.getAvcEncryptedData(o),
                l = this
              this.decryptBuffer(s.buffer, function(s) {
                ;(n.data = l.getAvcDecryptedUnit(o, s)),
                  a || l.decryptAvcSamples(e, t, r + 1, i)
              })
            }
          },
          {
            key: 'decryptAvcSamples',
            value: function(e, t, r, i) {
              for (; ; t++, r = 0) {
                if (t >= e.length) return void i()
                for (var n = e[t].units; !(r >= n.length); r++) {
                  var a = n[r]
                  if (!(a.length <= 48 || (1 !== a.type && 5 !== a.type))) {
                    var o = this.decrypter.isSync()
                    if ((this.decryptAvcSample(e, t, r, i, a, o), !o)) return
                  }
                }
              }
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = s), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = s(r(8)),
      a = r(0),
      o = s(r(38))
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = (function() {
      function e(t, r, i) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.observer = t),
          (this.config = i),
          (this.remuxer = r)
      }
      return (
        i(
          e,
          [
            {
              key: 'resetInitSegment',
              value: function(e, t, r, i) {
                this._audioTrack = {
                  container: 'audio/mpeg',
                  type: 'audio',
                  id: -1,
                  sequenceNumber: 0,
                  isAAC: !1,
                  samples: [],
                  len: 0,
                  manifestCodec: t,
                  duration: i,
                  inputTimeScale: 9e4
                }
              }
            },
            { key: 'resetTimeStamp', value: function() {} },
            {
              key: 'append',
              value: function(e, t, r, i) {
                for (
                  var a = n.default.getID3Data(e, 0),
                    s = n.default.getTimeStamp(a),
                    l = s ? 90 * s : 9e4 * t,
                    u = a.length,
                    d = e.length,
                    f = 0,
                    c = 0,
                    h = this._audioTrack,
                    p = [{ pts: l, dts: l, data: a }];
                  u < d;

                )
                  if (o.default.isHeader(e, u)) {
                    var v = o.default.appendFrame(h, e, u, l, f)
                    if (!v) break
                    ;(u += v.length), (c = v.sample.pts), f++
                  } else
                    n.default.isHeader(e, u)
                      ? ((a = n.default.getID3Data(e, u)),
                        p.push({ pts: c, dts: c, data: a }),
                        (u += a.length))
                      : u++
                this.remuxer.remux(
                  h,
                  { samples: [] },
                  { samples: p, inputTimeScale: 9e4 },
                  { samples: [] },
                  t,
                  r,
                  i
                )
              }
            },
            { key: 'destroy', value: function() {} }
          ],
          [
            {
              key: 'probe',
              value: function(e) {
                var t = void 0,
                  r = void 0,
                  i = n.default.getID3Data(e, 0)
                if (i && void 0 !== n.default.getTimeStamp(i))
                  for (
                    t = i.length, r = Math.min(e.length - 1, t + 100);
                    t < r;
                    t++
                  )
                    if (o.default.probe(e, t))
                      return a.logger.log('MPEG Audio sync word found !'), !0
                return !1
              }
            }
          ]
        ),
        e
      )
    })()
    ;(t.default = l), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = u(r(84)),
      a = u(r(85)),
      o = u(r(1)),
      s = r(2),
      l = r(0)
    function u(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var d = (function() {
      function e(t, r, i, n) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.observer = t),
          (this.config = r),
          (this.typeSupported = i)
        var a = navigator.userAgent
        ;(this.isSafari =
          n && n.indexOf('Apple') > -1 && a && !a.match('CriOS')),
          (this.ISGenerated = !1)
      }
      return (
        i(e, [
          { key: 'destroy', value: function() {} },
          {
            key: 'resetTimeStamp',
            value: function(e) {
              this._initPTS = this._initDTS = e
            }
          },
          {
            key: 'resetInitSegment',
            value: function() {
              this.ISGenerated = !1
            }
          },
          {
            key: 'remux',
            value: function(e, t, r, i, n, a, s) {
              if (
                (this.ISGenerated || this.generateIS(e, t, n), this.ISGenerated)
              ) {
                var u = e.samples.length,
                  d = t.samples.length,
                  f = n,
                  c = n
                if (u && d) {
                  var h =
                    (e.samples[0].dts - t.samples[0].dts) / t.inputTimeScale
                  ;(f += Math.max(0, h)), (c += Math.max(0, -h))
                }
                if (u) {
                  e.timescale ||
                    (l.logger.warn('regenerate InitSegment as audio detected'),
                    this.generateIS(e, t, n))
                  var p = this.remuxAudio(e, f, a, s)
                  if (d) {
                    var v = void 0
                    p && (v = p.endPTS - p.startPTS),
                      t.timescale ||
                        (l.logger.warn(
                          'regenerate InitSegment as video detected'
                        ),
                        this.generateIS(e, t, n)),
                      this.remuxVideo(t, c, a, v, s)
                  }
                } else if (d) {
                  var g = this.remuxVideo(t, c, a, 0, s)
                  g && e.codec && this.remuxEmptyAudio(e, f, a, g)
                }
              }
              r.samples.length && this.remuxID3(r, n),
                i.samples.length && this.remuxText(i, n),
                this.observer.trigger(o.default.FRAG_PARSED)
            }
          },
          {
            key: 'generateIS',
            value: function(e, t, r) {
              var i = this.observer,
                n = e.samples,
                u = t.samples,
                d = this.typeSupported,
                f = 'audio/mp4',
                c = {},
                h = { tracks: c },
                p = void 0 === this._initPTS,
                v = void 0,
                g = void 0
              if (
                (p && (v = g = 1 / 0),
                e.config &&
                  n.length &&
                  ((e.timescale = e.samplerate),
                  l.logger.log('audio sampling rate : ' + e.samplerate),
                  e.isAAC ||
                    (d.mpeg
                      ? ((f = 'audio/mpeg'), (e.codec = ''))
                      : d.mp3 && (e.codec = 'mp3')),
                  (c.audio = {
                    container: f,
                    codec: e.codec,
                    initSegment:
                      !e.isAAC && d.mpeg
                        ? new Uint8Array()
                        : a.default.initSegment([e]),
                    metadata: { channelCount: e.channelCount }
                  }),
                  p && (v = g = n[0].pts - e.inputTimeScale * r)),
                t.sps && t.pps && u.length)
              ) {
                var y = t.inputTimeScale
                ;(t.timescale = y),
                  (c.video = {
                    container: 'video/mp4',
                    codec: t.codec,
                    initSegment: a.default.initSegment([t]),
                    metadata: { width: t.width, height: t.height }
                  }),
                  p &&
                    ((v = Math.min(v, u[0].pts - y * r)),
                    (g = Math.min(g, u[0].dts - y * r)),
                    this.observer.trigger(o.default.INIT_PTS_FOUND, {
                      initPTS: v
                    }))
              }
              Object.keys(c).length
                ? (i.trigger(o.default.FRAG_PARSING_INIT_SEGMENT, h),
                  (this.ISGenerated = !0),
                  p && ((this._initPTS = v), (this._initDTS = g)))
                : i.trigger(o.default.ERROR, {
                    type: s.ErrorTypes.MEDIA_ERROR,
                    details: s.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: 'no audio/video samples found'
                  })
            }
          },
          {
            key: 'remuxVideo',
            value: function(e, t, r, i, n) {
              var u,
                d,
                f,
                c = 8,
                h = e.timescale,
                p = void 0,
                v = void 0,
                g = void 0,
                y = void 0,
                m = e.samples,
                b = [],
                E = m.length,
                T = this._PTSNormalize,
                k = this._initDTS,
                _ = this.nextAvcDts,
                S = this.isSafari
              if (0 !== E) {
                S &&
                  (r |=
                    m.length &&
                    _ &&
                    ((n && Math.abs(t - _ / h) < 0.1) ||
                      Math.abs(m[0].pts - _ - k) < h / 5)),
                  r || (_ = t * h),
                  m.forEach(function(e) {
                    ;(e.pts = T(e.pts - k, _)), (e.dts = T(e.dts - k, _))
                  }),
                  m.sort(function(e, t) {
                    var r = e.dts - t.dts,
                      i = e.pts - t.pts
                    return r || i || e.id - t.id
                  })
                var w = m.reduce(function(e, t) {
                  return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                }, 0)
                if (w < 0) {
                  l.logger.warn(
                    'PTS < DTS detected in video samples, shifting DTS by ' +
                      Math.round(w / 90) +
                      ' ms to overcome this issue'
                  )
                  for (var A = 0; A < m.length; A++) m[A].dts += w
                }
                var R = m[0]
                ;(y = Math.max(R.dts, 0)), (g = Math.max(R.pts, 0))
                var O = Math.round((y - _) / 90)
                r &&
                  O &&
                  (O > 1
                    ? l.logger.log(
                        'AVC:' +
                          O +
                          ' ms hole between fragments detected,filling it'
                      )
                    : O < -1 &&
                      l.logger.log(
                        'AVC:' +
                          -O +
                          ' ms overlapping between fragments detected'
                      ),
                  (y = _),
                  (m[0].dts = y),
                  (g = Math.max(g - O, _)),
                  (m[0].pts = g),
                  l.logger.log(
                    'Video/PTS/DTS adjusted: ' +
                      Math.round(g / 90) +
                      '/' +
                      Math.round(y / 90) +
                      ',delta:' +
                      O +
                      ' ms'
                  )),
                  y,
                  (R = m[m.length - 1]),
                  (f = Math.max(R.dts, 0)),
                  (d = Math.max(R.pts, 0, f)),
                  S && (p = Math.round((f - y) / (m.length - 1)))
                for (var L = 0, D = 0, P = 0; P < E; P++) {
                  for (
                    var C = m[P], I = C.units, x = I.length, M = 0, F = 0;
                    F < x;
                    F++
                  )
                    M += I[F].data.length
                  ;(D += M),
                    (L += x),
                    (C.length = M),
                    (C.dts = S ? y + P * p : Math.max(C.dts, y)),
                    (C.pts = Math.max(C.pts, C.dts))
                }
                var N = D + 4 * L + 8
                try {
                  v = new Uint8Array(N)
                } catch (e) {
                  return void this.observer.trigger(o.default.ERROR, {
                    type: s.ErrorTypes.MUX_ERROR,
                    details: s.ErrorDetails.REMUX_ALLOC_ERROR,
                    fatal: !1,
                    bytes: N,
                    reason: 'fail allocating video mdat ' + N
                  })
                }
                var U = new DataView(v.buffer)
                U.setUint32(0, N), v.set(a.default.types.mdat, 4)
                for (var B = 0; B < E; B++) {
                  for (
                    var j = m[B],
                      G = j.units,
                      K = 0,
                      H = void 0,
                      V = 0,
                      Y = G.length;
                    V < Y;
                    V++
                  ) {
                    var q = G[V],
                      W = q.data,
                      z = q.data.byteLength
                    U.setUint32(c, z),
                      (c += 4),
                      v.set(W, c),
                      (c += z),
                      (K += 4 + z)
                  }
                  if (S) H = Math.max(0, p * Math.round((j.pts - j.dts) / p))
                  else {
                    if (B < E - 1) p = m[B + 1].dts - j.dts
                    else {
                      var X = this.config,
                        Q = j.dts - m[B > 0 ? B - 1 : B].dts
                      if (X.stretchShortVideoTrack) {
                        var $ = X.maxBufferHole,
                          J = Math.floor($ * h),
                          Z = (i ? g + i * h : this.nextAudioPts) - j.pts
                        Z > J
                          ? ((p = Z - Q) < 0 && (p = Q),
                            l.logger.log(
                              'It is approximately ' +
                                Z / 90 +
                                ' ms to the next segment; using duration ' +
                                p / 90 +
                                ' ms for the last video frame.'
                            ))
                          : (p = Q)
                      } else p = Q
                    }
                    H = Math.round(j.pts - j.dts)
                  }
                  b.push({
                    size: K,
                    duration: p,
                    cts: H,
                    flags: {
                      isLeading: 0,
                      isDependedOn: 0,
                      hasRedundancy: 0,
                      degradPrio: 0,
                      dependsOn: j.key ? 2 : 1,
                      isNonSync: j.key ? 0 : 1
                    }
                  })
                }
                this.nextAvcDts = f + p
                var ee = e.dropped
                if (
                  ((e.len = 0),
                  (e.nbNalu = 0),
                  (e.dropped = 0),
                  b.length &&
                    navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
                ) {
                  var te = b[0].flags
                  ;(te.dependsOn = 2), (te.isNonSync = 0)
                }
                ;(e.samples = b),
                  (u = a.default.moof(e.sequenceNumber++, y, e)),
                  (e.samples = [])
                var re = {
                  data1: u,
                  data2: v,
                  startPTS: g / h,
                  endPTS: (d + p) / h,
                  startDTS: y / h,
                  endDTS: this.nextAvcDts / h,
                  type: 'video',
                  hasAudio: !1,
                  hasVideo: !0,
                  nb: b.length,
                  dropped: ee
                }
                return (
                  this.observer.trigger(o.default.FRAG_PARSING_DATA, re), re
                )
              }
            }
          },
          {
            key: 'remuxAudio',
            value: function(e, t, r, i) {
              var u = e.inputTimeScale,
                d = e.timescale,
                f = u / d,
                c = (e.isAAC ? 1024 : 1152) * f,
                h = this._PTSNormalize,
                p = this._initDTS,
                v = !e.isAAC && this.typeSupported.mpeg,
                g = void 0,
                y = void 0,
                m = void 0,
                b = void 0,
                E = void 0,
                T = void 0,
                k = void 0,
                _ = e.samples,
                S = [],
                w = this.nextAudioPts
              if (
                ((r |=
                  _.length &&
                  w &&
                  ((i && Math.abs(t - w / u) < 0.1) ||
                    Math.abs(_[0].pts - w - p) < 20 * c)),
                _.forEach(function(e) {
                  e.pts = e.dts = h(e.pts - p, t * u)
                }),
                0 !==
                  (_ = _.filter(function(e) {
                    return e.pts >= 0
                  })).length)
              ) {
                if ((r || (w = i ? t * u : _[0].pts), e.isAAC))
                  for (
                    var A = this.config.maxAudioFramesDrift, R = 0, O = w;
                    R < _.length;

                  ) {
                    var L,
                      D = _[R]
                    L = D.pts - O
                    var P = Math.abs((1e3 * L) / u)
                    if (L <= -A * c)
                      l.logger.warn(
                        'Dropping 1 audio frame @ ' +
                          (O / u).toFixed(3) +
                          's due to ' +
                          Math.round(P) +
                          ' ms overlap.'
                      ),
                        _.splice(R, 1),
                        (e.len -= D.unit.length)
                    else if (L >= A * c && P < 1e4 && O) {
                      var C = Math.round(L / c)
                      l.logger.warn(
                        'Injecting ' +
                          C +
                          ' audio frame @ ' +
                          (O / u).toFixed(3) +
                          's due to ' +
                          Math.round((1e3 * L) / u) +
                          ' ms gap.'
                      )
                      for (var I = 0; I < C; I++) {
                        var x = Math.max(O, 0)
                        ;(m = n.default.getSilentFrame(
                          e.manifestCodec || e.codec,
                          e.channelCount
                        )) ||
                          (l.logger.log(
                            'Unable to get silent frame for given audio codec; duplicating last frame instead.'
                          ),
                          (m = D.unit.subarray())),
                          _.splice(R, 0, { unit: m, pts: x, dts: x }),
                          (e.len += m.length),
                          (O += c),
                          R++
                      }
                      ;(D.pts = D.dts = O), (O += c), R++
                    } else Math.abs(L), (D.pts = D.dts = O), (O += c), R++
                  }
                for (var M = 0, F = _.length; M < F; M++) {
                  var N = _[M],
                    U = N.unit,
                    B = N.pts
                  if (void 0 !== k) y.duration = Math.round((B - k) / f)
                  else {
                    var j = Math.round((1e3 * (B - w)) / u),
                      G = 0
                    if (r && e.isAAC && j) {
                      if (j > 0 && j < 1e4)
                        (G = Math.round((B - w) / c)),
                          l.logger.log(
                            j +
                              ' ms hole between AAC samples detected,filling it'
                          ),
                          G > 0 &&
                            ((m = n.default.getSilentFrame(
                              e.manifestCodec || e.codec,
                              e.channelCount
                            )) || (m = U.subarray()),
                            (e.len += G * m.length))
                      else if (j < -12) {
                        l.logger.log(
                          'drop overlapping AAC sample, expected/parsed/delta:' +
                            (w / u).toFixed(3) +
                            's/' +
                            (B / u).toFixed(3) +
                            's/' +
                            -j +
                            'ms'
                        ),
                          (e.len -= U.byteLength)
                        continue
                      }
                      B = w
                    }
                    if (((T = B), !(e.len > 0))) return
                    var K = v ? e.len : e.len + 8
                    g = v ? 0 : 8
                    try {
                      b = new Uint8Array(K)
                    } catch (e) {
                      return void this.observer.trigger(o.default.ERROR, {
                        type: s.ErrorTypes.MUX_ERROR,
                        details: s.ErrorDetails.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        bytes: K,
                        reason: 'fail allocating audio mdat ' + K
                      })
                    }
                    v ||
                      (new DataView(b.buffer).setUint32(0, K),
                      b.set(a.default.types.mdat, 4))
                    for (var H = 0; H < G; H++)
                      (m = n.default.getSilentFrame(
                        e.manifestCodec || e.codec,
                        e.channelCount
                      )) ||
                        (l.logger.log(
                          'Unable to get silent frame for given audio codec; duplicating this frame instead.'
                        ),
                        (m = U.subarray())),
                        b.set(m, g),
                        (g += m.byteLength),
                        (y = {
                          size: m.byteLength,
                          cts: 0,
                          duration: 1024,
                          flags: {
                            isLeading: 0,
                            isDependedOn: 0,
                            hasRedundancy: 0,
                            degradPrio: 0,
                            dependsOn: 1
                          }
                        }),
                        S.push(y)
                  }
                  b.set(U, g)
                  var V = U.byteLength
                  ;(g += V),
                    (y = {
                      size: V,
                      cts: 0,
                      duration: 0,
                      flags: {
                        isLeading: 0,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradPrio: 0,
                        dependsOn: 1
                      }
                    }),
                    S.push(y),
                    (k = B)
                }
                var Y = 0,
                  q = S.length
                if (
                  (q >= 2 && ((Y = S[q - 2].duration), (y.duration = Y)), q)
                ) {
                  ;(this.nextAudioPts = w = k + f * Y),
                    (e.len = 0),
                    (e.samples = S),
                    (E = v
                      ? new Uint8Array()
                      : a.default.moof(e.sequenceNumber++, T / f, e)),
                    (e.samples = [])
                  var W = T / u,
                    z = w / u,
                    X = {
                      data1: E,
                      data2: b,
                      startPTS: W,
                      endPTS: z,
                      startDTS: W,
                      endDTS: z,
                      type: 'audio',
                      hasAudio: !0,
                      hasVideo: !1,
                      nb: q
                    }
                  return (
                    this.observer.trigger(o.default.FRAG_PARSING_DATA, X), X
                  )
                }
                return null
              }
            }
          },
          {
            key: 'remuxEmptyAudio',
            value: function(e, t, r, i) {
              var a = e.inputTimeScale,
                o = a / (e.samplerate ? e.samplerate : a),
                s = this.nextAudioPts,
                u = (void 0 !== s ? s : i.startDTS * a) + this._initDTS,
                d = i.endDTS * a + this._initDTS,
                f = 1024 * o,
                c = Math.ceil((d - u) / f),
                h = n.default.getSilentFrame(
                  e.manifestCodec || e.codec,
                  e.channelCount
                )
              if ((l.logger.warn('remux empty Audio'), h)) {
                for (var p = [], v = 0; v < c; v++) {
                  var g = u + v * f
                  p.push({ unit: h, pts: g, dts: g }), (e.len += h.length)
                }
                ;(e.samples = p), this.remuxAudio(e, t, r)
              } else
                l.logger.trace(
                  'Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!'
                )
            }
          },
          {
            key: 'remuxID3',
            value: function(e, t) {
              var r = e.samples.length,
                i = void 0,
                n = e.inputTimeScale,
                a = this._initPTS,
                s = this._initDTS
              if (r) {
                for (var l = 0; l < r; l++)
                  ((i = e.samples[l]).pts = (i.pts - a) / n),
                    (i.dts = (i.dts - s) / n)
                this.observer.trigger(o.default.FRAG_PARSING_METADATA, {
                  samples: e.samples
                })
              }
              ;(e.samples = []), (t = t)
            }
          },
          {
            key: 'remuxText',
            value: function(e, t) {
              e.samples.sort(function(e, t) {
                return e.pts - t.pts
              })
              var r = e.samples.length,
                i = void 0,
                n = e.inputTimeScale,
                a = this._initPTS
              if (r) {
                for (var s = 0; s < r; s++)
                  (i = e.samples[s]).pts = (i.pts - a) / n
                this.observer.trigger(o.default.FRAG_PARSING_USERDATA, {
                  samples: e.samples
                })
              }
              ;(e.samples = []), (t = t)
            }
          },
          {
            key: '_PTSNormalize',
            value: function(e, t) {
              var r = void 0
              if (void 0 === t) return e
              for (
                r = t < e ? -8589934592 : 8589934592;
                Math.abs(e - t) > 4294967296;

              )
                e += r
              return e
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = d), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    var n = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e)
      }
      return (
        i(e, null, [
          {
            key: 'getSilentFrame',
            value: function(e, t) {
              switch (e) {
                case 'mp4a.40.2':
                  if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128])
                  if (2 === t)
                    return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128])
                  if (3 === t)
                    return new Uint8Array([
                      0,
                      200,
                      0,
                      128,
                      32,
                      132,
                      1,
                      38,
                      64,
                      8,
                      100,
                      0,
                      142
                    ])
                  if (4 === t)
                    return new Uint8Array([
                      0,
                      200,
                      0,
                      128,
                      32,
                      132,
                      1,
                      38,
                      64,
                      8,
                      100,
                      0,
                      128,
                      44,
                      128,
                      8,
                      2,
                      56
                    ])
                  if (5 === t)
                    return new Uint8Array([
                      0,
                      200,
                      0,
                      128,
                      32,
                      132,
                      1,
                      38,
                      64,
                      8,
                      100,
                      0,
                      130,
                      48,
                      4,
                      153,
                      0,
                      33,
                      144,
                      2,
                      56
                    ])
                  if (6 === t)
                    return new Uint8Array([
                      0,
                      200,
                      0,
                      128,
                      32,
                      132,
                      1,
                      38,
                      64,
                      8,
                      100,
                      0,
                      130,
                      48,
                      4,
                      153,
                      0,
                      33,
                      144,
                      2,
                      0,
                      178,
                      0,
                      32,
                      8,
                      224
                    ])
                  break
                default:
                  if (1 === t)
                    return new Uint8Array([
                      1,
                      64,
                      34,
                      128,
                      163,
                      78,
                      230,
                      128,
                      186,
                      8,
                      0,
                      0,
                      0,
                      28,
                      6,
                      241,
                      193,
                      10,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      94
                    ])
                  if (2 === t)
                    return new Uint8Array([
                      1,
                      64,
                      34,
                      128,
                      163,
                      94,
                      230,
                      128,
                      186,
                      8,
                      0,
                      0,
                      0,
                      0,
                      149,
                      0,
                      6,
                      241,
                      161,
                      10,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      94
                    ])
                  if (3 === t)
                    return new Uint8Array([
                      1,
                      64,
                      34,
                      128,
                      163,
                      94,
                      230,
                      128,
                      186,
                      8,
                      0,
                      0,
                      0,
                      0,
                      149,
                      0,
                      6,
                      241,
                      161,
                      10,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      90,
                      94
                    ])
              }
              return null
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = n), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = r(86)
    var a = Math.pow(2, 32) - 1,
      o = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e)
        }
        return (
          i(e, null, [
            {
              key: 'init',
              value: function() {
                e.types = {
                  avc1: [],
                  avcC: [],
                  btrt: [],
                  dinf: [],
                  dref: [],
                  esds: [],
                  ftyp: [],
                  hdlr: [],
                  mdat: [],
                  mdhd: [],
                  mdia: [],
                  mfhd: [],
                  minf: [],
                  moof: [],
                  moov: [],
                  mp4a: [],
                  '.mp3': [],
                  mvex: [],
                  mvhd: [],
                  pasp: [],
                  sdtp: [],
                  stbl: [],
                  stco: [],
                  stsc: [],
                  stsd: [],
                  stsz: [],
                  stts: [],
                  tfdt: [],
                  tfhd: [],
                  traf: [],
                  trak: [],
                  trun: [],
                  trex: [],
                  tkhd: [],
                  vmhd: [],
                  smhd: []
                }
                var t = void 0
                for (t in e.types)
                  e.types.hasOwnProperty(t) &&
                    (e.types[t] = [
                      t.charCodeAt(0),
                      t.charCodeAt(1),
                      t.charCodeAt(2),
                      t.charCodeAt(3)
                    ])
                var r = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    118,
                    105,
                    100,
                    101,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    86,
                    105,
                    100,
                    101,
                    111,
                    72,
                    97,
                    110,
                    100,
                    108,
                    101,
                    114,
                    0
                  ]),
                  i = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    115,
                    111,
                    117,
                    110,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    83,
                    111,
                    117,
                    110,
                    100,
                    72,
                    97,
                    110,
                    100,
                    108,
                    101,
                    114,
                    0
                  ])
                e.HDLR_TYPES = { video: r, audio: i }
                var n = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    12,
                    117,
                    114,
                    108,
                    32,
                    0,
                    0,
                    0,
                    1
                  ]),
                  a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])
                ;(e.STTS = e.STSC = e.STCO = a),
                  (e.STSZ = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                  ])),
                  (e.VMHD = new Uint8Array([
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                  ])),
                  (e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                  (e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]))
                var o = new Uint8Array([105, 115, 111, 109]),
                  s = new Uint8Array([97, 118, 99, 49]),
                  l = new Uint8Array([0, 0, 0, 1])
                ;(e.FTYP = e.box(e.types.ftyp, o, l, o, s)),
                  (e.DINF = e.box(e.types.dinf, e.box(e.types.dref, n)))
              }
            },
            {
              key: 'box',
              value: function(e) {
                for (
                  var t = Array.prototype.slice.call(arguments, 1),
                    r = 8,
                    i = t.length,
                    n = i,
                    a = void 0;
                  i--;

                )
                  r += t[i].byteLength
                for (
                  (a = new Uint8Array(r))[0] = (r >> 24) & 255,
                    a[1] = (r >> 16) & 255,
                    a[2] = (r >> 8) & 255,
                    a[3] = 255 & r,
                    a.set(e, 4),
                    i = 0,
                    r = 8;
                  i < n;
                  i++
                )
                  a.set(t[i], r), (r += t[i].byteLength)
                return a
              }
            },
            {
              key: 'hdlr',
              value: function(t) {
                return e.box(e.types.hdlr, e.HDLR_TYPES[t])
              }
            },
            {
              key: 'mdat',
              value: function(t) {
                return e.box(e.types.mdat, t)
              }
            },
            {
              key: 'mdhd',
              value: function(t, r) {
                r *= t
                var i = Math.floor(r / (a + 1)),
                  n = Math.floor(r % (a + 1))
                return e.box(
                  e.types.mdhd,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (t >> 24) & 255,
                    (t >> 16) & 255,
                    (t >> 8) & 255,
                    255 & t,
                    i >> 24,
                    (i >> 16) & 255,
                    (i >> 8) & 255,
                    255 & i,
                    n >> 24,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    255 & n,
                    85,
                    196,
                    0,
                    0
                  ])
                )
              }
            },
            {
              key: 'mdia',
              value: function(t) {
                return e.box(
                  e.types.mdia,
                  e.mdhd(t.timescale, t.duration),
                  e.hdlr(t.type),
                  e.minf(t)
                )
              }
            },
            {
              key: 'mfhd',
              value: function(t) {
                return e.box(
                  e.types.mfhd,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    t >> 24,
                    (t >> 16) & 255,
                    (t >> 8) & 255,
                    255 & t
                  ])
                )
              }
            },
            {
              key: 'minf',
              value: function(t) {
                return 'audio' === t.type
                  ? e.box(
                      e.types.minf,
                      e.box(e.types.smhd, e.SMHD),
                      e.DINF,
                      e.stbl(t)
                    )
                  : e.box(
                      e.types.minf,
                      e.box(e.types.vmhd, e.VMHD),
                      e.DINF,
                      e.stbl(t)
                    )
              }
            },
            {
              key: 'moof',
              value: function(t, r, i) {
                return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
              }
            },
            {
              key: 'moov',
              value: function(t) {
                for (var r = t.length, i = []; r--; ) i[r] = e.trak(t[r])
                return e.box.apply(
                  null,
                  [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)]
                    .concat(i)
                    .concat(e.mvex(t))
                )
              }
            },
            {
              key: 'mvex',
              value: function(t) {
                for (var r = t.length, i = []; r--; ) i[r] = e.trex(t[r])
                return e.box.apply(null, [e.types.mvex].concat(i))
              }
            },
            {
              key: 'mvhd',
              value: function(t, r) {
                r *= t
                var i = Math.floor(r / (a + 1)),
                  n = Math.floor(r % (a + 1)),
                  o = new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (t >> 24) & 255,
                    (t >> 16) & 255,
                    (t >> 8) & 255,
                    255 & t,
                    i >> 24,
                    (i >> 16) & 255,
                    (i >> 8) & 255,
                    255 & i,
                    n >> 24,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    255 & n,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255
                  ])
                return e.box(e.types.mvhd, o)
              }
            },
            {
              key: 'sdtp',
              value: function(t) {
                var r = t.samples || [],
                  i = new Uint8Array(4 + r.length),
                  n = void 0,
                  a = void 0
                for (a = 0; a < r.length; a++)
                  (n = r[a].flags),
                    (i[a + 4] =
                      (n.dependsOn << 4) |
                      (n.isDependedOn << 2) |
                      n.hasRedundancy)
                return e.box(e.types.sdtp, i)
              }
            },
            {
              key: 'stbl',
              value: function(t) {
                return e.box(
                  e.types.stbl,
                  e.stsd(t),
                  e.box(e.types.stts, e.STTS),
                  e.box(e.types.stsc, e.STSC),
                  e.box(e.types.stsz, e.STSZ),
                  e.box(e.types.stco, e.STCO)
                )
              }
            },
            {
              key: 'avc1',
              value: function(t) {
                var r = [],
                  i = [],
                  a = void 0,
                  o = void 0,
                  s = void 0
                for (a = 0; a < t.sps.length; a++)
                  (s = (o = t.sps[a]).byteLength),
                    r.push((s >>> 8) & 255),
                    r.push(255 & s),
                    (r = r.concat((0, n.makeArrayFromArrayLike)(o)))
                for (a = 0; a < t.pps.length; a++)
                  (s = (o = t.pps[a]).byteLength),
                    i.push((s >>> 8) & 255),
                    i.push(255 & s),
                    (i = i.concat((0, n.makeArrayFromArrayLike)(o)))
                var l = e.box(
                    e.types.avcC,
                    new Uint8Array(
                      [1, r[3], r[4], r[5], 255, 224 | t.sps.length]
                        .concat(r)
                        .concat([t.pps.length])
                        .concat(i)
                    )
                  ),
                  u = t.width,
                  d = t.height,
                  f = t.pixelRatio[0],
                  c = t.pixelRatio[1]
                return e.box(
                  e.types.avc1,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (u >> 8) & 255,
                    255 & u,
                    (d >> 8) & 255,
                    255 & d,
                    0,
                    72,
                    0,
                    0,
                    0,
                    72,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    18,
                    100,
                    97,
                    105,
                    108,
                    121,
                    109,
                    111,
                    116,
                    105,
                    111,
                    110,
                    47,
                    104,
                    108,
                    115,
                    46,
                    106,
                    115,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    24,
                    17,
                    17
                  ]),
                  l,
                  e.box(
                    e.types.btrt,
                    new Uint8Array([
                      0,
                      28,
                      156,
                      128,
                      0,
                      45,
                      198,
                      192,
                      0,
                      45,
                      198,
                      192
                    ])
                  ),
                  e.box(
                    e.types.pasp,
                    new Uint8Array([
                      f >> 24,
                      (f >> 16) & 255,
                      (f >> 8) & 255,
                      255 & f,
                      c >> 24,
                      (c >> 16) & 255,
                      (c >> 8) & 255,
                      255 & c
                    ])
                  )
                )
              }
            },
            {
              key: 'esds',
              value: function(e) {
                var t = e.config.length
                return new Uint8Array(
                  [
                    0,
                    0,
                    0,
                    0,
                    3,
                    23 + t,
                    0,
                    1,
                    0,
                    4,
                    15 + t,
                    64,
                    21,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5
                  ]
                    .concat([t])
                    .concat(e.config)
                    .concat([6, 1, 2])
                )
              }
            },
            {
              key: 'mp4a',
              value: function(t) {
                var r = t.samplerate
                return e.box(
                  e.types.mp4a,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    t.channelCount,
                    0,
                    16,
                    0,
                    0,
                    0,
                    0,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0
                  ]),
                  e.box(e.types.esds, e.esds(t))
                )
              }
            },
            {
              key: 'mp3',
              value: function(t) {
                var r = t.samplerate
                return e.box(
                  e.types['.mp3'],
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    t.channelCount,
                    0,
                    16,
                    0,
                    0,
                    0,
                    0,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0
                  ])
                )
              }
            },
            {
              key: 'stsd',
              value: function(t) {
                return 'audio' === t.type
                  ? t.isAAC || 'mp3' !== t.codec
                    ? e.box(e.types.stsd, e.STSD, e.mp4a(t))
                    : e.box(e.types.stsd, e.STSD, e.mp3(t))
                  : e.box(e.types.stsd, e.STSD, e.avc1(t))
              }
            },
            {
              key: 'tkhd',
              value: function(t) {
                var r = t.id,
                  i = t.duration * t.timescale,
                  n = t.width,
                  o = t.height,
                  s = Math.floor(i / (a + 1)),
                  l = Math.floor(i % (a + 1))
                return e.box(
                  e.types.tkhd,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    7,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (r >> 24) & 255,
                    (r >> 16) & 255,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0,
                    0,
                    0,
                    s >> 24,
                    (s >> 16) & 255,
                    (s >> 8) & 255,
                    255 & s,
                    l >> 24,
                    (l >> 16) & 255,
                    (l >> 8) & 255,
                    255 & l,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    (n >> 8) & 255,
                    255 & n,
                    0,
                    0,
                    (o >> 8) & 255,
                    255 & o,
                    0,
                    0
                  ])
                )
              }
            },
            {
              key: 'traf',
              value: function(t, r) {
                var i = e.sdtp(t),
                  n = t.id,
                  o = Math.floor(r / (a + 1)),
                  s = Math.floor(r % (a + 1))
                return e.box(
                  e.types.traf,
                  e.box(
                    e.types.tfhd,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      n >> 24,
                      (n >> 16) & 255,
                      (n >> 8) & 255,
                      255 & n
                    ])
                  ),
                  e.box(
                    e.types.tfdt,
                    new Uint8Array([
                      1,
                      0,
                      0,
                      0,
                      o >> 24,
                      (o >> 16) & 255,
                      (o >> 8) & 255,
                      255 & o,
                      s >> 24,
                      (s >> 16) & 255,
                      (s >> 8) & 255,
                      255 & s
                    ])
                  ),
                  e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8),
                  i
                )
              }
            },
            {
              key: 'trak',
              value: function(t) {
                return (
                  (t.duration = t.duration || 4294967295),
                  e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                )
              }
            },
            {
              key: 'trex',
              value: function(t) {
                var r = t.id
                return e.box(
                  e.types.trex,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    r >> 24,
                    (r >> 16) & 255,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1
                  ])
                )
              }
            },
            {
              key: 'trun',
              value: function(t, r) {
                var i = t.samples || [],
                  n = i.length,
                  a = 12 + 16 * n,
                  o = new Uint8Array(a),
                  s = void 0,
                  l = void 0,
                  u = void 0,
                  d = void 0,
                  f = void 0,
                  c = void 0
                for (
                  r += 8 + a,
                    o.set(
                      [
                        0,
                        0,
                        15,
                        1,
                        (n >>> 24) & 255,
                        (n >>> 16) & 255,
                        (n >>> 8) & 255,
                        255 & n,
                        (r >>> 24) & 255,
                        (r >>> 16) & 255,
                        (r >>> 8) & 255,
                        255 & r
                      ],
                      0
                    ),
                    s = 0;
                  s < n;
                  s++
                )
                  (u = (l = i[s]).duration),
                    (d = l.size),
                    (f = l.flags),
                    (c = l.cts),
                    o.set(
                      [
                        (u >>> 24) & 255,
                        (u >>> 16) & 255,
                        (u >>> 8) & 255,
                        255 & u,
                        (d >>> 24) & 255,
                        (d >>> 16) & 255,
                        (d >>> 8) & 255,
                        255 & d,
                        (f.isLeading << 2) | f.dependsOn,
                        (f.isDependedOn << 6) |
                          (f.hasRedundancy << 4) |
                          (f.paddingValue << 1) |
                          f.isNonSync,
                        61440 & f.degradPrio,
                        15 & f.degradPrio,
                        (c >>> 24) & 255,
                        (c >>> 16) & 255,
                        (c >>> 8) & 255,
                        255 & c
                      ],
                      12 + 16 * s
                    )
                return e.box(e.types.trun, o)
              }
            },
            {
              key: 'initSegment',
              value: function(t) {
                e.types || e.init()
                var r = e.moov(t),
                  i = void 0
                return (
                  (i = new Uint8Array(e.FTYP.byteLength + r.byteLength)).set(
                    e.FTYP
                  ),
                  i.set(r, e.FTYP.byteLength),
                  i
                )
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = o), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    t.makeArrayFromArrayLike =
      'function' == typeof Array.from ? Array.from : Array.prototype.slice.call
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = r(1),
      o = (i = a) && i.__esModule ? i : { default: i }
    var s = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.observer = t)
      }
      return (
        n(e, [
          { key: 'destroy', value: function() {} },
          { key: 'resetTimeStamp', value: function() {} },
          { key: 'resetInitSegment', value: function() {} },
          {
            key: 'remux',
            value: function(e, t, r, i, n, a, s, l) {
              var u = this.observer,
                d = ''
              e && (d += 'audio'),
                t && (d += 'video'),
                u.trigger(o.default.FRAG_PARSING_DATA, {
                  data1: l,
                  startPTS: n,
                  startDTS: n,
                  type: d,
                  hasAudio: !!e,
                  hasVideo: !!t,
                  nb: 1,
                  dropped: 0
                }),
                u.trigger(o.default.FRAG_PARSED)
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = s), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = s(r(36)),
      n = s(r(1)),
      a = r(0),
      o = s(r(16))
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    ;(t.default = function(e) {
      var t = new o.default()
      ;(t.trigger = function(e) {
        for (
          var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1;
          n < r;
          n++
        )
          i[n - 1] = arguments[n]
        t.emit.apply(t, [e, e].concat(i))
      }),
        (t.off = function(e) {
          for (
            var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1;
            n < r;
            n++
          )
            i[n - 1] = arguments[n]
          t.removeListener.apply(t, [e].concat(i))
        })
      var r = function(t, r) {
        e.postMessage({ event: t, data: r })
      }
      e.addEventListener('message', function(n) {
        var o = n.data
        switch (o.cmd) {
          case 'init':
            var s = JSON.parse(o.config)
            e.demuxer = new i.default(t, o.typeSupported, s, o.vendor)
            try {
              ;(0, a.enableLogs)(!0 === s.debug)
            } catch (e) {
              console.warn('demuxerWorker: unable to enable logs')
            }
            r('init', null)
            break
          case 'demux':
            e.demuxer.push(
              o.data,
              o.decryptdata,
              o.initSegment,
              o.audioCodec,
              o.videoCodec,
              o.timeOffset,
              o.discontinuity,
              o.trackSwitch,
              o.contiguous,
              o.duration,
              o.accurateTimeOffset,
              o.defaultInitPTS
            )
        }
      }),
        t.on(n.default.FRAG_DECRYPTED, r),
        t.on(n.default.FRAG_PARSING_INIT_SEGMENT, r),
        t.on(n.default.FRAG_PARSED, r),
        t.on(n.default.ERROR, r),
        t.on(n.default.FRAG_PARSING_METADATA, r),
        t.on(n.default.FRAG_PARSING_USERDATA, r),
        t.on(n.default.INIT_PTS_FOUND, r),
        t.on(n.default.FRAG_PARSING_DATA, function(t, r) {
          var i = [],
            n = { event: t, data: r }
          r.data1 &&
            ((n.data1 = r.data1.buffer),
            i.push(r.data1.buffer),
            delete r.data1),
            r.data2 &&
              ((n.data2 = r.data2.buffer),
              i.push(r.data2.buffer),
              delete r.data2),
            e.postMessage(n, i)
        })
    }),
      (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.calculateNextPDT = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = arguments[2],
          i = 0
        if (r.programDateTime) {
          var n = Date.parse(r.programDateTime)
          isNaN(n) || (i = 1e3 * t + n - 1e3 * e)
        }
        return i
      }),
      (t.findFragmentByPDT = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        if (!Array.isArray(e) || !e.length || null === t) return null
        var r = e[0]
        if (t < r.pdt) return null
        var i = e[e.length - 1]
        if (t >= i.endPdt) return null
        for (var n = 0; n < e.length; ++n) {
          var a = e[n]
          if (t < a.endPdt) return a
        }
        return null
      }),
      (t.findFragmentBySN = function(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          n =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          s = void 0,
          l = e ? t[e.sn - t[0].sn + 1] : null
        r < i &&
          (r > i - n && (n = 0),
          (s = l && !o(r, n, l) ? l : a.default.search(t, o.bind(null, r, n))))
        return s
      }),
      (t.fragmentWithinToleranceTest = o)
    var i,
      n = r(7),
      a = (i = n) && i.__esModule ? i : { default: i }
    function o() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = arguments[2],
        i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0))
      return r.start + r.duration - i <= e
        ? 1
        : r.start - i > e && r.start
          ? -1
          : 0
    }
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i =
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
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = f(r(1)),
      o = f(r(3)),
      s = r(0),
      l = r(2),
      u = r(23),
      d = r(19)
    function f(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var c = window.performance,
      h = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var r = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              a.default.MANIFEST_LOADED,
              a.default.LEVEL_LOADED,
              a.default.AUDIO_TRACK_SWITCHED,
              a.default.FRAG_LOADED,
              a.default.ERROR
            )
          )
          return (
            (r.canload = !1),
            (r.currentLevelIndex = null),
            (r.manualLevelIndex = -1),
            (r.timer = null),
            r
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
          n(t, [
            {
              key: 'onHandlerDestroying',
              value: function() {
                this.clearTimer(), (this.manualLevelIndex = -1)
              }
            },
            {
              key: 'clearTimer',
              value: function() {
                null !== this.timer &&
                  (clearTimeout(this.timer), (this.timer = null))
              }
            },
            {
              key: 'startLoad',
              value: function() {
                var e = this._levels
                ;(this.canload = !0),
                  (this.levelRetryCount = 0),
                  e &&
                    e.forEach(function(e) {
                      e.loadError = 0
                      var t = e.details
                      t && t.live && (e.details = void 0)
                    }),
                  null !== this.timer && this.loadLevel()
              }
            },
            {
              key: 'stopLoad',
              value: function() {
                this.canload = !1
              }
            },
            {
              key: 'onManifestLoaded',
              value: function(e) {
                var t = [],
                  r = void 0,
                  i = {},
                  n = null,
                  o = !1,
                  f = !1,
                  c = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                  h = []
                if (
                  (e.levels.forEach(function(e) {
                    ;(e.loadError = 0),
                      (e.fragmentError = !1),
                      (o = o || !!e.videoCodec),
                      (f =
                        f || !!e.audioCodec || !(!e.attrs || !e.attrs.AUDIO)),
                      c &&
                        e.audioCodec &&
                        -1 !== e.audioCodec.indexOf('mp4a.40.34') &&
                        (e.audioCodec = void 0),
                      (n = i[e.bitrate])
                        ? n.url.push(e.url)
                        : ((e.url = [e.url]),
                          (e.urlId = 0),
                          (i[e.bitrate] = e),
                          t.push(e)),
                      e.attrs &&
                        e.attrs.AUDIO &&
                        (0, d.addGroupId)(n || e, 'audio', e.attrs.AUDIO),
                      e.attrs &&
                        e.attrs.SUBTITLES &&
                        (0, d.addGroupId)(n || e, 'text', e.attrs.SUBTITLES)
                  }),
                  o &&
                    f &&
                    (t = t.filter(function(e) {
                      return !!e.videoCodec
                    })),
                  (t = t.filter(function(e) {
                    var t = e.audioCodec,
                      r = e.videoCodec
                    return (
                      (!t || (0, u.isCodecSupportedInMp4)(t)) &&
                      (!r || (0, u.isCodecSupportedInMp4)(r))
                    )
                  })),
                  e.audioTracks &&
                    (h = e.audioTracks.filter(function(e) {
                      return (
                        !e.audioCodec ||
                        (0, u.isCodecSupportedInMp4)(e.audioCodec, 'audio')
                      )
                    })),
                  t.length > 0)
                ) {
                  ;(r = t[0].bitrate),
                    t.sort(function(e, t) {
                      return e.bitrate - t.bitrate
                    }),
                    (this._levels = t)
                  for (var p = 0; p < t.length; p++)
                    if (t[p].bitrate === r) {
                      ;(this._firstLevel = p),
                        s.logger.log(
                          'manifest loaded,' +
                            t.length +
                            ' level(s) found, first bitrate:' +
                            r
                        )
                      break
                    }
                  this.hls.trigger(a.default.MANIFEST_PARSED, {
                    levels: t,
                    audioTracks: h,
                    firstLevel: this._firstLevel,
                    stats: e.stats,
                    audio: f,
                    video: o,
                    altAudio: h.length > 0 && o
                  })
                } else
                  this.hls.trigger(a.default.ERROR, {
                    type: l.ErrorTypes.MEDIA_ERROR,
                    details: l.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                    fatal: !0,
                    url: this.hls.url,
                    reason: 'no level with compatible codecs found in manifest'
                  })
              }
            },
            {
              key: 'setLevelInternal',
              value: function(e) {
                var t = this._levels,
                  r = this.hls
                if (e >= 0 && e < t.length) {
                  if ((this.clearTimer(), this.currentLevelIndex !== e)) {
                    s.logger.log('switching to level ' + e),
                      (this.currentLevelIndex = e)
                    var i = t[e]
                    ;(i.level = e), r.trigger(a.default.LEVEL_SWITCHING, i)
                  }
                  var n = t[e],
                    o = n.details
                  if (!o || o.live) {
                    var u = n.urlId
                    r.trigger(a.default.LEVEL_LOADING, {
                      url: n.url[u],
                      level: e,
                      id: u
                    })
                  }
                } else
                  r.trigger(a.default.ERROR, {
                    type: l.ErrorTypes.OTHER_ERROR,
                    details: l.ErrorDetails.LEVEL_SWITCH_ERROR,
                    level: e,
                    fatal: !1,
                    reason: 'invalid level idx'
                  })
              }
            },
            {
              key: 'onError',
              value: function(e) {
                if (e.fatal)
                  e.type === l.ErrorTypes.NETWORK_ERROR && this.clearTimer()
                else {
                  var t = !1,
                    r = !1,
                    i = void 0
                  switch (e.details) {
                    case l.ErrorDetails.FRAG_LOAD_ERROR:
                    case l.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case l.ErrorDetails.KEY_LOAD_ERROR:
                    case l.ErrorDetails.KEY_LOAD_TIMEOUT:
                      ;(i = e.frag.level), (r = !0)
                      break
                    case l.ErrorDetails.LEVEL_LOAD_ERROR:
                    case l.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                      ;(i = e.context.level), (t = !0)
                      break
                    case l.ErrorDetails.REMUX_ALLOC_ERROR:
                      ;(i = e.level), (t = !0)
                  }
                  void 0 !== i && this.recoverLevel(e, i, t, r)
                }
              }
            },
            {
              key: 'recoverLevel',
              value: function(e, t, r, i) {
                var n = this,
                  a = this.hls.config,
                  o = e.details,
                  l = this._levels[t],
                  u = void 0,
                  d = void 0,
                  f = void 0
                if ((l.loadError++, (l.fragmentError = i), r)) {
                  if (!(this.levelRetryCount + 1 <= a.levelLoadingMaxRetry))
                    return (
                      s.logger.error(
                        'level controller, cannot recover from ' + o + ' error'
                      ),
                      (this.currentLevelIndex = null),
                      this.clearTimer(),
                      void (e.fatal = !0)
                    )
                  ;(d = Math.min(
                    Math.pow(2, this.levelRetryCount) *
                      a.levelLoadingRetryDelay,
                    a.levelLoadingMaxRetryTimeout
                  )),
                    (this.timer = setTimeout(function() {
                      return n.loadLevel()
                    }, d)),
                    (e.levelRetry = !0),
                    this.levelRetryCount++,
                    s.logger.warn(
                      'level controller, ' +
                        o +
                        ', retry in ' +
                        d +
                        ' ms, current retry count is ' +
                        this.levelRetryCount
                    )
                }
                ;(r || i) &&
                  ((u = l.url.length) > 1 && l.loadError < u
                    ? ((l.urlId = (l.urlId + 1) % u),
                      (l.details = void 0),
                      s.logger.warn(
                        'level controller, ' +
                          o +
                          ' for level ' +
                          t +
                          ': switching to redundant URL-id ' +
                          l.urlId
                      ))
                    : -1 === this.manualLevelIndex
                      ? ((f = 0 === t ? this._levels.length - 1 : t - 1),
                        s.logger.warn(
                          'level controller, ' + o + ': switch to ' + f
                        ),
                        (this.hls.nextAutoLevel = this.currentLevelIndex = f))
                      : i &&
                        (s.logger.warn(
                          'level controller, ' + o + ': reload a fragment'
                        ),
                        (this.currentLevelIndex = null)))
              }
            },
            {
              key: 'onFragLoaded',
              value: function(e) {
                var t = e.frag
                if (void 0 !== t && 'main' === t.type) {
                  var r = this._levels[t.level]
                  void 0 !== r &&
                    ((r.fragmentError = !1),
                    (r.loadError = 0),
                    (this.levelRetryCount = 0))
                }
              }
            },
            {
              key: 'onLevelLoaded',
              value: function(e) {
                var t = this,
                  r = e.level
                if (r === this.currentLevelIndex) {
                  var i = this._levels[r]
                  i.fragmentError ||
                    ((i.loadError = 0), (this.levelRetryCount = 0))
                  var n = e.details
                  if (n.live) {
                    var a =
                        1e3 *
                        (n.averagetargetduration
                          ? n.averagetargetduration
                          : n.targetduration),
                      o = a,
                      l = i.details
                    l &&
                      n.endSN === l.endSN &&
                      ((o /= 2),
                      s.logger.log('same live playlist, reload twice faster')),
                      (o -= c.now() - e.stats.trequest),
                      (o = Math.max(a / 2, Math.round(o))),
                      s.logger.log(
                        'live playlist, reload in ' + Math.round(o) + ' ms'
                      ),
                      (this.timer = setTimeout(function() {
                        return t.loadLevel()
                      }, o))
                  } else this.clearTimer()
                }
              }
            },
            {
              key: 'onAudioTrackSwitched',
              value: function(e) {
                var t = this.hls.audioTracks[e.id].groupId,
                  r = this.hls.levels[this.currentLevelIndex]
                if (r && r.audioGroupIds) {
                  var i = r.audioGroupIds.findIndex(function(e) {
                    return e === t
                  })
                  i !== r.urlId && ((r.urlId = i), this.startLoad())
                }
              }
            },
            {
              key: 'loadLevel',
              value: function() {
                if (
                  (s.logger.debug('call to loadLevel'),
                  null !== this.currentLevelIndex && this.canload)
                ) {
                  var e = this._levels[this.currentLevelIndex]
                  if (
                    'object' === (void 0 === e ? 'undefined' : i(e)) &&
                    e.url.length > 0
                  ) {
                    var t = this.currentLevelIndex,
                      r = e.urlId,
                      n = e.url[r]
                    s.logger.log(
                      'Attempt loading level index ' + t + ' with URL-id ' + r
                    ),
                      this.hls.trigger(a.default.LEVEL_LOADING, {
                        url: n,
                        level: t,
                        id: r
                      })
                  }
                }
              }
            },
            {
              key: 'levels',
              get: function() {
                return this._levels
              }
            },
            {
              key: 'level',
              get: function() {
                return this.currentLevelIndex
              },
              set: function(e) {
                var t = this._levels
                t &&
                  ((e = Math.min(e, t.length - 1)),
                  (this.currentLevelIndex === e && t[e].details) ||
                    this.setLevelInternal(e))
              }
            },
            {
              key: 'manualLevel',
              get: function() {
                return this.manualLevelIndex
              },
              set: function(e) {
                ;(this.manualLevelIndex = e),
                  void 0 === this._startLevel && (this._startLevel = e),
                  -1 !== e && (this.level = e)
              }
            },
            {
              key: 'firstLevel',
              get: function() {
                return this._firstLevel
              },
              set: function(e) {
                this._firstLevel = e
              }
            },
            {
              key: 'startLevel',
              get: function() {
                if (void 0 === this._startLevel) {
                  var e = this.hls.config.startLevel
                  return void 0 !== e ? e : this._firstLevel
                }
                return this._startLevel
              },
              set: function(e) {
                this._startLevel = e
              }
            },
            {
              key: 'nextLoadLevel',
              get: function() {
                return -1 !== this.manualLevelIndex
                  ? this.manualLevelIndex
                  : this.hls.nextAutoLevel
              },
              set: function(e) {
                ;(this.level = e),
                  -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
              }
            }
          ]),
          t
        )
      })(o.default)
    ;(t.default = h), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = l(r(1)),
      a = l(r(3)),
      o = l(r(8)),
      s = r(41)
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            n.default.MEDIA_ATTACHED,
            n.default.MEDIA_DETACHING,
            n.default.FRAG_PARSING_METADATA
          )
        )
        return (r.id3Track = void 0), (r.media = void 0), r
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
        i(t, [
          {
            key: 'destroy',
            value: function() {
              a.default.prototype.destroy.call(this)
            }
          },
          {
            key: 'onMediaAttached',
            value: function(e) {
              ;(this.media = e.media), this.media
            }
          },
          {
            key: 'onMediaDetaching',
            value: function() {
              ;(0, s.clearCurrentCues)(this.id3Track),
                (this.id3Track = void 0),
                (this.media = void 0)
            }
          },
          {
            key: 'getID3Track',
            value: function(e) {
              for (var t = 0; t < e.length; t++) {
                var r = e[t]
                if ('metadata' === r.kind && 'id3' === r.label)
                  return (0, s.sendAddTrackEvent)(r, this.media), r
              }
              return this.media.addTextTrack('metadata', 'id3')
            }
          },
          {
            key: 'onFragParsingMetadata',
            value: function(e) {
              var t = e.frag,
                r = e.samples
              this.id3Track ||
                ((this.id3Track = this.getID3Track(this.media.textTracks)),
                (this.id3Track.mode = 'hidden'))
              for (
                var i =
                    window.WebKitDataCue ||
                    window.VTTCue ||
                    window.TextTrackCue,
                  n = 0;
                n < r.length;
                n++
              ) {
                var a = o.default.getID3Frames(r[n].data)
                if (a) {
                  var s = r[n].pts,
                    l = n < r.length - 1 ? r[n + 1].pts : t.endPTS
                  s === l && (l += 1e-4)
                  for (var u = 0; u < a.length; u++) {
                    var d = a[u]
                    if (!o.default.isTimeStampFrame(d)) {
                      var f = new i(s, l, '')
                      ;(f.value = d), this.id3Track.addCue(f)
                    }
                  }
                }
              }
            }
          }
        ]),
        t
      )
    })(a.default)
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.isSupported = function() {
        var e = (0, i.getMediaSource)(),
          t = window.SourceBuffer || window.WebKitSourceBuffer,
          r =
            e &&
            'function' == typeof e.isTypeSupported &&
            e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
          n =
            !t ||
            (t.prototype &&
              'function' == typeof t.prototype.appendBuffer &&
              'function' == typeof t.prototype.remove)
        return !!r && !!n
      })
    var i = r(18)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.hlsDefaultConfig = void 0)
    var i = g(r(94)),
      n = g(r(97)),
      a = g(r(98)),
      o = g(r(99)),
      s = g(r(42)),
      l = g(r(100)),
      u = g(r(101)),
      d = (function(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        return (t.default = e), t
      })(r(102)),
      f = g(r(104)),
      c = g(r(108)),
      h = g(r(109)),
      p = g(r(110)),
      v = r(111)
    function g(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var y = (t.hlsDefaultConfig = {
      autoStartLoad: !0,
      startPosition: -1,
      defaultAudioCodec: void 0,
      debug: !1,
      capLevelOnFPSDrop: !1,
      capLevelToPlayerSize: !1,
      initialLiveManifestSize: 1,
      maxBufferLength: 30,
      maxBufferSize: 6e7,
      maxBufferHole: 0.5,
      lowBufferWatchdogPeriod: 0.5,
      highBufferWatchdogPeriod: 3,
      nudgeOffset: 0.1,
      nudgeMaxRetry: 3,
      maxFragLookUpTolerance: 0.25,
      liveSyncDurationCount: 3,
      liveMaxLatencyDurationCount: 1 / 0,
      liveSyncDuration: void 0,
      liveMaxLatencyDuration: void 0,
      liveDurationInfinity: !1,
      maxMaxBufferLength: 600,
      enableWorker: !0,
      enableSoftwareAES: !0,
      manifestLoadingTimeOut: 1e4,
      manifestLoadingMaxRetry: 1,
      manifestLoadingRetryDelay: 1e3,
      manifestLoadingMaxRetryTimeout: 64e3,
      startLevel: void 0,
      levelLoadingTimeOut: 1e4,
      levelLoadingMaxRetry: 4,
      levelLoadingRetryDelay: 1e3,
      levelLoadingMaxRetryTimeout: 64e3,
      fragLoadingTimeOut: 2e4,
      fragLoadingMaxRetry: 6,
      fragLoadingRetryDelay: 1e3,
      fragLoadingMaxRetryTimeout: 64e3,
      startFragPrefetch: !1,
      fpsDroppedMonitoringPeriod: 5e3,
      fpsDroppedMonitoringThreshold: 0.2,
      appendErrorMaxRetry: 3,
      loader: s.default,
      fLoader: void 0,
      pLoader: void 0,
      xhrSetup: void 0,
      licenseXhrSetup: void 0,
      abrController: i.default,
      bufferController: n.default,
      capLevelController: a.default,
      fpsController: o.default,
      stretchShortVideoTrack: !1,
      maxAudioFramesDrift: 1,
      forceKeyFrameOnDiscontinuity: !0,
      abrEwmaFastLive: 3,
      abrEwmaSlowLive: 9,
      abrEwmaFastVoD: 3,
      abrEwmaSlowVoD: 9,
      abrEwmaDefaultEstimate: 5e5,
      abrBandWidthFactor: 0.95,
      abrBandWidthUpFactor: 0.7,
      abrMaxWithRealBitrate: !1,
      maxStarvationDelay: 4,
      maxLoadingDelay: 4,
      minAutoBitrate: 0,
      emeEnabled: !1,
      widevineLicenseUrl: void 0,
      requestMediaKeySystemAccessFunc: v.requestMediaKeySystemAccess
    })
    ;(y.subtitleStreamController = h.default),
      (y.subtitleTrackController = c.default),
      (y.timelineController = f.default),
      (y.cueHandler = d),
      (y.enableCEA708Captions = !0),
      (y.enableWebVTT = !0),
      (y.captionsTextTrack1Label = 'English'),
      (y.captionsTextTrack1LanguageCode = 'en'),
      (y.captionsTextTrack2Label = 'Spanish'),
      (y.captionsTextTrack2LanguageCode = 'es'),
      (y.audioStreamController = u.default),
      (y.audioTrackController = l.default),
      (y.emeController = p.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = d(r(1)),
      a = d(r(3)),
      o = r(15),
      s = r(2),
      l = r(0),
      u = d(r(95))
    function d(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var f = window.performance,
      c = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var r = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              n.default.FRAG_LOADING,
              n.default.FRAG_LOADED,
              n.default.FRAG_BUFFERED,
              n.default.ERROR
            )
          )
          return (
            (r.lastLoadedFragLevel = 0),
            (r._nextAutoLevel = -1),
            (r.hls = e),
            (r.timer = null),
            (r._bwEstimator = null),
            (r.onCheck = r._abandonRulesCheck.bind(r)),
            r
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
          i(t, [
            {
              key: 'destroy',
              value: function() {
                this.clearTimer(), a.default.prototype.destroy.call(this)
              }
            },
            {
              key: 'onFragLoading',
              value: function(e) {
                var t = e.frag
                if (
                  'main' === t.type &&
                  (this.timer ||
                    ((this.fragCurrent = t),
                    (this.timer = setInterval(this.onCheck, 100))),
                  !this._bwEstimator)
                ) {
                  var r = this.hls,
                    i = r.config,
                    n = t.level,
                    a = void 0,
                    o = void 0
                  r.levels[n].details.live
                    ? ((a = i.abrEwmaFastLive), (o = i.abrEwmaSlowLive))
                    : ((a = i.abrEwmaFastVoD), (o = i.abrEwmaSlowVoD)),
                    (this._bwEstimator = new u.default(
                      r,
                      o,
                      a,
                      i.abrEwmaDefaultEstimate
                    ))
                }
              }
            },
            {
              key: '_abandonRulesCheck',
              value: function() {
                var e = this.hls,
                  t = e.media,
                  r = this.fragCurrent
                if (r) {
                  var i = r.loader,
                    a = e.minAutoLevel
                  if (!i || (i.stats && i.stats.aborted))
                    return (
                      l.logger.warn(
                        'frag loader destroy or aborted, disarm abandonRules'
                      ),
                      this.clearTimer(),
                      void (this._nextAutoLevel = -1)
                    )
                  var s = i.stats
                  if (
                    t &&
                    s &&
                    ((!t.paused && 0 !== t.playbackRate) || !t.readyState) &&
                    r.autoLevel &&
                    r.level
                  ) {
                    var u = f.now() - s.trequest,
                      d = Math.abs(t.playbackRate)
                    if (u > (500 * r.duration) / d) {
                      var c = e.levels,
                        h = Math.max(1, s.bw ? s.bw / 8 : (1e3 * s.loaded) / u),
                        p = c[r.level],
                        v = p.realBitrate
                          ? Math.max(p.realBitrate, p.bitrate)
                          : p.bitrate,
                        g = s.total
                          ? s.total
                          : Math.max(
                              s.loaded,
                              Math.round((r.duration * v) / 8)
                            ),
                        y = t.currentTime,
                        m = (g - s.loaded) / h,
                        b =
                          (o.BufferHelper.bufferInfo(
                            t,
                            y,
                            e.config.maxBufferHole
                          ).end -
                            y) /
                          d
                      if (b < (2 * r.duration) / d && m > b) {
                        var E = void 0,
                          T = void 0
                        for (T = r.level - 1; T > a; T--) {
                          var k = c[T].realBitrate
                            ? Math.max(c[T].realBitrate, c[T].bitrate)
                            : c[T].bitrate
                          if ((E = (r.duration * k) / (6.4 * h)) < b) break
                        }
                        E < m &&
                          (l.logger.warn(
                            'loading too slow, abort fragment loading and switch to level ' +
                              T +
                              ':fragLoadedDelay[' +
                              T +
                              ']<fragLoadedDelay[' +
                              (r.level - 1) +
                              '];bufferStarvationDelay:' +
                              E.toFixed(1) +
                              '<' +
                              m.toFixed(1) +
                              ':' +
                              b.toFixed(1)
                          ),
                          (e.nextLoadLevel = T),
                          this._bwEstimator.sample(u, s.loaded),
                          i.abort(),
                          this.clearTimer(),
                          e.trigger(n.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                            frag: r,
                            stats: s
                          }))
                      }
                    }
                  }
                }
              }
            },
            {
              key: 'onFragLoaded',
              value: function(e) {
                var t = e.frag
                if ('main' === t.type && !isNaN(t.sn)) {
                  if (
                    (this.clearTimer(),
                    (this.lastLoadedFragLevel = t.level),
                    (this._nextAutoLevel = -1),
                    this.hls.config.abrMaxWithRealBitrate)
                  ) {
                    var r = this.hls.levels[t.level],
                      i = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,
                      n = (r.loaded ? r.loaded.duration : 0) + e.frag.duration
                    ;(r.loaded = { bytes: i, duration: n }),
                      (r.realBitrate = Math.round((8 * i) / n))
                  }
                  if (e.frag.bitrateTest) {
                    var a = e.stats
                    ;(a.tparsed = a.tbuffered = a.tload), this.onFragBuffered(e)
                  }
                }
              }
            },
            {
              key: 'onFragBuffered',
              value: function(e) {
                var t = e.stats,
                  r = e.frag
                if (
                  !(
                    !0 === t.aborted ||
                    'main' !== r.type ||
                    isNaN(r.sn) ||
                    (r.bitrateTest && t.tload !== t.tbuffered)
                  )
                ) {
                  var i = t.tparsed - t.trequest
                  l.logger.log(
                    'latency/loading/parsing/append/kbps:' +
                      Math.round(t.tfirst - t.trequest) +
                      '/' +
                      Math.round(t.tload - t.tfirst) +
                      '/' +
                      Math.round(t.tparsed - t.tload) +
                      '/' +
                      Math.round(t.tbuffered - t.tparsed) +
                      '/' +
                      Math.round((8 * t.loaded) / (t.tbuffered - t.trequest))
                  ),
                    this._bwEstimator.sample(i, t.loaded),
                    (t.bwEstimate = this._bwEstimator.getEstimate()),
                    r.bitrateTest
                      ? (this.bitrateTestDelay = i / 1e3)
                      : (this.bitrateTestDelay = 0)
                }
              }
            },
            {
              key: 'onError',
              value: function(e) {
                switch (e.details) {
                  case s.ErrorDetails.FRAG_LOAD_ERROR:
                  case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    this.clearTimer()
                }
              }
            },
            {
              key: 'clearTimer',
              value: function() {
                clearInterval(this.timer), (this.timer = null)
              }
            },
            {
              key: '_findBestLevel',
              value: function(e, t, r, i, n, a, o, s, u) {
                for (var d = n; d >= i; d--) {
                  var f = u[d].details,
                    c = f ? f.totalduration / f.fragments.length : t,
                    h = !!f && f.live,
                    p = void 0
                  p = d <= e ? o * r : s * r
                  var v = u[d].realBitrate
                      ? Math.max(u[d].realBitrate, u[d].bitrate)
                      : u[d].bitrate,
                    g = (v * c) / p
                  if (
                    (l.logger.trace(
                      'level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: ' +
                        d +
                        '/' +
                        Math.round(p) +
                        '/' +
                        v +
                        '/' +
                        c +
                        '/' +
                        a +
                        '/' +
                        g
                    ),
                    p > v && (!g || (h && !this.bitrateTestDelay) || g < a))
                  )
                    return d
                }
                return -1
              }
            },
            {
              key: 'nextAutoLevel',
              get: function() {
                var e = this._nextAutoLevel,
                  t = this._bwEstimator
                if (!(-1 === e || (t && t.canEstimate()))) return e
                var r = this._nextABRAutoLevel
                return -1 !== e && (r = Math.min(e, r)), r
              },
              set: function(e) {
                this._nextAutoLevel = e
              }
            },
            {
              key: '_nextABRAutoLevel',
              get: function() {
                var e = this.hls,
                  t = e.maxAutoLevel,
                  r = e.levels,
                  i = e.config,
                  n = e.minAutoLevel,
                  a = e.media,
                  s = this.lastLoadedFragLevel,
                  u = this.fragCurrent ? this.fragCurrent.duration : 0,
                  d = a ? a.currentTime : 0,
                  f = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
                  c = this._bwEstimator
                    ? this._bwEstimator.getEstimate()
                    : i.abrEwmaDefaultEstimate,
                  h =
                    (o.BufferHelper.bufferInfo(a, d, i.maxBufferHole).end - d) /
                    f,
                  p = this._findBestLevel(
                    s,
                    u,
                    c,
                    n,
                    t,
                    h,
                    i.abrBandWidthFactor,
                    i.abrBandWidthUpFactor,
                    r
                  )
                if (p >= 0) return p
                l.logger.trace(
                  'rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering'
                )
                var v = u
                    ? Math.min(u, i.maxStarvationDelay)
                    : i.maxStarvationDelay,
                  g = i.abrBandWidthFactor,
                  y = i.abrBandWidthUpFactor
                if (0 === h) {
                  var m = this.bitrateTestDelay
                  if (m)
                    (v =
                      (u ? Math.min(u, i.maxLoadingDelay) : i.maxLoadingDelay) -
                      m),
                      l.logger.trace(
                        'bitrate test took ' +
                          Math.round(1e3 * m) +
                          'ms, set first fragment max fetchDuration to ' +
                          Math.round(1e3 * v) +
                          ' ms'
                      ),
                      (g = y = 1)
                }
                return (
                  (p = this._findBestLevel(s, u, c, n, t, h + v, g, y, r)),
                  Math.max(p, 0)
                )
              }
            }
          ]),
          t
        )
      })(a.default)
    ;(t.default = c), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      a = r(96),
      o = (i = a) && i.__esModule ? i : { default: i }
    var s = (function() {
      function e(t, r, i, n) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.hls = t),
          (this.defaultEstimate_ = n),
          (this.minWeight_ = 0.001),
          (this.minDelayMs_ = 50),
          (this.slow_ = new o.default(r)),
          (this.fast_ = new o.default(i))
      }
      return (
        n(e, [
          {
            key: 'sample',
            value: function(e, t) {
              var r = (8e3 * t) / (e = Math.max(e, this.minDelayMs_)),
                i = e / 1e3
              this.fast_.sample(i, r), this.slow_.sample(i, r)
            }
          },
          {
            key: 'canEstimate',
            value: function() {
              var e = this.fast_
              return e && e.getTotalWeight() >= this.minWeight_
            }
          },
          {
            key: 'getEstimate',
            value: function() {
              return this.canEstimate()
                ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
                : this.defaultEstimate_
            }
          },
          { key: 'destroy', value: function() {} }
        ]),
        e
      )
    })()
    ;(t.default = s), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    var n = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.alpha_ = t ? Math.exp(Math.log(0.5) / t) : 0),
          (this.estimate_ = 0),
          (this.totalWeight_ = 0)
      }
      return (
        i(e, [
          {
            key: 'sample',
            value: function(e, t) {
              var r = Math.pow(this.alpha_, e)
              ;(this.estimate_ = t * (1 - r) + r * this.estimate_),
                (this.totalWeight_ += e)
            }
          },
          {
            key: 'getTotalWeight',
            value: function() {
              return this.totalWeight_
            }
          },
          {
            key: 'getEstimate',
            value: function() {
              if (this.alpha_) {
                var e = 1 - Math.pow(this.alpha_, this.totalWeight_)
                return this.estimate_ / e
              }
              return this.estimate_
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = n), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = l(r(1)),
      a = l(r(3)),
      o = r(0),
      s = r(2)
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (0, r(18).getMediaSource)(),
      d = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var r = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              n.default.MEDIA_ATTACHING,
              n.default.MEDIA_DETACHING,
              n.default.MANIFEST_PARSED,
              n.default.BUFFER_RESET,
              n.default.BUFFER_APPENDING,
              n.default.BUFFER_CODECS,
              n.default.BUFFER_EOS,
              n.default.BUFFER_FLUSHING,
              n.default.LEVEL_PTS_UPDATED,
              n.default.LEVEL_UPDATED
            )
          )
          return (
            (r._msDuration = null),
            (r._levelDuration = null),
            (r._live = null),
            (r._objectUrl = null),
            (r.onsbue = r.onSBUpdateEnd.bind(r)),
            (r.onsbe = r.onSBUpdateError.bind(r)),
            (r.pendingTracks = {}),
            (r.tracks = {}),
            r
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
          i(t, [
            {
              key: 'destroy',
              value: function() {
                a.default.prototype.destroy.call(this)
              }
            },
            {
              key: 'onLevelPtsUpdated',
              value: function(e) {
                var t = e.type,
                  r = this.tracks.audio
                if ('audio' === t && r && 'audio/mpeg' === r.container) {
                  var i = this.sourceBuffer.audio
                  if (Math.abs(i.timestampOffset - e.start) > 0.1) {
                    var n = i.updating
                    try {
                      i.abort()
                    } catch (e) {
                      ;(n = !0),
                        o.logger.warn('can not abort audio buffer: ' + e)
                    }
                    n
                      ? (this.audioTimestampOffset = e.start)
                      : (o.logger.warn(
                          'change mpeg audio timestamp offset from ' +
                            i.timestampOffset +
                            ' to ' +
                            e.start
                        ),
                        (i.timestampOffset = e.start))
                  }
                }
              }
            },
            {
              key: 'onManifestParsed',
              value: function(e) {
                var t = e.audio,
                  r = e.video || (e.levels.length && e.altAudio),
                  i = 0
                e.altAudio &&
                  (t || r) &&
                  ((i = (t ? 1 : 0) + (r ? 1 : 0)),
                  o.logger.log(i + ' sourceBuffer(s) expected')),
                  (this.sourceBufferNb = i)
              }
            },
            {
              key: 'onMediaAttaching',
              value: function(e) {
                var t = (this.media = e.media)
                if (t) {
                  var r = (this.mediaSource = new u())
                  ;(this.onmso = this.onMediaSourceOpen.bind(this)),
                    (this.onmse = this.onMediaSourceEnded.bind(this)),
                    (this.onmsc = this.onMediaSourceClose.bind(this)),
                    r.addEventListener('sourceopen', this.onmso),
                    r.addEventListener('sourceended', this.onmse),
                    r.addEventListener('sourceclose', this.onmsc),
                    (t.src = window.URL.createObjectURL(r)),
                    (this._objectUrl = t.src)
                }
              }
            },
            {
              key: 'onMediaDetaching',
              value: function() {
                o.logger.log('media source detaching')
                var e = this.mediaSource
                if (e) {
                  if ('open' === e.readyState)
                    try {
                      e.endOfStream()
                    } catch (e) {
                      o.logger.warn(
                        'onMediaDetaching:' +
                          e.message +
                          ' while calling endOfStream'
                      )
                    }
                  e.removeEventListener('sourceopen', this.onmso),
                    e.removeEventListener('sourceended', this.onmse),
                    e.removeEventListener('sourceclose', this.onmsc),
                    this.media &&
                      (window.URL.revokeObjectURL(this._objectUrl),
                      this.media.src === this._objectUrl
                        ? (this.media.removeAttribute('src'), this.media.load())
                        : o.logger.warn(
                            'media.src was changed by a third party - skip cleanup'
                          )),
                    (this.mediaSource = null),
                    (this.media = null),
                    (this._objectUrl = null),
                    (this.pendingTracks = {}),
                    (this.tracks = {}),
                    (this.sourceBuffer = {}),
                    (this.flushRange = []),
                    (this.segments = []),
                    (this.appended = 0)
                }
                ;(this.onmso = this.onmse = this.onmsc = null),
                  this.hls.trigger(n.default.MEDIA_DETACHED)
              }
            },
            {
              key: 'onMediaSourceOpen',
              value: function() {
                o.logger.log('media source opened'),
                  this.hls.trigger(n.default.MEDIA_ATTACHED, {
                    media: this.media
                  })
                var e = this.mediaSource
                e && e.removeEventListener('sourceopen', this.onmso),
                  this.checkPendingTracks()
              }
            },
            {
              key: 'checkPendingTracks',
              value: function() {
                var e = this.pendingTracks,
                  t = Object.keys(e).length
                t &&
                  (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) &&
                  (this.createSourceBuffers(e),
                  (this.pendingTracks = {}),
                  this.doAppending())
              }
            },
            {
              key: 'onMediaSourceClose',
              value: function() {
                o.logger.log('media source closed')
              }
            },
            {
              key: 'onMediaSourceEnded',
              value: function() {
                o.logger.log('media source ended')
              }
            },
            {
              key: 'onSBUpdateEnd',
              value: function() {
                if (this.audioTimestampOffset) {
                  var e = this.sourceBuffer.audio
                  o.logger.warn(
                    'change mpeg audio timestamp offset from ' +
                      e.timestampOffset +
                      ' to ' +
                      this.audioTimestampOffset
                  ),
                    (e.timestampOffset = this.audioTimestampOffset),
                    delete this.audioTimestampOffset
                }
                this._needsFlush && this.doFlush(),
                  this._needsEos && this.checkEos(),
                  (this.appending = !1)
                var t = this.parent,
                  r = this.segments.reduce(function(e, r) {
                    return r.parent === t ? e + 1 : e
                  }, 0),
                  i = {},
                  a = this.sourceBuffer
                for (var s in a) i[s] = a[s].buffered
                this.hls.trigger(n.default.BUFFER_APPENDED, {
                  parent: t,
                  pending: r,
                  timeRanges: i
                }),
                  this._needsFlush || this.doAppending(),
                  this.updateMediaElementDuration()
              }
            },
            {
              key: 'onSBUpdateError',
              value: function(e) {
                o.logger.error('sourceBuffer error:', e),
                  this.hls.trigger(n.default.ERROR, {
                    type: s.ErrorTypes.MEDIA_ERROR,
                    details: s.ErrorDetails.BUFFER_APPENDING_ERROR,
                    fatal: !1
                  })
              }
            },
            {
              key: 'onBufferReset',
              value: function() {
                var e = this.sourceBuffer
                for (var t in e) {
                  var r = e[t]
                  try {
                    this.mediaSource.removeSourceBuffer(r),
                      r.removeEventListener('updateend', this.onsbue),
                      r.removeEventListener('error', this.onsbe)
                  } catch (e) {}
                }
                ;(this.sourceBuffer = {}),
                  (this.flushRange = []),
                  (this.segments = []),
                  (this.appended = 0)
              }
            },
            {
              key: 'onBufferCodecs',
              value: function(e) {
                if (0 === Object.keys(this.sourceBuffer).length) {
                  for (var t in e) this.pendingTracks[t] = e[t]
                  var r = this.mediaSource
                  r && 'open' === r.readyState && this.checkPendingTracks()
                }
              }
            },
            {
              key: 'createSourceBuffers',
              value: function(e) {
                var t = this.sourceBuffer,
                  r = this.mediaSource
                for (var i in e)
                  if (!t[i]) {
                    var a = e[i],
                      l = a.levelCodec || a.codec,
                      u = a.container + ';codecs=' + l
                    o.logger.log('creating sourceBuffer(' + u + ')')
                    try {
                      var d = (t[i] = r.addSourceBuffer(u))
                      d.addEventListener('updateend', this.onsbue),
                        d.addEventListener('error', this.onsbe),
                        (this.tracks[i] = { codec: l, container: a.container }),
                        (a.buffer = d)
                    } catch (e) {
                      o.logger.error(
                        'error while trying to add sourceBuffer:' + e.message
                      ),
                        this.hls.trigger(n.default.ERROR, {
                          type: s.ErrorTypes.MEDIA_ERROR,
                          details: s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                          fatal: !1,
                          err: e,
                          mimeType: u
                        })
                    }
                  }
                this.hls.trigger(n.default.BUFFER_CREATED, { tracks: e })
              }
            },
            {
              key: 'onBufferAppending',
              value: function(e) {
                this._needsFlush ||
                  (this.segments
                    ? this.segments.push(e)
                    : (this.segments = [e]),
                  this.doAppending())
              }
            },
            {
              key: 'onBufferAppendFail',
              value: function(e) {
                o.logger.error('sourceBuffer error:', e.event),
                  this.hls.trigger(n.default.ERROR, {
                    type: s.ErrorTypes.MEDIA_ERROR,
                    details: s.ErrorDetails.BUFFER_APPENDING_ERROR,
                    fatal: !1
                  })
              }
            },
            {
              key: 'onBufferEos',
              value: function(e) {
                var t = this.sourceBuffer,
                  r = e.type
                for (var i in t)
                  (r && i !== r) ||
                    t[i].ended ||
                    ((t[i].ended = !0),
                    o.logger.log(i + ' sourceBuffer now EOS'))
                this.checkEos()
              }
            },
            {
              key: 'checkEos',
              value: function() {
                var e = this.sourceBuffer,
                  t = this.mediaSource
                if (t && 'open' === t.readyState) {
                  for (var r in e) {
                    var i = e[r]
                    if (!i.ended) return
                    if (i.updating) return void (this._needsEos = !0)
                  }
                  o.logger.log(
                    'all media data available, signal endOfStream() to MediaSource and stop loading fragment'
                  )
                  try {
                    t.endOfStream()
                  } catch (e) {
                    o.logger.warn(
                      'exception while calling mediaSource.endOfStream()'
                    )
                  }
                  this._needsEos = !1
                } else this._needsEos = !1
              }
            },
            {
              key: 'onBufferFlushing',
              value: function(e) {
                this.flushRange.push({
                  start: e.startOffset,
                  end: e.endOffset,
                  type: e.type
                }),
                  (this.flushBufferCounter = 0),
                  this.doFlush()
              }
            },
            {
              key: 'onLevelUpdated',
              value: function(e) {
                var t = e.details
                t.fragments.length > 0 &&
                  ((this._levelDuration =
                    t.totalduration + t.fragments[0].start),
                  (this._live = t.live),
                  this.updateMediaElementDuration())
              }
            },
            {
              key: 'updateMediaElementDuration',
              value: function() {
                var e,
                  t = this.hls.config
                if (
                  null !== this._levelDuration &&
                  this.media &&
                  this.mediaSource &&
                  this.sourceBuffer &&
                  0 !== this.media.readyState &&
                  'open' === this.mediaSource.readyState
                ) {
                  for (var r in this.sourceBuffer)
                    if (!0 === this.sourceBuffer[r].updating) return
                  ;(e = this.media.duration),
                    null === this._msDuration &&
                      (this._msDuration = this.mediaSource.duration),
                    !0 === this._live && !0 === t.liveDurationInfinity
                      ? (o.logger.log(
                          'Media Source duration is set to Infinity'
                        ),
                        (this._msDuration = this.mediaSource.duration = 1 / 0))
                      : ((this._levelDuration > this._msDuration &&
                          this._levelDuration > e) ||
                          e === 1 / 0 ||
                          isNaN(e)) &&
                        (o.logger.log(
                          'Updating Media Source duration to ' +
                            this._levelDuration.toFixed(3)
                        ),
                        (this._msDuration = this.mediaSource.duration = this._levelDuration))
                }
              }
            },
            {
              key: 'doFlush',
              value: function() {
                for (; this.flushRange.length; ) {
                  var e = this.flushRange[0]
                  if (!this.flushBuffer(e.start, e.end, e.type))
                    return void (this._needsFlush = !0)
                  this.flushRange.shift(), (this.flushBufferCounter = 0)
                }
                if (0 === this.flushRange.length) {
                  this._needsFlush = !1
                  var t = 0,
                    r = this.sourceBuffer
                  try {
                    for (var i in r) t += r[i].buffered.length
                  } catch (e) {
                    o.logger.error(
                      'error while accessing sourceBuffer.buffered'
                    )
                  }
                  ;(this.appended = t),
                    this.hls.trigger(n.default.BUFFER_FLUSHED)
                }
              }
            },
            {
              key: 'doAppending',
              value: function() {
                var e = this.hls,
                  t = this.sourceBuffer,
                  r = this.segments
                if (Object.keys(t).length) {
                  if (this.media.error)
                    return (
                      (this.segments = []),
                      void o.logger.error(
                        'trying to append although a media error occured, flush segment and abort'
                      )
                    )
                  if (this.appending) return
                  if (r && r.length) {
                    var i = r.shift()
                    try {
                      var a = t[i.type]
                      a
                        ? a.updating
                          ? r.unshift(i)
                          : ((a.ended = !1),
                            (this.parent = i.parent),
                            a.appendBuffer(i.data),
                            (this.appendError = 0),
                            this.appended++,
                            (this.appending = !0))
                        : this.onSBUpdateEnd()
                    } catch (t) {
                      o.logger.error(
                        'error while trying to append buffer:' + t.message
                      ),
                        r.unshift(i)
                      var l = {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        parent: i.parent
                      }
                      22 !== t.code
                        ? (this.appendError
                            ? this.appendError++
                            : (this.appendError = 1),
                          (l.details = s.ErrorDetails.BUFFER_APPEND_ERROR),
                          this.appendError > e.config.appendErrorMaxRetry
                            ? (o.logger.log(
                                'fail ' +
                                  e.config.appendErrorMaxRetry +
                                  ' times to append segment in sourceBuffer'
                              ),
                              (r = []),
                              (l.fatal = !0),
                              e.trigger(n.default.ERROR, l))
                            : ((l.fatal = !1), e.trigger(n.default.ERROR, l)))
                        : ((this.segments = []),
                          (l.details = s.ErrorDetails.BUFFER_FULL_ERROR),
                          (l.fatal = !1),
                          e.trigger(n.default.ERROR, l))
                    }
                  }
                }
              }
            },
            {
              key: 'flushBuffer',
              value: function(e, t, r) {
                var i = void 0,
                  n = void 0,
                  a = void 0,
                  s = void 0,
                  l = void 0,
                  u = void 0,
                  d = this.sourceBuffer
                if (Object.keys(d).length) {
                  if (
                    (o.logger.log(
                      'flushBuffer,pos/start/end: ' +
                        this.media.currentTime.toFixed(3) +
                        '/' +
                        e +
                        '/' +
                        t
                    ),
                    this.flushBufferCounter < this.appended)
                  ) {
                    for (var f in d)
                      if (!r || f === r) {
                        if ((((i = d[f]).ended = !1), i.updating))
                          return (
                            o.logger.warn(
                              'cannot flush, sb updating in progress'
                            ),
                            !1
                          )
                        try {
                          for (n = 0; n < i.buffered.length; n++)
                            if (
                              ((a = i.buffered.start(n)),
                              (s = i.buffered.end(n)),
                              -1 !==
                                navigator.userAgent
                                  .toLowerCase()
                                  .indexOf('firefox') &&
                              t === Number.POSITIVE_INFINITY
                                ? ((l = e), (u = t))
                                : ((l = Math.max(a, e)), (u = Math.min(s, t))),
                              Math.min(u, s) - l > 0.5)
                            )
                              return (
                                this.flushBufferCounter++,
                                o.logger.log(
                                  'flush ' +
                                    f +
                                    ' [' +
                                    l +
                                    ',' +
                                    u +
                                    '], of [' +
                                    a +
                                    ',' +
                                    s +
                                    '], pos:' +
                                    this.media.currentTime
                                ),
                                i.remove(l, u),
                                !1
                              )
                        } catch (e) {
                          o.logger.warn(
                            'exception while accessing sourcebuffer, it might have been removed from MediaSource'
                          )
                        }
                      }
                  } else o.logger.warn('abort flushing too many retries')
                  o.logger.log('buffer flushed')
                }
                return !0
              }
            }
          ]),
          t
        )
      })(a.default)
    ;(t.default = d), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = a(r(1))
    function a(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var o = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            n.default.FPS_DROP_LEVEL_CAPPING,
            n.default.MEDIA_ATTACHING,
            n.default.MANIFEST_PARSED,
            n.default.BUFFER_CODECS
          )
        )
        return (
          (r.autoLevelCapping = Number.POSITIVE_INFINITY),
          (r.firstLevel = null),
          (r.levels = []),
          (r.media = null),
          (r.restrictedLevels = []),
          (r.timer = null),
          r
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
        i(
          t,
          [
            {
              key: 'destroy',
              value: function() {
                this.hls.config.capLevelToPlayerSize &&
                  ((this.media = null), this._stopCapping())
              }
            },
            {
              key: 'onFpsDropLevelCapping',
              value: function(e) {
                t.isLevelAllowed(e.droppedLevel, this.restrictedLevels) &&
                  this.restrictedLevels.push(e.droppedLevel)
              }
            },
            {
              key: 'onMediaAttaching',
              value: function(e) {
                this.media =
                  e.media instanceof window.HTMLVideoElement ? e.media : null
              }
            },
            {
              key: 'onManifestParsed',
              value: function(e) {
                var t = this.hls
                ;(this.restrictedLevels = []),
                  (this.levels = e.levels),
                  (this.firstLevel = e.firstLevel),
                  t.config.capLevelToPlayerSize &&
                    (e.video || (e.levels.length && e.altAudio)) &&
                    this._startCapping()
              }
            },
            {
              key: 'onBufferCodecs',
              value: function(e) {
                this.hls.config.capLevelToPlayerSize &&
                  e.video &&
                  this._startCapping()
              }
            },
            {
              key: 'onLevelsUpdated',
              value: function(e) {
                this.levels = e.levels
              }
            },
            {
              key: 'detectPlayerSize',
              value: function() {
                if (this.media) {
                  var e = this.levels ? this.levels.length : 0
                  if (e) {
                    var t = this.hls
                    ;(t.autoLevelCapping = this.getMaxLevel(e - 1)),
                      t.autoLevelCapping > this.autoLevelCapping &&
                        t.streamController.nextLevelSwitch(),
                      (this.autoLevelCapping = t.autoLevelCapping)
                  }
                }
              }
            },
            {
              key: 'getMaxLevel',
              value: function(e) {
                var r = this
                if (!this.levels) return -1
                var i = this.levels.filter(function(i, n) {
                  return t.isLevelAllowed(n, r.restrictedLevels) && n <= e
                })
                return t.getMaxLevelByMediaSize(
                  i,
                  this.mediaWidth,
                  this.mediaHeight
                )
              }
            },
            {
              key: '_startCapping',
              value: function() {
                this.timer ||
                  ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
                  (this.hls.firstLevel = this.getMaxLevel(this.firstLevel)),
                  clearInterval(this.timer),
                  (this.timer = setInterval(
                    this.detectPlayerSize.bind(this),
                    1e3
                  )),
                  this.detectPlayerSize())
              }
            },
            {
              key: '_stopCapping',
              value: function() {
                ;(this.restrictedLevels = []),
                  (this.firstLevel = null),
                  (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                  this.timer &&
                    ((this.timer = clearInterval(this.timer)),
                    (this.timer = null))
              }
            },
            {
              key: 'mediaWidth',
              get: function() {
                var e = void 0,
                  r = this.media
                return (
                  r &&
                    ((e = r.width || r.clientWidth || r.offsetWidth),
                    (e *= t.contentScaleFactor)),
                  e
                )
              }
            },
            {
              key: 'mediaHeight',
              get: function() {
                var e = void 0,
                  r = this.media
                return (
                  r &&
                    ((e = r.height || r.clientHeight || r.offsetHeight),
                    (e *= t.contentScaleFactor)),
                  e
                )
              }
            }
          ],
          [
            {
              key: 'isLevelAllowed',
              value: function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : []
                return -1 === t.indexOf(e)
              }
            },
            {
              key: 'getMaxLevelByMediaSize',
              value: function(e, t, r) {
                if (!e || (e && !e.length)) return -1
                for (var i, n, a = e.length - 1, o = 0; o < e.length; o += 1) {
                  var s = e[o]
                  if (
                    (s.width >= t || s.height >= r) &&
                    ((i = s),
                    !(n = e[o + 1]) ||
                      i.width !== n.width ||
                      i.height !== n.height)
                  ) {
                    a = o
                    break
                  }
                }
                return a
              }
            },
            {
              key: 'contentScaleFactor',
              get: function() {
                var e = 1
                try {
                  e = window.devicePixelRatio
                } catch (e) {}
                return e
              }
            }
          ]
        ),
        t
      )
    })(a(r(3)).default)
    ;(t.default = o), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = s(r(1)),
      a = s(r(3)),
      o = r(0)
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = window.performance,
      u = (function(e) {
        function t(e) {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(
                this,
                e,
                n.default.MEDIA_ATTACHING
              )
            )
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
          i(t, [
            {
              key: 'destroy',
              value: function() {
                this.timer && clearInterval(this.timer),
                  (this.isVideoPlaybackQualityAvailable = !1)
              }
            },
            {
              key: 'onMediaAttaching',
              value: function(e) {
                var t = this.hls.config
                t.capLevelOnFPSDrop &&
                  ('function' ==
                    typeof (this.video =
                      e.media instanceof window.HTMLVideoElement
                        ? e.media
                        : null).getVideoPlaybackQuality &&
                    (this.isVideoPlaybackQualityAvailable = !0),
                  clearInterval(this.timer),
                  (this.timer = setInterval(
                    this.checkFPSInterval.bind(this),
                    t.fpsDroppedMonitoringPeriod
                  )))
              }
            },
            {
              key: 'checkFPS',
              value: function(e, t, r) {
                var i = l.now()
                if (t) {
                  if (this.lastTime) {
                    var a = i - this.lastTime,
                      s = r - this.lastDroppedFrames,
                      u = t - this.lastDecodedFrames,
                      d = (1e3 * s) / a,
                      f = this.hls
                    if (
                      (f.trigger(n.default.FPS_DROP, {
                        currentDropped: s,
                        currentDecoded: u,
                        totalDroppedFrames: r
                      }),
                      d > 0 && s > f.config.fpsDroppedMonitoringThreshold * u)
                    ) {
                      var c = f.currentLevel
                      o.logger.warn(
                        'drop FPS ratio greater than max allowed value for currentLevel: ' +
                          c
                      ),
                        c > 0 &&
                          (-1 === f.autoLevelCapping ||
                            f.autoLevelCapping >= c) &&
                          ((c -= 1),
                          f.trigger(n.default.FPS_DROP_LEVEL_CAPPING, {
                            level: c,
                            droppedLevel: f.currentLevel
                          }),
                          (f.autoLevelCapping = c),
                          f.streamController.nextLevelSwitch())
                    }
                  }
                  ;(this.lastTime = i),
                    (this.lastDroppedFrames = r),
                    (this.lastDecodedFrames = t)
                }
              }
            },
            {
              key: 'checkFPSInterval',
              value: function() {
                var e = this.video
                if (e)
                  if (this.isVideoPlaybackQualityAvailable) {
                    var t = e.getVideoPlaybackQuality()
                    this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                  } else
                    this.checkFPS(
                      e,
                      e.webkitDecodedFrameCount,
                      e.webkitDroppedFrameCount
                    )
              }
            }
          ]),
          t
        )
      })(a.default)
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = l(r(1)),
      a = l(r(9)),
      o = r(0),
      s = r(2)
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            n.default.MANIFEST_LOADING,
            n.default.MANIFEST_PARSED,
            n.default.AUDIO_TRACK_LOADED,
            n.default.AUDIO_TRACK_SWITCHED,
            n.default.LEVEL_LOADED,
            n.default.ERROR
          )
        )
        return (
          (r.trackId = -1),
          (r.tracks = []),
          (r.trackIdBlacklist = Object.create(null)),
          (r.audioGroupId = null),
          r
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
        i(t, [
          {
            key: 'onManifestLoading',
            value: function() {
              ;(this.tracks = []), (this.trackId = -1)
            }
          },
          {
            key: 'onManifestParsed',
            value: function(e) {
              var t = (this.tracks = e.audioTracks || [])
              this.hls.trigger(n.default.AUDIO_TRACKS_UPDATED, {
                audioTracks: t
              })
            }
          },
          {
            key: 'onAudioTrackLoaded',
            value: function(e) {
              if (e.id >= this.tracks.length)
                o.logger.warn('Invalid audio track id:', e.id)
              else {
                if (
                  (o.logger.log('audioTrack ' + e.id + ' loaded'),
                  (this.tracks[e.id].details = e.details),
                  e.details.live && !this.hasInterval())
                ) {
                  var t = 1e3 * e.details.targetduration
                  this.setInterval(t)
                }
                !e.details.live && this.hasInterval() && this.clearInterval()
              }
            }
          },
          {
            key: 'onAudioTrackSwitched',
            value: function(e) {
              var t = this.tracks[e.id].groupId
              t && this.audioGroupId !== t && (this.audioGroupId = t)
            }
          },
          {
            key: 'onLevelLoaded',
            value: function(e) {
              var t = this.hls.levels[e.level]
              if (t.audioGroupIds) {
                var r = t.audioGroupIds[t.urlId]
                this.audioGroupId !== r &&
                  ((this.audioGroupId = r), this._selectInitialAudioTrack())
              }
            }
          },
          {
            key: 'onError',
            value: function(e) {
              e.type === s.ErrorTypes.NETWORK_ERROR &&
                (e.fatal && this.clearInterval(),
                e.details === s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR &&
                  (o.logger.warn(
                    'Network failure on audio-track id:',
                    e.context.id
                  ),
                  this._handleLoadError()))
            }
          },
          {
            key: 'doTick',
            value: function() {
              this._updateTrack(this.trackId)
            }
          },
          {
            key: '_selectInitialAudioTrack',
            value: function() {
              var e = this,
                t = this.tracks
              if (t.length) {
                var r = this.tracks[this.trackId],
                  i = null
                r && (i = r.name)
                var a = t.filter(function(e) {
                  return e.default
                })
                a.length
                  ? (t = a)
                  : o.logger.warn('No default audio tracks defined')
                var l = !1,
                  u = function() {
                    t.forEach(function(t) {
                      l ||
                        (e.audioGroupId && t.groupId !== e.audioGroupId) ||
                        (i && i !== t.name) ||
                        ((e.audioTrack = t.id), (l = !0))
                    })
                  }
                u(),
                  l || ((i = null), u()),
                  l ||
                    (o.logger.error(
                      'No track found for running audio group-ID: ' +
                        this.audioGroupId
                    ),
                    this.hls.trigger(n.default.ERROR, {
                      type: s.ErrorTypes.MEDIA_ERROR,
                      details: s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                      fatal: !0
                    }))
              }
            }
          },
          {
            key: '_needsTrackLoading',
            value: function(e) {
              var t = e.details
              return !t || (!!t.live || void 0)
            }
          },
          {
            key: '_loadTrackDetailsIfNeeded',
            value: function(e) {
              if (this._needsTrackLoading(e)) {
                var t = e.url,
                  r = e.id
                o.logger.log('loading audio-track playlist for id: ' + r),
                  this.hls.trigger(n.default.AUDIO_TRACK_LOADING, {
                    url: t,
                    id: r
                  })
              }
            }
          },
          {
            key: '_updateTrack',
            value: function(e) {
              if (!(e < 0 || e >= this.tracks.length)) {
                this.clearInterval(),
                  (this.trackId = e),
                  o.logger.log('trying to update audio-track ' + e)
                var t = this.tracks[e]
                this._loadTrackDetailsIfNeeded(t)
              }
            }
          },
          {
            key: '_handleLoadError',
            value: function() {
              this.trackIdBlacklist[this.trackId] = !0
              var e = this.trackId,
                t = this.tracks[e],
                r = t.name,
                i = t.language,
                n = t.groupId
              o.logger.warn(
                'Loading failed on audio track id: ' +
                  e +
                  ', group-id: ' +
                  n +
                  ', name/language: "' +
                  r +
                  '" / "' +
                  i +
                  '"'
              )
              for (var a = e, s = 0; s < this.tracks.length; s++) {
                if (!this.trackIdBlacklist[s])
                  if (this.tracks[s].name === r) {
                    a = s
                    break
                  }
              }
              a !== e
                ? (o.logger.log(
                    'Attempting audio-track fallback id:',
                    a,
                    'group-id:',
                    this.tracks[a].groupId
                  ),
                  (this.audioTrack = a))
                : o.logger.warn(
                    'No fallback audio-track found for name/language: "' +
                      r +
                      '" / "' +
                      i +
                      '"'
                  )
            }
          },
          {
            key: 'audioTracks',
            get: function() {
              return this.tracks
            }
          },
          {
            key: 'audioTrack',
            get: function() {
              return this.trackId
            },
            set: function(e) {
              if (this.trackId === e && this.tracks[this.trackId].details)
                o.logger.debug(
                  'Same id as current audio-track passed, and track details available -> no-op'
                )
              else if (e < 0 || e >= this.tracks.length)
                o.logger.warn('Invalid id passed to audio-track controller')
              else {
                var t = this.tracks[e]
                o.logger.log('Now switching to audio-track index ' + e),
                  this.clearInterval(),
                  (this.trackId = e)
                var r = t.url,
                  i = t.type,
                  a = t.id
                this.hls.trigger(n.default.AUDIO_TRACK_SWITCHING, {
                  id: a,
                  type: i,
                  url: r
                }),
                  this._loadTrackDetailsIfNeeded(t)
              }
            }
          }
        ]),
        t
      )
    })(a.default)
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = function e(t, r, i) {
        null === t && (t = Function.prototype)
        var n = Object.getOwnPropertyDescriptor(t, r)
        if (void 0 === n) {
          var a = Object.getPrototypeOf(t)
          return null === a ? void 0 : e(a, r, i)
        }
        if ('value' in n) return n.value
        var o = n.get
        return void 0 !== o ? o.call(i) : void 0
      },
      a = y(r(7)),
      o = r(15),
      s = y(r(35)),
      l = y(r(1)),
      u = (function(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        return (t.default = e), t
      })(r(19)),
      d = y(r(39)),
      f = r(2),
      c = r(0),
      h = r(40),
      p = y(r(9)),
      v = r(14),
      g = y(r(10))
    function y(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var m = window.performance,
      b = 'STOPPED',
      E = 'STARTING',
      T = 'IDLE',
      k = 'PAUSED',
      _ = 'KEY_LOADING',
      S = 'FRAG_LOADING',
      w = 'FRAG_LOADING_WAITING_RETRY',
      A = 'WAITING_TRACK',
      R = 'PARSING',
      O = 'PARSED',
      L = 'BUFFER_FLUSHING',
      D = 'ENDED',
      P = 'ERROR',
      C = 'WAITING_INIT_PTS',
      I = (function(e) {
        function t(e, r) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var i = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              l.default.MEDIA_ATTACHED,
              l.default.MEDIA_DETACHING,
              l.default.AUDIO_TRACKS_UPDATED,
              l.default.AUDIO_TRACK_SWITCHING,
              l.default.AUDIO_TRACK_LOADED,
              l.default.KEY_LOADED,
              l.default.FRAG_LOADED,
              l.default.FRAG_PARSING_INIT_SEGMENT,
              l.default.FRAG_PARSING_DATA,
              l.default.FRAG_PARSED,
              l.default.ERROR,
              l.default.BUFFER_RESET,
              l.default.BUFFER_CREATED,
              l.default.BUFFER_APPENDED,
              l.default.BUFFER_FLUSHED,
              l.default.INIT_PTS_FOUND
            )
          )
          return (
            (i.fragmentTracker = r),
            (i.config = e.config),
            (i.audioCodecSwap = !1),
            (i._state = b),
            (i.initPTS = []),
            (i.waitingFragment = null),
            (i.videoTrackCC = null),
            i
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
          i(t, [
            {
              key: 'onHandlerDestroying',
              value: function() {
                this.stopLoad(),
                  n(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'onHandlerDestroying',
                    this
                  ).call(this)
              }
            },
            {
              key: 'onHandlerDestroyed',
              value: function() {
                ;(this.state = b),
                  (this.fragmentTracker = null),
                  n(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'onHandlerDestroyed',
                    this
                  ).call(this)
              }
            },
            {
              key: 'onInitPtsFound',
              value: function(e) {
                var t = e.id,
                  r = e.frag.cc,
                  i = e.initPTS
                'main' === t &&
                  ((this.initPTS[r] = i),
                  (this.videoTrackCC = r),
                  c.logger.log(
                    'InitPTS for cc: ' + r + ' found from video track: ' + i
                  ),
                  this.state === C && this.tick())
              }
            },
            {
              key: 'startLoad',
              value: function(e) {
                if (this.tracks) {
                  var t = this.lastCurrentTime
                  this.stopLoad(),
                    this.setInterval(100),
                    (this.fragLoadError = 0),
                    t > 0 && -1 === e
                      ? (c.logger.log(
                          'audio:override startPosition with lastCurrentTime @' +
                            t.toFixed(3)
                        ),
                        (this.state = T))
                      : ((this.lastCurrentTime = this.startPosition
                          ? this.startPosition
                          : e),
                        (this.state = E)),
                    (this.nextLoadPosition = this.startPosition = this.lastCurrentTime),
                    this.tick()
                } else (this.startPosition = e), (this.state = b)
              }
            },
            {
              key: 'stopLoad',
              value: function() {
                var e = this.fragCurrent
                e &&
                  (e.loader && e.loader.abort(),
                  this.fragmentTracker.removeFragment(e),
                  (this.fragCurrent = null)),
                  (this.fragPrevious = null),
                  this.demuxer &&
                    (this.demuxer.destroy(), (this.demuxer = null)),
                  (this.state = b)
              }
            },
            {
              key: 'doTick',
              value: function() {
                var e = void 0,
                  t = void 0,
                  r = void 0,
                  i = this.hls,
                  n = i.config
                switch (this.state) {
                  case P:
                  case k:
                  case L:
                    break
                  case E:
                    ;(this.state = A), (this.loadedmetadata = !1)
                    break
                  case T:
                    var s = this.tracks
                    if (!s) break
                    if (
                      !this.media &&
                      (this.startFragRequested || !n.startFragPrefetch)
                    )
                      break
                    if (this.loadedmetadata) e = this.media.currentTime
                    else if (void 0 === (e = this.nextLoadPosition)) break
                    var u = this.mediaBuffer ? this.mediaBuffer : this.media,
                      d = this.videoBuffer ? this.videoBuffer : this.media,
                      f = o.BufferHelper.bufferInfo(u, e, n.maxBufferHole),
                      p = o.BufferHelper.bufferInfo(d, e, n.maxBufferHole),
                      g = f.len,
                      y = f.end,
                      b = this.fragPrevious,
                      R = Math.min(n.maxBufferLength, n.maxMaxBufferLength),
                      O = Math.max(R, p.len),
                      I = this.audioSwitch,
                      x = this.trackId
                    if ((g < O || I) && x < s.length) {
                      if (void 0 === (r = s[x].details)) {
                        this.state = A
                        break
                      }
                      if (
                        !I &&
                        !r.live &&
                        b &&
                        b.sn === r.endSN &&
                        !f.nextStart &&
                        (!this.media.seeking ||
                          this.media.duration - y < b.duration / 2)
                      ) {
                        this.hls.trigger(l.default.BUFFER_EOS, {
                          type: 'audio'
                        }),
                          (this.state = D)
                        break
                      }
                      var M = r.fragments,
                        F = M.length,
                        N = M[0].start,
                        U = M[F - 1].start + M[F - 1].duration,
                        B = void 0
                      if (I)
                        if (r.live && !r.PTSKnown)
                          c.logger.log(
                            'switching audiotrack, live stream, unknown PTS,load first fragment'
                          ),
                            (y = 0)
                        else if (((y = e), r.PTSKnown && e < N)) {
                          if (!(f.end > N || f.nextStart)) return
                          c.logger.log(
                            'alt audio track ahead of main track, seek to start of alt audio track'
                          ),
                            (this.media.currentTime = N + 0.05)
                        }
                      if (r.initSegment && !r.initSegment.data)
                        B = r.initSegment
                      else if (y <= N) {
                        if (
                          ((B = M[0]),
                          null !== this.videoTrackCC &&
                            B.cc !== this.videoTrackCC &&
                            (B = (0, h.findFragWithCC)(M, this.videoTrackCC)),
                          r.live && B.loadIdx && B.loadIdx === this.fragLoadIdx)
                        ) {
                          var j = f.nextStart ? f.nextStart : N
                          return (
                            c.logger.log(
                              'no alt audio available @currentTime:' +
                                this.media.currentTime +
                                ', seeking @' +
                                (j + 0.05)
                            ),
                            void (this.media.currentTime = j + 0.05)
                          )
                        }
                      } else {
                        var G = void 0,
                          K = n.maxFragLookUpTolerance,
                          H = b ? M[b.sn - M[0].sn + 1] : void 0,
                          V = function(e) {
                            var t = Math.min(K, e.duration)
                            return e.start + e.duration - t <= y
                              ? 1
                              : e.start - t > y && e.start
                                ? -1
                                : 0
                          }
                        y < U
                          ? (y > U - K && (K = 0),
                            (G = H && !V(H) ? H : a.default.search(M, V)))
                          : (G = M[F - 1]),
                          G &&
                            ((B = G),
                            (N = G.start),
                            b &&
                              B.level === b.level &&
                              B.sn === b.sn &&
                              (B.sn < r.endSN
                                ? ((B = M[B.sn + 1 - r.startSN]),
                                  c.logger.log(
                                    'SN just loaded, load next one: ' + B.sn
                                  ))
                                : (B = null)))
                      }
                      B &&
                        (B.encrypted
                          ? (c.logger.log(
                              'Loading key for ' +
                                B.sn +
                                ' of [' +
                                r.startSN +
                                ' ,' +
                                r.endSN +
                                '],track ' +
                                x
                            ),
                            (this.state = _),
                            i.trigger(l.default.KEY_LOADING, { frag: B }))
                          : (c.logger.log(
                              'Loading ' +
                                B.sn +
                                ', cc: ' +
                                B.cc +
                                ' of [' +
                                r.startSN +
                                ' ,' +
                                r.endSN +
                                '],track ' +
                                x +
                                ', currentTime:' +
                                e +
                                ',bufferEnd:' +
                                y.toFixed(3)
                            ),
                            (I ||
                              this.fragmentTracker.getState(B) ===
                                v.FragmentState.NOT_LOADED) &&
                              ((this.fragCurrent = B),
                              (this.startFragRequested = !0),
                              isNaN(B.sn) ||
                                (this.nextLoadPosition = B.start + B.duration),
                              i.trigger(l.default.FRAG_LOADING, { frag: B }),
                              (this.state = S))))
                    }
                    break
                  case A:
                    ;(t = this.tracks[this.trackId]) &&
                      t.details &&
                      (this.state = T)
                    break
                  case w:
                    var Y = m.now(),
                      q = this.retryDate,
                      W = (u = this.media) && u.seeking
                    ;(!q || Y >= q || W) &&
                      (c.logger.log(
                        'audioStreamController: retryDate reached, switch back to IDLE state'
                      ),
                      (this.state = T))
                    break
                  case C:
                    var z = this.videoTrackCC
                    if (void 0 === this.initPTS[z]) break
                    var X = this.waitingFragment
                    if (X) {
                      var Q = X.frag.cc
                      z !== Q
                        ? (t = this.tracks[this.trackId]).details &&
                          t.details.live &&
                          (c.logger.warn(
                            'Waiting fragment CC (' +
                              Q +
                              ') does not match video track CC (' +
                              z +
                              ')'
                          ),
                          (this.waitingFragment = null),
                          (this.state = T))
                        : ((this.state = S),
                          this.onFragLoaded(this.waitingFragment),
                          (this.waitingFragment = null))
                    } else this.state = T
                }
              }
            },
            {
              key: 'onMediaAttached',
              value: function(e) {
                var t = (this.media = this.mediaBuffer = e.media)
                ;(this.onvseeking = this.onMediaSeeking.bind(this)),
                  (this.onvended = this.onMediaEnded.bind(this)),
                  t.addEventListener('seeking', this.onvseeking),
                  t.addEventListener('ended', this.onvended)
                var r = this.config
                this.tracks &&
                  r.autoStartLoad &&
                  this.startLoad(r.startPosition)
              }
            },
            {
              key: 'onMediaDetaching',
              value: function() {
                var e = this.media
                e &&
                  e.ended &&
                  (c.logger.log(
                    'MSE detaching and video ended, reset startPosition'
                  ),
                  (this.startPosition = this.lastCurrentTime = 0)),
                  e &&
                    (e.removeEventListener('seeking', this.onvseeking),
                    e.removeEventListener('ended', this.onvended),
                    (this.onvseeking = this.onvseeked = this.onvended = null)),
                  (this.media = this.mediaBuffer = this.videoBuffer = null),
                  (this.loadedmetadata = !1),
                  this.stopLoad()
              }
            },
            {
              key: 'onMediaSeeking',
              value: function() {
                this.state === D && (this.state = T),
                  this.media && (this.lastCurrentTime = this.media.currentTime),
                  this.tick()
              }
            },
            {
              key: 'onMediaEnded',
              value: function() {
                this.startPosition = this.lastCurrentTime = 0
              }
            },
            {
              key: 'onAudioTracksUpdated',
              value: function(e) {
                c.logger.log('audio tracks updated'),
                  (this.tracks = e.audioTracks)
              }
            },
            {
              key: 'onAudioTrackSwitching',
              value: function(e) {
                var t = !!e.url
                ;(this.trackId = e.id),
                  (this.fragCurrent = null),
                  (this.state = k),
                  (this.waitingFragment = null),
                  t
                    ? this.setInterval(100)
                    : this.demuxer &&
                      (this.demuxer.destroy(), (this.demuxer = null)),
                  t && ((this.audioSwitch = !0), (this.state = T)),
                  this.tick()
              }
            },
            {
              key: 'onAudioTrackLoaded',
              value: function(e) {
                var t = e.details,
                  r = e.id,
                  i = this.tracks[r],
                  n = t.totalduration,
                  a = 0
                if (
                  (c.logger.log(
                    'track ' +
                      r +
                      ' loaded [' +
                      t.startSN +
                      ',' +
                      t.endSN +
                      '],duration:' +
                      n
                  ),
                  t.live)
                ) {
                  var o = i.details
                  o && t.fragments.length > 0
                    ? (u.mergeDetails(o, t),
                      (a = t.fragments[0].start),
                      t.PTSKnown
                        ? c.logger.log(
                            'live audio playlist sliding:' + a.toFixed(3)
                          )
                        : c.logger.log(
                            'live audio playlist - outdated PTS, unknown sliding'
                          ))
                    : ((t.PTSKnown = !1),
                      c.logger.log(
                        'live audio playlist - first load, unknown sliding'
                      ))
                } else t.PTSKnown = !1
                if (((i.details = t), !this.startFragRequested)) {
                  if (-1 === this.startPosition) {
                    var s = t.startTimeOffset
                    isNaN(s)
                      ? (this.startPosition = 0)
                      : (c.logger.log(
                          'start time offset found in playlist, adjust startPosition to ' +
                            s
                        ),
                        (this.startPosition = s))
                  }
                  this.nextLoadPosition = this.startPosition
                }
                this.state === A && (this.state = T), this.tick()
              }
            },
            {
              key: 'onKeyLoaded',
              value: function() {
                this.state === _ && ((this.state = T), this.tick())
              }
            },
            {
              key: 'onFragLoaded',
              value: function(e) {
                var t = this.fragCurrent,
                  r = e.frag
                if (
                  this.state === S &&
                  t &&
                  'audio' === r.type &&
                  r.level === t.level &&
                  r.sn === t.sn
                ) {
                  var i = this.tracks[this.trackId],
                    n = i.details,
                    a = n.totalduration,
                    o = t.level,
                    u = t.sn,
                    d = t.cc,
                    f =
                      this.config.defaultAudioCodec ||
                      i.audioCodec ||
                      'mp4a.40.2',
                    h = (this.stats = e.stats)
                  if ('initSegment' === u)
                    (this.state = T),
                      (h.tparsed = h.tbuffered = m.now()),
                      (n.initSegment.data = e.payload),
                      this.hls.trigger(l.default.FRAG_BUFFERED, {
                        stats: h,
                        frag: t,
                        id: 'audio'
                      }),
                      this.tick()
                  else {
                    ;(this.state = R),
                      (this.appended = !1),
                      this.demuxer ||
                        (this.demuxer = new s.default(this.hls, 'audio'))
                    var p = this.initPTS[d],
                      v = n.initSegment ? n.initSegment.data : []
                    if (n.initSegment || void 0 !== p) {
                      ;(this.pendingBuffering = !0),
                        c.logger.log(
                          'Demuxing ' +
                            u +
                            ' of [' +
                            n.startSN +
                            ' ,' +
                            n.endSN +
                            '],track ' +
                            o
                        )
                      this.demuxer.push(e.payload, v, f, null, t, a, !1, p)
                    } else
                      c.logger.log(
                        'unknown video PTS for continuity counter ' +
                          d +
                          ', waiting for video PTS before demuxing audio frag ' +
                          u +
                          ' of [' +
                          n.startSN +
                          ' ,' +
                          n.endSN +
                          '],track ' +
                          o
                      ),
                        (this.waitingFragment = e),
                        (this.state = C)
                  }
                }
                this.fragLoadError = 0
              }
            },
            {
              key: 'onFragParsingInitSegment',
              value: function(e) {
                var t = this.fragCurrent,
                  r = e.frag
                if (
                  t &&
                  'audio' === e.id &&
                  r.sn === t.sn &&
                  r.level === t.level &&
                  this.state === R
                ) {
                  var i = e.tracks,
                    n = void 0
                  if ((i.video && delete i.video, (n = i.audio))) {
                    ;(n.levelCodec = n.codec),
                      (n.id = e.id),
                      this.hls.trigger(l.default.BUFFER_CODECS, i),
                      c.logger.log(
                        'audio track:audio,container:' +
                          n.container +
                          ',codecs[level/parsed]=[' +
                          n.levelCodec +
                          '/' +
                          n.codec +
                          ']'
                      )
                    var a = n.initSegment
                    if (a) {
                      var o = {
                        type: 'audio',
                        data: a,
                        parent: 'audio',
                        content: 'initSegment'
                      }
                      this.audioSwitch
                        ? (this.pendingData = [o])
                        : ((this.appended = !0),
                          (this.pendingBuffering = !0),
                          this.hls.trigger(l.default.BUFFER_APPENDING, o))
                    }
                    this.tick()
                  }
                }
              }
            },
            {
              key: 'onFragParsingData',
              value: function(e) {
                var t = this,
                  r = this.fragCurrent,
                  i = e.frag
                if (
                  r &&
                  'audio' === e.id &&
                  'audio' === e.type &&
                  i.sn === r.sn &&
                  i.level === r.level &&
                  this.state === R
                ) {
                  var n = this.trackId,
                    a = this.tracks[n],
                    o = this.hls
                  isNaN(e.endPTS) &&
                    ((e.endPTS = e.startPTS + r.duration),
                    (e.endDTS = e.startDTS + r.duration)),
                    r.addElementaryStream(
                      g.default.ElementaryStreamTypes.AUDIO
                    ),
                    c.logger.log(
                      'parsed ' +
                        e.type +
                        ',PTS:[' +
                        e.startPTS.toFixed(3) +
                        ',' +
                        e.endPTS.toFixed(3) +
                        '],DTS:[' +
                        e.startDTS.toFixed(3) +
                        '/' +
                        e.endDTS.toFixed(3) +
                        '],nb:' +
                        e.nb
                    ),
                    u.updateFragPTSDTS(a.details, r, e.startPTS, e.endPTS)
                  var s = this.audioSwitch,
                    d = this.media,
                    h = !1
                  if (s && d)
                    if (d.readyState) {
                      var p = d.currentTime
                      c.logger.log('switching audio track : currentTime:' + p),
                        p >= e.startPTS &&
                          (c.logger.log(
                            'switching audio track : flushing all audio'
                          ),
                          (this.state = L),
                          o.trigger(l.default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: 'audio'
                          }),
                          (h = !0),
                          (this.audioSwitch = !1),
                          o.trigger(l.default.AUDIO_TRACK_SWITCHED, { id: n }))
                    } else
                      (this.audioSwitch = !1),
                        o.trigger(l.default.AUDIO_TRACK_SWITCHED, { id: n })
                  var v = this.pendingData
                  if (!v)
                    return (
                      c.logger.warn(
                        'Apparently attempt to enqueue media payload without codec initialization data upfront'
                      ),
                      void o.trigger(l.default.ERROR, {
                        type: f.ErrorTypes.MEDIA_ERROR,
                        details: null,
                        fatal: !0
                      })
                    )
                  this.audioSwitch ||
                    ([e.data1, e.data2].forEach(function(t) {
                      t &&
                        t.length &&
                        v.push({
                          type: e.type,
                          data: t,
                          parent: 'audio',
                          content: 'data'
                        })
                    }),
                    !h &&
                      v.length &&
                      (v.forEach(function(e) {
                        t.state === R &&
                          ((t.pendingBuffering = !0),
                          t.hls.trigger(l.default.BUFFER_APPENDING, e))
                      }),
                      (this.pendingData = []),
                      (this.appended = !0))),
                    this.tick()
                }
              }
            },
            {
              key: 'onFragParsed',
              value: function(e) {
                var t = this.fragCurrent,
                  r = e.frag
                t &&
                  'audio' === e.id &&
                  r.sn === t.sn &&
                  r.level === t.level &&
                  this.state === R &&
                  ((this.stats.tparsed = m.now()),
                  (this.state = O),
                  this._checkAppendedParsed())
              }
            },
            {
              key: 'onBufferReset',
              value: function() {
                ;(this.mediaBuffer = this.videoBuffer = null),
                  (this.loadedmetadata = !1)
              }
            },
            {
              key: 'onBufferCreated',
              value: function(e) {
                var t = e.tracks.audio
                t &&
                  ((this.mediaBuffer = t.buffer), (this.loadedmetadata = !0)),
                  e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
              }
            },
            {
              key: 'onBufferAppended',
              value: function(e) {
                if ('audio' === e.parent) {
                  var t = this.state
                  ;(t !== R && t !== O) ||
                    ((this.pendingBuffering = e.pending > 0),
                    this._checkAppendedParsed())
                }
              }
            },
            {
              key: '_checkAppendedParsed',
              value: function() {
                if (
                  !(
                    this.state !== O ||
                    (this.appended && this.pendingBuffering)
                  )
                ) {
                  var e = this.fragCurrent,
                    t = this.stats,
                    r = this.hls
                  if (e) {
                    ;(this.fragPrevious = e),
                      (t.tbuffered = m.now()),
                      r.trigger(l.default.FRAG_BUFFERED, {
                        stats: t,
                        frag: e,
                        id: 'audio'
                      })
                    var i = this.mediaBuffer ? this.mediaBuffer : this.media
                    c.logger.log(
                      'audio buffered : ' + d.default.toString(i.buffered)
                    ),
                      this.audioSwitch &&
                        this.appended &&
                        ((this.audioSwitch = !1),
                        r.trigger(l.default.AUDIO_TRACK_SWITCHED, {
                          id: this.trackId
                        })),
                      (this.state = T)
                  }
                  this.tick()
                }
              }
            },
            {
              key: 'onError',
              value: function(e) {
                var t = e.frag
                if (!t || 'audio' === t.type)
                  switch (e.details) {
                    case f.ErrorDetails.FRAG_LOAD_ERROR:
                    case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
                      var r = e.frag
                      if (r && 'audio' !== r.type) break
                      if (!e.fatal) {
                        var i = this.fragLoadError
                        i ? i++ : (i = 1)
                        var n = this.config
                        if (i <= n.fragLoadingMaxRetry) {
                          this.fragLoadError = i
                          var a = Math.min(
                            Math.pow(2, i - 1) * n.fragLoadingRetryDelay,
                            n.fragLoadingMaxRetryTimeout
                          )
                          c.logger.warn(
                            'AudioStreamController: frag loading failed, retry in ' +
                              a +
                              ' ms'
                          ),
                            (this.retryDate = m.now() + a),
                            (this.state = w)
                        } else
                          c.logger.error(
                            'AudioStreamController: ' +
                              e.details +
                              ' reaches max retry, redispatch as fatal ...'
                          ),
                            (e.fatal = !0),
                            (this.state = P)
                      }
                      break
                    case f.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                    case f.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                    case f.ErrorDetails.KEY_LOAD_ERROR:
                    case f.ErrorDetails.KEY_LOAD_TIMEOUT:
                      this.state !== P &&
                        ((this.state = e.fatal ? P : T),
                        c.logger.warn(
                          'AudioStreamController: ' +
                            e.details +
                            ' while loading frag, now switching to ' +
                            this.state +
                            ' state ...'
                        ))
                      break
                    case f.ErrorDetails.BUFFER_FULL_ERROR:
                      if (
                        'audio' === e.parent &&
                        (this.state === R || this.state === O)
                      ) {
                        var s = this.mediaBuffer,
                          u = this.media.currentTime
                        if (
                          s &&
                          o.BufferHelper.isBuffered(s, u) &&
                          o.BufferHelper.isBuffered(s, u + 0.5)
                        ) {
                          var d = this.config
                          d.maxMaxBufferLength >= d.maxBufferLength &&
                            ((d.maxMaxBufferLength /= 2),
                            c.logger.warn(
                              'AudioStreamController: reduce max buffer length to ' +
                                d.maxMaxBufferLength +
                                's'
                            )),
                            (this.state = T)
                        } else
                          c.logger.warn(
                            'AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer'
                          ),
                            (this.fragCurrent = null),
                            (this.state = L),
                            this.hls.trigger(l.default.BUFFER_FLUSHING, {
                              startOffset: 0,
                              endOffset: Number.POSITIVE_INFINITY,
                              type: 'audio'
                            })
                      }
                  }
              }
            },
            {
              key: 'onBufferFlushed',
              value: function() {
                var e = this,
                  t = this.pendingData
                t && t.length
                  ? (c.logger.log(
                      'AudioStreamController: appending pending audio data after buffer flushed'
                    ),
                    t.forEach(function(t) {
                      e.hls.trigger(l.default.BUFFER_APPENDING, t)
                    }),
                    (this.appended = !0),
                    (this.pendingData = []),
                    (this.state = O))
                  : ((this.state = T), (this.fragPrevious = null), this.tick())
              }
            },
            {
              key: 'state',
              set: function(e) {
                if (this.state !== e) {
                  var t = this.state
                  ;(this._state = e),
                    c.logger.log('audio stream:' + t + '->' + e)
                }
              },
              get: function() {
                return this._state
              }
            }
          ]),
          t
        )
      })(p.default)
    ;(t.default = I), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.newCue = function(e, t, r, n) {
        for (
          var a = void 0,
            o = void 0,
            s = void 0,
            l = void 0,
            u = void 0,
            d = window.VTTCue || window.TextTrackCue,
            f = 0;
          f < n.rows.length;
          f++
        )
          if (((a = n.rows[f]), (s = !0), (l = 0), (u = ''), !a.isEmpty())) {
            for (var c = 0; c < a.chars.length; c++)
              a.chars[c].uchar.match(/\s/) && s
                ? l++
                : ((u += a.chars[c].uchar), (s = !1))
            ;(a.cueStartTime = t),
              t === r && (r += 1e-4),
              (o = new d(t, r, (0, i.fixLineBreaks)(u.trim()))),
              l >= 16 ? l-- : l++,
              navigator.userAgent.match(/Firefox\//)
                ? (o.line = f + 1)
                : (o.line = f > 7 ? f - 2 : f + 1),
              (o.align = 'left'),
              (o.position = Math.max(
                0,
                Math.min(
                  100,
                  (l / 32) * 100 +
                    (navigator.userAgent.match(/Firefox\//) ? 50 : 0)
                )
              )),
              e.addCue(o)
          }
      })
    var i = r(43)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = (function() {
        if ('undefined' != typeof window && window.VTTCue) return window.VTTCue
        var e = { '': !0, lr: !0, rl: !0 },
          t = { start: !0, middle: !0, end: !0, left: !0, right: !0 }
        function r(e) {
          return (
            'string' == typeof e && (!!t[e.toLowerCase()] && e.toLowerCase())
          )
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var i in r) e[i] = r[i]
          }
          return e
        }
        function n(t, n, a) {
          var o = this,
            s = (function() {
              if ('undefined' != typeof navigator)
                return /MSIE\s8\.0/.test(navigator.userAgent)
            })(),
            l = {}
          s ? (o = document.createElement('custom')) : (l.enumerable = !0),
            (o.hasBeenReset = !1)
          var u = '',
            d = !1,
            f = t,
            c = n,
            h = a,
            p = null,
            v = '',
            g = !0,
            y = 'auto',
            m = 'start',
            b = 50,
            E = 'middle',
            T = 50,
            k = 'middle'
          if (
            (Object.defineProperty(
              o,
              'id',
              i({}, l, {
                get: function() {
                  return u
                },
                set: function(e) {
                  u = '' + e
                }
              })
            ),
            Object.defineProperty(
              o,
              'pauseOnExit',
              i({}, l, {
                get: function() {
                  return d
                },
                set: function(e) {
                  d = !!e
                }
              })
            ),
            Object.defineProperty(
              o,
              'startTime',
              i({}, l, {
                get: function() {
                  return f
                },
                set: function(e) {
                  if ('number' != typeof e)
                    throw new TypeError('Start time must be set to a number.')
                  ;(f = e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'endTime',
              i({}, l, {
                get: function() {
                  return c
                },
                set: function(e) {
                  if ('number' != typeof e)
                    throw new TypeError('End time must be set to a number.')
                  ;(c = e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'text',
              i({}, l, {
                get: function() {
                  return h
                },
                set: function(e) {
                  ;(h = '' + e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'region',
              i({}, l, {
                get: function() {
                  return p
                },
                set: function(e) {
                  ;(p = e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'vertical',
              i({}, l, {
                get: function() {
                  return v
                },
                set: function(t) {
                  var r = (function(t) {
                    return (
                      'string' == typeof t &&
                      (!!e[t.toLowerCase()] && t.toLowerCase())
                    )
                  })(t)
                  if (!1 === r)
                    throw new SyntaxError(
                      'An invalid or illegal string was specified.'
                    )
                  ;(v = r), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'snapToLines',
              i({}, l, {
                get: function() {
                  return g
                },
                set: function(e) {
                  ;(g = !!e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'line',
              i({}, l, {
                get: function() {
                  return y
                },
                set: function(e) {
                  if ('number' != typeof e && 'auto' !== e)
                    throw new SyntaxError(
                      'An invalid number or illegal string was specified.'
                    )
                  ;(y = e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'lineAlign',
              i({}, l, {
                get: function() {
                  return m
                },
                set: function(e) {
                  var t = r(e)
                  if (!t)
                    throw new SyntaxError(
                      'An invalid or illegal string was specified.'
                    )
                  ;(m = t), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'position',
              i({}, l, {
                get: function() {
                  return b
                },
                set: function(e) {
                  if (e < 0 || e > 100)
                    throw new Error('Position must be between 0 and 100.')
                  ;(b = e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'positionAlign',
              i({}, l, {
                get: function() {
                  return E
                },
                set: function(e) {
                  var t = r(e)
                  if (!t)
                    throw new SyntaxError(
                      'An invalid or illegal string was specified.'
                    )
                  ;(E = t), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'size',
              i({}, l, {
                get: function() {
                  return T
                },
                set: function(e) {
                  if (e < 0 || e > 100)
                    throw new Error('Size must be between 0 and 100.')
                  ;(T = e), (this.hasBeenReset = !0)
                }
              })
            ),
            Object.defineProperty(
              o,
              'align',
              i({}, l, {
                get: function() {
                  return k
                },
                set: function(e) {
                  var t = r(e)
                  if (!t)
                    throw new SyntaxError(
                      'An invalid or illegal string was specified.'
                    )
                  ;(k = t), (this.hasBeenReset = !0)
                }
              })
            ),
            (o.displayState = void 0),
            s)
          )
            return o
        }
        return (
          (n.prototype.getCueAsHTML = function() {
            return window.WebVTT.convertCueToDOMTree(window, this.text)
          }),
          n
        )
      })()),
      (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = f(r(1)),
      a = f(r(3)),
      o = f(r(105)),
      s = f(r(106)),
      l = f(r(107)),
      u = r(0),
      d = r(41)
    function f(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var c = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            n.default.MEDIA_ATTACHING,
            n.default.MEDIA_DETACHING,
            n.default.FRAG_PARSING_USERDATA,
            n.default.FRAG_DECRYPTED,
            n.default.MANIFEST_LOADING,
            n.default.MANIFEST_LOADED,
            n.default.FRAG_LOADED,
            n.default.LEVEL_SWITCHING,
            n.default.INIT_PTS_FOUND
          )
        )
        if (
          ((r.hls = e),
          (r.config = e.config),
          (r.enabled = !0),
          (r.Cues = e.config.cueHandler),
          (r.textTracks = []),
          (r.tracks = []),
          (r.unparsedVttFrags = []),
          (r.initPTS = void 0),
          (r.cueRanges = []),
          (r.captionsTracks = {}),
          (r.captionsProperties = {
            textTrack1: {
              label: r.config.captionsTextTrack1Label,
              languageCode: r.config.captionsTextTrack1LanguageCode
            },
            textTrack2: {
              label: r.config.captionsTextTrack2Label,
              languageCode: r.config.captionsTextTrack2LanguageCode
            }
          }),
          r.config.enableCEA708Captions)
        ) {
          var i = new s.default(r, 'textTrack1'),
            a = new s.default(r, 'textTrack2')
          r.cea608Parser = new o.default(0, i, a)
        }
        return r
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
        i(t, [
          {
            key: 'addCues',
            value: function(e, t, r, i) {
              for (
                var n, a, o, s, l = this.cueRanges, u = !1, d = l.length;
                d--;

              ) {
                var f = l[d],
                  c = ((n = f[0]),
                  (a = f[1]),
                  (o = t),
                  (s = r),
                  Math.min(a, s) - Math.max(n, o))
                if (
                  c >= 0 &&
                  ((f[0] = Math.min(f[0], t)),
                  (f[1] = Math.max(f[1], r)),
                  (u = !0),
                  c / (r - t) > 0.5)
                )
                  return
              }
              u || l.push([t, r]),
                this.Cues.newCue(this.captionsTracks[e], t, r, i)
            }
          },
          {
            key: 'onInitPtsFound',
            value: function(e) {
              var t = this
              void 0 === this.initPTS && (this.initPTS = e.initPTS),
                this.unparsedVttFrags.length &&
                  (this.unparsedVttFrags.forEach(function(e) {
                    t.onFragLoaded(e)
                  }),
                  (this.unparsedVttFrags = []))
            }
          },
          {
            key: 'getExistingTrack',
            value: function(e) {
              var t = this.media
              if (t)
                for (var r = 0; r < t.textTracks.length; r++) {
                  var i = t.textTracks[r]
                  if (i[e]) return i
                }
              return null
            }
          },
          {
            key: 'createCaptionsTrack',
            value: function(e) {
              var t = this.captionsProperties[e],
                r = t.label,
                i = t.languageCode,
                n = this.captionsTracks
              if (!n[e]) {
                var a = this.getExistingTrack(e)
                if (a)
                  (n[e] = a),
                    (0, d.clearCurrentCues)(n[e]),
                    (0, d.sendAddTrackEvent)(n[e], this.media)
                else {
                  var o = this.createTextTrack('captions', r, i)
                  o && ((o[e] = !0), (n[e] = o))
                }
              }
            }
          },
          {
            key: 'createTextTrack',
            value: function(e, t, r) {
              var i = this.media
              if (i) return i.addTextTrack(e, t, r)
            }
          },
          {
            key: 'destroy',
            value: function() {
              a.default.prototype.destroy.call(this)
            }
          },
          {
            key: 'onMediaAttaching',
            value: function(e) {
              ;(this.media = e.media), this._cleanTracks()
            }
          },
          {
            key: 'onMediaDetaching',
            value: function() {
              var e = this.captionsTracks
              Object.keys(e).forEach(function(t) {
                ;(0, d.clearCurrentCues)(e[t]), delete e[t]
              })
            }
          },
          {
            key: 'onManifestLoading',
            value: function() {
              ;(this.lastSn = -1),
                (this.prevCC = -1),
                (this.vttCCs = { ccOffset: 0, presentationOffset: 0 }),
                this._cleanTracks()
            }
          },
          {
            key: '_cleanTracks',
            value: function() {
              var e = this.media
              if (e) {
                var t = e.textTracks
                if (t)
                  for (var r = 0; r < t.length; r++)
                    (0, d.clearCurrentCues)(t[r])
              }
            }
          },
          {
            key: 'onManifestLoaded',
            value: function(e) {
              var t = this
              if (
                ((this.textTracks = []),
                (this.unparsedVttFrags = this.unparsedVttFrags || []),
                (this.initPTS = void 0),
                (this.cueRanges = []),
                this.config.enableWebVTT)
              ) {
                this.tracks = e.subtitles || []
                var r = this.media ? this.media.textTracks : []
                this.tracks.forEach(function(e, i) {
                  var n = void 0
                  if (i < r.length) {
                    var a = r[i]
                    ;(function(e, t) {
                      return (
                        e &&
                        e.label === t.name &&
                        !(e.textTrack1 || e.textTrack2)
                      )
                    })(a, e) && (n = a)
                  }
                  n || (n = t.createTextTrack('subtitles', e.name, e.lang)),
                    e.default
                      ? (n.mode = t.hls.subtitleDisplay ? 'showing' : 'hidden')
                      : (n.mode = 'disabled'),
                    t.textTracks.push(n)
                })
              }
            }
          },
          {
            key: 'onLevelSwitching',
            value: function() {
              this.enabled = 'NONE' !== this.hls.currentLevel.closedCaptions
            }
          },
          {
            key: 'onFragLoaded',
            value: function(e) {
              var t = e.frag,
                r = e.payload
              if ('main' === t.type) {
                var i = t.sn
                if (i !== this.lastSn + 1) {
                  var a = this.cea608Parser
                  a && a.reset()
                }
                this.lastSn = i
              } else if ('subtitle' === t.type)
                if (r.byteLength) {
                  if (void 0 === this.initPTS)
                    return void this.unparsedVttFrags.push(e)
                  var o = t.decryptdata
                  ;(null != o && null != o.key && 'AES-128' === o.method) ||
                    this._parseVTTs(t, r)
                } else
                  this.hls.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: t
                  })
            }
          },
          {
            key: '_parseVTTs',
            value: function(e, t) {
              var r = this.vttCCs
              r[e.cc] ||
                ((r[e.cc] = { start: e.start, prevCC: this.prevCC, new: !0 }),
                (this.prevCC = e.cc))
              var i = this.textTracks,
                a = this.hls
              l.default.parse(
                t,
                this.initPTS,
                r,
                e.cc,
                function(t) {
                  var r = i[e.trackId]
                  'disabled' !== r.mode
                    ? (t.forEach(function(e) {
                        if (!r.cues.getCueById(e.id))
                          try {
                            r.addCue(e)
                          } catch (i) {
                            var t = new window.TextTrackCue(
                              e.startTime,
                              e.endTime,
                              e.text
                            )
                            ;(t.id = e.id), r.addCue(t)
                          }
                      }),
                      a.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
                        success: !0,
                        frag: e
                      }))
                    : a.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: e
                      })
                },
                function(t) {
                  u.logger.log('Failed to parse VTT cue: ' + t),
                    a.trigger(n.default.SUBTITLE_FRAG_PROCESSED, {
                      success: !1,
                      frag: e
                    })
                }
              )
            }
          },
          {
            key: 'onFragDecrypted',
            value: function(e) {
              var t = e.payload,
                r = e.frag
              if ('subtitle' === r.type) {
                if (void 0 === this.initPTS)
                  return void this.unparsedVttFrags.push(e)
                this._parseVTTs(r, t)
              }
            }
          },
          {
            key: 'onFragParsingUserdata',
            value: function(e) {
              if (this.enabled && this.config.enableCEA708Captions)
                for (var t = 0; t < e.samples.length; t++) {
                  var r = this.extractCea608Data(e.samples[t].bytes)
                  this.cea608Parser.addData(e.samples[t].pts, r)
                }
            }
          },
          {
            key: 'extractCea608Data',
            value: function(e) {
              for (
                var t = 31 & e[0],
                  r = 2,
                  i = void 0,
                  n = void 0,
                  a = void 0,
                  o = [],
                  s = 0;
                s < t;
                s++
              )
                (i = e[r++]),
                  (n = 127 & e[r++]),
                  (a = 127 & e[r++]),
                  (0 === n && 0 === a) ||
                    (0 != (4 & i) && 0 === (3 & i) && (o.push(n), o.push(a)))
              return o
            }
          }
        ]),
        t
      )
    })(a.default)
    ;(t.default = c), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    var a = {
        42: 225,
        92: 233,
        94: 237,
        95: 243,
        96: 250,
        123: 231,
        124: 247,
        125: 209,
        126: 241,
        127: 9608,
        128: 174,
        129: 176,
        130: 189,
        131: 191,
        132: 8482,
        133: 162,
        134: 163,
        135: 9834,
        136: 224,
        137: 32,
        138: 232,
        139: 226,
        140: 234,
        141: 238,
        142: 244,
        143: 251,
        144: 193,
        145: 201,
        146: 211,
        147: 218,
        148: 220,
        149: 252,
        150: 8216,
        151: 161,
        152: 42,
        153: 8217,
        154: 9473,
        155: 169,
        156: 8480,
        157: 8226,
        158: 8220,
        159: 8221,
        160: 192,
        161: 194,
        162: 199,
        163: 200,
        164: 202,
        165: 203,
        166: 235,
        167: 206,
        168: 207,
        169: 239,
        170: 212,
        171: 217,
        172: 249,
        173: 219,
        174: 171,
        175: 187,
        176: 195,
        177: 227,
        178: 205,
        179: 204,
        180: 236,
        181: 210,
        182: 242,
        183: 213,
        184: 245,
        185: 123,
        186: 125,
        187: 92,
        188: 94,
        189: 95,
        190: 124,
        191: 8764,
        192: 196,
        193: 228,
        194: 214,
        195: 246,
        196: 223,
        197: 165,
        198: 164,
        199: 9475,
        200: 197,
        201: 229,
        202: 216,
        203: 248,
        204: 9487,
        205: 9491,
        206: 9495,
        207: 9499
      },
      o = function(e) {
        var t = e
        return a.hasOwnProperty(e) && (t = a[e]), String.fromCharCode(t)
      },
      s = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
      l = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
      u = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
      d = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
      f = [
        'white',
        'green',
        'blue',
        'cyan',
        'red',
        'yellow',
        'magenta',
        'black',
        'transparent'
      ],
      c = {
        verboseFilter: {
          DATA: 3,
          DEBUG: 3,
          INFO: 2,
          WARNING: 2,
          TEXT: 1,
          ERROR: 0
        },
        time: null,
        verboseLevel: 0,
        setTime: function(e) {
          this.time = e
        },
        log: function(e, t) {
          this.verboseFilter[e]
          this.verboseLevel
        }
      },
      h = function(e) {
        for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16))
        return t
      },
      p = (function() {
        function e(t, r, i, a, o) {
          n(this, e),
            (this.foreground = t || 'white'),
            (this.underline = r || !1),
            (this.italics = i || !1),
            (this.background = a || 'black'),
            (this.flash = o || !1)
        }
        return (
          i(e, [
            {
              key: 'reset',
              value: function() {
                ;(this.foreground = 'white'),
                  (this.underline = !1),
                  (this.italics = !1),
                  (this.background = 'black'),
                  (this.flash = !1)
              }
            },
            {
              key: 'setStyles',
              value: function(e) {
                for (
                  var t = [
                      'foreground',
                      'underline',
                      'italics',
                      'background',
                      'flash'
                    ],
                    r = 0;
                  r < t.length;
                  r++
                ) {
                  var i = t[r]
                  e.hasOwnProperty(i) && (this[i] = e[i])
                }
              }
            },
            {
              key: 'isDefault',
              value: function() {
                return (
                  'white' === this.foreground &&
                  !this.underline &&
                  !this.italics &&
                  'black' === this.background &&
                  !this.flash
                )
              }
            },
            {
              key: 'equals',
              value: function(e) {
                return (
                  this.foreground === e.foreground &&
                  this.underline === e.underline &&
                  this.italics === e.italics &&
                  this.background === e.background &&
                  this.flash === e.flash
                )
              }
            },
            {
              key: 'copy',
              value: function(e) {
                ;(this.foreground = e.foreground),
                  (this.underline = e.underline),
                  (this.italics = e.italics),
                  (this.background = e.background),
                  (this.flash = e.flash)
              }
            },
            {
              key: 'toString',
              value: function() {
                return (
                  'color=' +
                  this.foreground +
                  ', underline=' +
                  this.underline +
                  ', italics=' +
                  this.italics +
                  ', background=' +
                  this.background +
                  ', flash=' +
                  this.flash
                )
              }
            }
          ]),
          e
        )
      })(),
      v = (function() {
        function e(t, r, i, a, o, s) {
          n(this, e),
            (this.uchar = t || ' '),
            (this.penState = new p(r, i, a, o, s))
        }
        return (
          i(e, [
            {
              key: 'reset',
              value: function() {
                ;(this.uchar = ' '), this.penState.reset()
              }
            },
            {
              key: 'setChar',
              value: function(e, t) {
                ;(this.uchar = e), this.penState.copy(t)
              }
            },
            {
              key: 'setPenState',
              value: function(e) {
                this.penState.copy(e)
              }
            },
            {
              key: 'equals',
              value: function(e) {
                return (
                  this.uchar === e.uchar && this.penState.equals(e.penState)
                )
              }
            },
            {
              key: 'copy',
              value: function(e) {
                ;(this.uchar = e.uchar), this.penState.copy(e.penState)
              }
            },
            {
              key: 'isEmpty',
              value: function() {
                return ' ' === this.uchar && this.penState.isDefault()
              }
            }
          ]),
          e
        )
      })(),
      g = (function() {
        function e() {
          n(this, e), (this.chars = [])
          for (var t = 0; t < 100; t++) this.chars.push(new v())
          ;(this.pos = 0), (this.currPenState = new p())
        }
        return (
          i(e, [
            {
              key: 'equals',
              value: function(e) {
                for (var t = !0, r = 0; r < 100; r++)
                  if (!this.chars[r].equals(e.chars[r])) {
                    t = !1
                    break
                  }
                return t
              }
            },
            {
              key: 'copy',
              value: function(e) {
                for (var t = 0; t < 100; t++) this.chars[t].copy(e.chars[t])
              }
            },
            {
              key: 'isEmpty',
              value: function() {
                for (var e = !0, t = 0; t < 100; t++)
                  if (!this.chars[t].isEmpty()) {
                    e = !1
                    break
                  }
                return e
              }
            },
            {
              key: 'setCursor',
              value: function(e) {
                this.pos !== e && (this.pos = e),
                  this.pos < 0
                    ? (c.log('ERROR', 'Negative cursor position ' + this.pos),
                      (this.pos = 0))
                    : this.pos > 100 &&
                      (c.log('ERROR', 'Too large cursor position ' + this.pos),
                      (this.pos = 100))
              }
            },
            {
              key: 'moveCursor',
              value: function(e) {
                var t = this.pos + e
                if (e > 1)
                  for (var r = this.pos + 1; r < t + 1; r++)
                    this.chars[r].setPenState(this.currPenState)
                this.setCursor(t)
              }
            },
            {
              key: 'backSpace',
              value: function() {
                this.moveCursor(-1),
                  this.chars[this.pos].setChar(' ', this.currPenState)
              }
            },
            {
              key: 'insertChar',
              value: function(e) {
                e >= 144 && this.backSpace()
                var t = o(e)
                this.pos >= 100
                  ? c.log(
                      'ERROR',
                      'Cannot insert ' +
                        e.toString(16) +
                        ' (' +
                        t +
                        ') at position ' +
                        this.pos +
                        '. Skipping it!'
                    )
                  : (this.chars[this.pos].setChar(t, this.currPenState),
                    this.moveCursor(1))
              }
            },
            {
              key: 'clearFromPos',
              value: function(e) {
                var t = void 0
                for (t = e; t < 100; t++) this.chars[t].reset()
              }
            },
            {
              key: 'clear',
              value: function() {
                this.clearFromPos(0), (this.pos = 0), this.currPenState.reset()
              }
            },
            {
              key: 'clearToEndOfRow',
              value: function() {
                this.clearFromPos(this.pos)
              }
            },
            {
              key: 'getTextString',
              value: function() {
                for (var e = [], t = !0, r = 0; r < 100; r++) {
                  var i = this.chars[r].uchar
                  ' ' !== i && (t = !1), e.push(i)
                }
                return t ? '' : e.join('')
              }
            },
            {
              key: 'setPenStyles',
              value: function(e) {
                this.currPenState.setStyles(e),
                  this.chars[this.pos].setPenState(this.currPenState)
              }
            }
          ]),
          e
        )
      })(),
      y = (function() {
        function e() {
          n(this, e), (this.rows = [])
          for (var t = 0; t < 15; t++) this.rows.push(new g())
          ;(this.currRow = 14), (this.nrRollUpRows = null), this.reset()
        }
        return (
          i(e, [
            {
              key: 'reset',
              value: function() {
                for (var e = 0; e < 15; e++) this.rows[e].clear()
                this.currRow = 14
              }
            },
            {
              key: 'equals',
              value: function(e) {
                for (var t = !0, r = 0; r < 15; r++)
                  if (!this.rows[r].equals(e.rows[r])) {
                    t = !1
                    break
                  }
                return t
              }
            },
            {
              key: 'copy',
              value: function(e) {
                for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
              }
            },
            {
              key: 'isEmpty',
              value: function() {
                for (var e = !0, t = 0; t < 15; t++)
                  if (!this.rows[t].isEmpty()) {
                    e = !1
                    break
                  }
                return e
              }
            },
            {
              key: 'backSpace',
              value: function() {
                this.rows[this.currRow].backSpace()
              }
            },
            {
              key: 'clearToEndOfRow',
              value: function() {
                this.rows[this.currRow].clearToEndOfRow()
              }
            },
            {
              key: 'insertChar',
              value: function(e) {
                this.rows[this.currRow].insertChar(e)
              }
            },
            {
              key: 'setPen',
              value: function(e) {
                this.rows[this.currRow].setPenStyles(e)
              }
            },
            {
              key: 'moveCursor',
              value: function(e) {
                this.rows[this.currRow].moveCursor(e)
              }
            },
            {
              key: 'setCursor',
              value: function(e) {
                c.log('INFO', 'setCursor: ' + e),
                  this.rows[this.currRow].setCursor(e)
              }
            },
            {
              key: 'setPAC',
              value: function(e) {
                c.log('INFO', 'pacData = ' + JSON.stringify(e))
                var t = e.row - 1
                if (
                  (this.nrRollUpRows &&
                    t < this.nrRollUpRows - 1 &&
                    (t = this.nrRollUpRows - 1),
                  this.nrRollUpRows && this.currRow !== t)
                ) {
                  for (var r = 0; r < 15; r++) this.rows[r].clear()
                  var i = this.currRow + 1 - this.nrRollUpRows,
                    n = this.lastOutputScreen
                  if (n) {
                    var a = n.rows[i].cueStartTime
                    if (a && a < c.time)
                      for (var o = 0; o < this.nrRollUpRows; o++)
                        this.rows[t - this.nrRollUpRows + o + 1].copy(
                          n.rows[i + o]
                        )
                  }
                }
                this.currRow = t
                var s = this.rows[this.currRow]
                if (null !== e.indent) {
                  var l = e.indent,
                    u = Math.max(l - 1, 0)
                  s.setCursor(e.indent),
                    (e.color = s.chars[u].penState.foreground)
                }
                var d = {
                  foreground: e.color,
                  underline: e.underline,
                  italics: e.italics,
                  background: 'black',
                  flash: !1
                }
                this.setPen(d)
              }
            },
            {
              key: 'setBkgData',
              value: function(e) {
                c.log('INFO', 'bkgData = ' + JSON.stringify(e)),
                  this.backSpace(),
                  this.setPen(e),
                  this.insertChar(32)
              }
            },
            {
              key: 'setRollUpRows',
              value: function(e) {
                this.nrRollUpRows = e
              }
            },
            {
              key: 'rollUp',
              value: function() {
                if (null !== this.nrRollUpRows) {
                  c.log('TEXT', this.getDisplayText())
                  var e = this.currRow + 1 - this.nrRollUpRows,
                    t = this.rows.splice(e, 1)[0]
                  t.clear(),
                    this.rows.splice(this.currRow, 0, t),
                    c.log('INFO', 'Rolling up')
                } else c.log('DEBUG', 'roll_up but nrRollUpRows not set yet')
              }
            },
            {
              key: 'getDisplayText',
              value: function(e) {
                e = e || !1
                for (var t = [], r = '', i = -1, n = 0; n < 15; n++) {
                  var a = this.rows[n].getTextString()
                  a &&
                    ((i = n + 1),
                    e ? t.push('Row ' + i + ": '" + a + "'") : t.push(a.trim()))
                }
                return (
                  t.length > 0 &&
                    (r = e ? '[' + t.join(' | ') + ']' : t.join('\n')),
                  r
                )
              }
            },
            {
              key: 'getTextAndFormat',
              value: function() {
                return this.rows
              }
            }
          ]),
          e
        )
      })(),
      m = (function() {
        function e(t, r) {
          n(this, e),
            (this.chNr = t),
            (this.outputFilter = r),
            (this.mode = null),
            (this.verbose = 0),
            (this.displayedMemory = new y()),
            (this.nonDisplayedMemory = new y()),
            (this.lastOutputScreen = new y()),
            (this.currRollUpRow = this.displayedMemory.rows[14]),
            (this.writeScreen = this.displayedMemory),
            (this.mode = null),
            (this.cueStartTime = null)
        }
        return (
          i(e, [
            {
              key: 'reset',
              value: function() {
                ;(this.mode = null),
                  this.displayedMemory.reset(),
                  this.nonDisplayedMemory.reset(),
                  this.lastOutputScreen.reset(),
                  (this.currRollUpRow = this.displayedMemory.rows[14]),
                  (this.writeScreen = this.displayedMemory),
                  (this.mode = null),
                  (this.cueStartTime = null),
                  (this.lastCueEndTime = null)
              }
            },
            {
              key: 'getHandler',
              value: function() {
                return this.outputFilter
              }
            },
            {
              key: 'setHandler',
              value: function(e) {
                this.outputFilter = e
              }
            },
            {
              key: 'setPAC',
              value: function(e) {
                this.writeScreen.setPAC(e)
              }
            },
            {
              key: 'setBkgData',
              value: function(e) {
                this.writeScreen.setBkgData(e)
              }
            },
            {
              key: 'setMode',
              value: function(e) {
                e !== this.mode &&
                  ((this.mode = e),
                  c.log('INFO', 'MODE=' + e),
                  'MODE_POP-ON' === this.mode
                    ? (this.writeScreen = this.nonDisplayedMemory)
                    : ((this.writeScreen = this.displayedMemory),
                      this.writeScreen.reset()),
                  'MODE_ROLL-UP' !== this.mode &&
                    ((this.displayedMemory.nrRollUpRows = null),
                    (this.nonDisplayedMemory.nrRollUpRows = null)),
                  (this.mode = e))
              }
            },
            {
              key: 'insertChars',
              value: function(e) {
                for (var t = 0; t < e.length; t++)
                  this.writeScreen.insertChar(e[t])
                var r =
                  this.writeScreen === this.displayedMemory
                    ? 'DISP'
                    : 'NON_DISP'
                c.log('INFO', r + ': ' + this.writeScreen.getDisplayText(!0)),
                  ('MODE_PAINT-ON' !== this.mode &&
                    'MODE_ROLL-UP' !== this.mode) ||
                    (c.log(
                      'TEXT',
                      'DISPLAYED: ' + this.displayedMemory.getDisplayText(!0)
                    ),
                    this.outputDataUpdate())
              }
            },
            {
              key: 'ccRCL',
              value: function() {
                c.log('INFO', 'RCL - Resume Caption Loading'),
                  this.setMode('MODE_POP-ON')
              }
            },
            {
              key: 'ccBS',
              value: function() {
                c.log('INFO', 'BS - BackSpace'),
                  'MODE_TEXT' !== this.mode &&
                    (this.writeScreen.backSpace(),
                    this.writeScreen === this.displayedMemory &&
                      this.outputDataUpdate())
              }
            },
            { key: 'ccAOF', value: function() {} },
            { key: 'ccAON', value: function() {} },
            {
              key: 'ccDER',
              value: function() {
                c.log('INFO', 'DER- Delete to End of Row'),
                  this.writeScreen.clearToEndOfRow(),
                  this.outputDataUpdate()
              }
            },
            {
              key: 'ccRU',
              value: function(e) {
                c.log('INFO', 'RU(' + e + ') - Roll Up'),
                  (this.writeScreen = this.displayedMemory),
                  this.setMode('MODE_ROLL-UP'),
                  this.writeScreen.setRollUpRows(e)
              }
            },
            {
              key: 'ccFON',
              value: function() {
                c.log('INFO', 'FON - Flash On'),
                  this.writeScreen.setPen({ flash: !0 })
              }
            },
            {
              key: 'ccRDC',
              value: function() {
                c.log('INFO', 'RDC - Resume Direct Captioning'),
                  this.setMode('MODE_PAINT-ON')
              }
            },
            {
              key: 'ccTR',
              value: function() {
                c.log('INFO', 'TR'), this.setMode('MODE_TEXT')
              }
            },
            {
              key: 'ccRTD',
              value: function() {
                c.log('INFO', 'RTD'), this.setMode('MODE_TEXT')
              }
            },
            {
              key: 'ccEDM',
              value: function() {
                c.log('INFO', 'EDM - Erase Displayed Memory'),
                  this.displayedMemory.reset(),
                  this.outputDataUpdate(!0)
              }
            },
            {
              key: 'ccCR',
              value: function() {
                c.log('CR - Carriage Return'),
                  this.writeScreen.rollUp(),
                  this.outputDataUpdate(!0)
              }
            },
            {
              key: 'ccENM',
              value: function() {
                c.log('INFO', 'ENM - Erase Non-displayed Memory'),
                  this.nonDisplayedMemory.reset()
              }
            },
            {
              key: 'ccEOC',
              value: function() {
                if (
                  (c.log('INFO', 'EOC - End Of Caption'),
                  'MODE_POP-ON' === this.mode)
                ) {
                  var e = this.displayedMemory
                  ;(this.displayedMemory = this.nonDisplayedMemory),
                    (this.nonDisplayedMemory = e),
                    (this.writeScreen = this.nonDisplayedMemory),
                    c.log(
                      'TEXT',
                      'DISP: ' + this.displayedMemory.getDisplayText()
                    )
                }
                this.outputDataUpdate(!0)
              }
            },
            {
              key: 'ccTO',
              value: function(e) {
                c.log('INFO', 'TO(' + e + ') - Tab Offset'),
                  this.writeScreen.moveCursor(e)
              }
            },
            {
              key: 'ccMIDROW',
              value: function(e) {
                var t = { flash: !1 }
                if (
                  ((t.underline = e % 2 == 1), (t.italics = e >= 46), t.italics)
                )
                  t.foreground = 'white'
                else {
                  var r = Math.floor(e / 2) - 16
                  t.foreground = [
                    'white',
                    'green',
                    'blue',
                    'cyan',
                    'red',
                    'yellow',
                    'magenta'
                  ][r]
                }
                c.log('INFO', 'MIDROW: ' + JSON.stringify(t)),
                  this.writeScreen.setPen(t)
              }
            },
            {
              key: 'outputDataUpdate',
              value: function() {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = c.time
                null !== t &&
                  this.outputFilter &&
                  (null !== this.cueStartTime || this.displayedMemory.isEmpty()
                    ? this.displayedMemory.equals(this.lastOutputScreen) ||
                      (this.outputFilter.newCue &&
                        (this.outputFilter.newCue(
                          this.cueStartTime,
                          t,
                          this.lastOutputScreen
                        ),
                        !0 === e &&
                          this.outputFilter.dispatchCue &&
                          this.outputFilter.dispatchCue()),
                      (this.cueStartTime = this.displayedMemory.isEmpty()
                        ? null
                        : t))
                    : (this.cueStartTime = t),
                  this.lastOutputScreen.copy(this.displayedMemory))
              }
            },
            {
              key: 'cueSplitAtTime',
              value: function(e) {
                this.outputFilter &&
                  (this.displayedMemory.isEmpty() ||
                    (this.outputFilter.newCue &&
                      this.outputFilter.newCue(
                        this.cueStartTime,
                        e,
                        this.displayedMemory
                      ),
                    (this.cueStartTime = e)))
              }
            }
          ]),
          e
        )
      })(),
      b = (function() {
        function e(t, r, i) {
          n(this, e),
            (this.field = t || 1),
            (this.outputs = [r, i]),
            (this.channels = [new m(1, r), new m(2, i)]),
            (this.currChNr = -1),
            (this.lastCmdA = null),
            (this.lastCmdB = null),
            (this.bufferedData = []),
            (this.startTime = null),
            (this.lastTime = null),
            (this.dataCounters = { padding: 0, char: 0, cmd: 0, other: 0 })
        }
        return (
          i(e, [
            {
              key: 'getHandler',
              value: function(e) {
                return this.channels[e].getHandler()
              }
            },
            {
              key: 'setHandler',
              value: function(e, t) {
                this.channels[e].setHandler(t)
              }
            },
            {
              key: 'addData',
              value: function(e, t) {
                var r = void 0,
                  i = void 0,
                  n = void 0,
                  a = !1
                ;(this.lastTime = e), c.setTime(e)
                for (var o = 0; o < t.length; o += 2)
                  if (
                    ((i = 127 & t[o]), (n = 127 & t[o + 1]), 0 !== i || 0 !== n)
                  ) {
                    if (
                      (c.log(
                        'DATA',
                        '[' + h([t[o], t[o + 1]]) + '] -> (' + h([i, n]) + ')'
                      ),
                      (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)),
                      r || (r = this.parsePAC(i, n)),
                      r || (r = this.parseBackgroundAttributes(i, n)),
                      !r)
                    )
                      if ((a = this.parseChars(i, n)))
                        if (this.currChNr && this.currChNr >= 0)
                          this.channels[this.currChNr - 1].insertChars(a)
                        else
                          c.log('WARNING', 'No channel found yet. TEXT-MODE?')
                    r
                      ? (this.dataCounters.cmd += 2)
                      : a
                        ? (this.dataCounters.char += 2)
                        : ((this.dataCounters.other += 2),
                          c.log(
                            'WARNING',
                            "Couldn't parse cleaned data " +
                              h([i, n]) +
                              ' orig: ' +
                              h([t[o], t[o + 1]])
                          ))
                  } else this.dataCounters.padding += 2
              }
            },
            {
              key: 'parseCmd',
              value: function(e, t) {
                var r = null
                if (
                  !((20 === e || 28 === e) && t >= 32 && t <= 47) &&
                  !((23 === e || 31 === e) && t >= 33 && t <= 35)
                )
                  return !1
                if (e === this.lastCmdA && t === this.lastCmdB)
                  return (
                    (this.lastCmdA = null),
                    (this.lastCmdB = null),
                    c.log(
                      'DEBUG',
                      'Repeated command (' + h([e, t]) + ') is dropped'
                    ),
                    !0
                  )
                r = 20 === e || 23 === e ? 1 : 2
                var i = this.channels[r - 1]
                return (
                  20 === e || 28 === e
                    ? 32 === t
                      ? i.ccRCL()
                      : 33 === t
                        ? i.ccBS()
                        : 34 === t
                          ? i.ccAOF()
                          : 35 === t
                            ? i.ccAON()
                            : 36 === t
                              ? i.ccDER()
                              : 37 === t
                                ? i.ccRU(2)
                                : 38 === t
                                  ? i.ccRU(3)
                                  : 39 === t
                                    ? i.ccRU(4)
                                    : 40 === t
                                      ? i.ccFON()
                                      : 41 === t
                                        ? i.ccRDC()
                                        : 42 === t
                                          ? i.ccTR()
                                          : 43 === t
                                            ? i.ccRTD()
                                            : 44 === t
                                              ? i.ccEDM()
                                              : 45 === t
                                                ? i.ccCR()
                                                : 46 === t
                                                  ? i.ccENM()
                                                  : 47 === t && i.ccEOC()
                    : i.ccTO(t - 32),
                  (this.lastCmdA = e),
                  (this.lastCmdB = t),
                  (this.currChNr = r),
                  !0
                )
              }
            },
            {
              key: 'parseMidrow',
              value: function(e, t) {
                var r = null
                return (
                  (17 === e || 25 === e) &&
                  t >= 32 &&
                  t <= 47 &&
                  ((r = 17 === e ? 1 : 2) !== this.currChNr
                    ? (c.log('ERROR', 'Mismatch channel in midrow parsing'), !1)
                    : (this.channels[r - 1].ccMIDROW(t),
                      c.log('DEBUG', 'MIDROW (' + h([e, t]) + ')'),
                      !0))
                )
              }
            },
            {
              key: 'parsePAC',
              value: function(e, t) {
                var r,
                  i = null
                if (
                  !(
                    ((e >= 17 && e <= 23) || (e >= 25 && e <= 31)) &&
                    t >= 64 &&
                    t <= 127
                  ) &&
                  !((16 === e || 24 === e) && t >= 64 && t <= 95)
                )
                  return !1
                if (e === this.lastCmdA && t === this.lastCmdB)
                  return (this.lastCmdA = null), (this.lastCmdB = null), !0
                ;(r = e <= 23 ? 1 : 2),
                  (i =
                    t >= 64 && t <= 95
                      ? 1 === r
                        ? s[e]
                        : u[e]
                      : 1 === r
                        ? l[e]
                        : d[e])
                var n = this.interpretPAC(i, t)
                return (
                  this.channels[r - 1].setPAC(n),
                  (this.lastCmdA = e),
                  (this.lastCmdB = t),
                  (this.currChNr = r),
                  !0
                )
              }
            },
            {
              key: 'interpretPAC',
              value: function(e, t) {
                var r = t,
                  i = {
                    color: null,
                    italics: !1,
                    indent: null,
                    underline: !1,
                    row: e
                  }
                return (
                  (r = t > 95 ? t - 96 : t - 64),
                  (i.underline = 1 == (1 & r)),
                  r <= 13
                    ? (i.color = [
                        'white',
                        'green',
                        'blue',
                        'cyan',
                        'red',
                        'yellow',
                        'magenta',
                        'white'
                      ][Math.floor(r / 2)])
                    : r <= 15
                      ? ((i.italics = !0), (i.color = 'white'))
                      : (i.indent = 4 * Math.floor((r - 16) / 2)),
                  i
                )
              }
            },
            {
              key: 'parseChars',
              value: function(e, t) {
                var r = null,
                  i = null,
                  n = null
                if (
                  (e >= 25 ? ((r = 2), (n = e - 8)) : ((r = 1), (n = e)),
                  n >= 17 && n <= 19)
                ) {
                  var a = t
                  ;(a = 17 === n ? t + 80 : 18 === n ? t + 112 : t + 144),
                    c.log(
                      'INFO',
                      "Special char '" + o(a) + "' in channel " + r
                    ),
                    (i = [a])
                } else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t])
                if (i) {
                  var s = h(i)
                  c.log('DEBUG', 'Char codes =  ' + s.join(',')),
                    (this.lastCmdA = null),
                    (this.lastCmdB = null)
                }
                return i
              }
            },
            {
              key: 'parseBackgroundAttributes',
              value: function(e, t) {
                var r,
                  i = void 0,
                  n = void 0
                return (
                  (((16 === e || 24 === e) && t >= 32 && t <= 47) ||
                    ((23 === e || 31 === e) && t >= 45 && t <= 47)) &&
                  ((i = {}),
                  16 === e || 24 === e
                    ? ((n = Math.floor((t - 32) / 2)),
                      (i.background = f[n]),
                      t % 2 == 1 && (i.background = i.background + '_semi'))
                    : 45 === t
                      ? (i.background = 'transparent')
                      : ((i.foreground = 'black'),
                        47 === t && (i.underline = !0)),
                  (r = e < 24 ? 1 : 2),
                  this.channels[r - 1].setBkgData(i),
                  (this.lastCmdA = null),
                  (this.lastCmdB = null),
                  !0)
                )
              }
            },
            {
              key: 'reset',
              value: function() {
                for (var e = 0; e < this.channels.length; e++)
                  this.channels[e] && this.channels[e].reset()
                ;(this.lastCmdA = null), (this.lastCmdB = null)
              }
            },
            {
              key: 'cueSplitAtTime',
              value: function(e) {
                for (var t = 0; t < this.channels.length; t++)
                  this.channels[t] && this.channels[t].cueSplitAtTime(e)
              }
            }
          ]),
          e
        )
      })()
    ;(t.default = b), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
      }
    })()
    var n = (function() {
      function e(t, r) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.timelineController = t),
          (this.trackName = r),
          (this.startTime = null),
          (this.endTime = null),
          (this.screen = null)
      }
      return (
        i(e, [
          {
            key: 'dispatchCue',
            value: function() {
              null !== this.startTime &&
                (this.timelineController.addCues(
                  this.trackName,
                  this.startTime,
                  this.endTime,
                  this.screen
                ),
                (this.startTime = null))
            }
          },
          {
            key: 'newCue',
            value: function(e, t, r) {
              ;(null === this.startTime || this.startTime > e) &&
                (this.startTime = e),
                (this.endTime = t),
                (this.screen = r),
                this.timelineController.createCaptionsTrack(this.trackName)
            }
          }
        ]),
        e
      )
    })()
    ;(t.default = n), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i,
      n = r(43),
      a = (i = n) && i.__esModule ? i : { default: i },
      o = r(8)
    var s = function(e, t, r) {
        return e.substr(r || 0, t.length) === t
      },
      l = function(e) {
        for (var t = 5381, r = e.length; r; ) t = (33 * t) ^ e.charCodeAt(--r)
        return (t >>> 0).toString()
      },
      u = {
        parse: function(e, t, r, i, n, u) {
          var d = (0, o.utf8ArrayToStr)(new Uint8Array(e))
              .trim()
              .replace(/\r\n|\n\r|\n|\r/g, '\n')
              .split('\n'),
            f = '00:00.000',
            c = 0,
            h = 0,
            p = 0,
            v = [],
            g = void 0,
            y = !0,
            m = new a.default()
          ;(m.oncue = function(e) {
            var t = r[i],
              n = r.ccOffset
            t &&
              t.new &&
              (void 0 !== h
                ? (n = r.ccOffset = t.start)
                : (function(e, t, r) {
                    var i = e[t],
                      n = e[i.prevCC]
                    if (!n || (!n.new && i.new))
                      return (
                        (e.ccOffset = e.presentationOffset = i.start),
                        void (i.new = !1)
                      )
                    for (; n && n.new; )
                      (e.ccOffset += i.start - n.start),
                        (i.new = !1),
                        (n = e[(i = n).prevCC])
                    e.presentationOffset = r
                  })(r, i, p)),
              p && (n = p + r.ccOffset - r.presentationOffset),
              (e.startTime += n - h),
              (e.endTime += n - h),
              (e.id =
                l(e.startTime.toString()) +
                l(e.endTime.toString()) +
                l(e.text)),
              (e.text = decodeURIComponent(encodeURIComponent(e.text))),
              e.endTime > 0 && v.push(e)
          }),
            (m.onparsingerror = function(e) {
              g = e
            }),
            (m.onflush = function() {
              g && u ? u(g) : n(v)
            }),
            d.forEach(function(e) {
              if (y) {
                if (s(e, 'X-TIMESTAMP-MAP=')) {
                  ;(y = !1),
                    e
                      .substr(16)
                      .split(',')
                      .forEach(function(e) {
                        s(e, 'LOCAL:')
                          ? (f = e.substr(6))
                          : s(e, 'MPEGTS:') && (c = parseInt(e.substr(7)))
                      })
                  try {
                    ;(c -= t = t < 0 ? t + 8589934592 : t),
                      (r = f),
                      (i = parseInt(r.substr(-3))),
                      (n = parseInt(r.substr(-6, 2))),
                      (a = parseInt(r.substr(-9, 2))),
                      (o =
                        r.length > 9
                          ? parseInt(r.substr(0, r.indexOf(':')))
                          : 0),
                      (h =
                        (isNaN(i) || isNaN(n) || isNaN(a) || isNaN(o)
                          ? -1
                          : ((i += 1e3 * n), (i += 6e4 * a), (i += 36e5 * o))) /
                        1e3),
                      (p = c / 9e4),
                      -1 === h &&
                        (g = new Error('Malformed X-TIMESTAMP-MAP: ' + e))
                  } catch (t) {
                    g = new Error('Malformed X-TIMESTAMP-MAP: ' + e)
                  }
                  return
                }
                '' === e && (y = !1)
              }
              var r, i, n, a, o
              m.parse(e + '\n')
            }),
            m.flush()
        }
      }
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = s(r(1)),
      a = s(r(3)),
      o = r(0)
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function l(e) {
      for (var t = [], r = 0; r < e.length; r++)
        'subtitles' === e[r].kind && t.push(e[r])
      return t
    }
    var u = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        var r = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            e,
            n.default.MEDIA_ATTACHED,
            n.default.MEDIA_DETACHING,
            n.default.MANIFEST_LOADING,
            n.default.MANIFEST_LOADED,
            n.default.SUBTITLE_TRACK_LOADED
          )
        )
        return (
          (r.tracks = []),
          (r.trackId = -1),
          (r.media = null),
          (r.subtitleDisplay = !0),
          r
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
        i(t, [
          {
            key: '_onTextTracksChanged',
            value: function() {
              if (this.media) {
                for (
                  var e = -1, t = l(this.media.textTracks), r = 0;
                  r < t.length;
                  r++
                )
                  if ('hidden' === t[r].mode) e = r
                  else if ('showing' === t[r].mode) {
                    e = r
                    break
                  }
                this.subtitleTrack = e
              }
            }
          },
          {
            key: 'destroy',
            value: function() {
              a.default.prototype.destroy.call(this)
            }
          },
          {
            key: 'onMediaAttached',
            value: function(e) {
              var t = this
              ;(this.media = e.media),
                this.media &&
                  (this.queuedDefaultTrack &&
                    ((this.subtitleTrack = this.queuedDefaultTrack),
                    delete this.queuedDefaultTrack),
                  (this.trackChangeListener = this._onTextTracksChanged.bind(
                    this
                  )),
                  (this.useTextTrackPolling = !(
                    this.media.textTracks && 'onchange' in this.media.textTracks
                  )),
                  this.useTextTrackPolling
                    ? (this.subtitlePollingInterval = setInterval(function() {
                        t.trackChangeListener()
                      }, 500))
                    : this.media.textTracks.addEventListener(
                        'change',
                        this.trackChangeListener
                      ))
            }
          },
          {
            key: 'onMediaDetaching',
            value: function() {
              this.media &&
                (this.useTextTrackPolling
                  ? clearInterval(this.subtitlePollingInterval)
                  : this.media.textTracks.removeEventListener(
                      'change',
                      this.trackChangeListener
                    ),
                (this.media = null))
            }
          },
          {
            key: 'onManifestLoading',
            value: function() {
              ;(this.tracks = []), (this.trackId = -1)
            }
          },
          {
            key: 'onManifestLoaded',
            value: function(e) {
              var t = this,
                r = e.subtitles || []
              ;(this.tracks = r),
                (this.trackId = -1),
                this.hls.trigger(n.default.SUBTITLE_TRACKS_UPDATED, {
                  subtitleTracks: r
                }),
                r.forEach(function(e) {
                  e.default &&
                    (t.media
                      ? (t.subtitleTrack = e.id)
                      : (t.queuedDefaultTrack = e.id))
                })
            }
          },
          {
            key: 'onTick',
            value: function() {
              var e = this.trackId,
                t = this.tracks[e]
              if (t) {
                var r = t.details
                ;(r && !r.live) ||
                  (o.logger.log('(re)loading playlist for subtitle track ' + e),
                  this.hls.trigger(n.default.SUBTITLE_TRACK_LOADING, {
                    url: t.url,
                    id: e
                  }))
              }
            }
          },
          {
            key: 'onSubtitleTrackLoaded',
            value: function(e) {
              var t = this
              e.id < this.tracks.length &&
                (o.logger.log('subtitle track ' + e.id + ' loaded'),
                (this.tracks[e.id].details = e.details),
                e.details.live &&
                  !this.timer &&
                  (this.timer = setInterval(
                    function() {
                      t.onTick()
                    },
                    1e3 * e.details.targetduration,
                    this
                  )),
                !e.details.live && this.timer && this._stopTimer())
            }
          },
          {
            key: 'setSubtitleTrackInternal',
            value: function(e) {
              var t = this.hls,
                r = this.tracks
              if (
                !('number' != typeof e || e < -1 || e >= r.length) &&
                (this._stopTimer(),
                (this.trackId = e),
                o.logger.log('switching to subtitle track ' + e),
                t.trigger(n.default.SUBTITLE_TRACK_SWITCH, { id: e }),
                -1 !== e)
              ) {
                var i = r[e],
                  a = i.details
                ;(a && !a.live) ||
                  (o.logger.log('(re)loading playlist for subtitle track ' + e),
                  t.trigger(n.default.SUBTITLE_TRACK_LOADING, {
                    url: i.url,
                    id: e
                  }))
              }
            }
          },
          {
            key: '_stopTimer',
            value: function() {
              this.timer && (clearInterval(this.timer), (this.timer = null))
            }
          },
          {
            key: '_toggleTrackModes',
            value: function(e) {
              var t = this.media,
                r = this.subtitleDisplay,
                i = this.trackId
              if (t) {
                var n = l(t.textTracks)
                if (-1 === e)
                  [].slice.call(n).forEach(function(e) {
                    e.mode = 'disabled'
                  })
                else {
                  var a = n[i]
                  a && (a.mode = 'disabled')
                }
                var o = n[e]
                o && (o.mode = r ? 'showing' : 'hidden')
              }
            }
          },
          {
            key: 'subtitleTracks',
            get: function() {
              return this.tracks
            }
          },
          {
            key: 'subtitleTrack',
            get: function() {
              return this.trackId
            },
            set: function(e) {
              this.trackId !== e &&
                (this._toggleTrackModes(e), this.setSubtitleTrackInternal(e))
            }
          }
        ]),
        t
      )
    })(a.default)
    ;(t.default = u), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = l(r(1)),
      a = r(0),
      o = l(r(17)),
      s = l(r(9))
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = window.performance,
      d = 'STOPPED',
      f = 'IDLE',
      c = 'KEY_LOADING',
      h = 'FRAG_LOADING',
      p = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var r = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              n.default.MEDIA_ATTACHED,
              n.default.ERROR,
              n.default.KEY_LOADED,
              n.default.FRAG_LOADED,
              n.default.SUBTITLE_TRACKS_UPDATED,
              n.default.SUBTITLE_TRACK_SWITCH,
              n.default.SUBTITLE_TRACK_LOADED,
              n.default.SUBTITLE_FRAG_PROCESSED
            )
          )
          return (
            (r.config = e.config),
            (r.vttFragSNsProcessed = {}),
            (r.vttFragQueues = void 0),
            (r.currentlyProcessing = null),
            (r.state = d),
            (r.currentTrackId = -1),
            (r.decrypter = new o.default(e.observer, e.config)),
            r
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
          i(t, [
            {
              key: 'onHandlerDestroyed',
              value: function() {
                this.state = d
              }
            },
            {
              key: 'clearVttFragQueues',
              value: function() {
                var e = this
                ;(this.vttFragQueues = {}),
                  this.tracks.forEach(function(t) {
                    e.vttFragQueues[t.id] = []
                  })
              }
            },
            {
              key: 'nextFrag',
              value: function() {
                if (
                  null === this.currentlyProcessing &&
                  this.currentTrackId > -1 &&
                  this.vttFragQueues[this.currentTrackId].length
                ) {
                  var e = (this.currentlyProcessing = this.vttFragQueues[
                    this.currentTrackId
                  ].shift())
                  ;(this.fragCurrent = e),
                    this.hls.trigger(n.default.FRAG_LOADING, { frag: e }),
                    (this.state = h)
                }
              }
            },
            {
              key: 'onSubtitleFragProcessed',
              value: function(e) {
                e.success &&
                  this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn),
                  (this.currentlyProcessing = null),
                  (this.state = f),
                  this.nextFrag()
              }
            },
            {
              key: 'onMediaAttached',
              value: function() {
                this.state = f
              }
            },
            {
              key: 'onError',
              value: function(e) {
                var t = e.frag
                ;(t && 'subtitle' !== t.type) ||
                  (this.currentlyProcessing &&
                    ((this.currentlyProcessing = null), this.nextFrag()))
              }
            },
            {
              key: 'doTick',
              value: function() {
                var e = this
                switch (this.state) {
                  case f:
                    var t,
                      r = this.tracks,
                      i = this.currentTrackId,
                      o = this.vttFragSNsProcessed[i],
                      s = this.vttFragQueues[i],
                      l = this.currentlyProcessing
                        ? this.currentlyProcessing.sn
                        : -1
                    if (!r) break
                    if ((i < r.length && (t = r[i].details), void 0 === t))
                      break
                    t.fragments.forEach(function(t) {
                      ;(function(e) {
                        return o.indexOf(e.sn) > -1
                      })(t) ||
                        t.sn === l ||
                        (function(e) {
                          return s.some(function(t) {
                            return t.sn === e.sn
                          })
                        })(t) ||
                        (t.encrypted
                          ? (a.logger.log('Loading key for ' + t.sn),
                            (e.state = c),
                            e.hls.trigger(n.default.KEY_LOADING, { frag: t }))
                          : ((t.trackId = i), s.push(t), e.nextFrag()))
                    })
                }
              }
            },
            {
              key: 'onSubtitleTracksUpdated',
              value: function(e) {
                var t = this
                a.logger.log('subtitle tracks updated'),
                  (this.tracks = e.subtitleTracks),
                  this.clearVttFragQueues(),
                  (this.vttFragSNsProcessed = {}),
                  this.tracks.forEach(function(e) {
                    t.vttFragSNsProcessed[e.id] = []
                  })
              }
            },
            {
              key: 'onSubtitleTrackSwitch',
              value: function(e) {
                if (
                  ((this.currentTrackId = e.id),
                  this.tracks && -1 !== this.currentTrackId)
                ) {
                  var t = this.tracks[this.currentTrackId]
                  t && t.details && this.tick()
                }
              }
            },
            {
              key: 'onSubtitleTrackLoaded',
              value: function() {
                this.tick()
              }
            },
            {
              key: 'onKeyLoaded',
              value: function() {
                this.state === c && ((this.state = f), this.tick())
              }
            },
            {
              key: 'onFragLoaded',
              value: function(e) {
                var t = this.fragCurrent,
                  r = e.frag.decryptdata,
                  i = e.frag,
                  a = this.hls
                if (
                  this.state === h &&
                  t &&
                  'subtitle' === e.frag.type &&
                  t.sn === e.frag.sn &&
                  e.payload.byteLength > 0 &&
                  null != r &&
                  null != r.key &&
                  'AES-128' === r.method
                ) {
                  var o = void 0
                  try {
                    o = u.now()
                  } catch (e) {
                    o = Date.now()
                  }
                  this.decrypter.decrypt(
                    e.payload,
                    r.key.buffer,
                    r.iv.buffer,
                    function(e) {
                      var t = void 0
                      try {
                        t = u.now()
                      } catch (e) {
                        t = Date.now()
                      }
                      a.trigger(n.default.FRAG_DECRYPTED, {
                        frag: i,
                        payload: e,
                        stats: { tstart: o, tdecrypt: t }
                      })
                    }
                  )
                }
              }
            }
          ]),
          t
        )
      })(s.default)
    ;(t.default = p), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      })(),
      n = l(r(3)),
      a = l(r(1)),
      o = r(2),
      s = r(0)
    function l(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var u = window.XMLHttpRequest,
      d = 'com.widevine.alpha',
      f = 'com.microsoft.playready',
      c = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var r = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              e,
              a.default.MEDIA_ATTACHED,
              a.default.MANIFEST_PARSED
            )
          )
          return (
            (r._widevineLicenseUrl = e.config.widevineLicenseUrl),
            (r._licenseXhrSetup = e.config.licenseXhrSetup),
            (r._emeEnabled = e.config.emeEnabled),
            (r._requestMediaKeySystemAccess =
              e.config.requestMediaKeySystemAccessFunc),
            (r._mediaKeysList = []),
            (r._media = null),
            (r._hasSetMediaKeys = !1),
            (r._isMediaEncrypted = !1),
            (r._requestLicenseFailureCount = 0),
            r
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
          i(t, [
            {
              key: 'getLicenseServerUrl',
              value: function(e) {
                var t = void 0
                switch (e) {
                  case d:
                    t = this._widevineLicenseUrl
                    break
                  default:
                    t = null
                }
                return (
                  t ||
                    (s.logger.error(
                      'No license server URL configured for key-system "' +
                        e +
                        '"'
                    ),
                    this.hls.trigger(a.default.ERROR, {
                      type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                      details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                      fatal: !0
                    })),
                  t
                )
              }
            },
            {
              key: '_attemptKeySystemAccess',
              value: function(e, t, r) {
                var i = this,
                  n = (function(e, t, r) {
                    switch (e) {
                      case d:
                        return (function(e, t, r) {
                          var i = { videoCapabilities: [] }
                          return (
                            t.forEach(function(e) {
                              i.videoCapabilities.push({
                                contentType: 'video/mp4; codecs="' + e + '"'
                              })
                            }),
                            [i]
                          )
                        })(0, r)
                      default:
                        throw Error('Unknown key-system: ' + e)
                    }
                  })(e, 0, r)
                n
                  ? (s.logger.log(
                      'Requesting encrypted media key-system access'
                    ),
                    this.requestMediaKeySystemAccess(e, n)
                      .then(function(t) {
                        i._onMediaKeySystemAccessObtained(e, t)
                      })
                      .catch(function(t) {
                        s.logger.error(
                          'Failed to obtain key-system "' + e + '" access:',
                          t
                        )
                      }))
                  : s.logger.warn(
                      'Can not create config for key-system (maybe because platform is not supported):',
                      e
                    )
              }
            },
            {
              key: '_onMediaKeySystemAccessObtained',
              value: function(e, t) {
                var r = this
                s.logger.log('Access for key-system "' + e + '" obtained')
                var i = {
                  mediaKeys: null,
                  mediaKeysSession: null,
                  mediaKeysSessionInitialized: !1,
                  mediaKeySystemAccess: t,
                  mediaKeySystemDomain: e
                }
                this._mediaKeysList.push(i),
                  t
                    .createMediaKeys()
                    .then(function(t) {
                      ;(i.mediaKeys = t),
                        s.logger.log(
                          'Media-keys created for key-system "' + e + '"'
                        ),
                        r._onMediaKeysCreated()
                    })
                    .catch(function(e) {
                      s.logger.error('Failed to create media-keys:', e)
                    })
              }
            },
            {
              key: '_onMediaKeysCreated',
              value: function() {
                var e = this
                this._mediaKeysList.forEach(function(t) {
                  t.mediaKeysSession ||
                    ((t.mediaKeysSession = t.mediaKeys.createSession()),
                    e._onNewMediaKeySession(t.mediaKeysSession))
                })
              }
            },
            {
              key: '_onNewMediaKeySession',
              value: function(e) {
                var t = this
                s.logger.log('New key-system session ' + e.sessionId),
                  e.addEventListener(
                    'message',
                    function(r) {
                      t._onKeySessionMessage(e, r.message)
                    },
                    !1
                  )
              }
            },
            {
              key: '_onKeySessionMessage',
              value: function(e, t) {
                s.logger.log('Got EME message event, creating license request'),
                  this._requestLicense(t, function(t) {
                    s.logger.log('Received license data, updating key-session'),
                      e.update(t)
                  })
              }
            },
            {
              key: '_onMediaEncrypted',
              value: function(e, t) {
                s.logger.log(
                  'Media is encrypted using "' + e + '" init data type'
                ),
                  (this._isMediaEncrypted = !0),
                  (this._mediaEncryptionInitDataType = e),
                  (this._mediaEncryptionInitData = t),
                  this._attemptSetMediaKeys(),
                  this._generateRequestWithPreferredKeySession()
              }
            },
            {
              key: '_attemptSetMediaKeys',
              value: function() {
                if (!this._hasSetMediaKeys) {
                  var e = this._mediaKeysList[0]
                  if (!e || !e.mediaKeys)
                    return (
                      s.logger.error(
                        'Fatal: Media is encrypted but no CDM access or no keys have been obtained yet'
                      ),
                      void this.hls.trigger(a.default.ERROR, {
                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                        fatal: !0
                      })
                    )
                  s.logger.log('Setting keys for encrypted media'),
                    this._media.setMediaKeys(e.mediaKeys),
                    (this._hasSetMediaKeys = !0)
                }
              }
            },
            {
              key: '_generateRequestWithPreferredKeySession',
              value: function() {
                var e = this,
                  t = this._mediaKeysList[0]
                if (!t)
                  return (
                    s.logger.error(
                      'Fatal: Media is encrypted but not any key-system access has been obtained yet'
                    ),
                    void this.hls.trigger(a.default.ERROR, {
                      type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                      details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                      fatal: !0
                    })
                  )
                if (t.mediaKeysSessionInitialized)
                  s.logger.warn(
                    'Key-Session already initialized but requested again'
                  )
                else {
                  var r = t.mediaKeysSession
                  r ||
                    (s.logger.error(
                      'Fatal: Media is encrypted but no key-session existing'
                    ),
                    this.hls.trigger(a.default.ERROR, {
                      type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                      details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                      fatal: !0
                    }))
                  var i = this._mediaEncryptionInitDataType,
                    n = this._mediaEncryptionInitData
                  s.logger.log(
                    'Generating key-session request for "' +
                      i +
                      '" init data type'
                  ),
                    (t.mediaKeysSessionInitialized = !0),
                    r
                      .generateRequest(i, n)
                      .then(function() {
                        s.logger.debug('Key-session generation succeeded')
                      })
                      .catch(function(t) {
                        s.logger.error(
                          'Error generating key-session request:',
                          t
                        ),
                          e.hls.trigger(a.default.ERROR, {
                            type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !1
                          })
                      })
                }
              }
            },
            {
              key: '_createLicenseXhr',
              value: function(e, t, r) {
                var i = new u(),
                  n = this._licenseXhrSetup
                try {
                  if (n)
                    try {
                      n(i, e)
                    } catch (t) {
                      i.open('POST', e, !0), n(i, e)
                    }
                  i.readyState || i.open('POST', e, !0)
                } catch (e) {
                  return (
                    s.logger.error(
                      'Error setting up key-system license XHR',
                      e
                    ),
                    void this.hls.trigger(a.default.ERROR, {
                      type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                      details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                      fatal: !0
                    })
                  )
                }
                return (
                  (i.responseType = 'arraybuffer'),
                  (i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(
                    this,
                    i,
                    e,
                    t,
                    r
                  )),
                  i
                )
              }
            },
            {
              key: '_onLicenseRequestReadyStageChange',
              value: function(e, t, r, i) {
                switch (e.readyState) {
                  case 4:
                    if (200 === e.status)
                      (this._requestLicenseFailureCount = 0),
                        s.logger.log('License request succeeded'),
                        i(e.response)
                    else {
                      if (
                        (s.logger.error(
                          'License Request XHR failed (' +
                            t +
                            '). Status: ' +
                            e.status +
                            ' (' +
                            e.statusText +
                            ')'
                        ),
                        this._requestLicenseFailureCount++,
                        this._requestLicenseFailureCount <= 3)
                      ) {
                        var n = 3 - this._requestLicenseFailureCount + 1
                        return (
                          s.logger.warn(
                            'Retrying license request, ' + n + ' attempts left'
                          ),
                          void this._requestLicense(r, i)
                        )
                      }
                      this.hls.trigger(a.default.ERROR, {
                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                        details:
                          o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                      })
                    }
                }
              }
            },
            {
              key: '_generateLicenseRequestChallenge',
              value: function(e, t) {
                var r = void 0
                return (
                  e.mediaKeySystemDomain === f
                    ? s.logger.error('PlayReady is not supported (yet)')
                    : e.mediaKeySystemDomain === d
                      ? (r = t)
                      : s.logger.error(
                          'Unsupported key-system:',
                          e.mediaKeySystemDomain
                        ),
                  r
                )
              }
            },
            {
              key: '_requestLicense',
              value: function(e, t) {
                s.logger.log('Requesting content license for key-system')
                var r = this._mediaKeysList[0]
                if (!r)
                  return (
                    s.logger.error(
                      'Fatal error: Media is encrypted but no key-system access has been obtained yet'
                    ),
                    void this.hls.trigger(a.default.ERROR, {
                      type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                      details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                      fatal: !0
                    })
                  )
                var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                  n = this._createLicenseXhr(i, e, t)
                s.logger.log('Sending license request to URL: ' + i),
                  n.send(this._generateLicenseRequestChallenge(r, e))
              }
            },
            {
              key: 'onMediaAttached',
              value: function(e) {
                var t = this
                if (this._emeEnabled) {
                  var r = e.media
                  ;(this._media = r),
                    r.addEventListener('encrypted', function(e) {
                      t._onMediaEncrypted(e.initDataType, e.initData)
                    })
                }
              }
            },
            {
              key: 'onManifestParsed',
              value: function(e) {
                if (this._emeEnabled) {
                  var t = e.levels.map(function(e) {
                      return e.audioCodec
                    }),
                    r = e.levels.map(function(e) {
                      return e.videoCodec
                    })
                  this._attemptKeySystemAccess(d, t, r)
                }
              }
            },
            {
              key: 'requestMediaKeySystemAccess',
              get: function() {
                if (!this._requestMediaKeySystemAccess)
                  throw new Error(
                    'No requestMediaKeySystemAccess function configured'
                  )
                return this._requestMediaKeySystemAccess
              }
            }
          ]),
          t
        )
      })(n.default)
    ;(t.default = c), (e.exports = t.default)
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i =
      'undefined' != typeof window &&
      window.navigator &&
      window.navigator.requestMediaKeySystemAccess
        ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator)
        : null
    t.requestMediaKeySystemAccess = i
  },
  function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = {
      getBrowserVersion: function() {
        var e = navigator.userAgent
        if (e.toLowerCase().indexOf('mobile') > -1) return 'Unknown'
        if (e.indexOf('Firefox') > -1)
          return 'Firefox ' + e.match(/firefox\/[\d.]+/gi)[0].match(/[\d]+/)[0]
        if (e.indexOf('Edge') > -1)
          return 'Edge ' + e.match(/edge\/[\d.]+/gi)[0].match(/[\d]+/)[0]
        if (e.indexOf('rv:11') > -1) return 'IE 11'
        if (e.indexOf('Opera') > -1 || e.indexOf('OPR') > -1) {
          if (e.indexOf('Opera') > -1)
            return 'Opera ' + e.match(/opera\/[\d.]+/gi)[0].match(/[\d]+/)[0]
          if (e.indexOf('OPR') > -1)
            return 'Opera ' + e.match(/opr\/[\d.]+/gi)[0].match(/[\d]+/)[0]
        } else {
          if (e.indexOf('Chrome') > -1)
            return 'Chrome ' + e.match(/chrome\/[\d.]+/gi)[0].match(/[\d]+/)[0]
          if (e.indexOf('Safari') > -1)
            return 'Safari ' + e.match(/safari\/[\d.]+/gi)[0].match(/[\d]+/)[0]
          if (!(e.indexOf('MSIE') > -1 || e.indexOf('Trident') > -1))
            return 'Unknown'
          if (e.indexOf('MSIE') > -1)
            return 'IE ' + e.match(/msie [\d.]+/gi)[0].match(/[\d]+/)[0]
          if (e.indexOf('Trident') > -1) {
            var t = e.match(/trident\/[\d.]+/gi)[0].match(/[\d]+/)[0]
            return 'IE ' + (parseInt(t) + 4)
          }
        }
      },
      getDefinitionName: function(e) {
        switch (e) {
          case 'HD':
            return '超清'
          case 'SD':
            return '高清'
          case 'LD':
            return '标清'
          case 'FD':
            return '流畅'
        }
      }
    }
    ;(t.default = i), (e.exports = t.default)
  }
])
