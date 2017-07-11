import _ from "lodash"
import * as markupMultipliers from "./markupMultipliers"

const markupCalculator = (basePrice, numPersons=1, materialType=null) => {
    if (!basePrice) throw("Base price must be included")
    if (basePrice < 0) throw("Base price cannot be negative")
    if (numPersons <= 0) throw("Atleast one person required to work on the job")

    const {flatMarkup, personMarkup, typeMarkup} =  markupMultipliers

    let baseMarkupValue = basePrice * ( 100 + flatMarkup ) / 100

    let personMarkupValue = numPersons * personMarkup
    let typeMarkupValue = _.get(typeMarkup, materialType, 0)

    let otherMarkupValue = ( 100 + personMarkupValue + typeMarkupValue ) / 100
    let total = baseMarkupValue * otherMarkupValue

    return parseFloat(total.toFixed(2))
}

export {
    markupCalculator,
    markupCalculator as default
}
