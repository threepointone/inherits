var each = require('each');
var __hasProp = {}.hasOwnProperty;
function extend(obj) {
    each(Array.prototype.slice.call(arguments, 1), function(source) {
        for(var prop in source) {
            obj[prop] = source[prop];
        }
    });
    return obj;
}

module.exports = function(child, parent, iprops, sprops) {

    for(var key in parent) {
        if(__hasProp.call(parent, key)) {
            child[key] = parent[key];
        }
    }

    function Ctor() {
        this.constructor = child;
    }
    Ctor.prototype = parent.prototype;
    child.prototype = new Ctor();
    child.superclass = parent.prototype; // todo - argue. 
    extend(child, sprops);
    extend(child.prototype, iprops);

    return child;
}