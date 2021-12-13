const {convert} = require("../index")

test("convert byte top kb",()=>{
    expect(convert(1200,"kb")).toBe(1.200);
})

test("convert byte top mb",()=>{
    expect(convert(12000000,"mb")).toBe(12.000);
})