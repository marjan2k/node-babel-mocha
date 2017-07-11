import * as markupMultipliers from "./markupMultipliers"

const markupCalculator = (basePrice, numPersons=1, materialType=null) => {
    if (!basePrice) throw("Base price must be included")
    if (basePrice < 0) throw("Base price cannot be negative")
    if (numPersons <= 0) throw("Atleast one person required to work on the job")

    const {flatMarkup, personMarkup, typeMarkup} =  markupMultipliers

  return 0
}

console.log(markupCalculator(100, 11))

export {
    markupCalculator,
    markupCalculator as default
}
