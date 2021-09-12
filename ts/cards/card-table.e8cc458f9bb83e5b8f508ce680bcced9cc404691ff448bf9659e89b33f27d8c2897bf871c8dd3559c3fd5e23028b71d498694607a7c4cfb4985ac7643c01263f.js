(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/papaparse/papaparse.min.js
  var require_papaparse_min = __commonJS({
    "node_modules/papaparse/papaparse.min.js"(exports, module) {
      !function(e2, t) {
        typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && typeof exports != "undefined" ? module.exports = t() : e2.Papa = t();
      }(exports, function s() {
        "use strict";
        var f = typeof self != "undefined" ? self : typeof window != "undefined" ? window : f !== void 0 ? f : {};
        var n = !f.document && !!f.postMessage, o = n && /blob:/i.test((f.location || {}).protocol), a = {}, h = 0, b = { parse: function(e2, t) {
          var i3 = (t = t || {}).dynamicTyping || false;
          U(i3) && (t.dynamicTypingFunction = i3, i3 = {});
          if (t.dynamicTyping = i3, t.transform = !!U(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
            var r = function() {
              if (!b.WORKERS_SUPPORTED)
                return false;
              var e3 = (i4 = f.URL || f.webkitURL || null, r2 = s.toString(), b.BLOB_URL || (b.BLOB_URL = i4.createObjectURL(new Blob(["(", r2, ")();"], { type: "text/javascript" })))), t2 = new f.Worker(e3);
              var i4, r2;
              return t2.onmessage = m, t2.id = h++, a[t2.id] = t2;
            }();
            return r.userStep = t.step, r.userChunk = t.chunk, r.userComplete = t.complete, r.userError = t.error, t.step = U(t.step), t.chunk = U(t.chunk), t.complete = U(t.complete), t.error = U(t.error), delete t.worker, void r.postMessage({ input: e2, config: t, workerId: r.id });
          }
          var n2 = null;
          b.NODE_STREAM_INPUT, typeof e2 == "string" ? n2 = t.download ? new l(t) : new p(t) : e2.readable === true && U(e2.read) && U(e2.on) ? n2 = new g(t) : (f.File && e2 instanceof File || e2 instanceof Object) && (n2 = new c(t));
          return n2.stream(e2);
        }, unparse: function(e2, t) {
          var n2 = false, m2 = true, _8 = ",", v2 = "\r\n", s2 = '"', a2 = s2 + s2, i3 = false, r = null, o2 = false;
          !function() {
            if (typeof t != "object")
              return;
            typeof t.delimiter != "string" || b.BAD_DELIMITERS.filter(function(e3) {
              return t.delimiter.indexOf(e3) !== -1;
            }).length || (_8 = t.delimiter);
            (typeof t.quotes == "boolean" || typeof t.quotes == "function" || Array.isArray(t.quotes)) && (n2 = t.quotes);
            typeof t.skipEmptyLines != "boolean" && typeof t.skipEmptyLines != "string" || (i3 = t.skipEmptyLines);
            typeof t.newline == "string" && (v2 = t.newline);
            typeof t.quoteChar == "string" && (s2 = t.quoteChar);
            typeof t.header == "boolean" && (m2 = t.header);
            if (Array.isArray(t.columns)) {
              if (t.columns.length === 0)
                throw new Error("Option columns is empty");
              r = t.columns;
            }
            t.escapeChar !== void 0 && (a2 = t.escapeChar + s2);
            typeof t.escapeFormulae == "boolean" && (o2 = t.escapeFormulae);
          }();
          var h2 = new RegExp(q(s2), "g");
          typeof e2 == "string" && (e2 = JSON.parse(e2));
          if (Array.isArray(e2)) {
            if (!e2.length || Array.isArray(e2[0]))
              return f2(null, e2, i3);
            if (typeof e2[0] == "object")
              return f2(r || u2(e2[0]), e2, i3);
          } else if (typeof e2 == "object")
            return typeof e2.data == "string" && (e2.data = JSON.parse(e2.data)), Array.isArray(e2.data) && (e2.fields || (e2.fields = e2.meta && e2.meta.fields), e2.fields || (e2.fields = Array.isArray(e2.data[0]) ? e2.fields : u2(e2.data[0])), Array.isArray(e2.data[0]) || typeof e2.data[0] == "object" || (e2.data = [e2.data])), f2(e2.fields || [], e2.data || [], i3);
          throw new Error("Unable to serialize unrecognized input");
          function u2(e3) {
            if (typeof e3 != "object")
              return [];
            var t2 = [];
            for (var i4 in e3)
              t2.push(i4);
            return t2;
          }
          function f2(e3, t2, i4) {
            var r2 = "";
            typeof e3 == "string" && (e3 = JSON.parse(e3)), typeof t2 == "string" && (t2 = JSON.parse(t2));
            var n3 = Array.isArray(e3) && 0 < e3.length, s3 = !Array.isArray(t2[0]);
            if (n3 && m2) {
              for (var a3 = 0; a3 < e3.length; a3++)
                0 < a3 && (r2 += _8), r2 += y2(e3[a3], a3);
              0 < t2.length && (r2 += v2);
            }
            for (var o3 = 0; o3 < t2.length; o3++) {
              var h3 = n3 ? e3.length : t2[o3].length, u3 = false, f3 = n3 ? Object.keys(t2[o3]).length === 0 : t2[o3].length === 0;
              if (i4 && !n3 && (u3 = i4 === "greedy" ? t2[o3].join("").trim() === "" : t2[o3].length === 1 && t2[o3][0].length === 0), i4 === "greedy" && n3) {
                for (var d2 = [], l2 = 0; l2 < h3; l2++) {
                  var c2 = s3 ? e3[l2] : l2;
                  d2.push(t2[o3][c2]);
                }
                u3 = d2.join("").trim() === "";
              }
              if (!u3) {
                for (var p2 = 0; p2 < h3; p2++) {
                  0 < p2 && !f3 && (r2 += _8);
                  var g2 = n3 && s3 ? e3[p2] : p2;
                  r2 += y2(t2[o3][g2], p2);
                }
                o3 < t2.length - 1 && (!i4 || 0 < h3 && !f3) && (r2 += v2);
              }
            }
            return r2;
          }
          function y2(e3, t2) {
            if (e3 == null)
              return "";
            if (e3.constructor === Date)
              return JSON.stringify(e3).slice(1, 25);
            o2 === true && typeof e3 == "string" && e3.match(/^[=+\-@].*$/) !== null && (e3 = "'" + e3);
            var i4 = e3.toString().replace(h2, a2), r2 = typeof n2 == "boolean" && n2 || typeof n2 == "function" && n2(e3, t2) || Array.isArray(n2) && n2[t2] || function(e4, t3) {
              for (var i5 = 0; i5 < t3.length; i5++)
                if (-1 < e4.indexOf(t3[i5]))
                  return true;
              return false;
            }(i4, b.BAD_DELIMITERS) || -1 < i4.indexOf(_8) || i4.charAt(0) === " " || i4.charAt(i4.length - 1) === " ";
            return r2 ? s2 + i4 + s2 : i4;
          }
        } };
        if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = w, b.ParserHandle = i2, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
          var d = f.jQuery;
          d.fn.parse = function(o2) {
            var i3 = o2.config || {}, h2 = [];
            return this.each(function(e3) {
              if (!(d(this).prop("tagName").toUpperCase() === "INPUT" && d(this).attr("type").toLowerCase() === "file" && f.FileReader) || !this.files || this.files.length === 0)
                return true;
              for (var t = 0; t < this.files.length; t++)
                h2.push({ file: this.files[t], inputElem: this, instanceConfig: d.extend({}, i3) });
            }), e2(), this;
            function e2() {
              if (h2.length !== 0) {
                var e3, t, i4, r, n2 = h2[0];
                if (U(o2.before)) {
                  var s2 = o2.before(n2.file, n2.inputElem);
                  if (typeof s2 == "object") {
                    if (s2.action === "abort")
                      return e3 = "AbortError", t = n2.file, i4 = n2.inputElem, r = s2.reason, void (U(o2.error) && o2.error({ name: e3 }, t, i4, r));
                    if (s2.action === "skip")
                      return void u2();
                    typeof s2.config == "object" && (n2.instanceConfig = d.extend(n2.instanceConfig, s2.config));
                  } else if (s2 === "skip")
                    return void u2();
                }
                var a2 = n2.instanceConfig.complete;
                n2.instanceConfig.complete = function(e4) {
                  U(a2) && a2(e4, n2.file, n2.inputElem), u2();
                }, b.parse(n2.file, n2.instanceConfig);
              } else
                U(o2.complete) && o2.complete();
            }
            function u2() {
              h2.splice(0, 1), e2();
            }
          };
        }
        function u(e2) {
          this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, function(e3) {
            var t = E(e3);
            t.chunkSize = parseInt(t.chunkSize), e3.step || e3.chunk || (t.chunkSize = null);
            this._handle = new i2(t), (this._handle.streamer = this)._config = t;
          }.call(this, e2), this.parseChunk = function(e3, t) {
            if (this.isFirstChunk && U(this._config.beforeFirstChunk)) {
              var i3 = this._config.beforeFirstChunk(e3);
              i3 !== void 0 && (e3 = i3);
            }
            this.isFirstChunk = false, this._halted = false;
            var r = this._partialLine + e3;
            this._partialLine = "";
            var n2 = this._handle.parse(r, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
              var s2 = n2.meta.cursor;
              this._finished || (this._partialLine = r.substring(s2 - this._baseIndex), this._baseIndex = s2), n2 && n2.data && (this._rowCount += n2.data.length);
              var a2 = this._finished || this._config.preview && this._rowCount >= this._config.preview;
              if (o)
                f.postMessage({ results: n2, workerId: b.WORKER_ID, finished: a2 });
              else if (U(this._config.chunk) && !t) {
                if (this._config.chunk(n2, this._handle), this._handle.paused() || this._handle.aborted())
                  return void (this._halted = true);
                n2 = void 0, this._completeResults = void 0;
              }
              return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n2.data), this._completeResults.errors = this._completeResults.errors.concat(n2.errors), this._completeResults.meta = n2.meta), this._completed || !a2 || !U(this._config.complete) || n2 && n2.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), a2 || n2 && n2.meta.paused || this._nextChunk(), n2;
            }
            this._halted = true;
          }, this._sendError = function(e3) {
            U(this._config.error) ? this._config.error(e3) : o && this._config.error && f.postMessage({ workerId: b.WORKER_ID, error: e3, finished: false });
          };
        }
        function l(e2) {
          var r;
          (e2 = e2 || {}).chunkSize || (e2.chunkSize = b.RemoteChunkSize), u.call(this, e2), this._nextChunk = n ? function() {
            this._readChunk(), this._chunkLoaded();
          } : function() {
            this._readChunk();
          }, this.stream = function(e3) {
            this._input = e3, this._nextChunk();
          }, this._readChunk = function() {
            if (this._finished)
              this._chunkLoaded();
            else {
              if (r = new XMLHttpRequest(), this._config.withCredentials && (r.withCredentials = this._config.withCredentials), n || (r.onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
                var e3 = this._config.downloadRequestHeaders;
                for (var t in e3)
                  r.setRequestHeader(t, e3[t]);
              }
              if (this._config.chunkSize) {
                var i3 = this._start + this._config.chunkSize - 1;
                r.setRequestHeader("Range", "bytes=" + this._start + "-" + i3);
              }
              try {
                r.send(this._config.downloadRequestBody);
              } catch (e4) {
                this._chunkError(e4.message);
              }
              n && r.status === 0 && this._chunkError();
            }
          }, this._chunkLoaded = function() {
            r.readyState === 4 && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e3) {
              var t = e3.getResponseHeader("Content-Range");
              if (t === null)
                return -1;
              return parseInt(t.substring(t.lastIndexOf("/") + 1));
            }(r), this.parseChunk(r.responseText)));
          }, this._chunkError = function(e3) {
            var t = r.statusText || e3;
            this._sendError(new Error(t));
          };
        }
        function c(e2) {
          var r, n2;
          (e2 = e2 || {}).chunkSize || (e2.chunkSize = b.LocalChunkSize), u.call(this, e2);
          var s2 = typeof FileReader != "undefined";
          this.stream = function(e3) {
            this._input = e3, n2 = e3.slice || e3.webkitSlice || e3.mozSlice, s2 ? ((r = new FileReader()).onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)) : r = new FileReaderSync(), this._nextChunk();
          }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
          }, this._readChunk = function() {
            var e3 = this._input;
            if (this._config.chunkSize) {
              var t = Math.min(this._start + this._config.chunkSize, this._input.size);
              e3 = n2.call(e3, this._start, t);
            }
            var i3 = r.readAsText(e3, this._config.encoding);
            s2 || this._chunkLoaded({ target: { result: i3 } });
          }, this._chunkLoaded = function(e3) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e3.target.result);
          }, this._chunkError = function() {
            this._sendError(r.error);
          };
        }
        function p(e2) {
          var i3;
          u.call(this, e2 = e2 || {}), this.stream = function(e3) {
            return i3 = e3, this._nextChunk();
          }, this._nextChunk = function() {
            if (!this._finished) {
              var e3, t = this._config.chunkSize;
              return t ? (e3 = i3.substring(0, t), i3 = i3.substring(t)) : (e3 = i3, i3 = ""), this._finished = !i3, this.parseChunk(e3);
            }
          };
        }
        function g(e2) {
          u.call(this, e2 = e2 || {});
          var t = [], i3 = true, r = false;
          this.pause = function() {
            u.prototype.pause.apply(this, arguments), this._input.pause();
          }, this.resume = function() {
            u.prototype.resume.apply(this, arguments), this._input.resume();
          }, this.stream = function(e3) {
            this._input = e3, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
          }, this._checkIsFinished = function() {
            r && t.length === 1 && (this._finished = true);
          }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i3 = true;
          }, this._streamData = y(function(e3) {
            try {
              t.push(typeof e3 == "string" ? e3 : e3.toString(this._config.encoding)), i3 && (i3 = false, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e4) {
              this._streamError(e4);
            }
          }, this), this._streamError = y(function(e3) {
            this._streamCleanUp(), this._sendError(e3);
          }, this), this._streamEnd = y(function() {
            this._streamCleanUp(), r = true, this._streamData("");
          }, this), this._streamCleanUp = y(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
          }, this);
        }
        function i2(_8) {
          var a2, o2, h2, r = Math.pow(2, 53), n2 = -r, s2 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/, u2 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/, t = this, i3 = 0, f2 = 0, d2 = false, e2 = false, l2 = [], c2 = { data: [], errors: [], meta: {} };
          if (U(_8.step)) {
            var p2 = _8.step;
            _8.step = function(e3) {
              if (c2 = e3, m2())
                g2();
              else {
                if (g2(), c2.data.length === 0)
                  return;
                i3 += e3.data.length, _8.preview && i3 > _8.preview ? o2.abort() : (c2.data = c2.data[0], p2(c2, t));
              }
            };
          }
          function v2(e3) {
            return _8.skipEmptyLines === "greedy" ? e3.join("").trim() === "" : e3.length === 1 && e3[0].length === 0;
          }
          function g2() {
            if (c2 && h2 && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), h2 = false), _8.skipEmptyLines)
              for (var e3 = 0; e3 < c2.data.length; e3++)
                v2(c2.data[e3]) && c2.data.splice(e3--, 1);
            return m2() && function() {
              if (!c2)
                return;
              function e4(e5, t3) {
                U(_8.transformHeader) && (e5 = _8.transformHeader(e5, t3)), l2.push(e5);
              }
              if (Array.isArray(c2.data[0])) {
                for (var t2 = 0; m2() && t2 < c2.data.length; t2++)
                  c2.data[t2].forEach(e4);
                c2.data.splice(0, 1);
              } else
                c2.data.forEach(e4);
            }(), function() {
              if (!c2 || !_8.header && !_8.dynamicTyping && !_8.transform)
                return c2;
              function e4(e5, t3) {
                var i4, r2 = _8.header ? {} : [];
                for (i4 = 0; i4 < e5.length; i4++) {
                  var n3 = i4, s3 = e5[i4];
                  _8.header && (n3 = i4 >= l2.length ? "__parsed_extra" : l2[i4]), _8.transform && (s3 = _8.transform(s3, n3)), s3 = y2(n3, s3), n3 === "__parsed_extra" ? (r2[n3] = r2[n3] || [], r2[n3].push(s3)) : r2[n3] = s3;
                }
                return _8.header && (i4 > l2.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l2.length + " fields but parsed " + i4, f2 + t3) : i4 < l2.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l2.length + " fields but parsed " + i4, f2 + t3)), r2;
              }
              var t2 = 1;
              !c2.data.length || Array.isArray(c2.data[0]) ? (c2.data = c2.data.map(e4), t2 = c2.data.length) : c2.data = e4(c2.data, 0);
              _8.header && c2.meta && (c2.meta.fields = l2);
              return f2 += t2, c2;
            }();
          }
          function m2() {
            return _8.header && l2.length === 0;
          }
          function y2(e3, t2) {
            return i4 = e3, _8.dynamicTypingFunction && _8.dynamicTyping[i4] === void 0 && (_8.dynamicTyping[i4] = _8.dynamicTypingFunction(i4)), (_8.dynamicTyping[i4] || _8.dynamicTyping) === true ? t2 === "true" || t2 === "TRUE" || t2 !== "false" && t2 !== "FALSE" && (function(e4) {
              if (s2.test(e4)) {
                var t3 = parseFloat(e4);
                if (n2 < t3 && t3 < r)
                  return true;
              }
              return false;
            }(t2) ? parseFloat(t2) : u2.test(t2) ? new Date(t2) : t2 === "" ? null : t2) : t2;
            var i4;
          }
          function k(e3, t2, i4, r2) {
            var n3 = { type: e3, code: t2, message: i4 };
            r2 !== void 0 && (n3.row = r2), c2.errors.push(n3);
          }
          this.parse = function(e3, t2, i4) {
            var r2 = _8.quoteChar || '"';
            if (_8.newline || (_8.newline = function(e4, t3) {
              e4 = e4.substring(0, 1048576);
              var i5 = new RegExp(q(t3) + "([^]*?)" + q(t3), "gm"), r3 = (e4 = e4.replace(i5, "")).split("\r"), n4 = e4.split("\n"), s4 = 1 < n4.length && n4[0].length < r3[0].length;
              if (r3.length === 1 || s4)
                return "\n";
              for (var a3 = 0, o3 = 0; o3 < r3.length; o3++)
                r3[o3][0] === "\n" && a3++;
              return a3 >= r3.length / 2 ? "\r\n" : "\r";
            }(e3, r2)), h2 = false, _8.delimiter)
              U(_8.delimiter) && (_8.delimiter = _8.delimiter(e3), c2.meta.delimiter = _8.delimiter);
            else {
              var n3 = function(e4, t3, i5, r3, n4) {
                var s4, a3, o3, h3;
                n4 = n4 || [",", "	", "|", ";", b.RECORD_SEP, b.UNIT_SEP];
                for (var u3 = 0; u3 < n4.length; u3++) {
                  var f3 = n4[u3], d3 = 0, l3 = 0, c3 = 0;
                  o3 = void 0;
                  for (var p3 = new w({ comments: r3, delimiter: f3, newline: t3, preview: 10 }).parse(e4), g3 = 0; g3 < p3.data.length; g3++)
                    if (i5 && v2(p3.data[g3]))
                      c3++;
                    else {
                      var m3 = p3.data[g3].length;
                      l3 += m3, o3 !== void 0 ? 0 < m3 && (d3 += Math.abs(m3 - o3), o3 = m3) : o3 = m3;
                    }
                  0 < p3.data.length && (l3 /= p3.data.length - c3), (a3 === void 0 || d3 <= a3) && (h3 === void 0 || h3 < l3) && 1.99 < l3 && (a3 = d3, s4 = f3, h3 = l3);
                }
                return { successful: !!(_8.delimiter = s4), bestDelimiter: s4 };
              }(e3, _8.newline, _8.skipEmptyLines, _8.comments, _8.delimitersToGuess);
              n3.successful ? _8.delimiter = n3.bestDelimiter : (h2 = true, _8.delimiter = b.DefaultDelimiter), c2.meta.delimiter = _8.delimiter;
            }
            var s3 = E(_8);
            return _8.preview && _8.header && s3.preview++, a2 = e3, o2 = new w(s3), c2 = o2.parse(a2, t2, i4), g2(), d2 ? { meta: { paused: true } } : c2 || { meta: { paused: false } };
          }, this.paused = function() {
            return d2;
          }, this.pause = function() {
            d2 = true, o2.abort(), a2 = U(_8.chunk) ? "" : a2.substring(o2.getCharIndex());
          }, this.resume = function() {
            t.streamer._halted ? (d2 = false, t.streamer.parseChunk(a2, true)) : setTimeout(t.resume, 3);
          }, this.aborted = function() {
            return e2;
          }, this.abort = function() {
            e2 = true, o2.abort(), c2.meta.aborted = true, U(_8.complete) && _8.complete(c2), a2 = "";
          };
        }
        function q(e2) {
          return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function w(e2) {
          var O, D = (e2 = e2 || {}).delimiter, I = e2.newline, T = e2.comments, A = e2.step, L = e2.preview, F = e2.fastMode, z = O = e2.quoteChar === void 0 ? '"' : e2.quoteChar;
          if (e2.escapeChar !== void 0 && (z = e2.escapeChar), (typeof D != "string" || -1 < b.BAD_DELIMITERS.indexOf(D)) && (D = ","), T === D)
            throw new Error("Comment character same as delimiter");
          T === true ? T = "#" : (typeof T != "string" || -1 < b.BAD_DELIMITERS.indexOf(T)) && (T = false), I !== "\n" && I !== "\r" && I !== "\r\n" && (I = "\n");
          var M = 0, j = false;
          this.parse = function(a2, t, i3) {
            if (typeof a2 != "string")
              throw new Error("Input must be a string");
            var r = a2.length, e3 = D.length, n2 = I.length, s2 = T.length, o2 = U(A), h2 = [], u2 = [], f2 = [], d2 = M = 0;
            if (!a2)
              return R();
            if (F || F !== false && a2.indexOf(O) === -1) {
              for (var l2 = a2.split(I), c2 = 0; c2 < l2.length; c2++) {
                if (f2 = l2[c2], M += f2.length, c2 !== l2.length - 1)
                  M += I.length;
                else if (i3)
                  return R();
                if (!T || f2.substring(0, s2) !== T) {
                  if (o2) {
                    if (h2 = [], b2(f2.split(D)), S(), j)
                      return R();
                  } else
                    b2(f2.split(D));
                  if (L && L <= c2)
                    return h2 = h2.slice(0, L), R(true);
                }
              }
              return R();
            }
            for (var p2 = a2.indexOf(D, M), g2 = a2.indexOf(I, M), m2 = new RegExp(q(z) + q(O), "g"), _8 = a2.indexOf(O, M); ; )
              if (a2[M] !== O)
                if (T && f2.length === 0 && a2.substring(M, M + s2) === T) {
                  if (g2 === -1)
                    return R();
                  M = g2 + n2, g2 = a2.indexOf(I, M), p2 = a2.indexOf(D, M);
                } else {
                  if (p2 !== -1 && (p2 < g2 || g2 === -1)) {
                    if (!(p2 < _8)) {
                      f2.push(a2.substring(M, p2)), M = p2 + e3, p2 = a2.indexOf(D, M);
                      continue;
                    }
                    var v2 = x(p2, _8, g2);
                    if (v2 && v2.nextDelim !== void 0) {
                      p2 = v2.nextDelim, _8 = v2.quoteSearch, f2.push(a2.substring(M, p2)), M = p2 + e3, p2 = a2.indexOf(D, M);
                      continue;
                    }
                  }
                  if (g2 === -1)
                    break;
                  if (f2.push(a2.substring(M, g2)), C(g2 + n2), o2 && (S(), j))
                    return R();
                  if (L && h2.length >= L)
                    return R(true);
                }
              else
                for (_8 = M, M++; ; ) {
                  if ((_8 = a2.indexOf(O, _8 + 1)) === -1)
                    return i3 || u2.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: h2.length, index: M }), E2();
                  if (_8 === r - 1)
                    return E2(a2.substring(M, _8).replace(m2, O));
                  if (O !== z || a2[_8 + 1] !== z) {
                    if (O === z || _8 === 0 || a2[_8 - 1] !== z) {
                      p2 !== -1 && p2 < _8 + 1 && (p2 = a2.indexOf(D, _8 + 1)), g2 !== -1 && g2 < _8 + 1 && (g2 = a2.indexOf(I, _8 + 1));
                      var y2 = w2(g2 === -1 ? p2 : Math.min(p2, g2));
                      if (a2[_8 + 1 + y2] === D) {
                        f2.push(a2.substring(M, _8).replace(m2, O)), a2[M = _8 + 1 + y2 + e3] !== O && (_8 = a2.indexOf(O, M)), p2 = a2.indexOf(D, M), g2 = a2.indexOf(I, M);
                        break;
                      }
                      var k = w2(g2);
                      if (a2.substring(_8 + 1 + k, _8 + 1 + k + n2) === I) {
                        if (f2.push(a2.substring(M, _8).replace(m2, O)), C(_8 + 1 + k + n2), p2 = a2.indexOf(D, M), _8 = a2.indexOf(O, M), o2 && (S(), j))
                          return R();
                        if (L && h2.length >= L)
                          return R(true);
                        break;
                      }
                      u2.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: h2.length, index: M }), _8++;
                    }
                  } else
                    _8++;
                }
            return E2();
            function b2(e4) {
              h2.push(e4), d2 = M;
            }
            function w2(e4) {
              var t2 = 0;
              if (e4 !== -1) {
                var i4 = a2.substring(_8 + 1, e4);
                i4 && i4.trim() === "" && (t2 = i4.length);
              }
              return t2;
            }
            function E2(e4) {
              return i3 || (e4 === void 0 && (e4 = a2.substring(M)), f2.push(e4), M = r, b2(f2), o2 && S()), R();
            }
            function C(e4) {
              M = e4, b2(f2), f2 = [], g2 = a2.indexOf(I, M);
            }
            function R(e4) {
              return { data: h2, errors: u2, meta: { delimiter: D, linebreak: I, aborted: j, truncated: !!e4, cursor: d2 + (t || 0) } };
            }
            function S() {
              A(R()), h2 = [], u2 = [];
            }
            function x(e4, t2, i4) {
              var r2 = { nextDelim: void 0, quoteSearch: void 0 }, n3 = a2.indexOf(O, t2 + 1);
              if (t2 < e4 && e4 < n3 && (n3 < i4 || i4 === -1)) {
                var s3 = a2.indexOf(D, n3);
                if (s3 === -1)
                  return r2;
                n3 < s3 && (n3 = a2.indexOf(O, n3 + 1)), r2 = x(s3, n3, i4);
              } else
                r2 = { nextDelim: e4, quoteSearch: t2 };
              return r2;
            }
          }, this.abort = function() {
            j = true;
          }, this.getCharIndex = function() {
            return M;
          };
        }
        function m(e2) {
          var t = e2.data, i3 = a[t.workerId], r = false;
          if (t.error)
            i3.userError(t.error, t.file);
          else if (t.results && t.results.data) {
            var n2 = { abort: function() {
              r = true, _7(t.workerId, { data: [], errors: [], meta: { aborted: true } });
            }, pause: v, resume: v };
            if (U(i3.userStep)) {
              for (var s2 = 0; s2 < t.results.data.length && (i3.userStep({ data: t.results.data[s2], errors: t.results.errors, meta: t.results.meta }, n2), !r); s2++)
                ;
              delete t.results;
            } else
              U(i3.userChunk) && (i3.userChunk(t.results, n2, t.file), delete t.results);
          }
          t.finished && !r && _7(t.workerId, t.results);
        }
        function _7(e2, t) {
          var i3 = a[e2];
          U(i3.userComplete) && i3.userComplete(t), i3.terminate(), delete a[e2];
        }
        function v() {
          throw new Error("Not implemented.");
        }
        function E(e2) {
          if (typeof e2 != "object" || e2 === null)
            return e2;
          var t = Array.isArray(e2) ? [] : {};
          for (var i3 in e2)
            t[i3] = E(e2[i3]);
          return t;
        }
        function y(e2, t) {
          return function() {
            e2.apply(t, arguments);
          };
        }
        function U(e2) {
          return typeof e2 == "function";
        }
        return o && (f.onmessage = function(e2) {
          var t = e2.data;
          b.WORKER_ID === void 0 && t && (b.WORKER_ID = t.workerId);
          if (typeof t.input == "string")
            f.postMessage({ workerId: b.WORKER_ID, results: b.parse(t.input, t.config), finished: true });
          else if (f.File && t.input instanceof File || t.input instanceof Object) {
            var i3 = b.parse(t.input, t.config);
            i3 && f.postMessage({ workerId: b.WORKER_ID, results: i3, finished: true });
          }
        }), (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(u.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(u.prototype)).constructor = g, b;
      });
    }
  });

  // <stdin>
  var import_papaparse = __toModule(require_papaparse_min());

  // node_modules/tabulator-tables/dist/js/tabulator.es2015.js
  "use strict";
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, "findIndex", {
      value: function value(predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          }
          k++;
        }
        return -1;
      }
    });
  }
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
      value: function value(predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          k++;
        }
        return void 0;
      }
    });
  }
  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      "use strict";
      if (search instanceof RegExp) {
        throw TypeError("first argument must not be a RegExp");
      }
      if (start === void 0) {
        start = 0;
      }
      return this.indexOf(search, start) !== -1;
    };
  }
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
          return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        function sameValueZero(x, y) {
          return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        }
        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }
  if (typeof Object.assign !== "function") {
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        "use strict";
        if (target === null || target === void 0) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          if (nextSource !== null && nextSource !== void 0) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }
  var ColumnManager = function ColumnManager2(table4) {
    this.table = table4;
    this.blockHozScrollEvent = false;
    this.headersElement = this.createHeadersElement();
    this.element = this.createHeaderElement();
    this.rowManager = null;
    this.columns = [];
    this.columnsByIndex = [];
    this.columnsByField = {};
    this.scrollLeft = 0;
    this.element.insertBefore(this.headersElement, this.element.firstChild);
  };
  ColumnManager.prototype.createHeadersElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-headers");
    return el;
  };
  ColumnManager.prototype.createHeaderElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-header");
    if (!this.table.options.headerVisible) {
      el.classList.add("tabulator-header-hidden");
    }
    return el;
  };
  ColumnManager.prototype.initialize = function() {
    var self2 = this;
  };
  ColumnManager.prototype.setRowManager = function(manager) {
    this.rowManager = manager;
  };
  ColumnManager.prototype.getElement = function() {
    return this.element;
  };
  ColumnManager.prototype.getHeadersElement = function() {
    return this.headersElement;
  };
  ColumnManager.prototype.scrollHorizontal = function(left) {
    var hozAdjust = 0, scrollWidth = this.element.scrollWidth - this.table.element.clientWidth;
    this.element.scrollLeft = left;
    if (left > scrollWidth) {
      hozAdjust = left - scrollWidth;
      this.element.style.marginLeft = -hozAdjust + "px";
    } else {
      this.element.style.marginLeft = 0;
    }
    this.scrollLeft = left;
    if (this.table.modExists("frozenColumns")) {
      this.table.modules.frozenColumns.scrollHorizontal();
    }
  };
  ColumnManager.prototype.generateColumnsFromRowData = function(data) {
    var cols = [], definitions = this.table.options.autoColumnsDefinitions, row2, sorter;
    if (data && data.length) {
      row2 = data[0];
      for (var key in row2) {
        var col = {
          field: key,
          title: key
        };
        var value = row2[key];
        switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
          case "undefined":
            sorter = "string";
            break;
          case "boolean":
            sorter = "boolean";
            break;
          case "object":
            if (Array.isArray(value)) {
              sorter = "array";
            } else {
              sorter = "string";
            }
            break;
          default:
            if (!isNaN(value) && value !== "") {
              sorter = "number";
            } else {
              if (value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)) {
                sorter = "alphanum";
              } else {
                sorter = "string";
              }
            }
            break;
        }
        col.sorter = sorter;
        cols.push(col);
      }
      if (definitions) {
        switch (typeof definitions === "undefined" ? "undefined" : _typeof(definitions)) {
          case "function":
            this.table.options.columns = definitions.call(this.table, cols);
            break;
          case "object":
            if (Array.isArray(definitions)) {
              cols.forEach(function(col2) {
                var match = definitions.find(function(def) {
                  return def.field === col2.field;
                });
                if (match) {
                  Object.assign(col2, match);
                }
              });
            } else {
              cols.forEach(function(col2) {
                if (definitions[col2.field]) {
                  Object.assign(col2, definitions[col2.field]);
                }
              });
            }
            this.table.options.columns = cols;
            break;
        }
      } else {
        this.table.options.columns = cols;
      }
      this.setColumns(this.table.options.columns);
    }
  };
  ColumnManager.prototype.setColumns = function(cols, row2) {
    var self2 = this;
    while (self2.headersElement.firstChild) {
      self2.headersElement.removeChild(self2.headersElement.firstChild);
    }
    self2.columns = [];
    self2.columnsByIndex = [];
    self2.columnsByField = {};
    if (self2.table.modExists("frozenColumns")) {
      self2.table.modules.frozenColumns.reset();
    }
    cols.forEach(function(def, i2) {
      self2._addColumn(def);
    });
    self2._reIndexColumns();
    if (self2.table.options.responsiveLayout && self2.table.modExists("responsiveLayout", true)) {
      self2.table.modules.responsiveLayout.initialize();
    }
    if (this.table.options.virtualDomHoz) {
      this.table.vdomHoz.reinitialize(false, true);
    }
    self2.redraw(true);
  };
  ColumnManager.prototype._addColumn = function(definition2, before, nextToColumn) {
    var column2 = new Column(definition2, this), colEl = column2.getElement(), index = nextToColumn ? this.findColumnIndex(nextToColumn) : nextToColumn;
    if (nextToColumn && index > -1) {
      var parentIndex = this.columns.indexOf(nextToColumn.getTopColumn());
      var nextEl = nextToColumn.getElement();
      if (before) {
        this.columns.splice(parentIndex, 0, column2);
        nextEl.parentNode.insertBefore(colEl, nextEl);
      } else {
        this.columns.splice(parentIndex + 1, 0, column2);
        nextEl.parentNode.insertBefore(colEl, nextEl.nextSibling);
      }
    } else {
      if (before) {
        this.columns.unshift(column2);
        this.headersElement.insertBefore(column2.getElement(), this.headersElement.firstChild);
      } else {
        this.columns.push(column2);
        this.headersElement.appendChild(column2.getElement());
      }
      column2.columnRendered();
    }
    return column2;
  };
  ColumnManager.prototype.registerColumnField = function(col) {
    if (col.definition.field) {
      this.columnsByField[col.definition.field] = col;
    }
  };
  ColumnManager.prototype.registerColumnPosition = function(col) {
    this.columnsByIndex.push(col);
  };
  ColumnManager.prototype._reIndexColumns = function() {
    this.columnsByIndex = [];
    this.columns.forEach(function(column2) {
      column2.reRegisterPosition();
    });
  };
  ColumnManager.prototype._verticalAlignHeaders = function() {
    var self2 = this, minHeight = 0;
    self2.columns.forEach(function(column2) {
      var height;
      column2.clearVerticalAlign();
      height = column2.getHeight();
      if (height > minHeight) {
        minHeight = height;
      }
    });
    self2.columns.forEach(function(column2) {
      column2.verticalAlign(self2.table.options.columnHeaderVertAlign, minHeight);
    });
    self2.rowManager.adjustTableSize();
  };
  ColumnManager.prototype.findColumn = function(subject) {
    var self2 = this;
    if ((typeof subject === "undefined" ? "undefined" : _typeof(subject)) == "object") {
      if (subject instanceof Column) {
        return subject;
      } else if (subject instanceof ColumnComponent) {
        return subject._getSelf() || false;
      } else if (typeof HTMLElement !== "undefined" && subject instanceof HTMLElement) {
        var match = self2.columns.find(function(column2) {
          return column2.element === subject;
        });
        return match || false;
      }
    } else {
      return this.columnsByField[subject] || false;
    }
    return false;
  };
  ColumnManager.prototype.getColumnByField = function(field) {
    return this.columnsByField[field];
  };
  ColumnManager.prototype.getColumnsByFieldRoot = function(root) {
    var _this = this;
    var matches = [];
    Object.keys(this.columnsByField).forEach(function(field) {
      var fieldRoot = field.split(".")[0];
      if (fieldRoot === root) {
        matches.push(_this.columnsByField[field]);
      }
    });
    return matches;
  };
  ColumnManager.prototype.getColumnByIndex = function(index) {
    return this.columnsByIndex[index];
  };
  ColumnManager.prototype.getFirstVisibileColumn = function(index) {
    var index = this.columnsByIndex.findIndex(function(col) {
      return col.visible;
    });
    return index > -1 ? this.columnsByIndex[index] : false;
  };
  ColumnManager.prototype.getColumns = function() {
    return this.columns;
  };
  ColumnManager.prototype.findColumnIndex = function(column2) {
    return this.columnsByIndex.findIndex(function(col) {
      return column2 === col;
    });
  };
  ColumnManager.prototype.getRealColumns = function() {
    return this.columnsByIndex;
  };
  ColumnManager.prototype.traverse = function(callback) {
    var self2 = this;
    self2.columnsByIndex.forEach(function(column2, i2) {
      callback(column2, i2);
    });
  };
  ColumnManager.prototype.getDefinitions = function(active) {
    var self2 = this, output = [];
    self2.columnsByIndex.forEach(function(column2) {
      if (!active || active && column2.visible) {
        output.push(column2.getDefinition());
      }
    });
    return output;
  };
  ColumnManager.prototype.getDefinitionTree = function() {
    var self2 = this, output = [];
    self2.columns.forEach(function(column2) {
      output.push(column2.getDefinition(true));
    });
    return output;
  };
  ColumnManager.prototype.getComponents = function(structured) {
    var self2 = this, output = [], columns2 = structured ? self2.columns : self2.columnsByIndex;
    columns2.forEach(function(column2) {
      output.push(column2.getComponent());
    });
    return output;
  };
  ColumnManager.prototype.getWidth = function() {
    var width = 0;
    this.columnsByIndex.forEach(function(column2) {
      if (column2.visible) {
        width += column2.getWidth();
      }
    });
    return width;
  };
  ColumnManager.prototype.moveColumn = function(from, to, after) {
    this.moveColumnActual(from, to, after);
    if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
      this.table.modules.responsiveLayout.initialize();
    }
    if (this.table.modExists("columnCalcs")) {
      this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
    }
    to.element.parentNode.insertBefore(from.element, to.element);
    if (after) {
      to.element.parentNode.insertBefore(to.element, from.element);
    }
    this._verticalAlignHeaders();
    this.table.rowManager.reinitialize();
  };
  ColumnManager.prototype.moveColumnActual = function(from, to, after) {
    if (from.parent.isGroup) {
      this._moveColumnInArray(from.parent.columns, from, to, after);
    } else {
      this._moveColumnInArray(this.columns, from, to, after);
    }
    this._moveColumnInArray(this.columnsByIndex, from, to, after, true);
    if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
      this.table.modules.responsiveLayout.initialize();
    }
    if (this.table.options.virtualDomHoz) {
      this.table.vdomHoz.reinitialize(true);
    }
    if (this.table.options.columnMoved) {
      this.table.options.columnMoved.call(this.table, from.getComponent(), this.table.columnManager.getComponents());
    }
    if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {
      this.table.modules.persistence.save("columns");
    }
  };
  ColumnManager.prototype._moveColumnInArray = function(columns2, from, to, after, updateRows) {
    var _this2 = this;
    var fromIndex = columns2.indexOf(from), toIndex, rows = [];
    if (fromIndex > -1) {
      columns2.splice(fromIndex, 1);
      toIndex = columns2.indexOf(to);
      if (toIndex > -1) {
        if (after) {
          toIndex = toIndex + 1;
        }
      } else {
        toIndex = fromIndex;
      }
      columns2.splice(toIndex, 0, from);
      if (updateRows) {
        if (this.table.options.dataTree && this.table.modExists("dataTree", true)) {
          this.table.rowManager.rows.forEach(function(row2) {
            rows = rows.concat(_this2.table.modules.dataTree.getTreeChildren(row2, false, true));
          });
        }
        rows = rows.concat(this.table.rowManager.rows);
        rows.forEach(function(row2) {
          if (row2.cells.length) {
            var cell = row2.cells.splice(fromIndex, 1)[0];
            row2.cells.splice(toIndex, 0, cell);
          }
        });
      }
    }
  };
  ColumnManager.prototype.scrollToColumn = function(column2, position, ifVisible) {
    var _this3 = this;
    var left = 0, offset = 0, adjust = 0, colEl = column2.getElement();
    return new Promise(function(resolve, reject) {
      if (typeof position === "undefined") {
        position = _this3.table.options.scrollToColumnPosition;
      }
      if (typeof ifVisible === "undefined") {
        ifVisible = _this3.table.options.scrollToColumnIfVisible;
      }
      if (column2.visible) {
        switch (position) {
          case "middle":
          case "center":
            adjust = -_this3.element.clientWidth / 2;
            break;
          case "right":
            adjust = colEl.clientWidth - _this3.headersElement.clientWidth;
            break;
        }
        if (!ifVisible) {
          offset = colEl.offsetLeft;
          if (offset > 0 && offset + colEl.offsetWidth < _this3.element.clientWidth) {
            return false;
          }
        }
        left = colEl.offsetLeft + adjust;
        left = Math.max(Math.min(left, _this3.table.rowManager.element.scrollWidth - _this3.table.rowManager.element.clientWidth), 0);
        _this3.table.rowManager.scrollHorizontal(left);
        _this3.scrollHorizontal(left);
        resolve();
      } else {
        console.warn("Scroll Error - Column not visible");
        reject("Scroll Error - Column not visible");
      }
    });
  };
  ColumnManager.prototype.generateCells = function(row2) {
    var self2 = this;
    var cells = [];
    self2.columnsByIndex.forEach(function(column2) {
      cells.push(column2.generateCell(row2));
    });
    return cells;
  };
  ColumnManager.prototype.getFlexBaseWidth = function() {
    var self2 = this, totalWidth = self2.table.element.clientWidth, fixedWidth = 0;
    if (self2.rowManager.element.scrollHeight > self2.rowManager.element.clientHeight) {
      totalWidth -= self2.rowManager.element.offsetWidth - self2.rowManager.element.clientWidth;
    }
    this.columnsByIndex.forEach(function(column2) {
      var width, minWidth, colWidth;
      if (column2.visible) {
        width = column2.definition.width || 0;
        minWidth = typeof column2.minWidth == "undefined" ? self2.table.options.columnMinWidth : parseInt(column2.minWidth);
        if (typeof width == "string") {
          if (width.indexOf("%") > -1) {
            colWidth = totalWidth / 100 * parseInt(width);
          } else {
            colWidth = parseInt(width);
          }
        } else {
          colWidth = width;
        }
        fixedWidth += colWidth > minWidth ? colWidth : minWidth;
      }
    });
    return fixedWidth;
  };
  ColumnManager.prototype.addColumn = function(definition2, before, nextToColumn) {
    var _this4 = this;
    return new Promise(function(resolve, reject) {
      var column2 = _this4._addColumn(definition2, before, nextToColumn);
      _this4._reIndexColumns();
      if (_this4.table.options.responsiveLayout && _this4.table.modExists("responsiveLayout", true)) {
        _this4.table.modules.responsiveLayout.initialize();
      }
      if (_this4.table.modExists("columnCalcs")) {
        _this4.table.modules.columnCalcs.recalc(_this4.table.rowManager.activeRows);
      }
      _this4.redraw(true);
      if (_this4.table.modules.layout.getMode() != "fitColumns") {
        column2.reinitializeWidth();
      }
      _this4._verticalAlignHeaders();
      _this4.table.rowManager.reinitialize();
      if (_this4.table.options.virtualDomHoz) {
        _this4.table.vdomHoz.reinitialize();
      }
      resolve(column2);
    });
  };
  ColumnManager.prototype.deregisterColumn = function(column2) {
    var field = column2.getField(), index;
    if (field) {
      delete this.columnsByField[field];
    }
    index = this.columnsByIndex.indexOf(column2);
    if (index > -1) {
      this.columnsByIndex.splice(index, 1);
    }
    index = this.columns.indexOf(column2);
    if (index > -1) {
      this.columns.splice(index, 1);
    }
    if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
      this.table.modules.responsiveLayout.initialize();
    }
    this._verticalAlignHeaders();
    this.redraw();
  };
  ColumnManager.prototype.redraw = function(force) {
    if (force) {
      if (Tabulator.prototype.helpers.elVisible(this.element)) {
        this._verticalAlignHeaders();
      }
      this.table.rowManager.resetScroll();
      this.table.rowManager.reinitialize();
    }
    if (["fitColumns", "fitDataStretch"].indexOf(this.table.modules.layout.getMode()) > -1) {
      this.table.modules.layout.layout();
    } else {
      if (force) {
        this.table.modules.layout.layout();
      } else {
        if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
          this.table.modules.responsiveLayout.update();
        }
      }
    }
    if (this.table.modExists("frozenColumns")) {
      this.table.modules.frozenColumns.layout();
    }
    if (this.table.modExists("columnCalcs")) {
      this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
    }
    if (force) {
      if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {
        this.table.modules.persistence.save("columns");
      }
      if (this.table.modExists("columnCalcs")) {
        this.table.modules.columnCalcs.redraw();
      }
    }
    this.table.footerManager.redraw();
  };
  var ColumnComponent = function ColumnComponent2(column2) {
    this._column = column2;
    this.type = "ColumnComponent";
  };
  ColumnComponent.prototype.getElement = function() {
    return this._column.getElement();
  };
  ColumnComponent.prototype.getDefinition = function() {
    return this._column.getDefinition();
  };
  ColumnComponent.prototype.getField = function() {
    return this._column.getField();
  };
  ColumnComponent.prototype.getCells = function() {
    var cells = [];
    this._column.cells.forEach(function(cell) {
      cells.push(cell.getComponent());
    });
    return cells;
  };
  ColumnComponent.prototype.getVisibility = function() {
    console.warn("getVisibility function is deprecated, you should now use the isVisible function");
    return this._column.visible;
  };
  ColumnComponent.prototype.isVisible = function() {
    return this._column.visible;
  };
  ColumnComponent.prototype.show = function() {
    if (this._column.isGroup) {
      this._column.columns.forEach(function(column2) {
        column2.show();
      });
    } else {
      this._column.show();
    }
  };
  ColumnComponent.prototype.hide = function() {
    if (this._column.isGroup) {
      this._column.columns.forEach(function(column2) {
        column2.hide();
      });
    } else {
      this._column.hide();
    }
  };
  ColumnComponent.prototype.toggle = function() {
    if (this._column.visible) {
      this.hide();
    } else {
      this.show();
    }
  };
  ColumnComponent.prototype.delete = function() {
    return this._column.delete();
  };
  ColumnComponent.prototype.getSubColumns = function() {
    var output = [];
    if (this._column.columns.length) {
      this._column.columns.forEach(function(column2) {
        output.push(column2.getComponent());
      });
    }
    return output;
  };
  ColumnComponent.prototype.getParentColumn = function() {
    return this._column.parent instanceof Column ? this._column.parent.getComponent() : false;
  };
  ColumnComponent.prototype._getSelf = function() {
    return this._column;
  };
  ColumnComponent.prototype.scrollTo = function() {
    return this._column.table.columnManager.scrollToColumn(this._column);
  };
  ColumnComponent.prototype.getTable = function() {
    return this._column.table;
  };
  ColumnComponent.prototype.headerFilterFocus = function() {
    if (this._column.table.modExists("filter", true)) {
      this._column.table.modules.filter.setHeaderFilterFocus(this._column);
    }
  };
  ColumnComponent.prototype.reloadHeaderFilter = function() {
    if (this._column.table.modExists("filter", true)) {
      this._column.table.modules.filter.reloadHeaderFilter(this._column);
    }
  };
  ColumnComponent.prototype.getHeaderFilterValue = function() {
    if (this._column.table.modExists("filter", true)) {
      return this._column.table.modules.filter.getHeaderFilterValue(this._column);
    }
  };
  ColumnComponent.prototype.setHeaderFilterValue = function(value) {
    if (this._column.table.modExists("filter", true)) {
      this._column.table.modules.filter.setHeaderFilterValue(this._column, value);
    }
  };
  ColumnComponent.prototype.move = function(to, after) {
    var toColumn = this._column.table.columnManager.findColumn(to);
    if (toColumn) {
      this._column.table.columnManager.moveColumn(this._column, toColumn, after);
    } else {
      console.warn("Move Error - No matching column found:", toColumn);
    }
  };
  ColumnComponent.prototype.getNextColumn = function() {
    var nextCol = this._column.nextColumn();
    return nextCol ? nextCol.getComponent() : false;
  };
  ColumnComponent.prototype.getPrevColumn = function() {
    var prevCol = this._column.prevColumn();
    return prevCol ? prevCol.getComponent() : false;
  };
  ColumnComponent.prototype.updateDefinition = function(updates) {
    return this._column.updateDefinition(updates);
  };
  ColumnComponent.prototype.getWidth = function() {
    return this._column.getWidth();
  };
  ColumnComponent.prototype.setWidth = function(width) {
    var result;
    if (width === true) {
      result = this._column.reinitializeWidth(true);
    } else {
      result = this._column.setWidth(width);
    }
    if (this._column.table.options.virtualDomHoz) {
      this._column.table.vdomHoz.reinitialize(true);
    }
    return result;
  };
  ColumnComponent.prototype.validate = function() {
    return this._column.validate();
  };
  var Column = function Column2(def, parent) {
    var self2 = this;
    this.table = parent.table;
    this.definition = def;
    this.parent = parent;
    this.type = "column";
    this.columns = [];
    this.cells = [];
    this.element = this.createElement();
    this.contentElement = false;
    this.titleHolderElement = false;
    this.titleElement = false;
    this.groupElement = this.createGroupElement();
    this.isGroup = false;
    this.tooltip = false;
    this.hozAlign = "";
    this.vertAlign = "";
    this.field = "";
    this.fieldStructure = "";
    this.getFieldValue = "";
    this.setFieldValue = "";
    this.titleFormatterRendered = false;
    this.setField(this.definition.field);
    if (this.table.options.invalidOptionWarnings) {
      this.checkDefinition();
    }
    this.modules = {};
    this.cellEvents = {
      cellClick: false,
      cellDblClick: false,
      cellContext: false,
      cellTap: false,
      cellDblTap: false,
      cellTapHold: false,
      cellMouseEnter: false,
      cellMouseLeave: false,
      cellMouseOver: false,
      cellMouseOut: false,
      cellMouseMove: false
    };
    this.width = null;
    this.widthStyled = "";
    this.maxWidth = null;
    this.maxWidthStyled = "";
    this.minWidth = null;
    this.minWidthStyled = "";
    this.widthFixed = false;
    this.visible = true;
    this.component = null;
    this._mapDepricatedFunctionality();
    if (def.columns) {
      this.isGroup = true;
      def.columns.forEach(function(def2, i2) {
        var newCol = new Column2(def2, self2);
        self2.attachColumn(newCol);
      });
      self2.checkColumnVisibility();
    } else {
      parent.registerColumnField(this);
    }
    if (def.rowHandle && this.table.options.movableRows !== false && this.table.modExists("moveRow")) {
      this.table.modules.moveRow.setHandle(true);
    }
    this._buildHeader();
    this.bindModuleColumns();
  };
  Column.prototype.createElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-col");
    el.setAttribute("role", "columnheader");
    el.setAttribute("aria-sort", "none");
    return el;
  };
  Column.prototype.createGroupElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-col-group-cols");
    return el;
  };
  Column.prototype.checkDefinition = function() {
    var _this5 = this;
    Object.keys(this.definition).forEach(function(key) {
      if (_this5.defaultOptionList.indexOf(key) === -1) {
        console.warn("Invalid column definition option in '" + (_this5.field || _this5.definition.title) + "' column:", key);
      }
    });
  };
  Column.prototype.setField = function(field) {
    this.field = field;
    this.fieldStructure = field ? this.table.options.nestedFieldSeparator ? field.split(this.table.options.nestedFieldSeparator) : [field] : [];
    this.getFieldValue = this.fieldStructure.length > 1 ? this._getNestedData : this._getFlatData;
    this.setFieldValue = this.fieldStructure.length > 1 ? this._setNestedData : this._setFlatData;
  };
  Column.prototype.registerColumnPosition = function(column2) {
    this.parent.registerColumnPosition(column2);
  };
  Column.prototype.registerColumnField = function(column2) {
    this.parent.registerColumnField(column2);
  };
  Column.prototype.reRegisterPosition = function() {
    if (this.isGroup) {
      this.columns.forEach(function(column2) {
        column2.reRegisterPosition();
      });
    } else {
      this.registerColumnPosition(this);
    }
  };
  Column.prototype._mapDepricatedFunctionality = function() {
    if (typeof this.definition.hideInHtml !== "undefined") {
      this.definition.htmlOutput = !this.definition.hideInHtml;
      console.warn("hideInHtml column definition property is deprecated, you should now use htmlOutput");
    }
    if (typeof this.definition.align !== "undefined") {
      this.definition.hozAlign = this.definition.align;
      console.warn("align column definition property is deprecated, you should now use hozAlign");
    }
    if (typeof this.definition.downloadTitle !== "undefined") {
      this.definition.titleDownload = this.definition.downloadTitle;
      console.warn("downloadTitle definition property is deprecated, you should now use titleDownload");
    }
  };
  Column.prototype.setTooltip = function() {
    var self2 = this, def = self2.definition;
    var tooltip = def.headerTooltip || def.tooltip === false ? def.headerTooltip : self2.table.options.tooltipsHeader;
    if (tooltip) {
      if (tooltip === true) {
        if (def.field) {
          self2.table.modules.localize.bind("columns|" + def.field, function(value) {
            self2.element.setAttribute("title", value || def.title);
          });
        } else {
          self2.element.setAttribute("title", def.title);
        }
      } else {
        if (typeof tooltip == "function") {
          tooltip = tooltip(self2.getComponent());
          if (tooltip === false) {
            tooltip = "";
          }
        }
        self2.element.setAttribute("title", tooltip);
      }
    } else {
      self2.element.setAttribute("title", "");
    }
  };
  Column.prototype._buildHeader = function() {
    var self2 = this, def = self2.definition;
    while (self2.element.firstChild) {
      self2.element.removeChild(self2.element.firstChild);
    }
    if (def.headerVertical) {
      self2.element.classList.add("tabulator-col-vertical");
      if (def.headerVertical === "flip") {
        self2.element.classList.add("tabulator-col-vertical-flip");
      }
    }
    self2.contentElement = self2._bindEvents();
    self2.contentElement = self2._buildColumnHeaderContent();
    self2.element.appendChild(self2.contentElement);
    if (self2.isGroup) {
      self2._buildGroupHeader();
    } else {
      self2._buildColumnHeader();
    }
    self2.setTooltip();
    if (self2.table.options.resizableColumns && self2.table.modExists("resizeColumns")) {
      self2.table.modules.resizeColumns.initializeColumn("header", self2, self2.element);
    }
    if (def.headerFilter && self2.table.modExists("filter") && self2.table.modExists("edit")) {
      if (typeof def.headerFilterPlaceholder !== "undefined" && def.field) {
        self2.table.modules.localize.setHeaderFilterColumnPlaceholder(def.field, def.headerFilterPlaceholder);
      }
      self2.table.modules.filter.initializeColumn(self2);
    }
    if (self2.table.modExists("frozenColumns")) {
      self2.table.modules.frozenColumns.initializeColumn(self2);
    }
    if (self2.table.options.movableColumns && !self2.isGroup && self2.table.modExists("moveColumn")) {
      self2.table.modules.moveColumn.initializeColumn(self2);
    }
    if ((def.topCalc || def.bottomCalc) && self2.table.modExists("columnCalcs")) {
      self2.table.modules.columnCalcs.initializeColumn(self2);
    }
    if (self2.table.modExists("persistence") && self2.table.modules.persistence.config.columns) {
      self2.table.modules.persistence.initializeColumn(self2);
    }
    self2.element.addEventListener("mouseenter", function(e2) {
      self2.setTooltip();
    });
  };
  Column.prototype._bindEvents = function() {
    var self2 = this, def = self2.definition, dblTap, tapHold, tap;
    if (typeof def.headerClick == "function") {
      self2.element.addEventListener("click", function(e2) {
        def.headerClick(e2, self2.getComponent());
      });
    }
    if (typeof def.headerDblClick == "function") {
      self2.element.addEventListener("dblclick", function(e2) {
        def.headerDblClick(e2, self2.getComponent());
      });
    }
    if (typeof def.headerContext == "function") {
      self2.element.addEventListener("contextmenu", function(e2) {
        def.headerContext(e2, self2.getComponent());
      });
    }
    if (typeof def.headerTap == "function") {
      tap = false;
      self2.element.addEventListener("touchstart", function(e2) {
        tap = true;
      }, { passive: true });
      self2.element.addEventListener("touchend", function(e2) {
        if (tap) {
          def.headerTap(e2, self2.getComponent());
        }
        tap = false;
      });
    }
    if (typeof def.headerDblTap == "function") {
      dblTap = null;
      self2.element.addEventListener("touchend", function(e2) {
        if (dblTap) {
          clearTimeout(dblTap);
          dblTap = null;
          def.headerDblTap(e2, self2.getComponent());
        } else {
          dblTap = setTimeout(function() {
            clearTimeout(dblTap);
            dblTap = null;
          }, 300);
        }
      });
    }
    if (typeof def.headerTapHold == "function") {
      tapHold = null;
      self2.element.addEventListener("touchstart", function(e2) {
        clearTimeout(tapHold);
        tapHold = setTimeout(function() {
          clearTimeout(tapHold);
          tapHold = null;
          tap = false;
          def.headerTapHold(e2, self2.getComponent());
        }, 1e3);
      }, { passive: true });
      self2.element.addEventListener("touchend", function(e2) {
        clearTimeout(tapHold);
        tapHold = null;
      });
    }
    if (typeof def.cellClick == "function") {
      self2.cellEvents.cellClick = def.cellClick;
    }
    if (typeof def.cellDblClick == "function") {
      self2.cellEvents.cellDblClick = def.cellDblClick;
    }
    if (typeof def.cellContext == "function") {
      self2.cellEvents.cellContext = def.cellContext;
    }
    if (typeof def.cellMouseEnter == "function") {
      self2.cellEvents.cellMouseEnter = def.cellMouseEnter;
    }
    if (typeof def.cellMouseLeave == "function") {
      self2.cellEvents.cellMouseLeave = def.cellMouseLeave;
    }
    if (typeof def.cellMouseOver == "function") {
      self2.cellEvents.cellMouseOver = def.cellMouseOver;
    }
    if (typeof def.cellMouseOut == "function") {
      self2.cellEvents.cellMouseOut = def.cellMouseOut;
    }
    if (typeof def.cellMouseMove == "function") {
      self2.cellEvents.cellMouseMove = def.cellMouseMove;
    }
    if (typeof def.cellTap == "function") {
      self2.cellEvents.cellTap = def.cellTap;
    }
    if (typeof def.cellDblTap == "function") {
      self2.cellEvents.cellDblTap = def.cellDblTap;
    }
    if (typeof def.cellTapHold == "function") {
      self2.cellEvents.cellTapHold = def.cellTapHold;
    }
    if (typeof def.cellEdited == "function") {
      self2.cellEvents.cellEdited = def.cellEdited;
    }
    if (typeof def.cellEditing == "function") {
      self2.cellEvents.cellEditing = def.cellEditing;
    }
    if (typeof def.cellEditCancelled == "function") {
      self2.cellEvents.cellEditCancelled = def.cellEditCancelled;
    }
  };
  Column.prototype._buildColumnHeader = function() {
    var _this6 = this;
    var def = this.definition, table4 = this.table, sortable;
    if (table4.modExists("sort")) {
      table4.modules.sort.initializeColumn(this, this.titleHolderElement);
    }
    if ((def.headerContextMenu || def.headerClickMenu || def.headerMenu) && table4.modExists("menu")) {
      table4.modules.menu.initializeColumnHeader(this);
    }
    if (table4.modExists("format")) {
      table4.modules.format.initializeColumn(this);
    }
    if (typeof def.editor != "undefined" && table4.modExists("edit")) {
      table4.modules.edit.initializeColumn(this);
    }
    if (typeof def.validator != "undefined" && table4.modExists("validate")) {
      table4.modules.validate.initializeColumn(this);
    }
    if (table4.modExists("mutator")) {
      table4.modules.mutator.initializeColumn(this);
    }
    if (table4.modExists("accessor")) {
      table4.modules.accessor.initializeColumn(this);
    }
    if (_typeof(table4.options.responsiveLayout) && table4.modExists("responsiveLayout")) {
      table4.modules.responsiveLayout.initializeColumn(this);
    }
    if (typeof def.visible != "undefined") {
      if (def.visible) {
        this.show(true);
      } else {
        this.hide(true);
      }
    }
    if (def.cssClass) {
      var classeNames = def.cssClass.split(" ");
      classeNames.forEach(function(className) {
        _this6.element.classList.add(className);
      });
    }
    if (def.field) {
      this.element.setAttribute("tabulator-field", def.field);
    }
    this.setMinWidth(typeof def.minWidth == "undefined" ? this.table.options.columnMinWidth : parseInt(def.minWidth));
    if (def.maxWidth || this.table.options.columnMaxWidth) {
      if (def.maxWidth !== false) {
        this.setMaxWidth(typeof def.maxWidth == "undefined" ? this.table.options.columnMaxWidth : parseInt(def.maxWidth));
      }
    }
    this.reinitializeWidth();
    this.tooltip = this.definition.tooltip || this.definition.tooltip === false ? this.definition.tooltip : this.table.options.tooltips;
    this.hozAlign = typeof this.definition.hozAlign == "undefined" ? this.table.options.cellHozAlign : this.definition.hozAlign;
    this.vertAlign = typeof this.definition.vertAlign == "undefined" ? this.table.options.cellVertAlign : this.definition.vertAlign;
    this.titleElement.style.textAlign = this.definition.headerHozAlign || this.table.options.headerHozAlign;
  };
  Column.prototype._buildColumnHeaderContent = function() {
    var def = this.definition, table4 = this.table;
    var contentElement = document.createElement("div");
    contentElement.classList.add("tabulator-col-content");
    this.titleHolderElement = document.createElement("div");
    this.titleHolderElement.classList.add("tabulator-col-title-holder");
    contentElement.appendChild(this.titleHolderElement);
    this.titleElement = this._buildColumnHeaderTitle();
    this.titleHolderElement.appendChild(this.titleElement);
    return contentElement;
  };
  Column.prototype._buildColumnHeaderTitle = function() {
    var self2 = this, def = self2.definition, table4 = self2.table, title;
    var titleHolderElement = document.createElement("div");
    titleHolderElement.classList.add("tabulator-col-title");
    if (def.editableTitle) {
      var titleElement = document.createElement("input");
      titleElement.classList.add("tabulator-title-editor");
      titleElement.addEventListener("click", function(e2) {
        e2.stopPropagation();
        titleElement.focus();
      });
      titleElement.addEventListener("change", function() {
        def.title = titleElement.value;
        table4.options.columnTitleChanged.call(self2.table, self2.getComponent());
      });
      titleHolderElement.appendChild(titleElement);
      if (def.field) {
        table4.modules.localize.bind("columns|" + def.field, function(text) {
          titleElement.value = text || def.title || "&nbsp;";
        });
      } else {
        titleElement.value = def.title || "&nbsp;";
      }
    } else {
      if (def.field) {
        table4.modules.localize.bind("columns|" + def.field, function(text) {
          self2._formatColumnHeaderTitle(titleHolderElement, text || def.title || "&nbsp;");
        });
      } else {
        self2._formatColumnHeaderTitle(titleHolderElement, def.title || "&nbsp;");
      }
    }
    return titleHolderElement;
  };
  Column.prototype._formatColumnHeaderTitle = function(el, title) {
    var _this7 = this;
    var formatter, contents, params, mockCell, onRendered;
    if (this.definition.titleFormatter && this.table.modExists("format")) {
      formatter = this.table.modules.format.getFormatter(this.definition.titleFormatter);
      onRendered = function onRendered2(callback) {
        _this7.titleFormatterRendered = callback;
      };
      mockCell = {
        getValue: function getValue() {
          return title;
        },
        getElement: function getElement() {
          return el;
        }
      };
      params = this.definition.titleFormatterParams || {};
      params = typeof params === "function" ? params() : params;
      contents = formatter.call(this.table.modules.format, mockCell, params, onRendered);
      switch (typeof contents === "undefined" ? "undefined" : _typeof(contents)) {
        case "object":
          if (contents instanceof Node) {
            el.appendChild(contents);
          } else {
            el.innerHTML = "";
            console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", contents);
          }
          break;
        case "undefined":
        case "null":
          el.innerHTML = "";
          break;
        default:
          el.innerHTML = contents;
      }
    } else {
      el.innerHTML = title;
    }
  };
  Column.prototype._buildGroupHeader = function() {
    var _this8 = this;
    this.element.classList.add("tabulator-col-group");
    this.element.setAttribute("role", "columngroup");
    this.element.setAttribute("aria-title", this.definition.title);
    if (this.definition.cssClass) {
      var classeNames = this.definition.cssClass.split(" ");
      classeNames.forEach(function(className) {
        _this8.element.classList.add(className);
      });
    }
    if ((this.definition.headerContextMenu || this.definition.headerMenu) && this.table.modExists("menu")) {
      this.table.modules.menu.initializeColumnHeader(this);
    }
    this.titleElement.style.textAlign = this.definition.headerHozAlign || this.table.options.headerHozAlign;
    this.element.appendChild(this.groupElement);
  };
  Column.prototype._getFlatData = function(data) {
    return data[this.field];
  };
  Column.prototype._getNestedData = function(data) {
    var dataObj = data, structure = this.fieldStructure, length = structure.length, output;
    for (var _i = 0; _i < length; _i++) {
      dataObj = dataObj[structure[_i]];
      output = dataObj;
      if (!dataObj) {
        break;
      }
    }
    return output;
  };
  Column.prototype._setFlatData = function(data, value) {
    if (this.field) {
      data[this.field] = value;
    }
  };
  Column.prototype._setNestedData = function(data, value) {
    var dataObj = data, structure = this.fieldStructure, length = structure.length;
    for (var _i2 = 0; _i2 < length; _i2++) {
      if (_i2 == length - 1) {
        dataObj[structure[_i2]] = value;
      } else {
        if (!dataObj[structure[_i2]]) {
          if (typeof value !== "undefined") {
            dataObj[structure[_i2]] = {};
          } else {
            break;
          }
        }
        dataObj = dataObj[structure[_i2]];
      }
    }
  };
  Column.prototype.attachColumn = function(column2) {
    var self2 = this;
    if (self2.groupElement) {
      self2.columns.push(column2);
      self2.groupElement.appendChild(column2.getElement());
    } else {
      console.warn("Column Warning - Column being attached to another column instead of column group");
    }
  };
  Column.prototype.verticalAlign = function(alignment, height) {
    var parentHeight = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : height || this.parent.getHeadersElement().clientHeight;
    this.element.style.height = parentHeight + "px";
    if (this.isGroup) {
      this.groupElement.style.minHeight = parentHeight - this.contentElement.offsetHeight + "px";
    }
    if (!this.isGroup && alignment !== "top") {
      if (alignment === "bottom") {
        this.element.style.paddingTop = this.element.clientHeight - this.contentElement.offsetHeight + "px";
      } else {
        this.element.style.paddingTop = (this.element.clientHeight - this.contentElement.offsetHeight) / 2 + "px";
      }
    }
    this.columns.forEach(function(column2) {
      column2.verticalAlign(alignment);
    });
  };
  Column.prototype.clearVerticalAlign = function() {
    this.element.style.paddingTop = "";
    this.element.style.height = "";
    this.element.style.minHeight = "";
    this.groupElement.style.minHeight = "";
    this.columns.forEach(function(column2) {
      column2.clearVerticalAlign();
    });
  };
  Column.prototype.bindModuleColumns = function() {
    if (this.definition.formatter == "rownum") {
      this.table.rowManager.rowNumColumn = this;
    }
  };
  Column.prototype.getElement = function() {
    return this.element;
  };
  Column.prototype.getGroupElement = function() {
    return this.groupElement;
  };
  Column.prototype.getField = function() {
    return this.field;
  };
  Column.prototype.getFirstColumn = function() {
    if (!this.isGroup) {
      return this;
    } else {
      if (this.columns.length) {
        return this.columns[0].getFirstColumn();
      } else {
        return false;
      }
    }
  };
  Column.prototype.getLastColumn = function() {
    if (!this.isGroup) {
      return this;
    } else {
      if (this.columns.length) {
        return this.columns[this.columns.length - 1].getLastColumn();
      } else {
        return false;
      }
    }
  };
  Column.prototype.getColumns = function() {
    return this.columns;
  };
  Column.prototype.getCells = function() {
    return this.cells;
  };
  Column.prototype.getTopColumn = function() {
    if (this.parent.isGroup) {
      return this.parent.getTopColumn();
    } else {
      return this;
    }
  };
  Column.prototype.getDefinition = function(updateBranches) {
    var colDefs = [];
    if (this.isGroup && updateBranches) {
      this.columns.forEach(function(column2) {
        colDefs.push(column2.getDefinition(true));
      });
      this.definition.columns = colDefs;
    }
    return this.definition;
  };
  Column.prototype.checkColumnVisibility = function() {
    var visible2 = false;
    this.columns.forEach(function(column2) {
      if (column2.visible) {
        visible2 = true;
      }
    });
    if (visible2) {
      this.show();
      this.parent.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), false);
    } else {
      this.hide();
    }
  };
  Column.prototype.show = function(silent, responsiveToggle) {
    if (!this.visible) {
      this.visible = true;
      this.element.style.display = "";
      if (this.parent.isGroup) {
        this.parent.checkColumnVisibility();
      }
      this.cells.forEach(function(cell) {
        cell.show();
      });
      if (!this.isGroup && this.width === null) {
        this.reinitializeWidth();
      }
      this.table.columnManager._verticalAlignHeaders();
      if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {
        this.table.modules.persistence.save("columns");
      }
      if (!responsiveToggle && this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
        this.table.modules.responsiveLayout.updateColumnVisibility(this, this.visible);
      }
      if (!silent) {
        this.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), true);
      }
      if (this.parent.isGroup) {
        this.parent.matchChildWidths();
      }
      if (!this.silent && this.table.options.virtualDomHoz) {
        this.table.vdomHoz.reinitialize();
      }
    }
  };
  Column.prototype.hide = function(silent, responsiveToggle) {
    if (this.visible) {
      this.visible = false;
      this.element.style.display = "none";
      this.table.columnManager._verticalAlignHeaders();
      if (this.parent.isGroup) {
        this.parent.checkColumnVisibility();
      }
      this.cells.forEach(function(cell) {
        cell.hide();
      });
      if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {
        this.table.modules.persistence.save("columns");
      }
      if (!responsiveToggle && this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
        this.table.modules.responsiveLayout.updateColumnVisibility(this, this.visible);
      }
      if (!silent) {
        this.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), false);
      }
      if (this.parent.isGroup) {
        this.parent.matchChildWidths();
      }
      if (!this.silent && this.table.options.virtualDomHoz) {
        this.table.vdomHoz.reinitialize();
      }
    }
  };
  Column.prototype.matchChildWidths = function() {
    var childWidth = 0;
    if (this.contentElement && this.columns.length) {
      this.columns.forEach(function(column2) {
        if (column2.visible) {
          childWidth += column2.getWidth();
        }
      });
      this.contentElement.style.maxWidth = childWidth - 1 + "px";
      if (this.parent.isGroup) {
        this.parent.matchChildWidths();
      }
    }
  };
  Column.prototype.removeChild = function(child) {
    var index = this.columns.indexOf(child);
    if (index > -1) {
      this.columns.splice(index, 1);
    }
    if (!this.columns.length) {
      this.delete();
    }
  };
  Column.prototype.setWidth = function(width) {
    this.widthFixed = true;
    this.setWidthActual(width);
  };
  Column.prototype.setWidthActual = function(width) {
    if (isNaN(width)) {
      width = Math.floor(this.table.element.clientWidth / 100 * parseInt(width));
    }
    width = Math.max(this.minWidth, width);
    if (this.maxWidth) {
      width = Math.min(this.maxWidth, width);
    }
    this.width = width;
    this.widthStyled = width ? width + "px" : "";
    this.element.style.width = this.widthStyled;
    if (!this.isGroup) {
      this.cells.forEach(function(cell) {
        cell.setWidth();
      });
    }
    if (this.parent.isGroup) {
      this.parent.matchChildWidths();
    }
    if (this.table.modExists("frozenColumns")) {
      this.table.modules.frozenColumns.layout();
    }
  };
  Column.prototype.checkCellHeights = function() {
    var rows = [];
    this.cells.forEach(function(cell) {
      if (cell.row.heightInitialized) {
        if (cell.row.getElement().offsetParent !== null) {
          rows.push(cell.row);
          cell.row.clearCellHeight();
        } else {
          cell.row.heightInitialized = false;
        }
      }
    });
    rows.forEach(function(row2) {
      row2.calcHeight();
    });
    rows.forEach(function(row2) {
      row2.setCellHeight();
    });
  };
  Column.prototype.getWidth = function() {
    var width = 0;
    if (this.isGroup) {
      this.columns.forEach(function(column2) {
        if (column2.visible) {
          width += column2.getWidth();
        }
      });
    } else {
      width = this.width;
    }
    return width;
  };
  Column.prototype.getHeight = function() {
    return this.element.offsetHeight;
  };
  Column.prototype.setMinWidth = function(minWidth) {
    this.minWidth = minWidth;
    this.minWidthStyled = minWidth ? minWidth + "px" : "";
    this.element.style.minWidth = this.minWidthStyled;
    this.cells.forEach(function(cell) {
      cell.setMinWidth();
    });
  };
  Column.prototype.setMaxWidth = function(maxWidth) {
    this.maxWidth = maxWidth;
    this.maxWidthStyled = maxWidth ? maxWidth + "px" : "";
    this.element.style.maxWidth = this.maxWidthStyled;
    this.cells.forEach(function(cell) {
      cell.setMaxWidth();
    });
  };
  Column.prototype.delete = function() {
    var _this9 = this;
    return new Promise(function(resolve, reject) {
      var index;
      if (_this9.isGroup) {
        _this9.columns.forEach(function(column2) {
          column2.delete();
        });
      }
      if (_this9.table.modExists("edit")) {
        if (_this9.table.modules.edit.currentCell.column === _this9) {
          _this9.table.modules.edit.cancelEdit();
        }
      }
      var cellCount = _this9.cells.length;
      for (var _i3 = 0; _i3 < cellCount; _i3++) {
        _this9.cells[0].delete();
      }
      if (_this9.element.parentNode) {
        _this9.element.parentNode.removeChild(_this9.element);
      }
      _this9.element = false;
      _this9.contentElement = false;
      _this9.titleElement = false;
      _this9.groupElement = false;
      if (_this9.parent.isGroup) {
        _this9.parent.removeChild(_this9);
      }
      _this9.table.columnManager.deregisterColumn(_this9);
      if (_this9.table.options.virtualDomHoz) {
        _this9.table.vdomHoz.reinitialize(true);
      }
      resolve();
    });
  };
  Column.prototype.columnRendered = function() {
    if (this.titleFormatterRendered) {
      this.titleFormatterRendered();
    }
  };
  Column.prototype.validate = function() {
    var invalid = [];
    this.cells.forEach(function(cell) {
      if (!cell.validate()) {
        invalid.push(cell.getComponent());
      }
    });
    return invalid.length ? invalid : true;
  };
  Column.prototype.generateCell = function(row2) {
    var self2 = this;
    var cell = new Cell(self2, row2);
    this.cells.push(cell);
    return cell;
  };
  Column.prototype.nextColumn = function() {
    var index = this.table.columnManager.findColumnIndex(this);
    return index > -1 ? this._nextVisibleColumn(index + 1) : false;
  };
  Column.prototype._nextVisibleColumn = function(index) {
    var column2 = this.table.columnManager.getColumnByIndex(index);
    return !column2 || column2.visible ? column2 : this._nextVisibleColumn(index + 1);
  };
  Column.prototype.prevColumn = function() {
    var index = this.table.columnManager.findColumnIndex(this);
    return index > -1 ? this._prevVisibleColumn(index - 1) : false;
  };
  Column.prototype._prevVisibleColumn = function(index) {
    var column2 = this.table.columnManager.getColumnByIndex(index);
    return !column2 || column2.visible ? column2 : this._prevVisibleColumn(index - 1);
  };
  Column.prototype.reinitializeWidth = function(force) {
    this.widthFixed = false;
    if (typeof this.definition.width !== "undefined" && !force) {
      this.setWidth(this.definition.width);
    }
    if (this.table.modExists("filter")) {
      this.table.modules.filter.hideHeaderFilterElements();
    }
    this.fitToData();
    if (this.table.modExists("filter")) {
      this.table.modules.filter.showHeaderFilterElements();
    }
  };
  Column.prototype.fitToData = function() {
    var self2 = this;
    if (!this.widthFixed) {
      this.element.style.width = "";
      self2.cells.forEach(function(cell) {
        cell.clearWidth();
      });
    }
    var maxWidth = this.element.offsetWidth;
    if (!self2.width || !this.widthFixed) {
      self2.cells.forEach(function(cell) {
        var width = cell.getWidth();
        if (width > maxWidth) {
          maxWidth = width;
        }
      });
      if (maxWidth) {
        self2.setWidthActual(maxWidth + 1);
      }
    }
  };
  Column.prototype.updateDefinition = function(updates) {
    var _this10 = this;
    return new Promise(function(resolve, reject) {
      var definition2;
      if (!_this10.isGroup) {
        if (!_this10.parent.isGroup) {
          definition2 = Object.assign({}, _this10.getDefinition());
          definition2 = Object.assign(definition2, updates);
          _this10.table.columnManager.addColumn(definition2, false, _this10).then(function(column2) {
            if (definition2.field == _this10.field) {
              _this10.field = false;
            }
            _this10.delete().then(function() {
              resolve(column2.getComponent());
            }).catch(function(err) {
              reject(err);
            });
          }).catch(function(err) {
            reject(err);
          });
        } else {
          console.warn("Column Update Error - The updateDefinition function is only available on ungrouped columns");
          reject("Column Update Error - The updateDefinition function is only available on columns, not column groups");
        }
      } else {
        console.warn("Column Update Error - The updateDefinition function is only available on ungrouped columns");
        reject("Column Update Error - The updateDefinition function is only available on columns, not column groups");
      }
    });
  };
  Column.prototype.deleteCell = function(cell) {
    var index = this.cells.indexOf(cell);
    if (index > -1) {
      this.cells.splice(index, 1);
    }
  };
  Column.prototype.defaultOptionList = [
    "title",
    "field",
    "columns",
    "visible",
    "align",
    "hozAlign",
    "vertAlign",
    "width",
    "minWidth",
    "maxWidth",
    "widthGrow",
    "widthShrink",
    "resizable",
    "frozen",
    "responsive",
    "tooltip",
    "cssClass",
    "rowHandle",
    "hideInHtml",
    "print",
    "htmlOutput",
    "sorter",
    "sorterParams",
    "formatter",
    "formatterParams",
    "variableHeight",
    "editable",
    "editor",
    "editorParams",
    "validator",
    "mutator",
    "mutatorParams",
    "mutatorData",
    "mutatorDataParams",
    "mutatorEdit",
    "mutatorEditParams",
    "mutatorClipboard",
    "mutatorClipboardParams",
    "accessor",
    "accessorParams",
    "accessorData",
    "accessorDataParams",
    "accessorDownload",
    "accessorDownloadParams",
    "accessorClipboard",
    "accessorClipboardParams",
    "accessorPrint",
    "accessorPrintParams",
    "accessorHtmlOutput",
    "accessorHtmlOutputParams",
    "clipboard",
    "download",
    "downloadTitle",
    "topCalc",
    "topCalcParams",
    "topCalcFormatter",
    "topCalcFormatterParams",
    "bottomCalc",
    "bottomCalcParams",
    "bottomCalcFormatter",
    "bottomCalcFormatterParams",
    "cellClick",
    "cellDblClick",
    "cellContext",
    "cellTap",
    "cellDblTap",
    "cellTapHold",
    "cellMouseEnter",
    "cellMouseLeave",
    "cellMouseOver",
    "cellMouseOut",
    "cellMouseMove",
    "cellEditing",
    "cellEdited",
    "cellEditCancelled",
    "headerSort",
    "headerSortStartingDir",
    "headerSortTristate",
    "headerClick",
    "headerDblClick",
    "headerContext",
    "headerTap",
    "headerDblTap",
    "headerTapHold",
    "headerTooltip",
    "headerVertical",
    "headerHozAlign",
    "editableTitle",
    "titleFormatter",
    "titleFormatterParams",
    "headerFilter",
    "headerFilterPlaceholder",
    "headerFilterParams",
    "headerFilterEmptyCheck",
    "headerFilterFunc",
    "headerFilterFuncParams",
    "headerFilterLiveFilter",
    "print",
    "headerContextMenu",
    "headerMenu",
    "contextMenu",
    "clickMenu",
    "formatterPrint",
    "formatterPrintParams",
    "formatterClipboard",
    "formatterClipboardParams",
    "formatterHtmlOutput",
    "formatterHtmlOutputParams",
    "titlePrint",
    "titleClipboard",
    "titleHtmlOutput",
    "titleDownload"
  ];
  Column.prototype.getComponent = function() {
    if (!this.component) {
      this.component = new ColumnComponent(this);
    }
    return this.component;
  };
  var RowManager = function RowManager2(table4) {
    this.table = table4;
    this.element = this.createHolderElement();
    this.tableElement = this.createTableElement();
    this.heightFixer = this.createTableElement();
    this.columnManager = null;
    this.height = 0;
    this.firstRender = false;
    this.renderMode = "virtual";
    this.fixedHeight = false;
    this.rows = [];
    this.activeRows = [];
    this.activeRowsCount = 0;
    this.displayRows = [];
    this.displayRowsCount = 0;
    this.scrollTop = 0;
    this.scrollLeft = 0;
    this.vDomRowHeight = 20;
    this.vDomTop = 0;
    this.vDomBottom = 0;
    this.vDomScrollPosTop = 0;
    this.vDomScrollPosBottom = 0;
    this.vDomTopPad = 0;
    this.vDomBottomPad = 0;
    this.vDomMaxRenderChain = 90;
    this.vDomWindowBuffer = 0;
    this.vDomWindowMinTotalRows = 20;
    this.vDomWindowMinMarginRows = 5;
    this.vDomTopNewRows = [];
    this.vDomBottomNewRows = [];
    this.rowNumColumn = false;
    this.redrawBlock = false;
    this.redrawBlockRestoreConfig = false;
    this.redrawBlockRederInPosition = false;
  };
  RowManager.prototype.createHolderElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-tableHolder");
    el.setAttribute("tabindex", 0);
    return el;
  };
  RowManager.prototype.createTableElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-table");
    return el;
  };
  RowManager.prototype.getElement = function() {
    return this.element;
  };
  RowManager.prototype.getTableElement = function() {
    return this.tableElement;
  };
  RowManager.prototype.getRowPosition = function(row2, active) {
    if (active) {
      return this.activeRows.indexOf(row2);
    } else {
      return this.rows.indexOf(row2);
    }
  };
  RowManager.prototype.setColumnManager = function(manager) {
    this.columnManager = manager;
  };
  RowManager.prototype.initialize = function() {
    var self2 = this;
    self2.setRenderMode();
    self2.element.appendChild(self2.tableElement);
    self2.firstRender = true;
    self2.element.addEventListener("scroll", function() {
      var left = self2.element.scrollLeft;
      if (self2.scrollLeft != left) {
        self2.columnManager.scrollHorizontal(left);
        if (self2.table.options.groupBy) {
          self2.table.modules.groupRows.scrollHeaders(left);
        }
        if (self2.table.modExists("columnCalcs")) {
          self2.table.modules.columnCalcs.scrollHorizontal(left);
        }
        self2.table.options.scrollHorizontal(left);
      }
      self2.scrollLeft = left;
    });
    if (this.renderMode === "virtual") {
      self2.element.addEventListener("scroll", function() {
        var top = self2.element.scrollTop;
        var dir = self2.scrollTop > top;
        if (self2.scrollTop != top) {
          self2.scrollTop = top;
          self2.scrollVertical(dir);
          if (self2.table.options.ajaxProgressiveLoad == "scroll") {
            self2.table.modules.ajax.nextPage(self2.element.scrollHeight - self2.element.clientHeight - top);
          }
          self2.table.options.scrollVertical(top);
        } else {
          self2.scrollTop = top;
        }
      });
    }
  };
  RowManager.prototype.findRow = function(subject) {
    var self2 = this;
    if ((typeof subject === "undefined" ? "undefined" : _typeof(subject)) == "object") {
      if (subject instanceof Row) {
        return subject;
      } else if (subject instanceof RowComponent) {
        return subject._getSelf() || false;
      } else if (typeof HTMLElement !== "undefined" && subject instanceof HTMLElement) {
        var match = self2.rows.find(function(row2) {
          return row2.getElement() === subject;
        });
        return match || false;
      }
    } else if (typeof subject == "undefined" || subject === null) {
      return false;
    } else {
      var _match = self2.rows.find(function(row2) {
        return row2.data[self2.table.options.index] == subject;
      });
      return _match || false;
    }
    return false;
  };
  RowManager.prototype.getRowFromDataObject = function(data) {
    var match = this.rows.find(function(row2) {
      return row2.data === data;
    });
    return match || false;
  };
  RowManager.prototype.getRowFromPosition = function(position, active) {
    if (active) {
      return this.activeRows[position];
    } else {
      return this.rows[position];
    }
  };
  RowManager.prototype.scrollToRow = function(row2, position, ifVisible) {
    var _this11 = this;
    var rowIndex = this.getDisplayRows().indexOf(row2), rowEl = row2.getElement(), rowTop, offset = 0;
    return new Promise(function(resolve, reject) {
      if (rowIndex > -1) {
        if (typeof position === "undefined") {
          position = _this11.table.options.scrollToRowPosition;
        }
        if (typeof ifVisible === "undefined") {
          ifVisible = _this11.table.options.scrollToRowIfVisible;
        }
        if (position === "nearest") {
          switch (_this11.renderMode) {
            case "classic":
              rowTop = Tabulator.prototype.helpers.elOffset(rowEl).top;
              position = Math.abs(_this11.element.scrollTop - rowTop) > Math.abs(_this11.element.scrollTop + _this11.element.clientHeight - rowTop) ? "bottom" : "top";
              break;
            case "virtual":
              position = Math.abs(_this11.vDomTop - rowIndex) > Math.abs(_this11.vDomBottom - rowIndex) ? "bottom" : "top";
              break;
          }
        }
        if (!ifVisible) {
          if (Tabulator.prototype.helpers.elVisible(rowEl)) {
            offset = Tabulator.prototype.helpers.elOffset(rowEl).top - Tabulator.prototype.helpers.elOffset(_this11.element).top;
            if (offset > 0 && offset < _this11.element.clientHeight - rowEl.offsetHeight) {
              return false;
            }
          }
        }
        switch (_this11.renderMode) {
          case "classic":
            _this11.element.scrollTop = Tabulator.prototype.helpers.elOffset(rowEl).top - Tabulator.prototype.helpers.elOffset(_this11.element).top + _this11.element.scrollTop;
            break;
          case "virtual":
            _this11._virtualRenderFill(rowIndex, true);
            break;
        }
        switch (position) {
          case "middle":
          case "center":
            if (_this11.element.scrollHeight - _this11.element.scrollTop == _this11.element.clientHeight) {
              _this11.element.scrollTop = _this11.element.scrollTop + (rowEl.offsetTop - _this11.element.scrollTop) - (_this11.element.scrollHeight - rowEl.offsetTop) / 2;
            } else {
              _this11.element.scrollTop = _this11.element.scrollTop - _this11.element.clientHeight / 2;
            }
            break;
          case "bottom":
            if (_this11.element.scrollHeight - _this11.element.scrollTop == _this11.element.clientHeight) {
              _this11.element.scrollTop = _this11.element.scrollTop - (_this11.element.scrollHeight - rowEl.offsetTop) + rowEl.offsetHeight;
            } else {
              _this11.element.scrollTop = _this11.element.scrollTop - _this11.element.clientHeight + rowEl.offsetHeight;
            }
            break;
        }
        resolve();
      } else {
        console.warn("Scroll Error - Row not visible");
        reject("Scroll Error - Row not visible");
      }
    });
  };
  RowManager.prototype.setData = function(data, renderInPosition, columnsChanged) {
    var _this12 = this;
    var self2 = this;
    return new Promise(function(resolve, reject) {
      if (renderInPosition && _this12.getDisplayRows().length) {
        if (self2.table.options.pagination) {
          self2._setDataActual(data, true);
        } else {
          _this12.reRenderInPosition(function() {
            self2._setDataActual(data);
          });
        }
      } else {
        if (_this12.table.options.autoColumns && columnsChanged) {
          _this12.table.columnManager.generateColumnsFromRowData(data);
        }
        _this12.resetScroll();
        _this12._setDataActual(data);
      }
      resolve();
    });
  };
  RowManager.prototype._setDataActual = function(data, renderInPosition) {
    var self2 = this;
    self2.table.options.dataLoading.call(this.table, data);
    this._wipeElements();
    if (this.table.options.history && this.table.modExists("history")) {
      this.table.modules.history.clear();
    }
    if (Array.isArray(data)) {
      if (this.table.modExists("selectRow")) {
        this.table.modules.selectRow.clearSelectionData();
      }
      if (this.table.options.reactiveData && this.table.modExists("reactiveData", true)) {
        this.table.modules.reactiveData.watchData(data);
      }
      data.forEach(function(def, i2) {
        if (def && (typeof def === "undefined" ? "undefined" : _typeof(def)) === "object") {
          var row2 = new Row(def, self2);
          self2.rows.push(row2);
        } else {
          console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:", def);
        }
      });
      self2.refreshActiveData(false, false, renderInPosition);
      self2.table.options.dataLoaded.call(this.table, data);
    } else {
      console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ", typeof data === "undefined" ? "undefined" : _typeof(data), "\nData:     ", data);
    }
  };
  RowManager.prototype._wipeElements = function() {
    this.rows.forEach(function(row2) {
      row2.wipe();
    });
    if (this.table.options.groupBy && this.table.modExists("groupRows")) {
      this.table.modules.groupRows.wipe();
    }
    this.rows = [];
    this.activeRows = [];
    this.activeRowsCount = 0;
    this.displayRows = [];
    this.displayRowsCount = 0;
    this.adjustTableSize();
  };
  RowManager.prototype.deleteRow = function(row2, blockRedraw) {
    var allIndex = this.rows.indexOf(row2), activeIndex = this.activeRows.indexOf(row2);
    if (activeIndex > -1) {
      this.activeRows.splice(activeIndex, 1);
    }
    if (allIndex > -1) {
      this.rows.splice(allIndex, 1);
    }
    this.setActiveRows(this.activeRows);
    this.displayRowIterator(function(rows) {
      var displayIndex = rows.indexOf(row2);
      if (displayIndex > -1) {
        rows.splice(displayIndex, 1);
      }
    });
    if (!blockRedraw) {
      this.reRenderInPosition();
    }
    this.regenerateRowNumbers();
    this.table.options.rowDeleted.call(this.table, row2.getComponent());
    if (this.table.options.dataChanged) {
      this.table.options.dataChanged.call(this.table, this.getData());
    }
    if (this.table.options.groupBy && this.table.modExists("groupRows")) {
      this.table.modules.groupRows.updateGroupRows(true);
    } else if (this.table.options.pagination && this.table.modExists("page")) {
      this.refreshActiveData(false, false, true);
    } else {
      if (this.table.options.pagination && this.table.modExists("page")) {
        this.refreshActiveData("page");
      }
    }
  };
  RowManager.prototype.addRow = function(data, pos, index, blockRedraw) {
    var row2 = this.addRowActual(data, pos, index, blockRedraw);
    if (this.table.options.history && this.table.modExists("history")) {
      this.table.modules.history.action("rowAdd", row2, { data, pos, index });
    }
    return row2;
  };
  RowManager.prototype.addRows = function(data, pos, index) {
    var _this13 = this;
    var self2 = this, length = 0, rows = [];
    return new Promise(function(resolve, reject) {
      pos = _this13.findAddRowPos(pos);
      if (!Array.isArray(data)) {
        data = [data];
      }
      length = data.length - 1;
      if (typeof index == "undefined" && pos || typeof index !== "undefined" && !pos) {
        data.reverse();
      }
      data.forEach(function(item, i2) {
        var row2 = self2.addRow(item, pos, index, true);
        rows.push(row2);
      });
      if (_this13.table.options.groupBy && _this13.table.modExists("groupRows")) {
        _this13.table.modules.groupRows.updateGroupRows(true);
      } else if (_this13.table.options.pagination && _this13.table.modExists("page")) {
        _this13.refreshActiveData(false, false, true);
      } else {
        _this13.reRenderInPosition();
      }
      if (_this13.table.modExists("columnCalcs")) {
        _this13.table.modules.columnCalcs.recalc(_this13.table.rowManager.activeRows);
      }
      _this13.regenerateRowNumbers();
      resolve(rows);
    });
  };
  RowManager.prototype.findAddRowPos = function(pos) {
    if (typeof pos === "undefined") {
      pos = this.table.options.addRowPos;
    }
    if (pos === "pos") {
      pos = true;
    }
    if (pos === "bottom") {
      pos = false;
    }
    return pos;
  };
  RowManager.prototype.addRowActual = function(data, pos, index, blockRedraw) {
    var row2 = data instanceof Row ? data : new Row(data || {}, this), top = this.findAddRowPos(pos), allIndex = -1, activeIndex, dispRows;
    if (!index && this.table.options.pagination && this.table.options.paginationAddRow == "page") {
      dispRows = this.getDisplayRows();
      if (top) {
        if (dispRows.length) {
          index = dispRows[0];
        } else {
          if (this.activeRows.length) {
            index = this.activeRows[this.activeRows.length - 1];
            top = false;
          }
        }
      } else {
        if (dispRows.length) {
          index = dispRows[dispRows.length - 1];
          top = dispRows.length < this.table.modules.page.getPageSize() ? false : true;
        }
      }
    }
    if (typeof index !== "undefined") {
      index = this.findRow(index);
    }
    if (this.table.options.groupBy && this.table.modExists("groupRows")) {
      this.table.modules.groupRows.assignRowToGroup(row2);
      var groupRows = row2.getGroup().rows;
      if (groupRows.length > 1) {
        if (!index || index && groupRows.indexOf(index) == -1) {
          if (top) {
            if (groupRows[0] !== row2) {
              index = groupRows[0];
              this._moveRowInArray(row2.getGroup().rows, row2, index, !top);
            }
          } else {
            if (groupRows[groupRows.length - 1] !== row2) {
              index = groupRows[groupRows.length - 1];
              this._moveRowInArray(row2.getGroup().rows, row2, index, !top);
            }
          }
        } else {
          this._moveRowInArray(row2.getGroup().rows, row2, index, !top);
        }
      }
    }
    if (index) {
      allIndex = this.rows.indexOf(index);
    }
    if (index && allIndex > -1) {
      activeIndex = this.activeRows.indexOf(index);
      this.displayRowIterator(function(rows) {
        var displayIndex = rows.indexOf(index);
        if (displayIndex > -1) {
          rows.splice(top ? displayIndex : displayIndex + 1, 0, row2);
        }
      });
      if (activeIndex > -1) {
        this.activeRows.splice(top ? activeIndex : activeIndex + 1, 0, row2);
      }
      this.rows.splice(top ? allIndex : allIndex + 1, 0, row2);
    } else {
      if (top) {
        this.displayRowIterator(function(rows) {
          rows.unshift(row2);
        });
        this.activeRows.unshift(row2);
        this.rows.unshift(row2);
      } else {
        this.displayRowIterator(function(rows) {
          rows.push(row2);
        });
        this.activeRows.push(row2);
        this.rows.push(row2);
      }
    }
    this.setActiveRows(this.activeRows);
    this.table.options.rowAdded.call(this.table, row2.getComponent());
    if (this.table.options.dataChanged) {
      this.table.options.dataChanged.call(this.table, this.getData());
    }
    if (!blockRedraw) {
      this.reRenderInPosition();
    }
    return row2;
  };
  RowManager.prototype.moveRow = function(from, to, after) {
    if (this.table.options.history && this.table.modExists("history")) {
      this.table.modules.history.action("rowMove", from, { posFrom: this.getRowPosition(from), posTo: this.getRowPosition(to), to, after });
    }
    this.moveRowActual(from, to, after);
    this.regenerateRowNumbers();
    this.table.options.rowMoved.call(this.table, from.getComponent());
  };
  RowManager.prototype.moveRowActual = function(from, to, after) {
    var _this14 = this;
    this._moveRowInArray(this.rows, from, to, after);
    this._moveRowInArray(this.activeRows, from, to, after);
    this.displayRowIterator(function(rows) {
      _this14._moveRowInArray(rows, from, to, after);
    });
    if (this.table.options.groupBy && this.table.modExists("groupRows")) {
      if (!after && to instanceof Group) {
        to = this.table.rowManager.prevDisplayRow(from) || to;
      }
      var toGroup = to.getGroup();
      var fromGroup = from.getGroup();
      if (toGroup === fromGroup) {
        this._moveRowInArray(toGroup.rows, from, to, after);
      } else {
        if (fromGroup) {
          fromGroup.removeRow(from);
        }
        toGroup.insertRow(from, to, after);
      }
    }
  };
  RowManager.prototype._moveRowInArray = function(rows, from, to, after) {
    var fromIndex, toIndex, start, end;
    if (from !== to) {
      fromIndex = rows.indexOf(from);
      if (fromIndex > -1) {
        rows.splice(fromIndex, 1);
        toIndex = rows.indexOf(to);
        if (toIndex > -1) {
          if (after) {
            rows.splice(toIndex + 1, 0, from);
          } else {
            rows.splice(toIndex, 0, from);
          }
        } else {
          rows.splice(fromIndex, 0, from);
        }
      }
      if (rows === this.getDisplayRows()) {
        start = fromIndex < toIndex ? fromIndex : toIndex;
        end = toIndex > fromIndex ? toIndex : fromIndex + 1;
        for (var _i4 = start; _i4 <= end; _i4++) {
          if (rows[_i4]) {
            this.styleRow(rows[_i4], _i4);
          }
        }
      }
    }
  };
  RowManager.prototype.clearData = function() {
    this.setData([]);
  };
  RowManager.prototype.getRowIndex = function(row2) {
    return this.findRowIndex(row2, this.rows);
  };
  RowManager.prototype.getDisplayRowIndex = function(row2) {
    var index = this.getDisplayRows().indexOf(row2);
    return index > -1 ? index : false;
  };
  RowManager.prototype.nextDisplayRow = function(row2, rowOnly) {
    var index = this.getDisplayRowIndex(row2), nextRow = false;
    if (index !== false && index < this.displayRowsCount - 1) {
      nextRow = this.getDisplayRows()[index + 1];
    }
    if (nextRow && (!(nextRow instanceof Row) || nextRow.type != "row")) {
      return this.nextDisplayRow(nextRow, rowOnly);
    }
    return nextRow;
  };
  RowManager.prototype.prevDisplayRow = function(row2, rowOnly) {
    var index = this.getDisplayRowIndex(row2), prevRow = false;
    if (index) {
      prevRow = this.getDisplayRows()[index - 1];
    }
    if (rowOnly && prevRow && (!(prevRow instanceof Row) || prevRow.type != "row")) {
      return this.prevDisplayRow(prevRow, rowOnly);
    }
    return prevRow;
  };
  RowManager.prototype.findRowIndex = function(row2, list) {
    var rowIndex;
    row2 = this.findRow(row2);
    if (row2) {
      rowIndex = list.indexOf(row2);
      if (rowIndex > -1) {
        return rowIndex;
      }
    }
    return false;
  };
  RowManager.prototype.getData = function(active, transform) {
    var output = [], rows = this.getRows(active);
    rows.forEach(function(row2) {
      if (row2.type == "row") {
        output.push(row2.getData(transform || "data"));
      }
    });
    return output;
  };
  RowManager.prototype.getComponents = function(active) {
    var output = [], rows = this.getRows(active);
    rows.forEach(function(row2) {
      output.push(row2.getComponent());
    });
    return output;
  };
  RowManager.prototype.getDataCount = function(active) {
    var rows = this.getRows(active);
    return rows.length;
  };
  RowManager.prototype._genRemoteRequest = function() {
    var _this15 = this;
    var table4 = this.table, options = table4.options, params = {};
    if (table4.modExists("page")) {
      if (options.ajaxSorting) {
        var sorters = this.table.modules.sort.getSort();
        sorters.forEach(function(item) {
          delete item.column;
        });
        params[this.table.modules.page.paginationDataSentNames.sorters] = sorters;
      }
      if (options.ajaxFiltering) {
        var filters = this.table.modules.filter.getFilters(true, true);
        params[this.table.modules.page.paginationDataSentNames.filters] = filters;
      }
      this.table.modules.ajax.setParams(params, true);
    }
    table4.modules.ajax.sendRequest().then(function(data) {
      _this15._setDataActual(data, true);
    }).catch(function(e2) {
    });
  };
  RowManager.prototype.filterRefresh = function() {
    var table4 = this.table, options = table4.options, left = this.scrollLeft;
    if (options.ajaxFiltering) {
      if (options.pagination == "remote" && table4.modExists("page")) {
        table4.modules.page.reset(true);
        table4.modules.page.setPage(1).then(function() {
        }).catch(function() {
        });
      } else if (options.ajaxProgressiveLoad) {
        table4.modules.ajax.loadData().then(function() {
        }).catch(function() {
        });
      } else {
        this._genRemoteRequest();
      }
    } else {
      this.refreshActiveData("filter");
    }
    this.scrollHorizontal(left);
  };
  RowManager.prototype.sorterRefresh = function(loadOrignalData) {
    var table4 = this.table, options = this.table.options, left = this.scrollLeft;
    if (options.ajaxSorting) {
      if ((options.pagination == "remote" || options.progressiveLoad) && table4.modExists("page")) {
        table4.modules.page.reset(true);
        table4.modules.page.setPage(1).then(function() {
        }).catch(function() {
        });
      } else if (options.ajaxProgressiveLoad) {
        table4.modules.ajax.loadData().then(function() {
        }).catch(function() {
        });
      } else {
        this._genRemoteRequest();
      }
    } else {
      this.refreshActiveData(loadOrignalData ? "filter" : "sort");
    }
    this.scrollHorizontal(left);
  };
  RowManager.prototype.scrollHorizontal = function(left) {
    this.scrollLeft = left;
    this.element.scrollLeft = left;
    if (this.table.options.groupBy) {
      this.table.modules.groupRows.scrollHeaders(left);
    }
    if (this.table.modExists("columnCalcs")) {
      this.table.modules.columnCalcs.scrollHorizontal(left);
    }
  };
  RowManager.prototype.refreshActiveData = function(stage, skipStage, renderInPosition) {
    var self2 = this, table4 = this.table, cascadeOrder = ["all", "filter", "sort", "display", "freeze", "group", "tree", "page"], displayIndex;
    if (this.redrawBlock) {
      if (!this.redrawBlockRestoreConfig || cascadeOrder.indexOf(stage) < cascadeOrder.indexOf(this.redrawBlockRestoreConfig.stage)) {
        this.redrawBlockRestoreConfig = {
          stage,
          skipStage,
          renderInPosition
        };
      }
      return;
    } else {
      if (self2.table.modExists("edit")) {
        self2.table.modules.edit.cancelEdit();
      }
      if (!stage) {
        stage = "all";
      }
      if (table4.options.selectable && !table4.options.selectablePersistence && table4.modExists("selectRow")) {
        table4.modules.selectRow.deselectRows();
      }
      switch (stage) {
        case "all":
        case "filter":
          if (!skipStage) {
            if (table4.modExists("filter")) {
              self2.setActiveRows(table4.modules.filter.filter(self2.rows));
            } else {
              self2.setActiveRows(self2.rows.slice(0));
            }
          } else {
            skipStage = false;
          }
        case "sort":
          if (!skipStage) {
            if (table4.modExists("sort")) {
              table4.modules.sort.sort(this.activeRows);
            }
          } else {
            skipStage = false;
          }
          this.regenerateRowNumbers();
        case "display":
          this.resetDisplayRows();
        case "freeze":
          if (!skipStage) {
            if (this.table.modExists("frozenRows")) {
              if (table4.modules.frozenRows.isFrozen()) {
                if (!table4.modules.frozenRows.getDisplayIndex()) {
                  table4.modules.frozenRows.setDisplayIndex(this.getNextDisplayIndex());
                }
                displayIndex = table4.modules.frozenRows.getDisplayIndex();
                displayIndex = self2.setDisplayRows(table4.modules.frozenRows.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);
                if (displayIndex !== true) {
                  table4.modules.frozenRows.setDisplayIndex(displayIndex);
                }
              }
            }
          } else {
            skipStage = false;
          }
        case "group":
          if (!skipStage) {
            if (table4.options.groupBy && table4.modExists("groupRows")) {
              if (!table4.modules.groupRows.getDisplayIndex()) {
                table4.modules.groupRows.setDisplayIndex(this.getNextDisplayIndex());
              }
              displayIndex = table4.modules.groupRows.getDisplayIndex();
              displayIndex = self2.setDisplayRows(table4.modules.groupRows.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);
              if (displayIndex !== true) {
                table4.modules.groupRows.setDisplayIndex(displayIndex);
              }
            }
          } else {
            skipStage = false;
          }
        case "tree":
          if (!skipStage) {
            if (table4.options.dataTree && table4.modExists("dataTree")) {
              if (!table4.modules.dataTree.getDisplayIndex()) {
                table4.modules.dataTree.setDisplayIndex(this.getNextDisplayIndex());
              }
              displayIndex = table4.modules.dataTree.getDisplayIndex();
              displayIndex = self2.setDisplayRows(table4.modules.dataTree.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);
              if (displayIndex !== true) {
                table4.modules.dataTree.setDisplayIndex(displayIndex);
              }
            }
          } else {
            skipStage = false;
          }
          if (table4.options.pagination && table4.modExists("page") && !renderInPosition) {
            if (table4.modules.page.getMode() == "local") {
              table4.modules.page.reset();
            }
          }
        case "page":
          if (!skipStage) {
            if (table4.options.pagination && table4.modExists("page")) {
              if (!table4.modules.page.getDisplayIndex()) {
                table4.modules.page.setDisplayIndex(this.getNextDisplayIndex());
              }
              displayIndex = table4.modules.page.getDisplayIndex();
              if (table4.modules.page.getMode() == "local") {
                table4.modules.page.setMaxRows(this.getDisplayRows(displayIndex - 1).length);
              }
              displayIndex = self2.setDisplayRows(table4.modules.page.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);
              if (displayIndex !== true) {
                table4.modules.page.setDisplayIndex(displayIndex);
              }
            }
          } else {
            skipStage = false;
          }
      }
      if (Tabulator.prototype.helpers.elVisible(self2.element)) {
        if (renderInPosition) {
          self2.reRenderInPosition();
        } else {
          if (stage === "all" && this.table.options.virtualDomHoz) {
            this.table.vdomHoz.dataChange();
          }
          self2.renderTable();
          if (table4.options.layoutColumnsOnNewData) {
            self2.table.columnManager.redraw(true);
          }
        }
      }
      if (table4.modExists("columnCalcs")) {
        table4.modules.columnCalcs.recalc(this.activeRows);
      }
    }
  };
  RowManager.prototype.regenerateRowNumbers = function() {
    var _this16 = this;
    if (this.rowNumColumn) {
      this.activeRows.forEach(function(row2) {
        var cell = row2.getCell(_this16.rowNumColumn);
        if (cell) {
          cell._generateContents();
        }
      });
    }
  };
  RowManager.prototype.setActiveRows = function(activeRows) {
    this.activeRows = activeRows;
    this.activeRowsCount = this.activeRows.length;
  };
  RowManager.prototype.resetDisplayRows = function() {
    this.displayRows = [];
    this.displayRows.push(this.activeRows.slice(0));
    this.displayRowsCount = this.displayRows[0].length;
    if (this.table.modExists("frozenRows")) {
      this.table.modules.frozenRows.setDisplayIndex(0);
    }
    if (this.table.options.groupBy && this.table.modExists("groupRows")) {
      this.table.modules.groupRows.setDisplayIndex(0);
    }
    if (this.table.options.pagination && this.table.modExists("page")) {
      this.table.modules.page.setDisplayIndex(0);
    }
  };
  RowManager.prototype.getNextDisplayIndex = function() {
    return this.displayRows.length;
  };
  RowManager.prototype.setDisplayRows = function(displayRows, index) {
    var output = true;
    if (index && typeof this.displayRows[index] != "undefined") {
      this.displayRows[index] = displayRows;
      output = true;
    } else {
      this.displayRows.push(displayRows);
      output = index = this.displayRows.length - 1;
    }
    if (index == this.displayRows.length - 1) {
      this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
    }
    return output;
  };
  RowManager.prototype.getDisplayRows = function(index) {
    if (typeof index == "undefined") {
      return this.displayRows.length ? this.displayRows[this.displayRows.length - 1] : [];
    } else {
      return this.displayRows[index] || [];
    }
  };
  RowManager.prototype.getVisibleRows = function(viewable) {
    var topEdge = this.element.scrollTop, bottomEdge = this.element.clientHeight + topEdge, topFound = false, topRow = 0, bottomRow = 0, rows = this.getDisplayRows();
    if (viewable) {
      this.getDisplayRows();
      for (var i2 = this.vDomTop; i2 <= this.vDomBottom; i2++) {
        if (rows[i2]) {
          if (!topFound) {
            if (topEdge - rows[i2].getElement().offsetTop >= 0) {
              topRow = i2;
            } else {
              topFound = true;
              if (bottomEdge - rows[i2].getElement().offsetTop >= 0) {
                bottomRow = i2;
              } else {
                break;
              }
            }
          } else {
            if (bottomEdge - rows[i2].getElement().offsetTop >= 0) {
              bottomRow = i2;
            } else {
              break;
            }
          }
        }
      }
    } else {
      topRow = this.vDomTop;
      bottomRow = this.vDomBottom;
    }
    return rows.slice(topRow, bottomRow + 1);
  };
  RowManager.prototype.displayRowIterator = function(callback) {
    this.displayRows.forEach(callback);
    this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
  };
  RowManager.prototype.getRows = function(active) {
    var rows;
    switch (active) {
      case "active":
        rows = this.activeRows;
        break;
      case "display":
        rows = this.table.rowManager.getDisplayRows();
        break;
      case "visible":
        rows = this.getVisibleRows(true);
        break;
      case "selected":
        rows = this.table.modules.selectRow.selectedRows;
        break;
      default:
        rows = this.rows;
    }
    return rows;
  };
  RowManager.prototype.reRenderInPosition = function(callback) {
    if (this.getRenderMode() == "virtual") {
      if (this.redrawBlock) {
        if (callback) {
          callback();
        } else {
          this.redrawBlockRederInPosition = true;
        }
      } else {
        var scrollTop = this.element.scrollTop;
        var topRow = false;
        var topOffset = false;
        var left = this.scrollLeft;
        var rows = this.getDisplayRows();
        for (var i2 = this.vDomTop; i2 <= this.vDomBottom; i2++) {
          if (rows[i2]) {
            var diff = scrollTop - rows[i2].getElement().offsetTop;
            if (topOffset === false || Math.abs(diff) < topOffset) {
              topOffset = diff;
              topRow = i2;
            } else {
              break;
            }
          }
        }
        if (callback) {
          callback();
        }
        this._virtualRenderFill(topRow === false ? this.displayRowsCount - 1 : topRow, true, topOffset || 0);
        this.scrollHorizontal(left);
      }
    } else {
      this.renderTable();
      if (callback) {
        callback();
      }
    }
  };
  RowManager.prototype.setRenderMode = function() {
    if (this.table.options.virtualDom) {
      this.renderMode = "virtual";
      if (this.table.element.clientHeight || this.table.options.height) {
        this.fixedHeight = true;
      } else {
        this.fixedHeight = false;
      }
    } else {
      this.renderMode = "classic";
    }
  };
  RowManager.prototype.getRenderMode = function() {
    return this.renderMode;
  };
  RowManager.prototype.renderTable = function() {
    this.table.options.renderStarted.call(this.table);
    this.element.scrollTop = 0;
    switch (this.renderMode) {
      case "classic":
        this._simpleRender();
        break;
      case "virtual":
        this._virtualRenderFill();
        break;
    }
    if (this.firstRender) {
      if (this.displayRowsCount) {
        this.firstRender = false;
        this.table.modules.layout.layout();
      } else {
        this.renderEmptyScroll();
      }
    }
    if (this.table.modExists("frozenColumns")) {
      this.table.modules.frozenColumns.layout();
    }
    if (!this.displayRowsCount) {
      if (this.table.options.placeholder) {
        this.table.options.placeholder.setAttribute("tabulator-render-mode", this.renderMode);
        this.getElement().appendChild(this.table.options.placeholder);
        this.table.options.placeholder.style.width = this.table.columnManager.getWidth() + "px";
      }
    }
    this.table.options.renderComplete.call(this.table);
  };
  RowManager.prototype._simpleRender = function() {
    this._clearVirtualDom();
    if (this.displayRowsCount) {
      this.checkClassicModeGroupHeaderWidth();
    } else {
      this.renderEmptyScroll();
    }
  };
  RowManager.prototype.checkClassicModeGroupHeaderWidth = function() {
    var self2 = this, element = this.tableElement, onlyGroupHeaders = true;
    self2.getDisplayRows().forEach(function(row2, index) {
      self2.styleRow(row2, index);
      element.appendChild(row2.getElement());
      row2.initialize(true);
      if (row2.type !== "group") {
        onlyGroupHeaders = false;
      }
    });
    if (onlyGroupHeaders) {
      element.style.minWidth = self2.table.columnManager.getWidth() + "px";
    } else {
      element.style.minWidth = "";
    }
  };
  RowManager.prototype.renderEmptyScroll = function() {
    if (this.table.options.placeholder) {
      this.tableElement.style.display = "none";
    } else {
      this.tableElement.style.minWidth = this.table.columnManager.getWidth() + "px";
    }
  };
  RowManager.prototype._clearVirtualDom = function() {
    var element = this.tableElement;
    if (this.table.options.placeholder && this.table.options.placeholder.parentNode) {
      this.table.options.placeholder.parentNode.removeChild(this.table.options.placeholder);
    }
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    element.style.paddingTop = "";
    element.style.paddingBottom = "";
    element.style.minWidth = "";
    element.style.minHeight = "";
    element.style.display = "";
    element.style.visibility = "";
    this.scrollTop = 0;
    this.scrollLeft = 0;
    this.vDomTop = 0;
    this.vDomBottom = 0;
    this.vDomTopPad = 0;
    this.vDomBottomPad = 0;
  };
  RowManager.prototype.styleRow = function(row2, index) {
    var rowEl = row2.getElement();
    if (index % 2) {
      rowEl.classList.add("tabulator-row-even");
      rowEl.classList.remove("tabulator-row-odd");
    } else {
      rowEl.classList.add("tabulator-row-odd");
      rowEl.classList.remove("tabulator-row-even");
    }
  };
  RowManager.prototype._virtualRenderFill = function(position, forceMove, offset) {
    var self2 = this, element = self2.tableElement, holder = self2.element, topPad = 0, rowsHeight = 0, topPadHeight = 0, i2 = 0, onlyGroupHeaders = true, rows = self2.getDisplayRows();
    position = position || 0;
    offset = offset || 0;
    if (!position) {
      self2._clearVirtualDom();
    } else {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      var heightOccupied = (self2.displayRowsCount - position + 1) * self2.vDomRowHeight;
      if (heightOccupied < self2.height) {
        position -= Math.ceil((self2.height - heightOccupied) / self2.vDomRowHeight);
        if (position < 0) {
          position = 0;
        }
      }
      topPad = Math.min(Math.max(Math.floor(self2.vDomWindowBuffer / self2.vDomRowHeight), self2.vDomWindowMinMarginRows), position);
      position -= topPad;
    }
    if (self2.displayRowsCount && Tabulator.prototype.helpers.elVisible(self2.element)) {
      self2.vDomTop = position;
      self2.vDomBottom = position - 1;
      while ((rowsHeight <= self2.height + self2.vDomWindowBuffer || i2 < self2.vDomWindowMinTotalRows) && self2.vDomBottom < self2.displayRowsCount - 1) {
        var index = self2.vDomBottom + 1, row2 = rows[index], rowHeight = 0;
        self2.styleRow(row2, index);
        element.appendChild(row2.getElement());
        row2.initialize();
        if (!row2.heightInitialized) {
          row2.normalizeHeight(true);
        }
        rowHeight = row2.getHeight();
        if (i2 < topPad) {
          topPadHeight += rowHeight;
        } else {
          rowsHeight += rowHeight;
        }
        if (rowHeight > this.vDomWindowBuffer) {
          this.vDomWindowBuffer = rowHeight * 2;
        }
        if (row2.type !== "group") {
          onlyGroupHeaders = false;
        }
        self2.vDomBottom++;
        i2++;
      }
      if (!position) {
        this.vDomTopPad = 0;
        self2.vDomRowHeight = Math.floor((rowsHeight + topPadHeight) / i2);
        self2.vDomBottomPad = self2.vDomRowHeight * (self2.displayRowsCount - self2.vDomBottom - 1);
        self2.vDomScrollHeight = topPadHeight + rowsHeight + self2.vDomBottomPad - self2.height;
      } else {
        self2.vDomTopPad = !forceMove ? self2.scrollTop - topPadHeight : self2.vDomRowHeight * this.vDomTop + offset;
        self2.vDomBottomPad = self2.vDomBottom == self2.displayRowsCount - 1 ? 0 : Math.max(self2.vDomScrollHeight - self2.vDomTopPad - rowsHeight - topPadHeight, 0);
      }
      element.style.paddingTop = self2.vDomTopPad + "px";
      element.style.paddingBottom = self2.vDomBottomPad + "px";
      if (forceMove) {
        this.scrollTop = self2.vDomTopPad + topPadHeight + offset - (this.element.scrollWidth > this.element.clientWidth ? this.element.offsetHeight - this.element.clientHeight : 0);
      }
      this.scrollTop = Math.min(this.scrollTop, this.element.scrollHeight - this.height);
      if (this.element.scrollWidth > this.element.offsetWidth && forceMove) {
        this.scrollTop += this.element.offsetHeight - this.element.clientHeight;
      }
      this.vDomScrollPosTop = this.scrollTop;
      this.vDomScrollPosBottom = this.scrollTop;
      holder.scrollTop = this.scrollTop;
      element.style.minWidth = onlyGroupHeaders ? self2.table.columnManager.getWidth() + "px" : "";
      if (self2.table.options.groupBy) {
        if (self2.table.modules.layout.getMode() != "fitDataFill" && self2.displayRowsCount == self2.table.modules.groupRows.countGroups()) {
          self2.tableElement.style.minWidth = self2.table.columnManager.getWidth();
        }
      }
    } else {
      this.renderEmptyScroll();
    }
    if (!this.fixedHeight) {
      this.adjustTableSize();
    }
  };
  RowManager.prototype.scrollVertical = function(dir) {
    var topDiff = this.scrollTop - this.vDomScrollPosTop;
    var bottomDiff = this.scrollTop - this.vDomScrollPosBottom;
    var margin = this.vDomWindowBuffer * 2;
    if (-topDiff > margin || bottomDiff > margin) {
      var left = this.scrollLeft;
      this._virtualRenderFill(Math.floor(this.element.scrollTop / this.element.scrollHeight * this.displayRowsCount));
      this.scrollHorizontal(left);
    } else {
      if (dir) {
        if (topDiff < 0) {
          this._addTopRow(-topDiff);
        }
        if (bottomDiff < 0) {
          if (this.vDomScrollHeight - this.scrollTop > this.vDomWindowBuffer) {
            this._removeBottomRow(-bottomDiff);
          } else {
            this.vDomScrollPosBottom = this.scrollTop;
          }
        }
      } else {
        if (topDiff >= 0) {
          if (this.scrollTop > this.vDomWindowBuffer) {
            this._removeTopRow(topDiff);
          } else {
            this.vDomScrollPosTop = this.scrollTop;
          }
        }
        if (bottomDiff >= 0) {
          this._addBottomRow(bottomDiff);
        }
      }
    }
  };
  RowManager.prototype._addTopRow = function(topDiff) {
    var i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var table4 = this.tableElement, rows = this.getDisplayRows();
    if (this.vDomTop) {
      var index = this.vDomTop - 1, topRow = rows[index], topRowHeight = topRow.getHeight() || this.vDomRowHeight;
      if (topDiff >= topRowHeight) {
        this.styleRow(topRow, index);
        table4.insertBefore(topRow.getElement(), table4.firstChild);
        if (!topRow.initialized || !topRow.heightInitialized) {
          this.vDomTopNewRows.push(topRow);
          if (!topRow.heightInitialized) {
            topRow.clearCellHeight();
          }
        }
        topRow.initialize();
        this.vDomTopPad -= topRowHeight;
        if (this.vDomTopPad < 0) {
          this.vDomTopPad = index * this.vDomRowHeight;
        }
        if (!index) {
          this.vDomTopPad = 0;
        }
        table4.style.paddingTop = this.vDomTopPad + "px";
        this.vDomScrollPosTop -= topRowHeight;
        this.vDomTop--;
      }
      topDiff = -(this.scrollTop - this.vDomScrollPosTop);
      if (topRow.getHeight() > this.vDomWindowBuffer) {
        this.vDomWindowBuffer = topRow.getHeight() * 2;
      }
      if (i2 < this.vDomMaxRenderChain && this.vDomTop && topDiff >= (rows[this.vDomTop - 1].getHeight() || this.vDomRowHeight)) {
        this._addTopRow(topDiff, i2 + 1);
      } else {
        this._quickNormalizeRowHeight(this.vDomTopNewRows);
      }
    }
  };
  RowManager.prototype._removeTopRow = function(topDiff) {
    var table4 = this.tableElement, topRow = this.getDisplayRows()[this.vDomTop], topRowHeight = topRow.getHeight() || this.vDomRowHeight;
    if (topDiff >= topRowHeight) {
      var rowEl = topRow.getElement();
      rowEl.parentNode.removeChild(rowEl);
      this.vDomTopPad += topRowHeight;
      table4.style.paddingTop = this.vDomTopPad + "px";
      this.vDomScrollPosTop += this.vDomTop ? topRowHeight : topRowHeight + this.vDomWindowBuffer;
      this.vDomTop++;
      topDiff = this.scrollTop - this.vDomScrollPosTop;
      this._removeTopRow(topDiff);
    }
  };
  RowManager.prototype._addBottomRow = function(bottomDiff) {
    var i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var table4 = this.tableElement, rows = this.getDisplayRows();
    if (this.vDomBottom < this.displayRowsCount - 1) {
      var index = this.vDomBottom + 1, bottomRow = rows[index], bottomRowHeight = bottomRow.getHeight() || this.vDomRowHeight;
      if (bottomDiff >= bottomRowHeight) {
        this.styleRow(bottomRow, index);
        table4.appendChild(bottomRow.getElement());
        if (!bottomRow.initialized || !bottomRow.heightInitialized) {
          this.vDomBottomNewRows.push(bottomRow);
          if (!bottomRow.heightInitialized) {
            bottomRow.clearCellHeight();
          }
        }
        bottomRow.initialize();
        this.vDomBottomPad -= bottomRowHeight;
        if (this.vDomBottomPad < 0 || index == this.displayRowsCount - 1) {
          this.vDomBottomPad = 0;
        }
        table4.style.paddingBottom = this.vDomBottomPad + "px";
        this.vDomScrollPosBottom += bottomRowHeight;
        this.vDomBottom++;
      }
      bottomDiff = this.scrollTop - this.vDomScrollPosBottom;
      if (bottomRow.getHeight() > this.vDomWindowBuffer) {
        this.vDomWindowBuffer = bottomRow.getHeight() * 2;
      }
      if (i2 < this.vDomMaxRenderChain && this.vDomBottom < this.displayRowsCount - 1 && bottomDiff >= (rows[this.vDomBottom + 1].getHeight() || this.vDomRowHeight)) {
        this._addBottomRow(bottomDiff, i2 + 1);
      } else {
        this._quickNormalizeRowHeight(this.vDomBottomNewRows);
      }
    }
  };
  RowManager.prototype._removeBottomRow = function(bottomDiff) {
    var table4 = this.tableElement, bottomRow = this.getDisplayRows()[this.vDomBottom], bottomRowHeight = bottomRow.getHeight() || this.vDomRowHeight;
    if (bottomDiff >= bottomRowHeight) {
      var rowEl = bottomRow.getElement();
      if (rowEl.parentNode) {
        rowEl.parentNode.removeChild(rowEl);
      }
      this.vDomBottomPad += bottomRowHeight;
      if (this.vDomBottomPad < 0) {
        this.vDomBottomPad = 0;
      }
      table4.style.paddingBottom = this.vDomBottomPad + "px";
      this.vDomScrollPosBottom -= bottomRowHeight;
      this.vDomBottom--;
      bottomDiff = -(this.scrollTop - this.vDomScrollPosBottom);
      this._removeBottomRow(bottomDiff);
    }
  };
  RowManager.prototype._quickNormalizeRowHeight = function(rows) {
    rows.forEach(function(row2) {
      row2.calcHeight();
    });
    rows.forEach(function(row2) {
      row2.setCellHeight();
    });
    rows.length = 0;
  };
  RowManager.prototype.normalizeHeight = function() {
    this.activeRows.forEach(function(row2) {
      row2.normalizeHeight();
    });
  };
  RowManager.prototype.adjustTableSize = function() {
    var initialHeight = this.element.clientHeight, modExists;
    if (this.renderMode === "virtual") {
      var otherHeight = Math.floor(this.columnManager.getElement().getBoundingClientRect().height + (this.table.footerManager && this.table.footerManager.active && !this.table.footerManager.external ? this.table.footerManager.getElement().getBoundingClientRect().height : 0));
      if (this.fixedHeight) {
        this.element.style.minHeight = "calc(100% - " + otherHeight + "px)";
        this.element.style.height = "calc(100% - " + otherHeight + "px)";
        this.element.style.maxHeight = "calc(100% - " + otherHeight + "px)";
      } else {
        this.element.style.height = "";
        this.element.style.height = this.table.element.clientHeight - otherHeight + "px";
        this.element.scrollTop = this.scrollTop;
      }
      this.height = this.element.clientHeight;
      this.vDomWindowBuffer = this.table.options.virtualDomBuffer || this.height;
      if (!this.fixedHeight && initialHeight != this.element.clientHeight) {
        modExists = this.table.modExists("resizeTable");
        if (modExists && !this.table.modules.resizeTable.autoResize || !modExists) {
          this.redraw();
        }
      }
    }
  };
  RowManager.prototype.reinitialize = function() {
    this.rows.forEach(function(row2) {
      row2.reinitialize(true);
    });
  };
  RowManager.prototype.blockRedraw = function() {
    this.redrawBlock = true;
    this.redrawBlockRestoreConfig = false;
  };
  RowManager.prototype.restoreRedraw = function() {
    this.redrawBlock = false;
    if (this.redrawBlockRestoreConfig) {
      this.refreshActiveData(this.redrawBlockRestoreConfig.stage, this.redrawBlockRestoreConfig.skipStage, this.redrawBlockRestoreConfig.renderInPosition);
      this.redrawBlockRestoreConfig = false;
    } else {
      if (this.redrawBlockRederInPosition) {
        this.reRenderInPosition();
      }
    }
    this.redrawBlockRederInPosition = false;
  };
  RowManager.prototype.redraw = function(force) {
    var pos = 0, left = this.scrollLeft;
    this.adjustTableSize();
    this.table.tableWidth = this.table.element.clientWidth;
    if (!force) {
      if (this.renderMode == "classic") {
        if (this.table.options.groupBy) {
          this.refreshActiveData("group", false, false);
        } else {
          this._simpleRender();
        }
      } else {
        this.reRenderInPosition();
        this.scrollHorizontal(left);
      }
      if (!this.displayRowsCount) {
        if (this.table.options.placeholder) {
          this.getElement().appendChild(this.table.options.placeholder);
        }
      }
    } else {
      this.renderTable();
    }
  };
  RowManager.prototype.resetScroll = function() {
    this.element.scrollLeft = 0;
    this.element.scrollTop = 0;
    if (this.table.browser === "ie") {
      var event2 = document.createEvent("Event");
      event2.initEvent("scroll", false, true);
      this.element.dispatchEvent(event2);
    } else {
      this.element.dispatchEvent(new Event("scroll"));
    }
  };
  var VDomHoz = function VDomHoz2(table4) {
    this.table = table4;
    this.element = this.table.rowManager.tableElement;
    this.holderEl = this.table.rowManager.element;
    this.leftCol = 0;
    this.rightCol = 0;
    this.scrollLeft = 0;
    this.vDomScrollPosLeft = 0;
    this.vDomScrollPosRight = 0;
    this.vDomPadLeft = 0;
    this.vDomPadRight = 0;
    this.fitDataColAvg = 0;
    this.window = 200;
    this.initialized = false;
    this.columns = [];
    if (this.compatabilityCheck()) {
      this.initialize();
    }
  };
  VDomHoz.prototype.compatabilityCheck = function() {
    var options = this.table.options, frozen = false, ok = true;
    if (options.layout == "fitDataTable") {
      console.warn("Horizontal Vitrual DOM is not compatible with fitDataTable layout mode");
      ok = false;
    }
    if (options.responsiveLayout) {
      console.warn("Horizontal Vitrual DOM is not compatible with responsive columns");
      ok = false;
    }
    if (this.table.rtl) {
      console.warn("Horizontal Vitrual DOM is not currently compatible with RTL text direction");
      ok = false;
    }
    if (options.columns) {
      frozen = options.columns.find(function(col) {
        return col.frozen;
      });
      if (frozen) {
        console.warn("Horizontal Vitrual DOM is not compatible with frozen columns");
        ok = false;
      }
    }
    if (!ok) {
      options.virtualDomHoz = false;
    }
    return ok;
  };
  VDomHoz.prototype.initialize = function() {
    var _this17 = this;
    this.holderEl.addEventListener("scroll", function() {
      var left = _this17.holderEl.scrollLeft;
      if (_this17.scrollLeft != left) {
        _this17.scrollLeft = left;
        _this17.scroll(left - (_this17.vDomScrollPosLeft + _this17.window));
      }
    });
  };
  VDomHoz.prototype.deinitialize = function() {
    this.initialized = false;
  };
  VDomHoz.prototype.clear = function() {
    this.columns = [];
    this.leftCol = -1;
    this.rightCol = 0;
    this.vDomScrollPosLeft = 0;
    this.vDomScrollPosRight = 0;
    this.vDomPadLeft = 0;
    this.vDomPadRight = 0;
  };
  VDomHoz.prototype.dataChange = function() {
    var change = false, collsWidth = 0, colEnd = 0, group, row2, rowEl;
    if (this.table.options.layout === "fitData") {
      this.table.columnManager.columnsByIndex.forEach(function(column2) {
        if (!column2.definition.width && column2.visible) {
          change = true;
        }
      });
      if (change) {
        if (change && this.table.rowManager.getDisplayRows().length) {
          this.vDomScrollPosRight = this.scrollLeft + this.holderEl.clientWidth + this.window;
          if (this.table.options.groupBy) {
            group = this.table.modules.groupRows.getGroups(false)[0];
            row2 = group.getRows(false)[0];
          } else {
            row2 = this.table.rowManager.getDisplayRows()[0];
          }
          if (row2) {
            rowEl = row2.getElement();
            row2.generateCells();
            this.element.appendChild(rowEl);
            for (var colEnd = 0; colEnd < row2.cells.length; colEnd++) {
              var cell = row2.cells[colEnd];
              rowEl.appendChild(cell.getElement());
              cell.column.reinitializeWidth();
              collsWidth += cell.column.getWidth();
              if (collsWidth > this.vDomScrollPosRight) {
                break;
              }
            }
            rowEl.parentNode.removeChild(rowEl);
            this.fitDataColAvg = Math.floor(collsWidth / (colEnd + 1));
            for (colEnd; colEnd < this.table.columnManager.columnsByIndex.length; colEnd++) {
              this.table.columnManager.columnsByIndex[colEnd].setWidth(this.fitDataColAvg);
            }
            this.reinitialize(false, true);
          }
        }
      }
    } else {
      if (this.table.options.layout === "fitColumns") {
        this.table.modules.layout.layout();
        this.table.vdomHoz.reinitialize(false, true);
      }
    }
  };
  VDomHoz.prototype.fitDataLayoutOverride = function() {
    for (var _i5 = this.leftCol; _i5 <= this.rightCol; _i5++) {
      this.columns[_i5].reinitializeWidth();
    }
  };
  VDomHoz.prototype.reinitialize = function(update3, blockRedraw) {
    var _this18 = this;
    var old = {
      cols: this.columns,
      leftCol: this.leftCol,
      rightCol: this.rightCol
    };
    if (update3 && !this.initialized) {
      return;
    }
    this.clear();
    this.scrollLeft = this.holderEl.scrollLeft;
    this.vDomScrollPosLeft = this.scrollLeft - this.window;
    this.vDomScrollPosRight = this.scrollLeft + this.holderEl.clientWidth + this.window;
    var colPos = 0;
    this.table.columnManager.columnsByIndex.forEach(function(column2) {
      var config = {};
      if (column2.visible) {
        var width = column2.getWidth();
        config.leftPos = colPos;
        config.rightPos = colPos + width;
        if (colPos + width > _this18.vDomScrollPosLeft && colPos < _this18.vDomScrollPosRight) {
          if (_this18.leftCol == -1) {
            _this18.leftCol = _this18.columns.length;
            _this18.vDomPadLeft = colPos;
          }
          _this18.rightCol = _this18.columns.length;
        } else {
          if (_this18.leftCol !== -1) {
            _this18.vDomPadRight += width;
          }
        }
        _this18.columns.push(column2);
        column2.modules.vdomHoz = config;
        colPos += width;
      }
    });
    this.element.style.paddingLeft = this.vDomPadLeft + "px";
    this.element.style.paddingRight = this.vDomPadRight + "px";
    this.initialized = true;
    if (!blockRedraw) {
      if (!update3 || this.reinitChanged(old)) {
        this.renitializeRows();
      }
    }
    this.holderEl.scrollLeft = this.scrollLeft;
  };
  VDomHoz.prototype.reinitChanged = function(old) {
    var _this19 = this;
    var match = true;
    if (old.cols.length !== this.columns.length || old.leftCol !== this.leftCol || old.rightCol !== this.rightCol) {
      return true;
    }
    old.cols.forEach(function(col, i2) {
      if (col !== _this19.columns[i2]) {
        match = false;
      }
    });
    return !match;
  };
  VDomHoz.prototype.renitializeRows = function() {
    var _this20 = this;
    var rows = this.table.rowManager.getVisibleRows();
    rows.forEach(function(row2) {
      _this20.reinitializeRow(row2, true);
    });
  };
  VDomHoz.prototype.scroll = function(diff) {
    this.vDomScrollPosLeft += diff;
    this.vDomScrollPosRight += diff;
    if (diff > this.holderEl.clientWidth * 0.8) {
      this.reinitialize();
    } else {
      if (diff > 0) {
        this.addColRight();
        this.removeColLeft();
      } else {
        this.addColLeft();
        this.removeColRight();
      }
    }
  };
  VDomHoz.prototype.colPositionAdjust = function(start, end, diff) {
    for (var _i6 = start; _i6 < end; _i6++) {
      var column2 = this.columns[_i6];
      column2.modules.vdomHoz.leftPos -= diff;
      column2.modules.vdomHoz.rightPos -= diff;
    }
  };
  VDomHoz.prototype.addColRight = function() {
    var column2 = this.columns[this.rightCol + 1], rows, oldWidth, widthDiff;
    if (column2 && column2.modules.vdomHoz.leftPos <= this.vDomScrollPosRight) {
      rows = this.table.rowManager.getVisibleRows();
      rows.forEach(function(row2) {
        if (row2.type !== "group") {
          var cell = row2.getCell(column2);
          row2.getElement().appendChild(cell.getElement());
          cell.cellRendered();
        }
      });
      if (this.fitDataColAvg) {
        oldWidth = column2.getWidth();
        if (oldWidth === this.fitDataColAvg) {
          column2.reinitializeWidth();
          widthDiff = oldWidth - column2.getWidth();
          if (widthDiff) {
            column2.modules.vdomHoz.rightPos -= widthDiff;
            this.colPositionAdjust(this.rightCol + 1, this.columns.length, widthDiff);
          }
        }
      }
      this.rightCol++;
      if (this.rightCol >= this.columns.length - 1) {
        this.vDomPadRight = 0;
      } else {
        this.vDomPadRight -= column2.getWidth();
      }
      this.element.style.paddingRight = this.vDomPadRight + "px";
      this.addColRight();
    }
  };
  VDomHoz.prototype.addColLeft = function() {
    var column2 = this.columns[this.leftCol - 1], rows;
    if (column2 && column2.modules.vdomHoz.rightPos >= this.vDomScrollPosLeft) {
      var rows = this.table.rowManager.getVisibleRows();
      rows.forEach(function(row2) {
        if (row2.type !== "group") {
          var cell = row2.getCell(column2);
          row2.getElement().prepend(cell.getElement());
          cell.cellRendered();
        }
      });
      if (!this.leftCol) {
        this.vDomPadLeft = 0;
      } else {
        this.vDomPadLeft -= column2.getWidth();
      }
      this.element.style.paddingLeft = this.vDomPadLeft + "px";
      this.leftCol--;
      this.addColLeft();
    }
  };
  VDomHoz.prototype.removeColRight = function(column2) {
    var column2 = this.columns[this.rightCol], rows;
    if (column2 && column2.modules.vdomHoz.leftPos > this.vDomScrollPosRight) {
      rows = this.table.rowManager.getVisibleRows();
      column2.modules.vdomHoz.visible = false;
      rows.forEach(function(row2) {
        if (row2.type !== "group") {
          var cell = row2.getCell(column2);
          row2.getElement().removeChild(cell.getElement());
        }
      });
      this.vDomPadRight += column2.getWidth();
      this.element.style.paddingRight = this.vDomPadRight + "px";
      this.rightCol--;
      this.removeColRight();
    }
  };
  VDomHoz.prototype.removeColLeft = function() {
    var column2 = this.columns[this.leftCol], rows;
    if (column2 && column2.modules.vdomHoz.rightPos < this.vDomScrollPosLeft) {
      rows = this.table.rowManager.getVisibleRows();
      rows.forEach(function(row2) {
        if (row2.type !== "group") {
          var cell = row2.getCell(column2);
          row2.getElement().removeChild(cell.getElement());
        }
      });
      this.vDomPadLeft += column2.getWidth();
      this.element.style.paddingLeft = this.vDomPadLeft + "px";
      this.leftCol++;
      this.removeColLeft();
    }
  };
  VDomHoz.prototype.initializeRow = function(row2) {
    if (row2.type !== "group") {
      row2.modules.vdomHoz = {
        leftCol: this.leftCol,
        rightCol: this.rightCol
      };
      for (var _i7 = this.leftCol; _i7 <= this.rightCol; _i7++) {
        var column2 = this.columns[_i7];
        if (column2 && column2.visible) {
          var cell = row2.getCell(column2);
          row2.getElement().appendChild(cell.getElement());
          cell.cellRendered();
        }
      }
    }
  };
  VDomHoz.prototype.reinitializeRow = function(row2, force) {
    if (row2.type !== "group") {
      if (force || !row2.modules.vdomHoz || row2.modules.vdomHoz.leftCol !== this.leftCol || row2.modules.vdomHoz.rightCol !== this.rightCol) {
        var rowEl = row2.getElement();
        while (rowEl.firstChild) {
          rowEl.removeChild(rowEl.firstChild);
        }
        this.initializeRow(row2);
      }
    }
  };
  var RowComponent = function RowComponent2(row2) {
    this._row = row2;
  };
  RowComponent.prototype.getData = function(transform) {
    return this._row.getData(transform);
  };
  RowComponent.prototype.getElement = function() {
    return this._row.getElement();
  };
  RowComponent.prototype.getCells = function() {
    var cells = [];
    this._row.getCells().forEach(function(cell) {
      cells.push(cell.getComponent());
    });
    return cells;
  };
  RowComponent.prototype.getCell = function(column2) {
    var cell = this._row.getCell(column2);
    return cell ? cell.getComponent() : false;
  };
  RowComponent.prototype.getIndex = function() {
    return this._row.getData("data")[this._row.table.options.index];
  };
  RowComponent.prototype.getPosition = function(active) {
    return this._row.table.rowManager.getRowPosition(this._row, active);
  };
  RowComponent.prototype.delete = function() {
    return this._row.delete();
  };
  RowComponent.prototype.scrollTo = function() {
    return this._row.table.rowManager.scrollToRow(this._row);
  };
  RowComponent.prototype.pageTo = function() {
    if (this._row.table.modExists("page", true)) {
      return this._row.table.modules.page.setPageToRow(this._row);
    }
  };
  RowComponent.prototype.move = function(to, after) {
    this._row.moveToRow(to, after);
  };
  RowComponent.prototype.update = function(data) {
    return this._row.updateData(data);
  };
  RowComponent.prototype.normalizeHeight = function() {
    this._row.normalizeHeight(true);
  };
  RowComponent.prototype.select = function() {
    this._row.table.modules.selectRow.selectRows(this._row);
  };
  RowComponent.prototype.deselect = function() {
    this._row.table.modules.selectRow.deselectRows(this._row);
  };
  RowComponent.prototype.toggleSelect = function() {
    this._row.table.modules.selectRow.toggleRow(this._row);
  };
  RowComponent.prototype.isSelected = function() {
    return this._row.table.modules.selectRow.isRowSelected(this._row);
  };
  RowComponent.prototype._getSelf = function() {
    return this._row;
  };
  RowComponent.prototype.validate = function() {
    return this._row.validate();
  };
  RowComponent.prototype.freeze = function() {
    if (this._row.table.modExists("frozenRows", true)) {
      this._row.table.modules.frozenRows.freezeRow(this._row);
    }
  };
  RowComponent.prototype.unfreeze = function() {
    if (this._row.table.modExists("frozenRows", true)) {
      this._row.table.modules.frozenRows.unfreezeRow(this._row);
    }
  };
  RowComponent.prototype.isFrozen = function() {
    if (this._row.table.modExists("frozenRows", true)) {
      var index = this._row.table.modules.frozenRows.rows.indexOf(this._row);
      return index > -1;
    }
    return false;
  };
  RowComponent.prototype.treeCollapse = function() {
    if (this._row.table.modExists("dataTree", true)) {
      this._row.table.modules.dataTree.collapseRow(this._row);
    }
  };
  RowComponent.prototype.treeExpand = function() {
    if (this._row.table.modExists("dataTree", true)) {
      this._row.table.modules.dataTree.expandRow(this._row);
    }
  };
  RowComponent.prototype.treeToggle = function() {
    if (this._row.table.modExists("dataTree", true)) {
      this._row.table.modules.dataTree.toggleRow(this._row);
    }
  };
  RowComponent.prototype.getTreeParent = function() {
    if (this._row.table.modExists("dataTree", true)) {
      return this._row.table.modules.dataTree.getTreeParent(this._row);
    }
    return false;
  };
  RowComponent.prototype.getTreeChildren = function() {
    if (this._row.table.modExists("dataTree", true)) {
      return this._row.table.modules.dataTree.getTreeChildren(this._row, true);
    }
    return false;
  };
  RowComponent.prototype.addTreeChild = function(data, pos, index) {
    if (this._row.table.modExists("dataTree", true)) {
      return this._row.table.modules.dataTree.addTreeChildRow(this._row, data, pos, index);
    }
    return false;
  };
  RowComponent.prototype.reformat = function() {
    return this._row.reinitialize();
  };
  RowComponent.prototype.getGroup = function() {
    return this._row.getGroup().getComponent();
  };
  RowComponent.prototype.getTable = function() {
    return this._row.table;
  };
  RowComponent.prototype.getNextRow = function() {
    var row2 = this._row.nextRow();
    return row2 ? row2.getComponent() : row2;
  };
  RowComponent.prototype.getPrevRow = function() {
    var row2 = this._row.prevRow();
    return row2 ? row2.getComponent() : row2;
  };
  var Row = function Row2(data, parent) {
    var type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "row";
    this.table = parent.table;
    this.parent = parent;
    this.data = {};
    this.type = type;
    this.element = false;
    this.modules = {};
    this.cells = [];
    this.height = 0;
    this.heightStyled = "";
    this.manualHeight = false;
    this.outerHeight = 0;
    this.initialized = false;
    this.heightInitialized = false;
    this.component = null;
    this.created = false;
    this.setData(data);
  };
  Row.prototype.create = function() {
    if (!this.created) {
      this.created = true;
      this.generateElement();
    }
  };
  Row.prototype.createElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-row");
    el.setAttribute("role", "row");
    this.element = el;
  };
  Row.prototype.getElement = function() {
    this.create();
    return this.element;
  };
  Row.prototype.detachElement = function() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  };
  Row.prototype.generateElement = function() {
    var self2 = this, dblTap, tapHold, tap;
    this.createElement();
    if (self2.table.options.selectable !== false && self2.table.modExists("selectRow")) {
      self2.table.modules.selectRow.initializeRow(this);
    }
    if (self2.table.options.movableRows !== false && self2.table.modExists("moveRow")) {
      self2.table.modules.moveRow.initializeRow(this);
    }
    if (self2.table.options.dataTree !== false && self2.table.modExists("dataTree")) {
      self2.table.modules.dataTree.initializeRow(this);
    }
    if (self2.table.options.responsiveLayout === "collapse" && self2.table.modExists("responsiveLayout")) {
      self2.table.modules.responsiveLayout.initializeRow(this);
    }
    if ((self2.table.options.rowContextMenu || self2.table.options.rowClickMenu) && this.table.modExists("menu")) {
      self2.table.modules.menu.initializeRow(this);
    }
    if (self2.table.options.rowClick) {
      self2.element.addEventListener("click", function(e2) {
        self2.table.options.rowClick(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowDblClick) {
      self2.element.addEventListener("dblclick", function(e2) {
        self2.table.options.rowDblClick(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowContext) {
      self2.element.addEventListener("contextmenu", function(e2) {
        self2.table.options.rowContext(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowMouseEnter) {
      self2.element.addEventListener("mouseenter", function(e2) {
        self2.table.options.rowMouseEnter(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowMouseLeave) {
      self2.element.addEventListener("mouseleave", function(e2) {
        self2.table.options.rowMouseLeave(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowMouseOver) {
      self2.element.addEventListener("mouseover", function(e2) {
        self2.table.options.rowMouseOver(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowMouseOut) {
      self2.element.addEventListener("mouseout", function(e2) {
        self2.table.options.rowMouseOut(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowMouseMove) {
      self2.element.addEventListener("mousemove", function(e2) {
        self2.table.options.rowMouseMove(e2, self2.getComponent());
      });
    }
    if (self2.table.options.rowTap) {
      tap = false;
      self2.element.addEventListener("touchstart", function(e2) {
        tap = true;
      }, { passive: true });
      self2.element.addEventListener("touchend", function(e2) {
        if (tap) {
          self2.table.options.rowTap(e2, self2.getComponent());
        }
        tap = false;
      });
    }
    if (self2.table.options.rowDblTap) {
      dblTap = null;
      self2.element.addEventListener("touchend", function(e2) {
        if (dblTap) {
          clearTimeout(dblTap);
          dblTap = null;
          self2.table.options.rowDblTap(e2, self2.getComponent());
        } else {
          dblTap = setTimeout(function() {
            clearTimeout(dblTap);
            dblTap = null;
          }, 300);
        }
      });
    }
    if (self2.table.options.rowTapHold) {
      tapHold = null;
      self2.element.addEventListener("touchstart", function(e2) {
        clearTimeout(tapHold);
        tapHold = setTimeout(function() {
          clearTimeout(tapHold);
          tapHold = null;
          tap = false;
          self2.table.options.rowTapHold(e2, self2.getComponent());
        }, 1e3);
      }, { passive: true });
      self2.element.addEventListener("touchend", function(e2) {
        clearTimeout(tapHold);
        tapHold = null;
      });
    }
  };
  Row.prototype.generateCells = function() {
    this.cells = this.table.columnManager.generateCells(this);
  };
  Row.prototype.initialize = function(force) {
    var _this21 = this;
    this.create();
    if (!this.initialized || force) {
      this.deleteCells();
      while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild);
      }
      if (this.table.modExists("frozenColumns")) {
        this.table.modules.frozenColumns.layoutRow(this);
      }
      this.generateCells();
      if (this.table.options.virtualDomHoz && this.table.vdomHoz.initialized) {
        this.table.vdomHoz.initializeRow(this);
      } else {
        this.cells.forEach(function(cell) {
          _this21.element.appendChild(cell.getElement());
          cell.cellRendered();
        });
      }
      if (force) {
        this.normalizeHeight();
      }
      if (this.table.options.dataTree && this.table.modExists("dataTree")) {
        this.table.modules.dataTree.layoutRow(this);
      }
      if (this.table.options.responsiveLayout === "collapse" && this.table.modExists("responsiveLayout")) {
        this.table.modules.responsiveLayout.layoutRow(this);
      }
      if (this.table.options.rowFormatter) {
        this.table.options.rowFormatter(this.getComponent());
      }
      if (this.table.options.resizableRows && this.table.modExists("resizeRows")) {
        this.table.modules.resizeRows.initializeRow(this);
      }
      this.initialized = true;
    } else {
      if (this.table.options.virtualDomHoz) {
        this.table.vdomHoz.reinitializeRow(this);
      }
    }
  };
  Row.prototype.reinitializeHeight = function() {
    this.heightInitialized = false;
    if (this.element && this.element.offsetParent !== null) {
      this.normalizeHeight(true);
    }
  };
  Row.prototype.reinitialize = function(children) {
    this.initialized = false;
    this.heightInitialized = false;
    if (!this.manualHeight) {
      this.height = 0;
      this.heightStyled = "";
    }
    if (this.element && this.element.offsetParent !== null) {
      this.initialize(true);
    }
    if (this.table.options.dataTree && this.table.modExists("dataTree", true)) {
      this.table.modules.dataTree.getTreeChildren(this, false, true).forEach(function(child) {
        child.reinitialize(true);
      });
    }
  };
  Row.prototype.calcHeight = function(force) {
    var maxHeight = 0, minHeight = this.table.options.resizableRows ? this.element.clientHeight : 0;
    this.cells.forEach(function(cell) {
      var height = cell.getHeight();
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    if (force) {
      this.height = Math.max(maxHeight, minHeight);
    } else {
      this.height = this.manualHeight ? this.height : Math.max(maxHeight, minHeight);
    }
    this.heightStyled = this.height ? this.height + "px" : "";
    this.outerHeight = this.element.offsetHeight;
  };
  Row.prototype.setCellHeight = function() {
    this.cells.forEach(function(cell) {
      cell.setHeight();
    });
    this.heightInitialized = true;
  };
  Row.prototype.clearCellHeight = function() {
    this.cells.forEach(function(cell) {
      cell.clearHeight();
    });
  };
  Row.prototype.normalizeHeight = function(force) {
    if (force) {
      this.clearCellHeight();
    }
    this.calcHeight(force);
    this.setCellHeight();
  };
  Row.prototype.setHeight = function(height, force) {
    if (this.height != height || force) {
      this.manualHeight = true;
      this.height = height;
      this.heightStyled = height ? height + "px" : "";
      this.setCellHeight();
      this.outerHeight = this.element.offsetHeight;
    }
  };
  Row.prototype.getHeight = function() {
    return this.outerHeight;
  };
  Row.prototype.getWidth = function() {
    return this.element.offsetWidth;
  };
  Row.prototype.deleteCell = function(cell) {
    var index = this.cells.indexOf(cell);
    if (index > -1) {
      this.cells.splice(index, 1);
    }
  };
  Row.prototype.setData = function(data) {
    if (this.table.modExists("mutator")) {
      data = this.table.modules.mutator.transformRow(data, "data");
    }
    this.data = data;
    if (this.table.options.reactiveData && this.table.modExists("reactiveData", true)) {
      this.table.modules.reactiveData.watchRow(this);
    }
  };
  Row.prototype.updateData = function(updatedData) {
    var _this22 = this;
    var visible2 = this.element && Tabulator.prototype.helpers.elVisible(this.element), tempData = {}, newRowData;
    return new Promise(function(resolve, reject) {
      if (typeof updatedData === "string") {
        updatedData = JSON.parse(updatedData);
      }
      if (_this22.table.options.reactiveData && _this22.table.modExists("reactiveData", true)) {
        _this22.table.modules.reactiveData.block();
      }
      if (_this22.table.modExists("mutator")) {
        tempData = Object.assign(tempData, _this22.data);
        tempData = Object.assign(tempData, updatedData);
        newRowData = _this22.table.modules.mutator.transformRow(tempData, "data", updatedData);
      } else {
        newRowData = updatedData;
      }
      for (var attrname in newRowData) {
        _this22.data[attrname] = newRowData[attrname];
      }
      if (_this22.table.options.reactiveData && _this22.table.modExists("reactiveData", true)) {
        _this22.table.modules.reactiveData.unblock();
      }
      for (var attrname in updatedData) {
        var columns2 = _this22.table.columnManager.getColumnsByFieldRoot(attrname);
        columns2.forEach(function(column2) {
          var cell = _this22.getCell(column2.getField());
          if (cell) {
            var value = column2.getFieldValue(newRowData);
            if (cell.getValue() != value) {
              cell.setValueProcessData(value);
              if (visible2) {
                cell.cellRendered();
              }
            }
          }
        });
      }
      if (_this22.table.options.groupUpdateOnCellEdit && _this22.table.options.groupBy && _this22.table.modExists("groupRows")) {
        _this22.table.modules.groupRows.reassignRowToGroup(_this22.row);
      }
      if (visible2) {
        _this22.normalizeHeight(true);
        if (_this22.table.options.rowFormatter) {
          _this22.table.options.rowFormatter(_this22.getComponent());
        }
      } else {
        _this22.initialized = false;
        _this22.height = 0;
        _this22.heightStyled = "";
      }
      if (_this22.table.options.dataTree !== false && _this22.table.modExists("dataTree") && _this22.table.modules.dataTree.redrawNeeded(updatedData)) {
        _this22.table.modules.dataTree.initializeRow(_this22);
        if (visible2) {
          _this22.table.modules.dataTree.layoutRow(_this22);
          _this22.table.rowManager.refreshActiveData("tree", false, true);
        }
      }
      _this22.table.options.rowUpdated.call(_this22.table, _this22.getComponent());
      if (_this22.table.options.dataChanged) {
        _this22.table.options.dataChanged.call(_this22.table, _this22.table.rowManager.getData());
      }
      resolve();
    });
  };
  Row.prototype.getData = function(transform) {
    if (transform) {
      if (this.table.modExists("accessor")) {
        return this.table.modules.accessor.transformRow(this, transform);
      }
    }
    return this.data;
  };
  Row.prototype.getCell = function(column2) {
    var match = false;
    column2 = this.table.columnManager.findColumn(column2);
    match = this.cells.find(function(cell) {
      return cell.column === column2;
    });
    return match;
  };
  Row.prototype.getCellIndex = function(findCell) {
    return this.cells.findIndex(function(cell) {
      return cell === findCell;
    });
  };
  Row.prototype.findNextEditableCell = function(index) {
    var nextCell = false;
    if (index < this.cells.length - 1) {
      for (var i2 = index + 1; i2 < this.cells.length; i2++) {
        var cell = this.cells[i2];
        if (cell.column.modules.edit && Tabulator.prototype.helpers.elVisible(cell.getElement())) {
          var allowEdit = true;
          if (typeof cell.column.modules.edit.check == "function") {
            allowEdit = cell.column.modules.edit.check(cell.getComponent());
          }
          if (allowEdit) {
            nextCell = cell;
            break;
          }
        }
      }
    }
    return nextCell;
  };
  Row.prototype.findPrevEditableCell = function(index) {
    var prevCell = false;
    if (index > 0) {
      for (var i2 = index - 1; i2 >= 0; i2--) {
        var cell = this.cells[i2], allowEdit = true;
        if (cell.column.modules.edit && Tabulator.prototype.helpers.elVisible(cell.getElement())) {
          if (typeof cell.column.modules.edit.check == "function") {
            allowEdit = cell.column.modules.edit.check(cell.getComponent());
          }
          if (allowEdit) {
            prevCell = cell;
            break;
          }
        }
      }
    }
    return prevCell;
  };
  Row.prototype.getCells = function() {
    return this.cells;
  };
  Row.prototype.nextRow = function() {
    var row2 = this.table.rowManager.nextDisplayRow(this, true);
    return row2 || false;
  };
  Row.prototype.prevRow = function() {
    var row2 = this.table.rowManager.prevDisplayRow(this, true);
    return row2 || false;
  };
  Row.prototype.moveToRow = function(to, before) {
    var toRow = this.table.rowManager.findRow(to);
    if (toRow) {
      this.table.rowManager.moveRowActual(this, toRow, !before);
      this.table.rowManager.refreshActiveData("display", false, true);
    } else {
      console.warn("Move Error - No matching row found:", to);
    }
  };
  Row.prototype.validate = function() {
    var invalid = [];
    this.cells.forEach(function(cell) {
      if (!cell.validate()) {
        invalid.push(cell.getComponent());
      }
    });
    return invalid.length ? invalid : true;
  };
  Row.prototype.delete = function() {
    var _this23 = this;
    return new Promise(function(resolve, reject) {
      var index, rows;
      if (_this23.table.options.history && _this23.table.modExists("history")) {
        if (_this23.table.options.groupBy && _this23.table.modExists("groupRows")) {
          rows = _this23.getGroup().rows;
          index = rows.indexOf(_this23);
          if (index) {
            index = rows[index - 1];
          }
        } else {
          index = _this23.table.rowManager.getRowIndex(_this23);
          if (index) {
            index = _this23.table.rowManager.rows[index - 1];
          }
        }
        _this23.table.modules.history.action("rowDelete", _this23, { data: _this23.getData(), pos: !index, index });
      }
      _this23.deleteActual();
      resolve();
    });
  };
  Row.prototype.deleteActual = function(blockRedraw) {
    var index = this.table.rowManager.getRowIndex(this);
    this.detatchModules();
    if (this.table.options.reactiveData && this.table.modExists("reactiveData", true)) {
    }
    if (this.modules.group) {
      this.modules.group.removeRow(this);
    }
    this.table.rowManager.deleteRow(this, blockRedraw);
    this.deleteCells();
    this.initialized = false;
    this.heightInitialized = false;
    this.element = false;
    if (this.table.options.dataTree && this.table.modExists("dataTree", true)) {
      this.table.modules.dataTree.rowDelete(this);
    }
    if (this.table.modExists("columnCalcs")) {
      if (this.table.options.groupBy && this.table.modExists("groupRows")) {
        this.table.modules.columnCalcs.recalcRowGroup(this);
      } else {
        this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
      }
    }
  };
  Row.prototype.detatchModules = function() {
    if (this.table.modExists("selectRow")) {
      this.table.modules.selectRow._deselectRow(this, true);
    }
    if (this.table.modExists("edit")) {
      if (this.table.modules.edit.currentCell.row === this) {
        this.table.modules.edit.cancelEdit();
      }
    }
    if (this.table.modExists("frozenRows")) {
      this.table.modules.frozenRows.detachRow(this);
    }
  };
  Row.prototype.deleteCells = function() {
    var cellCount = this.cells.length;
    for (var _i8 = 0; _i8 < cellCount; _i8++) {
      this.cells[0].delete();
    }
  };
  Row.prototype.wipe = function() {
    this.detatchModules();
    this.deleteCells();
    if (this.element) {
      while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild);
      }
      if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
    this.element = false;
    this.modules = {};
  };
  Row.prototype.getGroup = function() {
    return this.modules.group || false;
  };
  Row.prototype.getComponent = function() {
    if (!this.component) {
      this.component = new RowComponent(this);
    }
    return this.component;
  };
  var CellComponent = function CellComponent2(cell) {
    this._cell = cell;
  };
  CellComponent.prototype.getValue = function() {
    return this._cell.getValue();
  };
  CellComponent.prototype.getOldValue = function() {
    return this._cell.getOldValue();
  };
  CellComponent.prototype.getInitialValue = function() {
    return this._cell.initialValue;
  };
  CellComponent.prototype.getElement = function() {
    return this._cell.getElement();
  };
  CellComponent.prototype.getRow = function() {
    return this._cell.row.getComponent();
  };
  CellComponent.prototype.getData = function() {
    return this._cell.row.getData();
  };
  CellComponent.prototype.getField = function() {
    return this._cell.column.getField();
  };
  CellComponent.prototype.getColumn = function() {
    return this._cell.column.getComponent();
  };
  CellComponent.prototype.setValue = function(value, mutate) {
    if (typeof mutate == "undefined") {
      mutate = true;
    }
    this._cell.setValue(value, mutate);
  };
  CellComponent.prototype.restoreOldValue = function() {
    this._cell.setValueActual(this._cell.getOldValue());
  };
  CellComponent.prototype.restoreInitialValue = function() {
    this._cell.setValueActual(this._cell.initialValue);
  };
  CellComponent.prototype.edit = function(force) {
    return this._cell.edit(force);
  };
  CellComponent.prototype.cancelEdit = function() {
    this._cell.cancelEdit();
  };
  CellComponent.prototype.isEdited = function() {
    return !!this._cell.modules.edit && this._cell.modules.edit.edited;
  };
  CellComponent.prototype.clearEdited = function() {
    if (self.table.modExists("edit", true)) {
      this._cell.table.modules.edit.clearEdited(this._cell);
    }
  };
  CellComponent.prototype.isValid = function() {
    return this._cell.modules.validate ? !this._cell.modules.validate.invalid : true;
  };
  CellComponent.prototype.validate = function() {
    return this._cell.validate();
  };
  CellComponent.prototype.clearValidation = function() {
    if (this._cell.table.modExists("validate", true)) {
      this._cell.table.modules.validate.clearValidation(this._cell);
    }
  };
  CellComponent.prototype.nav = function() {
    return this._cell.nav();
  };
  CellComponent.prototype.checkHeight = function() {
    this._cell.checkHeight();
  };
  CellComponent.prototype.getTable = function() {
    return this._cell.table;
  };
  CellComponent.prototype._getSelf = function() {
    return this._cell;
  };
  var Cell = function Cell2(column2, row2) {
    this.table = column2.table;
    this.column = column2;
    this.row = row2;
    this.element = null;
    this.value = null;
    this.initialValue;
    this.oldValue = null;
    this.modules = {};
    this.height = null;
    this.width = null;
    this.minWidth = null;
    this.component = null;
    this.loaded = false;
    this.build();
  };
  Cell.prototype.build = function() {
    this.generateElement();
    this.setWidth();
    this._configureCell();
    this.setValueActual(this.column.getFieldValue(this.row.data));
    this.initialValue = this.value;
  };
  Cell.prototype.generateElement = function() {
    this.element = document.createElement("div");
    this.element.className = "tabulator-cell";
    this.element.setAttribute("role", "gridcell");
    this.element = this.element;
  };
  Cell.prototype._configureCell = function() {
    var self2 = this, cellEvents = self2.column.cellEvents, element = self2.element, field = this.column.getField(), vertAligns = {
      top: "flex-start",
      bottom: "flex-end",
      middle: "center"
    }, hozAligns = {
      left: "flex-start",
      right: "flex-end",
      center: "center"
    };
    element.style.textAlign = self2.column.hozAlign;
    if (self2.column.vertAlign) {
      element.style.display = "inline-flex";
      element.style.alignItems = vertAligns[self2.column.vertAlign] || "";
      if (self2.column.hozAlign) {
        element.style.justifyContent = hozAligns[self2.column.hozAlign] || "";
      }
    }
    if (field) {
      element.setAttribute("tabulator-field", field);
    }
    if (self2.column.definition.cssClass) {
      var classNames = self2.column.definition.cssClass.split(" ");
      classNames.forEach(function(className) {
        element.classList.add(className);
      });
    }
    if (this.table.options.tooltipGenerationMode === "hover") {
      element.addEventListener("mouseenter", function(e2) {
        self2._generateTooltip();
      });
    }
    self2._bindClickEvents(cellEvents);
    self2._bindTouchEvents(cellEvents);
    self2._bindMouseEvents(cellEvents);
    if (self2.column.modules.edit) {
      self2.table.modules.edit.bindEditor(self2);
    }
    if (self2.column.definition.rowHandle && self2.table.options.movableRows !== false && self2.table.modExists("moveRow")) {
      self2.table.modules.moveRow.initializeCell(self2);
    }
    if (!self2.column.visible) {
      self2.hide();
    }
  };
  Cell.prototype._bindClickEvents = function(cellEvents) {
    var self2 = this, element = self2.element;
    if (cellEvents.cellClick || self2.table.options.cellClick) {
      element.addEventListener("click", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellClick) {
          cellEvents.cellClick.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellClick) {
          self2.table.options.cellClick.call(self2.table, e2, component2);
        }
      });
    }
    if (cellEvents.cellDblClick || this.table.options.cellDblClick) {
      element.addEventListener("dblclick", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellDblClick) {
          cellEvents.cellDblClick.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellDblClick) {
          self2.table.options.cellDblClick.call(self2.table, e2, component2);
        }
      });
    } else {
      element.addEventListener("dblclick", function(e2) {
        if (self2.table.modExists("edit")) {
          if (self2.table.modules.edit.currentCell === self2) {
            return;
          }
        }
        e2.preventDefault();
        try {
          if (document.selection) {
            var range2 = document.body.createTextRange();
            range2.moveToElementText(self2.element);
            range2.select();
          } else if (window.getSelection) {
            var range2 = document.createRange();
            range2.selectNode(self2.element);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range2);
          }
        } catch (e3) {
        }
      });
    }
    if (cellEvents.cellContext || this.table.options.cellContext) {
      element.addEventListener("contextmenu", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellContext) {
          cellEvents.cellContext.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellContext) {
          self2.table.options.cellContext.call(self2.table, e2, component2);
        }
      });
    }
  };
  Cell.prototype._bindMouseEvents = function(cellEvents) {
    var self2 = this, element = self2.element;
    if (cellEvents.cellMouseEnter || self2.table.options.cellMouseEnter) {
      element.addEventListener("mouseenter", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellMouseEnter) {
          cellEvents.cellMouseEnter.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellMouseEnter) {
          self2.table.options.cellMouseEnter.call(self2.table, e2, component2);
        }
      });
    }
    if (cellEvents.cellMouseLeave || self2.table.options.cellMouseLeave) {
      element.addEventListener("mouseleave", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellMouseLeave) {
          cellEvents.cellMouseLeave.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellMouseLeave) {
          self2.table.options.cellMouseLeave.call(self2.table, e2, component2);
        }
      });
    }
    if (cellEvents.cellMouseOver || self2.table.options.cellMouseOver) {
      element.addEventListener("mouseover", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellMouseOver) {
          cellEvents.cellMouseOver.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellMouseOver) {
          self2.table.options.cellMouseOver.call(self2.table, e2, component2);
        }
      });
    }
    if (cellEvents.cellMouseOut || self2.table.options.cellMouseOut) {
      element.addEventListener("mouseout", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellMouseOut) {
          cellEvents.cellMouseOut.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellMouseOut) {
          self2.table.options.cellMouseOut.call(self2.table, e2, component2);
        }
      });
    }
    if (cellEvents.cellMouseMove || self2.table.options.cellMouseMove) {
      element.addEventListener("mousemove", function(e2) {
        var component2 = self2.getComponent();
        if (cellEvents.cellMouseMove) {
          cellEvents.cellMouseMove.call(self2.table, e2, component2);
        }
        if (self2.table.options.cellMouseMove) {
          self2.table.options.cellMouseMove.call(self2.table, e2, component2);
        }
      });
    }
  };
  Cell.prototype._bindTouchEvents = function(cellEvents) {
    var self2 = this, element = self2.element, dblTap, tapHold, tap;
    if (cellEvents.cellTap || this.table.options.cellTap) {
      tap = false;
      element.addEventListener("touchstart", function(e2) {
        tap = true;
      }, { passive: true });
      element.addEventListener("touchend", function(e2) {
        if (tap) {
          var component2 = self2.getComponent();
          if (cellEvents.cellTap) {
            cellEvents.cellTap.call(self2.table, e2, component2);
          }
          if (self2.table.options.cellTap) {
            self2.table.options.cellTap.call(self2.table, e2, component2);
          }
        }
        tap = false;
      });
    }
    if (cellEvents.cellDblTap || this.table.options.cellDblTap) {
      dblTap = null;
      element.addEventListener("touchend", function(e2) {
        if (dblTap) {
          clearTimeout(dblTap);
          dblTap = null;
          var component2 = self2.getComponent();
          if (cellEvents.cellDblTap) {
            cellEvents.cellDblTap.call(self2.table, e2, component2);
          }
          if (self2.table.options.cellDblTap) {
            self2.table.options.cellDblTap.call(self2.table, e2, component2);
          }
        } else {
          dblTap = setTimeout(function() {
            clearTimeout(dblTap);
            dblTap = null;
          }, 300);
        }
      });
    }
    if (cellEvents.cellTapHold || this.table.options.cellTapHold) {
      tapHold = null;
      element.addEventListener("touchstart", function(e2) {
        clearTimeout(tapHold);
        tapHold = setTimeout(function() {
          clearTimeout(tapHold);
          tapHold = null;
          tap = false;
          var component2 = self2.getComponent();
          if (cellEvents.cellTapHold) {
            cellEvents.cellTapHold.call(self2.table, e2, component2);
          }
          if (self2.table.options.cellTapHold) {
            self2.table.options.cellTapHold.call(self2.table, e2, component2);
          }
        }, 1e3);
      }, { passive: true });
      element.addEventListener("touchend", function(e2) {
        clearTimeout(tapHold);
        tapHold = null;
      });
    }
  };
  Cell.prototype._generateContents = function() {
    var val;
    if (this.table.modExists("format")) {
      val = this.table.modules.format.formatValue(this);
    } else {
      val = this.element.innerHTML = this.value;
    }
    switch (typeof val === "undefined" ? "undefined" : _typeof(val)) {
      case "object":
        if (val instanceof Node) {
          while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
          }
          this.element.appendChild(val);
        } else {
          this.element.innerHTML = "";
          if (val != null) {
            console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", val);
          }
        }
        break;
      case "undefined":
      case "null":
        this.element.innerHTML = "";
        break;
      default:
        this.element.innerHTML = val;
    }
  };
  Cell.prototype.cellRendered = function() {
    if (this.table.modExists("format") && this.table.modules.format.cellRendered) {
      this.table.modules.format.cellRendered(this);
    }
  };
  Cell.prototype._generateTooltip = function() {
    var tooltip = this.column.tooltip;
    if (tooltip) {
      if (tooltip === true) {
        tooltip = this.value;
      } else if (typeof tooltip == "function") {
        tooltip = tooltip(this.getComponent());
        if (tooltip === false) {
          tooltip = "";
        }
      }
      if (typeof tooltip === "undefined") {
        tooltip = "";
      }
      this.element.setAttribute("title", tooltip);
    } else {
      this.element.setAttribute("title", "");
    }
  };
  Cell.prototype.getElement = function(containerOnly) {
    if (!this.loaded) {
      this.loaded = true;
      if (!containerOnly) {
        this.layoutElement();
      }
    }
    return this.element;
  };
  Cell.prototype.getValue = function() {
    return this.value;
  };
  Cell.prototype.getOldValue = function() {
    return this.oldValue;
  };
  Cell.prototype.setValue = function(value, mutate) {
    var changed = this.setValueProcessData(value, mutate), component2;
    if (changed) {
      if (this.table.options.history && this.table.modExists("history")) {
        this.table.modules.history.action("cellEdit", this, { oldValue: this.oldValue, newValue: this.value });
      }
      component2 = this.getComponent();
      if (this.column.cellEvents.cellEdited) {
        this.column.cellEvents.cellEdited.call(this.table, component2);
      }
      if (this.table.options.groupUpdateOnCellEdit && this.table.options.groupBy && this.table.modExists("groupRows")) {
        this.table.modules.groupRows.reassignRowToGroup(this.row);
      }
      this.cellRendered();
      this.table.options.cellEdited.call(this.table, component2);
      if (this.table.options.dataChanged) {
        this.table.options.dataChanged.call(this.table, this.table.rowManager.getData());
      }
    }
  };
  Cell.prototype.setValueProcessData = function(value, mutate) {
    var changed = false;
    if (this.value != value) {
      changed = true;
      if (mutate) {
        if (this.column.modules.mutate) {
          value = this.table.modules.mutator.transformCell(this, value);
        }
      }
    }
    this.setValueActual(value);
    if (changed && this.table.modExists("columnCalcs")) {
      if (this.column.definition.topCalc || this.column.definition.bottomCalc) {
        if (this.table.options.groupBy && this.table.modExists("groupRows")) {
          if (this.table.options.columnCalcs == "table" || this.table.options.columnCalcs == "both") {
            this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
          }
          if (this.table.options.columnCalcs != "table") {
            this.table.modules.columnCalcs.recalcRowGroup(this.row);
          }
        } else {
          this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
        }
      }
    }
    return changed;
  };
  Cell.prototype.setValueActual = function(value) {
    this.oldValue = this.value;
    this.value = value;
    if (this.table.options.reactiveData && this.table.modExists("reactiveData")) {
      this.table.modules.reactiveData.block();
    }
    this.column.setFieldValue(this.row.data, value);
    if (this.table.options.reactiveData && this.table.modExists("reactiveData")) {
      this.table.modules.reactiveData.unblock();
    }
    if (this.loaded) {
      this.layoutElement();
    }
  };
  Cell.prototype.layoutElement = function() {
    this._generateContents();
    this._generateTooltip();
    if (this.table.options.resizableColumns && this.table.modExists("resizeColumns") && this.row.type === "row") {
      this.table.modules.resizeColumns.initializeColumn("cell", this.column, this.element);
    }
    if ((this.column.definition.contextMenu || this.column.definition.clickMenu) && this.table.modExists("menu")) {
      this.table.modules.menu.initializeCell(this);
    }
    if (this.table.modExists("frozenColumns")) {
      this.table.modules.frozenColumns.layoutElement(this.element, this.column);
    }
  };
  Cell.prototype.setWidth = function() {
    this.width = this.column.width;
    this.element.style.width = this.column.widthStyled;
  };
  Cell.prototype.clearWidth = function() {
    this.width = "";
    this.element.style.width = "";
  };
  Cell.prototype.getWidth = function() {
    return this.width || this.element.offsetWidth;
  };
  Cell.prototype.setMinWidth = function() {
    this.minWidth = this.column.minWidth;
    this.element.style.minWidth = this.column.minWidthStyled;
  };
  Cell.prototype.setMaxWidth = function() {
    this.maxWidth = this.column.maxWidth;
    this.element.style.maxWidth = this.column.maxWidthStyled;
  };
  Cell.prototype.checkHeight = function() {
    this.row.reinitializeHeight();
  };
  Cell.prototype.clearHeight = function() {
    this.element.style.height = "";
    this.height = null;
  };
  Cell.prototype.setHeight = function() {
    this.height = this.row.height;
    this.element.style.height = this.row.heightStyled;
  };
  Cell.prototype.getHeight = function() {
    return this.height || this.element.offsetHeight;
  };
  Cell.prototype.show = function() {
    this.element.style.display = this.column.vertAlign ? "inline-flex" : "";
  };
  Cell.prototype.hide = function() {
    this.element.style.display = "none";
  };
  Cell.prototype.edit = function(force) {
    if (this.table.modExists("edit", true)) {
      return this.table.modules.edit.editCell(this, force);
    }
  };
  Cell.prototype.cancelEdit = function() {
    if (this.table.modExists("edit", true)) {
      var editing = this.table.modules.edit.getCurrentCell();
      if (editing && editing._getSelf() === this) {
        this.table.modules.edit.cancelEdit();
      } else {
        console.warn("Cancel Editor Error - This cell is not currently being edited ");
      }
    }
  };
  Cell.prototype.validate = function() {
    if (this.column.modules.validate && this.table.modExists("validate", true)) {
      var valid = this.table.modules.validate.validate(this.column.modules.validate, this, this.getValue());
      return valid === true;
    } else {
      return true;
    }
  };
  Cell.prototype.delete = function() {
    if (!this.table.rowManager.redrawBlock && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    if (this.modules.validate && this.modules.validate.invalid) {
      this.table.modules.validate.clearValidation(this);
    }
    if (this.modules.edit && this.modules.edit.edited) {
      this.table.modules.edit.clearEdited(this);
    }
    if (this.table.options.history) {
      this.table.modules.history.clearComponentHistory(this);
    }
    this.element = false;
    this.column.deleteCell(this);
    this.row.deleteCell(this);
    this.calcs = {};
  };
  Cell.prototype.nav = function() {
    var self2 = this, nextCell = false, index = this.row.getCellIndex(this);
    return {
      next: function next() {
        var nextCell2 = this.right(), nextRow;
        if (!nextCell2) {
          nextRow = self2.table.rowManager.nextDisplayRow(self2.row, true);
          if (nextRow) {
            nextCell2 = nextRow.findNextEditableCell(-1);
            if (nextCell2) {
              nextCell2.edit();
              return true;
            }
          }
        } else {
          return true;
        }
        return false;
      },
      prev: function prev() {
        var nextCell2 = this.left(), prevRow;
        if (!nextCell2) {
          prevRow = self2.table.rowManager.prevDisplayRow(self2.row, true);
          if (prevRow) {
            nextCell2 = prevRow.findPrevEditableCell(prevRow.cells.length);
            if (nextCell2) {
              nextCell2.edit();
              return true;
            }
          }
        } else {
          return true;
        }
        return false;
      },
      left: function left() {
        nextCell = self2.row.findPrevEditableCell(index);
        if (nextCell) {
          nextCell.edit();
          return true;
        } else {
          return false;
        }
      },
      right: function right() {
        nextCell = self2.row.findNextEditableCell(index);
        if (nextCell) {
          nextCell.edit();
          return true;
        } else {
          return false;
        }
      },
      up: function up() {
        var nextRow = self2.table.rowManager.prevDisplayRow(self2.row, true);
        if (nextRow) {
          nextRow.cells[index].edit();
        }
      },
      down: function down() {
        var nextRow = self2.table.rowManager.nextDisplayRow(self2.row, true);
        if (nextRow) {
          nextRow.cells[index].edit();
        }
      }
    };
  };
  Cell.prototype.getIndex = function() {
    this.row.getCellIndex(this);
  };
  Cell.prototype.getComponent = function() {
    if (!this.component) {
      this.component = new CellComponent(this);
    }
    return this.component;
  };
  var FooterManager = function FooterManager2(table4) {
    this.table = table4;
    this.active = false;
    this.element = this.createElement();
    this.external = false;
    this.links = [];
    this._initialize();
  };
  FooterManager.prototype.createElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-footer");
    return el;
  };
  FooterManager.prototype._initialize = function(element) {
    if (this.table.options.footerElement) {
      switch (_typeof(this.table.options.footerElement)) {
        case "string":
          if (this.table.options.footerElement[0] === "<") {
            this.element.innerHTML = this.table.options.footerElement;
          } else {
            this.external = true;
            this.element = document.querySelector(this.table.options.footerElement);
          }
          break;
        default:
          this.element = this.table.options.footerElement;
          break;
      }
    }
  };
  FooterManager.prototype.getElement = function() {
    return this.element;
  };
  FooterManager.prototype.append = function(element, parent) {
    this.activate(parent);
    this.element.appendChild(element);
    this.table.rowManager.adjustTableSize();
  };
  FooterManager.prototype.prepend = function(element, parent) {
    this.activate(parent);
    this.element.insertBefore(element, this.element.firstChild);
    this.table.rowManager.adjustTableSize();
  };
  FooterManager.prototype.remove = function(element) {
    element.parentNode.removeChild(element);
    this.deactivate();
  };
  FooterManager.prototype.deactivate = function(force) {
    if (!this.element.firstChild || force) {
      if (!this.external) {
        this.element.parentNode.removeChild(this.element);
      }
      this.active = false;
    }
  };
  FooterManager.prototype.activate = function(parent) {
    if (!this.active) {
      this.active = true;
      if (!this.external) {
        this.table.element.appendChild(this.getElement());
        this.table.element.style.display = "";
      }
    }
    if (parent) {
      this.links.push(parent);
    }
  };
  FooterManager.prototype.redraw = function() {
    this.links.forEach(function(link2) {
      link2.footerRedraw();
    });
  };
  var Tabulator = function Tabulator2(element, options) {
    this.options = {};
    this.columnManager = null;
    this.rowManager = null;
    this.footerManager = null;
    this.vdomHoz = null;
    this.browser = "";
    this.browserSlow = false;
    this.browserMobile = false;
    this.rtl = false;
    this.modules = {};
    if (this.initializeElement(element)) {
      this.initializeOptions(options || {});
      this._create();
    }
    Tabulator2.prototype.comms.register(this);
  };
  Tabulator.prototype.defaultOptions = {
    height: false,
    minHeight: false,
    maxHeight: false,
    layout: "fitData",
    layoutColumnsOnNewData: false,
    columnMinWidth: 40,
    columnMaxWidth: false,
    columnHeaderVertAlign: "top",
    columnVertAlign: false,
    resizableColumns: true,
    resizableRows: false,
    autoResize: true,
    columns: [],
    cellHozAlign: "",
    cellVertAlign: "",
    headerHozAlign: "",
    data: [],
    autoColumns: false,
    autoColumnsDefinitions: false,
    reactiveData: false,
    nestedFieldSeparator: ".",
    tooltips: false,
    tooltipsHeader: false,
    tooltipGenerationMode: "load",
    initialSort: false,
    initialFilter: false,
    initialHeaderFilter: false,
    columnHeaderSortMulti: true,
    sortOrderReverse: false,
    headerSort: true,
    headerSortTristate: false,
    headerSortElement: "<div class='tabulator-arrow'></div>",
    footerElement: false,
    index: "id",
    textDirection: "auto",
    keybindings: [],
    tabEndNewRow: false,
    invalidOptionWarnings: true,
    clipboard: false,
    clipboardCopyStyled: true,
    clipboardCopyConfig: false,
    clipboardCopyFormatter: false,
    clipboardCopyRowRange: "active",
    clipboardPasteParser: "table",
    clipboardPasteAction: "insert",
    clipboardCopied: function clipboardCopied() {
    },
    clipboardPasted: function clipboardPasted() {
    },
    clipboardPasteError: function clipboardPasteError() {
    },
    downloadDataFormatter: false,
    downloadReady: function downloadReady(data, blob) {
      return blob;
    },
    downloadComplete: false,
    downloadConfig: {},
    downloadRowRange: "active",
    dataTree: false,
    dataTreeFilter: true,
    dataTreeSort: true,
    dataTreeElementColumn: false,
    dataTreeBranchElement: true,
    dataTreeChildIndent: 9,
    dataTreeChildField: "_children",
    dataTreeCollapseElement: false,
    dataTreeExpandElement: false,
    dataTreeStartExpanded: false,
    dataTreeRowExpanded: function dataTreeRowExpanded() {
    },
    dataTreeRowCollapsed: function dataTreeRowCollapsed() {
    },
    dataTreeChildColumnCalcs: false,
    dataTreeSelectPropagate: false,
    printAsHtml: false,
    printFormatter: false,
    printHeader: false,
    printFooter: false,
    printCopyStyle: true,
    printStyled: true,
    printVisibleRows: true,
    printRowRange: "visible",
    printConfig: {},
    addRowPos: "bottom",
    selectable: "highlight",
    selectableRangeMode: "drag",
    selectableRollingSelection: true,
    selectablePersistence: true,
    selectableCheck: function selectableCheck(data, row2) {
      return true;
    },
    headerFilterLiveFilterDelay: 300,
    headerFilterPlaceholder: false,
    headerVisible: true,
    history: false,
    locale: false,
    langs: {},
    virtualDom: true,
    virtualDomBuffer: 0,
    virtualDomHoz: false,
    persistentLayout: false,
    persistentSort: false,
    persistentFilter: false,
    persistenceID: "",
    persistenceMode: true,
    persistenceReaderFunc: false,
    persistenceWriterFunc: false,
    persistence: false,
    responsiveLayout: false,
    responsiveLayoutCollapseStartOpen: true,
    responsiveLayoutCollapseUseFormatters: true,
    responsiveLayoutCollapseFormatter: false,
    pagination: false,
    paginationSize: false,
    paginationInitialPage: 1,
    paginationButtonCount: 5,
    paginationSizeSelector: false,
    paginationElement: false,
    paginationDataSent: {},
    paginationDataReceived: {},
    paginationAddRow: "page",
    ajaxURL: false,
    ajaxURLGenerator: false,
    ajaxParams: {},
    ajaxConfig: "get",
    ajaxContentType: "form",
    ajaxRequestFunc: false,
    ajaxLoader: true,
    ajaxLoaderLoading: false,
    ajaxLoaderError: false,
    ajaxFiltering: false,
    ajaxSorting: false,
    ajaxProgressiveLoad: false,
    ajaxProgressiveLoadDelay: 0,
    ajaxProgressiveLoadScrollMargin: 0,
    groupBy: false,
    groupStartOpen: true,
    groupValues: false,
    groupUpdateOnCellEdit: false,
    groupHeader: false,
    groupHeaderPrint: null,
    groupHeaderClipboard: null,
    groupHeaderHtmlOutput: null,
    groupHeaderDownload: null,
    htmlOutputConfig: false,
    movableColumns: false,
    movableRows: false,
    movableRowsConnectedTables: false,
    movableRowsConnectedElements: false,
    movableRowsSender: false,
    movableRowsReceiver: "insert",
    movableRowsSendingStart: function movableRowsSendingStart() {
    },
    movableRowsSent: function movableRowsSent() {
    },
    movableRowsSentFailed: function movableRowsSentFailed() {
    },
    movableRowsSendingStop: function movableRowsSendingStop() {
    },
    movableRowsReceivingStart: function movableRowsReceivingStart() {
    },
    movableRowsReceived: function movableRowsReceived() {
    },
    movableRowsReceivedFailed: function movableRowsReceivedFailed() {
    },
    movableRowsReceivingStop: function movableRowsReceivingStop() {
    },
    movableRowsElementDrop: function movableRowsElementDrop() {
    },
    scrollToRowPosition: "top",
    scrollToRowIfVisible: true,
    scrollToColumnPosition: "left",
    scrollToColumnIfVisible: true,
    rowFormatter: false,
    rowFormatterPrint: null,
    rowFormatterClipboard: null,
    rowFormatterHtmlOutput: null,
    placeholder: false,
    tableBuilding: function tableBuilding() {
    },
    tableBuilt: function tableBuilt() {
    },
    renderStarted: function renderStarted() {
    },
    renderComplete: function renderComplete() {
    },
    rowClick: false,
    rowDblClick: false,
    rowContext: false,
    rowTap: false,
    rowDblTap: false,
    rowTapHold: false,
    rowMouseEnter: false,
    rowMouseLeave: false,
    rowMouseOver: false,
    rowMouseOut: false,
    rowMouseMove: false,
    rowContextMenu: false,
    rowClickMenu: false,
    rowAdded: function rowAdded() {
    },
    rowDeleted: function rowDeleted() {
    },
    rowMoved: function rowMoved() {
    },
    rowUpdated: function rowUpdated() {
    },
    rowSelectionChanged: function rowSelectionChanged() {
    },
    rowSelected: function rowSelected() {
    },
    rowDeselected: function rowDeselected() {
    },
    rowResized: function rowResized() {
    },
    cellClick: false,
    cellDblClick: false,
    cellContext: false,
    cellTap: false,
    cellDblTap: false,
    cellTapHold: false,
    cellMouseEnter: false,
    cellMouseLeave: false,
    cellMouseOver: false,
    cellMouseOut: false,
    cellMouseMove: false,
    cellEditing: function cellEditing() {
    },
    cellEdited: function cellEdited() {
    },
    cellEditCancelled: function cellEditCancelled() {
    },
    columnMoved: false,
    columnResized: function columnResized() {
    },
    columnTitleChanged: function columnTitleChanged() {
    },
    columnVisibilityChanged: function columnVisibilityChanged() {
    },
    htmlImporting: function htmlImporting() {
    },
    htmlImported: function htmlImported() {
    },
    dataLoading: function dataLoading() {
    },
    dataLoaded: function dataLoaded() {
    },
    dataEdited: false,
    dataChanged: false,
    ajaxRequesting: function ajaxRequesting() {
    },
    ajaxResponse: false,
    ajaxError: function ajaxError() {
    },
    dataFiltering: false,
    dataFiltered: false,
    dataSorting: function dataSorting() {
    },
    dataSorted: function dataSorted() {
    },
    groupToggleElement: "arrow",
    groupClosedShowCalcs: false,
    dataGrouping: function dataGrouping() {
    },
    dataGrouped: false,
    groupVisibilityChanged: function groupVisibilityChanged() {
    },
    groupClick: false,
    groupDblClick: false,
    groupContext: false,
    groupContextMenu: false,
    groupClickMenu: false,
    groupTap: false,
    groupDblTap: false,
    groupTapHold: false,
    columnCalcs: true,
    pageLoaded: function pageLoaded() {
    },
    localized: function localized() {
    },
    validationMode: "blocking",
    validationFailed: function validationFailed() {
    },
    historyUndo: function historyUndo() {
    },
    historyRedo: function historyRedo() {
    },
    scrollHorizontal: function scrollHorizontal() {
    },
    scrollVertical: function scrollVertical() {
    }
  };
  Tabulator.prototype.initializeOptions = function(options) {
    if (options.invalidOptionWarnings !== false) {
      for (var key in options) {
        if (typeof this.defaultOptions[key] === "undefined") {
          console.warn("Invalid table constructor option:", key);
        }
      }
    }
    for (var key in this.defaultOptions) {
      if (key in options) {
        this.options[key] = options[key];
      } else {
        if (Array.isArray(this.defaultOptions[key])) {
          this.options[key] = Object.assign([], this.defaultOptions[key]);
        } else if (_typeof(this.defaultOptions[key]) === "object" && this.defaultOptions[key] !== null) {
          this.options[key] = Object.assign({}, this.defaultOptions[key]);
        } else {
          this.options[key] = this.defaultOptions[key];
        }
      }
    }
  };
  Tabulator.prototype.initializeElement = function(element) {
    if (typeof HTMLElement !== "undefined" && element instanceof HTMLElement) {
      this.element = element;
      return true;
    } else if (typeof element === "string") {
      this.element = document.querySelector(element);
      if (this.element) {
        return true;
      } else {
        console.error("Tabulator Creation Error - no element found matching selector: ", element);
        return false;
      }
    } else {
      console.error("Tabulator Creation Error - Invalid element provided:", element);
      return false;
    }
  };
  Tabulator.prototype.rtlCheck = function() {
    var style = window.getComputedStyle(this.element);
    switch (this.options.textDirection) {
      case "auto":
        if (style.direction !== "rtl") {
          break;
        }
        ;
      case "rtl":
        this.element.classList.add("tabulator-rtl");
        this.rtl = true;
        break;
      case "ltr":
        this.element.classList.add("tabulator-ltr");
      default:
        this.rtl = false;
    }
  };
  Tabulator.prototype._mapDepricatedFunctionality = function() {
    if (this.options.persistentLayout || this.options.persistentSort || this.options.persistentFilter) {
      if (!this.options.persistence) {
        this.options.persistence = {};
      }
    }
    if (this.options.dataEdited) {
      console.warn("DEPRECATION WARNING - dataEdited option has been deprecated, please use the dataChanged option instead");
      this.options.dataChanged = this.options.dataEdited;
    }
    if (this.options.downloadDataFormatter) {
      console.warn("DEPRECATION WARNING - downloadDataFormatter option has been deprecated");
    }
    if (typeof this.options.clipboardCopyHeader !== "undefined") {
      this.options.columnHeaders = this.options.clipboardCopyHeader;
      console.warn("DEPRECATION WARNING - clipboardCopyHeader option has been deprecated, please use the columnHeaders property on the clipboardCopyConfig option");
    }
    if (this.options.printVisibleRows !== true) {
      console.warn("printVisibleRows option is deprecated, you should now use the printRowRange option");
      this.options.persistence.printRowRange = "active";
    }
    if (this.options.printCopyStyle !== true) {
      console.warn("printCopyStyle option is deprecated, you should now use the printStyled option");
      this.options.persistence.printStyled = this.options.printCopyStyle;
    }
    if (this.options.persistentLayout) {
      console.warn("persistentLayout option is deprecated, you should now use the persistence option");
      if (this.options.persistence !== true && typeof this.options.persistence.columns === "undefined") {
        this.options.persistence.columns = true;
      }
    }
    if (this.options.persistentSort) {
      console.warn("persistentSort option is deprecated, you should now use the persistence option");
      if (this.options.persistence !== true && typeof this.options.persistence.sort === "undefined") {
        this.options.persistence.sort = true;
      }
    }
    if (this.options.persistentFilter) {
      console.warn("persistentFilter option is deprecated, you should now use the persistence option");
      if (this.options.persistence !== true && typeof this.options.persistence.filter === "undefined") {
        this.options.persistence.filter = true;
      }
    }
    if (this.options.columnVertAlign) {
      console.warn("columnVertAlign option is deprecated, you should now use the columnHeaderVertAlign option");
      this.options.columnHeaderVertAlign = this.options.columnVertAlign;
    }
  };
  Tabulator.prototype._clearSelection = function() {
    this.element.classList.add("tabulator-block-select");
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      document.selection.empty();
    }
    this.element.classList.remove("tabulator-block-select");
  };
  Tabulator.prototype._create = function() {
    this._clearObjectPointers();
    this._mapDepricatedFunctionality();
    this.bindModules();
    this.rtlCheck();
    if (this.element.tagName === "TABLE") {
      if (this.modExists("htmlTableImport", true)) {
        this.modules.htmlTableImport.parseTable();
      }
    }
    this.columnManager = new ColumnManager(this);
    this.rowManager = new RowManager(this);
    this.footerManager = new FooterManager(this);
    this.columnManager.setRowManager(this.rowManager);
    this.rowManager.setColumnManager(this.columnManager);
    if (this.options.virtualDomHoz) {
      this.vdomHoz = new VDomHoz(this);
    }
    this._buildElement();
    this._loadInitialData();
  };
  Tabulator.prototype._clearObjectPointers = function() {
    this.options.columns = this.options.columns.slice(0);
    if (!this.options.reactiveData) {
      this.options.data = this.options.data.slice(0);
    }
  };
  Tabulator.prototype._buildElement = function() {
    var _this24 = this;
    var element = this.element, mod = this.modules, options = this.options;
    options.tableBuilding.call(this);
    element.classList.add("tabulator");
    element.setAttribute("role", "grid");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    if (options.height) {
      options.height = isNaN(options.height) ? options.height : options.height + "px";
      element.style.height = options.height;
    }
    if (options.minHeight !== false) {
      options.minHeight = isNaN(options.minHeight) ? options.minHeight : options.minHeight + "px";
      element.style.minHeight = options.minHeight;
    }
    if (options.maxHeight !== false) {
      options.maxHeight = isNaN(options.maxHeight) ? options.maxHeight : options.maxHeight + "px";
      element.style.maxHeight = options.maxHeight;
    }
    this.columnManager.initialize();
    this.rowManager.initialize();
    this._detectBrowser();
    if (this.modExists("layout", true)) {
      mod.layout.initialize(options.layout);
    }
    mod.localize.initialize();
    if (options.headerFilterPlaceholder !== false) {
      mod.localize.setHeaderFilterPlaceholder(options.headerFilterPlaceholder);
    }
    for (var locale in options.langs) {
      mod.localize.installLang(locale, options.langs[locale]);
    }
    mod.localize.setLocale(options.locale);
    if (typeof options.placeholder == "string") {
      var el = document.createElement("div");
      el.classList.add("tabulator-placeholder");
      var span = document.createElement("span");
      span.innerHTML = options.placeholder;
      el.appendChild(span);
      options.placeholder = el;
    }
    element.appendChild(this.columnManager.getElement());
    element.appendChild(this.rowManager.getElement());
    if (options.footerElement) {
      this.footerManager.activate();
    }
    if (options.persistence && this.modExists("persistence", true)) {
      mod.persistence.initialize();
    }
    if (options.movableRows && this.modExists("moveRow")) {
      mod.moveRow.initialize();
    }
    if (options.autoColumns && this.options.data) {
      this.columnManager.generateColumnsFromRowData(this.options.data);
    }
    if (this.modExists("columnCalcs")) {
      mod.columnCalcs.initialize();
    }
    this.columnManager.setColumns(options.columns);
    if (options.dataTree && this.modExists("dataTree", true)) {
      mod.dataTree.initialize();
    }
    if (this.modExists("frozenRows")) {
      this.modules.frozenRows.initialize();
    }
    if ((options.persistence && this.modExists("persistence", true) && mod.persistence.config.sort || options.initialSort) && this.modExists("sort", true)) {
      var sorters = [];
      if (options.persistence && this.modExists("persistence", true) && mod.persistence.config.sort) {
        sorters = mod.persistence.load("sort");
        if (sorters === false && options.initialSort) {
          sorters = options.initialSort;
        }
      } else if (options.initialSort) {
        sorters = options.initialSort;
      }
      mod.sort.setSort(sorters);
    }
    if ((options.persistence && this.modExists("persistence", true) && mod.persistence.config.filter || options.initialFilter) && this.modExists("filter", true)) {
      var filters = [];
      if (options.persistence && this.modExists("persistence", true) && mod.persistence.config.filter) {
        filters = mod.persistence.load("filter");
        if (filters === false && options.initialFilter) {
          filters = options.initialFilter;
        }
      } else if (options.initialFilter) {
        filters = options.initialFilter;
      }
      mod.filter.setFilter(filters);
    }
    if (options.initialHeaderFilter && this.modExists("filter", true)) {
      options.initialHeaderFilter.forEach(function(item) {
        var column2 = _this24.columnManager.findColumn(item.field);
        if (column2) {
          mod.filter.setHeaderFilterValue(column2, item.value);
        } else {
          console.warn("Column Filter Error - No matching column found:", item.field);
          return false;
        }
      });
    }
    if (this.modExists("ajax")) {
      mod.ajax.initialize();
    }
    if (options.pagination && this.modExists("page", true)) {
      mod.page.initialize();
    }
    if (options.groupBy && this.modExists("groupRows", true)) {
      mod.groupRows.initialize();
    }
    if (this.modExists("keybindings")) {
      mod.keybindings.initialize();
    }
    if (this.modExists("selectRow")) {
      mod.selectRow.clearSelectionData(true);
    }
    if (options.autoResize && this.modExists("resizeTable")) {
      mod.resizeTable.initialize();
    }
    if (this.modExists("clipboard")) {
      mod.clipboard.initialize();
    }
    if (options.printAsHtml && this.modExists("print")) {
      mod.print.initialize();
    }
    options.tableBuilt.call(this);
  };
  Tabulator.prototype._loadInitialData = function() {
    var self2 = this;
    if (self2.options.pagination && self2.modExists("page")) {
      self2.modules.page.reset(true, true);
      if (self2.options.pagination == "local") {
        if (self2.options.data.length) {
          self2.rowManager.setData(self2.options.data, false, true);
        } else {
          if ((self2.options.ajaxURL || self2.options.ajaxURLGenerator) && self2.modExists("ajax")) {
            self2.modules.ajax.loadData(false, true).then(function() {
            }).catch(function() {
              if (self2.options.paginationInitialPage) {
                self2.modules.page.setPage(self2.options.paginationInitialPage);
              }
            });
            return;
          } else {
            self2.rowManager.setData(self2.options.data, false, true);
          }
        }
        if (self2.options.paginationInitialPage) {
          self2.modules.page.setPage(self2.options.paginationInitialPage);
        }
      } else {
        if (self2.options.ajaxURL) {
          self2.modules.page.setPage(self2.options.paginationInitialPage).then(function() {
          }).catch(function() {
          });
        } else {
          self2.rowManager.setData([], false, true);
        }
      }
    } else {
      if (self2.options.data.length) {
        self2.rowManager.setData(self2.options.data);
      } else {
        if ((self2.options.ajaxURL || self2.options.ajaxURLGenerator) && self2.modExists("ajax")) {
          self2.modules.ajax.loadData(false, true).then(function() {
          }).catch(function() {
          });
        } else {
          self2.rowManager.setData(self2.options.data, false, true);
        }
      }
    }
  };
  Tabulator.prototype.destroy = function() {
    var element = this.element;
    Tabulator.prototype.comms.deregister(this);
    if (this.options.reactiveData && this.modExists("reactiveData", true)) {
      this.modules.reactiveData.unwatchData();
    }
    this.rowManager.rows.forEach(function(row2) {
      row2.wipe();
    });
    this.rowManager.rows = [];
    this.rowManager.activeRows = [];
    this.rowManager.displayRows = [];
    if (this.options.autoResize && this.modExists("resizeTable")) {
      this.modules.resizeTable.clearBindings();
    }
    if (this.modExists("keybindings")) {
      this.modules.keybindings.clearBindings();
    }
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    element.classList.remove("tabulator");
  };
  Tabulator.prototype._detectBrowser = function() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.indexOf("Trident") > -1) {
      this.browser = "ie";
      this.browserSlow = true;
    } else if (ua.indexOf("Edge") > -1) {
      this.browser = "edge";
      this.browserSlow = true;
    } else if (ua.indexOf("Firefox") > -1) {
      this.browser = "firefox";
      this.browserSlow = false;
    } else {
      this.browser = "other";
      this.browserSlow = false;
    }
    this.browserMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
  };
  Tabulator.prototype.blockRedraw = function() {
    return this.rowManager.blockRedraw();
  };
  Tabulator.prototype.restoreRedraw = function() {
    return this.rowManager.restoreRedraw();
  };
  Tabulator.prototype.setDataFromLocalFile = function(extensions) {
    var _this25 = this;
    return new Promise(function(resolve, reject) {
      var input2 = document.createElement("input");
      input2.type = "file";
      input2.accept = extensions || ".json,application/json";
      input2.addEventListener("change", function(e2) {
        var file = input2.files[0], reader = new FileReader(), data;
        reader.readAsText(file);
        reader.onload = function(e3) {
          try {
            data = JSON.parse(reader.result);
          } catch (e4) {
            console.warn("File Load Error - File contents is invalid JSON", e4);
            reject(e4);
            return;
          }
          _this25.setData(data).then(function(data2) {
            resolve(data2);
          }).catch(function(err) {
            resolve(err);
          });
        };
        reader.onerror = function(e3) {
          console.warn("File Load Error - Unable to read file");
          reject();
        };
      });
      input2.click();
    });
  };
  Tabulator.prototype.setData = function(data, params, config) {
    if (this.modExists("ajax")) {
      this.modules.ajax.blockActiveRequest();
    }
    return this._setData(data, params, config, false, true);
  };
  Tabulator.prototype._setData = function(data, params, config, inPosition, columnsChanged) {
    var self2 = this;
    if (typeof data === "string") {
      if (data.indexOf("{") == 0 || data.indexOf("[") == 0) {
        return self2.rowManager.setData(JSON.parse(data), inPosition, columnsChanged);
      } else {
        if (self2.modExists("ajax", true)) {
          if (params) {
            self2.modules.ajax.setParams(params);
          }
          if (config) {
            self2.modules.ajax.setConfig(config);
          }
          self2.modules.ajax.setUrl(data);
          if (self2.options.pagination == "remote" && self2.modExists("page", true)) {
            self2.modules.page.reset(true, true);
            return self2.modules.page.setPage(1);
          } else {
            return self2.modules.ajax.loadData(inPosition, columnsChanged);
          }
        }
      }
    } else {
      if (data) {
        return self2.rowManager.setData(data, inPosition, columnsChanged);
      } else {
        if (self2.modExists("ajax") && (self2.modules.ajax.getUrl || self2.options.ajaxURLGenerator)) {
          if (self2.options.pagination == "remote" && self2.modExists("page", true)) {
            self2.modules.page.reset(true, true);
            return self2.modules.page.setPage(1);
          } else {
            return self2.modules.ajax.loadData(inPosition, columnsChanged);
          }
        } else {
          return self2.rowManager.setData([], inPosition, columnsChanged);
        }
      }
    }
  };
  Tabulator.prototype.clearData = function() {
    if (this.modExists("ajax")) {
      this.modules.ajax.blockActiveRequest();
    }
    this.rowManager.clearData();
  };
  Tabulator.prototype.getData = function(active) {
    if (active === true) {
      console.warn("passing a boolean to the getData function is deprecated, you should now pass the string 'active'");
      active = "active";
    }
    return this.rowManager.getData(active);
  };
  Tabulator.prototype.getDataCount = function(active) {
    if (active === true) {
      console.warn("passing a boolean to the getDataCount function is deprecated, you should now pass the string 'active'");
      active = "active";
    }
    return this.rowManager.getDataCount(active);
  };
  Tabulator.prototype.searchRows = function(field, type, value) {
    if (this.modExists("filter", true)) {
      return this.modules.filter.search("rows", field, type, value);
    }
  };
  Tabulator.prototype.searchData = function(field, type, value) {
    if (this.modExists("filter", true)) {
      return this.modules.filter.search("data", field, type, value);
    }
  };
  Tabulator.prototype.getHtml = function(visible2, style, config) {
    if (this.modExists("export", true)) {
      return this.modules.export.getHtml(visible2, style, config);
    }
  };
  Tabulator.prototype.print = function(visible2, style, config) {
    if (this.modExists("print", true)) {
      return this.modules.print.printFullscreen(visible2, style, config);
    }
  };
  Tabulator.prototype.getAjaxUrl = function() {
    if (this.modExists("ajax", true)) {
      return this.modules.ajax.getUrl();
    }
  };
  Tabulator.prototype.replaceData = function(data, params, config) {
    if (this.modExists("ajax")) {
      this.modules.ajax.blockActiveRequest();
    }
    return this._setData(data, params, config, true);
  };
  Tabulator.prototype.updateData = function(data) {
    var _this26 = this;
    var self2 = this;
    var responses = 0;
    return new Promise(function(resolve, reject) {
      if (_this26.modExists("ajax")) {
        _this26.modules.ajax.blockActiveRequest();
      }
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      if (data) {
        data.forEach(function(item) {
          var row2 = self2.rowManager.findRow(item[self2.options.index]);
          if (row2) {
            responses++;
            row2.updateData(item).then(function() {
              responses--;
              if (!responses) {
                resolve();
              }
            });
          }
        });
      } else {
        console.warn("Update Error - No data provided");
        reject("Update Error - No data provided");
      }
    });
  };
  Tabulator.prototype.addData = function(data, pos, index) {
    var _this27 = this;
    return new Promise(function(resolve, reject) {
      if (_this27.modExists("ajax")) {
        _this27.modules.ajax.blockActiveRequest();
      }
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      if (data) {
        _this27.rowManager.addRows(data, pos, index).then(function(rows) {
          var output = [];
          rows.forEach(function(row2) {
            output.push(row2.getComponent());
          });
          resolve(output);
        });
      } else {
        console.warn("Update Error - No data provided");
        reject("Update Error - No data provided");
      }
    });
  };
  Tabulator.prototype.updateOrAddData = function(data) {
    var _this28 = this;
    var self2 = this, rows = [], responses = 0;
    return new Promise(function(resolve, reject) {
      if (_this28.modExists("ajax")) {
        _this28.modules.ajax.blockActiveRequest();
      }
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      if (data) {
        data.forEach(function(item) {
          var row2 = self2.rowManager.findRow(item[self2.options.index]);
          responses++;
          if (row2) {
            row2.updateData(item).then(function() {
              responses--;
              rows.push(row2.getComponent());
              if (!responses) {
                resolve(rows);
              }
            });
          } else {
            self2.rowManager.addRows(item).then(function(newRows) {
              responses--;
              rows.push(newRows[0].getComponent());
              if (!responses) {
                resolve(rows);
              }
            });
          }
        });
      } else {
        console.warn("Update Error - No data provided");
        reject("Update Error - No data provided");
      }
    });
  };
  Tabulator.prototype.getRow = function(index) {
    var row2 = this.rowManager.findRow(index);
    if (row2) {
      return row2.getComponent();
    } else {
      console.warn("Find Error - No matching row found:", index);
      return false;
    }
  };
  Tabulator.prototype.getRowFromPosition = function(position, active) {
    var row2 = this.rowManager.getRowFromPosition(position, active);
    if (row2) {
      return row2.getComponent();
    } else {
      console.warn("Find Error - No matching row found:", position);
      return false;
    }
  };
  Tabulator.prototype.deleteRow = function(index) {
    var _this29 = this;
    return new Promise(function(resolve, reject) {
      var self2 = _this29, count2 = 0, successCount = 0, foundRows = [];
      function doneCheck() {
        count2++;
        if (count2 == index.length) {
          if (successCount) {
            self2.rowManager.reRenderInPosition();
            resolve();
          }
        }
      }
      if (!Array.isArray(index)) {
        index = [index];
      }
      index.forEach(function(item) {
        var row2 = _this29.rowManager.findRow(item, true);
        if (row2) {
          foundRows.push(row2);
        } else {
          console.warn("Delete Error - No matching row found:", item);
          reject("Delete Error - No matching row found");
          doneCheck();
        }
      });
      foundRows.sort(function(a, b) {
        return _this29.rowManager.rows.indexOf(a) > _this29.rowManager.rows.indexOf(b) ? 1 : -1;
      });
      foundRows.forEach(function(row2) {
        row2.delete().then(function() {
          successCount++;
          doneCheck();
        }).catch(function(err) {
          doneCheck();
          reject(err);
        });
      });
    });
  };
  Tabulator.prototype.addRow = function(data, pos, index) {
    var _this30 = this;
    return new Promise(function(resolve, reject) {
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      _this30.rowManager.addRows(data, pos, index).then(function(rows) {
        if (_this30.modExists("columnCalcs")) {
          _this30.modules.columnCalcs.recalc(_this30.rowManager.activeRows);
        }
        resolve(rows[0].getComponent());
      });
    });
  };
  Tabulator.prototype.updateOrAddRow = function(index, data) {
    var _this31 = this;
    return new Promise(function(resolve, reject) {
      var row2 = _this31.rowManager.findRow(index);
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      if (row2) {
        row2.updateData(data).then(function() {
          if (_this31.modExists("columnCalcs")) {
            _this31.modules.columnCalcs.recalc(_this31.rowManager.activeRows);
          }
          resolve(row2.getComponent());
        }).catch(function(err) {
          reject(err);
        });
      } else {
        row2 = _this31.rowManager.addRows(data).then(function(rows) {
          if (_this31.modExists("columnCalcs")) {
            _this31.modules.columnCalcs.recalc(_this31.rowManager.activeRows);
          }
          resolve(rows[0].getComponent());
        }).catch(function(err) {
          reject(err);
        });
      }
    });
  };
  Tabulator.prototype.updateRow = function(index, data) {
    var _this32 = this;
    return new Promise(function(resolve, reject) {
      var row2 = _this32.rowManager.findRow(index);
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      if (row2) {
        row2.updateData(data).then(function() {
          resolve(row2.getComponent());
        }).catch(function(err) {
          reject(err);
        });
      } else {
        console.warn("Update Error - No matching row found:", index);
        reject("Update Error - No matching row found");
      }
    });
  };
  Tabulator.prototype.scrollToRow = function(index, position, ifVisible) {
    var _this33 = this;
    return new Promise(function(resolve, reject) {
      var row2 = _this33.rowManager.findRow(index);
      if (row2) {
        _this33.rowManager.scrollToRow(row2, position, ifVisible).then(function() {
          resolve();
        }).catch(function(err) {
          reject(err);
        });
      } else {
        console.warn("Scroll Error - No matching row found:", index);
        reject("Scroll Error - No matching row found");
      }
    });
  };
  Tabulator.prototype.moveRow = function(from, to, after) {
    var fromRow = this.rowManager.findRow(from);
    if (fromRow) {
      fromRow.moveToRow(to, after);
    } else {
      console.warn("Move Error - No matching row found:", from);
    }
  };
  Tabulator.prototype.getRows = function(active) {
    if (active === true) {
      console.warn("passing a boolean to the getRows function is deprecated, you should now pass the string 'active'");
      active = "active";
    }
    return this.rowManager.getComponents(active);
  };
  Tabulator.prototype.getRowPosition = function(index, active) {
    var row2 = this.rowManager.findRow(index);
    if (row2) {
      return this.rowManager.getRowPosition(row2, active);
    } else {
      console.warn("Position Error - No matching row found:", index);
      return false;
    }
  };
  Tabulator.prototype.copyToClipboard = function(selector) {
    if (this.modExists("clipboard", true)) {
      this.modules.clipboard.copy(selector);
    }
  };
  Tabulator.prototype.setColumns = function(definition2) {
    this.columnManager.setColumns(definition2);
  };
  Tabulator.prototype.getColumns = function(structured) {
    return this.columnManager.getComponents(structured);
  };
  Tabulator.prototype.getColumn = function(field) {
    var col = this.columnManager.findColumn(field);
    if (col) {
      return col.getComponent();
    } else {
      console.warn("Find Error - No matching column found:", field);
      return false;
    }
  };
  Tabulator.prototype.getColumnDefinitions = function() {
    return this.columnManager.getDefinitionTree();
  };
  Tabulator.prototype.getColumnLayout = function() {
    if (this.modExists("persistence", true)) {
      return this.modules.persistence.parseColumns(this.columnManager.getColumns());
    }
  };
  Tabulator.prototype.setColumnLayout = function(layout2) {
    if (this.modExists("persistence", true)) {
      this.columnManager.setColumns(this.modules.persistence.mergeDefinition(this.options.columns, layout2));
      return true;
    }
    return false;
  };
  Tabulator.prototype.showColumn = function(field) {
    var column2 = this.columnManager.findColumn(field);
    if (column2) {
      column2.show();
      if (this.options.responsiveLayout && this.modExists("responsiveLayout", true)) {
        this.modules.responsiveLayout.update();
      }
    } else {
      console.warn("Column Show Error - No matching column found:", field);
      return false;
    }
  };
  Tabulator.prototype.hideColumn = function(field) {
    var column2 = this.columnManager.findColumn(field);
    if (column2) {
      column2.hide();
      if (this.options.responsiveLayout && this.modExists("responsiveLayout", true)) {
        this.modules.responsiveLayout.update();
      }
    } else {
      console.warn("Column Hide Error - No matching column found:", field);
      return false;
    }
  };
  Tabulator.prototype.toggleColumn = function(field) {
    var column2 = this.columnManager.findColumn(field);
    if (column2) {
      if (column2.visible) {
        column2.hide();
      } else {
        column2.show();
      }
    } else {
      console.warn("Column Visibility Toggle Error - No matching column found:", field);
      return false;
    }
  };
  Tabulator.prototype.addColumn = function(definition2, before, field) {
    var _this34 = this;
    return new Promise(function(resolve, reject) {
      var column2 = _this34.columnManager.findColumn(field);
      _this34.columnManager.addColumn(definition2, before, column2).then(function(column3) {
        resolve(column3.getComponent());
      }).catch(function(err) {
        reject(err);
      });
    });
  };
  Tabulator.prototype.deleteColumn = function(field) {
    var _this35 = this;
    return new Promise(function(resolve, reject) {
      var column2 = _this35.columnManager.findColumn(field);
      if (column2) {
        column2.delete().then(function() {
          resolve();
        }).catch(function(err) {
          reject(err);
        });
      } else {
        console.warn("Column Delete Error - No matching column found:", field);
        reject();
      }
    });
  };
  Tabulator.prototype.updateColumnDefinition = function(field, definition2) {
    var _this36 = this;
    return new Promise(function(resolve, reject) {
      var column2 = _this36.columnManager.findColumn(field);
      if (column2) {
        column2.updateDefinition(definition2).then(function(col) {
          resolve(col);
        }).catch(function(err) {
          reject(err);
        });
      } else {
        console.warn("Column Update Error - No matching column found:", field);
        reject();
      }
    });
  };
  Tabulator.prototype.moveColumn = function(from, to, after) {
    var fromColumn = this.columnManager.findColumn(from);
    var toColumn = this.columnManager.findColumn(to);
    if (fromColumn) {
      if (toColumn) {
        this.columnManager.moveColumn(fromColumn, toColumn, after);
      } else {
        console.warn("Move Error - No matching column found:", toColumn);
      }
    } else {
      console.warn("Move Error - No matching column found:", from);
    }
  };
  Tabulator.prototype.scrollToColumn = function(field, position, ifVisible) {
    var _this37 = this;
    return new Promise(function(resolve, reject) {
      var column2 = _this37.columnManager.findColumn(field);
      if (column2) {
        _this37.columnManager.scrollToColumn(column2, position, ifVisible).then(function() {
          resolve();
        }).catch(function(err) {
          reject(err);
        });
      } else {
        console.warn("Scroll Error - No matching column found:", field);
        reject("Scroll Error - No matching column found");
      }
    });
  };
  Tabulator.prototype.setLocale = function(locale) {
    this.modules.localize.setLocale(locale);
  };
  Tabulator.prototype.getLocale = function() {
    return this.modules.localize.getLocale();
  };
  Tabulator.prototype.getLang = function(locale) {
    return this.modules.localize.getLang(locale);
  };
  Tabulator.prototype.redraw = function(force) {
    this.columnManager.redraw(force);
    this.rowManager.redraw(force);
  };
  Tabulator.prototype.setHeight = function(height) {
    if (this.rowManager.renderMode !== "classic") {
      this.options.height = isNaN(height) ? height : height + "px";
      this.element.style.height = this.options.height;
      this.rowManager.setRenderMode();
      this.rowManager.redraw();
    } else {
      console.warn("setHeight function is not available in classic render mode");
    }
  };
  Tabulator.prototype.setSort = function(sortList, dir) {
    if (this.modExists("sort", true)) {
      this.modules.sort.setSort(sortList, dir);
      this.rowManager.sorterRefresh();
    }
  };
  Tabulator.prototype.getSorters = function() {
    if (this.modExists("sort", true)) {
      return this.modules.sort.getSort();
    }
  };
  Tabulator.prototype.clearSort = function() {
    if (this.modExists("sort", true)) {
      this.modules.sort.clear();
      this.rowManager.sorterRefresh();
    }
  };
  Tabulator.prototype.setFilter = function(field, type, value, params) {
    if (this.modExists("filter", true)) {
      this.modules.filter.setFilter(field, type, value, params);
      this.rowManager.filterRefresh();
    }
  };
  Tabulator.prototype.refreshFilter = function() {
    if (this.modExists("filter", true)) {
      this.rowManager.filterRefresh();
    }
  };
  Tabulator.prototype.addFilter = function(field, type, value, params) {
    if (this.modExists("filter", true)) {
      this.modules.filter.addFilter(field, type, value, params);
      this.rowManager.filterRefresh();
    }
  };
  Tabulator.prototype.getFilters = function(all) {
    if (this.modExists("filter", true)) {
      return this.modules.filter.getFilters(all);
    }
  };
  Tabulator.prototype.setHeaderFilterFocus = function(field) {
    if (this.modExists("filter", true)) {
      var column2 = this.columnManager.findColumn(field);
      if (column2) {
        this.modules.filter.setHeaderFilterFocus(column2);
      } else {
        console.warn("Column Filter Focus Error - No matching column found:", field);
        return false;
      }
    }
  };
  Tabulator.prototype.getHeaderFilterValue = function(field) {
    if (this.modExists("filter", true)) {
      var column2 = this.columnManager.findColumn(field);
      if (column2) {
        return this.modules.filter.getHeaderFilterValue(column2);
      } else {
        console.warn("Column Filter Error - No matching column found:", field);
      }
    }
  };
  Tabulator.prototype.setHeaderFilterValue = function(field, value) {
    if (this.modExists("filter", true)) {
      var column2 = this.columnManager.findColumn(field);
      if (column2) {
        this.modules.filter.setHeaderFilterValue(column2, value);
      } else {
        console.warn("Column Filter Error - No matching column found:", field);
        return false;
      }
    }
  };
  Tabulator.prototype.getHeaderFilters = function() {
    if (this.modExists("filter", true)) {
      return this.modules.filter.getHeaderFilters();
    }
  };
  Tabulator.prototype.removeFilter = function(field, type, value) {
    if (this.modExists("filter", true)) {
      this.modules.filter.removeFilter(field, type, value);
      this.rowManager.filterRefresh();
    }
  };
  Tabulator.prototype.clearFilter = function(all) {
    if (this.modExists("filter", true)) {
      this.modules.filter.clearFilter(all);
      this.rowManager.filterRefresh();
    }
  };
  Tabulator.prototype.clearHeaderFilter = function() {
    if (this.modExists("filter", true)) {
      this.modules.filter.clearHeaderFilter();
      this.rowManager.filterRefresh();
    }
  };
  Tabulator.prototype.selectRow = function(rows) {
    if (this.modExists("selectRow", true)) {
      if (rows === true) {
        console.warn("passing a boolean to the selectRowselectRow function is deprecated, you should now pass the string 'active'");
        rows = "active";
      }
      this.modules.selectRow.selectRows(rows);
    }
  };
  Tabulator.prototype.deselectRow = function(rows) {
    if (this.modExists("selectRow", true)) {
      this.modules.selectRow.deselectRows(rows);
    }
  };
  Tabulator.prototype.toggleSelectRow = function(row2) {
    if (this.modExists("selectRow", true)) {
      this.modules.selectRow.toggleRow(row2);
    }
  };
  Tabulator.prototype.getSelectedRows = function() {
    if (this.modExists("selectRow", true)) {
      return this.modules.selectRow.getSelectedRows();
    }
  };
  Tabulator.prototype.getSelectedData = function() {
    if (this.modExists("selectRow", true)) {
      return this.modules.selectRow.getSelectedData();
    }
  };
  Tabulator.prototype.getInvalidCells = function() {
    if (this.modExists("validate", true)) {
      return this.modules.validate.getInvalidCells();
    }
  };
  Tabulator.prototype.clearCellValidation = function(cells) {
    var _this38 = this;
    if (this.modExists("validate", true)) {
      if (!cells) {
        cells = this.modules.validate.getInvalidCells();
      }
      if (!Array.isArray(cells)) {
        cells = [cells];
      }
      cells.forEach(function(cell) {
        _this38.modules.validate.clearValidation(cell._getSelf());
      });
    }
  };
  Tabulator.prototype.validate = function(cells) {
    var output = [];
    this.rowManager.rows.forEach(function(row2) {
      var valid = row2.validate();
      if (valid !== true) {
        output = output.concat(valid);
      }
    });
    return output.length ? output : true;
  };
  Tabulator.prototype.setMaxPage = function(max3) {
    if (this.options.pagination && this.modExists("page")) {
      this.modules.page.setMaxPage(max3);
    } else {
      return false;
    }
  };
  Tabulator.prototype.setPage = function(page) {
    if (this.options.pagination && this.modExists("page")) {
      return this.modules.page.setPage(page);
    } else {
      return new Promise(function(resolve, reject) {
        reject();
      });
    }
  };
  Tabulator.prototype.setPageToRow = function(row2) {
    var _this39 = this;
    return new Promise(function(resolve, reject) {
      if (_this39.options.pagination && _this39.modExists("page")) {
        row2 = _this39.rowManager.findRow(row2);
        if (row2) {
          _this39.modules.page.setPageToRow(row2).then(function() {
            resolve();
          }).catch(function() {
            reject();
          });
        } else {
          reject();
        }
      } else {
        reject();
      }
    });
  };
  Tabulator.prototype.setPageSize = function(size) {
    if (this.options.pagination && this.modExists("page")) {
      this.modules.page.setPageSize(size);
      this.modules.page.setPage(1).then(function() {
      }).catch(function() {
      });
    } else {
      return false;
    }
  };
  Tabulator.prototype.getPageSize = function() {
    if (this.options.pagination && this.modExists("page", true)) {
      return this.modules.page.getPageSize();
    }
  };
  Tabulator.prototype.previousPage = function() {
    if (this.options.pagination && this.modExists("page")) {
      this.modules.page.previousPage();
    } else {
      return false;
    }
  };
  Tabulator.prototype.nextPage = function() {
    if (this.options.pagination && this.modExists("page")) {
      this.modules.page.nextPage();
    } else {
      return false;
    }
  };
  Tabulator.prototype.getPage = function() {
    if (this.options.pagination && this.modExists("page")) {
      return this.modules.page.getPage();
    } else {
      return false;
    }
  };
  Tabulator.prototype.getPageMax = function() {
    if (this.options.pagination && this.modExists("page")) {
      return this.modules.page.getPageMax();
    } else {
      return false;
    }
  };
  Tabulator.prototype.setGroupBy = function(groups) {
    if (this.modExists("groupRows", true)) {
      this.options.groupBy = groups;
      this.modules.groupRows.initialize();
      this.rowManager.refreshActiveData("display");
      if (this.options.persistence && this.modExists("persistence", true) && this.modules.persistence.config.group) {
        this.modules.persistence.save("group");
      }
    } else {
      return false;
    }
  };
  Tabulator.prototype.setGroupValues = function(groupValues) {
    if (this.modExists("groupRows", true)) {
      this.options.groupValues = groupValues;
      this.modules.groupRows.initialize();
      this.rowManager.refreshActiveData("display");
      if (this.options.persistence && this.modExists("persistence", true) && this.modules.persistence.config.group) {
        this.modules.persistence.save("group");
      }
    } else {
      return false;
    }
  };
  Tabulator.prototype.setGroupStartOpen = function(values) {
    if (this.modExists("groupRows", true)) {
      this.options.groupStartOpen = values;
      this.modules.groupRows.initialize();
      if (this.options.groupBy) {
        this.rowManager.refreshActiveData("group");
        if (this.options.persistence && this.modExists("persistence", true) && this.modules.persistence.config.group) {
          this.modules.persistence.save("group");
        }
      } else {
        console.warn("Grouping Update - cant refresh view, no groups have been set");
      }
    } else {
      return false;
    }
  };
  Tabulator.prototype.setGroupHeader = function(values) {
    if (this.modExists("groupRows", true)) {
      this.options.groupHeader = values;
      this.modules.groupRows.initialize();
      if (this.options.groupBy) {
        this.rowManager.refreshActiveData("group");
        if (this.options.persistence && this.modExists("persistence", true) && this.modules.persistence.config.group) {
          this.modules.persistence.save("group");
        }
      } else {
        console.warn("Grouping Update - cant refresh view, no groups have been set");
      }
    } else {
      return false;
    }
  };
  Tabulator.prototype.getGroups = function(values) {
    if (this.modExists("groupRows", true)) {
      return this.modules.groupRows.getGroups(true);
    } else {
      return false;
    }
  };
  Tabulator.prototype.getGroupedData = function() {
    if (this.modExists("groupRows", true)) {
      return this.options.groupBy ? this.modules.groupRows.getGroupedData() : this.getData();
    }
  };
  Tabulator.prototype.getEditedCells = function() {
    if (this.modExists("edit", true)) {
      return this.modules.edit.getEditedCells();
    }
  };
  Tabulator.prototype.clearCellEdited = function(cells) {
    var _this40 = this;
    if (this.modExists("edit", true)) {
      if (!cells) {
        cells = this.modules.edit.getEditedCells();
      }
      if (!Array.isArray(cells)) {
        cells = [cells];
      }
      cells.forEach(function(cell) {
        _this40.modules.edit.clearEdited(cell._getSelf());
      });
    }
  };
  Tabulator.prototype.getCalcResults = function() {
    if (this.modExists("columnCalcs", true)) {
      return this.modules.columnCalcs.getResults();
    } else {
      return false;
    }
  };
  Tabulator.prototype.recalc = function() {
    if (this.modExists("columnCalcs", true)) {
      this.modules.columnCalcs.recalcAll(this.rowManager.activeRows);
    }
  };
  Tabulator.prototype.navigatePrev = function() {
    var cell = false;
    if (this.modExists("edit", true)) {
      cell = this.modules.edit.currentCell;
      if (cell) {
        return cell.nav().prev();
      }
    }
    return false;
  };
  Tabulator.prototype.navigateNext = function() {
    var cell = false;
    if (this.modExists("edit", true)) {
      cell = this.modules.edit.currentCell;
      if (cell) {
        return cell.nav().next();
      }
    }
    return false;
  };
  Tabulator.prototype.navigateLeft = function() {
    var cell = false;
    if (this.modExists("edit", true)) {
      cell = this.modules.edit.currentCell;
      if (cell) {
        e.preventDefault();
        return cell.nav().left();
      }
    }
    return false;
  };
  Tabulator.prototype.navigateRight = function() {
    var cell = false;
    if (this.modExists("edit", true)) {
      cell = this.modules.edit.currentCell;
      if (cell) {
        e.preventDefault();
        return cell.nav().right();
      }
    }
    return false;
  };
  Tabulator.prototype.navigateUp = function() {
    var cell = false;
    if (this.modExists("edit", true)) {
      cell = this.modules.edit.currentCell;
      if (cell) {
        e.preventDefault();
        return cell.nav().up();
      }
    }
    return false;
  };
  Tabulator.prototype.navigateDown = function() {
    var cell = false;
    if (this.modExists("edit", true)) {
      cell = this.modules.edit.currentCell;
      if (cell) {
        e.preventDefault();
        return cell.nav().down();
      }
    }
    return false;
  };
  Tabulator.prototype.undo = function() {
    if (this.options.history && this.modExists("history", true)) {
      return this.modules.history.undo();
    } else {
      return false;
    }
  };
  Tabulator.prototype.redo = function() {
    if (this.options.history && this.modExists("history", true)) {
      return this.modules.history.redo();
    } else {
      return false;
    }
  };
  Tabulator.prototype.getHistoryUndoSize = function() {
    if (this.options.history && this.modExists("history", true)) {
      return this.modules.history.getHistoryUndoSize();
    } else {
      return false;
    }
  };
  Tabulator.prototype.getHistoryRedoSize = function() {
    if (this.options.history && this.modExists("history", true)) {
      return this.modules.history.getHistoryRedoSize();
    } else {
      return false;
    }
  };
  Tabulator.prototype.clearHistory = function() {
    if (this.options.history && this.modExists("history", true)) {
      return this.modules.history.clear();
    } else {
      return false;
    }
  };
  Tabulator.prototype.download = function(type, filename, options, active) {
    if (this.modExists("download", true)) {
      this.modules.download.download(type, filename, options, active);
    }
  };
  Tabulator.prototype.downloadToTab = function(type, filename, options, active) {
    if (this.modExists("download", true)) {
      this.modules.download.download(type, filename, options, active, true);
    }
  };
  Tabulator.prototype.tableComms = function(table4, module, action, data) {
    this.modules.comms.receive(table4, module, action, data);
  };
  Tabulator.prototype.moduleBindings = {};
  Tabulator.prototype.extendModule = function(name, property, values) {
    if (Tabulator.prototype.moduleBindings[name]) {
      var source = Tabulator.prototype.moduleBindings[name].prototype[property];
      if (source) {
        if ((typeof values === "undefined" ? "undefined" : _typeof(values)) == "object") {
          for (var key in values) {
            source[key] = values[key];
          }
        } else {
          console.warn("Module Error - Invalid value type, it must be an object");
        }
      } else {
        console.warn("Module Error - property does not exist:", property);
      }
    } else {
      console.warn("Module Error - module does not exist:", name);
    }
  };
  Tabulator.prototype.registerModule = function(name, module) {
    var self2 = this;
    Tabulator.prototype.moduleBindings[name] = module;
  };
  Tabulator.prototype.bindModules = function() {
    this.modules = {};
    for (var name in Tabulator.prototype.moduleBindings) {
      this.modules[name] = new Tabulator.prototype.moduleBindings[name](this);
    }
  };
  Tabulator.prototype.modExists = function(plugin, required2) {
    if (this.modules[plugin]) {
      return true;
    } else {
      if (required2) {
        console.error("Tabulator Module Not Installed: " + plugin);
      }
      return false;
    }
  };
  Tabulator.prototype.helpers = {
    elVisible: function elVisible(el) {
      return !(el.offsetWidth <= 0 && el.offsetHeight <= 0);
    },
    elOffset: function elOffset(el) {
      var box = el.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
      };
    },
    deepClone: function deepClone(obj) {
      var clone = Object.assign(Array.isArray(obj) ? [] : {}, obj);
      for (var i2 in obj) {
        if (obj[i2] != null && _typeof(obj[i2]) === "object") {
          if (obj[i2] instanceof Date) {
            clone[i2] = new Date(obj[i2]);
          } else {
            clone[i2] = this.deepClone(obj[i2]);
          }
        }
      }
      return clone;
    }
  };
  Tabulator.prototype.comms = {
    tables: [],
    register: function register(table4) {
      Tabulator.prototype.comms.tables.push(table4);
    },
    deregister: function deregister(table4) {
      var index = Tabulator.prototype.comms.tables.indexOf(table4);
      if (index > -1) {
        Tabulator.prototype.comms.tables.splice(index, 1);
      }
    },
    lookupTable: function lookupTable(query, silent) {
      var results = [], matches, match;
      if (typeof query === "string") {
        matches = document.querySelectorAll(query);
        if (matches.length) {
          for (var i2 = 0; i2 < matches.length; i2++) {
            match = Tabulator.prototype.comms.matchElement(matches[i2]);
            if (match) {
              results.push(match);
            }
          }
        }
      } else if (typeof HTMLElement !== "undefined" && query instanceof HTMLElement || query instanceof Tabulator) {
        match = Tabulator.prototype.comms.matchElement(query);
        if (match) {
          results.push(match);
        }
      } else if (Array.isArray(query)) {
        query.forEach(function(item) {
          results = results.concat(Tabulator.prototype.comms.lookupTable(item));
        });
      } else {
        if (!silent) {
          console.warn("Table Connection Error - Invalid Selector", query);
        }
      }
      return results;
    },
    matchElement: function matchElement(element) {
      return Tabulator.prototype.comms.tables.find(function(table4) {
        return element instanceof Tabulator ? table4 === element : table4.element === element;
      });
    }
  };
  Tabulator.prototype.findTable = function(query) {
    var results = Tabulator.prototype.comms.lookupTable(query, true);
    return Array.isArray(results) && !results.length ? false : results;
  };
  var Layout = function Layout2(table4) {
    this.table = table4;
    this.mode = null;
  };
  Layout.prototype.initialize = function(layout2) {
    if (this.modes[layout2]) {
      this.mode = layout2;
    } else {
      console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : " + layout2);
      this.mode = "fitData";
    }
    this.table.element.setAttribute("tabulator-layout", this.mode);
  };
  Layout.prototype.getMode = function() {
    return this.mode;
  };
  Layout.prototype.layout = function() {
    this.modes[this.mode].call(this, this.table.columnManager.columnsByIndex);
    if (this.mode.indexOf("fitData") === 0 && this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {
      this.table.modules.persistence.save("columns");
    }
  };
  Layout.prototype.modes = {
    "fitData": function fitData(columns2) {
      if (this.table.options.virtualDomHoz) {
        this.table.vdomHoz.fitDataLayoutOverride();
      } else {
        columns2.forEach(function(column2) {
          column2.reinitializeWidth();
        });
      }
      if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
        this.table.modules.responsiveLayout.update();
      }
    },
    "fitDataFill": function fitDataFill(columns2) {
      columns2.forEach(function(column2) {
        column2.reinitializeWidth();
      });
      if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
        this.table.modules.responsiveLayout.update();
      }
    },
    "fitDataTable": function fitDataTable(columns2) {
      columns2.forEach(function(column2) {
        column2.reinitializeWidth();
      });
      if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
        this.table.modules.responsiveLayout.update();
      }
    },
    "fitDataStretch": function fitDataStretch(columns2) {
      var _this41 = this;
      var colsWidth = 0, tableWidth = this.table.rowManager.element.clientWidth, gap = 0, lastCol = false;
      columns2.forEach(function(column2, i2) {
        if (!column2.widthFixed) {
          column2.reinitializeWidth();
        }
        if (_this41.table.options.responsiveLayout ? column2.modules.responsive.visible : column2.visible) {
          lastCol = column2;
        }
        if (column2.visible) {
          colsWidth += column2.getWidth();
        }
      });
      if (lastCol) {
        gap = tableWidth - colsWidth + lastCol.getWidth();
        if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
          lastCol.setWidth(0);
          this.table.modules.responsiveLayout.update();
        }
        if (gap > 0) {
          lastCol.setWidth(gap);
        } else {
          lastCol.reinitializeWidth();
        }
      } else {
        if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
          this.table.modules.responsiveLayout.update();
        }
      }
    },
    "fitColumns": function fitColumns(columns2) {
      var self2 = this;
      var totalWidth = self2.table.element.clientWidth;
      var fixedWidth = 0;
      var flexWidth = 0;
      var flexGrowUnits = 0;
      var flexColWidth = 0;
      var flexColumns = [];
      var fixedShrinkColumns = [];
      var flexShrinkUnits = 0;
      var overflowWidth = 0;
      var gapFill = 0;
      function calcWidth(width) {
        var colWidth;
        if (typeof width == "string") {
          if (width.indexOf("%") > -1) {
            colWidth = totalWidth / 100 * parseInt(width);
          } else {
            colWidth = parseInt(width);
          }
        } else {
          colWidth = width;
        }
        return colWidth;
      }
      function scaleColumns(columns3, freeSpace, colWidth, shrinkCols) {
        var oversizeCols = [], oversizeSpace = 0, remainingSpace = 0, nextColWidth = 0, remainingFlexGrowUnits = flexGrowUnits, gap = 0, changeUnits = 0, undersizeCols = [];
        function calcGrow(col) {
          return colWidth * (col.column.definition.widthGrow || 1);
        }
        function calcShrink(col) {
          return calcWidth(col.width) - colWidth * (col.column.definition.widthShrink || 0);
        }
        columns3.forEach(function(col, i2) {
          var width = shrinkCols ? calcShrink(col) : calcGrow(col);
          if (col.column.minWidth >= width) {
            oversizeCols.push(col);
          } else {
            if (col.column.maxWidth && col.column.maxWidth < width) {
              col.width = col.column.maxWidth;
              freeSpace -= col.column.maxWidth;
              remainingFlexGrowUnits -= shrinkCols ? col.column.definition.widthShrink || 1 : col.column.definition.widthGrow || 1;
              if (remainingFlexGrowUnits) {
                colWidth = Math.floor(freeSpace / remainingFlexGrowUnits);
              }
            } else {
              undersizeCols.push(col);
              changeUnits += shrinkCols ? col.column.definition.widthShrink || 1 : col.column.definition.widthGrow || 1;
            }
          }
        });
        if (oversizeCols.length) {
          oversizeCols.forEach(function(col) {
            oversizeSpace += shrinkCols ? col.width - col.column.minWidth : col.column.minWidth;
            col.width = col.column.minWidth;
          });
          remainingSpace = freeSpace - oversizeSpace;
          nextColWidth = changeUnits ? Math.floor(remainingSpace / changeUnits) : remainingSpace;
          gap = remainingSpace - nextColWidth * changeUnits;
          gap += scaleColumns(undersizeCols, remainingSpace, nextColWidth, shrinkCols);
        } else {
          gap = changeUnits ? freeSpace - Math.floor(freeSpace / changeUnits) * changeUnits : freeSpace;
          undersizeCols.forEach(function(column2) {
            column2.width = shrinkCols ? calcShrink(column2) : calcGrow(column2);
          });
        }
        return gap;
      }
      if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {
        this.table.modules.responsiveLayout.update();
      }
      if (this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight) {
        totalWidth -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth;
      }
      columns2.forEach(function(column2) {
        var width, minWidth, colWidth;
        if (column2.visible) {
          width = column2.definition.width;
          minWidth = parseInt(column2.minWidth);
          if (width) {
            colWidth = calcWidth(width);
            fixedWidth += colWidth > minWidth ? colWidth : minWidth;
            if (column2.definition.widthShrink) {
              fixedShrinkColumns.push({
                column: column2,
                width: colWidth > minWidth ? colWidth : minWidth
              });
              flexShrinkUnits += column2.definition.widthShrink;
            }
          } else {
            flexColumns.push({
              column: column2,
              width: 0
            });
            flexGrowUnits += column2.definition.widthGrow || 1;
          }
        }
      });
      flexWidth = totalWidth - fixedWidth;
      flexColWidth = Math.floor(flexWidth / flexGrowUnits);
      var gapFill = scaleColumns(flexColumns, flexWidth, flexColWidth, false);
      if (flexColumns.length && gapFill > 0) {
        flexColumns[flexColumns.length - 1].width += +gapFill;
      }
      flexColumns.forEach(function(col) {
        flexWidth -= col.width;
      });
      overflowWidth = Math.abs(gapFill) + flexWidth;
      if (overflowWidth > 0 && flexShrinkUnits) {
        gapFill = scaleColumns(fixedShrinkColumns, overflowWidth, Math.floor(overflowWidth / flexShrinkUnits), true);
      }
      if (fixedShrinkColumns.length) {
        fixedShrinkColumns[fixedShrinkColumns.length - 1].width -= gapFill;
      }
      flexColumns.forEach(function(col) {
        col.column.setWidth(col.width);
      });
      fixedShrinkColumns.forEach(function(col) {
        col.column.setWidth(col.width);
      });
    }
  };
  Tabulator.prototype.registerModule("layout", Layout);
  var Localize = function Localize2(table4) {
    this.table = table4;
    this.locale = "default";
    this.lang = false;
    this.bindings = {};
    this.langList = {};
  };
  Localize.prototype.initialize = function() {
    this.langList = Tabulator.prototype.helpers.deepClone(this.langs);
  };
  Localize.prototype.setHeaderFilterPlaceholder = function(placeholder) {
    this.langList.default.headerFilters.default = placeholder;
  };
  Localize.prototype.setHeaderFilterColumnPlaceholder = function(column2, placeholder) {
    this.langList.default.headerFilters.columns[column2] = placeholder;
    if (this.lang && !this.lang.headerFilters.columns[column2]) {
      this.lang.headerFilters.columns[column2] = placeholder;
    }
  };
  Localize.prototype.installLang = function(locale, lang) {
    if (this.langList[locale]) {
      this._setLangProp(this.langList[locale], lang);
    } else {
      this.langList[locale] = lang;
    }
  };
  Localize.prototype._setLangProp = function(lang, values) {
    for (var key in values) {
      if (lang[key] && _typeof(lang[key]) == "object") {
        this._setLangProp(lang[key], values[key]);
      } else {
        lang[key] = values[key];
      }
    }
  };
  Localize.prototype.setLocale = function(desiredLocale) {
    var self2 = this;
    desiredLocale = desiredLocale || "default";
    function traverseLang(trans, path) {
      for (var prop in trans) {
        if (_typeof(trans[prop]) == "object") {
          if (!path[prop]) {
            path[prop] = {};
          }
          traverseLang(trans[prop], path[prop]);
        } else {
          path[prop] = trans[prop];
        }
      }
    }
    if (desiredLocale === true && navigator.language) {
      desiredLocale = navigator.language.toLowerCase();
    }
    if (desiredLocale) {
      if (!self2.langList[desiredLocale]) {
        var prefix = desiredLocale.split("-")[0];
        if (self2.langList[prefix]) {
          console.warn("Localization Error - Exact matching locale not found, using closest match: ", desiredLocale, prefix);
          desiredLocale = prefix;
        } else {
          console.warn("Localization Error - Matching locale not found, using default: ", desiredLocale);
          desiredLocale = "default";
        }
      }
    }
    self2.locale = desiredLocale;
    self2.lang = Tabulator.prototype.helpers.deepClone(self2.langList.default || {});
    if (desiredLocale != "default") {
      traverseLang(self2.langList[desiredLocale], self2.lang);
    }
    self2.table.options.localized.call(self2.table, self2.locale, self2.lang);
    self2._executeBindings();
  };
  Localize.prototype.getLocale = function(locale) {
    return self.locale;
  };
  Localize.prototype.getLang = function(locale) {
    return locale ? this.langList[locale] : this.lang;
  };
  Localize.prototype.getText = function(path, value) {
    var path = value ? path + "|" + value : path, pathArray = path.split("|"), text = this._getLangElement(pathArray, this.locale);
    return text || "";
  };
  Localize.prototype._getLangElement = function(path, locale) {
    var self2 = this;
    var root = self2.lang;
    path.forEach(function(level) {
      var rootPath;
      if (root) {
        rootPath = root[level];
        if (typeof rootPath != "undefined") {
          root = rootPath;
        } else {
          root = false;
        }
      }
    });
    return root;
  };
  Localize.prototype.bind = function(path, callback) {
    if (!this.bindings[path]) {
      this.bindings[path] = [];
    }
    this.bindings[path].push(callback);
    callback(this.getText(path), this.lang);
  };
  Localize.prototype._executeBindings = function() {
    var self2 = this;
    var _loop = function _loop2(path2) {
      self2.bindings[path2].forEach(function(binding) {
        binding(self2.getText(path2), self2.lang);
      });
    };
    for (var path in self2.bindings) {
      _loop(path);
    }
  };
  Localize.prototype.langs = {
    "default": {
      "groups": {
        "item": "item",
        "items": "items"
      },
      "columns": {},
      "ajax": {
        "loading": "Loading",
        "error": "Error"
      },
      "pagination": {
        "page_size": "Page Size",
        "page_title": "Show Page",
        "first": "First",
        "first_title": "First Page",
        "last": "Last",
        "last_title": "Last Page",
        "prev": "Prev",
        "prev_title": "Prev Page",
        "next": "Next",
        "next_title": "Next Page",
        "all": "All"
      },
      "headerFilters": {
        "default": "filter column...",
        "columns": {}
      }
    }
  };
  Tabulator.prototype.registerModule("localize", Localize);
  var Comms = function Comms2(table4) {
    this.table = table4;
  };
  Comms.prototype.getConnections = function(selectors) {
    var self2 = this, connections = [], connection;
    connection = Tabulator.prototype.comms.lookupTable(selectors);
    connection.forEach(function(con) {
      if (self2.table !== con) {
        connections.push(con);
      }
    });
    return connections;
  };
  Comms.prototype.send = function(selectors, module, action, data) {
    var self2 = this, connections = this.getConnections(selectors);
    connections.forEach(function(connection) {
      connection.tableComms(self2.table.element, module, action, data);
    });
    if (!connections.length && selectors) {
      console.warn("Table Connection Error - No tables matching selector found", selectors);
    }
  };
  Comms.prototype.receive = function(table4, module, action, data) {
    if (this.table.modExists(module)) {
      return this.table.modules[module].commsReceived(table4, action, data);
    } else {
      console.warn("Inter-table Comms Error - no such module:", module);
    }
  };
  Tabulator.prototype.registerModule("comms", Comms);
  var Accessor = function Accessor2(table4) {
    this.table = table4;
    this.allowedTypes = ["", "data", "download", "clipboard", "print", "htmlOutput"];
  };
  Accessor.prototype.initializeColumn = function(column2) {
    var self2 = this, match = false, config = {};
    this.allowedTypes.forEach(function(type) {
      var key = "accessor" + (type.charAt(0).toUpperCase() + type.slice(1)), accessor;
      if (column2.definition[key]) {
        accessor = self2.lookupAccessor(column2.definition[key]);
        if (accessor) {
          match = true;
          config[key] = {
            accessor,
            params: column2.definition[key + "Params"] || {}
          };
        }
      }
    });
    if (match) {
      column2.modules.accessor = config;
    }
  };
  Accessor.prototype.lookupAccessor = function(value) {
    var accessor = false;
    switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
      case "string":
        if (this.accessors[value]) {
          accessor = this.accessors[value];
        } else {
          console.warn("Accessor Error - No such accessor found, ignoring: ", value);
        }
        break;
      case "function":
        accessor = value;
        break;
    }
    return accessor;
  };
  Accessor.prototype.transformRow = function(row2, type) {
    var key = "accessor" + (type.charAt(0).toUpperCase() + type.slice(1)), rowComponent = row2.getComponent();
    var data = Tabulator.prototype.helpers.deepClone(row2.data || {});
    this.table.columnManager.traverse(function(column2) {
      var value, accessor, params, colCompnent;
      if (column2.modules.accessor) {
        accessor = column2.modules.accessor[key] || column2.modules.accessor.accessor || false;
        if (accessor) {
          value = column2.getFieldValue(data);
          if (value != "undefined") {
            colCompnent = column2.getComponent();
            params = typeof accessor.params === "function" ? accessor.params(value, data, type, colCompnent, rowComponent) : accessor.params;
            column2.setFieldValue(data, accessor.accessor(value, data, type, params, colCompnent, rowComponent));
          }
        }
      }
    });
    return data;
  }, Accessor.prototype.accessors = {};
  Tabulator.prototype.registerModule("accessor", Accessor);
  var Ajax = function Ajax2(table4) {
    this.table = table4;
    this.config = false;
    this.url = "";
    this.urlGenerator = false;
    this.params = false;
    this.loaderElement = this.createLoaderElement();
    this.msgElement = this.createMsgElement();
    this.loadingElement = false;
    this.errorElement = false;
    this.loaderPromise = false;
    this.progressiveLoad = false;
    this.loading = false;
    this.requestOrder = 0;
  };
  Ajax.prototype.initialize = function() {
    var template;
    this.loaderElement.appendChild(this.msgElement);
    if (this.table.options.ajaxLoaderLoading) {
      if (typeof this.table.options.ajaxLoaderLoading == "string") {
        template = document.createElement("template");
        template.innerHTML = this.table.options.ajaxLoaderLoading.trim();
        this.loadingElement = template.content.firstChild;
      } else {
        this.loadingElement = this.table.options.ajaxLoaderLoading;
      }
    }
    this.loaderPromise = this.table.options.ajaxRequestFunc || this.defaultLoaderPromise;
    this.urlGenerator = this.table.options.ajaxURLGenerator || this.defaultURLGenerator;
    if (this.table.options.ajaxLoaderError) {
      if (typeof this.table.options.ajaxLoaderError == "string") {
        template = document.createElement("template");
        template.innerHTML = this.table.options.ajaxLoaderError.trim();
        this.errorElement = template.content.firstChild;
      } else {
        this.errorElement = this.table.options.ajaxLoaderError;
      }
    }
    if (this.table.options.ajaxParams) {
      this.setParams(this.table.options.ajaxParams);
    }
    if (this.table.options.ajaxConfig) {
      this.setConfig(this.table.options.ajaxConfig);
    }
    if (this.table.options.ajaxURL) {
      this.setUrl(this.table.options.ajaxURL);
    }
    if (this.table.options.ajaxProgressiveLoad) {
      if (this.table.options.pagination) {
        this.progressiveLoad = false;
        console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time");
      } else {
        if (this.table.modExists("page")) {
          this.progressiveLoad = this.table.options.ajaxProgressiveLoad;
          this.table.modules.page.initializeProgressive(this.progressiveLoad);
        } else {
          console.error("Pagination plugin is required for progressive ajax loading");
        }
      }
    }
  };
  Ajax.prototype.createLoaderElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-loader");
    return el;
  };
  Ajax.prototype.createMsgElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-loader-msg");
    el.setAttribute("role", "alert");
    return el;
  };
  Ajax.prototype.setParams = function(params, update3) {
    if (update3) {
      this.params = this.params || {};
      for (var key in params) {
        this.params[key] = params[key];
      }
    } else {
      this.params = params;
    }
  };
  Ajax.prototype.getParams = function() {
    return this.params || {};
  };
  Ajax.prototype.setConfig = function(config) {
    this._loadDefaultConfig();
    if (typeof config == "string") {
      this.config.method = config;
    } else {
      for (var key in config) {
        this.config[key] = config[key];
      }
    }
  };
  Ajax.prototype._loadDefaultConfig = function(force) {
    var self2 = this;
    if (!self2.config || force) {
      self2.config = {};
      for (var key in self2.defaultConfig) {
        self2.config[key] = self2.defaultConfig[key];
      }
    }
  };
  Ajax.prototype.setUrl = function(url2) {
    this.url = url2;
  };
  Ajax.prototype.getUrl = function() {
    return this.url;
  };
  Ajax.prototype.loadData = function(inPosition, columnsChanged) {
    var self2 = this;
    if (this.progressiveLoad) {
      return this._loadDataProgressive();
    } else {
      return this._loadDataStandard(inPosition, columnsChanged);
    }
  };
  Ajax.prototype.nextPage = function(diff) {
    var margin;
    if (!this.loading) {
      margin = this.table.options.ajaxProgressiveLoadScrollMargin || this.table.rowManager.getElement().clientHeight * 2;
      if (diff < margin) {
        this.table.modules.page.nextPage().then(function() {
        }).catch(function() {
        });
      }
    }
  };
  Ajax.prototype.blockActiveRequest = function() {
    this.requestOrder++;
  };
  Ajax.prototype._loadDataProgressive = function() {
    this.table.rowManager.setData([]);
    return this.table.modules.page.setPage(1);
  };
  Ajax.prototype._loadDataStandard = function(inPosition, columnsChanged) {
    var _this42 = this;
    return new Promise(function(resolve, reject) {
      _this42.sendRequest(inPosition).then(function(data) {
        _this42.table.rowManager.setData(data, inPosition, columnsChanged).then(function() {
          resolve();
        }).catch(function(e2) {
          reject(e2);
        });
      }).catch(function(e2) {
        reject(e2);
      });
    });
  };
  Ajax.prototype.generateParamsList = function(data, prefix) {
    var self2 = this, output = [];
    prefix = prefix || "";
    if (Array.isArray(data)) {
      data.forEach(function(item, i2) {
        output = output.concat(self2.generateParamsList(item, prefix ? prefix + "[" + i2 + "]" : i2));
      });
    } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
      for (var key in data) {
        output = output.concat(self2.generateParamsList(data[key], prefix ? prefix + "[" + key + "]" : key));
      }
    } else {
      output.push({ key: prefix, value: data });
    }
    return output;
  };
  Ajax.prototype.serializeParams = function(params) {
    var output = this.generateParamsList(params), encoded = [];
    output.forEach(function(item) {
      encoded.push(encodeURIComponent(item.key) + "=" + encodeURIComponent(item.value));
    });
    return encoded.join("&");
  };
  Ajax.prototype.sendRequest = function(silent) {
    var _this43 = this;
    var self2 = this, url2 = self2.url, requestNo, esc, query;
    self2.requestOrder++;
    requestNo = self2.requestOrder;
    self2._loadDefaultConfig();
    return new Promise(function(resolve, reject) {
      if (self2.table.options.ajaxRequesting.call(_this43.table, self2.url, self2.params) !== false) {
        self2.loading = true;
        if (!silent) {
          self2.showLoader();
        }
        _this43.loaderPromise(url2, self2.config, self2.params).then(function(data) {
          if (requestNo === self2.requestOrder) {
            if (self2.table.options.ajaxResponse) {
              data = self2.table.options.ajaxResponse.call(self2.table, self2.url, self2.params, data);
            }
            resolve(data);
            self2.hideLoader();
            self2.loading = false;
          } else {
            console.warn("Ajax Response Blocked - An active ajax request was blocked by an attempt to change table data while the request was being made");
          }
        }).catch(function(error) {
          console.error("Ajax Load Error: ", error);
          self2.table.options.ajaxError.call(self2.table, error);
          self2.showError();
          setTimeout(function() {
            self2.hideLoader();
          }, 3e3);
          self2.loading = false;
          reject(error);
        });
      } else {
        reject();
      }
    });
  };
  Ajax.prototype.showLoader = function() {
    var shouldLoad = typeof this.table.options.ajaxLoader === "function" ? this.table.options.ajaxLoader() : this.table.options.ajaxLoader;
    if (shouldLoad) {
      this.hideLoader();
      while (this.msgElement.firstChild) {
        this.msgElement.removeChild(this.msgElement.firstChild);
      }
      this.msgElement.classList.remove("tabulator-error");
      this.msgElement.classList.add("tabulator-loading");
      if (this.loadingElement) {
        this.msgElement.appendChild(this.loadingElement);
      } else {
        this.msgElement.innerHTML = this.table.modules.localize.getText("ajax|loading");
      }
      this.table.element.appendChild(this.loaderElement);
    }
  };
  Ajax.prototype.showError = function() {
    this.hideLoader();
    while (this.msgElement.firstChild) {
      this.msgElement.removeChild(this.msgElement.firstChild);
    }
    this.msgElement.classList.remove("tabulator-loading");
    this.msgElement.classList.add("tabulator-error");
    if (this.errorElement) {
      this.msgElement.appendChild(this.errorElement);
    } else {
      this.msgElement.innerHTML = this.table.modules.localize.getText("ajax|error");
    }
    this.table.element.appendChild(this.loaderElement);
  };
  Ajax.prototype.hideLoader = function() {
    if (this.loaderElement.parentNode) {
      this.loaderElement.parentNode.removeChild(this.loaderElement);
    }
  };
  Ajax.prototype.defaultConfig = {
    method: "GET"
  };
  Ajax.prototype.defaultURLGenerator = function(url2, config, params) {
    if (url2) {
      if (params && Object.keys(params).length) {
        if (!config.method || config.method.toLowerCase() == "get") {
          config.method = "get";
          url2 += (url2.includes("?") ? "&" : "?") + this.modules.ajax.serializeParams(params);
        }
      }
    }
    return url2;
  };
  Ajax.prototype.defaultLoaderPromise = function(url2, config, params) {
    var self2 = this, contentType;
    return new Promise(function(resolve, reject) {
      url2 = self2.urlGenerator.call(self2.table, url2, config, params);
      if (config.method.toUpperCase() != "GET") {
        contentType = _typeof(self2.table.options.ajaxContentType) === "object" ? self2.table.options.ajaxContentType : self2.contentTypeFormatters[self2.table.options.ajaxContentType];
        if (contentType) {
          for (var key in contentType.headers) {
            if (!config.headers) {
              config.headers = {};
            }
            if (typeof config.headers[key] === "undefined") {
              config.headers[key] = contentType.headers[key];
            }
          }
          config.body = contentType.body.call(self2, url2, config, params);
        } else {
          console.warn("Ajax Error - Invalid ajaxContentType value:", self2.table.options.ajaxContentType);
        }
      }
      if (url2) {
        if (typeof config.headers === "undefined") {
          config.headers = {};
        }
        if (typeof config.headers.Accept === "undefined") {
          config.headers.Accept = "application/json";
        }
        if (typeof config.headers["X-Requested-With"] === "undefined") {
          config.headers["X-Requested-With"] = "XMLHttpRequest";
        }
        if (typeof config.mode === "undefined") {
          config.mode = "cors";
        }
        if (config.mode == "cors") {
          if (typeof config.headers["Access-Control-Allow-Origin"] === "undefined") {
            config.headers["Access-Control-Allow-Origin"] = window.location.origin;
          }
          if (typeof config.credentials === "undefined") {
            config.credentials = "same-origin";
          }
        } else {
          if (typeof config.credentials === "undefined") {
            config.credentials = "include";
          }
        }
        fetch(url2, config).then(function(response) {
          if (response.ok) {
            response.json().then(function(data) {
              resolve(data);
            }).catch(function(error) {
              reject(error);
              console.warn("Ajax Load Error - Invalid JSON returned", error);
            });
          } else {
            console.error("Ajax Load Error - Connection Error: " + response.status, response.statusText);
            reject(response);
          }
        }).catch(function(error) {
          console.error("Ajax Load Error - Connection Error: ", error);
          reject(error);
        });
      } else {
        console.warn("Ajax Load Error - No URL Set");
        resolve([]);
      }
    });
  };
  Ajax.prototype.contentTypeFormatters = {
    "json": {
      headers: {
        "Content-Type": "application/json"
      },
      body: function body(url2, config, params) {
        return JSON.stringify(params);
      }
    },
    "form": {
      headers: {},
      body: function body2(url2, config, params) {
        var output = this.generateParamsList(params), form = new FormData();
        output.forEach(function(item) {
          form.append(item.key, item.value);
        });
        return form;
      }
    }
  };
  Tabulator.prototype.registerModule("ajax", Ajax);
  var CalcComponent = function CalcComponent2(row2) {
    this._row = row2;
  };
  CalcComponent.prototype.getData = function(transform) {
    return this._row.getData(transform);
  };
  CalcComponent.prototype.getElement = function() {
    return this._row.getElement();
  };
  CalcComponent.prototype.getTable = function() {
    return this._row.table;
  };
  CalcComponent.prototype.getCells = function() {
    var cells = [];
    this._row.getCells().forEach(function(cell) {
      cells.push(cell.getComponent());
    });
    return cells;
  };
  CalcComponent.prototype.getCell = function(column2) {
    var cell = this._row.getCell(column2);
    return cell ? cell.getComponent() : false;
  };
  CalcComponent.prototype._getSelf = function() {
    return this._row;
  };
  var ColumnCalcs = function ColumnCalcs2(table4) {
    this.table = table4;
    this.topCalcs = [];
    this.botCalcs = [];
    this.genColumn = false;
    this.topElement = this.createElement();
    this.botElement = this.createElement();
    this.topRow = false;
    this.botRow = false;
    this.topInitialized = false;
    this.botInitialized = false;
    this.initialize();
  };
  ColumnCalcs.prototype.createElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-calcs-holder");
    return el;
  };
  ColumnCalcs.prototype.initialize = function() {
    this.genColumn = new Column({ field: "value" }, this);
  };
  ColumnCalcs.prototype.registerColumnField = function() {
  };
  ColumnCalcs.prototype.initializeColumn = function(column2) {
    var def = column2.definition;
    var config = {
      topCalcParams: def.topCalcParams || {},
      botCalcParams: def.bottomCalcParams || {}
    };
    if (def.topCalc) {
      switch (_typeof(def.topCalc)) {
        case "string":
          if (this.calculations[def.topCalc]) {
            config.topCalc = this.calculations[def.topCalc];
          } else {
            console.warn("Column Calc Error - No such calculation found, ignoring: ", def.topCalc);
          }
          break;
        case "function":
          config.topCalc = def.topCalc;
          break;
      }
      if (config.topCalc) {
        column2.modules.columnCalcs = config;
        this.topCalcs.push(column2);
        if (this.table.options.columnCalcs != "group") {
          this.initializeTopRow();
        }
      }
    }
    if (def.bottomCalc) {
      switch (_typeof(def.bottomCalc)) {
        case "string":
          if (this.calculations[def.bottomCalc]) {
            config.botCalc = this.calculations[def.bottomCalc];
          } else {
            console.warn("Column Calc Error - No such calculation found, ignoring: ", def.bottomCalc);
          }
          break;
        case "function":
          config.botCalc = def.bottomCalc;
          break;
      }
      if (config.botCalc) {
        column2.modules.columnCalcs = config;
        this.botCalcs.push(column2);
        if (this.table.options.columnCalcs != "group") {
          this.initializeBottomRow();
        }
      }
    }
  };
  ColumnCalcs.prototype.removeCalcs = function() {
    var changed = false;
    if (this.topInitialized) {
      this.topInitialized = false;
      this.topElement.parentNode.removeChild(this.topElement);
      changed = true;
    }
    if (this.botInitialized) {
      this.botInitialized = false;
      this.table.footerManager.remove(this.botElement);
      changed = true;
    }
    if (changed) {
      this.table.rowManager.adjustTableSize();
    }
  };
  ColumnCalcs.prototype.initializeTopRow = function() {
    if (!this.topInitialized) {
      this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling);
      this.topInitialized = true;
    }
  };
  ColumnCalcs.prototype.initializeBottomRow = function() {
    if (!this.botInitialized) {
      this.table.footerManager.prepend(this.botElement);
      this.botInitialized = true;
    }
  };
  ColumnCalcs.prototype.scrollHorizontal = function(left) {
    if (this.botInitialized && this.botRow) {
      this.botRow.getElement().style.marginLeft = -left + "px";
    }
  };
  ColumnCalcs.prototype.recalc = function(rows) {
    var data, row2;
    if (this.topInitialized || this.botInitialized) {
      data = this.rowsToData(rows);
      if (this.topInitialized) {
        if (this.topRow) {
          this.topRow.deleteCells();
        }
        row2 = this.generateRow("top", this.rowsToData(rows));
        this.topRow = row2;
        while (this.topElement.firstChild) {
          this.topElement.removeChild(this.topElement.firstChild);
        }
        this.topElement.appendChild(row2.getElement());
        row2.initialize(true);
      }
      if (this.botInitialized) {
        if (this.botRow) {
          this.botRow.deleteCells();
        }
        row2 = this.generateRow("bottom", this.rowsToData(rows));
        this.botRow = row2;
        while (this.botElement.firstChild) {
          this.botElement.removeChild(this.botElement.firstChild);
        }
        this.botElement.appendChild(row2.getElement());
        row2.initialize(true);
      }
      this.table.rowManager.adjustTableSize();
      if (this.table.modExists("frozenColumns")) {
        this.table.modules.frozenColumns.layout();
      }
    }
  };
  ColumnCalcs.prototype.recalcRowGroup = function(row2) {
    this.recalcGroup(this.table.modules.groupRows.getRowGroup(row2));
  };
  ColumnCalcs.prototype.recalcAll = function() {
    var _this44 = this;
    if (this.topCalcs.length || this.botCalcs.length) {
      if (this.table.options.columnCalcs !== "group") {
        this.recalc(this.table.rowManager.activeRows);
      }
      if (this.table.options.groupBy && this.table.options.columnCalcs !== "table") {
        var groups = table.modules.groupRows.getChildGroups();
        groups.forEach(function(group) {
          _this44.recalcGroup(group);
        });
      }
    }
  };
  ColumnCalcs.prototype.recalcGroup = function(group) {
    var data, rowData;
    if (group) {
      if (group.calcs) {
        if (group.calcs.bottom) {
          data = this.rowsToData(group.rows);
          rowData = this.generateRowData("bottom", data);
          group.calcs.bottom.updateData(rowData);
          group.calcs.bottom.reinitialize();
        }
        if (group.calcs.top) {
          data = this.rowsToData(group.rows);
          rowData = this.generateRowData("top", data);
          group.calcs.top.updateData(rowData);
          group.calcs.top.reinitialize();
        }
      }
    }
  };
  ColumnCalcs.prototype.generateTopRow = function(rows) {
    return this.generateRow("top", this.rowsToData(rows));
  };
  ColumnCalcs.prototype.generateBottomRow = function(rows) {
    return this.generateRow("bottom", this.rowsToData(rows));
  };
  ColumnCalcs.prototype.rowsToData = function(rows) {
    var _this45 = this;
    var data = [];
    rows.forEach(function(row2) {
      data.push(row2.getData());
      if (_this45.table.options.dataTree && _this45.table.options.dataTreeChildColumnCalcs) {
        if (row2.modules.dataTree.open) {
          var children = _this45.rowsToData(_this45.table.modules.dataTree.getFilteredTreeChildren(row2));
          data = data.concat(children);
        }
      }
    });
    return data;
  };
  ColumnCalcs.prototype.generateRow = function(pos, data) {
    var self2 = this, rowData = this.generateRowData(pos, data), row2;
    if (self2.table.modExists("mutator")) {
      self2.table.modules.mutator.disable();
    }
    row2 = new Row(rowData, this, "calc");
    if (self2.table.modExists("mutator")) {
      self2.table.modules.mutator.enable();
    }
    row2.getElement().classList.add("tabulator-calcs", "tabulator-calcs-" + pos);
    row2.component = false;
    row2.getComponent = function() {
      if (!this.component) {
        this.component = new CalcComponent(this);
      }
      return this.component;
    };
    row2.generateCells = function() {
      var cells = [];
      self2.table.columnManager.columnsByIndex.forEach(function(column2) {
        self2.genColumn.setField(column2.getField());
        self2.genColumn.hozAlign = column2.hozAlign;
        if (column2.definition[pos + "CalcFormatter"] && self2.table.modExists("format")) {
          self2.genColumn.modules.format = {
            formatter: self2.table.modules.format.getFormatter(column2.definition[pos + "CalcFormatter"]),
            params: column2.definition[pos + "CalcFormatterParams"] || {}
          };
        } else {
          self2.genColumn.modules.format = {
            formatter: self2.table.modules.format.getFormatter("plaintext"),
            params: {}
          };
        }
        self2.genColumn.definition.cssClass = column2.definition.cssClass;
        var cell = new Cell(self2.genColumn, row2);
        cell.getElement();
        cell.column = column2;
        cell.setWidth();
        column2.cells.push(cell);
        cells.push(cell);
        if (!column2.visible) {
          cell.hide();
        }
      });
      this.cells = cells;
    };
    return row2;
  };
  ColumnCalcs.prototype.generateRowData = function(pos, data) {
    var rowData = {}, calcs = pos == "top" ? this.topCalcs : this.botCalcs, type = pos == "top" ? "topCalc" : "botCalc", params, paramKey;
    calcs.forEach(function(column2) {
      var values = [];
      if (column2.modules.columnCalcs && column2.modules.columnCalcs[type]) {
        data.forEach(function(item) {
          values.push(column2.getFieldValue(item));
        });
        paramKey = type + "Params";
        params = typeof column2.modules.columnCalcs[paramKey] === "function" ? column2.modules.columnCalcs[paramKey](values, data) : column2.modules.columnCalcs[paramKey];
        column2.setFieldValue(rowData, column2.modules.columnCalcs[type](values, data, params));
      }
    });
    return rowData;
  };
  ColumnCalcs.prototype.hasTopCalcs = function() {
    return !!this.topCalcs.length;
  };
  ColumnCalcs.prototype.hasBottomCalcs = function() {
    return !!this.botCalcs.length;
  };
  ColumnCalcs.prototype.redraw = function() {
    if (this.topRow) {
      this.topRow.normalizeHeight(true);
    }
    if (this.botRow) {
      this.botRow.normalizeHeight(true);
    }
  };
  ColumnCalcs.prototype.getResults = function() {
    var self2 = this, results = {}, groups;
    if (this.table.options.groupBy && this.table.modExists("groupRows")) {
      groups = this.table.modules.groupRows.getGroups(true);
      groups.forEach(function(group) {
        results[group.getKey()] = self2.getGroupResults(group);
      });
    } else {
      results = {
        top: this.topRow ? this.topRow.getData() : {},
        bottom: this.botRow ? this.botRow.getData() : {}
      };
    }
    return results;
  };
  ColumnCalcs.prototype.getGroupResults = function(group) {
    var self2 = this, groupObj = group._getSelf(), subGroups = group.getSubGroups(), subGroupResults = {}, results = {};
    subGroups.forEach(function(subgroup) {
      subGroupResults[subgroup.getKey()] = self2.getGroupResults(subgroup);
    });
    results = {
      top: groupObj.calcs.top ? groupObj.calcs.top.getData() : {},
      bottom: groupObj.calcs.bottom ? groupObj.calcs.bottom.getData() : {},
      groups: subGroupResults
    };
    return results;
  };
  ColumnCalcs.prototype.calculations = {
    "avg": function avg(values, data, calcParams) {
      var output = 0, precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : 2;
      if (values.length) {
        output = values.reduce(function(sum2, value) {
          return Number(sum2) + Number(value);
        });
        output = output / values.length;
        output = precision !== false ? output.toFixed(precision) : output;
      }
      return parseFloat(output).toString();
    },
    "max": function max(values, data, calcParams) {
      var output = null, precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;
      values.forEach(function(value) {
        value = Number(value);
        if (value > output || output === null) {
          output = value;
        }
      });
      return output !== null ? precision !== false ? output.toFixed(precision) : output : "";
    },
    "min": function min(values, data, calcParams) {
      var output = null, precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;
      values.forEach(function(value) {
        value = Number(value);
        if (value < output || output === null) {
          output = value;
        }
      });
      return output !== null ? precision !== false ? output.toFixed(precision) : output : "";
    },
    "sum": function sum(values, data, calcParams) {
      var output = 0, precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;
      if (values.length) {
        values.forEach(function(value) {
          value = Number(value);
          output += !isNaN(value) ? Number(value) : 0;
        });
      }
      return precision !== false ? output.toFixed(precision) : output;
    },
    "concat": function concat(values, data, calcParams) {
      var output = 0;
      if (values.length) {
        output = values.reduce(function(sum2, value) {
          return String(sum2) + String(value);
        });
      }
      return output;
    },
    "count": function count(values, data, calcParams) {
      var output = 0;
      if (values.length) {
        values.forEach(function(value) {
          if (value) {
            output++;
          }
        });
      }
      return output;
    }
  };
  Tabulator.prototype.registerModule("columnCalcs", ColumnCalcs);
  var Clipboard = function Clipboard2(table4) {
    this.table = table4;
    this.mode = true;
    this.pasteParser = function() {
    };
    this.pasteAction = function() {
    };
    this.customSelection = false;
    this.rowRange = false;
    this.blocked = true;
  };
  Clipboard.prototype.initialize = function() {
    var _this46 = this;
    this.mode = this.table.options.clipboard;
    this.rowRange = this.table.options.clipboardCopyRowRange;
    if (this.mode === true || this.mode === "copy") {
      this.table.element.addEventListener("copy", function(e2) {
        var plain, html3, list;
        if (!_this46.blocked) {
          e2.preventDefault();
          if (_this46.customSelection) {
            plain = _this46.customSelection;
            if (_this46.table.options.clipboardCopyFormatter) {
              plain = _this46.table.options.clipboardCopyFormatter("plain", plain);
            }
          } else {
            var list = _this46.table.modules.export.generateExportList(_this46.table.options.clipboardCopyConfig, _this46.table.options.clipboardCopyStyled, _this46.rowRange, "clipboard");
            html3 = _this46.table.modules.export.genereateHTMLTable(list);
            plain = html3 ? _this46.generatePlainContent(list) : "";
            if (_this46.table.options.clipboardCopyFormatter) {
              plain = _this46.table.options.clipboardCopyFormatter("plain", plain);
              html3 = _this46.table.options.clipboardCopyFormatter("html", html3);
            }
          }
          if (window.clipboardData && window.clipboardData.setData) {
            window.clipboardData.setData("Text", plain);
          } else if (e2.clipboardData && e2.clipboardData.setData) {
            e2.clipboardData.setData("text/plain", plain);
            if (html3) {
              e2.clipboardData.setData("text/html", html3);
            }
          } else if (e2.originalEvent && e2.originalEvent.clipboardData.setData) {
            e2.originalEvent.clipboardData.setData("text/plain", plain);
            if (html3) {
              e2.originalEvent.clipboardData.setData("text/html", html3);
            }
          }
          _this46.table.options.clipboardCopied.call(_this46.table, plain, html3);
          _this46.reset();
        }
      });
    }
    if (this.mode === true || this.mode === "paste") {
      this.table.element.addEventListener("paste", function(e2) {
        _this46.paste(e2);
      });
    }
    this.setPasteParser(this.table.options.clipboardPasteParser);
    this.setPasteAction(this.table.options.clipboardPasteAction);
  };
  Clipboard.prototype.reset = function() {
    this.blocked = true;
    this.customSelection = false;
  };
  Clipboard.prototype.generatePlainContent = function(list) {
    var output = [];
    list.forEach(function(row2) {
      var rowData = [];
      row2.columns.forEach(function(col) {
        var value = "";
        if (col) {
          if (row2.type === "group") {
            col.value = col.component.getKey();
          }
          if (col.value === null) {
            value = "";
          } else {
            switch (_typeof(col.value)) {
              case "object":
                value = JSON.stringify(col.value);
                break;
              case "undefined":
                value = "";
                break;
              default:
                value = col.value;
            }
          }
        }
        rowData.push(value);
      });
      output.push(rowData.join("	"));
    });
    return output.join("\n");
  };
  Clipboard.prototype.copy = function(range2, internal) {
    var range2, sel, textRange;
    this.blocked = false;
    this.customSelection = false;
    if (this.mode === true || this.mode === "copy") {
      this.rowRange = range2 || this.table.options.clipboardCopyRowRange;
      if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        range2 = document.createRange();
        range2.selectNodeContents(this.table.element);
        sel = window.getSelection();
        if (sel.toString() && internal) {
          this.customSelection = sel.toString();
        }
        sel.removeAllRanges();
        sel.addRange(range2);
      } else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
        textRange = document.body.createTextRange();
        textRange.moveToElementText(this.table.element);
        textRange.select();
      }
      document.execCommand("copy");
      if (sel) {
        sel.removeAllRanges();
      }
    }
  };
  Clipboard.prototype.setPasteAction = function(action) {
    switch (typeof action === "undefined" ? "undefined" : _typeof(action)) {
      case "string":
        this.pasteAction = this.pasteActions[action];
        if (!this.pasteAction) {
          console.warn("Clipboard Error - No such paste action found:", action);
        }
        break;
      case "function":
        this.pasteAction = action;
        break;
    }
  };
  Clipboard.prototype.setPasteParser = function(parser) {
    switch (typeof parser === "undefined" ? "undefined" : _typeof(parser)) {
      case "string":
        this.pasteParser = this.pasteParsers[parser];
        if (!this.pasteParser) {
          console.warn("Clipboard Error - No such paste parser found:", parser);
        }
        break;
      case "function":
        this.pasteParser = parser;
        break;
    }
  };
  Clipboard.prototype.paste = function(e2) {
    var data, rowData, rows;
    if (this.checkPaseOrigin(e2)) {
      data = this.getPasteData(e2);
      rowData = this.pasteParser.call(this, data);
      if (rowData) {
        e2.preventDefault();
        if (this.table.modExists("mutator")) {
          rowData = this.mutateData(rowData);
        }
        rows = this.pasteAction.call(this, rowData);
        this.table.options.clipboardPasted.call(this.table, data, rowData, rows);
      } else {
        this.table.options.clipboardPasteError.call(this.table, data);
      }
    }
  };
  Clipboard.prototype.mutateData = function(data) {
    var self2 = this, output = [];
    if (Array.isArray(data)) {
      data.forEach(function(row2) {
        output.push(self2.table.modules.mutator.transformRow(row2, "clipboard"));
      });
    } else {
      output = data;
    }
    return output;
  };
  Clipboard.prototype.checkPaseOrigin = function(e2) {
    var valid = true;
    if (e2.target.tagName != "DIV" || this.table.modules.edit.currentCell) {
      valid = false;
    }
    return valid;
  };
  Clipboard.prototype.getPasteData = function(e2) {
    var data;
    if (window.clipboardData && window.clipboardData.getData) {
      data = window.clipboardData.getData("Text");
    } else if (e2.clipboardData && e2.clipboardData.getData) {
      data = e2.clipboardData.getData("text/plain");
    } else if (e2.originalEvent && e2.originalEvent.clipboardData.getData) {
      data = e2.originalEvent.clipboardData.getData("text/plain");
    }
    return data;
  };
  Clipboard.prototype.pasteParsers = {
    table: function table2(clipboard) {
      var data = [], success = false, headerFindSuccess = true, columns2 = this.table.columnManager.columns, columnMap = [], rows = [];
      clipboard = clipboard.split("\n");
      clipboard.forEach(function(row2) {
        data.push(row2.split("	"));
      });
      if (data.length && !(data.length === 1 && data[0].length < 2)) {
        success = true;
        data[0].forEach(function(value) {
          var column2 = columns2.find(function(column3) {
            return value && column3.definition.title && value.trim() && column3.definition.title.trim() === value.trim();
          });
          if (column2) {
            columnMap.push(column2);
          } else {
            headerFindSuccess = false;
          }
        });
        if (!headerFindSuccess) {
          headerFindSuccess = true;
          columnMap = [];
          data[0].forEach(function(value) {
            var column2 = columns2.find(function(column3) {
              return value && column3.field && value.trim() && column3.field.trim() === value.trim();
            });
            if (column2) {
              columnMap.push(column2);
            } else {
              headerFindSuccess = false;
            }
          });
          if (!headerFindSuccess) {
            columnMap = this.table.columnManager.columnsByIndex;
          }
        }
        if (headerFindSuccess) {
          data.shift();
        }
        data.forEach(function(item) {
          var row2 = {};
          item.forEach(function(value, i2) {
            if (columnMap[i2]) {
              row2[columnMap[i2].field] = value;
            }
          });
          rows.push(row2);
        });
        return rows;
      } else {
        return false;
      }
    }
  };
  Clipboard.prototype.pasteActions = {
    replace: function replace(rows) {
      return this.table.setData(rows);
    },
    update: function update(rows) {
      return this.table.updateOrAddData(rows);
    },
    insert: function insert(rows) {
      return this.table.addData(rows);
    }
  };
  Tabulator.prototype.registerModule("clipboard", Clipboard);
  var DataTree = function DataTree2(table4) {
    this.table = table4;
    this.indent = 10;
    this.field = "";
    this.collapseEl = null;
    this.expandEl = null;
    this.branchEl = null;
    this.elementField = false;
    this.startOpen = function() {
    };
    this.displayIndex = 0;
  };
  DataTree.prototype.initialize = function() {
    var dummyEl = null, firstCol = this.table.columnManager.getFirstVisibileColumn(), options = this.table.options;
    this.field = options.dataTreeChildField;
    this.indent = options.dataTreeChildIndent;
    this.elementField = options.dataTreeElementColumn || (firstCol ? firstCol.field : false);
    if (options.dataTreeBranchElement) {
      if (options.dataTreeBranchElement === true) {
        this.branchEl = document.createElement("div");
        this.branchEl.classList.add("tabulator-data-tree-branch");
      } else {
        if (typeof options.dataTreeBranchElement === "string") {
          dummyEl = document.createElement("div");
          dummyEl.innerHTML = options.dataTreeBranchElement;
          this.branchEl = dummyEl.firstChild;
        } else {
          this.branchEl = options.dataTreeBranchElement;
        }
      }
    }
    if (options.dataTreeCollapseElement) {
      if (typeof options.dataTreeCollapseElement === "string") {
        dummyEl = document.createElement("div");
        dummyEl.innerHTML = options.dataTreeCollapseElement;
        this.collapseEl = dummyEl.firstChild;
      } else {
        this.collapseEl = options.dataTreeCollapseElement;
      }
    } else {
      this.collapseEl = document.createElement("div");
      this.collapseEl.classList.add("tabulator-data-tree-control");
      this.collapseEl.tabIndex = 0;
      this.collapseEl.innerHTML = "<div class='tabulator-data-tree-control-collapse'></div>";
    }
    if (options.dataTreeExpandElement) {
      if (typeof options.dataTreeExpandElement === "string") {
        dummyEl = document.createElement("div");
        dummyEl.innerHTML = options.dataTreeExpandElement;
        this.expandEl = dummyEl.firstChild;
      } else {
        this.expandEl = options.dataTreeExpandElement;
      }
    } else {
      this.expandEl = document.createElement("div");
      this.expandEl.classList.add("tabulator-data-tree-control");
      this.expandEl.tabIndex = 0;
      this.expandEl.innerHTML = "<div class='tabulator-data-tree-control-expand'></div>";
    }
    switch (_typeof(options.dataTreeStartExpanded)) {
      case "boolean":
        this.startOpen = function(row2, index) {
          return options.dataTreeStartExpanded;
        };
        break;
      case "function":
        this.startOpen = options.dataTreeStartExpanded;
        break;
      default:
        this.startOpen = function(row2, index) {
          return options.dataTreeStartExpanded[index];
        };
        break;
    }
  };
  DataTree.prototype.initializeRow = function(row2) {
    var childArray = row2.getData()[this.field];
    var isArray = Array.isArray(childArray);
    var children = isArray || !isArray && (typeof childArray === "undefined" ? "undefined" : _typeof(childArray)) === "object" && childArray !== null;
    if (!children && row2.modules.dataTree && row2.modules.dataTree.branchEl) {
      row2.modules.dataTree.branchEl.parentNode.removeChild(row2.modules.dataTree.branchEl);
    }
    if (!children && row2.modules.dataTree && row2.modules.dataTree.controlEl) {
      row2.modules.dataTree.controlEl.parentNode.removeChild(row2.modules.dataTree.controlEl);
    }
    row2.modules.dataTree = {
      index: row2.modules.dataTree ? row2.modules.dataTree.index : 0,
      open: children ? row2.modules.dataTree ? row2.modules.dataTree.open : this.startOpen(row2.getComponent(), 0) : false,
      controlEl: row2.modules.dataTree && children ? row2.modules.dataTree.controlEl : false,
      branchEl: row2.modules.dataTree && children ? row2.modules.dataTree.branchEl : false,
      parent: row2.modules.dataTree ? row2.modules.dataTree.parent : false,
      children
    };
  };
  DataTree.prototype.layoutRow = function(row2) {
    var cell = this.elementField ? row2.getCell(this.elementField) : row2.getCells()[0], el = cell.getElement(), config = row2.modules.dataTree;
    if (config.branchEl) {
      if (config.branchEl.parentNode) {
        config.branchEl.parentNode.removeChild(config.branchEl);
      }
      config.branchEl = false;
    }
    if (config.controlEl) {
      if (config.controlEl.parentNode) {
        config.controlEl.parentNode.removeChild(config.controlEl);
      }
      config.controlEl = false;
    }
    this.generateControlElement(row2, el);
    row2.getElement().classList.add("tabulator-tree-level-" + config.index);
    if (config.index) {
      if (this.branchEl) {
        config.branchEl = this.branchEl.cloneNode(true);
        el.insertBefore(config.branchEl, el.firstChild);
        if (this.table.rtl) {
          config.branchEl.style.marginRight = (config.branchEl.offsetWidth + config.branchEl.style.marginLeft) * (config.index - 1) + config.index * this.indent + "px";
        } else {
          config.branchEl.style.marginLeft = (config.branchEl.offsetWidth + config.branchEl.style.marginRight) * (config.index - 1) + config.index * this.indent + "px";
        }
      } else {
        if (this.table.rtl) {
          el.style.paddingRight = parseInt(window.getComputedStyle(el, null).getPropertyValue("padding-right")) + config.index * this.indent + "px";
        } else {
          el.style.paddingLeft = parseInt(window.getComputedStyle(el, null).getPropertyValue("padding-left")) + config.index * this.indent + "px";
        }
      }
    }
  };
  DataTree.prototype.generateControlElement = function(row2, el) {
    var _this47 = this;
    var config = row2.modules.dataTree, el = el || row2.getCells()[0].getElement(), oldControl = config.controlEl;
    if (config.children !== false) {
      if (config.open) {
        config.controlEl = this.collapseEl.cloneNode(true);
        config.controlEl.addEventListener("click", function(e2) {
          e2.stopPropagation();
          _this47.collapseRow(row2);
        });
      } else {
        config.controlEl = this.expandEl.cloneNode(true);
        config.controlEl.addEventListener("click", function(e2) {
          e2.stopPropagation();
          _this47.expandRow(row2);
        });
      }
      config.controlEl.addEventListener("mousedown", function(e2) {
        e2.stopPropagation();
      });
      if (oldControl && oldControl.parentNode === el) {
        oldControl.parentNode.replaceChild(config.controlEl, oldControl);
      } else {
        el.insertBefore(config.controlEl, el.firstChild);
      }
    }
  };
  DataTree.prototype.setDisplayIndex = function(index) {
    this.displayIndex = index;
  };
  DataTree.prototype.getDisplayIndex = function() {
    return this.displayIndex;
  };
  DataTree.prototype.getRows = function(rows) {
    var _this48 = this;
    var output = [];
    rows.forEach(function(row2, i2) {
      var config, children;
      output.push(row2);
      if (row2 instanceof Row) {
        row2.create();
        config = row2.modules.dataTree.children;
        if (!config.index && config.children !== false) {
          children = _this48.getChildren(row2);
          children.forEach(function(child) {
            child.create();
            output.push(child);
          });
        }
      }
    });
    return output;
  };
  DataTree.prototype.getChildren = function(row2, allChildren) {
    var _this49 = this;
    var config = row2.modules.dataTree, children = [], output = [];
    if (config.children !== false && (config.open || allChildren)) {
      if (!Array.isArray(config.children)) {
        config.children = this.generateChildren(row2);
      }
      if (this.table.modExists("filter") && this.table.options.dataTreeFilter) {
        children = this.table.modules.filter.filter(config.children);
      } else {
        children = config.children;
      }
      if (this.table.modExists("sort") && this.table.options.dataTreeSort) {
        this.table.modules.sort.sort(children);
      }
      children.forEach(function(child) {
        output.push(child);
        var subChildren = _this49.getChildren(child);
        subChildren.forEach(function(sub) {
          output.push(sub);
        });
      });
    }
    return output;
  };
  DataTree.prototype.generateChildren = function(row2) {
    var _this50 = this;
    var children = [];
    var childArray = row2.getData()[this.field];
    if (!Array.isArray(childArray)) {
      childArray = [childArray];
    }
    childArray.forEach(function(childData) {
      var childRow = new Row(childData || {}, _this50.table.rowManager);
      childRow.create();
      childRow.modules.dataTree.index = row2.modules.dataTree.index + 1;
      childRow.modules.dataTree.parent = row2;
      if (childRow.modules.dataTree.children) {
        childRow.modules.dataTree.open = _this50.startOpen(childRow.getComponent(), childRow.modules.dataTree.index);
      }
      children.push(childRow);
    });
    return children;
  };
  DataTree.prototype.expandRow = function(row2, silent) {
    var config = row2.modules.dataTree;
    if (config.children !== false) {
      config.open = true;
      row2.reinitialize();
      this.table.rowManager.refreshActiveData("tree", false, true);
      this.table.options.dataTreeRowExpanded(row2.getComponent(), row2.modules.dataTree.index);
    }
  };
  DataTree.prototype.collapseRow = function(row2) {
    var config = row2.modules.dataTree;
    if (config.children !== false) {
      config.open = false;
      row2.reinitialize();
      this.table.rowManager.refreshActiveData("tree", false, true);
      this.table.options.dataTreeRowCollapsed(row2.getComponent(), row2.modules.dataTree.index);
    }
  };
  DataTree.prototype.toggleRow = function(row2) {
    var config = row2.modules.dataTree;
    if (config.children !== false) {
      if (config.open) {
        this.collapseRow(row2);
      } else {
        this.expandRow(row2);
      }
    }
  };
  DataTree.prototype.getTreeParent = function(row2) {
    return row2.modules.dataTree.parent ? row2.modules.dataTree.parent.getComponent() : false;
  };
  DataTree.prototype.getFilteredTreeChildren = function(row2) {
    var config = row2.modules.dataTree, output = [], children;
    if (config.children) {
      if (!Array.isArray(config.children)) {
        config.children = this.generateChildren(row2);
      }
      if (this.table.modExists("filter") && this.table.options.dataTreeFilter) {
        children = this.table.modules.filter.filter(config.children);
      } else {
        children = config.children;
      }
      children.forEach(function(childRow) {
        if (childRow instanceof Row) {
          output.push(childRow);
        }
      });
    }
    return output;
  };
  DataTree.prototype.rowDelete = function(row2) {
    var parent = row2.modules.dataTree.parent, childIndex;
    if (parent) {
      childIndex = this.findChildIndex(row2, parent);
      if (childIndex !== false) {
        parent.data[this.field].splice(childIndex, 1);
      }
      if (!parent.data[this.field].length) {
        delete parent.data[this.field];
      }
      this.initializeRow(parent);
      this.layoutRow(parent);
    }
    this.table.rowManager.refreshActiveData("tree", false, true);
  };
  DataTree.prototype.addTreeChildRow = function(row2, data, top, index) {
    var childIndex = false;
    if (typeof data === "string") {
      data = JSON.parse(data);
    }
    if (!Array.isArray(row2.data[this.field])) {
      row2.data[this.field] = [];
      row2.modules.dataTree.open = this.startOpen(row2.getComponent(), row2.modules.dataTree.index);
    }
    if (typeof index !== "undefined") {
      childIndex = this.findChildIndex(index, row2);
      if (childIndex !== false) {
        row2.data[this.field].splice(top ? childIndex : childIndex + 1, 0, data);
      }
    }
    if (childIndex === false) {
      if (top) {
        row2.data[this.field].unshift(data);
      } else {
        row2.data[this.field].push(data);
      }
    }
    this.initializeRow(row2);
    this.layoutRow(row2);
    this.table.rowManager.refreshActiveData("tree", false, true);
  };
  DataTree.prototype.findChildIndex = function(subject, parent) {
    var _this51 = this;
    var match = false;
    if ((typeof subject === "undefined" ? "undefined" : _typeof(subject)) == "object") {
      if (subject instanceof Row) {
        match = subject.data;
      } else if (subject instanceof RowComponent) {
        match = subject._getSelf().data;
      } else if (typeof HTMLElement !== "undefined" && subject instanceof HTMLElement) {
        if (parent.modules.dataTree) {
          match = parent.modules.dataTree.children.find(function(childRow) {
            return childRow instanceof Row ? childRow.element === subject : false;
          });
          if (match) {
            match = match.data;
          }
        }
      }
    } else if (typeof subject == "undefined" || subject === null) {
      match = false;
    } else {
      match = parent.data[this.field].find(function(row2) {
        return row2.data[_this51.table.options.index] == subject;
      });
    }
    if (match) {
      if (Array.isArray(parent.data[this.field])) {
        match = parent.data[this.field].indexOf(match);
      }
      if (match == -1) {
        match = false;
      }
    }
    return match;
  };
  DataTree.prototype.getTreeChildren = function(row2, component2, recurse) {
    var _this52 = this;
    var config = row2.modules.dataTree, output = [];
    if (config.children) {
      if (!Array.isArray(config.children)) {
        config.children = this.generateChildren(row2);
      }
      config.children.forEach(function(childRow) {
        if (childRow instanceof Row) {
          output.push(component2 ? childRow.getComponent() : childRow);
          if (recurse) {
            output = output.concat(_this52.getTreeChildren(childRow, component2, recurse));
          }
        }
      });
    }
    return output;
  };
  DataTree.prototype.checkForRestyle = function(cell) {
    if (!cell.row.cells.indexOf(cell)) {
      cell.row.reinitialize();
    }
  };
  DataTree.prototype.getChildField = function() {
    return this.field;
  };
  DataTree.prototype.redrawNeeded = function(data) {
    return (this.field ? typeof data[this.field] !== "undefined" : false) || (this.elementField ? typeof data[this.elementField] !== "undefined" : false);
  };
  Tabulator.prototype.registerModule("dataTree", DataTree);
  var Download = function Download2(table4) {
    this.table = table4;
  };
  Download.prototype.download = function(type, filename, options, range2, interceptCallback) {
    var self2 = this, downloadFunc = false;
    function buildLink(data, mime) {
      if (interceptCallback) {
        if (interceptCallback === true) {
          self2.triggerDownload(data, mime, type, filename, true);
        } else {
          interceptCallback(data);
        }
      } else {
        self2.triggerDownload(data, mime, type, filename);
      }
    }
    if (typeof type == "function") {
      downloadFunc = type;
    } else {
      if (self2.downloaders[type]) {
        downloadFunc = self2.downloaders[type];
      } else {
        console.warn("Download Error - No such download type found: ", type);
      }
    }
    if (downloadFunc) {
      var list = this.generateExportList(range2);
      downloadFunc.call(this.table, list, options || {}, buildLink);
    }
  };
  Download.prototype.generateExportList = function(range2) {
    var list = this.table.modules.export.generateExportList(this.table.options.downloadConfig, false, range2 || this.table.options.downloadRowRange, "download");
    var groupHeader = this.table.options.groupHeaderDownload;
    if (groupHeader && !Array.isArray(groupHeader)) {
      groupHeader = [groupHeader];
    }
    list.forEach(function(row2) {
      var group;
      if (row2.type === "group") {
        group = row2.columns[0];
        if (groupHeader && groupHeader[row2.indent]) {
          group.value = groupHeader[row2.indent](group.value, row2.component._group.getRowCount(), row2.component._group.getData(), row2.component);
        }
      }
    });
    return list;
  };
  Download.prototype.triggerDownload = function(data, mime, type, filename, newTab) {
    var element = document.createElement("a"), blob = new Blob([data], { type: mime }), filename = filename || "Tabulator." + (typeof type === "function" ? "txt" : type);
    blob = this.table.options.downloadReady.call(this.table, data, blob);
    if (blob) {
      if (newTab) {
        window.open(window.URL.createObjectURL(blob));
      } else {
        if (navigator.msSaveOrOpenBlob) {
          navigator.msSaveOrOpenBlob(blob, filename);
        } else {
          element.setAttribute("href", window.URL.createObjectURL(blob));
          element.setAttribute("download", filename);
          element.style.display = "none";
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        }
      }
      if (this.table.options.downloadComplete) {
        this.table.options.downloadComplete();
      }
    }
  };
  Download.prototype.commsReceived = function(table4, action, data) {
    switch (action) {
      case "intercept":
        this.download(data.type, "", data.options, data.active, data.intercept);
        break;
    }
  };
  Download.prototype.downloaders = {
    csv: function csv(list, options, setFileContents) {
      var delimiter = options && options.delimiter ? options.delimiter : ",", fileContents = [], headers = [];
      list.forEach(function(row2) {
        var item = [];
        switch (row2.type) {
          case "group":
            console.warn("Download Warning - CSV downloader cannot process row groups");
            break;
          case "calc":
            console.warn("Download Warning - CSV downloader cannot process column calculations");
            break;
          case "header":
            row2.columns.forEach(function(col, i2) {
              if (col && col.depth === 1) {
                headers[i2] = typeof col.value == "undefined" || col.value === null ? "" : '"' + String(col.value).split('"').join('""') + '"';
              }
            });
            break;
          case "row":
            row2.columns.forEach(function(col) {
              if (col) {
                switch (_typeof(col.value)) {
                  case "object":
                    col.value = JSON.stringify(col.value);
                    break;
                  case "undefined":
                  case "null":
                    col.value = "";
                    break;
                }
                item.push('"' + String(col.value).split('"').join('""') + '"');
              }
            });
            fileContents.push(item.join(delimiter));
            break;
        }
      });
      if (headers.length) {
        fileContents.unshift(headers.join(delimiter));
      }
      fileContents = fileContents.join("\n");
      if (options.bom) {
        fileContents = "\uFEFF" + fileContents;
      }
      setFileContents(fileContents, "text/csv");
    },
    json: function json(list, options, setFileContents) {
      var fileContents = [];
      list.forEach(function(row2) {
        var item = {};
        switch (row2.type) {
          case "header":
            break;
          case "group":
            console.warn("Download Warning - JSON downloader cannot process row groups");
            break;
          case "calc":
            console.warn("Download Warning - JSON downloader cannot process column calculations");
            break;
          case "row":
            row2.columns.forEach(function(col) {
              if (col) {
                item[col.component.getField()] = col.value;
              }
            });
            fileContents.push(item);
            break;
        }
      });
      fileContents = JSON.stringify(fileContents, null, "	");
      setFileContents(fileContents, "application/json");
    },
    pdf: function pdf(list, options, setFileContents) {
      var header = [], body3 = [], autoTableParams = {}, rowGroupStyles = options.rowGroupStyles || {
        fontStyle: "bold",
        fontSize: 12,
        cellPadding: 6,
        fillColor: 220
      }, rowCalcStyles = options.rowCalcStyles || {
        fontStyle: "bold",
        fontSize: 10,
        cellPadding: 4,
        fillColor: 232
      }, jsPDFParams = options.jsPDF || {}, title = options && options.title ? options.title : "";
      if (!jsPDFParams.orientation) {
        jsPDFParams.orientation = options.orientation || "landscape";
      }
      if (!jsPDFParams.unit) {
        jsPDFParams.unit = "pt";
      }
      list.forEach(function(row2) {
        var item = {};
        switch (row2.type) {
          case "header":
            header.push(parseRow(row2));
            break;
          case "group":
            body3.push(parseRow(row2, rowGroupStyles));
            break;
          case "calc":
            body3.push(parseRow(row2, rowCalcStyles));
            break;
          case "row":
            body3.push(parseRow(row2));
            break;
        }
      });
      function parseRow(row2, styles) {
        var rowData = [];
        row2.columns.forEach(function(col) {
          var cell;
          if (col) {
            switch (_typeof(col.value)) {
              case "object":
                col.value = JSON.stringify(col.value);
                break;
              case "undefined":
              case "null":
                col.value = "";
                break;
            }
            cell = {
              content: col.value,
              colSpan: col.width,
              rowSpan: col.height
            };
            if (styles) {
              cell.styles = styles;
            }
            rowData.push(cell);
          } else {
            rowData.push("");
          }
        });
        return rowData;
      }
      var doc = new jsPDF(jsPDFParams);
      if (options && options.autoTable) {
        if (typeof options.autoTable === "function") {
          autoTableParams = options.autoTable(doc) || {};
        } else {
          autoTableParams = options.autoTable;
        }
      }
      if (title) {
        autoTableParams.addPageContent = function(data) {
          doc.text(title, 40, 30);
        };
      }
      autoTableParams.head = header;
      autoTableParams.body = body3;
      doc.autoTable(autoTableParams);
      if (options && options.documentProcessing) {
        options.documentProcessing(doc);
      }
      setFileContents(doc.output("arraybuffer"), "application/pdf");
    },
    xlsx: function xlsx(list, options, setFileContents) {
      var self2 = this, sheetName = options.sheetName || "Sheet1", workbook = XLSX.utils.book_new(), output;
      workbook.SheetNames = [];
      workbook.Sheets = {};
      function generateSheet() {
        var rows = [], merges = [], worksheet = {}, range2 = { s: { c: 0, r: 0 }, e: { c: list[0] ? list[0].columns.reduce(function(a, b) {
          return a + (b && b.width ? b.width : 1);
        }, 0) : 0, r: list.length } };
        list.forEach(function(row2, i2) {
          var rowData = [];
          row2.columns.forEach(function(col, j) {
            if (col) {
              rowData.push(!(col.value instanceof Date) && _typeof(col.value) === "object" ? JSON.stringify(col.value) : col.value);
              if (col.width > 1 || col.height > -1) {
                merges.push({ s: { r: i2, c: j }, e: { r: i2 + col.height - 1, c: j + col.width - 1 } });
              }
            } else {
              rowData.push("");
            }
          });
          rows.push(rowData);
        });
        XLSX.utils.sheet_add_aoa(worksheet, rows);
        worksheet["!ref"] = XLSX.utils.encode_range(range2);
        if (merges.length) {
          worksheet["!merges"] = merges;
        }
        return worksheet;
      }
      if (options.sheetOnly) {
        setFileContents(generateSheet());
        return;
      }
      if (options.sheets) {
        for (var sheet in options.sheets) {
          if (options.sheets[sheet] === true) {
            workbook.SheetNames.push(sheet);
            workbook.Sheets[sheet] = generateSheet();
          } else {
            workbook.SheetNames.push(sheet);
            this.modules.comms.send(options.sheets[sheet], "download", "intercept", {
              type: "xlsx",
              options: { sheetOnly: true },
              active: self2.active,
              intercept: function intercept(data) {
                workbook.Sheets[sheet] = data;
              }
            });
          }
        }
      } else {
        workbook.SheetNames.push(sheetName);
        workbook.Sheets[sheetName] = generateSheet();
      }
      if (options.documentProcessing) {
        workbook = options.documentProcessing(workbook);
      }
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i2 = 0; i2 != s.length; ++i2) {
          view[i2] = s.charCodeAt(i2) & 255;
        }
        return buf;
      }
      output = XLSX.write(workbook, { bookType: "xlsx", bookSST: true, type: "binary" });
      setFileContents(s2ab(output), "application/octet-stream");
    },
    html: function html(list, options, setFileContents) {
      if (this.modExists("export", true)) {
        setFileContents(this.modules.export.genereateHTMLTable(list), "text/html");
      }
    }
  };
  Tabulator.prototype.registerModule("download", Download);
  var Edit = function Edit2(table4) {
    this.table = table4;
    this.currentCell = false;
    this.mouseClick = false;
    this.recursionBlock = false;
    this.invalidEdit = false;
    this.editedCells = [];
  };
  Edit.prototype.initializeColumn = function(column2) {
    var self2 = this, config = {
      editor: false,
      blocked: false,
      check: column2.definition.editable,
      params: column2.definition.editorParams || {}
    };
    switch (_typeof(column2.definition.editor)) {
      case "string":
        if (column2.definition.editor === "tick") {
          column2.definition.editor = "tickCross";
          console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor");
        }
        if (self2.editors[column2.definition.editor]) {
          config.editor = self2.editors[column2.definition.editor];
        } else {
          console.warn("Editor Error - No such editor found: ", column2.definition.editor);
        }
        break;
      case "function":
        config.editor = column2.definition.editor;
        break;
      case "boolean":
        if (column2.definition.editor === true) {
          if (typeof column2.definition.formatter !== "function") {
            if (column2.definition.formatter === "tick") {
              column2.definition.formatter = "tickCross";
              console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor");
            }
            if (self2.editors[column2.definition.formatter]) {
              config.editor = self2.editors[column2.definition.formatter];
            } else {
              config.editor = self2.editors["input"];
            }
          } else {
            console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ", column2.definition.formatter);
          }
        }
        break;
    }
    if (config.editor) {
      column2.modules.edit = config;
    }
  };
  Edit.prototype.getCurrentCell = function() {
    return this.currentCell ? this.currentCell.getComponent() : false;
  };
  Edit.prototype.clearEditor = function(cancel) {
    var cell = this.currentCell, cellEl;
    this.invalidEdit = false;
    if (cell) {
      this.currentCell = false;
      cellEl = cell.getElement();
      if (cancel) {
        cell.validate();
      } else {
        cellEl.classList.remove("tabulator-validation-fail");
      }
      cellEl.classList.remove("tabulator-editing");
      while (cellEl.firstChild) {
        cellEl.removeChild(cellEl.firstChild);
      }
      cell.row.getElement().classList.remove("tabulator-row-editing");
    }
  };
  Edit.prototype.cancelEdit = function() {
    if (this.currentCell) {
      var cell = this.currentCell;
      var component2 = this.currentCell.getComponent();
      this.clearEditor(true);
      cell.setValueActual(cell.getValue());
      cell.cellRendered();
      if (cell.column.definition.editor == "textarea" || cell.column.definition.variableHeight) {
        cell.row.normalizeHeight(true);
      }
      if (cell.column.cellEvents.cellEditCancelled) {
        cell.column.cellEvents.cellEditCancelled.call(this.table, component2);
      }
      this.table.options.cellEditCancelled.call(this.table, component2);
    }
  };
  Edit.prototype.bindEditor = function(cell) {
    var self2 = this, element = cell.getElement(true);
    element.setAttribute("tabindex", 0);
    element.addEventListener("click", function(e2) {
      if (!element.classList.contains("tabulator-editing")) {
        element.focus({ preventScroll: true });
      }
    });
    element.addEventListener("mousedown", function(e2) {
      if (e2.button === 2) {
        e2.preventDefault();
      } else {
        self2.mouseClick = true;
      }
    });
    element.addEventListener("focus", function(e2) {
      if (!self2.recursionBlock) {
        self2.edit(cell, e2, false);
      }
    });
  };
  Edit.prototype.focusCellNoEvent = function(cell, block) {
    this.recursionBlock = true;
    if (!(block && this.table.browser === "ie")) {
      cell.getElement().focus({ preventScroll: true });
    }
    this.recursionBlock = false;
  };
  Edit.prototype.editCell = function(cell, forceEdit) {
    this.focusCellNoEvent(cell);
    this.edit(cell, false, forceEdit);
  };
  Edit.prototype.focusScrollAdjust = function(cell) {
    if (this.table.rowManager.getRenderMode() == "virtual") {
      var topEdge = this.table.rowManager.element.scrollTop, bottomEdge = this.table.rowManager.element.clientHeight + this.table.rowManager.element.scrollTop, rowEl = cell.row.getElement(), offset = rowEl.offsetTop;
      if (rowEl.offsetTop < topEdge) {
        this.table.rowManager.element.scrollTop -= topEdge - rowEl.offsetTop;
      } else {
        if (rowEl.offsetTop + rowEl.offsetHeight > bottomEdge) {
          this.table.rowManager.element.scrollTop += rowEl.offsetTop + rowEl.offsetHeight - bottomEdge;
        }
      }
      var leftEdge = this.table.rowManager.element.scrollLeft, rightEdge = this.table.rowManager.element.clientWidth + this.table.rowManager.element.scrollLeft, cellEl = cell.getElement(), offset = cellEl.offsetLeft;
      if (this.table.modExists("frozenColumns")) {
        leftEdge += parseInt(this.table.modules.frozenColumns.leftMargin);
        rightEdge -= parseInt(this.table.modules.frozenColumns.rightMargin);
      }
      if (this.table.options.virtualDomHoz) {
        leftEdge -= parseInt(this.table.vdomHoz.vDomPadLeft);
        rightEdge -= parseInt(this.table.vdomHoz.vDomPadLeft);
      }
      if (cellEl.offsetLeft < leftEdge) {
        this.table.rowManager.element.scrollLeft -= leftEdge - cellEl.offsetLeft;
      } else {
        if (cellEl.offsetLeft + cellEl.offsetWidth > rightEdge) {
          this.table.rowManager.element.scrollLeft += cellEl.offsetLeft + cellEl.offsetWidth - rightEdge;
        }
      }
    }
  };
  Edit.prototype.edit = function(cell, e2, forceEdit) {
    var self2 = this, allowEdit = true, rendered = function rendered2() {
    }, element = cell.getElement(), cellEditor, component2, params;
    if (this.currentCell) {
      if (!this.invalidEdit) {
        this.cancelEdit();
      }
      return;
    }
    function success(value) {
      if (self2.currentCell === cell) {
        var valid = true;
        if (cell.column.modules.validate && self2.table.modExists("validate") && self2.table.options.validationMode != "manual") {
          valid = self2.table.modules.validate.validate(cell.column.modules.validate, cell, value);
        }
        if (valid === true || self2.table.options.validationMode === "highlight") {
          self2.clearEditor();
          if (!cell.modules.edit) {
            cell.modules.edit = {};
          }
          cell.modules.edit.edited = true;
          if (self2.editedCells.indexOf(cell) == -1) {
            self2.editedCells.push(cell);
          }
          cell.setValue(value, true);
          if (self2.table.options.dataTree && self2.table.modExists("dataTree")) {
            self2.table.modules.dataTree.checkForRestyle(cell);
          }
          if (valid !== true) {
            element.classList.add("tabulator-validation-fail");
            self2.table.options.validationFailed.call(self2.table, cell.getComponent(), value, valid);
            return false;
          }
          return true;
        } else {
          self2.invalidEdit = true;
          element.classList.add("tabulator-validation-fail");
          self2.focusCellNoEvent(cell, true);
          rendered();
          self2.table.options.validationFailed.call(self2.table, cell.getComponent(), value, valid);
          return false;
        }
      } else {
      }
    }
    function cancel() {
      if (self2.currentCell === cell) {
        self2.cancelEdit();
        if (self2.table.options.dataTree && self2.table.modExists("dataTree")) {
          self2.table.modules.dataTree.checkForRestyle(cell);
        }
      } else {
      }
    }
    function onRendered(callback) {
      rendered = callback;
    }
    if (!cell.column.modules.edit.blocked) {
      if (e2) {
        e2.stopPropagation();
      }
      switch (_typeof(cell.column.modules.edit.check)) {
        case "function":
          allowEdit = cell.column.modules.edit.check(cell.getComponent());
          break;
        case "boolean":
          allowEdit = cell.column.modules.edit.check;
          break;
      }
      if (allowEdit || forceEdit) {
        self2.cancelEdit();
        self2.currentCell = cell;
        this.focusScrollAdjust(cell);
        component2 = cell.getComponent();
        if (this.mouseClick) {
          this.mouseClick = false;
          if (cell.column.cellEvents.cellClick) {
            cell.column.cellEvents.cellClick.call(this.table, e2, component2);
          }
        }
        if (cell.column.cellEvents.cellEditing) {
          cell.column.cellEvents.cellEditing.call(this.table, component2);
        }
        self2.table.options.cellEditing.call(this.table, component2);
        params = typeof cell.column.modules.edit.params === "function" ? cell.column.modules.edit.params(component2) : cell.column.modules.edit.params;
        cellEditor = cell.column.modules.edit.editor.call(self2, component2, onRendered, success, cancel, params);
        if (cellEditor !== false) {
          if (cellEditor instanceof Node) {
            element.classList.add("tabulator-editing");
            cell.row.getElement().classList.add("tabulator-row-editing");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
            element.appendChild(cellEditor);
            rendered();
            var children = element.children;
            for (var i2 = 0; i2 < children.length; i2++) {
              children[i2].addEventListener("click", function(e3) {
                e3.stopPropagation();
              });
            }
          } else {
            console.warn("Edit Error - Editor should return an instance of Node, the editor returned:", cellEditor);
            element.blur();
            return false;
          }
        } else {
          element.blur();
          return false;
        }
        return true;
      } else {
        this.mouseClick = false;
        element.blur();
        return false;
      }
    } else {
      this.mouseClick = false;
      element.blur();
      return false;
    }
  };
  Edit.prototype.maskInput = function(el, options) {
    var mask = options.mask, maskLetter = typeof options.maskLetterChar !== "undefined" ? options.maskLetterChar : "A", maskNumber = typeof options.maskNumberChar !== "undefined" ? options.maskNumberChar : "9", maskWildcard = typeof options.maskWildcardChar !== "undefined" ? options.maskWildcardChar : "*", success = false;
    function fillSymbols(index) {
      var symbol = mask[index];
      if (typeof symbol !== "undefined" && symbol !== maskWildcard && symbol !== maskLetter && symbol !== maskNumber) {
        el.value = el.value + "" + symbol;
        fillSymbols(index + 1);
      }
    }
    el.addEventListener("keydown", function(e2) {
      var index = el.value.length, char = e2.key;
      if (e2.keyCode > 46) {
        if (index >= mask.length) {
          e2.preventDefault();
          e2.stopPropagation();
          success = false;
          return false;
        } else {
          switch (mask[index]) {
            case maskLetter:
              if (char.toUpperCase() == char.toLowerCase()) {
                e2.preventDefault();
                e2.stopPropagation();
                success = false;
                return false;
              }
              break;
            case maskNumber:
              if (isNaN(char)) {
                e2.preventDefault();
                e2.stopPropagation();
                success = false;
                return false;
              }
              break;
            case maskWildcard:
              break;
            default:
              if (char !== mask[index]) {
                e2.preventDefault();
                e2.stopPropagation();
                success = false;
                return false;
              }
          }
        }
        success = true;
      }
      return;
    });
    el.addEventListener("keyup", function(e2) {
      if (e2.keyCode > 46) {
        if (options.maskAutoFill) {
          fillSymbols(el.value.length);
        }
      }
    });
    if (!el.placeholder) {
      el.placeholder = mask;
    }
    if (options.maskAutoFill) {
      fillSymbols(el.value.length);
    }
  };
  Edit.prototype.getEditedCells = function() {
    var output = [];
    this.editedCells.forEach(function(cell) {
      output.push(cell.getComponent());
    });
    return output;
  };
  Edit.prototype.clearEdited = function(cell) {
    var editIndex;
    if (cell.modules.edit && cell.modules.edit.edited) {
      cell.modules.edit.edited = false;
      if (cell.modules.validate) {
        cell.modules.validate.invalid = false;
      }
    }
    editIndex = this.editedCells.indexOf(cell);
    if (editIndex > -1) {
      this.editedCells.splice(editIndex, 1);
    }
  };
  Edit.prototype.editors = {
    input: function input(cell, onRendered, success, cancel, editorParams) {
      var cellValue = cell.getValue(), input2 = document.createElement("input");
      input2.setAttribute("type", editorParams.search ? "search" : "text");
      input2.style.padding = "4px";
      input2.style.width = "100%";
      input2.style.boxSizing = "border-box";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            input2.setAttribute(key, input2.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            input2.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      input2.value = typeof cellValue !== "undefined" ? cellValue : "";
      onRendered(function() {
        input2.focus({ preventScroll: true });
        input2.style.height = "100%";
      });
      function onChange(e2) {
        if ((cellValue === null || typeof cellValue === "undefined") && input2.value !== "" || input2.value !== cellValue) {
          if (success(input2.value)) {
            cellValue = input2.value;
          }
        } else {
          cancel();
        }
      }
      input2.addEventListener("change", onChange);
      input2.addEventListener("blur", onChange);
      input2.addEventListener("keydown", function(e2) {
        switch (e2.keyCode) {
          case 13:
            onChange(e2);
            break;
          case 27:
            cancel();
            break;
          case 35:
          case 36:
            e2.stopPropagation();
            break;
        }
      });
      if (editorParams.mask) {
        this.table.modules.edit.maskInput(input2, editorParams);
      }
      return input2;
    },
    textarea: function textarea(cell, onRendered, success, cancel, editorParams) {
      var self2 = this, cellValue = cell.getValue(), vertNav = editorParams.verticalNavigation || "hybrid", value = String(cellValue !== null && typeof cellValue !== "undefined" ? cellValue : ""), count2 = (value.match(/(?:\r\n|\r|\n)/g) || []).length + 1, input2 = document.createElement("textarea"), scrollHeight = 0;
      input2.style.display = "block";
      input2.style.padding = "2px";
      input2.style.height = "100%";
      input2.style.width = "100%";
      input2.style.boxSizing = "border-box";
      input2.style.whiteSpace = "pre-wrap";
      input2.style.resize = "none";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            input2.setAttribute(key, input2.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            input2.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      input2.value = value;
      onRendered(function() {
        input2.focus({ preventScroll: true });
        input2.style.height = "100%";
        input2.scrollHeight;
        input2.style.height = input2.scrollHeight + "px";
        cell.getRow().normalizeHeight();
      });
      function onChange(e2) {
        if ((cellValue === null || typeof cellValue === "undefined") && input2.value !== "" || input2.value !== cellValue) {
          if (success(input2.value)) {
            cellValue = input2.value;
          }
          setTimeout(function() {
            cell.getRow().normalizeHeight();
          }, 300);
        } else {
          cancel();
        }
      }
      input2.addEventListener("change", onChange);
      input2.addEventListener("blur", onChange);
      input2.addEventListener("keyup", function() {
        input2.style.height = "";
        var heightNow = input2.scrollHeight;
        input2.style.height = heightNow + "px";
        if (heightNow != scrollHeight) {
          scrollHeight = heightNow;
          cell.getRow().normalizeHeight();
        }
      });
      input2.addEventListener("keydown", function(e2) {
        switch (e2.keyCode) {
          case 27:
            cancel();
            break;
          case 38:
            if (vertNav == "editor" || vertNav == "hybrid" && input2.selectionStart) {
              e2.stopImmediatePropagation();
              e2.stopPropagation();
            }
            break;
          case 40:
            if (vertNav == "editor" || vertNav == "hybrid" && input2.selectionStart !== input2.value.length) {
              e2.stopImmediatePropagation();
              e2.stopPropagation();
            }
            break;
          case 35:
          case 36:
            e2.stopPropagation();
            break;
        }
      });
      if (editorParams.mask) {
        this.table.modules.edit.maskInput(input2, editorParams);
      }
      return input2;
    },
    number: function number(cell, onRendered, success, cancel, editorParams) {
      var cellValue = cell.getValue(), vertNav = editorParams.verticalNavigation || "editor", input2 = document.createElement("input");
      input2.setAttribute("type", "number");
      if (typeof editorParams.max != "undefined") {
        input2.setAttribute("max", editorParams.max);
      }
      if (typeof editorParams.min != "undefined") {
        input2.setAttribute("min", editorParams.min);
      }
      if (typeof editorParams.step != "undefined") {
        input2.setAttribute("step", editorParams.step);
      }
      input2.style.padding = "4px";
      input2.style.width = "100%";
      input2.style.boxSizing = "border-box";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            input2.setAttribute(key, input2.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            input2.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      input2.value = cellValue;
      var blurFunc = function blurFunc2(e2) {
        onChange();
      };
      onRendered(function() {
        input2.removeEventListener("blur", blurFunc);
        input2.focus({ preventScroll: true });
        input2.style.height = "100%";
        input2.addEventListener("blur", blurFunc);
      });
      function onChange() {
        var value = input2.value;
        if (!isNaN(value) && value !== "") {
          value = Number(value);
        }
        if (value !== cellValue) {
          if (success(value)) {
            cellValue = value;
          }
        } else {
          cancel();
        }
      }
      input2.addEventListener("keydown", function(e2) {
        switch (e2.keyCode) {
          case 13:
            onChange();
            break;
          case 27:
            cancel();
            break;
          case 38:
          case 40:
            if (vertNav == "editor") {
              e2.stopImmediatePropagation();
              e2.stopPropagation();
            }
            break;
          case 35:
          case 36:
            e2.stopPropagation();
            break;
        }
      });
      if (editorParams.mask) {
        this.table.modules.edit.maskInput(input2, editorParams);
      }
      return input2;
    },
    range: function range(cell, onRendered, success, cancel, editorParams) {
      var cellValue = cell.getValue(), input2 = document.createElement("input");
      input2.setAttribute("type", "range");
      if (typeof editorParams.max != "undefined") {
        input2.setAttribute("max", editorParams.max);
      }
      if (typeof editorParams.min != "undefined") {
        input2.setAttribute("min", editorParams.min);
      }
      if (typeof editorParams.step != "undefined") {
        input2.setAttribute("step", editorParams.step);
      }
      input2.style.padding = "4px";
      input2.style.width = "100%";
      input2.style.boxSizing = "border-box";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            input2.setAttribute(key, input2.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            input2.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      input2.value = cellValue;
      onRendered(function() {
        input2.focus({ preventScroll: true });
        input2.style.height = "100%";
      });
      function onChange() {
        var value = input2.value;
        if (!isNaN(value) && value !== "") {
          value = Number(value);
        }
        if (value != cellValue) {
          if (success(value)) {
            cellValue = value;
          }
        } else {
          cancel();
        }
      }
      input2.addEventListener("blur", function(e2) {
        onChange();
      });
      input2.addEventListener("keydown", function(e2) {
        switch (e2.keyCode) {
          case 13:
            onChange();
            break;
          case 27:
            cancel();
            break;
        }
      });
      return input2;
    },
    select: function select(cell, onRendered, success, cancel, editorParams) {
      var _this53 = this;
      var self2 = this, cellEl = cell.getElement(), initialValue = cell.getValue(), vertNav = editorParams.verticalNavigation || "editor", initialDisplayValue = typeof initialValue !== "undefined" || initialValue === null ? Array.isArray(initialValue) ? initialValue : [initialValue] : typeof editorParams.defaultValue !== "undefined" ? editorParams.defaultValue : [], input2 = document.createElement("input"), listEl = document.createElement("div"), multiselect = editorParams.multiselect, dataItems = [], currentItem = {}, displayItems = [], currentItems = [], blurable = true, blockListShow = false, searchWord = "", searchWordTimeout = null;
      if (Array.isArray(editorParams) || !Array.isArray(editorParams) && (typeof editorParams === "undefined" ? "undefined" : _typeof(editorParams)) === "object" && !editorParams.values) {
        console.warn("DEPRECATION WARNING - values for the select editor must now be passed into the values property of the editorParams object, not as the editorParams object");
        editorParams = { values: editorParams };
      }
      function getUniqueColumnValues(field) {
        var output = {}, data = self2.table.getData(), column2;
        if (field) {
          column2 = self2.table.columnManager.getColumnByField(field);
        } else {
          column2 = cell.getColumn()._getSelf();
        }
        if (column2) {
          data.forEach(function(row2) {
            var val = column2.getFieldValue(row2);
            if (val !== null && typeof val !== "undefined" && val !== "") {
              output[val] = true;
            }
          });
        } else {
          console.warn("unable to find matching column to create select lookup list:", field);
        }
        return Object.keys(output);
      }
      function parseItems(inputValues, curentValues) {
        var dataList = [];
        var displayList = [];
        function processComplexListItem(item2) {
          var item2 = {
            label: item2.label,
            value: item2.value,
            itemParams: item2.itemParams,
            elementAttributes: item2.elementAttributes,
            element: false
          };
          if (curentValues.indexOf(item2.value) > -1) {
            setItem(item2);
          }
          dataList.push(item2);
          displayList.push(item2);
          return item2;
        }
        if (typeof inputValues == "function") {
          inputValues = inputValues(cell);
        }
        if (Array.isArray(inputValues)) {
          inputValues.forEach(function(value) {
            var item2;
            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
              if (value.options) {
                item2 = {
                  label: value.label,
                  group: true,
                  itemParams: value.itemParams,
                  elementAttributes: value.elementAttributes,
                  element: false
                };
                displayList.push(item2);
                value.options.forEach(function(item3) {
                  processComplexListItem(item3);
                });
              } else {
                processComplexListItem(value);
              }
            } else {
              item2 = {
                label: value,
                value,
                element: false
              };
              if (curentValues.indexOf(item2.value) > -1) {
                setItem(item2);
              }
              dataList.push(item2);
              displayList.push(item2);
            }
          });
        } else {
          for (var key2 in inputValues) {
            var item = {
              label: inputValues[key2],
              value: key2,
              element: false
            };
            if (curentValues.indexOf(item.value) > -1) {
              setItem(item);
            }
            dataList.push(item);
            displayList.push(item);
          }
        }
        if (editorParams.sortValuesList) {
          dataList.sort(function(a, b) {
            return a.label < b.label ? -1 : a.label > b.label ? 1 : 0;
          });
          displayList.sort(function(a, b) {
            return a.label < b.label ? -1 : a.label > b.label ? 1 : 0;
          });
          if (editorParams.sortValuesList !== "asc") {
            dataList.reverse();
            displayList.reverse();
          }
        }
        dataItems = dataList;
        displayItems = displayList;
        fillList();
      }
      function fillList() {
        while (listEl.firstChild) {
          listEl.removeChild(listEl.firstChild);
        }
        displayItems.forEach(function(item) {
          var el = item.element;
          if (!el) {
            el = document.createElement("div");
            item.label = editorParams.listItemFormatter ? editorParams.listItemFormatter(item.value, item.label, cell, el, item.itemParams) : item.label;
            if (item.group) {
              el.classList.add("tabulator-edit-select-list-group");
              el.tabIndex = 0;
              el.innerHTML = item.label === "" ? "&nbsp;" : item.label;
            } else {
              el.classList.add("tabulator-edit-select-list-item");
              el.tabIndex = 0;
              el.innerHTML = item.label === "" ? "&nbsp;" : item.label;
              el.addEventListener("click", function() {
                blockListShow = true;
                setTimeout(function() {
                  blockListShow = false;
                }, 10);
                if (multiselect) {
                  toggleItem(item);
                  input2.focus();
                } else {
                  chooseItem(item);
                }
              });
              if (currentItems.indexOf(item) > -1) {
                el.classList.add("active");
              }
            }
            if (item.elementAttributes && _typeof(item.elementAttributes) == "object") {
              for (var key2 in item.elementAttributes) {
                if (key2.charAt(0) == "+") {
                  key2 = key2.slice(1);
                  el.setAttribute(key2, input2.getAttribute(key2) + item.elementAttributes["+" + key2]);
                } else {
                  el.setAttribute(key2, item.elementAttributes[key2]);
                }
              }
            }
            el.addEventListener("mousedown", function() {
              blurable = false;
              setTimeout(function() {
                blurable = true;
              }, 10);
            });
            item.element = el;
          }
          listEl.appendChild(el);
        });
      }
      function setCurrentItem(item, active) {
        if (!multiselect && currentItem && currentItem.element) {
          currentItem.element.classList.remove("active");
        }
        if (currentItem && currentItem.element) {
          currentItem.element.classList.remove("focused");
        }
        currentItem = item;
        if (item.element) {
          item.element.classList.add("focused");
          if (active) {
            item.element.classList.add("active");
          }
        }
        if (item && item.element && item.element.scrollIntoView) {
          item.element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
      }
      function setItem(item) {
        var index = currentItems.indexOf(item);
        if (index == -1) {
          currentItems.push(item);
          setCurrentItem(item, true);
        }
        fillInput();
      }
      function unsetItem(index) {
        var item = currentItems[index];
        if (index > -1) {
          currentItems.splice(index, 1);
          if (item.element) {
            item.element.classList.remove("active");
          }
        }
      }
      function toggleItem(item) {
        if (!item) {
          item = currentItem;
        }
        var index = currentItems.indexOf(item);
        if (index > -1) {
          unsetItem(index);
        } else {
          if (multiselect !== true && currentItems.length >= multiselect) {
            unsetItem(0);
          }
          setItem(item);
        }
        fillInput();
      }
      function chooseItem(item) {
        hideList();
        if (!item) {
          item = currentItem;
        }
        if (item) {
          input2.value = item.label;
          success(item.value);
        }
        initialDisplayValue = [item.value];
      }
      function chooseItems(silent) {
        if (!silent) {
          hideList();
        }
        var output = [];
        currentItems.forEach(function(item) {
          output.push(item.value);
        });
        initialDisplayValue = output;
        success(output);
      }
      function fillInput() {
        var output = [];
        currentItems.forEach(function(item) {
          output.push(item.label);
        });
        input2.value = output.join(", ");
        if (self2.currentCell === false) {
          chooseItems(true);
        }
      }
      function unsetItems() {
        var len = currentItems.length;
        for (var _i9 = 0; _i9 < len; _i9++) {
          unsetItem(0);
        }
      }
      function cancelItem() {
        hideList();
        cancel();
      }
      function showList() {
        currentItems = [];
        if (!listEl.parentNode) {
          if (editorParams.values === true) {
            parseItems(getUniqueColumnValues(), initialDisplayValue);
          } else if (typeof editorParams.values === "string") {
            parseItems(getUniqueColumnValues(editorParams.values), initialDisplayValue);
          } else {
            parseItems(editorParams.values || [], initialDisplayValue);
          }
          var offset = Tabulator.prototype.helpers.elOffset(cellEl);
          listEl.style.minWidth = cellEl.offsetWidth + "px";
          listEl.style.top = offset.top + cellEl.offsetHeight + "px";
          listEl.style.left = offset.left + "px";
          listEl.addEventListener("mousedown", function(e2) {
            blurable = false;
            setTimeout(function() {
              blurable = true;
            }, 10);
          });
          document.body.appendChild(listEl);
        }
      }
      function hideList() {
        if (listEl.parentNode) {
          listEl.parentNode.removeChild(listEl);
        }
        removeScrollListener();
      }
      function removeScrollListener() {
        self2.table.rowManager.element.removeEventListener("scroll", cancelItem);
      }
      function scrollTovalue(char) {
        clearTimeout(searchWordTimeout);
        var character = String.fromCharCode(event.keyCode).toLowerCase();
        searchWord += character.toLowerCase();
        var match = dataItems.find(function(item) {
          return typeof item.label !== "undefined" && item.label.toLowerCase().startsWith(searchWord);
        });
        if (match) {
          setCurrentItem(match, !multiselect);
        }
        searchWordTimeout = setTimeout(function() {
          searchWord = "";
        }, 800);
      }
      input2.setAttribute("type", "text");
      input2.style.padding = "4px";
      input2.style.width = "100%";
      input2.style.boxSizing = "border-box";
      input2.style.cursor = "default";
      input2.readOnly = this.currentCell != false;
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            input2.setAttribute(key, input2.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            input2.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      input2.value = typeof initialValue !== "undefined" || initialValue === null ? initialValue : "";
      input2.addEventListener("search", function(e2) {
        if (!input2.value) {
          unsetItems();
          chooseItems();
        }
      });
      input2.addEventListener("keydown", function(e2) {
        var index;
        switch (e2.keyCode) {
          case 38:
            index = dataItems.indexOf(currentItem);
            if (vertNav == "editor" || vertNav == "hybrid" && index) {
              e2.stopImmediatePropagation();
              e2.stopPropagation();
              e2.preventDefault();
              if (index > 0) {
                setCurrentItem(dataItems[index - 1], !multiselect);
              }
            }
            break;
          case 40:
            index = dataItems.indexOf(currentItem);
            if (vertNav == "editor" || vertNav == "hybrid" && index < dataItems.length - 1) {
              e2.stopImmediatePropagation();
              e2.stopPropagation();
              e2.preventDefault();
              if (index < dataItems.length - 1) {
                if (index == -1) {
                  setCurrentItem(dataItems[0], !multiselect);
                } else {
                  setCurrentItem(dataItems[index + 1], !multiselect);
                }
              }
            }
            break;
          case 37:
          case 39:
            e2.stopImmediatePropagation();
            e2.stopPropagation();
            e2.preventDefault();
            break;
          case 13:
            if (multiselect) {
              toggleItem();
            } else {
              chooseItem();
            }
            break;
          case 27:
            cancelItem();
            break;
          case 9:
            break;
          default:
            if (self2.currentCell === false) {
              e2.preventDefault();
            }
            if (e2.keyCode >= 38 && e2.keyCode <= 90) {
              scrollTovalue(e2.keyCode);
            }
        }
      });
      input2.addEventListener("blur", function(e2) {
        if (blurable) {
          if (multiselect) {
            chooseItems();
          } else {
            cancelItem();
          }
        }
      });
      input2.addEventListener("focus", function(e2) {
        if (!blockListShow) {
          showList();
        }
      });
      listEl = document.createElement("div");
      listEl.classList.add("tabulator-edit-select-list");
      onRendered(function() {
        input2.style.height = "100%";
        input2.focus({ preventScroll: true });
      });
      setTimeout(function() {
        _this53.table.rowManager.element.addEventListener("scroll", cancelItem);
      }, 10);
      return input2;
    },
    autocomplete: function autocomplete(cell, onRendered, success, cancel, editorParams) {
      var _this54 = this;
      var self2 = this, cellEl = cell.getElement(), initialValue = cell.getValue(), vertNav = editorParams.verticalNavigation || "editor", initialDisplayValue = typeof initialValue !== "undefined" || initialValue === null ? initialValue : typeof editorParams.defaultValue !== "undefined" ? editorParams.defaultValue : "", input2 = document.createElement("input"), listEl = document.createElement("div"), allItems = [], displayItems = [], values = [], currentItem = false, blurable = true, uniqueColumnValues = false;
      input2.setAttribute("type", "search");
      input2.style.padding = "4px";
      input2.style.width = "100%";
      input2.style.boxSizing = "border-box";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            input2.setAttribute(key, input2.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            input2.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      listEl.classList.add("tabulator-edit-select-list");
      listEl.addEventListener("mousedown", function(e2) {
        blurable = false;
        setTimeout(function() {
          blurable = true;
        }, 10);
      });
      function genUniqueColumnValues() {
        if (editorParams.values === true) {
          uniqueColumnValues = getUniqueColumnValues();
        } else if (typeof editorParams.values === "string") {
          uniqueColumnValues = getUniqueColumnValues(editorParams.values);
        }
      }
      function getUniqueColumnValues(field) {
        var output = {}, data = self2.table.getData(), column2;
        if (field) {
          column2 = self2.table.columnManager.getColumnByField(field);
        } else {
          column2 = cell.getColumn()._getSelf();
        }
        if (column2) {
          data.forEach(function(row2) {
            var val = column2.getFieldValue(row2);
            if (val !== null && typeof val !== "undefined" && val !== "") {
              output[val] = true;
            }
          });
          if (editorParams.sortValuesList) {
            if (editorParams.sortValuesList == "asc") {
              output = Object.keys(output).sort();
            } else {
              output = Object.keys(output).sort().reverse();
            }
          } else {
            output = Object.keys(output);
          }
        } else {
          console.warn("unable to find matching column to create autocomplete lookup list:", field);
        }
        return output;
      }
      function filterList(term, intialLoad) {
        var matches = [], values2, items, searchEl;
        if (uniqueColumnValues) {
          values2 = uniqueColumnValues;
        } else {
          values2 = editorParams.values || [];
        }
        if (editorParams.searchFunc) {
          matches = editorParams.searchFunc(term, values2);
          if (matches instanceof Promise) {
            addNotice(typeof editorParams.searchingPlaceholder !== "undefined" ? editorParams.searchingPlaceholder : "Searching...");
            matches.then(function(result) {
              fillListIfNotEmpty(parseItems(result), intialLoad);
            }).catch(function(err) {
              console.err("error in autocomplete search promise:", err);
            });
          } else {
            fillListIfNotEmpty(parseItems(matches), intialLoad);
          }
        } else {
          items = parseItems(values2);
          if (term === "") {
            if (editorParams.showListOnEmpty) {
              matches = items;
            }
          } else {
            items.forEach(function(item) {
              if (item.value !== null || typeof item.value !== "undefined") {
                if (String(item.value).toLowerCase().indexOf(String(term).toLowerCase()) > -1 || String(item.title).toLowerCase().indexOf(String(term).toLowerCase()) > -1) {
                  matches.push(item);
                }
              }
            });
          }
          fillListIfNotEmpty(matches, intialLoad);
        }
      }
      function addNotice(notice) {
        var searchEl = document.createElement("div");
        clearList();
        if (notice !== false) {
          searchEl.classList.add("tabulator-edit-select-list-notice");
          searchEl.tabIndex = 0;
          if (notice instanceof Node) {
            searchEl.appendChild(notice);
          } else {
            searchEl.innerHTML = notice;
          }
          listEl.appendChild(searchEl);
        }
      }
      function parseItems(inputValues) {
        var itemList = [];
        if (Array.isArray(inputValues)) {
          inputValues.forEach(function(value) {
            var item2 = {};
            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
              item2.title = editorParams.listItemFormatter ? editorParams.listItemFormatter(value.value, value.label) : value.label;
              item2.value = value.value;
            } else {
              item2.title = editorParams.listItemFormatter ? editorParams.listItemFormatter(value, value) : value;
              item2.value = value;
            }
            itemList.push(item2);
          });
        } else {
          for (var key2 in inputValues) {
            var item = {
              title: editorParams.listItemFormatter ? editorParams.listItemFormatter(key2, inputValues[key2]) : inputValues[key2],
              value: key2
            };
            itemList.push(item);
          }
        }
        return itemList;
      }
      function clearList() {
        while (listEl.firstChild) {
          listEl.removeChild(listEl.firstChild);
        }
      }
      function fillListIfNotEmpty(items, intialLoad) {
        if (items.length) {
          fillList(items, intialLoad);
        } else {
          if (editorParams.emptyPlaceholder) {
            addNotice(editorParams.emptyPlaceholder);
          }
        }
      }
      function fillList(items, intialLoad) {
        var current = false;
        clearList();
        displayItems = items;
        displayItems.forEach(function(item) {
          var el = item.element;
          if (!el) {
            el = document.createElement("div");
            el.classList.add("tabulator-edit-select-list-item");
            el.tabIndex = 0;
            el.innerHTML = item.title;
            el.addEventListener("click", function(e2) {
              setCurrentItem(item);
              chooseItem();
            });
            el.addEventListener("mousedown", function(e2) {
              blurable = false;
              setTimeout(function() {
                blurable = true;
              }, 10);
            });
            item.element = el;
            if (intialLoad && item.value == initialValue) {
              input2.value = item.title;
              item.element.classList.add("active");
              current = true;
            }
            if (item === currentItem) {
              item.element.classList.add("active");
              current = true;
            }
          }
          listEl.appendChild(el);
        });
        if (!current) {
          setCurrentItem(false);
        }
      }
      function chooseItem() {
        hideList();
        if (currentItem) {
          if (initialValue !== currentItem.value) {
            initialValue = currentItem.value;
            input2.value = currentItem.title;
            success(currentItem.value);
          } else {
            cancel();
          }
        } else {
          if (editorParams.freetext) {
            initialValue = input2.value;
            success(input2.value);
          } else {
            if (editorParams.allowEmpty && input2.value === "") {
              initialValue = input2.value;
              success(input2.value);
            } else {
              cancel();
            }
          }
        }
      }
      function showList() {
        if (!listEl.parentNode) {
          console.log("show", initialDisplayValue);
          while (listEl.firstChild) {
            listEl.removeChild(listEl.firstChild);
          }
          var offset = Tabulator.prototype.helpers.elOffset(cellEl);
          listEl.style.minWidth = cellEl.offsetWidth + "px";
          listEl.style.top = offset.top + cellEl.offsetHeight + "px";
          listEl.style.left = offset.left + "px";
          document.body.appendChild(listEl);
        }
      }
      function setCurrentItem(item, showInputValue) {
        if (currentItem && currentItem.element) {
          currentItem.element.classList.remove("active");
        }
        currentItem = item;
        if (item && item.element) {
          item.element.classList.add("active");
        }
        if (item && item.element && item.element.scrollIntoView) {
          item.element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
      }
      function hideList() {
        if (listEl.parentNode) {
          listEl.parentNode.removeChild(listEl);
        }
        removeScrollListener();
      }
      function cancelItem() {
        hideList();
        cancel();
      }
      function removeScrollListener() {
        self2.table.rowManager.element.removeEventListener("scroll", cancelItem);
      }
      input2.addEventListener("keydown", function(e2) {
        var index;
        switch (e2.keyCode) {
          case 38:
            index = displayItems.indexOf(currentItem);
            if (vertNav == "editor" || vertNav == "hybrid" && index) {
              e2.stopImmediatePropagation();
              e2.stopPropagation();
              e2.preventDefault();
              if (index > 0) {
                setCurrentItem(displayItems[index - 1]);
              } else {
                setCurrentItem(false);
              }
            }
            break;
          case 40:
            index = displayItems.indexOf(currentItem);
            if (vertNav == "editor" || vertNav == "hybrid" && index < displayItems.length - 1) {
              e2.stopImmediatePropagation();
              e2.stopPropagation();
              e2.preventDefault();
              if (index < displayItems.length - 1) {
                if (index == -1) {
                  setCurrentItem(displayItems[0]);
                } else {
                  setCurrentItem(displayItems[index + 1]);
                }
              }
            }
            break;
          case 37:
          case 39:
            e2.stopImmediatePropagation();
            e2.stopPropagation();
            break;
          case 13:
            chooseItem();
            break;
          case 27:
            cancelItem();
            break;
          case 36:
          case 35:
            e2.stopImmediatePropagation();
            break;
        }
      });
      input2.addEventListener("keyup", function(e2) {
        switch (e2.keyCode) {
          case 38:
          case 37:
          case 39:
          case 40:
          case 13:
          case 27:
            break;
          default:
            filterList(input2.value);
        }
      });
      input2.addEventListener("search", function(e2) {
        filterList(input2.value);
      });
      input2.addEventListener("blur", function(e2) {
        if (blurable) {
          chooseItem();
        }
      });
      input2.addEventListener("focus", function(e2) {
        var value = initialDisplayValue;
        genUniqueColumnValues();
        showList();
        input2.value = value;
        filterList(value, true);
      });
      onRendered(function() {
        input2.style.height = "100%";
        input2.focus({ preventScroll: true });
      });
      if (editorParams.mask) {
        this.table.modules.edit.maskInput(input2, editorParams);
      }
      setTimeout(function() {
        _this54.table.rowManager.element.addEventListener("scroll", cancelItem);
      }, 10);
      genUniqueColumnValues();
      input2.value = initialDisplayValue;
      filterList(initialDisplayValue, true);
      return input2;
    },
    star: function star(cell, onRendered, success, cancel, editorParams) {
      var self2 = this, element = cell.getElement(), value = cell.getValue(), maxStars = element.getElementsByTagName("svg").length || 5, size = element.getElementsByTagName("svg")[0] ? element.getElementsByTagName("svg")[0].getAttribute("width") : 14, stars = [], starsHolder = document.createElement("div"), star3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      function starChange(val) {
        stars.forEach(function(star4, i3) {
          if (i3 < val) {
            if (self2.table.browser == "ie") {
              star4.setAttribute("class", "tabulator-star-active");
            } else {
              star4.classList.replace("tabulator-star-inactive", "tabulator-star-active");
            }
            star4.innerHTML = '<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
          } else {
            if (self2.table.browser == "ie") {
              star4.setAttribute("class", "tabulator-star-inactive");
            } else {
              star4.classList.replace("tabulator-star-active", "tabulator-star-inactive");
            }
            star4.innerHTML = '<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
          }
        });
      }
      function buildStar(i3) {
        var starHolder = document.createElement("span");
        var nextStar = star3.cloneNode(true);
        stars.push(nextStar);
        starHolder.addEventListener("mouseenter", function(e2) {
          e2.stopPropagation();
          e2.stopImmediatePropagation();
          starChange(i3);
        });
        starHolder.addEventListener("mousemove", function(e2) {
          e2.stopPropagation();
          e2.stopImmediatePropagation();
        });
        starHolder.addEventListener("click", function(e2) {
          e2.stopPropagation();
          e2.stopImmediatePropagation();
          success(i3);
          element.blur();
        });
        starHolder.appendChild(nextStar);
        starsHolder.appendChild(starHolder);
      }
      function changeValue(val) {
        value = val;
        starChange(val);
      }
      element.style.whiteSpace = "nowrap";
      element.style.overflow = "hidden";
      element.style.textOverflow = "ellipsis";
      starsHolder.style.verticalAlign = "middle";
      starsHolder.style.display = "inline-block";
      starsHolder.style.padding = "4px";
      star3.setAttribute("width", size);
      star3.setAttribute("height", size);
      star3.setAttribute("viewBox", "0 0 512 512");
      star3.setAttribute("xml:space", "preserve");
      star3.style.padding = "0 1px";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            starsHolder.setAttribute(key, starsHolder.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            starsHolder.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      for (var i2 = 1; i2 <= maxStars; i2++) {
        buildStar(i2);
      }
      value = Math.min(parseInt(value), maxStars);
      starChange(value);
      starsHolder.addEventListener("mousemove", function(e2) {
        starChange(0);
      });
      starsHolder.addEventListener("click", function(e2) {
        success(0);
      });
      element.addEventListener("blur", function(e2) {
        cancel();
      });
      element.addEventListener("keydown", function(e2) {
        switch (e2.keyCode) {
          case 39:
            changeValue(value + 1);
            break;
          case 37:
            changeValue(value - 1);
            break;
          case 13:
            success(value);
            break;
          case 27:
            cancel();
            break;
        }
      });
      return starsHolder;
    },
    progress: function progress(cell, onRendered, success, cancel, editorParams) {
      var element = cell.getElement(), max3 = typeof editorParams.max === "undefined" ? element.getElementsByTagName("div")[0].getAttribute("max") || 100 : editorParams.max, min3 = typeof editorParams.min === "undefined" ? element.getElementsByTagName("div")[0].getAttribute("min") || 0 : editorParams.min, percent = (max3 - min3) / 100, value = cell.getValue() || 0, handle2 = document.createElement("div"), bar = document.createElement("div"), mouseDrag, mouseDragWidth;
      function updateValue() {
        var style = window.getComputedStyle(element, null);
        var calcVal = percent * Math.round(bar.offsetWidth / ((element.clientWidth - parseInt(style.getPropertyValue("padding-left")) - parseInt(style.getPropertyValue("padding-right"))) / 100)) + min3;
        success(calcVal);
        element.setAttribute("aria-valuenow", calcVal);
        element.setAttribute("aria-label", value);
      }
      handle2.style.position = "absolute";
      handle2.style.right = "0";
      handle2.style.top = "0";
      handle2.style.bottom = "0";
      handle2.style.width = "5px";
      handle2.classList.add("tabulator-progress-handle");
      bar.style.display = "inline-block";
      bar.style.position = "relative";
      bar.style.height = "100%";
      bar.style.backgroundColor = "#488CE9";
      bar.style.maxWidth = "100%";
      bar.style.minWidth = "0%";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            bar.setAttribute(key, bar.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            bar.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      element.style.padding = "4px 4px";
      value = Math.min(parseFloat(value), max3);
      value = Math.max(parseFloat(value), min3);
      value = Math.round((value - min3) / percent);
      bar.style.width = value + "%";
      element.setAttribute("aria-valuemin", min3);
      element.setAttribute("aria-valuemax", max3);
      bar.appendChild(handle2);
      handle2.addEventListener("mousedown", function(e2) {
        mouseDrag = e2.screenX;
        mouseDragWidth = bar.offsetWidth;
      });
      handle2.addEventListener("mouseover", function() {
        handle2.style.cursor = "ew-resize";
      });
      element.addEventListener("mousemove", function(e2) {
        if (mouseDrag) {
          bar.style.width = mouseDragWidth + e2.screenX - mouseDrag + "px";
        }
      });
      element.addEventListener("mouseup", function(e2) {
        if (mouseDrag) {
          e2.stopPropagation();
          e2.stopImmediatePropagation();
          mouseDrag = false;
          mouseDragWidth = false;
          updateValue();
        }
      });
      element.addEventListener("keydown", function(e2) {
        switch (e2.keyCode) {
          case 39:
            e2.preventDefault();
            bar.style.width = bar.clientWidth + element.clientWidth / 100 + "px";
            break;
          case 37:
            e2.preventDefault();
            bar.style.width = bar.clientWidth - element.clientWidth / 100 + "px";
            break;
          case 9:
          case 13:
            updateValue();
            break;
          case 27:
            cancel();
            break;
        }
      });
      element.addEventListener("blur", function() {
        cancel();
      });
      return bar;
    },
    tickCross: function tickCross(cell, onRendered, success, cancel, editorParams) {
      var value = cell.getValue(), input2 = document.createElement("input"), tristate = editorParams.tristate, indetermValue = typeof editorParams.indeterminateValue === "undefined" ? null : editorParams.indeterminateValue, indetermState = false;
      input2.setAttribute("type", "checkbox");
      input2.style.marginTop = "5px";
      input2.style.boxSizing = "border-box";
      if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
        for (var key in editorParams.elementAttributes) {
          if (key.charAt(0) == "+") {
            key = key.slice(1);
            input2.setAttribute(key, input2.getAttribute(key) + editorParams.elementAttributes["+" + key]);
          } else {
            input2.setAttribute(key, editorParams.elementAttributes[key]);
          }
        }
      }
      input2.value = value;
      if (tristate && (typeof value === "undefined" || value === indetermValue || value === "")) {
        indetermState = true;
        input2.indeterminate = true;
      }
      if (this.table.browser != "firefox") {
        onRendered(function() {
          input2.focus({ preventScroll: true });
        });
      }
      input2.checked = value === true || value === "true" || value === "True" || value === 1;
      onRendered(function() {
        input2.focus();
      });
      function setValue(blur) {
        if (tristate) {
          if (!blur) {
            if (input2.checked && !indetermState) {
              input2.checked = false;
              input2.indeterminate = true;
              indetermState = true;
              return indetermValue;
            } else {
              indetermState = false;
              return input2.checked;
            }
          } else {
            if (indetermState) {
              return indetermValue;
            } else {
              return input2.checked;
            }
          }
        } else {
          return input2.checked;
        }
      }
      input2.addEventListener("change", function(e2) {
        success(setValue());
      });
      input2.addEventListener("blur", function(e2) {
        success(setValue(true));
      });
      input2.addEventListener("keydown", function(e2) {
        if (e2.keyCode == 13) {
          success(setValue());
        }
        if (e2.keyCode == 27) {
          cancel();
        }
      });
      return input2;
    }
  };
  Tabulator.prototype.registerModule("edit", Edit);
  var ExportRow = function ExportRow2(type, columns2, component2, indent) {
    this.type = type;
    this.columns = columns2;
    this.component = component2 || false;
    this.indent = indent || 0;
  };
  var ExportColumn = function ExportColumn2(value, component2, width, height, depth) {
    this.value = value;
    this.component = component2 || false;
    this.width = width;
    this.height = height;
    this.depth = depth;
  };
  var Export = function Export2(table4) {
    this.table = table4;
    this.config = {};
    this.cloneTableStyle = true;
    this.colVisProp = "";
  };
  Export.prototype.generateExportList = function(config, style, range2, colVisProp) {
    this.cloneTableStyle = style;
    this.config = config || {};
    this.colVisProp = colVisProp;
    var headers = this.config.columnHeaders !== false ? this.headersToExportRows(this.generateColumnGroupHeaders()) : [];
    var body3 = this.bodyToExportRows(this.rowLookup(range2));
    return headers.concat(body3);
  };
  Export.prototype.genereateTable = function(config, style, range2, colVisProp) {
    var list = this.generateExportList(config, style, range2, colVisProp);
    return this.genereateTableElement(list);
  };
  Export.prototype.rowLookup = function(range2) {
    var _this55 = this;
    var rows = [];
    if (typeof range2 == "function") {
      range2.call(this.table).forEach(function(row2) {
        row2 = _this55.table.rowManager.findRow(row2);
        if (row2) {
          rows.push(row2);
        }
      });
    } else {
      switch (range2) {
        case true:
        case "visible":
          rows = this.table.rowManager.getVisibleRows(true);
          break;
        case "all":
          rows = this.table.rowManager.rows;
          break;
        case "selected":
          rows = this.table.modules.selectRow.selectedRows;
          break;
        case "active":
        default:
          if (this.table.options.pagination) {
            rows = this.table.rowManager.getDisplayRows(this.table.rowManager.displayRows.length - 2);
          } else {
            rows = this.table.rowManager.getDisplayRows();
          }
      }
    }
    return Object.assign([], rows);
  };
  Export.prototype.generateColumnGroupHeaders = function() {
    var _this56 = this;
    var output = [];
    var columns2 = this.config.columnGroups !== false ? this.table.columnManager.columns : this.table.columnManager.columnsByIndex;
    columns2.forEach(function(column2) {
      var colData = _this56.processColumnGroup(column2);
      if (colData) {
        output.push(colData);
      }
    });
    return output;
  };
  Export.prototype.processColumnGroup = function(column2) {
    var _this57 = this;
    var subGroups = column2.columns, maxDepth = 0, title = column2.definition["title" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))] || column2.definition.title;
    var groupData = {
      title,
      column: column2,
      depth: 1
    };
    if (subGroups.length) {
      groupData.subGroups = [];
      groupData.width = 0;
      subGroups.forEach(function(subGroup) {
        var subGroupData = _this57.processColumnGroup(subGroup);
        if (subGroupData) {
          groupData.width += subGroupData.width;
          groupData.subGroups.push(subGroupData);
          if (subGroupData.depth > maxDepth) {
            maxDepth = subGroupData.depth;
          }
        }
      });
      groupData.depth += maxDepth;
      if (!groupData.width) {
        return false;
      }
    } else {
      if (this.columnVisCheck(column2)) {
        groupData.width = 1;
      } else {
        return false;
      }
    }
    return groupData;
  };
  Export.prototype.columnVisCheck = function(column2) {
    return column2.definition[this.colVisProp] !== false && (column2.visible || !column2.visible && column2.definition[this.colVisProp]);
  };
  Export.prototype.headersToExportRows = function(columns2) {
    var headers = [], headerDepth = 0, exportRows = [];
    function parseColumnGroup(column2, level) {
      var depth = headerDepth - level;
      if (typeof headers[level] === "undefined") {
        headers[level] = [];
      }
      column2.height = column2.subGroups ? 1 : depth - column2.depth + 1;
      headers[level].push(column2);
      if (column2.height > 1) {
        for (var _i10 = 1; _i10 < column2.height; _i10++) {
          if (typeof headers[level + _i10] === "undefined") {
            headers[level + _i10] = [];
          }
          headers[level + _i10].push(false);
        }
      }
      if (column2.width > 1) {
        for (var _i11 = 1; _i11 < column2.width; _i11++) {
          headers[level].push(false);
        }
      }
      if (column2.subGroups) {
        column2.subGroups.forEach(function(subGroup) {
          parseColumnGroup(subGroup, level + 1);
        });
      }
    }
    columns2.forEach(function(column2) {
      if (column2.depth > headerDepth) {
        headerDepth = column2.depth;
      }
    });
    columns2.forEach(function(column2) {
      parseColumnGroup(column2, 0);
    });
    headers.forEach(function(header) {
      var columns3 = [];
      header.forEach(function(col) {
        if (col) {
          columns3.push(new ExportColumn(col.title, col.column.getComponent(), col.width, col.height, col.depth));
        } else {
          columns3.push(null);
        }
      });
      exportRows.push(new ExportRow("header", columns3));
    });
    return exportRows;
  };
  Export.prototype.bodyToExportRows = function(rows) {
    var _this58 = this;
    var columns2 = [];
    var exportRows = [];
    this.table.columnManager.columnsByIndex.forEach(function(column2) {
      if (_this58.columnVisCheck(column2)) {
        columns2.push(column2.getComponent());
      }
    });
    if (this.config.columnCalcs !== false && this.table.modExists("columnCalcs")) {
      if (this.table.modules.columnCalcs.topInitialized) {
        rows.unshift(this.table.modules.columnCalcs.topRow);
      }
      if (this.table.modules.columnCalcs.botInitialized) {
        rows.push(this.table.modules.columnCalcs.botRow);
      }
    }
    rows = rows.filter(function(row2) {
      switch (row2.type) {
        case "group":
          return _this58.config.rowGroups !== false;
          break;
        case "calc":
          return _this58.config.columnCalcs !== false;
          break;
        case "row":
          return !(_this58.table.options.dataTree && _this58.config.dataTree === false && row2.modules.dataTree.parent);
          break;
      }
      return true;
    });
    rows.forEach(function(row2, i2) {
      var rowData = row2.getData(_this58.colVisProp);
      var exportCols = [];
      var indent = 0;
      switch (row2.type) {
        case "group":
          indent = row2.level;
          exportCols.push(new ExportColumn(row2.key, row2.getComponent(), columns2.length, 1));
          break;
        case "calc":
        case "row":
          columns2.forEach(function(col) {
            exportCols.push(new ExportColumn(col._column.getFieldValue(rowData), col, 1, 1));
          });
          if (_this58.table.options.dataTree && _this58.config.dataTree !== false) {
            indent = row2.modules.dataTree.index;
          }
          break;
      }
      exportRows.push(new ExportRow(row2.type, exportCols, row2.getComponent(), indent));
    });
    return exportRows;
  };
  Export.prototype.genereateTableElement = function(list) {
    var _this59 = this;
    var table4 = document.createElement("table"), headerEl = document.createElement("thead"), bodyEl = document.createElement("tbody"), styles = this.lookupTableStyles(), rowFormatter = this.table.options["rowFormatter" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))], setup = {};
    setup.rowFormatter = rowFormatter !== null ? rowFormatter : this.table.options.rowFormatter;
    if (this.table.options.dataTree && this.config.dataTree !== false && this.table.modExists("columnCalcs")) {
      setup.treeElementField = this.table.modules.dataTree.elementField;
    }
    setup.groupHeader = this.table.options["groupHeader" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))];
    if (setup.groupHeader && !Array.isArray(setup.groupHeader)) {
      setup.groupHeader = [setup.groupHeader];
    }
    table4.classList.add("tabulator-print-table");
    this.mapElementStyles(this.table.columnManager.getHeadersElement(), headerEl, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);
    if (list.length > 1e3) {
      console.warn("It may take a long time to render an HTML table with more than 1000 rows");
    }
    list.forEach(function(row2, i2) {
      switch (row2.type) {
        case "header":
          headerEl.appendChild(_this59.genereateHeaderElement(row2, setup, styles));
          break;
        case "group":
          bodyEl.appendChild(_this59.genereateGroupElement(row2, setup, styles));
          break;
        case "calc":
          bodyEl.appendChild(_this59.genereateCalcElement(row2, setup, styles));
          break;
        case "row":
          var rowEl = _this59.genereateRowElement(row2, setup, styles);
          _this59.mapElementStyles(i2 % 2 && styles.evenRow ? styles.evenRow : styles.oddRow, rowEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]);
          bodyEl.appendChild(rowEl);
          break;
      }
    });
    if (headerEl.innerHTML) {
      table4.appendChild(headerEl);
    }
    table4.appendChild(bodyEl);
    this.mapElementStyles(this.table.element, table4, ["border-top", "border-left", "border-right", "border-bottom"]);
    return table4;
  };
  Export.prototype.lookupTableStyles = function() {
    var styles = {};
    if (this.cloneTableStyle && window.getComputedStyle) {
      styles.oddRow = this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)");
      styles.evenRow = this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)");
      styles.calcRow = this.table.element.querySelector(".tabulator-row.tabulator-calcs");
      styles.firstRow = this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)");
      styles.firstGroup = this.table.element.getElementsByClassName("tabulator-group")[0];
      if (styles.firstRow) {
        styles.styleCells = styles.firstRow.getElementsByClassName("tabulator-cell");
        styles.firstCell = styles.styleCells[0];
        styles.lastCell = styles.styleCells[styles.styleCells.length - 1];
      }
    }
    return styles;
  };
  Export.prototype.genereateHeaderElement = function(row2, setup, styles) {
    var _this60 = this;
    var rowEl = document.createElement("tr");
    row2.columns.forEach(function(column2) {
      if (column2) {
        var cellEl = document.createElement("th");
        var classNames = column2.component._column.definition.cssClass ? column2.component._column.definition.cssClass.split(" ") : [];
        cellEl.colSpan = column2.width;
        cellEl.rowSpan = column2.height;
        cellEl.innerHTML = column2.value;
        if (_this60.cloneTableStyle) {
          cellEl.style.boxSizing = "border-box";
        }
        classNames.forEach(function(className) {
          cellEl.classList.add(className);
        });
        _this60.mapElementStyles(column2.component.getElement(), cellEl, ["text-align", "border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);
        _this60.mapElementStyles(column2.component._column.contentElement, cellEl, ["padding-top", "padding-left", "padding-right", "padding-bottom"]);
        if (column2.component._column.visible) {
          _this60.mapElementStyles(column2.component.getElement(), cellEl, ["width"]);
        } else {
          if (column2.component._column.definition.width) {
            cellEl.style.width = column2.component._column.definition.width + "px";
          }
        }
        if (column2.component._column.parent) {
          _this60.mapElementStyles(column2.component._column.parent.groupElement, cellEl, ["border-top"]);
        }
        rowEl.appendChild(cellEl);
      }
    });
    return rowEl;
  };
  Export.prototype.genereateGroupElement = function(row2, setup, styles) {
    var rowEl = document.createElement("tr"), cellEl = document.createElement("td"), group = row2.columns[0];
    rowEl.classList.add("tabulator-print-table-row");
    if (setup.groupHeader && setup.groupHeader[row2.indent]) {
      group.value = setup.groupHeader[row2.indent](group.value, row2.component._group.getRowCount(), row2.component._group.getData(), row2.component);
    } else {
      if (setup.groupHeader === false) {
        group.value = group.value;
      } else {
        group.value = row2.component._group.generator(group.value, row2.component._group.getRowCount(), row2.component._group.getData(), row2.component);
      }
    }
    cellEl.colSpan = group.width;
    cellEl.innerHTML = group.value;
    rowEl.classList.add("tabulator-print-table-group");
    rowEl.classList.add("tabulator-group-level-" + row2.indent);
    if (group.component.isVisible()) {
      rowEl.classList.add("tabulator-group-visible");
    }
    this.mapElementStyles(styles.firstGroup, rowEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]);
    this.mapElementStyles(styles.firstGroup, cellEl, ["padding-top", "padding-left", "padding-right", "padding-bottom"]);
    rowEl.appendChild(cellEl);
    return rowEl;
  };
  Export.prototype.genereateCalcElement = function(row2, setup, styles) {
    var rowEl = this.genereateRowElement(row2, setup, styles);
    rowEl.classList.add("tabulator-print-table-calcs");
    this.mapElementStyles(styles.calcRow, rowEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]);
    return rowEl;
  };
  Export.prototype.genereateRowElement = function(row2, setup, styles) {
    var _this61 = this;
    var rowEl = document.createElement("tr");
    rowEl.classList.add("tabulator-print-table-row");
    row2.columns.forEach(function(col) {
      if (col) {
        var cellEl = document.createElement("td"), column2 = col.component._column, value = col.value;
        var cellWrapper = {
          modules: {},
          getValue: function getValue() {
            return value;
          },
          getField: function getField() {
            return column2.definition.field;
          },
          getElement: function getElement() {
            return cellEl;
          },
          getColumn: function getColumn() {
            return column2.getComponent();
          },
          getData: function getData() {
            return row2.component.getData();
          },
          getRow: function getRow() {
            return row2.component;
          },
          getComponent: function getComponent() {
            return cellWrapper;
          },
          column: column2
        };
        var classNames = column2.definition.cssClass ? column2.definition.cssClass.split(" ") : [];
        classNames.forEach(function(className) {
          cellEl.classList.add(className);
        });
        if (_this61.table.modExists("format") && _this61.config.formatCells !== false) {
          value = _this61.table.modules.format.formatExportValue(cellWrapper, _this61.colVisProp);
        } else {
          switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
            case "object":
              value = JSON.stringify(value);
              break;
            case "undefined":
            case "null":
              value = "";
              break;
            default:
              value = value;
          }
        }
        if (value instanceof Node) {
          cellEl.appendChild(value);
        } else {
          cellEl.innerHTML = value;
        }
        if (styles.firstCell) {
          _this61.mapElementStyles(styles.firstCell, cellEl, ["padding-top", "padding-left", "padding-right", "padding-bottom", "border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size"]);
          if (column2.definition.align) {
            cellEl.style.textAlign = column2.definition.align;
          }
        }
        if (_this61.table.options.dataTree && _this61.config.dataTree !== false) {
          if (setup.treeElementField && setup.treeElementField == column2.field || !setup.treeElementField && i == 0) {
            if (row2.component._row.modules.dataTree.controlEl) {
              cellEl.insertBefore(row2.component._row.modules.dataTree.controlEl.cloneNode(true), cellEl.firstChild);
            }
            if (row2.component._row.modules.dataTree.branchEl) {
              cellEl.insertBefore(row2.component._row.modules.dataTree.branchEl.cloneNode(true), cellEl.firstChild);
            }
          }
        }
        rowEl.appendChild(cellEl);
        if (cellWrapper.modules.format && cellWrapper.modules.format.renderedCallback) {
          cellWrapper.modules.format.renderedCallback();
        }
        if (setup.rowFormatter && _this61.config.formatCells !== false) {
          setup.rowFormatter(row2.component);
        }
      }
    });
    return rowEl;
  };
  Export.prototype.genereateHTMLTable = function(list) {
    var holder = document.createElement("div");
    holder.appendChild(this.genereateTableElement(list));
    return holder.innerHTML;
  };
  Export.prototype.getHtml = function(visible2, style, config, colVisProp) {
    var list = this.generateExportList(config || this.table.options.htmlOutputConfig, style, visible2, colVisProp || "htmlOutput");
    return this.genereateHTMLTable(list);
  };
  Export.prototype.mapElementStyles = function(from, to, props) {
    if (this.cloneTableStyle && from && to) {
      var lookup2 = {
        "background-color": "backgroundColor",
        "color": "fontColor",
        "width": "width",
        "font-weight": "fontWeight",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "text-align": "textAlign",
        "border-top": "borderTop",
        "border-left": "borderLeft",
        "border-right": "borderRight",
        "border-bottom": "borderBottom",
        "padding-top": "paddingTop",
        "padding-left": "paddingLeft",
        "padding-right": "paddingRight",
        "padding-bottom": "paddingBottom"
      };
      if (window.getComputedStyle) {
        var fromStyle = window.getComputedStyle(from);
        props.forEach(function(prop) {
          to.style[lookup2[prop]] = fromStyle.getPropertyValue(prop);
        });
      }
    }
  };
  Tabulator.prototype.registerModule("export", Export);
  var Filter = function Filter2(table4) {
    this.table = table4;
    this.filterList = [];
    this.headerFilters = {};
    this.headerFilterColumns = [];
    this.prevHeaderFilterChangeCheck = "";
    this.prevHeaderFilterChangeCheck = "{}";
    this.changed = false;
  };
  Filter.prototype.initializeColumn = function(column2, value) {
    var self2 = this, field = column2.getField(), params;
    function success(value2) {
      var filterType = column2.modules.filter.tagType == "input" && column2.modules.filter.attrType == "text" || column2.modules.filter.tagType == "textarea" ? "partial" : "match", type = "", filterChangeCheck = "", filterFunc;
      if (typeof column2.modules.filter.prevSuccess === "undefined" || column2.modules.filter.prevSuccess !== value2) {
        column2.modules.filter.prevSuccess = value2;
        if (!column2.modules.filter.emptyFunc(value2)) {
          column2.modules.filter.value = value2;
          switch (_typeof(column2.definition.headerFilterFunc)) {
            case "string":
              if (self2.filters[column2.definition.headerFilterFunc]) {
                type = column2.definition.headerFilterFunc;
                filterFunc = function filterFunc2(data) {
                  var params2 = column2.definition.headerFilterFuncParams || {};
                  var fieldVal = column2.getFieldValue(data);
                  params2 = typeof params2 === "function" ? params2(value2, fieldVal, data) : params2;
                  return self2.filters[column2.definition.headerFilterFunc](value2, fieldVal, data, params2);
                };
              } else {
                console.warn("Header Filter Error - Matching filter function not found: ", column2.definition.headerFilterFunc);
              }
              break;
            case "function":
              filterFunc = function filterFunc2(data) {
                var params2 = column2.definition.headerFilterFuncParams || {};
                var fieldVal = column2.getFieldValue(data);
                params2 = typeof params2 === "function" ? params2(value2, fieldVal, data) : params2;
                return column2.definition.headerFilterFunc(value2, fieldVal, data, params2);
              };
              type = filterFunc;
              break;
          }
          if (!filterFunc) {
            switch (filterType) {
              case "partial":
                filterFunc = function filterFunc2(data) {
                  var colVal = column2.getFieldValue(data);
                  if (typeof colVal !== "undefined" && colVal !== null) {
                    return String(colVal).toLowerCase().indexOf(String(value2).toLowerCase()) > -1;
                  } else {
                    return false;
                  }
                };
                type = "like";
                break;
              default:
                filterFunc = function filterFunc2(data) {
                  return column2.getFieldValue(data) == value2;
                };
                type = "=";
            }
          }
          self2.headerFilters[field] = { value: value2, func: filterFunc, type, params: params || {} };
        } else {
          delete self2.headerFilters[field];
        }
        filterChangeCheck = JSON.stringify(self2.headerFilters);
        if (self2.prevHeaderFilterChangeCheck !== filterChangeCheck) {
          self2.prevHeaderFilterChangeCheck = filterChangeCheck;
          self2.changed = true;
          self2.table.rowManager.filterRefresh();
        }
      }
      return true;
    }
    column2.modules.filter = {
      success,
      attrType: false,
      tagType: false,
      emptyFunc: false
    };
    this.generateHeaderFilterElement(column2);
  };
  Filter.prototype.generateHeaderFilterElement = function(column2, initialValue, reinitialize) {
    var _this62 = this;
    var self2 = this, success = column2.modules.filter.success, field = column2.getField(), filterElement, editor, editorElement, cellWrapper, typingTimer, searchTrigger, params;
    function cancel() {
    }
    if (column2.modules.filter.headerElement && column2.modules.filter.headerElement.parentNode) {
      column2.contentElement.removeChild(column2.modules.filter.headerElement.parentNode);
    }
    if (field) {
      column2.modules.filter.emptyFunc = column2.definition.headerFilterEmptyCheck || function(value) {
        return !value && value !== "0" && value !== 0;
      };
      filterElement = document.createElement("div");
      filterElement.classList.add("tabulator-header-filter");
      switch (_typeof(column2.definition.headerFilter)) {
        case "string":
          if (self2.table.modules.edit.editors[column2.definition.headerFilter]) {
            editor = self2.table.modules.edit.editors[column2.definition.headerFilter];
            if ((column2.definition.headerFilter === "tick" || column2.definition.headerFilter === "tickCross") && !column2.definition.headerFilterEmptyCheck) {
              column2.modules.filter.emptyFunc = function(value) {
                return value !== true && value !== false;
              };
            }
          } else {
            console.warn("Filter Error - Cannot build header filter, No such editor found: ", column2.definition.editor);
          }
          break;
        case "function":
          editor = column2.definition.headerFilter;
          break;
        case "boolean":
          if (column2.modules.edit && column2.modules.edit.editor) {
            editor = column2.modules.edit.editor;
          } else {
            if (column2.definition.formatter && self2.table.modules.edit.editors[column2.definition.formatter]) {
              editor = self2.table.modules.edit.editors[column2.definition.formatter];
              if ((column2.definition.formatter === "tick" || column2.definition.formatter === "tickCross") && !column2.definition.headerFilterEmptyCheck) {
                column2.modules.filter.emptyFunc = function(value) {
                  return value !== true && value !== false;
                };
              }
            } else {
              editor = self2.table.modules.edit.editors["input"];
            }
          }
          break;
      }
      if (editor) {
        cellWrapper = {
          getValue: function getValue() {
            return typeof initialValue !== "undefined" ? initialValue : "";
          },
          getField: function getField() {
            return column2.definition.field;
          },
          getElement: function getElement() {
            return filterElement;
          },
          getColumn: function getColumn() {
            return column2.getComponent();
          },
          getRow: function getRow() {
            return {
              normalizeHeight: function normalizeHeight() {
              }
            };
          }
        };
        params = column2.definition.headerFilterParams || {};
        params = typeof params === "function" ? params.call(self2.table) : params;
        editorElement = editor.call(this.table.modules.edit, cellWrapper, function() {
        }, success, cancel, params);
        if (!editorElement) {
          console.warn("Filter Error - Cannot add filter to " + field + " column, editor returned a value of false");
          return;
        }
        if (!(editorElement instanceof Node)) {
          console.warn("Filter Error - Cannot add filter to " + field + " column, editor should return an instance of Node, the editor returned:", editorElement);
          return;
        }
        if (field) {
          self2.table.modules.localize.bind("headerFilters|columns|" + column2.definition.field, function(value) {
            editorElement.setAttribute("placeholder", typeof value !== "undefined" && value ? value : self2.table.modules.localize.getText("headerFilters|default"));
          });
        } else {
          self2.table.modules.localize.bind("headerFilters|default", function(value) {
            editorElement.setAttribute("placeholder", typeof self2.column.definition.headerFilterPlaceholder !== "undefined" && self2.column.definition.headerFilterPlaceholder ? self2.column.definition.headerFilterPlaceholder : value);
          });
        }
        editorElement.addEventListener("click", function(e2) {
          e2.stopPropagation();
          editorElement.focus();
        });
        editorElement.addEventListener("focus", function(e2) {
          var left = _this62.table.columnManager.element.scrollLeft;
          if (left !== _this62.table.rowManager.element.scrollLeft) {
            _this62.table.rowManager.scrollHorizontal(left);
            _this62.table.columnManager.scrollHorizontal(left);
          }
        });
        typingTimer = false;
        searchTrigger = function searchTrigger2(e2) {
          if (typingTimer) {
            clearTimeout(typingTimer);
          }
          typingTimer = setTimeout(function() {
            success(editorElement.value);
          }, self2.table.options.headerFilterLiveFilterDelay);
        };
        column2.modules.filter.headerElement = editorElement;
        column2.modules.filter.attrType = editorElement.hasAttribute("type") ? editorElement.getAttribute("type").toLowerCase() : "";
        column2.modules.filter.tagType = editorElement.tagName.toLowerCase();
        if (column2.definition.headerFilterLiveFilter !== false) {
          if (!(column2.definition.headerFilter === "autocomplete" || column2.definition.headerFilter === "tickCross" || (column2.definition.editor === "autocomplete" || column2.definition.editor === "tickCross") && column2.definition.headerFilter === true)) {
            editorElement.addEventListener("keyup", searchTrigger);
            editorElement.addEventListener("search", searchTrigger);
            if (column2.modules.filter.attrType == "number") {
              editorElement.addEventListener("change", function(e2) {
                success(editorElement.value);
              });
            }
            if (column2.modules.filter.attrType == "text" && this.table.browser !== "ie") {
              editorElement.setAttribute("type", "search");
            }
          }
          if (column2.modules.filter.tagType == "input" || column2.modules.filter.tagType == "select" || column2.modules.filter.tagType == "textarea") {
            editorElement.addEventListener("mousedown", function(e2) {
              e2.stopPropagation();
            });
          }
        }
        filterElement.appendChild(editorElement);
        column2.contentElement.appendChild(filterElement);
        if (!reinitialize) {
          self2.headerFilterColumns.push(column2);
        }
      }
    } else {
      console.warn("Filter Error - Cannot add header filter, column has no field set:", column2.definition.title);
    }
  };
  Filter.prototype.hideHeaderFilterElements = function() {
    this.headerFilterColumns.forEach(function(column2) {
      if (column2.modules.filter && column2.modules.filter.headerElement) {
        column2.modules.filter.headerElement.style.display = "none";
      }
    });
  };
  Filter.prototype.showHeaderFilterElements = function() {
    this.headerFilterColumns.forEach(function(column2) {
      if (column2.modules.filter && column2.modules.filter.headerElement) {
        column2.modules.filter.headerElement.style.display = "";
      }
    });
  };
  Filter.prototype.setHeaderFilterFocus = function(column2) {
    if (column2.modules.filter && column2.modules.filter.headerElement) {
      column2.modules.filter.headerElement.focus();
    } else {
      console.warn("Column Filter Focus Error - No header filter set on column:", column2.getField());
    }
  };
  Filter.prototype.getHeaderFilterValue = function(column2) {
    if (column2.modules.filter && column2.modules.filter.headerElement) {
      return column2.modules.filter.headerElement.value;
    } else {
      console.warn("Column Filter Error - No header filter set on column:", column2.getField());
    }
  };
  Filter.prototype.setHeaderFilterValue = function(column2, value) {
    if (column2) {
      if (column2.modules.filter && column2.modules.filter.headerElement) {
        this.generateHeaderFilterElement(column2, value, true);
        column2.modules.filter.success(value);
      } else {
        console.warn("Column Filter Error - No header filter set on column:", column2.getField());
      }
    }
  };
  Filter.prototype.reloadHeaderFilter = function(column2) {
    if (column2) {
      if (column2.modules.filter && column2.modules.filter.headerElement) {
        this.generateHeaderFilterElement(column2, column2.modules.filter.value, true);
      } else {
        console.warn("Column Filter Error - No header filter set on column:", column2.getField());
      }
    }
  };
  Filter.prototype.hasChanged = function() {
    var changed = this.changed;
    this.changed = false;
    return changed;
  };
  Filter.prototype.setFilter = function(field, type, value, params) {
    var self2 = this;
    self2.filterList = [];
    if (!Array.isArray(field)) {
      field = [{ field, type, value, params }];
    }
    self2.addFilter(field);
  };
  Filter.prototype.addFilter = function(field, type, value, params) {
    var self2 = this;
    if (!Array.isArray(field)) {
      field = [{ field, type, value, params }];
    }
    field.forEach(function(filter2) {
      filter2 = self2.findFilter(filter2);
      if (filter2) {
        self2.filterList.push(filter2);
        self2.changed = true;
      }
    });
    if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.filter) {
      this.table.modules.persistence.save("filter");
    }
  };
  Filter.prototype.findFilter = function(filter2) {
    var self2 = this, column2;
    if (Array.isArray(filter2)) {
      return this.findSubFilters(filter2);
    }
    var filterFunc = false;
    if (typeof filter2.field == "function") {
      filterFunc = function filterFunc2(data) {
        return filter2.field(data, filter2.type || {});
      };
    } else {
      if (self2.filters[filter2.type]) {
        column2 = self2.table.columnManager.getColumnByField(filter2.field);
        if (column2) {
          filterFunc = function filterFunc2(data) {
            return self2.filters[filter2.type](filter2.value, column2.getFieldValue(data), data, filter2.params || {});
          };
        } else {
          filterFunc = function filterFunc2(data) {
            return self2.filters[filter2.type](filter2.value, data[filter2.field], data, filter2.params || {});
          };
        }
      } else {
        console.warn("Filter Error - No such filter type found, ignoring: ", filter2.type);
      }
    }
    filter2.func = filterFunc;
    return filter2.func ? filter2 : false;
  };
  Filter.prototype.findSubFilters = function(filters) {
    var self2 = this, output = [];
    filters.forEach(function(filter2) {
      filter2 = self2.findFilter(filter2);
      if (filter2) {
        output.push(filter2);
      }
    });
    return output.length ? output : false;
  };
  Filter.prototype.getFilters = function(all, ajax) {
    var output = [];
    if (all) {
      output = this.getHeaderFilters();
    }
    if (ajax) {
      output.forEach(function(item) {
        if (typeof item.type == "function") {
          item.type = "function";
        }
      });
    }
    output = output.concat(this.filtersToArray(this.filterList, ajax));
    return output;
  };
  Filter.prototype.filtersToArray = function(filterList, ajax) {
    var _this63 = this;
    var output = [];
    filterList.forEach(function(filter2) {
      var item;
      if (Array.isArray(filter2)) {
        output.push(_this63.filtersToArray(filter2, ajax));
      } else {
        item = { field: filter2.field, type: filter2.type, value: filter2.value };
        if (ajax) {
          if (typeof item.type == "function") {
            item.type = "function";
          }
        }
        output.push(item);
      }
    });
    return output;
  };
  Filter.prototype.getHeaderFilters = function() {
    var self2 = this, output = [];
    for (var key in this.headerFilters) {
      output.push({ field: key, type: this.headerFilters[key].type, value: this.headerFilters[key].value });
    }
    return output;
  };
  Filter.prototype.removeFilter = function(field, type, value) {
    var self2 = this;
    if (!Array.isArray(field)) {
      field = [{ field, type, value }];
    }
    field.forEach(function(filter2) {
      var index = -1;
      if (_typeof(filter2.field) == "object") {
        index = self2.filterList.findIndex(function(element) {
          return filter2 === element;
        });
      } else {
        index = self2.filterList.findIndex(function(element) {
          return filter2.field === element.field && filter2.type === element.type && filter2.value === element.value;
        });
      }
      if (index > -1) {
        self2.filterList.splice(index, 1);
        self2.changed = true;
      } else {
        console.warn("Filter Error - No matching filter type found, ignoring: ", filter2.type);
      }
    });
    if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.filter) {
      this.table.modules.persistence.save("filter");
    }
  };
  Filter.prototype.clearFilter = function(all) {
    this.filterList = [];
    if (all) {
      this.clearHeaderFilter();
    }
    this.changed = true;
    if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.filter) {
      this.table.modules.persistence.save("filter");
    }
  };
  Filter.prototype.clearHeaderFilter = function() {
    var self2 = this;
    this.headerFilters = {};
    self2.prevHeaderFilterChangeCheck = "{}";
    this.headerFilterColumns.forEach(function(column2) {
      if (typeof column2.modules.filter.value !== "undefined") {
        delete column2.modules.filter.value;
      }
      column2.modules.filter.prevSuccess = void 0;
      self2.reloadHeaderFilter(column2);
    });
    this.changed = true;
  };
  Filter.prototype.search = function(searchType, field, type, value) {
    var self2 = this, activeRows = [], filterList = [];
    if (!Array.isArray(field)) {
      field = [{ field, type, value }];
    }
    field.forEach(function(filter2) {
      filter2 = self2.findFilter(filter2);
      if (filter2) {
        filterList.push(filter2);
      }
    });
    this.table.rowManager.rows.forEach(function(row2) {
      var match = true;
      filterList.forEach(function(filter2) {
        if (!self2.filterRecurse(filter2, row2.getData())) {
          match = false;
        }
      });
      if (match) {
        activeRows.push(searchType === "data" ? row2.getData("data") : row2.getComponent());
      }
    });
    return activeRows;
  };
  Filter.prototype.filter = function(rowList, filters) {
    var self2 = this, activeRows = [], activeRowComponents = [];
    if (self2.table.options.dataFiltering) {
      self2.table.options.dataFiltering.call(self2.table, self2.getFilters());
    }
    if (!self2.table.options.ajaxFiltering && (self2.filterList.length || Object.keys(self2.headerFilters).length)) {
      rowList.forEach(function(row2) {
        if (self2.filterRow(row2)) {
          activeRows.push(row2);
        }
      });
    } else {
      activeRows = rowList.slice(0);
    }
    if (self2.table.options.dataFiltered) {
      activeRows.forEach(function(row2) {
        activeRowComponents.push(row2.getComponent());
      });
      self2.table.options.dataFiltered.call(self2.table, self2.getFilters(), activeRowComponents);
    }
    return activeRows;
  };
  Filter.prototype.filterRow = function(row2, filters) {
    var self2 = this, match = true, data = row2.getData();
    self2.filterList.forEach(function(filter2) {
      if (!self2.filterRecurse(filter2, data)) {
        match = false;
      }
    });
    for (var field in self2.headerFilters) {
      if (!self2.headerFilters[field].func(data)) {
        match = false;
      }
    }
    return match;
  };
  Filter.prototype.filterRecurse = function(filter2, data) {
    var self2 = this, match = false;
    if (Array.isArray(filter2)) {
      filter2.forEach(function(subFilter) {
        if (self2.filterRecurse(subFilter, data)) {
          match = true;
        }
      });
    } else {
      match = filter2.func(data);
    }
    return match;
  };
  Filter.prototype.filters = {
    "=": function _(filterVal, rowVal, rowData, filterParams) {
      return rowVal == filterVal ? true : false;
    },
    "<": function _2(filterVal, rowVal, rowData, filterParams) {
      return rowVal < filterVal ? true : false;
    },
    "<=": function _3(filterVal, rowVal, rowData, filterParams) {
      return rowVal <= filterVal ? true : false;
    },
    ">": function _4(filterVal, rowVal, rowData, filterParams) {
      return rowVal > filterVal ? true : false;
    },
    ">=": function _5(filterVal, rowVal, rowData, filterParams) {
      return rowVal >= filterVal ? true : false;
    },
    "!=": function _6(filterVal, rowVal, rowData, filterParams) {
      return rowVal != filterVal ? true : false;
    },
    "regex": function regex(filterVal, rowVal, rowData, filterParams) {
      if (typeof filterVal == "string") {
        filterVal = new RegExp(filterVal);
      }
      return filterVal.test(rowVal);
    },
    "like": function like(filterVal, rowVal, rowData, filterParams) {
      if (filterVal === null || typeof filterVal === "undefined") {
        return rowVal === filterVal ? true : false;
      } else {
        if (typeof rowVal !== "undefined" && rowVal !== null) {
          return String(rowVal).toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
        } else {
          return false;
        }
      }
    },
    "keywords": function keywords(filterVal, rowVal, rowData, filterParams) {
      var keywords2 = filterVal.toLowerCase().split(typeof filterParams.separator === "undefined" ? " " : filterParams.separator), value = String(rowVal === null || typeof rowVal === "undefined" ? "" : rowVal).toLowerCase(), matches = [];
      keywords2.forEach(function(keyword) {
        if (value.includes(keyword)) {
          matches.push(true);
        }
      });
      return filterParams.matchAll ? matches.length === keywords2.length : !!matches.length;
    },
    "starts": function starts(filterVal, rowVal, rowData, filterParams) {
      if (filterVal === null || typeof filterVal === "undefined") {
        return rowVal === filterVal ? true : false;
      } else {
        if (typeof rowVal !== "undefined" && rowVal !== null) {
          return String(rowVal).toLowerCase().startsWith(filterVal.toLowerCase());
        } else {
          return false;
        }
      }
    },
    "ends": function ends(filterVal, rowVal, rowData, filterParams) {
      if (filterVal === null || typeof filterVal === "undefined") {
        return rowVal === filterVal ? true : false;
      } else {
        if (typeof rowVal !== "undefined" && rowVal !== null) {
          return String(rowVal).toLowerCase().endsWith(filterVal.toLowerCase());
        } else {
          return false;
        }
      }
    },
    "in": function _in(filterVal, rowVal, rowData, filterParams) {
      if (Array.isArray(filterVal)) {
        return filterVal.length ? filterVal.indexOf(rowVal) > -1 : true;
      } else {
        console.warn("Filter Error - filter value is not an array:", filterVal);
        return false;
      }
    }
  };
  Tabulator.prototype.registerModule("filter", Filter);
  var Format = function Format2(table4) {
    this.table = table4;
  };
  Format.prototype.initializeColumn = function(column2) {
    column2.modules.format = this.lookupFormatter(column2, "");
    if (typeof column2.definition.formatterPrint !== "undefined") {
      column2.modules.format.print = this.lookupFormatter(column2, "Print");
    }
    if (typeof column2.definition.formatterClipboard !== "undefined") {
      column2.modules.format.clipboard = this.lookupFormatter(column2, "Clipboard");
    }
    if (typeof column2.definition.formatterHtmlOutput !== "undefined") {
      column2.modules.format.htmlOutput = this.lookupFormatter(column2, "HtmlOutput");
    }
  };
  Format.prototype.lookupFormatter = function(column2, type) {
    var config = { params: column2.definition["formatter" + type + "Params"] || {} }, formatter = column2.definition["formatter" + type];
    switch (typeof formatter === "undefined" ? "undefined" : _typeof(formatter)) {
      case "string":
        if (formatter === "tick") {
          formatter = "tickCross";
          if (typeof config.params.crossElement == "undefined") {
            config.params.crossElement = false;
          }
          console.warn("DEPRECATION WARNING - the tick formatter has been deprecated, please use the tickCross formatter with the crossElement param set to false");
        }
        if (this.formatters[formatter]) {
          config.formatter = this.formatters[formatter];
        } else {
          console.warn("Formatter Error - No such formatter found: ", formatter);
          config.formatter = this.formatters.plaintext;
        }
        break;
      case "function":
        config.formatter = formatter;
        break;
      default:
        config.formatter = this.formatters.plaintext;
        break;
    }
    return config;
  };
  Format.prototype.cellRendered = function(cell) {
    if (cell.modules.format && cell.modules.format.renderedCallback && !cell.modules.format.rendered) {
      cell.modules.format.renderedCallback();
      cell.modules.format.rendered = true;
    }
  };
  Format.prototype.formatValue = function(cell) {
    var component2 = cell.getComponent(), params = typeof cell.column.modules.format.params === "function" ? cell.column.modules.format.params(component2) : cell.column.modules.format.params;
    function onRendered(callback) {
      if (!cell.modules.format) {
        cell.modules.format = {};
      }
      cell.modules.format.renderedCallback = callback;
      cell.modules.format.rendered = false;
    }
    return cell.column.modules.format.formatter.call(this, component2, params, onRendered);
  };
  Format.prototype.formatExportValue = function(cell, type) {
    var formatter = cell.column.modules.format[type], params;
    if (formatter) {
      var onRendered = function onRendered2(callback) {
        if (!cell.modules.format) {
          cell.modules.format = {};
        }
        cell.modules.format.renderedCallback = callback;
        cell.modules.format.rendered = false;
      };
      params = typeof formatter.params === "function" ? formatter.params(component) : formatter.params;
      return formatter.formatter.call(this, cell.getComponent(), params, onRendered);
    } else {
      return this.formatValue(cell);
    }
  };
  Format.prototype.sanitizeHTML = function(value) {
    if (value) {
      var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      return String(value).replace(/[&<>"'`=\/]/g, function(s) {
        return entityMap[s];
      });
    } else {
      return value;
    }
  };
  Format.prototype.emptyToSpace = function(value) {
    return value === null || typeof value === "undefined" || value === "" ? "&nbsp;" : value;
  };
  Format.prototype.getFormatter = function(formatter) {
    var formatter;
    switch (typeof formatter === "undefined" ? "undefined" : _typeof(formatter)) {
      case "string":
        if (this.formatters[formatter]) {
          formatter = this.formatters[formatter];
        } else {
          console.warn("Formatter Error - No such formatter found: ", formatter);
          formatter = this.formatters.plaintext;
        }
        break;
      case "function":
        formatter = formatter;
        break;
      default:
        formatter = this.formatters.plaintext;
        break;
    }
    return formatter;
  };
  Format.prototype.formatters = {
    plaintext: function plaintext(cell, formatterParams, onRendered) {
      return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
    },
    html: function html2(cell, formatterParams, onRendered) {
      return cell.getValue();
    },
    textarea: function textarea2(cell, formatterParams, onRendered) {
      cell.getElement().style.whiteSpace = "pre-wrap";
      return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
    },
    money: function money(cell, formatterParams, onRendered) {
      var floatVal = parseFloat(cell.getValue()), number3, integer2, decimal, rgx;
      var decimalSym = formatterParams.decimal || ".";
      var thousandSym = formatterParams.thousand || ",";
      var symbol = formatterParams.symbol || "";
      var after = !!formatterParams.symbolAfter;
      var precision = typeof formatterParams.precision !== "undefined" ? formatterParams.precision : 2;
      if (isNaN(floatVal)) {
        return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
      }
      number3 = precision !== false ? floatVal.toFixed(precision) : floatVal;
      number3 = String(number3).split(".");
      integer2 = number3[0];
      decimal = number3.length > 1 ? decimalSym + number3[1] : "";
      rgx = /(\d+)(\d{3})/;
      while (rgx.test(integer2)) {
        integer2 = integer2.replace(rgx, "$1" + thousandSym + "$2");
      }
      return after ? integer2 + decimal + symbol : symbol + integer2 + decimal;
    },
    link: function link(cell, formatterParams, onRendered) {
      var value = cell.getValue(), urlPrefix = formatterParams.urlPrefix || "", download2 = formatterParams.download, label = value, el = document.createElement("a"), data;
      if (formatterParams.labelField) {
        data = cell.getData();
        label = data[formatterParams.labelField];
      }
      if (formatterParams.label) {
        switch (_typeof(formatterParams.label)) {
          case "string":
            label = formatterParams.label;
            break;
          case "function":
            label = formatterParams.label(cell);
            break;
        }
      }
      if (label) {
        if (formatterParams.urlField) {
          data = cell.getData();
          value = data[formatterParams.urlField];
        }
        if (formatterParams.url) {
          switch (_typeof(formatterParams.url)) {
            case "string":
              value = formatterParams.url;
              break;
            case "function":
              value = formatterParams.url(cell);
              break;
          }
        }
        el.setAttribute("href", urlPrefix + value);
        if (formatterParams.target) {
          el.setAttribute("target", formatterParams.target);
        }
        if (formatterParams.download) {
          if (typeof download2 == "function") {
            download2 = download2(cell);
          } else {
            download2 = download2 === true ? "" : download2;
          }
          el.setAttribute("download", download2);
        }
        el.innerHTML = this.emptyToSpace(this.sanitizeHTML(label));
        return el;
      } else {
        return "&nbsp;";
      }
    },
    image: function image(cell, formatterParams, onRendered) {
      var el = document.createElement("img"), src = cell.getValue();
      if (formatterParams.urlPrefix) {
        src = formatterParams.urlPrefix + cell.getValue();
      }
      if (formatterParams.urlSuffix) {
        src = src + formatterParams.urlSuffix;
      }
      el.setAttribute("src", src);
      switch (_typeof(formatterParams.height)) {
        case "number":
          el.style.height = formatterParams.height + "px";
          break;
        case "string":
          el.style.height = formatterParams.height;
          break;
      }
      switch (_typeof(formatterParams.width)) {
        case "number":
          el.style.width = formatterParams.width + "px";
          break;
        case "string":
          el.style.width = formatterParams.width;
          break;
      }
      el.addEventListener("load", function() {
        cell.getRow().normalizeHeight();
      });
      return el;
    },
    tickCross: function tickCross2(cell, formatterParams, onRendered) {
      var value = cell.getValue(), element = cell.getElement(), empty = formatterParams.allowEmpty, truthy = formatterParams.allowTruthy, tick = typeof formatterParams.tickElement !== "undefined" ? formatterParams.tickElement : '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>', cross = typeof formatterParams.crossElement !== "undefined" ? formatterParams.crossElement : '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
      if (truthy && value || value === true || value === "true" || value === "True" || value === 1 || value === "1") {
        element.setAttribute("aria-checked", true);
        return tick || "";
      } else {
        if (empty && (value === "null" || value === "" || value === null || typeof value === "undefined")) {
          element.setAttribute("aria-checked", "mixed");
          return "";
        } else {
          element.setAttribute("aria-checked", false);
          return cross || "";
        }
      }
    },
    datetime: function datetime(cell, formatterParams, onRendered) {
      var inputFormat = formatterParams.inputFormat || "YYYY-MM-DD hh:mm:ss";
      var outputFormat = formatterParams.outputFormat || "DD/MM/YYYY hh:mm:ss";
      var invalid = typeof formatterParams.invalidPlaceholder !== "undefined" ? formatterParams.invalidPlaceholder : "";
      var value = cell.getValue();
      var newDatetime = moment(value, inputFormat);
      if (newDatetime.isValid()) {
        return formatterParams.timezone ? newDatetime.tz(formatterParams.timezone).format(outputFormat) : newDatetime.format(outputFormat);
      } else {
        if (invalid === true) {
          return value;
        } else if (typeof invalid === "function") {
          return invalid(value);
        } else {
          return invalid;
        }
      }
    },
    datetimediff: function datetime2(cell, formatterParams, onRendered) {
      var inputFormat = formatterParams.inputFormat || "YYYY-MM-DD hh:mm:ss";
      var invalid = typeof formatterParams.invalidPlaceholder !== "undefined" ? formatterParams.invalidPlaceholder : "";
      var suffix = typeof formatterParams.suffix !== "undefined" ? formatterParams.suffix : false;
      var unit = typeof formatterParams.unit !== "undefined" ? formatterParams.unit : void 0;
      var humanize = typeof formatterParams.humanize !== "undefined" ? formatterParams.humanize : false;
      var date2 = typeof formatterParams.date !== "undefined" ? formatterParams.date : moment();
      var value = cell.getValue();
      var newDatetime = moment(value, inputFormat);
      if (newDatetime.isValid()) {
        if (humanize) {
          return moment.duration(newDatetime.diff(date2)).humanize(suffix);
        } else {
          return newDatetime.diff(date2, unit) + (suffix ? " " + suffix : "");
        }
      } else {
        if (invalid === true) {
          return value;
        } else if (typeof invalid === "function") {
          return invalid(value);
        } else {
          return invalid;
        }
      }
    },
    lookup: function lookup(cell, formatterParams, onRendered) {
      var value = cell.getValue();
      if (typeof formatterParams[value] === "undefined") {
        console.warn("Missing display value for " + value);
        return value;
      }
      return formatterParams[value];
    },
    star: function star2(cell, formatterParams, onRendered) {
      var value = cell.getValue(), element = cell.getElement(), maxStars = formatterParams && formatterParams.stars ? formatterParams.stars : 5, stars = document.createElement("span"), star3 = document.createElementNS("http://www.w3.org/2000/svg", "svg"), starActive = '<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>', starInactive = '<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
      stars.style.verticalAlign = "middle";
      star3.setAttribute("width", "14");
      star3.setAttribute("height", "14");
      star3.setAttribute("viewBox", "0 0 512 512");
      star3.setAttribute("xml:space", "preserve");
      star3.style.padding = "0 1px";
      value = value && !isNaN(value) ? parseInt(value) : 0;
      value = Math.max(0, Math.min(value, maxStars));
      for (var i2 = 1; i2 <= maxStars; i2++) {
        var nextStar = star3.cloneNode(true);
        nextStar.innerHTML = i2 <= value ? starActive : starInactive;
        stars.appendChild(nextStar);
      }
      element.style.whiteSpace = "nowrap";
      element.style.overflow = "hidden";
      element.style.textOverflow = "ellipsis";
      element.setAttribute("aria-label", value);
      return stars;
    },
    traffic: function traffic(cell, formatterParams, onRendered) {
      var value = this.sanitizeHTML(cell.getValue()) || 0, el = document.createElement("span"), max3 = formatterParams && formatterParams.max ? formatterParams.max : 100, min3 = formatterParams && formatterParams.min ? formatterParams.min : 0, colors = formatterParams && typeof formatterParams.color !== "undefined" ? formatterParams.color : ["red", "orange", "green"], color2 = "#666666", percent, percentValue;
      if (isNaN(value) || typeof cell.getValue() === "undefined") {
        return;
      }
      el.classList.add("tabulator-traffic-light");
      percentValue = parseFloat(value) <= max3 ? parseFloat(value) : max3;
      percentValue = parseFloat(percentValue) >= min3 ? parseFloat(percentValue) : min3;
      percent = (max3 - min3) / 100;
      percentValue = Math.round((percentValue - min3) / percent);
      switch (typeof colors === "undefined" ? "undefined" : _typeof(colors)) {
        case "string":
          color2 = colors;
          break;
        case "function":
          color2 = colors(value);
          break;
        case "object":
          if (Array.isArray(colors)) {
            var unit = 100 / colors.length;
            var index = Math.floor(percentValue / unit);
            index = Math.min(index, colors.length - 1);
            index = Math.max(index, 0);
            color2 = colors[index];
            break;
          }
      }
      el.style.backgroundColor = color2;
      return el;
    },
    progress: function progress2(cell, formatterParams, onRendered) {
      var value = this.sanitizeHTML(cell.getValue()) || 0, element = cell.getElement(), max3 = formatterParams && formatterParams.max ? formatterParams.max : 100, min3 = formatterParams && formatterParams.min ? formatterParams.min : 0, legendAlign = formatterParams && formatterParams.legendAlign ? formatterParams.legendAlign : "center", percent, percentValue, color2, legend, legendColor, top, left, right, bottom;
      percentValue = parseFloat(value) <= max3 ? parseFloat(value) : max3;
      percentValue = parseFloat(percentValue) >= min3 ? parseFloat(percentValue) : min3;
      percent = (max3 - min3) / 100;
      percentValue = Math.round((percentValue - min3) / percent);
      switch (_typeof(formatterParams.color)) {
        case "string":
          color2 = formatterParams.color;
          break;
        case "function":
          color2 = formatterParams.color(value);
          break;
        case "object":
          if (Array.isArray(formatterParams.color)) {
            var unit = 100 / formatterParams.color.length;
            var index = Math.floor(percentValue / unit);
            index = Math.min(index, formatterParams.color.length - 1);
            index = Math.max(index, 0);
            color2 = formatterParams.color[index];
            break;
          }
        default:
          color2 = "#2DC214";
      }
      switch (_typeof(formatterParams.legend)) {
        case "string":
          legend = formatterParams.legend;
          break;
        case "function":
          legend = formatterParams.legend(value);
          break;
        case "boolean":
          legend = value;
          break;
        default:
          legend = false;
      }
      switch (_typeof(formatterParams.legendColor)) {
        case "string":
          legendColor = formatterParams.legendColor;
          break;
        case "function":
          legendColor = formatterParams.legendColor(value);
          break;
        case "object":
          if (Array.isArray(formatterParams.legendColor)) {
            var unit = 100 / formatterParams.legendColor.length;
            var index = Math.floor(percentValue / unit);
            index = Math.min(index, formatterParams.legendColor.length - 1);
            index = Math.max(index, 0);
            legendColor = formatterParams.legendColor[index];
          }
          break;
        default:
          legendColor = "#000";
      }
      element.style.minWidth = "30px";
      element.style.position = "relative";
      element.setAttribute("aria-label", percentValue);
      var barEl = document.createElement("div");
      barEl.style.display = "inline-block";
      barEl.style.position = "relative";
      barEl.style.width = percentValue + "%";
      barEl.style.backgroundColor = color2;
      barEl.style.height = "100%";
      barEl.setAttribute("data-max", max3);
      barEl.setAttribute("data-min", min3);
      if (legend) {
        var legendEl = document.createElement("div");
        legendEl.style.position = "absolute";
        legendEl.style.top = "4px";
        legendEl.style.left = 0;
        legendEl.style.textAlign = legendAlign;
        legendEl.style.width = "100%";
        legendEl.style.color = legendColor;
        legendEl.innerHTML = legend;
      }
      onRendered(function() {
        if (!(cell instanceof CellComponent)) {
          var holderEl = document.createElement("div");
          holderEl.style.position = "absolute";
          holderEl.style.top = "4px";
          holderEl.style.bottom = "4px";
          holderEl.style.left = "4px";
          holderEl.style.right = "4px";
          element.appendChild(holderEl);
          element = holderEl;
        }
        element.appendChild(barEl);
        if (legend) {
          element.appendChild(legendEl);
        }
      });
      return "";
    },
    color: function color(cell, formatterParams, onRendered) {
      cell.getElement().style.backgroundColor = this.sanitizeHTML(cell.getValue());
      return "";
    },
    buttonTick: function buttonTick(cell, formatterParams, onRendered) {
      return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
    },
    buttonCross: function buttonCross(cell, formatterParams, onRendered) {
      return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
    },
    rownum: function rownum(cell, formatterParams, onRendered) {
      return this.table.rowManager.activeRows.indexOf(cell.getRow()._getSelf()) + 1;
    },
    handle: function handle(cell, formatterParams, onRendered) {
      cell.getElement().classList.add("tabulator-row-handle");
      return "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>";
    },
    responsiveCollapse: function responsiveCollapse(cell, formatterParams, onRendered) {
      var self2 = this, open = false, el = document.createElement("div"), config = cell.getRow()._row.modules.responsiveLayout;
      el.classList.add("tabulator-responsive-collapse-toggle");
      el.innerHTML = "<span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span>";
      cell.getElement().classList.add("tabulator-row-handle");
      function toggleList(isOpen) {
        var collapseEl = config.element;
        config.open = isOpen;
        if (collapseEl) {
          if (config.open) {
            el.classList.add("open");
            collapseEl.style.display = "";
          } else {
            el.classList.remove("open");
            collapseEl.style.display = "none";
          }
        }
      }
      el.addEventListener("click", function(e2) {
        e2.stopImmediatePropagation();
        toggleList(!config.open);
      });
      toggleList(config.open);
      return el;
    },
    rowSelection: function rowSelection(cell, formatterParams, onRendered) {
      var _this64 = this;
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      if (this.table.modExists("selectRow", true)) {
        checkbox.addEventListener("click", function(e2) {
          e2.stopPropagation();
        });
        if (typeof cell.getRow == "function") {
          var row2 = cell.getRow();
          if (row2 instanceof RowComponent) {
            checkbox.addEventListener("change", function(e2) {
              row2.toggleSelect();
            });
            checkbox.checked = row2.isSelected && row2.isSelected();
            this.table.modules.selectRow.registerRowSelectCheckbox(row2, checkbox);
          } else {
            checkbox = "";
          }
        } else {
          checkbox.addEventListener("change", function(e2) {
            if (_this64.table.modules.selectRow.selectedRows.length) {
              _this64.table.deselectRow();
            } else {
              _this64.table.selectRow(formatterParams.rowRange);
            }
          });
          this.table.modules.selectRow.registerHeaderSelectCheckbox(checkbox);
        }
      }
      return checkbox;
    }
  };
  Tabulator.prototype.registerModule("format", Format);
  var FrozenColumns = function FrozenColumns2(table4) {
    this.table = table4;
    this.leftColumns = [];
    this.rightColumns = [];
    this.leftMargin = 0;
    this.rightMargin = 0;
    this.rightPadding = 0;
    this.initializationMode = "left";
    this.active = false;
    this.scrollEndTimer = false;
  };
  FrozenColumns.prototype.reset = function() {
    this.initializationMode = "left";
    this.leftColumns = [];
    this.rightColumns = [];
    this.leftMargin = 0;
    this.rightMargin = 0;
    this.rightMargin = 0;
    this.active = false;
    this.table.columnManager.headersElement.style.marginLeft = 0;
    this.table.columnManager.element.style.paddingRight = 0;
  };
  FrozenColumns.prototype.initializeColumn = function(column2) {
    var config = { margin: 0, edge: false };
    if (!column2.isGroup) {
      if (this.frozenCheck(column2)) {
        config.position = this.initializationMode;
        if (this.initializationMode == "left") {
          this.leftColumns.push(column2);
        } else {
          this.rightColumns.unshift(column2);
        }
        this.active = true;
        column2.modules.frozen = config;
      } else {
        this.initializationMode = "right";
      }
    }
  };
  FrozenColumns.prototype.frozenCheck = function(column2) {
    var frozen = false;
    if (column2.parent.isGroup && column2.definition.frozen) {
      console.warn("Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups");
    }
    if (column2.parent.isGroup) {
      return this.frozenCheck(column2.parent);
    } else {
      return column2.definition.frozen;
    }
    return frozen;
  };
  FrozenColumns.prototype.scrollHorizontal = function() {
    var _this65 = this;
    var rows;
    if (this.active) {
      clearTimeout(this.scrollEndTimer);
      this.scrollEndTimer = setTimeout(function() {
        _this65.layout();
      }, 100);
      rows = this.table.rowManager.getVisibleRows();
      this.calcMargins();
      this.layoutColumnPosition();
      this.layoutCalcRows();
      rows.forEach(function(row2) {
        if (row2.type === "row") {
          _this65.layoutRow(row2);
        }
      });
      this.table.rowManager.tableElement.style.marginRight = this.rightMargin;
    }
  };
  FrozenColumns.prototype.calcMargins = function() {
    this.leftMargin = this._calcSpace(this.leftColumns, this.leftColumns.length) + "px";
    this.table.columnManager.headersElement.style.marginLeft = this.leftMargin;
    this.rightMargin = this._calcSpace(this.rightColumns, this.rightColumns.length) + "px";
    this.table.columnManager.element.style.paddingRight = this.rightMargin;
    this.rightPadding = this.table.rowManager.element.clientWidth + this.table.columnManager.scrollLeft;
  };
  FrozenColumns.prototype.layoutCalcRows = function() {
    if (this.table.modExists("columnCalcs")) {
      if (this.table.modules.columnCalcs.topInitialized && this.table.modules.columnCalcs.topRow) {
        this.layoutRow(this.table.modules.columnCalcs.topRow);
      }
      if (this.table.modules.columnCalcs.botInitialized && this.table.modules.columnCalcs.botRow) {
        this.layoutRow(this.table.modules.columnCalcs.botRow);
      }
    }
  };
  FrozenColumns.prototype.layoutColumnPosition = function(allCells) {
    var _this66 = this;
    var leftParents = [];
    this.leftColumns.forEach(function(column2, i2) {
      column2.modules.frozen.margin = _this66._calcSpace(_this66.leftColumns, i2) + _this66.table.columnManager.scrollLeft + "px";
      if (i2 == _this66.leftColumns.length - 1) {
        column2.modules.frozen.edge = true;
      } else {
        column2.modules.frozen.edge = false;
      }
      if (column2.parent.isGroup) {
        var parentEl = _this66.getColGroupParentElement(column2);
        if (!leftParents.includes(parentEl)) {
          _this66.layoutElement(parentEl, column2);
          leftParents.push(parentEl);
        }
        if (column2.modules.frozen.edge) {
          parentEl.classList.add("tabulator-frozen-" + column2.modules.frozen.position);
        }
      } else {
        _this66.layoutElement(column2.getElement(), column2);
      }
      if (allCells) {
        column2.cells.forEach(function(cell) {
          _this66.layoutElement(cell.getElement(true), column2);
        });
      }
    });
    this.rightColumns.forEach(function(column2, i2) {
      column2.modules.frozen.margin = _this66.rightPadding - _this66._calcSpace(_this66.rightColumns, i2 + 1) + "px";
      if (i2 == _this66.rightColumns.length - 1) {
        column2.modules.frozen.edge = true;
      } else {
        column2.modules.frozen.edge = false;
      }
      if (column2.parent.isGroup) {
        _this66.layoutElement(_this66.getColGroupParentElement(column2), column2);
      } else {
        _this66.layoutElement(column2.getElement(), column2);
      }
      if (allCells) {
        column2.cells.forEach(function(cell) {
          _this66.layoutElement(cell.getElement(true), column2);
        });
      }
    });
  };
  FrozenColumns.prototype.getColGroupParentElement = function(column2) {
    return column2.parent.isGroup ? this.getColGroupParentElement(column2.parent) : column2.getElement();
  };
  FrozenColumns.prototype.layout = function() {
    var self2 = this, rightMargin = 0;
    if (self2.active) {
      this.calcMargins();
      self2.table.rowManager.getDisplayRows().forEach(function(row2) {
        if (row2.type === "row") {
          self2.layoutRow(row2);
        }
      });
      this.layoutCalcRows();
      this.layoutColumnPosition(true);
      this.table.rowManager.tableElement.style.marginRight = this.rightMargin;
    }
  };
  FrozenColumns.prototype.layoutRow = function(row2) {
    var _this67 = this;
    var rowEl = row2.getElement();
    rowEl.style.paddingLeft = this.leftMargin;
    this.leftColumns.forEach(function(column2) {
      var cell = row2.getCell(column2);
      if (cell) {
        _this67.layoutElement(cell.getElement(true), column2);
      }
    });
    this.rightColumns.forEach(function(column2) {
      var cell = row2.getCell(column2);
      if (cell) {
        _this67.layoutElement(cell.getElement(true), column2);
      }
    });
  };
  FrozenColumns.prototype.layoutElement = function(element, column2) {
    if (column2.modules.frozen) {
      element.style.position = "absolute";
      element.style.left = column2.modules.frozen.margin;
      element.classList.add("tabulator-frozen");
      if (column2.modules.frozen.edge) {
        element.classList.add("tabulator-frozen-" + column2.modules.frozen.position);
      }
    }
  };
  FrozenColumns.prototype._calcSpace = function(columns2, index) {
    var width = 0;
    for (var _i12 = 0; _i12 < index; _i12++) {
      if (columns2[_i12].visible) {
        width += columns2[_i12].getWidth();
      }
    }
    return width;
  };
  Tabulator.prototype.registerModule("frozenColumns", FrozenColumns);
  var FrozenRows = function FrozenRows2(table4) {
    this.table = table4;
    this.topElement = document.createElement("div");
    this.rows = [];
    this.displayIndex = 0;
  };
  FrozenRows.prototype.initialize = function() {
    this.rows = [];
    this.topElement.classList.add("tabulator-frozen-rows-holder");
    this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling);
  };
  FrozenRows.prototype.setDisplayIndex = function(index) {
    this.displayIndex = index;
  };
  FrozenRows.prototype.getDisplayIndex = function() {
    return this.displayIndex;
  };
  FrozenRows.prototype.isFrozen = function() {
    return !!this.rows.length;
  };
  FrozenRows.prototype.getRows = function(rows) {
    var self2 = this, frozen = [], output = rows.slice(0);
    this.rows.forEach(function(row2) {
      var index = output.indexOf(row2);
      if (index > -1) {
        output.splice(index, 1);
      }
    });
    return output;
  };
  FrozenRows.prototype.freezeRow = function(row2) {
    if (!row2.modules.frozen) {
      row2.modules.frozen = true;
      this.topElement.appendChild(row2.getElement());
      row2.initialize();
      row2.normalizeHeight();
      this.table.rowManager.adjustTableSize();
      this.rows.push(row2);
      this.table.rowManager.refreshActiveData("display");
      this.styleRows();
    } else {
      console.warn("Freeze Error - Row is already frozen");
    }
  };
  FrozenRows.prototype.unfreezeRow = function(row2) {
    var index = this.rows.indexOf(row2);
    if (row2.modules.frozen) {
      row2.modules.frozen = false;
      this.detachRow(row2);
      this.table.rowManager.adjustTableSize();
      this.table.rowManager.refreshActiveData("display");
      if (this.rows.length) {
        this.styleRows();
      }
    } else {
      console.warn("Freeze Error - Row is already unfrozen");
    }
  };
  FrozenRows.prototype.detachRow = function(row2) {
    var index = this.rows.indexOf(row2);
    if (index > -1) {
      var rowEl = row2.getElement();
      rowEl.parentNode.removeChild(rowEl);
      this.rows.splice(index, 1);
    }
  };
  FrozenRows.prototype.styleRows = function(row2) {
    var self2 = this;
    this.rows.forEach(function(row3, i2) {
      self2.table.rowManager.styleRow(row3, i2);
    });
  };
  Tabulator.prototype.registerModule("frozenRows", FrozenRows);
  var GroupComponent = function GroupComponent2(group) {
    this._group = group;
    this.type = "GroupComponent";
  };
  GroupComponent.prototype.getKey = function() {
    return this._group.key;
  };
  GroupComponent.prototype.getField = function() {
    return this._group.field;
  };
  GroupComponent.prototype.getElement = function() {
    return this._group.element;
  };
  GroupComponent.prototype.getRows = function() {
    return this._group.getRows(true);
  };
  GroupComponent.prototype.getSubGroups = function() {
    return this._group.getSubGroups(true);
  };
  GroupComponent.prototype.getParentGroup = function() {
    return this._group.parent ? this._group.parent.getComponent() : false;
  };
  GroupComponent.prototype.getVisibility = function() {
    console.warn("getVisibility function is deprecated, you should now use the isVisible function");
    return this._group.visible;
  };
  GroupComponent.prototype.isVisible = function() {
    return this._group.visible;
  };
  GroupComponent.prototype.show = function() {
    this._group.show();
  };
  GroupComponent.prototype.hide = function() {
    this._group.hide();
  };
  GroupComponent.prototype.toggle = function() {
    this._group.toggleVisibility();
  };
  GroupComponent.prototype._getSelf = function() {
    return this._group;
  };
  GroupComponent.prototype.getTable = function() {
    return this._group.groupManager.table;
  };
  var Group = function Group2(groupManager, parent, level, key, field, generator, oldGroup) {
    this.groupManager = groupManager;
    this.parent = parent;
    this.key = key;
    this.level = level;
    this.field = field;
    this.hasSubGroups = level < groupManager.groupIDLookups.length - 1;
    this.addRow = this.hasSubGroups ? this._addRowToGroup : this._addRow;
    this.type = "group";
    this.old = oldGroup;
    this.rows = [];
    this.groups = [];
    this.groupList = [];
    this.generator = generator;
    this.elementContents = false;
    this.height = 0;
    this.outerHeight = 0;
    this.initialized = false;
    this.calcs = {};
    this.initialized = false;
    this.modules = {};
    this.arrowElement = false;
    this.visible = oldGroup ? oldGroup.visible : typeof groupManager.startOpen[level] !== "undefined" ? groupManager.startOpen[level] : groupManager.startOpen[0];
    this.component = null;
    this.createElements();
    this.addBindings();
    this.createValueGroups();
  };
  Group.prototype.wipe = function() {
    if (this.groupList.length) {
      this.groupList.forEach(function(group) {
        group.wipe();
      });
    } else {
      this.element = false;
      this.arrowElement = false;
      this.elementContents = false;
    }
  };
  Group.prototype.createElements = function() {
    var arrow = document.createElement("div");
    arrow.classList.add("tabulator-arrow");
    this.element = document.createElement("div");
    this.element.classList.add("tabulator-row");
    this.element.classList.add("tabulator-group");
    this.element.classList.add("tabulator-group-level-" + this.level);
    this.element.setAttribute("role", "rowgroup");
    this.arrowElement = document.createElement("div");
    this.arrowElement.classList.add("tabulator-group-toggle");
    this.arrowElement.appendChild(arrow);
    if (this.groupManager.table.options.movableRows !== false && this.groupManager.table.modExists("moveRow")) {
      this.groupManager.table.modules.moveRow.initializeGroupHeader(this);
    }
  };
  Group.prototype.createValueGroups = function() {
    var _this68 = this;
    var level = this.level + 1;
    if (this.groupManager.allowedValues && this.groupManager.allowedValues[level]) {
      this.groupManager.allowedValues[level].forEach(function(value) {
        _this68._createGroup(value, level);
      });
    }
  };
  Group.prototype.addBindings = function() {
    var self2 = this, dblTap, tapHold, tap, toggleElement;
    if (self2.groupManager.table.options.groupClick) {
      self2.element.addEventListener("click", function(e2) {
        self2.groupManager.table.options.groupClick.call(self2.groupManager.table, e2, self2.getComponent());
      });
    }
    if (self2.groupManager.table.options.groupDblClick) {
      self2.element.addEventListener("dblclick", function(e2) {
        self2.groupManager.table.options.groupDblClick.call(self2.groupManager.table, e2, self2.getComponent());
      });
    }
    if (self2.groupManager.table.options.groupContext) {
      self2.element.addEventListener("contextmenu", function(e2) {
        self2.groupManager.table.options.groupContext.call(self2.groupManager.table, e2, self2.getComponent());
      });
    }
    if ((self2.groupManager.table.options.groupContextMenu || self2.groupManager.table.options.groupClickMenu) && self2.groupManager.table.modExists("menu")) {
      self2.groupManager.table.modules.menu.initializeGroup.call(self2.groupManager.table.modules.menu, self2);
    }
    if (self2.groupManager.table.options.groupTap) {
      tap = false;
      self2.element.addEventListener("touchstart", function(e2) {
        tap = true;
      }, { passive: true });
      self2.element.addEventListener("touchend", function(e2) {
        if (tap) {
          self2.groupManager.table.options.groupTap(e2, self2.getComponent());
        }
        tap = false;
      });
    }
    if (self2.groupManager.table.options.groupDblTap) {
      dblTap = null;
      self2.element.addEventListener("touchend", function(e2) {
        if (dblTap) {
          clearTimeout(dblTap);
          dblTap = null;
          self2.groupManager.table.options.groupDblTap(e2, self2.getComponent());
        } else {
          dblTap = setTimeout(function() {
            clearTimeout(dblTap);
            dblTap = null;
          }, 300);
        }
      });
    }
    if (self2.groupManager.table.options.groupTapHold) {
      tapHold = null;
      self2.element.addEventListener("touchstart", function(e2) {
        clearTimeout(tapHold);
        tapHold = setTimeout(function() {
          clearTimeout(tapHold);
          tapHold = null;
          tap = false;
          self2.groupManager.table.options.groupTapHold(e2, self2.getComponent());
        }, 1e3);
      }, { passive: true });
      self2.element.addEventListener("touchend", function(e2) {
        clearTimeout(tapHold);
        tapHold = null;
      });
    }
    if (self2.groupManager.table.options.groupToggleElement) {
      toggleElement = self2.groupManager.table.options.groupToggleElement == "arrow" ? self2.arrowElement : self2.element;
      toggleElement.addEventListener("click", function(e2) {
        e2.stopPropagation();
        e2.stopImmediatePropagation();
        self2.toggleVisibility();
      });
    }
  };
  Group.prototype._createGroup = function(groupID, level) {
    var groupKey = level + "_" + groupID;
    var group = new Group(this.groupManager, this, level, groupID, this.groupManager.groupIDLookups[level].field, this.groupManager.headerGenerator[level] || this.groupManager.headerGenerator[0], this.old ? this.old.groups[groupKey] : false);
    this.groups[groupKey] = group;
    this.groupList.push(group);
  };
  Group.prototype._addRowToGroup = function(row2) {
    var level = this.level + 1;
    if (this.hasSubGroups) {
      var groupID = this.groupManager.groupIDLookups[level].func(row2.getData()), groupKey = level + "_" + groupID;
      if (this.groupManager.allowedValues && this.groupManager.allowedValues[level]) {
        if (this.groups[groupKey]) {
          this.groups[groupKey].addRow(row2);
        }
      } else {
        if (!this.groups[groupKey]) {
          this._createGroup(groupID, level);
        }
        this.groups[groupKey].addRow(row2);
      }
    }
  };
  Group.prototype._addRow = function(row2) {
    this.rows.push(row2);
    row2.modules.group = this;
  };
  Group.prototype.insertRow = function(row2, to, after) {
    var data = this.conformRowData({});
    row2.updateData(data);
    var toIndex = this.rows.indexOf(to);
    if (toIndex > -1) {
      if (after) {
        this.rows.splice(toIndex + 1, 0, row2);
      } else {
        this.rows.splice(toIndex, 0, row2);
      }
    } else {
      if (after) {
        this.rows.push(row2);
      } else {
        this.rows.unshift(row2);
      }
    }
    row2.modules.group = this;
    this.generateGroupHeaderContents();
    if (this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table") {
      this.groupManager.table.modules.columnCalcs.recalcGroup(this);
    }
    this.groupManager.updateGroupRows(true);
  };
  Group.prototype.scrollHeader = function(left) {
    this.arrowElement.style.marginLeft = left;
    this.groupList.forEach(function(child) {
      child.scrollHeader(left);
    });
  };
  Group.prototype.getRowIndex = function(row2) {
  };
  Group.prototype.conformRowData = function(data) {
    if (this.field) {
      data[this.field] = this.key;
    } else {
      console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function");
    }
    if (this.parent) {
      data = this.parent.conformRowData(data);
    }
    return data;
  };
  Group.prototype.removeRow = function(row2) {
    var index = this.rows.indexOf(row2);
    var el = row2.getElement();
    if (index > -1) {
      this.rows.splice(index, 1);
    }
    if (!this.groupManager.table.options.groupValues && !this.rows.length) {
      if (this.parent) {
        this.parent.removeGroup(this);
      } else {
        this.groupManager.removeGroup(this);
      }
      this.groupManager.updateGroupRows(true);
    } else {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
      this.generateGroupHeaderContents();
      if (this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table") {
        this.groupManager.table.modules.columnCalcs.recalcGroup(this);
      }
    }
  };
  Group.prototype.removeGroup = function(group) {
    var groupKey = group.level + "_" + group.key, index;
    if (this.groups[groupKey]) {
      delete this.groups[groupKey];
      index = this.groupList.indexOf(group);
      if (index > -1) {
        this.groupList.splice(index, 1);
      }
      if (!this.groupList.length) {
        if (this.parent) {
          this.parent.removeGroup(this);
        } else {
          this.groupManager.removeGroup(this);
        }
      }
    }
  };
  Group.prototype.getHeadersAndRows = function(noCalc) {
    var output = [];
    output.push(this);
    this._visSet();
    if (this.visible) {
      if (this.groupList.length) {
        this.groupList.forEach(function(group) {
          output = output.concat(group.getHeadersAndRows(noCalc));
        });
      } else {
        if (!noCalc && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasTopCalcs()) {
          if (this.calcs.top) {
            this.calcs.top.detachElement();
            this.calcs.top.deleteCells();
          }
          this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);
          output.push(this.calcs.top);
        }
        output = output.concat(this.rows);
        if (!noCalc && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasBottomCalcs()) {
          if (this.calcs.bottom) {
            this.calcs.bottom.detachElement();
            this.calcs.bottom.deleteCells();
          }
          this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);
          output.push(this.calcs.bottom);
        }
      }
    } else {
      if (!this.groupList.length && this.groupManager.table.options.columnCalcs != "table") {
        if (this.groupManager.table.modExists("columnCalcs")) {
          if (!noCalc && this.groupManager.table.modules.columnCalcs.hasTopCalcs()) {
            if (this.calcs.top) {
              this.calcs.top.detachElement();
              this.calcs.top.deleteCells();
            }
            if (this.groupManager.table.options.groupClosedShowCalcs) {
              this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);
              output.push(this.calcs.top);
            }
          }
          if (!noCalc && this.groupManager.table.modules.columnCalcs.hasBottomCalcs()) {
            if (this.calcs.bottom) {
              this.calcs.bottom.detachElement();
              this.calcs.bottom.deleteCells();
            }
            if (this.groupManager.table.options.groupClosedShowCalcs) {
              this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);
              output.push(this.calcs.bottom);
            }
          }
        }
      }
    }
    return output;
  };
  Group.prototype.getData = function(visible2, transform) {
    var self2 = this, output = [];
    this._visSet();
    if (!visible2 || visible2 && this.visible) {
      this.rows.forEach(function(row2) {
        output.push(row2.getData(transform || "data"));
      });
    }
    return output;
  };
  Group.prototype.getRowCount = function() {
    var count2 = 0;
    if (this.groupList.length) {
      this.groupList.forEach(function(group) {
        count2 += group.getRowCount();
      });
    } else {
      count2 = this.rows.length;
    }
    return count2;
  };
  Group.prototype.toggleVisibility = function() {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  };
  Group.prototype.hide = function() {
    this.visible = false;
    if (this.groupManager.table.rowManager.getRenderMode() == "classic" && !this.groupManager.table.options.pagination) {
      this.element.classList.remove("tabulator-group-visible");
      if (this.groupList.length) {
        this.groupList.forEach(function(group) {
          var rows = group.getHeadersAndRows();
          rows.forEach(function(row2) {
            row2.detachElement();
          });
        });
      } else {
        this.rows.forEach(function(row2) {
          var rowEl = row2.getElement();
          rowEl.parentNode.removeChild(rowEl);
        });
      }
      this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex());
      this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth();
    } else {
      this.groupManager.updateGroupRows(true);
    }
    this.groupManager.table.options.groupVisibilityChanged.call(this.table, this.getComponent(), false);
  };
  Group.prototype.show = function() {
    var self2 = this;
    self2.visible = true;
    if (this.groupManager.table.rowManager.getRenderMode() == "classic" && !this.groupManager.table.options.pagination) {
      this.element.classList.add("tabulator-group-visible");
      var prev = self2.getElement();
      if (this.groupList.length) {
        this.groupList.forEach(function(group) {
          var rows = group.getHeadersAndRows();
          rows.forEach(function(row2) {
            var rowEl = row2.getElement();
            prev.parentNode.insertBefore(rowEl, prev.nextSibling);
            row2.initialize();
            prev = rowEl;
          });
        });
      } else {
        self2.rows.forEach(function(row2) {
          var rowEl = row2.getElement();
          prev.parentNode.insertBefore(rowEl, prev.nextSibling);
          row2.initialize();
          prev = rowEl;
        });
      }
      this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex());
      this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth();
    } else {
      this.groupManager.updateGroupRows(true);
    }
    this.groupManager.table.options.groupVisibilityChanged.call(this.table, this.getComponent(), true);
  };
  Group.prototype._visSet = function() {
    var data = [];
    if (typeof this.visible == "function") {
      this.rows.forEach(function(row2) {
        data.push(row2.getData());
      });
      this.visible = this.visible(this.key, this.getRowCount(), data, this.getComponent());
    }
  };
  Group.prototype.getRowGroup = function(row2) {
    var match = false;
    if (this.groupList.length) {
      this.groupList.forEach(function(group) {
        var result = group.getRowGroup(row2);
        if (result) {
          match = result;
        }
      });
    } else {
      if (this.rows.find(function(item) {
        return item === row2;
      })) {
        match = this;
      }
    }
    return match;
  };
  Group.prototype.getSubGroups = function(component2) {
    var output = [];
    this.groupList.forEach(function(child) {
      output.push(component2 ? child.getComponent() : child);
    });
    return output;
  };
  Group.prototype.getRows = function(compoment) {
    var output = [];
    this.rows.forEach(function(row2) {
      output.push(compoment ? row2.getComponent() : row2);
    });
    return output;
  };
  Group.prototype.generateGroupHeaderContents = function() {
    var data = [];
    this.rows.forEach(function(row2) {
      data.push(row2.getData());
    });
    this.elementContents = this.generator(this.key, this.getRowCount(), data, this.getComponent());
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
    if (typeof this.elementContents === "string") {
      this.element.innerHTML = this.elementContents;
    } else {
      this.element.appendChild(this.elementContents);
    }
    this.element.insertBefore(this.arrowElement, this.element.firstChild);
  };
  Group.prototype.getPath = function() {
    var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    path.unshift(this.key);
    if (this.parent) {
      this.parent.getPath(path);
    }
    return path;
  };
  Group.prototype.getElement = function() {
    this.addBindingsd = false;
    this._visSet();
    if (this.visible) {
      this.element.classList.add("tabulator-group-visible");
    } else {
      this.element.classList.remove("tabulator-group-visible");
    }
    for (var i2 = 0; i2 < this.element.childNodes.length; ++i2) {
      this.element.childNodes[i2].parentNode.removeChild(this.element.childNodes[i2]);
    }
    this.generateGroupHeaderContents();
    return this.element;
  };
  Group.prototype.detachElement = function() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  };
  Group.prototype.normalizeHeight = function() {
    this.setHeight(this.element.clientHeight);
  };
  Group.prototype.initialize = function(force) {
    if (!this.initialized || force) {
      this.normalizeHeight();
      this.initialized = true;
    }
  };
  Group.prototype.reinitialize = function() {
    this.initialized = false;
    this.height = 0;
    if (Tabulator.prototype.helpers.elVisible(this.element)) {
      this.initialize(true);
    }
  };
  Group.prototype.setHeight = function(height) {
    if (this.height != height) {
      this.height = height;
      this.outerHeight = this.element.offsetHeight;
    }
  };
  Group.prototype.getHeight = function() {
    return this.outerHeight;
  };
  Group.prototype.getGroup = function() {
    return this;
  };
  Group.prototype.reinitializeHeight = function() {
  };
  Group.prototype.calcHeight = function() {
  };
  Group.prototype.setCellHeight = function() {
  };
  Group.prototype.clearCellHeight = function() {
  };
  Group.prototype.getComponent = function() {
    if (!this.component) {
      this.component = new GroupComponent(this);
    }
    return this.component;
  };
  var GroupRows = function GroupRows2(table4) {
    this.table = table4;
    this.groupIDLookups = false;
    this.startOpen = [function() {
      return false;
    }];
    this.headerGenerator = [function() {
      return "";
    }];
    this.groupList = [];
    this.allowedValues = false;
    this.groups = {};
    this.displayIndex = 0;
  };
  GroupRows.prototype.initialize = function() {
    var self2 = this, groupBy2 = self2.table.options.groupBy, startOpen = self2.table.options.groupStartOpen, groupHeader = self2.table.options.groupHeader;
    this.allowedValues = self2.table.options.groupValues;
    if (Array.isArray(groupBy2) && Array.isArray(groupHeader) && groupBy2.length > groupHeader.length) {
      console.warn("Error creating group headers, groupHeader array is shorter than groupBy array");
    }
    self2.headerGenerator = [function() {
      return "";
    }];
    this.startOpen = [function() {
      return false;
    }];
    self2.table.modules.localize.bind("groups|item", function(langValue, lang) {
      self2.headerGenerator[0] = function(value, count2, data) {
        return (typeof value === "undefined" ? "" : value) + "<span>(" + count2 + " " + (count2 === 1 ? langValue : lang.groups.items) + ")</span>";
      };
    });
    this.groupIDLookups = [];
    if (Array.isArray(groupBy2) || groupBy2) {
      if (this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "table" && this.table.options.columnCalcs != "both") {
        this.table.modules.columnCalcs.removeCalcs();
      }
    } else {
      if (this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "group") {
        var cols = this.table.columnManager.getRealColumns();
        cols.forEach(function(col) {
          if (col.definition.topCalc) {
            self2.table.modules.columnCalcs.initializeTopRow();
          }
          if (col.definition.bottomCalc) {
            self2.table.modules.columnCalcs.initializeBottomRow();
          }
        });
      }
    }
    if (!Array.isArray(groupBy2)) {
      groupBy2 = [groupBy2];
    }
    groupBy2.forEach(function(group, i2) {
      var lookupFunc, column2;
      if (typeof group == "function") {
        lookupFunc = group;
      } else {
        column2 = self2.table.columnManager.getColumnByField(group);
        if (column2) {
          lookupFunc = function lookupFunc2(data) {
            return column2.getFieldValue(data);
          };
        } else {
          lookupFunc = function lookupFunc2(data) {
            return data[group];
          };
        }
      }
      self2.groupIDLookups.push({
        field: typeof group === "function" ? false : group,
        func: lookupFunc,
        values: self2.allowedValues ? self2.allowedValues[i2] : false
      });
    });
    if (startOpen) {
      if (!Array.isArray(startOpen)) {
        startOpen = [startOpen];
      }
      startOpen.forEach(function(level) {
        level = typeof level == "function" ? level : function() {
          return true;
        };
      });
      self2.startOpen = startOpen;
    }
    if (groupHeader) {
      self2.headerGenerator = Array.isArray(groupHeader) ? groupHeader : [groupHeader];
    }
    this.initialized = true;
  };
  GroupRows.prototype.setDisplayIndex = function(index) {
    this.displayIndex = index;
  };
  GroupRows.prototype.getDisplayIndex = function() {
    return this.displayIndex;
  };
  GroupRows.prototype.getRows = function(rows) {
    if (this.groupIDLookups.length) {
      this.table.options.dataGrouping.call(this.table);
      this.generateGroups(rows);
      if (this.table.options.dataGrouped) {
        this.table.options.dataGrouped.call(this.table, this.getGroups(true));
      }
      return this.updateGroupRows();
    } else {
      return rows.slice(0);
    }
  };
  GroupRows.prototype.getGroups = function(compoment) {
    var groupComponents = [];
    this.groupList.forEach(function(group) {
      groupComponents.push(compoment ? group.getComponent() : group);
    });
    return groupComponents;
  };
  GroupRows.prototype.getChildGroups = function(group) {
    var _this69 = this;
    var groupComponents = [];
    if (!group) {
      group = this;
    }
    group.groupList.forEach(function(child) {
      if (child.groupList.length) {
        groupComponents = groupComponents.concat(_this69.getChildGroups(child));
      } else {
        groupComponents.push(child);
      }
    });
    return groupComponents;
  };
  GroupRows.prototype.wipe = function() {
    this.groupList.forEach(function(group) {
      group.wipe();
    });
  };
  GroupRows.prototype.pullGroupListData = function(groupList) {
    var self2 = this;
    var groupListData = [];
    groupList.forEach(function(group) {
      var groupHeader = {};
      groupHeader.level = 0;
      groupHeader.rowCount = 0;
      groupHeader.headerContent = "";
      var childData = [];
      if (group.hasSubGroups) {
        childData = self2.pullGroupListData(group.groupList);
        groupHeader.level = group.level;
        groupHeader.rowCount = childData.length - group.groupList.length;
        groupHeader.headerContent = group.generator(group.key, groupHeader.rowCount, group.rows, group);
        groupListData.push(groupHeader);
        groupListData = groupListData.concat(childData);
      } else {
        groupHeader.level = group.level;
        groupHeader.headerContent = group.generator(group.key, group.rows.length, group.rows, group);
        groupHeader.rowCount = group.getRows().length;
        groupListData.push(groupHeader);
        group.getRows().forEach(function(row2) {
          groupListData.push(row2.getData("data"));
        });
      }
    });
    return groupListData;
  };
  GroupRows.prototype.getGroupedData = function() {
    return this.pullGroupListData(this.groupList);
  };
  GroupRows.prototype.getRowGroup = function(row2) {
    var match = false;
    this.groupList.forEach(function(group) {
      var result = group.getRowGroup(row2);
      if (result) {
        match = result;
      }
    });
    return match;
  };
  GroupRows.prototype.countGroups = function() {
    return this.groupList.length;
  };
  GroupRows.prototype.generateGroups = function(rows) {
    var self2 = this, oldGroups = self2.groups;
    self2.groups = {};
    self2.groupList = [];
    if (this.allowedValues && this.allowedValues[0]) {
      this.allowedValues[0].forEach(function(value) {
        self2.createGroup(value, 0, oldGroups);
      });
      rows.forEach(function(row2) {
        self2.assignRowToExistingGroup(row2, oldGroups);
      });
    } else {
      rows.forEach(function(row2) {
        self2.assignRowToGroup(row2, oldGroups);
      });
    }
  };
  GroupRows.prototype.createGroup = function(groupID, level, oldGroups) {
    var groupKey = level + "_" + groupID, group;
    oldGroups = oldGroups || [];
    group = new Group(this, false, level, groupID, this.groupIDLookups[0].field, this.headerGenerator[0], oldGroups[groupKey]);
    this.groups[groupKey] = group;
    this.groupList.push(group);
  };
  GroupRows.prototype.assignRowToExistingGroup = function(row2, oldGroups) {
    var groupID = this.groupIDLookups[0].func(row2.getData()), groupKey = "0_" + groupID;
    if (this.groups[groupKey]) {
      this.groups[groupKey].addRow(row2);
    }
  };
  GroupRows.prototype.assignRowToGroup = function(row2, oldGroups) {
    var groupID = this.groupIDLookups[0].func(row2.getData()), newGroupNeeded = !this.groups["0_" + groupID];
    if (newGroupNeeded) {
      this.createGroup(groupID, 0, oldGroups);
    }
    this.groups["0_" + groupID].addRow(row2);
    return !newGroupNeeded;
  };
  GroupRows.prototype.reassignRowToGroup = function(row2) {
    var oldRowGroup = row2.getGroup(), oldGroupPath = oldRowGroup.getPath(), newGroupPath = this.getExpectedPath(row2), samePath = true;
    var samePath = oldGroupPath.length == newGroupPath.length && oldGroupPath.every(function(element, index) {
      return element === newGroupPath[index];
    });
    if (!samePath) {
      oldRowGroup.removeRow(row2);
      this.assignRowToGroup(row2, self.groups);
      this.table.rowManager.refreshActiveData("group", false, true);
    }
  };
  GroupRows.prototype.getExpectedPath = function(row2) {
    var groupPath = [], rowData = row2.getData();
    this.groupIDLookups.forEach(function(groupId) {
      groupPath.push(groupId.func(rowData));
    });
    return groupPath;
  };
  GroupRows.prototype.updateGroupRows = function(force) {
    var self2 = this, output = [], oldRowCount;
    self2.groupList.forEach(function(group) {
      output = output.concat(group.getHeadersAndRows());
    });
    if (force) {
      var displayIndex = self2.table.rowManager.setDisplayRows(output, this.getDisplayIndex());
      if (displayIndex !== true) {
        this.setDisplayIndex(displayIndex);
      }
      self2.table.rowManager.refreshActiveData("group", true, true);
    }
    return output;
  };
  GroupRows.prototype.scrollHeaders = function(left) {
    if (this.table.options.virtualDomHoz) {
      left -= this.table.vdomHoz.vDomPadLeft;
    }
    left = left + "px";
    this.groupList.forEach(function(group) {
      group.scrollHeader(left);
    });
  };
  GroupRows.prototype.removeGroup = function(group) {
    var groupKey = group.level + "_" + group.key, index;
    if (this.groups[groupKey]) {
      delete this.groups[groupKey];
      index = this.groupList.indexOf(group);
      if (index > -1) {
        this.groupList.splice(index, 1);
      }
    }
  };
  Tabulator.prototype.registerModule("groupRows", GroupRows);
  var History = function History2(table4) {
    this.table = table4;
    this.history = [];
    this.index = -1;
  };
  History.prototype.clear = function() {
    this.history = [];
    this.index = -1;
  };
  History.prototype.action = function(type, component2, data) {
    this.history = this.history.slice(0, this.index + 1);
    this.history.push({
      type,
      component: component2,
      data
    });
    this.index++;
  };
  History.prototype.getHistoryUndoSize = function() {
    return this.index + 1;
  };
  History.prototype.getHistoryRedoSize = function() {
    return this.history.length - (this.index + 1);
  };
  History.prototype.clearComponentHistory = function(component2) {
    var index = this.history.findIndex(function(item) {
      return item.component === component2;
    });
    if (index > -1) {
      this.history.splice(index, 1);
      if (index <= this.index) {
        this.index--;
      }
      this.clearComponentHistory(component2);
    }
  };
  History.prototype.undo = function() {
    if (this.index > -1) {
      var action = this.history[this.index];
      this.undoers[action.type].call(this, action);
      this.index--;
      this.table.options.historyUndo.call(this.table, action.type, action.component.getComponent(), action.data);
      return true;
    } else {
      console.warn("History Undo Error - No more history to undo");
      return false;
    }
  };
  History.prototype.redo = function() {
    if (this.history.length - 1 > this.index) {
      this.index++;
      var action = this.history[this.index];
      this.redoers[action.type].call(this, action);
      this.table.options.historyRedo.call(this.table, action.type, action.component.getComponent(), action.data);
      return true;
    } else {
      console.warn("History Redo Error - No more history to redo");
      return false;
    }
  };
  History.prototype.undoers = {
    cellEdit: function cellEdit(action) {
      action.component.setValueProcessData(action.data.oldValue);
    },
    rowAdd: function rowAdd(action) {
      action.component.deleteActual();
    },
    rowDelete: function rowDelete(action) {
      var newRow = this.table.rowManager.addRowActual(action.data.data, action.data.pos, action.data.index);
      if (this.table.options.groupBy && this.table.modExists("groupRows")) {
        this.table.modules.groupRows.updateGroupRows(true);
      }
      this._rebindRow(action.component, newRow);
    },
    rowMove: function rowMove(action) {
      this.table.rowManager.moveRowActual(action.component, this.table.rowManager.rows[action.data.posFrom], !action.data.after);
      this.table.rowManager.redraw();
    }
  };
  History.prototype.redoers = {
    cellEdit: function cellEdit2(action) {
      action.component.setValueProcessData(action.data.newValue);
    },
    rowAdd: function rowAdd2(action) {
      var newRow = this.table.rowManager.addRowActual(action.data.data, action.data.pos, action.data.index);
      if (this.table.options.groupBy && this.table.modExists("groupRows")) {
        this.table.modules.groupRows.updateGroupRows(true);
      }
      this._rebindRow(action.component, newRow);
    },
    rowDelete: function rowDelete2(action) {
      action.component.deleteActual();
    },
    rowMove: function rowMove2(action) {
      this.table.rowManager.moveRowActual(action.component, this.table.rowManager.rows[action.data.posTo], action.data.after);
      this.table.rowManager.redraw();
    }
  };
  History.prototype._rebindRow = function(oldRow, newRow) {
    this.history.forEach(function(action) {
      if (action.component instanceof Row) {
        if (action.component === oldRow) {
          action.component = newRow;
        }
      } else if (action.component instanceof Cell) {
        if (action.component.row === oldRow) {
          var field = action.component.column.getField();
          if (field) {
            action.component = newRow.getCell(field);
          }
        }
      }
    });
  };
  Tabulator.prototype.registerModule("history", History);
  var HtmlTableImport = function HtmlTableImport2(table4) {
    this.table = table4;
    this.fieldIndex = [];
    this.hasIndex = false;
  };
  HtmlTableImport.prototype.parseTable = function() {
    var self2 = this, element = self2.table.element, options = self2.table.options, columns2 = options.columns, headers = element.getElementsByTagName("th"), rows = element.getElementsByTagName("tbody")[0], data = [], newTable;
    self2.hasIndex = false;
    self2.table.options.htmlImporting.call(this.table);
    rows = rows ? rows.getElementsByTagName("tr") : [];
    self2._extractOptions(element, options);
    if (headers.length) {
      self2._extractHeaders(headers, rows);
    } else {
      self2._generateBlankHeaders(headers, rows);
    }
    for (var index = 0; index < rows.length; index++) {
      var row2 = rows[index], cells = row2.getElementsByTagName("td"), item = {};
      if (!self2.hasIndex) {
        item[options.index] = index;
      }
      for (var i2 = 0; i2 < cells.length; i2++) {
        var cell = cells[i2];
        if (typeof this.fieldIndex[i2] !== "undefined") {
          item[this.fieldIndex[i2]] = cell.innerHTML;
        }
      }
      data.push(item);
    }
    var newElement = document.createElement("div");
    var attributes = element.attributes;
    for (var i2 in attributes) {
      if (_typeof(attributes[i2]) == "object") {
        newElement.setAttribute(attributes[i2].name, attributes[i2].value);
      }
    }
    element.parentNode.replaceChild(newElement, element);
    options.data = data;
    self2.table.options.htmlImported.call(this.table);
    this.table.element = newElement;
  };
  HtmlTableImport.prototype._extractOptions = function(element, options, defaultOptions) {
    var attributes = element.attributes;
    var optionsArr = defaultOptions ? Object.assign([], defaultOptions) : Object.keys(options);
    var optionsList = {};
    optionsArr.forEach(function(item) {
      optionsList[item.toLowerCase()] = item;
    });
    for (var index in attributes) {
      var attrib = attributes[index];
      var name;
      if (attrib && (typeof attrib === "undefined" ? "undefined" : _typeof(attrib)) == "object" && attrib.name && attrib.name.indexOf("tabulator-") === 0) {
        name = attrib.name.replace("tabulator-", "");
        if (typeof optionsList[name] !== "undefined") {
          options[optionsList[name]] = this._attribValue(attrib.value);
        }
      }
    }
  };
  HtmlTableImport.prototype._attribValue = function(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return value;
  };
  HtmlTableImport.prototype._findCol = function(title) {
    var match = this.table.options.columns.find(function(column2) {
      return column2.title === title;
    });
    return match || false;
  };
  HtmlTableImport.prototype._extractHeaders = function(headers, rows) {
    for (var index = 0; index < headers.length; index++) {
      var header = headers[index], exists2 = false, col = this._findCol(header.textContent), width, attributes;
      if (col) {
        exists2 = true;
      } else {
        col = { title: header.textContent.trim() };
      }
      if (!col.field) {
        col.field = header.textContent.trim().toLowerCase().replace(" ", "_");
      }
      width = header.getAttribute("width");
      if (width && !col.width) {
        col.width = width;
      }
      attributes = header.attributes;
      this._extractOptions(header, col, Column.prototype.defaultOptionList);
      this.fieldIndex[index] = col.field;
      if (col.field == this.table.options.index) {
        this.hasIndex = true;
      }
      if (!exists2) {
        this.table.options.columns.push(col);
      }
    }
  };
  HtmlTableImport.prototype._generateBlankHeaders = function(headers, rows) {
    for (var index = 0; index < headers.length; index++) {
      var header = headers[index], col = { title: "", field: "col" + index };
      this.fieldIndex[index] = col.field;
      var width = header.getAttribute("width");
      if (width) {
        col.width = width;
      }
      this.table.options.columns.push(col);
    }
  };
  Tabulator.prototype.registerModule("htmlTableImport", HtmlTableImport);
  var Keybindings = function Keybindings2(table4) {
    this.table = table4;
    this.watchKeys = null;
    this.pressedKeys = null;
    this.keyupBinding = false;
    this.keydownBinding = false;
  };
  Keybindings.prototype.initialize = function() {
    var bindings = this.table.options.keybindings, mergedBindings = {};
    this.watchKeys = {};
    this.pressedKeys = [];
    if (bindings !== false) {
      for (var key in this.bindings) {
        mergedBindings[key] = this.bindings[key];
      }
      if (Object.keys(bindings).length) {
        for (var _key in bindings) {
          mergedBindings[_key] = bindings[_key];
        }
      }
      this.mapBindings(mergedBindings);
      this.bindEvents();
    }
  };
  Keybindings.prototype.mapBindings = function(bindings) {
    var _this70 = this;
    var self2 = this;
    var _loop2 = function _loop22(key2) {
      if (_this70.actions[key2]) {
        if (bindings[key2]) {
          if (_typeof(bindings[key2]) !== "object") {
            bindings[key2] = [bindings[key2]];
          }
          bindings[key2].forEach(function(binding) {
            self2.mapBinding(key2, binding);
          });
        }
      } else {
        console.warn("Key Binding Error - no such action:", key2);
      }
    };
    for (var key in bindings) {
      _loop2(key);
    }
  };
  Keybindings.prototype.mapBinding = function(action, symbolsList) {
    var self2 = this;
    var binding = {
      action: this.actions[action],
      keys: [],
      ctrl: false,
      shift: false,
      meta: false
    };
    var symbols = symbolsList.toString().toLowerCase().split(" ").join("").split("+");
    symbols.forEach(function(symbol) {
      switch (symbol) {
        case "ctrl":
          binding.ctrl = true;
          break;
        case "shift":
          binding.shift = true;
          break;
        case "meta":
          binding.meta = true;
          break;
        default:
          symbol = parseInt(symbol);
          binding.keys.push(symbol);
          if (!self2.watchKeys[symbol]) {
            self2.watchKeys[symbol] = [];
          }
          self2.watchKeys[symbol].push(binding);
      }
    });
  };
  Keybindings.prototype.bindEvents = function() {
    var self2 = this;
    this.keyupBinding = function(e2) {
      var code = e2.keyCode;
      var bindings = self2.watchKeys[code];
      if (bindings) {
        self2.pressedKeys.push(code);
        bindings.forEach(function(binding) {
          self2.checkBinding(e2, binding);
        });
      }
    };
    this.keydownBinding = function(e2) {
      var code = e2.keyCode;
      var bindings = self2.watchKeys[code];
      if (bindings) {
        var index = self2.pressedKeys.indexOf(code);
        if (index > -1) {
          self2.pressedKeys.splice(index, 1);
        }
      }
    };
    this.table.element.addEventListener("keydown", this.keyupBinding);
    this.table.element.addEventListener("keyup", this.keydownBinding);
  };
  Keybindings.prototype.clearBindings = function() {
    if (this.keyupBinding) {
      this.table.element.removeEventListener("keydown", this.keyupBinding);
    }
    if (this.keydownBinding) {
      this.table.element.removeEventListener("keyup", this.keydownBinding);
    }
  };
  Keybindings.prototype.checkBinding = function(e2, binding) {
    var self2 = this, match = true;
    if (e2.ctrlKey == binding.ctrl && e2.shiftKey == binding.shift && e2.metaKey == binding.meta) {
      binding.keys.forEach(function(key) {
        var index = self2.pressedKeys.indexOf(key);
        if (index == -1) {
          match = false;
        }
      });
      if (match) {
        binding.action.call(self2, e2);
      }
      return true;
    }
    return false;
  };
  Keybindings.prototype.bindings = {
    navPrev: "shift + 9",
    navNext: 9,
    navUp: 38,
    navDown: 40,
    scrollPageUp: 33,
    scrollPageDown: 34,
    scrollToStart: 36,
    scrollToEnd: 35,
    undo: "ctrl + 90",
    redo: "ctrl + 89",
    copyToClipboard: "ctrl + 67"
  };
  Keybindings.prototype.actions = {
    keyBlock: function keyBlock(e2) {
      e2.stopPropagation();
      e2.preventDefault();
    },
    scrollPageUp: function scrollPageUp(e2) {
      var rowManager = this.table.rowManager, newPos = rowManager.scrollTop - rowManager.height, scrollMax = rowManager.element.scrollHeight;
      e2.preventDefault();
      if (rowManager.displayRowsCount) {
        if (newPos >= 0) {
          rowManager.element.scrollTop = newPos;
        } else {
          rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
        }
      }
      this.table.element.focus();
    },
    scrollPageDown: function scrollPageDown(e2) {
      var rowManager = this.table.rowManager, newPos = rowManager.scrollTop + rowManager.height, scrollMax = rowManager.element.scrollHeight;
      e2.preventDefault();
      if (rowManager.displayRowsCount) {
        if (newPos <= scrollMax) {
          rowManager.element.scrollTop = newPos;
        } else {
          rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
        }
      }
      this.table.element.focus();
    },
    scrollToStart: function scrollToStart(e2) {
      var rowManager = this.table.rowManager;
      e2.preventDefault();
      if (rowManager.displayRowsCount) {
        rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
      }
      this.table.element.focus();
    },
    scrollToEnd: function scrollToEnd(e2) {
      var rowManager = this.table.rowManager;
      e2.preventDefault();
      if (rowManager.displayRowsCount) {
        rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
      }
      this.table.element.focus();
    },
    navPrev: function navPrev(e2) {
      var cell = false;
      if (this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (cell) {
          e2.preventDefault();
          cell.nav().prev();
        }
      }
    },
    navNext: function navNext(e2) {
      var cell = false;
      var newRow = this.table.options.tabEndNewRow;
      var nav;
      if (this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (cell) {
          e2.preventDefault();
          nav = cell.nav();
          if (!nav.next()) {
            if (newRow) {
              cell.getElement().firstChild.blur();
              if (newRow === true) {
                newRow = this.table.addRow({});
              } else {
                if (typeof newRow == "function") {
                  newRow = this.table.addRow(newRow(cell.row.getComponent()));
                } else {
                  newRow = this.table.addRow(Object.assign({}, newRow));
                }
              }
              newRow.then(function() {
                setTimeout(function() {
                  nav.next();
                });
              });
            }
          }
        }
      }
    },
    navLeft: function navLeft(e2) {
      var cell = false;
      if (this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (cell) {
          e2.preventDefault();
          cell.nav().left();
        }
      }
    },
    navRight: function navRight(e2) {
      var cell = false;
      if (this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (cell) {
          e2.preventDefault();
          cell.nav().right();
        }
      }
    },
    navUp: function navUp(e2) {
      var cell = false;
      if (this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (cell) {
          e2.preventDefault();
          cell.nav().up();
        }
      }
    },
    navDown: function navDown(e2) {
      var cell = false;
      if (this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (cell) {
          e2.preventDefault();
          cell.nav().down();
        }
      }
    },
    undo: function undo(e2) {
      var cell = false;
      if (this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (!cell) {
          e2.preventDefault();
          this.table.modules.history.undo();
        }
      }
    },
    redo: function redo(e2) {
      var cell = false;
      if (this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")) {
        cell = this.table.modules.edit.currentCell;
        if (!cell) {
          e2.preventDefault();
          this.table.modules.history.redo();
        }
      }
    },
    copyToClipboard: function copyToClipboard(e2) {
      if (!this.table.modules.edit.currentCell) {
        if (this.table.modExists("clipboard", true)) {
          this.table.modules.clipboard.copy(false, true);
        }
      }
    }
  };
  Tabulator.prototype.registerModule("keybindings", Keybindings);
  var Menu = function Menu2(table4) {
    this.table = table4;
    this.menuElements = [];
    this.blurEvent = this.hideMenu.bind(this);
    this.escEvent = this.escMenu.bind(this);
    this.nestedMenuBlock = false;
    this.positionReversedX = false;
  };
  Menu.prototype.initializeColumnHeader = function(column2) {
    var _this71 = this;
    var headerMenuEl;
    if (column2.definition.headerContextMenu) {
      column2.getElement().addEventListener("contextmenu", this.LoadMenuEvent.bind(this, column2, column2.definition.headerContextMenu));
      this.tapHold(column2, column2.definition.headerContextMenu);
    }
    if (column2.definition.headerMenu) {
      headerMenuEl = document.createElement("span");
      headerMenuEl.classList.add("tabulator-header-menu-button");
      headerMenuEl.innerHTML = "&vellip;";
      headerMenuEl.addEventListener("click", function(e2) {
        e2.stopPropagation();
        e2.preventDefault();
        _this71.LoadMenuEvent(column2, column2.definition.headerMenu, e2);
      });
      column2.titleElement.insertBefore(headerMenuEl, column2.titleElement.firstChild);
    }
  };
  Menu.prototype.LoadMenuEvent = function(component2, menu, e2) {
    menu = typeof menu == "function" ? menu.call(this.table, component2.getComponent(), e2) : menu;
    this.loadMenu(e2, component2, menu);
  };
  Menu.prototype.tapHold = function(component2, menu) {
    var _this72 = this;
    var element = component2.getElement(), tapHold = null, loaded = false;
    element.addEventListener("touchstart", function(e2) {
      clearTimeout(tapHold);
      loaded = false;
      tapHold = setTimeout(function() {
        clearTimeout(tapHold);
        tapHold = null;
        loaded = true;
        _this72.LoadMenuEvent(component2, menu, e2);
      }, 1e3);
    }, { passive: true });
    element.addEventListener("touchend", function(e2) {
      clearTimeout(tapHold);
      tapHold = null;
      if (loaded) {
        e2.preventDefault();
      }
    });
  };
  Menu.prototype.initializeCell = function(cell) {
    if (cell.column.definition.contextMenu) {
      cell.getElement(true).addEventListener("contextmenu", this.LoadMenuEvent.bind(this, cell, cell.column.definition.contextMenu));
      this.tapHold(cell, cell.column.definition.contextMenu);
    }
    if (cell.column.definition.clickMenu) {
      cell.getElement(true).addEventListener("click", this.LoadMenuEvent.bind(this, cell, cell.column.definition.clickMenu));
    }
  };
  Menu.prototype.initializeRow = function(row2) {
    if (this.table.options.rowContextMenu) {
      row2.getElement().addEventListener("contextmenu", this.LoadMenuEvent.bind(this, row2, this.table.options.rowContextMenu));
      this.tapHold(row2, this.table.options.rowContextMenu);
    }
    if (this.table.options.rowClickMenu) {
      row2.getElement().addEventListener("click", this.LoadMenuEvent.bind(this, row2, this.table.options.rowClickMenu));
    }
  };
  Menu.prototype.initializeGroup = function(group) {
    if (this.table.options.groupContextMenu) {
      group.getElement().addEventListener("contextmenu", this.LoadMenuEvent.bind(this, group, this.table.options.groupContextMenu));
      this.tapHold(group, this.table.options.groupContextMenu);
    }
    if (this.table.options.groupClickMenu) {
      group.getElement().addEventListener("click", this.LoadMenuEvent.bind(this, group, this.table.options.groupClickMenu));
    }
  };
  Menu.prototype.loadMenu = function(e2, component2, menu, parentEl) {
    var _this73 = this;
    var touch = !(e2 instanceof MouseEvent);
    var menuEl = document.createElement("div");
    menuEl.classList.add("tabulator-menu");
    if (!touch) {
      e2.preventDefault();
    }
    if (!menu || !menu.length) {
      return;
    }
    if (!parentEl) {
      if (this.nestedMenuBlock) {
        if (this.isOpen()) {
          return;
        }
      } else {
        this.nestedMenuBlock = setTimeout(function() {
          _this73.nestedMenuBlock = false;
        }, 100);
      }
      this.hideMenu();
      this.menuElements = [];
    }
    menu.forEach(function(item) {
      var itemEl = document.createElement("div"), label = item.label, disabled = item.disabled;
      if (item.separator) {
        itemEl.classList.add("tabulator-menu-separator");
      } else {
        itemEl.classList.add("tabulator-menu-item");
        if (typeof label == "function") {
          label = label.call(_this73.table, component2.getComponent());
        }
        if (label instanceof Node) {
          itemEl.appendChild(label);
        } else {
          itemEl.innerHTML = label;
        }
        if (typeof disabled == "function") {
          disabled = disabled.call(_this73.table, component2.getComponent());
        }
        if (disabled) {
          itemEl.classList.add("tabulator-menu-item-disabled");
          itemEl.addEventListener("click", function(e3) {
            e3.stopPropagation();
          });
        } else {
          if (item.menu && item.menu.length) {
            itemEl.addEventListener("click", function(e3) {
              e3.stopPropagation();
              _this73.hideOldSubMenus(menuEl);
              _this73.loadMenu(e3, component2, item.menu, itemEl);
            });
          } else {
            if (item.action) {
              itemEl.addEventListener("click", function(e3) {
                item.action(e3, component2.getComponent());
              });
            }
          }
        }
        if (item.menu && item.menu.length) {
          itemEl.classList.add("tabulator-menu-item-submenu");
        }
      }
      menuEl.appendChild(itemEl);
    });
    menuEl.addEventListener("click", function(e3) {
      _this73.hideMenu();
    });
    this.menuElements.push(menuEl);
    this.positionMenu(menuEl, parentEl, touch, e2);
  };
  Menu.prototype.hideOldSubMenus = function(menuEl) {
    var index = this.menuElements.indexOf(menuEl);
    if (index > -1) {
      for (var _i13 = this.menuElements.length - 1; _i13 > index; _i13--) {
        var el = this.menuElements[_i13];
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        this.menuElements.pop();
      }
    }
  };
  Menu.prototype.positionMenu = function(element, parentEl, touch, e2) {
    var _this74 = this;
    var docHeight = Math.max(document.body.offsetHeight, window.innerHeight), x, y, parentOffset;
    if (!parentEl) {
      x = touch ? e2.touches[0].pageX : e2.pageX;
      y = touch ? e2.touches[0].pageY : e2.pageY;
      this.positionReversedX = false;
    } else {
      parentOffset = Tabulator.prototype.helpers.elOffset(parentEl);
      x = parentOffset.left + parentEl.offsetWidth;
      y = parentOffset.top - 1;
    }
    element.style.top = y + "px";
    element.style.left = x + "px";
    setTimeout(function() {
      _this74.table.rowManager.element.addEventListener("scroll", _this74.blurEvent);
      document.body.addEventListener("click", _this74.blurEvent);
      document.body.addEventListener("contextmenu", _this74.blurEvent);
      window.addEventListener("resize", _this74.blurEvent);
      document.body.addEventListener("keydown", _this74.escEvent);
    }, 100);
    document.body.appendChild(element);
    if (y + element.offsetHeight >= docHeight) {
      element.style.top = "";
      if (parentEl) {
        element.style.bottom = docHeight - parentOffset.top - parentEl.offsetHeight - 1 + "px";
      } else {
        element.style.bottom = docHeight - y + "px";
      }
    }
    if (x + element.offsetWidth >= document.body.offsetWidth || this.positionReversedX) {
      element.style.left = "";
      if (parentEl) {
        element.style.right = document.documentElement.offsetWidth - parentOffset.left + "px";
      } else {
        element.style.right = document.documentElement.offsetWidth - x + "px";
      }
      this.positionReversedX = true;
    }
  };
  Menu.prototype.isOpen = function() {
    return !!this.menuElements.length;
  };
  Menu.prototype.escMenu = function(e2) {
    if (e2.keyCode == 27) {
      this.hideMenu();
    }
  };
  Menu.prototype.hideMenu = function() {
    this.menuElements.forEach(function(menuEl) {
      if (menuEl.parentNode) {
        menuEl.parentNode.removeChild(menuEl);
      }
    });
    document.body.removeEventListener("keydown", this.escEvent);
    document.body.removeEventListener("click", this.blurEvent);
    document.body.removeEventListener("contextmenu", this.blurEvent);
    window.removeEventListener("resize", this.blurEvent);
    this.table.rowManager.element.removeEventListener("scroll", this.blurEvent);
  };
  Menu.prototype.menus = {};
  Tabulator.prototype.registerModule("menu", Menu);
  var MoveColumns = function MoveColumns2(table4) {
    this.table = table4;
    this.placeholderElement = this.createPlaceholderElement();
    this.hoverElement = false;
    this.checkTimeout = false;
    this.checkPeriod = 250;
    this.moving = false;
    this.toCol = false;
    this.toColAfter = false;
    this.startX = 0;
    this.autoScrollMargin = 40;
    this.autoScrollStep = 5;
    this.autoScrollTimeout = false;
    this.touchMove = false;
    this.moveHover = this.moveHover.bind(this);
    this.endMove = this.endMove.bind(this);
  };
  MoveColumns.prototype.createPlaceholderElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-col");
    el.classList.add("tabulator-col-placeholder");
    return el;
  };
  MoveColumns.prototype.initializeColumn = function(column2) {
    var self2 = this, config = {}, colEl;
    if (!column2.modules.frozen) {
      colEl = column2.getElement();
      config.mousemove = function(e2) {
        if (column2.parent === self2.moving.parent) {
          if ((self2.touchMove ? e2.touches[0].pageX : e2.pageX) - Tabulator.prototype.helpers.elOffset(colEl).left + self2.table.columnManager.element.scrollLeft > column2.getWidth() / 2) {
            if (self2.toCol !== column2 || !self2.toColAfter) {
              colEl.parentNode.insertBefore(self2.placeholderElement, colEl.nextSibling);
              self2.moveColumn(column2, true);
            }
          } else {
            if (self2.toCol !== column2 || self2.toColAfter) {
              colEl.parentNode.insertBefore(self2.placeholderElement, colEl);
              self2.moveColumn(column2, false);
            }
          }
        }
      }.bind(self2);
      colEl.addEventListener("mousedown", function(e2) {
        self2.touchMove = false;
        if (e2.which === 1) {
          self2.checkTimeout = setTimeout(function() {
            self2.startMove(e2, column2);
          }, self2.checkPeriod);
        }
      });
      colEl.addEventListener("mouseup", function(e2) {
        if (e2.which === 1) {
          if (self2.checkTimeout) {
            clearTimeout(self2.checkTimeout);
          }
        }
      });
      self2.bindTouchEvents(column2);
    }
    column2.modules.moveColumn = config;
  };
  MoveColumns.prototype.bindTouchEvents = function(column2) {
    var self2 = this, colEl = column2.getElement(), startXMove = false, dir = false, currentCol, nextCol, prevCol, nextColWidth, prevColWidth, nextColWidthLast, prevColWidthLast;
    colEl.addEventListener("touchstart", function(e2) {
      self2.checkTimeout = setTimeout(function() {
        self2.touchMove = true;
        currentCol = column2;
        nextCol = column2.nextColumn();
        nextColWidth = nextCol ? nextCol.getWidth() / 2 : 0;
        prevCol = column2.prevColumn();
        prevColWidth = prevCol ? prevCol.getWidth() / 2 : 0;
        nextColWidthLast = 0;
        prevColWidthLast = 0;
        startXMove = false;
        self2.startMove(e2, column2);
      }, self2.checkPeriod);
    }, { passive: true });
    colEl.addEventListener("touchmove", function(e2) {
      var halfCol, diff, moveToCol;
      if (self2.moving) {
        self2.moveHover(e2);
        if (!startXMove) {
          startXMove = e2.touches[0].pageX;
        }
        diff = e2.touches[0].pageX - startXMove;
        if (diff > 0) {
          if (nextCol && diff - nextColWidthLast > nextColWidth) {
            moveToCol = nextCol;
            if (moveToCol !== column2) {
              startXMove = e2.touches[0].pageX;
              moveToCol.getElement().parentNode.insertBefore(self2.placeholderElement, moveToCol.getElement().nextSibling);
              self2.moveColumn(moveToCol, true);
            }
          }
        } else {
          if (prevCol && -diff - prevColWidthLast > prevColWidth) {
            moveToCol = prevCol;
            if (moveToCol !== column2) {
              startXMove = e2.touches[0].pageX;
              moveToCol.getElement().parentNode.insertBefore(self2.placeholderElement, moveToCol.getElement());
              self2.moveColumn(moveToCol, false);
            }
          }
        }
        if (moveToCol) {
          currentCol = moveToCol;
          nextCol = moveToCol.nextColumn();
          nextColWidthLast = nextColWidth;
          nextColWidth = nextCol ? nextCol.getWidth() / 2 : 0;
          prevCol = moveToCol.prevColumn();
          prevColWidthLast = prevColWidth;
          prevColWidth = prevCol ? prevCol.getWidth() / 2 : 0;
        }
      }
    }, { passive: true });
    colEl.addEventListener("touchend", function(e2) {
      if (self2.checkTimeout) {
        clearTimeout(self2.checkTimeout);
      }
      if (self2.moving) {
        self2.endMove(e2);
      }
    });
  };
  MoveColumns.prototype.startMove = function(e2, column2) {
    var element = column2.getElement();
    this.moving = column2;
    this.startX = (this.touchMove ? e2.touches[0].pageX : e2.pageX) - Tabulator.prototype.helpers.elOffset(element).left;
    this.table.element.classList.add("tabulator-block-select");
    this.placeholderElement.style.width = column2.getWidth() + "px";
    this.placeholderElement.style.height = column2.getHeight() + "px";
    element.parentNode.insertBefore(this.placeholderElement, element);
    element.parentNode.removeChild(element);
    this.hoverElement = element.cloneNode(true);
    this.hoverElement.classList.add("tabulator-moving");
    this.table.columnManager.getElement().appendChild(this.hoverElement);
    this.hoverElement.style.left = "0";
    this.hoverElement.style.bottom = "0";
    if (!this.touchMove) {
      this._bindMouseMove();
      document.body.addEventListener("mousemove", this.moveHover);
      document.body.addEventListener("mouseup", this.endMove);
    }
    this.moveHover(e2);
  };
  MoveColumns.prototype._bindMouseMove = function() {
    this.table.columnManager.columnsByIndex.forEach(function(column2) {
      if (column2.modules.moveColumn.mousemove) {
        column2.getElement().addEventListener("mousemove", column2.modules.moveColumn.mousemove);
      }
    });
  };
  MoveColumns.prototype._unbindMouseMove = function() {
    this.table.columnManager.columnsByIndex.forEach(function(column2) {
      if (column2.modules.moveColumn.mousemove) {
        column2.getElement().removeEventListener("mousemove", column2.modules.moveColumn.mousemove);
      }
    });
  };
  MoveColumns.prototype.moveColumn = function(column2, after) {
    var movingCells = this.moving.getCells();
    this.toCol = column2;
    this.toColAfter = after;
    if (after) {
      column2.getCells().forEach(function(cell, i2) {
        var cellEl = cell.getElement(true);
        cellEl.parentNode.insertBefore(movingCells[i2].getElement(), cellEl.nextSibling);
      });
    } else {
      column2.getCells().forEach(function(cell, i2) {
        var cellEl = cell.getElement(true);
        cellEl.parentNode.insertBefore(movingCells[i2].getElement(), cellEl);
      });
    }
  };
  MoveColumns.prototype.endMove = function(e2) {
    if (e2.which === 1 || this.touchMove) {
      this._unbindMouseMove();
      this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling);
      this.placeholderElement.parentNode.removeChild(this.placeholderElement);
      this.hoverElement.parentNode.removeChild(this.hoverElement);
      this.table.element.classList.remove("tabulator-block-select");
      if (this.toCol) {
        this.table.columnManager.moveColumnActual(this.moving, this.toCol, this.toColAfter);
      }
      this.moving = false;
      this.toCol = false;
      this.toColAfter = false;
      if (!this.touchMove) {
        document.body.removeEventListener("mousemove", this.moveHover);
        document.body.removeEventListener("mouseup", this.endMove);
      }
    }
  };
  MoveColumns.prototype.moveHover = function(e2) {
    var self2 = this, columnHolder = self2.table.columnManager.getElement(), scrollLeft = columnHolder.scrollLeft, xPos = (self2.touchMove ? e2.touches[0].pageX : e2.pageX) - Tabulator.prototype.helpers.elOffset(columnHolder).left + scrollLeft, scrollPos;
    self2.hoverElement.style.left = xPos - self2.startX + "px";
    if (xPos - scrollLeft < self2.autoScrollMargin) {
      if (!self2.autoScrollTimeout) {
        self2.autoScrollTimeout = setTimeout(function() {
          scrollPos = Math.max(0, scrollLeft - 5);
          self2.table.rowManager.getElement().scrollLeft = scrollPos;
          self2.autoScrollTimeout = false;
        }, 1);
      }
    }
    if (scrollLeft + columnHolder.clientWidth - xPos < self2.autoScrollMargin) {
      if (!self2.autoScrollTimeout) {
        self2.autoScrollTimeout = setTimeout(function() {
          scrollPos = Math.min(columnHolder.clientWidth, scrollLeft + 5);
          self2.table.rowManager.getElement().scrollLeft = scrollPos;
          self2.autoScrollTimeout = false;
        }, 1);
      }
    }
  };
  Tabulator.prototype.registerModule("moveColumn", MoveColumns);
  var MoveRows = function MoveRows2(table4) {
    this.table = table4;
    this.placeholderElement = this.createPlaceholderElement();
    this.hoverElement = false;
    this.checkTimeout = false;
    this.checkPeriod = 150;
    this.moving = false;
    this.toRow = false;
    this.toRowAfter = false;
    this.hasHandle = false;
    this.startY = 0;
    this.startX = 0;
    this.moveHover = this.moveHover.bind(this);
    this.endMove = this.endMove.bind(this);
    this.tableRowDropEvent = false;
    this.touchMove = false;
    this.connection = false;
    this.connectionSelectorsTables = false;
    this.connectionSelectorsElements = false;
    this.connectionElements = [];
    this.connections = [];
    this.connectedTable = false;
    this.connectedRow = false;
  };
  MoveRows.prototype.createPlaceholderElement = function() {
    var el = document.createElement("div");
    el.classList.add("tabulator-row");
    el.classList.add("tabulator-row-placeholder");
    return el;
  };
  MoveRows.prototype.initialize = function(handle2) {
    this.connectionSelectorsTables = this.table.options.movableRowsConnectedTables;
    this.connectionSelectorsElements = this.table.options.movableRowsConnectedElements;
    this.connection = this.connectionSelectorsTables || this.connectionSelectorsElements;
  };
  MoveRows.prototype.setHandle = function(handle2) {
    this.hasHandle = handle2;
  };
  MoveRows.prototype.initializeGroupHeader = function(group) {
    var self2 = this, config = {}, rowEl;
    config.mouseup = function(e2) {
      self2.tableRowDrop(e2, row);
    }.bind(self2);
    config.mousemove = function(e2) {
      if (e2.pageY - Tabulator.prototype.helpers.elOffset(group.element).top + self2.table.rowManager.element.scrollTop > group.getHeight() / 2) {
        if (self2.toRow !== group || !self2.toRowAfter) {
          var rowEl2 = group.getElement();
          rowEl2.parentNode.insertBefore(self2.placeholderElement, rowEl2.nextSibling);
          self2.moveRow(group, true);
        }
      } else {
        if (self2.toRow !== group || self2.toRowAfter) {
          var rowEl2 = group.getElement();
          if (rowEl2.previousSibling) {
            rowEl2.parentNode.insertBefore(self2.placeholderElement, rowEl2);
            self2.moveRow(group, false);
          }
        }
      }
    }.bind(self2);
    group.modules.moveRow = config;
  };
  MoveRows.prototype.initializeRow = function(row2) {
    var self2 = this, config = {}, rowEl;
    config.mouseup = function(e2) {
      self2.tableRowDrop(e2, row2);
    }.bind(self2);
    config.mousemove = function(e2) {
      var rowEl2 = row2.getElement();
      if (e2.pageY - Tabulator.prototype.helpers.elOffset(rowEl2).top + self2.table.rowManager.element.scrollTop > row2.getHeight() / 2) {
        if (self2.toRow !== row2 || !self2.toRowAfter) {
          rowEl2.parentNode.insertBefore(self2.placeholderElement, rowEl2.nextSibling);
          self2.moveRow(row2, true);
        }
      } else {
        if (self2.toRow !== row2 || self2.toRowAfter) {
          rowEl2.parentNode.insertBefore(self2.placeholderElement, rowEl2);
          self2.moveRow(row2, false);
        }
      }
    }.bind(self2);
    if (!this.hasHandle) {
      rowEl = row2.getElement();
      rowEl.addEventListener("mousedown", function(e2) {
        if (e2.which === 1) {
          self2.checkTimeout = setTimeout(function() {
            self2.startMove(e2, row2);
          }, self2.checkPeriod);
        }
      });
      rowEl.addEventListener("mouseup", function(e2) {
        if (e2.which === 1) {
          if (self2.checkTimeout) {
            clearTimeout(self2.checkTimeout);
          }
        }
      });
      this.bindTouchEvents(row2, row2.getElement());
    }
    row2.modules.moveRow = config;
  };
  MoveRows.prototype.initializeCell = function(cell) {
    var self2 = this, cellEl = cell.getElement(true);
    cellEl.addEventListener("mousedown", function(e2) {
      if (e2.which === 1) {
        self2.checkTimeout = setTimeout(function() {
          self2.startMove(e2, cell.row);
        }, self2.checkPeriod);
      }
    });
    cellEl.addEventListener("mouseup", function(e2) {
      if (e2.which === 1) {
        if (self2.checkTimeout) {
          clearTimeout(self2.checkTimeout);
        }
      }
    });
    this.bindTouchEvents(cell.row, cellEl);
  };
  MoveRows.prototype.bindTouchEvents = function(row2, element) {
    var self2 = this, startYMove = false, dir = false, currentRow, nextRow, prevRow, nextRowHeight, prevRowHeight, nextRowHeightLast, prevRowHeightLast;
    element.addEventListener("touchstart", function(e2) {
      self2.checkTimeout = setTimeout(function() {
        self2.touchMove = true;
        currentRow = row2;
        nextRow = row2.nextRow();
        nextRowHeight = nextRow ? nextRow.getHeight() / 2 : 0;
        prevRow = row2.prevRow();
        prevRowHeight = prevRow ? prevRow.getHeight() / 2 : 0;
        nextRowHeightLast = 0;
        prevRowHeightLast = 0;
        startYMove = false;
        self2.startMove(e2, row2);
      }, self2.checkPeriod);
    }, { passive: true });
    this.moving, this.toRow, this.toRowAfter;
    element.addEventListener("touchmove", function(e2) {
      var halfCol, diff, moveToRow;
      if (self2.moving) {
        e2.preventDefault();
        self2.moveHover(e2);
        if (!startYMove) {
          startYMove = e2.touches[0].pageY;
        }
        diff = e2.touches[0].pageY - startYMove;
        if (diff > 0) {
          if (nextRow && diff - nextRowHeightLast > nextRowHeight) {
            moveToRow = nextRow;
            if (moveToRow !== row2) {
              startYMove = e2.touches[0].pageY;
              moveToRow.getElement().parentNode.insertBefore(self2.placeholderElement, moveToRow.getElement().nextSibling);
              self2.moveRow(moveToRow, true);
            }
          }
        } else {
          if (prevRow && -diff - prevRowHeightLast > prevRowHeight) {
            moveToRow = prevRow;
            if (moveToRow !== row2) {
              startYMove = e2.touches[0].pageY;
              moveToRow.getElement().parentNode.insertBefore(self2.placeholderElement, moveToRow.getElement());
              self2.moveRow(moveToRow, false);
            }
          }
        }
        if (moveToRow) {
          currentRow = moveToRow;
          nextRow = moveToRow.nextRow();
          nextRowHeightLast = nextRowHeight;
          nextRowHeight = nextRow ? nextRow.getHeight() / 2 : 0;
          prevRow = moveToRow.prevRow();
          prevRowHeightLast = prevRowHeight;
          prevRowHeight = prevRow ? prevRow.getHeight() / 2 : 0;
        }
      }
    });
    element.addEventListener("touchend", function(e2) {
      if (self2.checkTimeout) {
        clearTimeout(self2.checkTimeout);
      }
      if (self2.moving) {
        self2.endMove(e2);
        self2.touchMove = false;
      }
    });
  };
  MoveRows.prototype._bindMouseMove = function() {
    var self2 = this;
    self2.table.rowManager.getDisplayRows().forEach(function(row2) {
      if ((row2.type === "row" || row2.type === "group") && row2.modules.moveRow.mousemove) {
        row2.getElement().addEventListener("mousemove", row2.modules.moveRow.mousemove);
      }
    });
  };
  MoveRows.prototype._unbindMouseMove = function() {
    var self2 = this;
    self2.table.rowManager.getDisplayRows().forEach(function(row2) {
      if ((row2.type === "row" || row2.type === "group") && row2.modules.moveRow.mousemove) {
        row2.getElement().removeEventListener("mousemove", row2.modules.moveRow.mousemove);
      }
    });
  };
  MoveRows.prototype.startMove = function(e2, row2) {
    var element = row2.getElement();
    this.setStartPosition(e2, row2);
    this.moving = row2;
    this.table.element.classList.add("tabulator-block-select");
    this.placeholderElement.style.width = row2.getWidth() + "px";
    this.placeholderElement.style.height = row2.getHeight() + "px";
    if (!this.connection) {
      element.parentNode.insertBefore(this.placeholderElement, element);
      element.parentNode.removeChild(element);
    } else {
      this.table.element.classList.add("tabulator-movingrow-sending");
      this.connectToTables(row2);
    }
    this.hoverElement = element.cloneNode(true);
    this.hoverElement.classList.add("tabulator-moving");
    if (this.connection) {
      document.body.appendChild(this.hoverElement);
      this.hoverElement.style.left = "0";
      this.hoverElement.style.top = "0";
      this.hoverElement.style.width = this.table.element.clientWidth + "px";
      this.hoverElement.style.whiteSpace = "nowrap";
      this.hoverElement.style.overflow = "hidden";
      this.hoverElement.style.pointerEvents = "none";
    } else {
      this.table.rowManager.getTableElement().appendChild(this.hoverElement);
      this.hoverElement.style.left = "0";
      this.hoverElement.style.top = "0";
      this._bindMouseMove();
    }
    document.body.addEventListener("mousemove", this.moveHover);
    document.body.addEventListener("mouseup", this.endMove);
    this.moveHover(e2);
  };
  MoveRows.prototype.setStartPosition = function(e2, row2) {
    var pageX = this.touchMove ? e2.touches[0].pageX : e2.pageX, pageY = this.touchMove ? e2.touches[0].pageY : e2.pageY, element, position;
    element = row2.getElement();
    if (this.connection) {
      position = element.getBoundingClientRect();
      this.startX = position.left - pageX + window.pageXOffset;
      this.startY = position.top - pageY + window.pageYOffset;
    } else {
      this.startY = pageY - element.getBoundingClientRect().top;
    }
  };
  MoveRows.prototype.endMove = function(e2) {
    if (!e2 || e2.which === 1 || this.touchMove) {
      this._unbindMouseMove();
      if (!this.connection) {
        this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling);
        this.placeholderElement.parentNode.removeChild(this.placeholderElement);
      }
      this.hoverElement.parentNode.removeChild(this.hoverElement);
      this.table.element.classList.remove("tabulator-block-select");
      if (this.toRow) {
        this.table.rowManager.moveRow(this.moving, this.toRow, this.toRowAfter);
      }
      this.moving = false;
      this.toRow = false;
      this.toRowAfter = false;
      document.body.removeEventListener("mousemove", this.moveHover);
      document.body.removeEventListener("mouseup", this.endMove);
      if (this.connection) {
        this.table.element.classList.remove("tabulator-movingrow-sending");
        this.disconnectFromTables();
      }
    }
  };
  MoveRows.prototype.moveRow = function(row2, after) {
    this.toRow = row2;
    this.toRowAfter = after;
  };
  MoveRows.prototype.moveHover = function(e2) {
    if (this.connection) {
      this.moveHoverConnections.call(this, e2);
    } else {
      this.moveHoverTable.call(this, e2);
    }
  };
  MoveRows.prototype.moveHoverTable = function(e2) {
    var rowHolder = this.table.rowManager.getElement(), scrollTop = rowHolder.scrollTop, yPos = (this.touchMove ? e2.touches[0].pageY : e2.pageY) - rowHolder.getBoundingClientRect().top + scrollTop, scrollPos;
    this.hoverElement.style.top = yPos - this.startY + "px";
  };
  MoveRows.prototype.moveHoverConnections = function(e2) {
    this.hoverElement.style.left = this.startX + (this.touchMove ? e2.touches[0].pageX : e2.pageX) + "px";
    this.hoverElement.style.top = this.startY + (this.touchMove ? e2.touches[0].pageY : e2.pageY) + "px";
  };
  MoveRows.prototype.elementRowDrop = function(e2, element, row2) {
    if (this.table.options.movableRowsElementDrop) {
      this.table.options.movableRowsElementDrop(e2, element, row2 ? row2.getComponent() : false);
    }
  };
  MoveRows.prototype.connectToTables = function(row2) {
    var _this75 = this;
    var connectionTables;
    if (this.connectionSelectorsTables) {
      connectionTables = this.table.modules.comms.getConnections(this.connectionSelectorsTables);
      this.table.options.movableRowsSendingStart.call(this.table, connectionTables);
      this.table.modules.comms.send(this.connectionSelectorsTables, "moveRow", "connect", {
        row: row2
      });
    }
    if (this.connectionSelectorsElements) {
      this.connectionElements = [];
      if (!Array.isArray(this.connectionSelectorsElements)) {
        this.connectionSelectorsElements = [this.connectionSelectorsElements];
      }
      this.connectionSelectorsElements.forEach(function(query) {
        if (typeof query === "string") {
          _this75.connectionElements = _this75.connectionElements.concat(Array.prototype.slice.call(document.querySelectorAll(query)));
        } else {
          _this75.connectionElements.push(query);
        }
      });
      this.connectionElements.forEach(function(element) {
        var dropEvent = function dropEvent2(e2) {
          _this75.elementRowDrop(e2, element, _this75.moving);
        };
        element.addEventListener("mouseup", dropEvent);
        element.tabulatorElementDropEvent = dropEvent;
        element.classList.add("tabulator-movingrow-receiving");
      });
    }
  };
  MoveRows.prototype.disconnectFromTables = function() {
    var connectionTables;
    if (this.connectionSelectorsTables) {
      connectionTables = this.table.modules.comms.getConnections(this.connectionSelectorsTables);
      this.table.options.movableRowsSendingStop.call(this.table, connectionTables);
      this.table.modules.comms.send(this.connectionSelectorsTables, "moveRow", "disconnect");
    }
    this.connectionElements.forEach(function(element) {
      element.classList.remove("tabulator-movingrow-receiving");
      element.removeEventListener("mouseup", element.tabulatorElementDropEvent);
      delete element.tabulatorElementDropEvent;
    });
  };
  MoveRows.prototype.connect = function(table4, row2) {
    var self2 = this;
    if (!this.connectedTable) {
      this.connectedTable = table4;
      this.connectedRow = row2;
      this.table.element.classList.add("tabulator-movingrow-receiving");
      self2.table.rowManager.getDisplayRows().forEach(function(row3) {
        if (row3.type === "row" && row3.modules.moveRow && row3.modules.moveRow.mouseup) {
          row3.getElement().addEventListener("mouseup", row3.modules.moveRow.mouseup);
        }
      });
      self2.tableRowDropEvent = self2.tableRowDrop.bind(self2);
      self2.table.element.addEventListener("mouseup", self2.tableRowDropEvent);
      this.table.options.movableRowsReceivingStart.call(this.table, row2, table4);
      return true;
    } else {
      console.warn("Move Row Error - Table cannot accept connection, already connected to table:", this.connectedTable);
      return false;
    }
  };
  MoveRows.prototype.disconnect = function(table4) {
    var self2 = this;
    if (table4 === this.connectedTable) {
      this.connectedTable = false;
      this.connectedRow = false;
      this.table.element.classList.remove("tabulator-movingrow-receiving");
      self2.table.rowManager.getDisplayRows().forEach(function(row2) {
        if (row2.type === "row" && row2.modules.moveRow && row2.modules.moveRow.mouseup) {
          row2.getElement().removeEventListener("mouseup", row2.modules.moveRow.mouseup);
        }
      });
      self2.table.element.removeEventListener("mouseup", self2.tableRowDropEvent);
      this.table.options.movableRowsReceivingStop.call(this.table, table4);
    } else {
      console.warn("Move Row Error - trying to disconnect from non connected table");
    }
  };
  MoveRows.prototype.dropComplete = function(table4, row2, success) {
    var sender = false;
    if (success) {
      switch (_typeof(this.table.options.movableRowsSender)) {
        case "string":
          sender = this.senders[this.table.options.movableRowsSender];
          break;
        case "function":
          sender = this.table.options.movableRowsSender;
          break;
      }
      if (sender) {
        sender.call(this, this.moving.getComponent(), row2 ? row2.getComponent() : void 0, table4);
      } else {
        if (this.table.options.movableRowsSender) {
          console.warn("Mover Row Error - no matching sender found:", this.table.options.movableRowsSender);
        }
      }
      this.table.options.movableRowsSent.call(this.table, this.moving.getComponent(), row2 ? row2.getComponent() : void 0, table4);
    } else {
      this.table.options.movableRowsSentFailed.call(this.table, this.moving.getComponent(), row2 ? row2.getComponent() : void 0, table4);
    }
    this.endMove();
  };
  MoveRows.prototype.tableRowDrop = function(e2, row2) {
    var receiver = false, success = false;
    e2.stopImmediatePropagation();
    switch (_typeof(this.table.options.movableRowsReceiver)) {
      case "string":
        receiver = this.receivers[this.table.options.movableRowsReceiver];
        break;
      case "function":
        receiver = this.table.options.movableRowsReceiver;
        break;
    }
    if (receiver) {
      success = receiver.call(this, this.connectedRow.getComponent(), row2 ? row2.getComponent() : void 0, this.connectedTable);
    } else {
      console.warn("Mover Row Error - no matching receiver found:", this.table.options.movableRowsReceiver);
    }
    if (success) {
      this.table.options.movableRowsReceived.call(this.table, this.connectedRow.getComponent(), row2 ? row2.getComponent() : void 0, this.connectedTable);
    } else {
      this.table.options.movableRowsReceivedFailed.call(this.table, this.connectedRow.getComponent(), row2 ? row2.getComponent() : void 0, this.connectedTable);
    }
    this.table.modules.comms.send(this.connectedTable, "moveRow", "dropcomplete", {
      row: row2,
      success
    });
  };
  MoveRows.prototype.receivers = {
    insert: function insert2(fromRow, toRow, fromTable) {
      this.table.addRow(fromRow.getData(), void 0, toRow);
      return true;
    },
    add: function add(fromRow, toRow, fromTable) {
      this.table.addRow(fromRow.getData());
      return true;
    },
    update: function update2(fromRow, toRow, fromTable) {
      if (toRow) {
        toRow.update(fromRow.getData());
        return true;
      }
      return false;
    },
    replace: function replace2(fromRow, toRow, fromTable) {
      if (toRow) {
        this.table.addRow(fromRow.getData(), void 0, toRow);
        toRow.delete();
        return true;
      }
      return false;
    }
  };
  MoveRows.prototype.senders = {
    delete: function _delete(fromRow, toRow, toTable) {
      fromRow.delete();
    }
  };
  MoveRows.prototype.commsReceived = function(table4, action, data) {
    switch (action) {
      case "connect":
        return this.connect(table4, data.row);
        break;
      case "disconnect":
        return this.disconnect(table4);
        break;
      case "dropcomplete":
        return this.dropComplete(table4, data.row, data.success);
        break;
    }
  };
  Tabulator.prototype.registerModule("moveRow", MoveRows);
  var Mutator = function Mutator2(table4) {
    this.table = table4;
    this.allowedTypes = ["", "data", "edit", "clipboard"];
    this.enabled = true;
  };
  Mutator.prototype.initializeColumn = function(column2) {
    var self2 = this, match = false, config = {};
    this.allowedTypes.forEach(function(type) {
      var key = "mutator" + (type.charAt(0).toUpperCase() + type.slice(1)), mutator;
      if (column2.definition[key]) {
        mutator = self2.lookupMutator(column2.definition[key]);
        if (mutator) {
          match = true;
          config[key] = {
            mutator,
            params: column2.definition[key + "Params"] || {}
          };
        }
      }
    });
    if (match) {
      column2.modules.mutate = config;
    }
  };
  Mutator.prototype.lookupMutator = function(value) {
    var mutator = false;
    switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
      case "string":
        if (this.mutators[value]) {
          mutator = this.mutators[value];
        } else {
          console.warn("Mutator Error - No such mutator found, ignoring: ", value);
        }
        break;
      case "function":
        mutator = value;
        break;
    }
    return mutator;
  };
  Mutator.prototype.transformRow = function(data, type, updatedData) {
    var self2 = this, key = "mutator" + (type.charAt(0).toUpperCase() + type.slice(1)), value;
    if (this.enabled) {
      self2.table.columnManager.traverse(function(column2) {
        var mutator, params, component2;
        if (column2.modules.mutate) {
          mutator = column2.modules.mutate[key] || column2.modules.mutate.mutator || false;
          if (mutator) {
            value = column2.getFieldValue(typeof updatedData !== "undefined" ? updatedData : data);
            if (type == "data" || typeof value !== "undefined") {
              component2 = column2.getComponent();
              params = typeof mutator.params === "function" ? mutator.params(value, data, type, component2) : mutator.params;
              column2.setFieldValue(data, mutator.mutator(value, data, type, params, component2));
            }
          }
        }
      });
    }
    return data;
  };
  Mutator.prototype.transformCell = function(cell, value) {
    var mutator = cell.column.modules.mutate.mutatorEdit || cell.column.modules.mutate.mutator || false, tempData = {};
    if (mutator) {
      tempData = Object.assign(tempData, cell.row.getData());
      cell.column.setFieldValue(tempData, value);
      return mutator.mutator(value, tempData, "edit", mutator.params, cell.getComponent());
    } else {
      return value;
    }
  };
  Mutator.prototype.enable = function() {
    this.enabled = true;
  };
  Mutator.prototype.disable = function() {
    this.enabled = false;
  };
  Mutator.prototype.mutators = {};
  Tabulator.prototype.registerModule("mutator", Mutator);
  var Page = function Page2(table4) {
    this.table = table4;
    this.mode = "local";
    this.progressiveLoad = false;
    this.size = 0;
    this.page = 1;
    this.count = 5;
    this.max = 1;
    this.displayIndex = 0;
    this.initialLoad = true;
    this.pageSizes = [];
    this.dataReceivedNames = {};
    this.dataSentNames = {};
    this.createElements();
  };
  Page.prototype.createElements = function() {
    var button;
    this.element = document.createElement("span");
    this.element.classList.add("tabulator-paginator");
    this.pagesElement = document.createElement("span");
    this.pagesElement.classList.add("tabulator-pages");
    button = document.createElement("button");
    button.classList.add("tabulator-page");
    button.setAttribute("type", "button");
    button.setAttribute("role", "button");
    button.setAttribute("aria-label", "");
    button.setAttribute("title", "");
    this.firstBut = button.cloneNode(true);
    this.firstBut.setAttribute("data-page", "first");
    this.prevBut = button.cloneNode(true);
    this.prevBut.setAttribute("data-page", "prev");
    this.nextBut = button.cloneNode(true);
    this.nextBut.setAttribute("data-page", "next");
    this.lastBut = button.cloneNode(true);
    this.lastBut.setAttribute("data-page", "last");
    if (this.table.options.paginationSizeSelector) {
      this.pageSizeSelect = document.createElement("select");
      this.pageSizeSelect.classList.add("tabulator-page-size");
    }
  };
  Page.prototype.generatePageSizeSelectList = function() {
    var _this76 = this;
    var pageSizes = [];
    if (this.pageSizeSelect) {
      if (Array.isArray(this.table.options.paginationSizeSelector)) {
        pageSizes = this.table.options.paginationSizeSelector;
        this.pageSizes = pageSizes;
        if (this.pageSizes.indexOf(this.size) == -1) {
          pageSizes.unshift(this.size);
        }
      } else {
        if (this.pageSizes.indexOf(this.size) == -1) {
          pageSizes = [];
          for (var _i14 = 1; _i14 < 5; _i14++) {
            pageSizes.push(this.size * _i14);
          }
          this.pageSizes = pageSizes;
        } else {
          pageSizes = this.pageSizes;
        }
      }
      while (this.pageSizeSelect.firstChild) {
        this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);
      }
      pageSizes.forEach(function(item) {
        var itemEl = document.createElement("option");
        itemEl.value = item;
        if (item === true) {
          _this76.table.modules.localize.bind("pagination|all", function(value) {
            itemEl.innerHTML = value;
          });
        } else {
          itemEl.innerHTML = item;
        }
        _this76.pageSizeSelect.appendChild(itemEl);
      });
      this.pageSizeSelect.value = this.size;
    }
  };
  Page.prototype.initialize = function(hidden) {
    var self2 = this, pageSelectLabel, testElRow, testElCell;
    this.dataSentNames = Object.assign({}, this.paginationDataSentNames);
    this.dataSentNames = Object.assign(this.dataSentNames, this.table.options.paginationDataSent);
    this.dataReceivedNames = Object.assign({}, this.paginationDataReceivedNames);
    this.dataReceivedNames = Object.assign(this.dataReceivedNames, this.table.options.paginationDataReceived);
    self2.table.modules.localize.bind("pagination|first", function(value) {
      self2.firstBut.innerHTML = value;
    });
    self2.table.modules.localize.bind("pagination|first_title", function(value) {
      self2.firstBut.setAttribute("aria-label", value);
      self2.firstBut.setAttribute("title", value);
    });
    self2.table.modules.localize.bind("pagination|prev", function(value) {
      self2.prevBut.innerHTML = value;
    });
    self2.table.modules.localize.bind("pagination|prev_title", function(value) {
      self2.prevBut.setAttribute("aria-label", value);
      self2.prevBut.setAttribute("title", value);
    });
    self2.table.modules.localize.bind("pagination|next", function(value) {
      self2.nextBut.innerHTML = value;
    });
    self2.table.modules.localize.bind("pagination|next_title", function(value) {
      self2.nextBut.setAttribute("aria-label", value);
      self2.nextBut.setAttribute("title", value);
    });
    self2.table.modules.localize.bind("pagination|last", function(value) {
      self2.lastBut.innerHTML = value;
    });
    self2.table.modules.localize.bind("pagination|last_title", function(value) {
      self2.lastBut.setAttribute("aria-label", value);
      self2.lastBut.setAttribute("title", value);
    });
    self2.firstBut.addEventListener("click", function() {
      self2.setPage(1).then(function() {
      }).catch(function() {
      });
    });
    self2.prevBut.addEventListener("click", function() {
      self2.previousPage().then(function() {
      }).catch(function() {
      });
    });
    self2.nextBut.addEventListener("click", function() {
      self2.nextPage().then(function() {
      }).catch(function() {
      });
    });
    self2.lastBut.addEventListener("click", function() {
      self2.setPage(self2.max).then(function() {
      }).catch(function() {
      });
    });
    if (self2.table.options.paginationElement) {
      self2.element = self2.table.options.paginationElement;
    }
    if (this.pageSizeSelect) {
      pageSelectLabel = document.createElement("label");
      self2.table.modules.localize.bind("pagination|page_size", function(value) {
        self2.pageSizeSelect.setAttribute("aria-label", value);
        self2.pageSizeSelect.setAttribute("title", value);
        pageSelectLabel.innerHTML = value;
      });
      self2.element.appendChild(pageSelectLabel);
      self2.element.appendChild(self2.pageSizeSelect);
      self2.pageSizeSelect.addEventListener("change", function(e2) {
        self2.setPageSize(self2.pageSizeSelect.value == "true" ? true : self2.pageSizeSelect.value);
        self2.setPage(1).then(function() {
        }).catch(function() {
        });
      });
    }
    self2.element.appendChild(self2.firstBut);
    self2.element.appendChild(self2.prevBut);
    self2.element.appendChild(self2.pagesElement);
    self2.element.appendChild(self2.nextBut);
    self2.element.appendChild(self2.lastBut);
    if (!self2.table.options.paginationElement && !hidden) {
      self2.table.footerManager.append(self2.element, self2);
    }
    self2.mode = self2.table.options.pagination;
    if (self2.table.options.paginationSize) {
      self2.size = self2.table.options.paginationSize;
    } else {
      testElRow = document.createElement("div");
      testElRow.classList.add("tabulator-row");
      testElRow.style.visibility = hidden;
      testElCell = document.createElement("div");
      testElCell.classList.add("tabulator-cell");
      testElCell.innerHTML = "Page Row Test";
      testElRow.appendChild(testElCell);
      self2.table.rowManager.getTableElement().appendChild(testElRow);
      self2.size = Math.floor(self2.table.rowManager.getElement().clientHeight / testElRow.offsetHeight);
      self2.table.rowManager.getTableElement().removeChild(testElRow);
    }
    self2.count = self2.table.options.paginationButtonCount;
    self2.generatePageSizeSelectList();
  };
  Page.prototype.initializeProgressive = function(mode) {
    this.initialize(true);
    this.mode = "progressive_" + mode;
    this.progressiveLoad = true;
  };
  Page.prototype.setDisplayIndex = function(index) {
    this.displayIndex = index;
  };
  Page.prototype.getDisplayIndex = function() {
    return this.displayIndex;
  };
  Page.prototype.setMaxRows = function(rowCount) {
    if (!rowCount) {
      this.max = 1;
    } else {
      this.max = this.size === true ? 1 : Math.ceil(rowCount / this.size);
    }
    if (this.page > this.max) {
      this.page = this.max;
    }
  };
  Page.prototype.reset = function(force, columnsChanged) {
    if (this.mode == "local" || force) {
      this.page = 1;
    }
    if (columnsChanged) {
      this.initialLoad = true;
    }
    return true;
  };
  Page.prototype.setMaxPage = function(max3) {
    max3 = parseInt(max3);
    this.max = max3 || 1;
    if (this.page > this.max) {
      this.page = this.max;
      this.trigger();
    }
  };
  Page.prototype.setPage = function(page) {
    var _this77 = this;
    var self2 = this;
    switch (page) {
      case "first":
        return this.setPage(1);
        break;
      case "prev":
        return this.previousPage();
        break;
      case "next":
        return this.nextPage();
        break;
      case "last":
        return this.setPage(this.max);
        break;
    }
    return new Promise(function(resolve, reject) {
      page = parseInt(page);
      if (page > 0 && page <= _this77.max || _this77.mode !== "local") {
        _this77.page = page;
        _this77.trigger().then(function() {
          resolve();
        }).catch(function() {
          reject();
        });
        if (self2.table.options.persistence && self2.table.modExists("persistence", true) && self2.table.modules.persistence.config.page) {
          self2.table.modules.persistence.save("page");
        }
      } else {
        console.warn("Pagination Error - Requested page is out of range of 1 - " + _this77.max + ":", page);
        reject();
      }
    });
  };
  Page.prototype.setPageToRow = function(row2) {
    var _this78 = this;
    return new Promise(function(resolve, reject) {
      var rows = _this78.table.rowManager.getDisplayRows(_this78.displayIndex - 1);
      var index = rows.indexOf(row2);
      if (index > -1) {
        var page = _this78.size === true ? 1 : Math.ceil((index + 1) / _this78.size);
        _this78.setPage(page).then(function() {
          resolve();
        }).catch(function() {
          reject();
        });
      } else {
        console.warn("Pagination Error - Requested row is not visible");
        reject();
      }
    });
  };
  Page.prototype.setPageSize = function(size) {
    if (size !== true) {
      size = parseInt(size);
    }
    if (size > 0) {
      this.size = size;
    }
    if (this.pageSizeSelect) {
      this.generatePageSizeSelectList();
    }
    if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.page) {
      this.table.modules.persistence.save("page");
    }
  };
  Page.prototype._setPageButtons = function() {
    var self2 = this;
    var leftSize = Math.floor((this.count - 1) / 2);
    var rightSize = Math.ceil((this.count - 1) / 2);
    var min3 = this.max - this.page + leftSize + 1 < this.count ? this.max - this.count + 1 : Math.max(this.page - leftSize, 1);
    var max3 = this.page <= rightSize ? Math.min(this.count, this.max) : Math.min(this.page + rightSize, this.max);
    while (self2.pagesElement.firstChild) {
      self2.pagesElement.removeChild(self2.pagesElement.firstChild);
    }
    if (self2.page == 1) {
      self2.firstBut.disabled = true;
      self2.prevBut.disabled = true;
    } else {
      self2.firstBut.disabled = false;
      self2.prevBut.disabled = false;
    }
    if (self2.page == self2.max) {
      self2.lastBut.disabled = true;
      self2.nextBut.disabled = true;
    } else {
      self2.lastBut.disabled = false;
      self2.nextBut.disabled = false;
    }
    for (var _i15 = min3; _i15 <= max3; _i15++) {
      if (_i15 > 0 && _i15 <= self2.max) {
        self2.pagesElement.appendChild(self2._generatePageButton(_i15));
      }
    }
    this.footerRedraw();
  };
  Page.prototype._generatePageButton = function(page) {
    var self2 = this, button = document.createElement("button");
    button.classList.add("tabulator-page");
    if (page == self2.page) {
      button.classList.add("active");
    }
    button.setAttribute("type", "button");
    button.setAttribute("role", "button");
    self2.table.modules.localize.bind("pagination|page_title", function(value) {
      button.setAttribute("aria-label", value + " " + page);
      button.setAttribute("title", value + " " + page);
    });
    button.setAttribute("data-page", page);
    button.textContent = page;
    button.addEventListener("click", function(e2) {
      self2.setPage(page).then(function() {
      }).catch(function() {
      });
    });
    return button;
  };
  Page.prototype.previousPage = function() {
    var _this79 = this;
    return new Promise(function(resolve, reject) {
      if (_this79.page > 1) {
        _this79.page--;
        _this79.trigger().then(function() {
          resolve();
        }).catch(function() {
          reject();
        });
        if (_this79.table.options.persistence && _this79.table.modExists("persistence", true) && _this79.table.modules.persistence.config.page) {
          _this79.table.modules.persistence.save("page");
        }
      } else {
        console.warn("Pagination Error - Previous page would be less than page 1:", 0);
        reject();
      }
    });
  };
  Page.prototype.nextPage = function() {
    var _this80 = this;
    return new Promise(function(resolve, reject) {
      if (_this80.page < _this80.max) {
        _this80.page++;
        _this80.trigger().then(function() {
          resolve();
        }).catch(function() {
          reject();
        });
        if (_this80.table.options.persistence && _this80.table.modExists("persistence", true) && _this80.table.modules.persistence.config.page) {
          _this80.table.modules.persistence.save("page");
        }
      } else {
        if (!_this80.progressiveLoad) {
          console.warn("Pagination Error - Next page would be greater than maximum page of " + _this80.max + ":", _this80.max + 1);
        }
        reject();
      }
    });
  };
  Page.prototype.getPage = function() {
    return this.page;
  };
  Page.prototype.getPageMax = function() {
    return this.max;
  };
  Page.prototype.getPageSize = function(size) {
    return this.size;
  };
  Page.prototype.getMode = function() {
    return this.mode;
  };
  Page.prototype.getRows = function(data) {
    var output, start, end;
    if (this.mode == "local") {
      output = [];
      if (this.size === true) {
        start = 0;
        end = data.length;
      } else {
        start = this.size * (this.page - 1);
        end = start + parseInt(this.size);
      }
      this._setPageButtons();
      for (var _i16 = start; _i16 < end; _i16++) {
        if (data[_i16]) {
          output.push(data[_i16]);
        }
      }
      return output;
    } else {
      this._setPageButtons();
      return data.slice(0);
    }
  };
  Page.prototype.trigger = function() {
    var _this81 = this;
    var left;
    return new Promise(function(resolve, reject) {
      switch (_this81.mode) {
        case "local":
          left = _this81.table.rowManager.scrollLeft;
          _this81.table.rowManager.refreshActiveData("page");
          _this81.table.rowManager.scrollHorizontal(left);
          _this81.table.options.pageLoaded.call(_this81.table, _this81.getPage());
          resolve();
          break;
        case "remote":
        case "progressive_load":
        case "progressive_scroll":
          _this81.table.modules.ajax.blockActiveRequest();
          _this81._getRemotePage().then(function() {
            resolve();
          }).catch(function() {
            reject();
          });
          break;
        default:
          console.warn("Pagination Error - no such pagination mode:", _this81.mode);
          reject();
      }
    });
  };
  Page.prototype._getRemotePage = function() {
    var _this82 = this;
    var self2 = this, oldParams, pageParams;
    return new Promise(function(resolve, reject) {
      if (!self2.table.modExists("ajax", true)) {
        reject();
      }
      oldParams = Tabulator.prototype.helpers.deepClone(self2.table.modules.ajax.getParams() || {});
      pageParams = self2.table.modules.ajax.getParams();
      pageParams[_this82.dataSentNames.page] = self2.page;
      if (_this82.size) {
        pageParams[_this82.dataSentNames.size] = _this82.size;
      }
      if (_this82.table.options.ajaxSorting && _this82.table.modExists("sort")) {
        var sorters = self2.table.modules.sort.getSort();
        sorters.forEach(function(item) {
          delete item.column;
        });
        pageParams[_this82.dataSentNames.sorters] = sorters;
      }
      if (_this82.table.options.ajaxFiltering && _this82.table.modExists("filter")) {
        var filters = self2.table.modules.filter.getFilters(true, true);
        pageParams[_this82.dataSentNames.filters] = filters;
      }
      self2.table.modules.ajax.setParams(pageParams);
      self2.table.modules.ajax.sendRequest(_this82.progressiveLoad).then(function(data) {
        self2._parseRemoteData(data);
        resolve();
      }).catch(function(e2) {
        reject();
      });
      self2.table.modules.ajax.setParams(oldParams);
    });
  };
  Page.prototype._parseRemoteData = function(data) {
    var self2 = this, left, data, margin;
    if (typeof data[this.dataReceivedNames.last_page] === "undefined") {
      console.warn("Remote Pagination Error - Server response missing '" + this.dataReceivedNames.last_page + "' property");
    }
    if (data[this.dataReceivedNames.data]) {
      this.max = parseInt(data[this.dataReceivedNames.last_page]) || 1;
      if (this.progressiveLoad) {
        switch (this.mode) {
          case "progressive_load":
            if (this.page == 1) {
              this.table.rowManager.setData(data[this.dataReceivedNames.data], false, this.initialLoad && this.page == 1);
            } else {
              this.table.rowManager.addRows(data[this.dataReceivedNames.data]);
            }
            if (this.page < this.max) {
              setTimeout(function() {
                self2.nextPage().then(function() {
                }).catch(function() {
                });
              }, self2.table.options.ajaxProgressiveLoadDelay);
            }
            break;
          case "progressive_scroll":
            data = this.table.rowManager.getData().concat(data[this.dataReceivedNames.data]);
            this.table.rowManager.setData(data, true, this.initialLoad && this.page == 1);
            margin = this.table.options.ajaxProgressiveLoadScrollMargin || this.table.rowManager.element.clientHeight * 2;
            if (self2.table.rowManager.element.scrollHeight <= self2.table.rowManager.element.clientHeight + margin) {
              self2.nextPage().then(function() {
              }).catch(function() {
              });
            }
            break;
        }
      } else {
        left = this.table.rowManager.scrollLeft;
        this.table.rowManager.setData(data[this.dataReceivedNames.data], false, this.initialLoad && this.page == 1);
        this.table.rowManager.scrollHorizontal(left);
        this.table.columnManager.scrollHorizontal(left);
        this.table.options.pageLoaded.call(this.table, this.getPage());
      }
      this.initialLoad = false;
    } else {
      console.warn("Remote Pagination Error - Server response missing '" + this.dataReceivedNames.data + "' property");
    }
  };
  Page.prototype.footerRedraw = function() {
    var footer = this.table.footerManager.element;
    if (Math.ceil(footer.clientWidth) - footer.scrollWidth < 0) {
      this.pagesElement.style.display = "none";
    } else {
      this.pagesElement.style.display = "";
      if (Math.ceil(footer.clientWidth) - footer.scrollWidth < 0) {
        this.pagesElement.style.display = "none";
      }
    }
  };
  Page.prototype.paginationDataSentNames = {
    "page": "page",
    "size": "size",
    "sorters": "sorters",
    "filters": "filters"
  };
  Page.prototype.paginationDataReceivedNames = {
    "current_page": "current_page",
    "last_page": "last_page",
    "data": "data"
  };
  Tabulator.prototype.registerModule("page", Page);
  var Persistence = function Persistence2(table4) {
    this.table = table4;
    this.mode = "";
    this.id = "";
    this.defWatcherBlock = false;
    this.config = {};
    this.readFunc = false;
    this.writeFunc = false;
  };
  Persistence.prototype.localStorageTest = function() {
    var testKey = "_tabulator_test";
    try {
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e2) {
      return false;
    }
  };
  Persistence.prototype.initialize = function() {
    var mode = this.table.options.persistenceMode, id = this.table.options.persistenceID, retreivedData;
    this.mode = mode !== true ? mode : this.localStorageTest() ? "local" : "cookie";
    if (this.table.options.persistenceReaderFunc) {
      if (typeof this.table.options.persistenceReaderFunc === "function") {
        this.readFunc = this.table.options.persistenceReaderFunc;
      } else {
        if (this.readers[this.table.options.persistenceReaderFunc]) {
          this.readFunc = this.readers[this.table.options.persistenceReaderFunc];
        } else {
          console.warn("Persistence Read Error - invalid reader set", this.table.options.persistenceReaderFunc);
        }
      }
    } else {
      if (this.readers[this.mode]) {
        this.readFunc = this.readers[this.mode];
      } else {
        console.warn("Persistence Read Error - invalid reader set", this.mode);
      }
    }
    if (this.table.options.persistenceWriterFunc) {
      if (typeof this.table.options.persistenceWriterFunc === "function") {
        this.writeFunc = this.table.options.persistenceWriterFunc;
      } else {
        if (this.readers[this.table.options.persistenceWriterFunc]) {
          this.writeFunc = this.readers[this.table.options.persistenceWriterFunc];
        } else {
          console.warn("Persistence Write Error - invalid reader set", this.table.options.persistenceWriterFunc);
        }
      }
    } else {
      if (this.writers[this.mode]) {
        this.writeFunc = this.writers[this.mode];
      } else {
        console.warn("Persistence Write Error - invalid writer set", this.mode);
      }
    }
    this.id = "tabulator-" + (id || this.table.element.getAttribute("id") || "");
    this.config = {
      sort: this.table.options.persistence === true || this.table.options.persistence.sort,
      filter: this.table.options.persistence === true || this.table.options.persistence.filter,
      group: this.table.options.persistence === true || this.table.options.persistence.group,
      page: this.table.options.persistence === true || this.table.options.persistence.page,
      columns: this.table.options.persistence === true ? ["title", "width", "visible"] : this.table.options.persistence.columns
    };
    if (this.config.page) {
      retreivedData = this.retreiveData("page");
      if (retreivedData) {
        if (typeof retreivedData.paginationSize !== "undefined" && (this.config.page === true || this.config.page.size)) {
          this.table.options.paginationSize = retreivedData.paginationSize;
        }
        if (typeof retreivedData.paginationInitialPage !== "undefined" && (this.config.page === true || this.config.page.page)) {
          this.table.options.paginationInitialPage = retreivedData.paginationInitialPage;
        }
      }
    }
    if (this.config.group) {
      retreivedData = this.retreiveData("group");
      if (retreivedData) {
        if (typeof retreivedData.groupBy !== "undefined" && (this.config.group === true || this.config.group.groupBy)) {
          this.table.options.groupBy = retreivedData.groupBy;
        }
        if (typeof retreivedData.groupStartOpen !== "undefined" && (this.config.group === true || this.config.group.groupStartOpen)) {
          this.table.options.groupStartOpen = retreivedData.groupStartOpen;
        }
        if (typeof retreivedData.groupHeader !== "undefined" && (this.config.group === true || this.config.group.groupHeader)) {
          this.table.options.groupHeader = retreivedData.groupHeader;
        }
      }
    }
    if (this.config.columns) {
      this.table.options.columns = this.load("columns", this.table.options.columns);
    }
  };
  Persistence.prototype.initializeColumn = function(column2) {
    var self2 = this, def, keys;
    if (this.config.columns) {
      this.defWatcherBlock = true;
      def = column2.getDefinition();
      keys = this.config.columns === true ? Object.keys(def) : this.config.columns;
      keys.forEach(function(key) {
        var props = Object.getOwnPropertyDescriptor(def, key);
        var value = def[key];
        if (props) {
          Object.defineProperty(def, key, {
            set: function set(newValue) {
              value = newValue;
              if (!self2.defWatcherBlock) {
                self2.save("columns");
              }
              if (props.set) {
                props.set(newValue);
              }
            },
            get: function get() {
              if (props.get) {
                props.get();
              }
              return value;
            }
          });
        }
      });
      this.defWatcherBlock = false;
    }
  };
  Persistence.prototype.load = function(type, current) {
    var data = this.retreiveData(type);
    if (current) {
      data = data ? this.mergeDefinition(current, data) : current;
    }
    return data;
  };
  Persistence.prototype.retreiveData = function(type) {
    return this.readFunc ? this.readFunc(this.id, type) : false;
  };
  Persistence.prototype.mergeDefinition = function(oldCols, newCols) {
    var self2 = this, output = [];
    newCols = newCols || [];
    newCols.forEach(function(column2, to) {
      var from = self2._findColumn(oldCols, column2), keys;
      if (from) {
        if (self2.config.columns === true || self2.config.columns == void 0) {
          keys = Object.keys(from);
          keys.push("width");
        } else {
          keys = self2.config.columns;
        }
        keys.forEach(function(key) {
          if (key !== "columns" && typeof column2[key] !== "undefined") {
            from[key] = column2[key];
          }
        });
        if (from.columns) {
          from.columns = self2.mergeDefinition(from.columns, column2.columns);
        }
        output.push(from);
      }
    });
    oldCols.forEach(function(column2, i2) {
      var from = self2._findColumn(newCols, column2);
      if (!from) {
        if (output.length > i2) {
          output.splice(i2, 0, column2);
        } else {
          output.push(column2);
        }
      }
    });
    return output;
  };
  Persistence.prototype._findColumn = function(columns2, subject) {
    var type = subject.columns ? "group" : subject.field ? "field" : "object";
    return columns2.find(function(col) {
      switch (type) {
        case "group":
          return col.title === subject.title && col.columns.length === subject.columns.length;
          break;
        case "field":
          return col.field === subject.field;
          break;
        case "object":
          return col === subject;
          break;
      }
    });
  };
  Persistence.prototype.save = function(type) {
    var data = {};
    switch (type) {
      case "columns":
        data = this.parseColumns(this.table.columnManager.getColumns());
        break;
      case "filter":
        data = this.table.modules.filter.getFilters();
        break;
      case "sort":
        data = this.validateSorters(this.table.modules.sort.getSort());
        break;
      case "group":
        data = this.getGroupConfig();
        break;
      case "page":
        data = this.getPageConfig();
        break;
    }
    if (this.writeFunc) {
      this.writeFunc(this.id, type, data);
    }
  };
  Persistence.prototype.validateSorters = function(data) {
    data.forEach(function(item) {
      item.column = item.field;
      delete item.field;
    });
    return data;
  };
  Persistence.prototype.getGroupConfig = function() {
    var data = {};
    if (this.config.group) {
      if (this.config.group === true || this.config.group.groupBy) {
        data.groupBy = this.table.options.groupBy;
      }
      if (this.config.group === true || this.config.group.groupStartOpen) {
        data.groupStartOpen = this.table.options.groupStartOpen;
      }
      if (this.config.group === true || this.config.group.groupHeader) {
        data.groupHeader = this.table.options.groupHeader;
      }
    }
    return data;
  };
  Persistence.prototype.getPageConfig = function() {
    var data = {};
    if (this.config.page) {
      if (this.config.page === true || this.config.page.size) {
        data.paginationSize = this.table.modules.page.getPageSize();
      }
      if (this.config.page === true || this.config.page.page) {
        data.paginationInitialPage = this.table.modules.page.getPage();
      }
    }
    return data;
  };
  Persistence.prototype.parseColumns = function(columns2) {
    var self2 = this, definitions = [], excludedKeys = ["headerContextMenu", "headerMenu", "contextMenu", "clickMenu"];
    columns2.forEach(function(column2) {
      var defStore = {}, colDef = column2.getDefinition(), keys;
      if (column2.isGroup) {
        defStore.title = colDef.title;
        defStore.columns = self2.parseColumns(column2.getColumns());
      } else {
        defStore.field = column2.getField();
        if (self2.config.columns === true || self2.config.columns == void 0) {
          keys = Object.keys(colDef);
          keys.push("width");
        } else {
          keys = self2.config.columns;
        }
        keys.forEach(function(key) {
          switch (key) {
            case "width":
              defStore.width = column2.getWidth();
              break;
            case "visible":
              defStore.visible = column2.visible;
              break;
            default:
              if (typeof colDef[key] !== "function" && excludedKeys.indexOf(key) === -1) {
                defStore[key] = colDef[key];
              }
          }
        });
      }
      definitions.push(defStore);
    });
    return definitions;
  };
  Persistence.prototype.readers = {
    local: function local(id, type) {
      var data = localStorage.getItem(id + "-" + type);
      return data ? JSON.parse(data) : false;
    },
    cookie: function cookie(id, type) {
      var cookie3 = document.cookie, key = id + "-" + type, cookiePos = cookie3.indexOf(key + "="), end, data;
      if (cookiePos > -1) {
        cookie3 = cookie3.substr(cookiePos);
        end = cookie3.indexOf(";");
        if (end > -1) {
          cookie3 = cookie3.substr(0, end);
        }
        data = cookie3.replace(key + "=", "");
      }
      return data ? JSON.parse(data) : false;
    }
  };
  Persistence.prototype.writers = {
    local: function local2(id, type, data) {
      localStorage.setItem(id + "-" + type, JSON.stringify(data));
    },
    cookie: function cookie2(id, type, data) {
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1e4);
      document.cookie = id + "-" + type + "=" + JSON.stringify(data) + "; expires=" + expireDate.toUTCString();
    }
  };
  Tabulator.prototype.registerModule("persistence", Persistence);
  var Print = function Print2(table4) {
    this.table = table4;
    this.element = false;
    this.manualBlock = false;
  };
  Print.prototype.initialize = function() {
    window.addEventListener("beforeprint", this.replaceTable.bind(this));
    window.addEventListener("afterprint", this.cleanup.bind(this));
  };
  Print.prototype.replaceTable = function() {
    if (!this.manualBlock) {
      this.element = document.createElement("div");
      this.element.classList.add("tabulator-print-table");
      this.element.appendChild(this.table.modules.export.genereateTable(this.table.options.printConfig, this.table.options.printStyled, this.table.options.printRowRange, "print"));
      this.table.element.style.display = "none";
      this.table.element.parentNode.insertBefore(this.element, this.table.element);
    }
  };
  Print.prototype.cleanup = function() {
    document.body.classList.remove("tabulator-print-fullscreen-hide");
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.table.element.style.display = "";
    }
  };
  Print.prototype.printFullscreen = function(visible2, style, config) {
    var scrollX = window.scrollX, scrollY = window.scrollY, headerEl = document.createElement("div"), footerEl = document.createElement("div"), tableEl = this.table.modules.export.genereateTable(typeof config != "undefined" ? config : this.table.options.printConfig, typeof style != "undefined" ? style : this.table.options.printStyled, visible2, "print"), headerContent, footerContent;
    this.manualBlock = true;
    this.element = document.createElement("div");
    this.element.classList.add("tabulator-print-fullscreen");
    if (this.table.options.printHeader) {
      headerEl.classList.add("tabulator-print-header");
      headerContent = typeof this.table.options.printHeader == "function" ? this.table.options.printHeader.call(this.table) : this.table.options.printHeader;
      if (typeof headerContent == "string") {
        headerEl.innerHTML = headerContent;
      } else {
        headerEl.appendChild(headerContent);
      }
      this.element.appendChild(headerEl);
    }
    this.element.appendChild(tableEl);
    if (this.table.options.printFooter) {
      footerEl.classList.add("tabulator-print-footer");
      footerContent = typeof this.table.options.printFooter == "function" ? this.table.options.printFooter.call(this.table) : this.table.options.printFooter;
      if (typeof footerContent == "string") {
        footerEl.innerHTML = footerContent;
      } else {
        footerEl.appendChild(footerContent);
      }
      this.element.appendChild(footerEl);
    }
    document.body.classList.add("tabulator-print-fullscreen-hide");
    document.body.appendChild(this.element);
    if (this.table.options.printFormatter) {
      this.table.options.printFormatter(this.element, tableEl);
    }
    window.print();
    this.cleanup();
    window.scrollTo(scrollX, scrollY);
    this.manualBlock = false;
  };
  Tabulator.prototype.registerModule("print", Print);
  var ReactiveData = function ReactiveData2(table4) {
    this.table = table4;
    this.data = false;
    this.blocked = false;
    this.origFuncs = {};
    this.currentVersion = 0;
  };
  ReactiveData.prototype.watchData = function(data) {
    var self2 = this, pushFunc, version;
    this.currentVersion++;
    version = this.currentVersion;
    self2.unwatchData();
    self2.data = data;
    self2.origFuncs.push = data.push;
    Object.defineProperty(self2.data, "push", {
      enumerable: false,
      configurable: true,
      value: function value() {
        var args = Array.from(arguments);
        if (!self2.blocked && version === self2.currentVersion) {
          args.forEach(function(arg) {
            self2.table.rowManager.addRowActual(arg, false);
          });
        }
        return self2.origFuncs.push.apply(data, arguments);
      }
    });
    self2.origFuncs.unshift = data.unshift;
    Object.defineProperty(self2.data, "unshift", {
      enumerable: false,
      configurable: true,
      value: function value() {
        var args = Array.from(arguments);
        if (!self2.blocked && version === self2.currentVersion) {
          args.forEach(function(arg) {
            self2.table.rowManager.addRowActual(arg, true);
          });
        }
        return self2.origFuncs.unshift.apply(data, arguments);
      }
    });
    self2.origFuncs.shift = data.shift;
    Object.defineProperty(self2.data, "shift", {
      enumerable: false,
      configurable: true,
      value: function value() {
        var row2;
        if (!self2.blocked && version === self2.currentVersion) {
          if (self2.data.length) {
            row2 = self2.table.rowManager.getRowFromDataObject(self2.data[0]);
            if (row2) {
              row2.deleteActual();
            }
          }
        }
        return self2.origFuncs.shift.call(data);
      }
    });
    self2.origFuncs.pop = data.pop;
    Object.defineProperty(self2.data, "pop", {
      enumerable: false,
      configurable: true,
      value: function value() {
        var row2;
        if (!self2.blocked && version === self2.currentVersion) {
          if (self2.data.length) {
            row2 = self2.table.rowManager.getRowFromDataObject(self2.data[self2.data.length - 1]);
            if (row2) {
              row2.deleteActual();
            }
          }
        }
        return self2.origFuncs.pop.call(data);
      }
    });
    self2.origFuncs.splice = data.splice;
    Object.defineProperty(self2.data, "splice", {
      enumerable: false,
      configurable: true,
      value: function value() {
        var args = Array.from(arguments), start = args[0] < 0 ? data.length + args[0] : args[0], end = args[1], newRows = args[2] ? args.slice(2) : false, startRow;
        if (!self2.blocked && version === self2.currentVersion) {
          if (newRows) {
            startRow = data[start] ? self2.table.rowManager.getRowFromDataObject(data[start]) : false;
            if (startRow) {
              newRows.forEach(function(rowData) {
                self2.table.rowManager.addRowActual(rowData, true, startRow, true);
              });
            } else {
              newRows = newRows.slice().reverse();
              newRows.forEach(function(rowData) {
                self2.table.rowManager.addRowActual(rowData, true, false, true);
              });
            }
          }
          if (end !== 0) {
            var oldRows = data.slice(start, typeof args[1] === "undefined" ? args[1] : start + end);
            oldRows.forEach(function(rowData, i2) {
              var row2 = self2.table.rowManager.getRowFromDataObject(rowData);
              if (row2) {
                row2.deleteActual(i2 !== oldRows.length - 1);
              }
            });
          }
          if (newRows || end !== 0) {
            self2.table.rowManager.reRenderInPosition();
          }
        }
        return self2.origFuncs.splice.apply(data, arguments);
      }
    });
  };
  ReactiveData.prototype.unwatchData = function() {
    if (this.data !== false) {
      for (var key in this.origFuncs) {
        Object.defineProperty(this.data, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.origFuncs.key
        });
      }
    }
  };
  ReactiveData.prototype.watchRow = function(row2) {
    var data = row2.getData();
    this.blocked = true;
    for (var key in data) {
      this.watchKey(row2, data, key);
    }
    if (this.table.options.dataTree) {
      this.watchTreeChildren(row2);
    }
    this.blocked = false;
  };
  ReactiveData.prototype.watchTreeChildren = function(row2) {
    var self2 = this, childField = row2.getData()[this.table.options.dataTreeChildField], origFuncs = {};
    function rebuildTree() {
      self2.table.modules.dataTree.initializeRow(row2);
      self2.table.modules.dataTree.layoutRow(row2);
      self2.table.rowManager.refreshActiveData("tree", false, true);
    }
    if (childField) {
      origFuncs.push = childField.push;
      Object.defineProperty(childField, "push", {
        enumerable: false,
        configurable: true,
        value: function value() {
          var result = origFuncs.push.apply(childField, arguments);
          rebuildTree();
          return result;
        }
      });
      origFuncs.unshift = childField.unshift;
      Object.defineProperty(childField, "unshift", {
        enumerable: false,
        configurable: true,
        value: function value() {
          var result = origFuncs.unshift.apply(childField, arguments);
          rebuildTree();
          return result;
        }
      });
      origFuncs.shift = childField.shift;
      Object.defineProperty(childField, "shift", {
        enumerable: false,
        configurable: true,
        value: function value() {
          var result = origFuncs.shift.call(childField);
          rebuildTree();
          return result;
        }
      });
      origFuncs.pop = childField.pop;
      Object.defineProperty(childField, "pop", {
        enumerable: false,
        configurable: true,
        value: function value() {
          var result = origFuncs.pop.call(childField);
          rebuildTree();
          return result;
        }
      });
      origFuncs.splice = childField.splice;
      Object.defineProperty(childField, "splice", {
        enumerable: false,
        configurable: true,
        value: function value() {
          var result = origFuncs.splice.apply(childField, arguments);
          rebuildTree();
          return result;
        }
      });
    }
  };
  ReactiveData.prototype.watchKey = function(row2, data, key) {
    var self2 = this, props = Object.getOwnPropertyDescriptor(data, key), value = data[key], version = this.currentVersion;
    Object.defineProperty(data, key, {
      set: function set(newValue) {
        value = newValue;
        if (!self2.blocked && version === self2.currentVersion) {
          var update3 = {};
          update3[key] = newValue;
          row2.updateData(update3);
        }
        if (props.set) {
          props.set(newValue);
        }
      },
      get: function get() {
        if (props.get) {
          props.get();
        }
        return value;
      }
    });
  };
  ReactiveData.prototype.unwatchRow = function(row2) {
    var data = row2.getData();
    for (var key in data) {
      Object.defineProperty(data, key, {
        value: data[key]
      });
    }
  };
  ReactiveData.prototype.block = function() {
    this.blocked = true;
  };
  ReactiveData.prototype.unblock = function() {
    this.blocked = false;
  };
  Tabulator.prototype.registerModule("reactiveData", ReactiveData);
  var ResizeColumns = function ResizeColumns2(table4) {
    this.table = table4;
    this.startColumn = false;
    this.startX = false;
    this.startWidth = false;
    this.handle = null;
    this.prevHandle = null;
  };
  ResizeColumns.prototype.initializeColumn = function(type, column2, element) {
    var self2 = this, variableHeight = false, mode = this.table.options.resizableColumns;
    if (type === "header") {
      variableHeight = column2.definition.formatter == "textarea" || column2.definition.variableHeight;
      column2.modules.resize = { variableHeight };
    }
    if (mode === true || mode == type) {
      var handle2 = document.createElement("div");
      handle2.className = "tabulator-col-resize-handle";
      var prevHandle = document.createElement("div");
      prevHandle.className = "tabulator-col-resize-handle prev";
      handle2.addEventListener("click", function(e2) {
        e2.stopPropagation();
      });
      var handleDown = function handleDown2(e2) {
        var nearestColumn = column2.getLastColumn();
        if (nearestColumn && self2._checkResizability(nearestColumn)) {
          self2.startColumn = column2;
          self2._mouseDown(e2, nearestColumn, handle2);
        }
      };
      handle2.addEventListener("mousedown", handleDown);
      handle2.addEventListener("touchstart", handleDown, { passive: true });
      handle2.addEventListener("dblclick", function(e2) {
        var col = column2.getLastColumn();
        if (col && self2._checkResizability(col)) {
          e2.stopPropagation();
          col.reinitializeWidth(true);
        }
      });
      prevHandle.addEventListener("click", function(e2) {
        e2.stopPropagation();
      });
      var prevHandleDown = function prevHandleDown2(e2) {
        var nearestColumn, colIndex, prevColumn;
        nearestColumn = column2.getFirstColumn();
        if (nearestColumn) {
          colIndex = self2.table.columnManager.findColumnIndex(nearestColumn);
          prevColumn = colIndex > 0 ? self2.table.columnManager.getColumnByIndex(colIndex - 1) : false;
          if (prevColumn && self2._checkResizability(prevColumn)) {
            self2.startColumn = column2;
            self2._mouseDown(e2, prevColumn, prevHandle);
          }
        }
      };
      prevHandle.addEventListener("mousedown", prevHandleDown);
      prevHandle.addEventListener("touchstart", prevHandleDown, { passive: true });
      prevHandle.addEventListener("dblclick", function(e2) {
        var nearestColumn, colIndex, prevColumn;
        nearestColumn = column2.getFirstColumn();
        if (nearestColumn) {
          colIndex = self2.table.columnManager.findColumnIndex(nearestColumn);
          prevColumn = colIndex > 0 ? self2.table.columnManager.getColumnByIndex(colIndex - 1) : false;
          if (prevColumn && self2._checkResizability(prevColumn)) {
            e2.stopPropagation();
            prevColumn.reinitializeWidth(true);
          }
        }
      });
      element.appendChild(handle2);
      element.appendChild(prevHandle);
    }
  };
  ResizeColumns.prototype._checkResizability = function(column2) {
    return typeof column2.definition.resizable != "undefined" ? column2.definition.resizable : this.table.options.resizableColumns;
  };
  ResizeColumns.prototype._mouseDown = function(e2, column2, handle2) {
    var self2 = this;
    self2.table.element.classList.add("tabulator-block-select");
    function mouseMove(e3) {
      if (self2.table.rtl) {
        column2.setWidth(self2.startWidth - ((typeof e3.screenX === "undefined" ? e3.touches[0].screenX : e3.screenX) - self2.startX));
      } else {
        column2.setWidth(self2.startWidth + ((typeof e3.screenX === "undefined" ? e3.touches[0].screenX : e3.screenX) - self2.startX));
      }
      if (self2.table.options.virtualDomHoz) {
        self2.table.vdomHoz.reinitialize(true);
      }
      if (!self2.table.browserSlow && column2.modules.resize && column2.modules.resize.variableHeight) {
        column2.checkCellHeights();
      }
    }
    function mouseUp(e3) {
      if (self2.startColumn.modules.edit) {
        self2.startColumn.modules.edit.blocked = false;
      }
      if (self2.table.browserSlow && column2.modules.resize && column2.modules.resize.variableHeight) {
        column2.checkCellHeights();
      }
      document.body.removeEventListener("mouseup", mouseUp);
      document.body.removeEventListener("mousemove", mouseMove);
      handle2.removeEventListener("touchmove", mouseMove);
      handle2.removeEventListener("touchend", mouseUp);
      self2.table.element.classList.remove("tabulator-block-select");
      if (self2.table.options.persistence && self2.table.modExists("persistence", true) && self2.table.modules.persistence.config.columns) {
        self2.table.modules.persistence.save("columns");
      }
      self2.table.options.columnResized.call(self2.table, column2.getComponent());
    }
    e2.stopPropagation();
    if (self2.startColumn.modules.edit) {
      self2.startColumn.modules.edit.blocked = true;
    }
    self2.startX = typeof e2.screenX === "undefined" ? e2.touches[0].screenX : e2.screenX;
    self2.startWidth = column2.getWidth();
    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseup", mouseUp);
    handle2.addEventListener("touchmove", mouseMove, { passive: true });
    handle2.addEventListener("touchend", mouseUp);
  };
  Tabulator.prototype.registerModule("resizeColumns", ResizeColumns);
  var ResizeRows = function ResizeRows2(table4) {
    this.table = table4;
    this.startColumn = false;
    this.startY = false;
    this.startHeight = false;
    this.handle = null;
    this.prevHandle = null;
  };
  ResizeRows.prototype.initializeRow = function(row2) {
    var self2 = this, rowEl = row2.getElement();
    var handle2 = document.createElement("div");
    handle2.className = "tabulator-row-resize-handle";
    var prevHandle = document.createElement("div");
    prevHandle.className = "tabulator-row-resize-handle prev";
    handle2.addEventListener("click", function(e2) {
      e2.stopPropagation();
    });
    var handleDown = function handleDown2(e2) {
      self2.startRow = row2;
      self2._mouseDown(e2, row2, handle2);
    };
    handle2.addEventListener("mousedown", handleDown);
    handle2.addEventListener("touchstart", handleDown, { passive: true });
    prevHandle.addEventListener("click", function(e2) {
      e2.stopPropagation();
    });
    var prevHandleDown = function prevHandleDown2(e2) {
      var prevRow = self2.table.rowManager.prevDisplayRow(row2);
      if (prevRow) {
        self2.startRow = prevRow;
        self2._mouseDown(e2, prevRow, prevHandle);
      }
    };
    prevHandle.addEventListener("mousedown", prevHandleDown);
    prevHandle.addEventListener("touchstart", prevHandleDown, { passive: true });
    rowEl.appendChild(handle2);
    rowEl.appendChild(prevHandle);
  };
  ResizeRows.prototype._mouseDown = function(e2, row2, handle2) {
    var self2 = this;
    self2.table.element.classList.add("tabulator-block-select");
    function mouseMove(e3) {
      row2.setHeight(self2.startHeight + ((typeof e3.screenY === "undefined" ? e3.touches[0].screenY : e3.screenY) - self2.startY));
    }
    function mouseUp(e3) {
      document.body.removeEventListener("mouseup", mouseMove);
      document.body.removeEventListener("mousemove", mouseMove);
      handle2.removeEventListener("touchmove", mouseMove);
      handle2.removeEventListener("touchend", mouseUp);
      self2.table.element.classList.remove("tabulator-block-select");
      self2.table.options.rowResized.call(this.table, row2.getComponent());
    }
    e2.stopPropagation();
    self2.startY = typeof e2.screenY === "undefined" ? e2.touches[0].screenY : e2.screenY;
    self2.startHeight = row2.getHeight();
    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseup", mouseUp);
    handle2.addEventListener("touchmove", mouseMove, { passive: true });
    handle2.addEventListener("touchend", mouseUp);
  };
  Tabulator.prototype.registerModule("resizeRows", ResizeRows);
  var ResizeTable = function ResizeTable2(table4) {
    this.table = table4;
    this.binding = false;
    this.observer = false;
    this.containerObserver = false;
    this.tableHeight = 0;
    this.tableWidth = 0;
    this.containerHeight = 0;
    this.containerWidth = 0;
    this.autoResize = false;
  };
  ResizeTable.prototype.initialize = function(row2) {
    var _this83 = this;
    var table4 = this.table, tableStyle;
    this.tableHeight = table4.element.clientHeight;
    this.tableWidth = table4.element.clientWidth;
    if (table4.element.parentNode) {
      this.containerHeight = table4.element.parentNode.clientHeight;
      this.containerWidth = table4.element.parentNode.clientWidth;
    }
    if (typeof ResizeObserver !== "undefined" && table4.rowManager.getRenderMode() === "virtual") {
      this.autoResize = true;
      this.observer = new ResizeObserver(function(entry) {
        if (!table4.browserMobile || table4.browserMobile && !table4.modules.edit.currentCell) {
          var nodeHeight = Math.floor(entry[0].contentRect.height);
          var nodeWidth = Math.floor(entry[0].contentRect.width);
          if (_this83.tableHeight != nodeHeight || _this83.tableWidth != nodeWidth) {
            _this83.tableHeight = nodeHeight;
            _this83.tableWidth = nodeWidth;
            if (table4.element.parentNode) {
              _this83.containerHeight = table4.element.parentNode.clientHeight;
              _this83.containerWidth = table4.element.parentNode.clientWidth;
            }
            if (table4.options.virtualDomHoz) {
              table4.vdomHoz.reinitialize(true);
            }
            table4.redraw();
          }
        }
      });
      this.observer.observe(table4.element);
      tableStyle = window.getComputedStyle(table4.element);
      if (this.table.element.parentNode && !this.table.rowManager.fixedHeight && (tableStyle.getPropertyValue("max-height") || tableStyle.getPropertyValue("min-height"))) {
        this.containerObserver = new ResizeObserver(function(entry) {
          if (!table4.browserMobile || table4.browserMobile && !table4.modules.edit.currentCell) {
            var nodeHeight = Math.floor(entry[0].contentRect.height);
            var nodeWidth = Math.floor(entry[0].contentRect.width);
            if (_this83.containerHeight != nodeHeight || _this83.containerWidth != nodeWidth) {
              _this83.containerHeight = nodeHeight;
              _this83.containerWidth = nodeWidth;
              _this83.tableHeight = table4.element.clientHeight;
              _this83.tableWidth = table4.element.clientWidth;
            }
            if (table4.options.virtualDomHoz) {
              table4.vdomHoz.reinitialize(true);
            }
            table4.redraw();
          }
        });
        this.containerObserver.observe(this.table.element.parentNode);
      }
    } else {
      this.binding = function() {
        if (!table4.browserMobile || table4.browserMobile && !table4.modules.edit.currentCell) {
          if (table4.options.virtualDomHoz) {
            table4.vdomHoz.reinitialize(true);
          }
          table4.redraw();
        }
      };
      window.addEventListener("resize", this.binding);
    }
  };
  ResizeTable.prototype.clearBindings = function(row2) {
    if (this.binding) {
      window.removeEventListener("resize", this.binding);
    }
    if (this.observer) {
      this.observer.unobserve(this.table.element);
    }
    if (this.containerObserver) {
      this.containerObserver.unobserve(this.table.element.parentNode);
    }
  };
  Tabulator.prototype.registerModule("resizeTable", ResizeTable);
  var ResponsiveLayout = function ResponsiveLayout2(table4) {
    this.table = table4;
    this.columns = [];
    this.hiddenColumns = [];
    this.mode = "";
    this.index = 0;
    this.collapseFormatter = [];
    this.collapseStartOpen = true;
    this.collapseHandleColumn = false;
  };
  ResponsiveLayout.prototype.initialize = function() {
    var self2 = this, columns2 = [];
    this.mode = this.table.options.responsiveLayout;
    this.collapseFormatter = this.table.options.responsiveLayoutCollapseFormatter || this.formatCollapsedData;
    this.collapseStartOpen = this.table.options.responsiveLayoutCollapseStartOpen;
    this.hiddenColumns = [];
    this.table.columnManager.columnsByIndex.forEach(function(column2, i2) {
      if (column2.modules.responsive) {
        if (column2.modules.responsive.order && column2.modules.responsive.visible) {
          column2.modules.responsive.index = i2;
          columns2.push(column2);
          if (!column2.visible && self2.mode === "collapse") {
            self2.hiddenColumns.push(column2);
          }
        }
      }
    });
    columns2 = columns2.reverse();
    columns2 = columns2.sort(function(a, b) {
      var diff = b.modules.responsive.order - a.modules.responsive.order;
      return diff || b.modules.responsive.index - a.modules.responsive.index;
    });
    this.columns = columns2;
    if (this.mode === "collapse") {
      this.generateCollapsedContent();
    }
    for (var _iterator = this.table.columnManager.columnsByIndex, _isArray = Array.isArray(_iterator), _i17 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
      var _ref;
      if (_isArray) {
        if (_i17 >= _iterator.length)
          break;
        _ref = _iterator[_i17++];
      } else {
        _i17 = _iterator.next();
        if (_i17.done)
          break;
        _ref = _i17.value;
      }
      var col = _ref;
      if (col.definition.formatter == "responsiveCollapse") {
        this.collapseHandleColumn = col;
        break;
      }
    }
    if (this.collapseHandleColumn) {
      if (this.hiddenColumns.length) {
        this.collapseHandleColumn.show();
      } else {
        this.collapseHandleColumn.hide();
      }
    }
  };
  ResponsiveLayout.prototype.initializeColumn = function(column2) {
    var def = column2.getDefinition();
    column2.modules.responsive = { order: typeof def.responsive === "undefined" ? 1 : def.responsive, visible: def.visible === false ? false : true };
  };
  ResponsiveLayout.prototype.initializeRow = function(row2) {
    var el;
    if (row2.type !== "calc") {
      el = document.createElement("div");
      el.classList.add("tabulator-responsive-collapse");
      row2.modules.responsiveLayout = {
        element: el,
        open: this.collapseStartOpen
      };
      if (!this.collapseStartOpen) {
        el.style.display = "none";
      }
    }
  };
  ResponsiveLayout.prototype.layoutRow = function(row2) {
    var rowEl = row2.getElement();
    if (row2.modules.responsiveLayout) {
      rowEl.appendChild(row2.modules.responsiveLayout.element);
      this.generateCollapsedRowContent(row2);
    }
  };
  ResponsiveLayout.prototype.updateColumnVisibility = function(column2, visible2) {
    var index;
    if (column2.modules.responsive) {
      column2.modules.responsive.visible = visible2;
      this.initialize();
    }
  };
  ResponsiveLayout.prototype.hideColumn = function(column2) {
    var colCount = this.hiddenColumns.length;
    column2.hide(false, true);
    if (this.mode === "collapse") {
      this.hiddenColumns.unshift(column2);
      this.generateCollapsedContent();
      if (this.collapseHandleColumn && !colCount) {
        this.collapseHandleColumn.show();
      }
    }
  };
  ResponsiveLayout.prototype.showColumn = function(column2) {
    var index;
    column2.show(false, true);
    column2.setWidth(column2.getWidth());
    if (this.mode === "collapse") {
      index = this.hiddenColumns.indexOf(column2);
      if (index > -1) {
        this.hiddenColumns.splice(index, 1);
      }
      this.generateCollapsedContent();
      if (this.collapseHandleColumn && !this.hiddenColumns.length) {
        this.collapseHandleColumn.hide();
      }
    }
  };
  ResponsiveLayout.prototype.update = function() {
    var self2 = this, working = true;
    while (working) {
      var width = self2.table.modules.layout.getMode() == "fitColumns" ? self2.table.columnManager.getFlexBaseWidth() : self2.table.columnManager.getWidth();
      var diff = (self2.table.options.headerVisible ? self2.table.columnManager.element.clientWidth : self2.table.element.clientWidth) - width;
      if (diff < 0) {
        var column2 = self2.columns[self2.index];
        if (column2) {
          self2.hideColumn(column2);
          self2.index++;
        } else {
          working = false;
        }
      } else {
        var _column = self2.columns[self2.index - 1];
        if (_column) {
          if (diff > 0) {
            if (diff >= _column.getWidth()) {
              self2.showColumn(_column);
              self2.index--;
            } else {
              working = false;
            }
          } else {
            working = false;
          }
        } else {
          working = false;
        }
      }
      if (!self2.table.rowManager.activeRowsCount) {
        self2.table.rowManager.renderEmptyScroll();
      }
    }
  };
  ResponsiveLayout.prototype.generateCollapsedContent = function() {
    var self2 = this, rows = this.table.rowManager.getDisplayRows();
    rows.forEach(function(row2) {
      self2.generateCollapsedRowContent(row2);
    });
  };
  ResponsiveLayout.prototype.generateCollapsedRowContent = function(row2) {
    var el, contents;
    if (row2.modules.responsiveLayout) {
      el = row2.modules.responsiveLayout.element;
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
      contents = this.collapseFormatter(this.generateCollapsedRowData(row2));
      if (contents) {
        el.appendChild(contents);
      }
    }
  };
  ResponsiveLayout.prototype.generateCollapsedRowData = function(row2) {
    var self2 = this, data = row2.getData(), output = [], mockCellComponent;
    this.hiddenColumns.forEach(function(column2) {
      var value = column2.getFieldValue(data);
      if (column2.definition.title && column2.field) {
        if (column2.modules.format && self2.table.options.responsiveLayoutCollapseUseFormatters) {
          mockCellComponent = {
            value: false,
            data: {},
            getValue: function getValue() {
              return value;
            },
            getData: function getData() {
              return data;
            },
            getElement: function getElement() {
              return document.createElement("div");
            },
            getRow: function getRow() {
              return row2.getComponent();
            },
            getColumn: function getColumn() {
              return column2.getComponent();
            }
          };
          output.push({
            field: column2.field,
            title: column2.definition.title,
            value: column2.modules.format.formatter.call(self2.table.modules.format, mockCellComponent, column2.modules.format.params)
          });
        } else {
          output.push({
            field: column2.field,
            title: column2.definition.title,
            value
          });
        }
      }
    });
    return output;
  };
  ResponsiveLayout.prototype.formatCollapsedData = function(data) {
    var list = document.createElement("table");
    data.forEach(function(item) {
      var row2 = document.createElement("tr");
      var titleData = document.createElement("td");
      var valueData = document.createElement("td");
      var node_content;
      var titleHighlight = document.createElement("strong");
      titleData.appendChild(titleHighlight);
      this.table.modules.localize.bind("columns|" + item.field, function(text) {
        titleHighlight.innerText = text || item.title;
      });
      if (item.value instanceof Node) {
        node_content = document.createElement("div");
        node_content.appendChild(item.value);
        valueData.appendChild(node_content);
      } else {
        valueData.innerHTML = item.value;
      }
      row2.appendChild(titleData);
      row2.appendChild(valueData);
      list.appendChild(row2);
    }, this);
    return Object.keys(data).length ? list : "";
  };
  Tabulator.prototype.registerModule("responsiveLayout", ResponsiveLayout);
  var SelectRow = function SelectRow2(table4) {
    this.table = table4;
    this.selecting = false;
    this.lastClickedRow = false;
    this.selectPrev = [];
    this.selectedRows = [];
    this.headerCheckboxElement = null;
  };
  SelectRow.prototype.clearSelectionData = function(silent) {
    this.selecting = false;
    this.lastClickedRow = false;
    this.selectPrev = [];
    this.selectedRows = [];
    if (!silent) {
      this._rowSelectionChanged();
    }
  };
  SelectRow.prototype.initializeRow = function(row2) {
    var self2 = this, element = row2.getElement();
    var endSelect = function endSelect2() {
      setTimeout(function() {
        self2.selecting = false;
      }, 50);
      document.body.removeEventListener("mouseup", endSelect2);
    };
    row2.modules.select = { selected: false };
    if (self2.table.options.selectableCheck.call(this.table, row2.getComponent())) {
      element.classList.add("tabulator-selectable");
      element.classList.remove("tabulator-unselectable");
      if (self2.table.options.selectable && self2.table.options.selectable != "highlight") {
        if (self2.table.options.selectableRangeMode === "click") {
          element.addEventListener("click", function(e2) {
            if (e2.shiftKey) {
              self2.table._clearSelection();
              self2.lastClickedRow = self2.lastClickedRow || row2;
              var lastClickedRowIdx = self2.table.rowManager.getDisplayRowIndex(self2.lastClickedRow);
              var rowIdx = self2.table.rowManager.getDisplayRowIndex(row2);
              var fromRowIdx = lastClickedRowIdx <= rowIdx ? lastClickedRowIdx : rowIdx;
              var toRowIdx = lastClickedRowIdx >= rowIdx ? lastClickedRowIdx : rowIdx;
              var rows = self2.table.rowManager.getDisplayRows().slice(0);
              var toggledRows = rows.splice(fromRowIdx, toRowIdx - fromRowIdx + 1);
              if (e2.ctrlKey || e2.metaKey) {
                toggledRows.forEach(function(toggledRow) {
                  if (toggledRow !== self2.lastClickedRow) {
                    if (self2.table.options.selectable !== true && !self2.isRowSelected(row2)) {
                      if (self2.selectedRows.length < self2.table.options.selectable) {
                        self2.toggleRow(toggledRow);
                      }
                    } else {
                      self2.toggleRow(toggledRow);
                    }
                  }
                });
                self2.lastClickedRow = row2;
              } else {
                self2.deselectRows(void 0, true);
                if (self2.table.options.selectable !== true) {
                  if (toggledRows.length > self2.table.options.selectable) {
                    toggledRows = toggledRows.slice(0, self2.table.options.selectable);
                  }
                }
                self2.selectRows(toggledRows);
              }
              self2.table._clearSelection();
            } else if (e2.ctrlKey || e2.metaKey) {
              self2.toggleRow(row2);
              self2.lastClickedRow = row2;
            } else {
              self2.deselectRows(void 0, true);
              self2.selectRows(row2);
              self2.lastClickedRow = row2;
            }
          });
        } else {
          element.addEventListener("click", function(e2) {
            if (!self2.table.modExists("edit") || !self2.table.modules.edit.getCurrentCell()) {
              self2.table._clearSelection();
            }
            if (!self2.selecting) {
              self2.toggleRow(row2);
            }
          });
          element.addEventListener("mousedown", function(e2) {
            if (e2.shiftKey) {
              self2.table._clearSelection();
              self2.selecting = true;
              self2.selectPrev = [];
              document.body.addEventListener("mouseup", endSelect);
              document.body.addEventListener("keyup", endSelect);
              self2.toggleRow(row2);
              return false;
            }
          });
          element.addEventListener("mouseenter", function(e2) {
            if (self2.selecting) {
              self2.table._clearSelection();
              self2.toggleRow(row2);
              if (self2.selectPrev[1] == row2) {
                self2.toggleRow(self2.selectPrev[0]);
              }
            }
          });
          element.addEventListener("mouseout", function(e2) {
            if (self2.selecting) {
              self2.table._clearSelection();
              self2.selectPrev.unshift(row2);
            }
          });
        }
      }
    } else {
      element.classList.add("tabulator-unselectable");
      element.classList.remove("tabulator-selectable");
    }
  };
  SelectRow.prototype.toggleRow = function(row2) {
    if (this.table.options.selectableCheck.call(this.table, row2.getComponent())) {
      if (row2.modules.select && row2.modules.select.selected) {
        this._deselectRow(row2);
      } else {
        this._selectRow(row2);
      }
    }
  };
  SelectRow.prototype.selectRows = function(rows) {
    var _this84 = this;
    var rowMatch;
    switch (typeof rows === "undefined" ? "undefined" : _typeof(rows)) {
      case "undefined":
        this.table.rowManager.rows.forEach(function(row2) {
          _this84._selectRow(row2, true, true);
        });
        this._rowSelectionChanged();
        break;
      case "string":
        rowMatch = this.table.rowManager.findRow(rows);
        if (rowMatch) {
          this._selectRow(rowMatch, true, true);
        } else {
          this.table.rowManager.getRows(rows).forEach(function(row2) {
            _this84._selectRow(row2, true, true);
          });
        }
        this._rowSelectionChanged();
        break;
      default:
        if (Array.isArray(rows)) {
          rows.forEach(function(row2) {
            _this84._selectRow(row2, true, true);
          });
          this._rowSelectionChanged();
        } else {
          this._selectRow(rows, false, true);
        }
        break;
    }
  };
  SelectRow.prototype._selectRow = function(rowInfo, silent, force) {
    var index;
    if (!isNaN(this.table.options.selectable) && this.table.options.selectable !== true && !force) {
      if (this.selectedRows.length >= this.table.options.selectable) {
        if (this.table.options.selectableRollingSelection) {
          this._deselectRow(this.selectedRows[0]);
        } else {
          return false;
        }
      }
    }
    var row2 = this.table.rowManager.findRow(rowInfo);
    if (row2) {
      if (this.selectedRows.indexOf(row2) == -1) {
        row2.getElement().classList.add("tabulator-selected");
        if (!row2.modules.select) {
          row2.modules.select = {};
        }
        row2.modules.select.selected = true;
        if (row2.modules.select.checkboxEl) {
          row2.modules.select.checkboxEl.checked = true;
        }
        this.selectedRows.push(row2);
        if (this.table.options.dataTreeSelectPropagate) {
          this.childRowSelection(row2, true);
        }
        if (!silent) {
          this.table.options.rowSelected.call(this.table, row2.getComponent());
        }
        this._rowSelectionChanged(silent);
      }
    } else {
      if (!silent) {
        console.warn("Selection Error - No such row found, ignoring selection:" + rowInfo);
      }
    }
  };
  SelectRow.prototype.isRowSelected = function(row2) {
    return this.selectedRows.indexOf(row2) !== -1;
  };
  SelectRow.prototype.deselectRows = function(rows, silent) {
    var self2 = this, rowCount;
    if (typeof rows == "undefined") {
      rowCount = self2.selectedRows.length;
      for (var _i18 = 0; _i18 < rowCount; _i18++) {
        self2._deselectRow(self2.selectedRows[0], true);
      }
      self2._rowSelectionChanged(silent);
    } else {
      if (Array.isArray(rows)) {
        rows.forEach(function(row2) {
          self2._deselectRow(row2, true);
        });
        self2._rowSelectionChanged(silent);
      } else {
        self2._deselectRow(rows, silent);
      }
    }
  };
  SelectRow.prototype._deselectRow = function(rowInfo, silent) {
    var self2 = this, row2 = self2.table.rowManager.findRow(rowInfo), index;
    if (row2) {
      index = self2.selectedRows.findIndex(function(selectedRow) {
        return selectedRow == row2;
      });
      if (index > -1) {
        row2.getElement().classList.remove("tabulator-selected");
        if (!row2.modules.select) {
          row2.modules.select = {};
        }
        row2.modules.select.selected = false;
        if (row2.modules.select.checkboxEl) {
          row2.modules.select.checkboxEl.checked = false;
        }
        self2.selectedRows.splice(index, 1);
        if (this.table.options.dataTreeSelectPropagate) {
          this.childRowSelection(row2, false);
        }
        if (!silent) {
          self2.table.options.rowDeselected.call(this.table, row2.getComponent());
        }
        self2._rowSelectionChanged(silent);
      }
    } else {
      if (!silent) {
        console.warn("Deselection Error - No such row found, ignoring selection:" + rowInfo);
      }
    }
  };
  SelectRow.prototype.getSelectedData = function() {
    var data = [];
    this.selectedRows.forEach(function(row2) {
      data.push(row2.getData());
    });
    return data;
  };
  SelectRow.prototype.getSelectedRows = function() {
    var rows = [];
    this.selectedRows.forEach(function(row2) {
      rows.push(row2.getComponent());
    });
    return rows;
  };
  SelectRow.prototype._rowSelectionChanged = function(silent) {
    if (this.headerCheckboxElement) {
      if (this.selectedRows.length === 0) {
        this.headerCheckboxElement.checked = false;
        this.headerCheckboxElement.indeterminate = false;
      } else if (this.table.rowManager.rows.length === this.selectedRows.length) {
        this.headerCheckboxElement.checked = true;
        this.headerCheckboxElement.indeterminate = false;
      } else {
        this.headerCheckboxElement.indeterminate = true;
        this.headerCheckboxElement.checked = false;
      }
    }
    if (!silent) {
      this.table.options.rowSelectionChanged.call(this.table, this.getSelectedData(), this.getSelectedRows());
    }
  };
  SelectRow.prototype.registerRowSelectCheckbox = function(row2, element) {
    if (!row2._row.modules.select) {
      row2._row.modules.select = {};
    }
    row2._row.modules.select.checkboxEl = element;
  };
  SelectRow.prototype.registerHeaderSelectCheckbox = function(element) {
    this.headerCheckboxElement = element;
  };
  SelectRow.prototype.childRowSelection = function(row2, select2) {
    var children = this.table.modules.dataTree.getChildren(row2, true);
    if (select2) {
      for (var _iterator2 = children, _isArray2 = Array.isArray(_iterator2), _i19 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ; ) {
        var _ref2;
        if (_isArray2) {
          if (_i19 >= _iterator2.length)
            break;
          _ref2 = _iterator2[_i19++];
        } else {
          _i19 = _iterator2.next();
          if (_i19.done)
            break;
          _ref2 = _i19.value;
        }
        var child = _ref2;
        this._selectRow(child, true);
      }
    } else {
      for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i20 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ; ) {
        var _ref3;
        if (_isArray3) {
          if (_i20 >= _iterator3.length)
            break;
          _ref3 = _iterator3[_i20++];
        } else {
          _i20 = _iterator3.next();
          if (_i20.done)
            break;
          _ref3 = _i20.value;
        }
        var _child = _ref3;
        this._deselectRow(_child, true);
      }
    }
  };
  Tabulator.prototype.registerModule("selectRow", SelectRow);
  var Sort = function Sort2(table4) {
    this.table = table4;
    this.sortList = [];
    this.changed = false;
  };
  Sort.prototype.initializeColumn = function(column2, content) {
    var self2 = this, sorter = false, colEl, arrowEl;
    switch (_typeof(column2.definition.sorter)) {
      case "string":
        if (self2.sorters[column2.definition.sorter]) {
          sorter = self2.sorters[column2.definition.sorter];
        } else {
          console.warn("Sort Error - No such sorter found: ", column2.definition.sorter);
        }
        break;
      case "function":
        sorter = column2.definition.sorter;
        break;
    }
    column2.modules.sort = {
      sorter,
      dir: "none",
      params: column2.definition.sorterParams || {},
      startingDir: column2.definition.headerSortStartingDir || "asc",
      tristate: typeof column2.definition.headerSortTristate !== "undefined" ? column2.definition.headerSortTristate : this.table.options.headerSortTristate
    };
    if (typeof column2.definition.headerSort === "undefined" ? this.table.options.headerSort !== false : column2.definition.headerSort !== false) {
      colEl = column2.getElement();
      colEl.classList.add("tabulator-sortable");
      arrowEl = document.createElement("div");
      arrowEl.classList.add("tabulator-col-sorter");
      if (_typeof(this.table.options.headerSortElement) == "object") {
        arrowEl.appendChild(this.table.options.headerSortElement);
      } else {
        arrowEl.innerHTML = this.table.options.headerSortElement;
      }
      content.appendChild(arrowEl);
      column2.modules.sort.element = arrowEl;
      colEl.addEventListener("click", function(e2) {
        var dir = "", sorters = [], match = false;
        if (column2.modules.sort) {
          if (column2.modules.sort.tristate) {
            if (column2.modules.sort.dir == "none") {
              dir = column2.modules.sort.startingDir;
            } else {
              if (column2.modules.sort.dir == column2.modules.sort.startingDir) {
                dir = column2.modules.sort.dir == "asc" ? "desc" : "asc";
              } else {
                dir = "none";
              }
            }
          } else {
            switch (column2.modules.sort.dir) {
              case "asc":
                dir = "desc";
                break;
              case "desc":
                dir = "asc";
                break;
              default:
                dir = column2.modules.sort.startingDir;
            }
          }
          if (self2.table.options.columnHeaderSortMulti && (e2.shiftKey || e2.ctrlKey)) {
            sorters = self2.getSort();
            match = sorters.findIndex(function(sorter2) {
              return sorter2.field === column2.getField();
            });
            if (match > -1) {
              sorters[match].dir = dir;
              if (match != sorters.length - 1) {
                match = sorters.splice(match, 1)[0];
                if (dir != "none") {
                  sorters.push(match);
                }
              }
            } else {
              if (dir != "none") {
                sorters.push({ column: column2, dir });
              }
            }
            self2.setSort(sorters);
          } else {
            if (dir == "none") {
              self2.clear();
            } else {
              self2.setSort(column2, dir);
            }
          }
          self2.table.rowManager.sorterRefresh(!self2.sortList.length);
        }
      });
    }
  };
  Sort.prototype.hasChanged = function() {
    var changed = this.changed;
    this.changed = false;
    return changed;
  };
  Sort.prototype.getSort = function() {
    var self2 = this, sorters = [];
    self2.sortList.forEach(function(item) {
      if (item.column) {
        sorters.push({ column: item.column.getComponent(), field: item.column.getField(), dir: item.dir });
      }
    });
    return sorters;
  };
  Sort.prototype.setSort = function(sortList, dir) {
    var self2 = this, newSortList = [];
    if (!Array.isArray(sortList)) {
      sortList = [{ column: sortList, dir }];
    }
    sortList.forEach(function(item) {
      var column2;
      column2 = self2.table.columnManager.findColumn(item.column);
      if (column2) {
        item.column = column2;
        newSortList.push(item);
        self2.changed = true;
      } else {
        console.warn("Sort Warning - Sort field does not exist and is being ignored: ", item.column);
      }
    });
    self2.sortList = newSortList;
    if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.sort) {
      this.table.modules.persistence.save("sort");
    }
  };
  Sort.prototype.clear = function() {
    this.setSort([]);
  };
  Sort.prototype.findSorter = function(column2) {
    var row2 = this.table.rowManager.activeRows[0], sorter = "string", field, value;
    if (row2) {
      row2 = row2.getData();
      field = column2.getField();
      if (field) {
        value = column2.getFieldValue(row2);
        switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
          case "undefined":
            sorter = "string";
            break;
          case "boolean":
            sorter = "boolean";
            break;
          default:
            if (!isNaN(value) && value !== "") {
              sorter = "number";
            } else {
              if (value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)) {
                sorter = "alphanum";
              }
            }
            break;
        }
      }
    }
    return this.sorters[sorter];
  };
  Sort.prototype.sort = function(data) {
    var self2 = this, sortList = this.table.options.sortOrderReverse ? self2.sortList.slice().reverse() : self2.sortList, sortListActual = [], rowComponents = [], lastSort;
    if (self2.table.options.dataSorting) {
      self2.table.options.dataSorting.call(self2.table, self2.getSort());
    }
    self2.clearColumnHeaders();
    if (!self2.table.options.ajaxSorting) {
      sortList.forEach(function(item, i2) {
        var sortObj = item.column.modules.sort;
        if (item.column && sortObj) {
          if (!sortObj.sorter) {
            sortObj.sorter = self2.findSorter(item.column);
          }
          item.params = typeof sortObj.params === "function" ? sortObj.params(item.column.getComponent(), item.dir) : sortObj.params;
          sortListActual.push(item);
        }
        self2.setColumnHeader(item.column, item.dir);
      });
      if (sortListActual.length) {
        self2._sortItems(data, sortListActual);
      }
    } else {
      sortList.forEach(function(item, i2) {
        self2.setColumnHeader(item.column, item.dir);
      });
    }
    if (self2.table.options.dataSorted) {
      data.forEach(function(row2) {
        rowComponents.push(row2.getComponent());
      });
      self2.table.options.dataSorted.call(self2.table, self2.getSort(), rowComponents);
    }
  };
  Sort.prototype.clearColumnHeaders = function() {
    this.table.columnManager.getRealColumns().forEach(function(column2) {
      if (column2.modules.sort) {
        column2.modules.sort.dir = "none";
        column2.getElement().setAttribute("aria-sort", "none");
      }
    });
  };
  Sort.prototype.setColumnHeader = function(column2, dir) {
    column2.modules.sort.dir = dir;
    column2.getElement().setAttribute("aria-sort", dir);
  };
  Sort.prototype._sortItems = function(data, sortList) {
    var _this85 = this;
    var sorterCount = sortList.length - 1;
    data.sort(function(a, b) {
      var result;
      for (var i2 = sorterCount; i2 >= 0; i2--) {
        var sortItem = sortList[i2];
        result = _this85._sortRow(a, b, sortItem.column, sortItem.dir, sortItem.params);
        if (result !== 0) {
          break;
        }
      }
      return result;
    });
  };
  Sort.prototype._sortRow = function(a, b, column2, dir, params) {
    var el1Comp, el2Comp, colComp;
    var el1 = dir == "asc" ? a : b;
    var el2 = dir == "asc" ? b : a;
    a = column2.getFieldValue(el1.getData());
    b = column2.getFieldValue(el2.getData());
    a = typeof a !== "undefined" ? a : "";
    b = typeof b !== "undefined" ? b : "";
    el1Comp = el1.getComponent();
    el2Comp = el2.getComponent();
    return column2.modules.sort.sorter.call(this, a, b, el1Comp, el2Comp, column2.getComponent(), dir, params);
  };
  Sort.prototype.sorters = {
    number: function number2(a, b, aRow, bRow, column2, dir, params) {
      var alignEmptyValues = params.alignEmptyValues;
      var decimal = params.decimalSeparator;
      var thousand = params.thousandSeparator;
      var emptyAlign = 0;
      a = String(a);
      b = String(b);
      if (thousand) {
        a = a.split(thousand).join("");
        b = b.split(thousand).join("");
      }
      if (decimal) {
        a = a.split(decimal).join(".");
        b = b.split(decimal).join(".");
      }
      a = parseFloat(a);
      b = parseFloat(b);
      if (isNaN(a)) {
        emptyAlign = isNaN(b) ? 0 : -1;
      } else if (isNaN(b)) {
        emptyAlign = 1;
      } else {
        return a - b;
      }
      if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
        emptyAlign *= -1;
      }
      return emptyAlign;
    },
    string: function string(a, b, aRow, bRow, column2, dir, params) {
      var alignEmptyValues = params.alignEmptyValues;
      var emptyAlign = 0;
      var locale;
      if (!a) {
        emptyAlign = !b ? 0 : -1;
      } else if (!b) {
        emptyAlign = 1;
      } else {
        switch (_typeof(params.locale)) {
          case "boolean":
            if (params.locale) {
              locale = this.table.modules.localize.getLocale();
            }
            break;
          case "string":
            locale = params.locale;
            break;
        }
        return String(a).toLowerCase().localeCompare(String(b).toLowerCase(), locale);
      }
      if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
        emptyAlign *= -1;
      }
      return emptyAlign;
    },
    date: function date(a, b, aRow, bRow, column2, dir, params) {
      if (!params.format) {
        params.format = "DD/MM/YYYY";
      }
      return this.sorters.datetime.call(this, a, b, aRow, bRow, column2, dir, params);
    },
    time: function time(a, b, aRow, bRow, column2, dir, params) {
      if (!params.format) {
        params.format = "HH:mm";
      }
      return this.sorters.datetime.call(this, a, b, aRow, bRow, column2, dir, params);
    },
    datetime: function datetime3(a, b, aRow, bRow, column2, dir, params) {
      var format = params.format || "DD/MM/YYYY HH:mm:ss", alignEmptyValues = params.alignEmptyValues, emptyAlign = 0;
      if (typeof moment != "undefined") {
        a = moment(a, format);
        b = moment(b, format);
        if (!a.isValid()) {
          emptyAlign = !b.isValid() ? 0 : -1;
        } else if (!b.isValid()) {
          emptyAlign = 1;
        } else {
          return a - b;
        }
        if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
          emptyAlign *= -1;
        }
        return emptyAlign;
      } else {
        console.error("Sort Error - 'datetime' sorter is dependant on moment.js");
      }
    },
    boolean: function boolean(a, b, aRow, bRow, column2, dir, params) {
      var el1 = a === true || a === "true" || a === "True" || a === 1 ? 1 : 0;
      var el2 = b === true || b === "true" || b === "True" || b === 1 ? 1 : 0;
      return el1 - el2;
    },
    array: function array(a, b, aRow, bRow, column2, dir, params) {
      var el1 = 0;
      var el2 = 0;
      var type = params.type || "length";
      var alignEmptyValues = params.alignEmptyValues;
      var emptyAlign = 0;
      function calc(value) {
        switch (type) {
          case "length":
            return value.length;
            break;
          case "sum":
            return value.reduce(function(c, d) {
              return c + d;
            });
            break;
          case "max":
            return Math.max.apply(null, value);
            break;
          case "min":
            return Math.min.apply(null, value);
            break;
          case "avg":
            return value.reduce(function(c, d) {
              return c + d;
            }) / value.length;
            break;
        }
      }
      if (!Array.isArray(a)) {
        alignEmptyValues = !Array.isArray(b) ? 0 : -1;
      } else if (!Array.isArray(b)) {
        alignEmptyValues = 1;
      } else {
        el1 = a ? calc(a) : 0;
        el2 = b ? calc(b) : 0;
        return el1 - el2;
      }
      if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
        emptyAlign *= -1;
      }
      return emptyAlign;
    },
    exists: function exists(a, b, aRow, bRow, column2, dir, params) {
      var el1 = typeof a == "undefined" ? 0 : 1;
      var el2 = typeof b == "undefined" ? 0 : 1;
      return el1 - el2;
    },
    alphanum: function alphanum(as, bs, aRow, bRow, column2, dir, params) {
      var a, b, a1, b1, i2 = 0, L, rx = /(\d+)|(\D+)/g, rd = /\d/;
      var alignEmptyValues = params.alignEmptyValues;
      var emptyAlign = 0;
      if (!as && as !== 0) {
        emptyAlign = !bs && bs !== 0 ? 0 : -1;
      } else if (!bs && bs !== 0) {
        emptyAlign = 1;
      } else {
        if (isFinite(as) && isFinite(bs))
          return as - bs;
        a = String(as).toLowerCase();
        b = String(bs).toLowerCase();
        if (a === b)
          return 0;
        if (!(rd.test(a) && rd.test(b)))
          return a > b ? 1 : -1;
        a = a.match(rx);
        b = b.match(rx);
        L = a.length > b.length ? b.length : a.length;
        while (i2 < L) {
          a1 = a[i2];
          b1 = b[i2++];
          if (a1 !== b1) {
            if (isFinite(a1) && isFinite(b1)) {
              if (a1.charAt(0) === "0")
                a1 = "." + a1;
              if (b1.charAt(0) === "0")
                b1 = "." + b1;
              return a1 - b1;
            } else
              return a1 > b1 ? 1 : -1;
          }
        }
        return a.length > b.length;
      }
      if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
        emptyAlign *= -1;
      }
      return emptyAlign;
    }
  };
  Tabulator.prototype.registerModule("sort", Sort);
  var Validate = function Validate2(table4) {
    this.table = table4;
    this.invalidCells = [];
  };
  Validate.prototype.initializeColumn = function(column2) {
    var self2 = this, config = [], validator;
    if (column2.definition.validator) {
      if (Array.isArray(column2.definition.validator)) {
        column2.definition.validator.forEach(function(item) {
          validator = self2._extractValidator(item);
          if (validator) {
            config.push(validator);
          }
        });
      } else {
        validator = this._extractValidator(column2.definition.validator);
        if (validator) {
          config.push(validator);
        }
      }
      column2.modules.validate = config.length ? config : false;
    }
  };
  Validate.prototype._extractValidator = function(value) {
    var type, params, pos;
    switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
      case "string":
        pos = value.indexOf(":");
        if (pos > -1) {
          type = value.substring(0, pos);
          params = value.substring(pos + 1);
        } else {
          type = value;
        }
        return this._buildValidator(type, params);
        break;
      case "function":
        return this._buildValidator(value);
        break;
      case "object":
        return this._buildValidator(value.type, value.parameters);
        break;
    }
  };
  Validate.prototype._buildValidator = function(type, params) {
    var func = typeof type == "function" ? type : this.validators[type];
    if (!func) {
      console.warn("Validator Setup Error - No matching validator found:", type);
      return false;
    } else {
      return {
        type: typeof type == "function" ? "function" : type,
        func,
        params
      };
    }
  };
  Validate.prototype.validate = function(validators, cell, value) {
    var self2 = this, valid = [], invalidIndex = this.invalidCells.indexOf(cell);
    if (validators) {
      validators.forEach(function(item) {
        if (!item.func.call(self2, cell.getComponent(), value, item.params)) {
          valid.push({
            type: item.type,
            parameters: item.params
          });
        }
      });
    }
    valid = valid.length ? valid : true;
    if (!cell.modules.validate) {
      cell.modules.validate = {};
    }
    if (valid === true) {
      cell.modules.validate.invalid = false;
      cell.getElement().classList.remove("tabulator-validation-fail");
      if (invalidIndex > -1) {
        this.invalidCells.splice(invalidIndex, 1);
      }
    } else {
      cell.modules.validate.invalid = true;
      if (this.table.options.validationMode !== "manual") {
        cell.getElement().classList.add("tabulator-validation-fail");
      }
      if (invalidIndex == -1) {
        this.invalidCells.push(cell);
      }
    }
    return valid;
  };
  Validate.prototype.getInvalidCells = function() {
    var output = [];
    this.invalidCells.forEach(function(cell) {
      output.push(cell.getComponent());
    });
    return output;
  };
  Validate.prototype.clearValidation = function(cell) {
    var invalidIndex;
    if (cell.modules.validate && cell.modules.validate.invalid) {
      cell.getElement().classList.remove("tabulator-validation-fail");
      cell.modules.validate.invalid = false;
      invalidIndex = this.invalidCells.indexOf(cell);
      if (invalidIndex > -1) {
        this.invalidCells.splice(invalidIndex, 1);
      }
    }
  };
  Validate.prototype.validators = {
    integer: function integer(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      value = Number(value);
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    },
    float: function float(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      value = Number(value);
      return typeof value === "number" && isFinite(value) && value % 1 !== 0;
    },
    numeric: function numeric(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return !isNaN(value);
    },
    string: function string2(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return isNaN(value);
    },
    max: function max2(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return parseFloat(value) <= parameters;
    },
    min: function min2(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return parseFloat(value) >= parameters;
    },
    starts: function starts2(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return String(value).toLowerCase().startsWith(String(parameters).toLowerCase());
    },
    ends: function ends2(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return String(value).toLowerCase().endsWith(String(parameters).toLowerCase());
    },
    minLength: function minLength(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return String(value).length >= parameters;
    },
    maxLength: function maxLength(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      return String(value).length <= parameters;
    },
    in: function _in2(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      if (typeof parameters == "string") {
        parameters = parameters.split("|");
      }
      return value === "" || parameters.indexOf(value) > -1;
    },
    regex: function regex2(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      var reg = new RegExp(parameters);
      return reg.test(value);
    },
    unique: function unique(cell, value, parameters) {
      if (value === "" || value === null || typeof value === "undefined") {
        return true;
      }
      var unique2 = true;
      var cellData = cell.getData();
      var column2 = cell.getColumn()._getSelf();
      this.table.rowManager.rows.forEach(function(row2) {
        var data = row2.getData();
        if (data !== cellData) {
          if (value == column2.getFieldValue(data)) {
            unique2 = false;
          }
        }
      });
      return unique2;
    },
    required: function required(cell, value, parameters) {
      return value !== "" && value !== null && typeof value !== "undefined";
    }
  };
  Tabulator.prototype.registerModule("validate", Validate);
  var tabulator_es2015_default = Tabulator;

  // ns-hugo:/home/runner/work/Cards/Cards/assets/ts/cards/card-table-columns.ts
  function layout() {
    if (window.innerWidth >= 1024) {
      return "fitColumns";
    } else {
      return "fitDataFill";
    }
  }
  function groupBy(fields) {
    if (fields.includes("Set")) {
      return "Set";
    } else {
      return void 0;
    }
  }
  function definition(fields, filter2) {
    const columns2 = [{
      title: "",
      formatter: "responsiveCollapse",
      responsive: 0,
      width: 30,
      minWidth: 30,
      hozAlign: "center",
      resizable: false,
      headerSort: false
    }];
    for (const field of fields) {
      if (field === "Set #" || field === "Price Estimate" || field === "Notes") {
        continue;
      } else {
        columns2.push(column(field, filter2));
      }
    }
    return columns2;
  }
  function column(field, filter2) {
    switch (field) {
      case "Set":
        return {
          title: field,
          field,
          headerTooltip: "The set that the card belongs to",
          responsive: 100,
          widthGrow: 1,
          visible: visible(field, filter2),
          headerFilter: "select",
          headerFilterParams: {
            values: true,
            sortValuesList: "asc"
          }
        };
      case "Card #":
        return {
          title: "#",
          field,
          headerTooltip: "The card's number",
          responsive: 0,
          widthGrow: 0.5,
          visible: visible(field, filter2),
          headerFilter: "input"
        };
      case "Card":
        return {
          title: field,
          field,
          headerTooltip: "The card's name",
          responsive: 0,
          widthGrow: 3,
          visible: visible(field, filter2),
          headerFilter: "input"
        };
      case "Type":
      case "Subtype":
      case "Colour":
      case "Side":
      case "Civilization":
      case "Nationality":
      case "Zone":
      case "Border":
      case "Phase":
      case "World":
      case "Pantheon":
      case "School":
      case "Faction":
        return {
          title: field,
          field,
          headerTooltip: "The type or catagory of the card",
          responsive: 50,
          widthGrow: 1,
          visible: visible(field, filter2),
          headerFilter: "select",
          headerFilterParams: {
            values: true,
            sortValuesList: "asc"
          }
        };
      case "Rarity":
        return {
          title: field,
          field,
          headerTooltip: "The rarity of the card",
          responsive: 10,
          widthGrow: 1,
          visible: visible(field, filter2),
          headerFilter: "select",
          headerFilterParams: {
            values: true,
            sortValuesList: "asc"
          }
        };
      case "Col":
        return {
          title: "Have",
          field,
          headerTooltip: "If I have the card or not",
          responsive: 0,
          widthGrow: 0.5,
          visible: visible(field, filter2),
          headerFilter: "tickCross",
          formatter: "tickCross",
          hozAlign: "center",
          mutator: (value) => {
            switch (value) {
              case "x":
              case "X":
              case "XX":
              case "XXX":
              case "XXXX":
              case "b":
              case "B":
                return true;
              case "o":
              case "O":
              case "0":
                return false;
              default:
                return null;
            }
          }
        };
      case "Dup":
        return {
          title: "Stock",
          field,
          headerTooltip: "The number of cards I have available to trade",
          responsive: 0,
          widthGrow: 0.5,
          visible: visible(field, filter2)
        };
      case "Cube":
        return {
          title: field,
          field,
          headerTooltip: "The number of cards I have in my playing cube",
          responsive: 0,
          widthGrow: 0.5,
          visible: visible(field, filter2)
        };
    }
  }
  function visible(field, filter2) {
    return !filter2.hide.includes(field);
  }

  // ns-hugo:/home/runner/work/Cards/Cards/assets/ts/cards/card-table-filter.ts
  var filterQueryStringParam = "list";
  function getSettingsFromQueryString() {
    const params = new URLSearchParams(window.location.search);
    return getSettings(params.get(filterQueryStringParam));
  }
  function getSettings(filter2) {
    switch (filter2) {
      default:
      case "want":
        return {
          value: "want",
          filter: [{
            field: "Col",
            type: "=",
            value: false
          }],
          hide: [
            "Col",
            "Dup"
          ]
        };
      case "trade":
        return {
          value: "trade",
          filter: [{
            field: "Dup",
            type: ">",
            value: 0
          }],
          hide: [
            "Col"
          ]
        };
      case "have":
        return {
          value: "have",
          filter: [{
            field: "Col",
            type: "=",
            value: true
          }],
          hide: [
            "Col",
            "Dup"
          ]
        };
      case "all":
        return {
          value: "all",
          filter: [],
          hide: []
        };
    }
  }
  function enable(tablulator, settings) {
    document.querySelectorAll("#filter input").forEach((input2) => {
      input2.addEventListener("change", () => run(tablulator, input2.value));
      input2.checked = input2.value === settings.value;
      input2.disabled = false;
    });
  }
  function run(tablulator, filter2) {
    const settings = getSettings(filter2);
    tablulator.modules.responsiveLayout.index = 0;
    tablulator.blockRedraw();
    tablulator.clearFilter(false);
    if (settings.filter !== null) {
      tablulator.setFilter(settings.filter);
    }
    showHideColumns(tablulator, settings);
    updateQueryStringParam(settings);
    tablulator.restoreRedraw();
    tablulator.redraw(true);
  }
  function showHideColumns(tablulator, settings) {
    tablulator.getColumns().forEach((column2) => {
      const columnName = column2.getDefinition().field;
      if (settings.hide.includes(columnName)) {
        column2.hide();
      } else {
        column2.show();
      }
    });
  }
  function updateQueryStringParam(settings) {
    const params = new URLSearchParams(window.location.search);
    params.set(filterQueryStringParam, settings.value);
    const newUrl = window.location.pathname + "?" + params.toString();
    history.replaceState(null, "", newUrl);
  }

  // ns-hugo:/home/runner/work/Cards/Cards/assets/ts/cards/card-table-download.ts
  function enable2(tablulator) {
    const download2 = document.getElementById("download");
    download2.addEventListener("click", () => {
      tablulator.download("csv", fileName());
    });
    download2.disabled = false;
  }
  function fileName() {
    const name = document.getElementById("game-name").innerText;
    const selectedList = document.querySelector("#filter input:checked + label").innerText;
    return `Crash Dive - ${selectedList} List (${name}).csv`;
  }

  // <stdin>
  var table3 = document.getElementById("table");
  var url = table3.dataset["url"];
  (0, import_papaparse.parse)(url, {
    download: true,
    header: true,
    complete: (results) => {
      if (results.errors.length === 0) {
        try {
          createTable(table3, results);
        } catch {
          parseError(table3);
        }
      } else {
        downloadError(table3);
      }
    }
  });
  function parseError(table4) {
    table4.innerHTML = '<p id="error-message">There has been an error reading the card list from Google Sheets.<br>Please try again later.</p>';
  }
  function downloadError(table4) {
    table4.innerHTML = '<p id="error-message">There has been an error downloading the card list from Google Sheets.<br>Please try again.</p>';
  }
  function createTable(table4, results) {
    const filterSettings = getSettingsFromQueryString();
    const tablulator = new tabulator_es2015_default(table4, {
      data: results.data,
      height: "100%",
      layout: layout(),
      responsiveLayout: "collapse",
      responsiveLayoutCollapseStartOpen: false,
      headerFilterPlaceholder: "",
      placeholder: "No Results",
      initialFilter: filterSettings.filter,
      groupBy: groupBy(results.meta.fields),
      groupToggleElement: "header",
      columns: definition(results.meta.fields, filterSettings)
    });
    enable(tablulator, filterSettings);
    enable2(tablulator);
  }
})();
/* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/
