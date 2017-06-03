'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getUsers: function getUsers() {
        console.log('hi');
        return new _promise2.default(function (resolve, reject) {
            (0, _child_process.exec)('awk -F\'[/:]\' \'{if ($3 >= 1000 && $3 != 65534) print $1}\' /etc/passwd', function (error, stdout, stderr) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(stdout.trim().split('\n'));
            });
        });
    }
};
//# sourceMappingURL=systemutil.js.map