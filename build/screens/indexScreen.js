'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _userLogin = require('./userLogin');

var _userLogin2 = _interopRequireDefault(_userLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    init: function () {
        var _ref = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function init() {
            return _ref.apply(this, arguments);
        }

        return init;
    }(),
    render: function () {
        var _ref2 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee2(screen, blessed) {
            var box;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            box = blessed.box({
                                top: 'center',
                                left: 'center',
                                content: _os2.default.hostname() + '\n' + users.length + ' active user' + (users.length == 1 ? '' : 's') + '.' + '\nPress any key to log in.',
                                tags: true
                            });


                            screen.append(box);

                            box.focus();

                            return _context2.abrupt('return', screen);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function render(_x, _x2) {
            return _ref2.apply(this, arguments);
        }

        return render;
    }(),
    keypress: function () {
        var _ref3 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee3(key, changeScreen) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            changeScreen(_userLogin2.default);

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function keypress(_x3, _x4) {
            return _ref3.apply(this, arguments);
        }

        return keypress;
    }()
};
//# sourceMappingURL=indexScreen.js.map