 import { jest } from '@jest/globals'
 import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLuhn'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberWrongYear'

describe('SwedishSocialSecurityNumber Test suite', () => {
    const validSSN = '811228-9874'
    const validSSNWithWhitespace = '  811228-9874  '


    let mockHelper

    beforeEach(() => {
        mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isNotCorrectLength: jest.fn().mockReturnValue(false),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }
    })

    describe('Constructor', () => {

        test('constructor_validSSN_createsInstance', () => {
            const ssn = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(ssn).toBeInstanceOf(SwedishSocialSecurityNumber)
        })

        test('constructor_UntrimmedSSN_trimsThenValidates', () => {
            const ssn = new SwedishSocialSecurityNumber(validSSNWithWhitespace, mockHelper)

            expect(mockHelper.isCorrectFormat).toHaveBeenCalledWith('811228-9874')
        })
    })
})