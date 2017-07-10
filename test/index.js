import { expect } from 'chai'
import markupCalculator from '../index'

describe('Calculate Markup', _ => {
    it('should return error for no base price', () => {
        expect(() => markupCalculator()).to.throw("Base price must be included")
    })

    it('should return an error for negative base price', () => {
        expect(() => markupCalculator(-1)).to.throw("Base price cannot be negative")
    })
})