import {sum} from "../sum"

test("Test to calculate sum of two numbers", ()=> {
    const res = sum(2,3);
    expect(res).toBe(5);
})

