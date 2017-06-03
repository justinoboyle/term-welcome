'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _indexScreen = require('./indexScreen');

var _indexScreen2 = _interopRequireDefault(_indexScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.curUser = "";

var passwordBuffer = "";
var didRenderSwitch = false;

exports.default = {
    init: function () {
        var _ref = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (curUser == "") curUser = global.users[0] || "root";
                            passwordBuffer = "";
                            didRenderSwitch = false;

                        case 3:
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
                                content: "Sign in: " + curUser + "\n\nPassword:  " + new Array(passwordBuffer.length + 1).join('*'),
                                tags: true
                            });


                            screen.append(box);

                            box.focus();

                            if (!didRenderSwitch) process.stdout.write("^C Switch User");
                            didRenderSwitch = true;

                            return _context2.abrupt('return', screen);

                        case 6:
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
            var code;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            code = (key + "").charCodeAt(0);

                            if (code == 13) // delete
                                process.exit(0);
                            if (key == 'DEL') passwordBuffer = passwordBuffer.substring(0, passwordBuffer.length - 2);else passwordBuffer += key;

                        case 3:
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
//# sourceMappingURL=userLogin.js.map