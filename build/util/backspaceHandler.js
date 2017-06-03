"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require("bluebird");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastDown = 0;

exports.default = function () {
    var _ref = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(lastDown !== 0 && Date.now() - lastDown < 10)) {
                            _context.next = 2;
                            break;
                        }

                        return _context.abrupt("return", false);

                    case 2:
                        lastDown = Date.now();
                        return _context.abrupt("return", true);

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function backspaceHandler() {
        return _ref.apply(this, arguments);
    }

    return backspaceHandler;
}();
//# sourceMappingURL=backspaceHandler.js.map