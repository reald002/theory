/** Required (сделать все необязательные члены обязательными) */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DEFAULT_CONFIG = {
    domain: 'www.google.com',
    port: '90'
};
var createConfig = function (config) {
    return __assign(__assign({}, DEFAULT_CONFIG), config);
};
/** Error */
// createConfig({
//   port: '90'
// });
/** Works */
createConfig({
    domain: 'www.google.com',
    port: '80'
});
