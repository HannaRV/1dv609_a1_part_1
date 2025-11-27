import { expect, jest, test } from '@jest/globals'
// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLuhn'
 import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberWrongYear'

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

        test('constructor_InvalidLuhn_throwsError', () => {
            mockHelper.luhnisCorrect.mockReturnValue(false)

            expect(() => { new SwedishSocialSecurityNumber(validSSN, mockHelper) })
                .toThrow("Invalid SSN according to Luhn's algorithm")
        })

        test('constructor_InvalidLength_throwsError', () => {
            mockHelper.isNotCorrectLength.mockReturnValue(true)

            expect(() => { new SwedishSocialSecurityNumber(validSSN, mockHelper) })
                .toThrow("To short, must be 11 characters")
        })
    })

    describe('getYear Method', () => {

        test('getYear_ValidSSN_returnsCorrectYear', () => {
            const ssn = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(ssn.getYear()).toBe('81')
        })
    })
})