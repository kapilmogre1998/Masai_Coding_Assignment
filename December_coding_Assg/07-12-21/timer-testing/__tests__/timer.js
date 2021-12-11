const {timer} = require("../index");

describe("Timer",()=>{
    test("calculate timer",()=>{
        expect(timer(18000000)).toBe("5:0:0");
    })
})