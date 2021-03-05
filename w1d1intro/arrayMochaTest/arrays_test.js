"use strict";


const arrays = require("./arrays.js");
const assert = require("assert");

describe("isArrayEqual", function () {
    it("test with equal array", function () {
        assert.strictEqual(arrays.isArrayEqual([1, 2, 3], [1, 2, 3]), true);
    });

    it("test with arrays that are not equal", function () {
        assert.strictEqual(arrays.isArrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), false);
    });

});


describe("addend", function () {
    it("tests addend even number of elements", function () {
        assert.strictEqual(arrays.addends([-1, -100, 1, 2, 3, -55]), -56);
    });

    it("tests addend odd number of elements", function () {
        assert.strictEqual(arrays.addends([-10, 2, 3, 4, 20]), 10);
    });
});