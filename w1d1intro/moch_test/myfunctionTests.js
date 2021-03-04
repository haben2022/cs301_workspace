"use strict";
const assert = require("assert");
const app = require("./myCode.js");

describe("triangleArea", function () {
    it("Area of triangle with sides 3,4 and 5 is 6", function () {
        assert.strictEqual(app.triangleArea(3, 4, 5), 6);
    });

    it("Area of triangle with sides 3,4 and 5 is 6", function () {
        assert.strictEqual(app.triangleArea(6, 8, 10), 24);
    });

});