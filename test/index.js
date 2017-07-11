import { expect } from "chai"
import markupCalculator from "../index"

describe("Calculate Markup", _ => {
    it("should return error for no base price", () => {
        expect(() => markupCalculator()).to.throw(
            "Base price must be included")
    })

    it("should return an error for negative base price", () => {
        expect(() => markupCalculator(-1)).to.throw(
            "Base price cannot be negative")
    })

    it("should return an error for 0 or invalid number of persons", () => {
        expect(() => markupCalculator(100, 0)).to.throw(
            "Atleast one person required to work on the job")
    })

    let testInputs = [
        {args:[1299.99, 3, "food"], expected: 1591.58},
        {args:[5432.00, 1, "drugs"], expected: 6199.81},
        {args:[12456.95, 4, "books"], expected: 13707.63}
    ]
    testInputs.forEach((inputs) => {
        it(`should return correct result for valid input arguments:
        args: [${inputs.args}], output: ${inputs.expected}`, () => {
            const result = markupCalculator(...inputs.args)
            expect(result).to.be.a('number')
            expect(result).to.equal(inputs.expected)
        })
    })
})
