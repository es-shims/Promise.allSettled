'use strict';

var requirePromise = require('./requirePromise');

requirePromise();

var ES = require('es-abstract/es2018');
var getIntrinsic = require('es-abstract/GetIntrinsic');
var bind = require('function-bind');

var all = bind.call(Function.call, getIntrinsic('%Promise_all%'));

module.exports = function allSettled(iterable) {
	var C = this;
	if (ES.Type(C) !== 'Object') {
		throw new TypeError('`this` value must be an object');
	}
	return all(C, Array.from(iterable, function (item) {
		var onFulfill = function (value) {
			return { status: 'fulfilled', value: value };
		};
		var onReject = function (reason) {
			return { status: 'rejected', reason: reason };
		};
		var itemPromise = ES.PromiseResolve(C, item);
		return itemPromise.then(onFulfill, onReject);
	}));
};
