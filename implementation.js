'use strict';

var requirePromise = require('./requirePromise');

requirePromise();

var ES = require('es-abstract/es2018');
var iterate = require('iterate-value');
var map = require('array.prototype.map');
var getIntrinsic = require('es-abstract/GetIntrinsic');
var bind = require('function-bind');

var all = bind.call(Function.call, getIntrinsic('%Promise_all%'));
var reject = bind.call(Function.call, getIntrinsic('%Promise_reject%'));

module.exports = function allSettled(iterable) {
	var C = this;
	if (ES.Type(C) !== 'Object') {
		throw new TypeError('`this` value must be an object');
	}
	var values = iterate(iterable);
	return all(C, map(values, function (item) {
		var onFulfill = function (value) {
			return { status: 'fulfilled', value: value };
		};
		var onReject = function (reason) {
			return { status: 'rejected', reason: reason };
		};
		var itemPromise = ES.PromiseResolve(C, item);
		try {
			return itemPromise.then(onFulfill, onReject);
		} catch (e) {
			return reject(C, e);
		}
	}));
};
