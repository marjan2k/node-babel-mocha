import { expect } from 'chai'
import markupCalculator from '../index'

describe('Calculate Markup', _ => {
    it('should return error for no base price', () => {
        expect(() => markupCalculator()).to.throw(
            "Base price must be included")
    })

    it('should return an error for negative base price', () => {
        expect(() => markupCalculator(-1)).to.throw(
            "Base price cannot be negative")
    })

    it('should return an error for 0 or invalid number of persons', () => {
        expect(() => markupCalculator(100, 0)).to.throw(
            "Atleast one person required to work on the job")
    })


})