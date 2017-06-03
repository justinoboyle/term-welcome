'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

var changeScreen = function () {
    var _ref2 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee2(ns) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        currentScreen = ns;
                        _context2.next = 3;
                        return ns.init();

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function changeScreen(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var start = function () {
    var _ref3 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return _systemutil2.default.getUsers();

                    case 2:
                        users = _context3.sent;
                        _context3.next = 5;
                        return render();

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function start() {
        return _ref3.apply(this, arguments);
    };
}();

var render = function () {
    var _ref4 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return currentScreen.render(screen, _blessed2.default);

                    case 2:

                        screen.key(['escape', 'q', 'C-c'], function () {
                            var _ref5 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee4(ch, key) {
                                return _regenerator2.default.wrap(function _callee4$(_context4) {
                                    while (1) {
                                        switch (_context4.prev = _context4.next) {
                                            case 0:
                                                // await currentScreen.keypress(key, changeScreen);
                                                // await render();
                                                process.exit(0);

                                            case 1:
                                            case 'end':
                                                return _context4.stop();
                                        }
                                    }
                                }, _callee4, this);
                            }));

                            return function (_x3, _x4) {
                                return _ref5.apply(this, arguments);
                            };
                        }());

                        screen.key(['backspace', 'delete'], function () {
                            var _ref6 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee5(ch, key) {
                                return _regenerator2.default.wrap(function _callee5$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                _context5.next = 2;
                                                return (0, _backspaceHandler2.default)();

                                            case 2:
                                                if (_context5.sent) {
                                                    _context5.next = 4;
                                                    break;
                                                }

                                                return _context5.abrupt('return');

                                            case 4:
                                                _context5.next = 6;
                                                return currentScreen.keypress('DEL', changeScreen);

                                            case 6:
                                                _context5.next = 8;
                                                return render();

                                            case 8:
                                            case 'end':
                                                return _context5.stop();
                                        }
                                    }
                                }, _callee5, this);
                            }));

                            return function (_x5, _x6) {
                                return _ref6.apply(this, arguments);
                            };
                        }());

                        screen.key(['C-d'], function () {
                            var _ref7 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee6(ch, key) {
                                return _regenerator2.default.wrap(function _callee6$(_context6) {
                                    while (1) {
                                        switch (_context6.prev = _context6.next) {
                                            case 0:
                                                process.exit(-1);

                                            case 1:
                                            case 'end':
                                                return _context6.stop();
                                        }
                                    }
                                }, _callee6, this);
                            }));

                            return function (_x7, _x8) {
                                return _ref7.apply(this, arguments);
                            };
                        }());

                        screen.render();

                    case 6:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function render() {
        return _ref4.apply(this, arguments);
    };
}();

require('babel-polyfill');

require('babel-regenerator-runtime');

var _blessed = require('blessed');

var _blessed2 = _interopRequireDefault(_blessed);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _systemutil = require('./util/systemutil');

var _systemutil2 = _interopRequireDefault(_systemutil);

var _indexScreen = require('./screens/indexScreen');

var _indexScreen2 = _interopRequireDefault(_indexScreen);

var _userLogin = require('./screens/userLogin');

var _userLogin2 = _interopRequireDefault(_userLogin);

var _backspaceHandler = require('./util/backspaceHandler');

var _backspaceHandler2 = _interopRequireDefault(_backspaceHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.screen = _blessed2.default.screen();
global.users = [];

var currentScreen = _userLogin2.default;

process.stdin.on('data', function () {
    var _ref = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee(chunk) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return currentScreen.keypress(chunk, changeScreen);

                    case 2:
                        _context.next = 4;
                        return render();

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

start();
//# sourceMappingURL=index.js.map