const {sum} = require("../index");

describe("Addition",()=>{
    test("Adding 2 +ve numbers",()=>{
        expect(sum(12,10)).toBe(22);
        expect(sum(10,1)).toBe(11);
    })
    test("Adding one +ve & one -ve numbers",()=>{
        expect(sum(12,-10)).toBe(2);
        expect(sum(12,-5)).toBe(7);
    })
    test("Adding 2 -ve numbers",()=>{
        expect(sum(-12,-10)).toBe(-22);
        expect(sum(-12,-5)).toBe(-17);
    })
})