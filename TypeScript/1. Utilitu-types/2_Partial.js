/** Partial (сделать все члены объекта необязательными) */
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
    port: '80'
};
function createConfig(config) {
    return __assign(__assign({}, DEFAULT_CONFIG), config);
}
var config = createConfig({
    port: '180'
});
console.log(config);
