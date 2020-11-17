"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = void 0;
var getLocation = function (href) {
    var match = href.match(
    // eslint-disable-next-line no-useless-escape
    /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return (match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        path: match[5],
        search: match[6],
        hash: match[7],
    });
};
exports.getPath = function (href) {
    var location = getLocation(href);
    var path = location.path;
    var search = location.search, hash = location.hash;
    if (search) {
        path += search;
    }
    if (hash) {
        path += hash;
    }
    return path;
};
