const {password} = require("../index");

describe("Validate password",()=>{
    test("password",()=>{
        expect(password()).toBe("Kapil@123");
    })
})