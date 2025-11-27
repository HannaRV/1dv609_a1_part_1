import { expect, jest, test } from '@jest/globals'

import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLuhn'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberWrongYear'

describe('SwedishSocialSecurityNumber Test suite', () => {
    const validSSN = '811228-9874'
    const validSSNWithWhitespace = '  811228-9874  '
    const tooShortSSN = '811228-987'
    const invalidFormat = '8112289874'
    const invalidLuhnSSN = '811228-9875'
    const monthBelowBoundary = '00'
    const invalidDayAboveBoundary = '32'


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

        test('constructor_InvalidLength_throwsError', () => {
            mockHelper.isNotCorrectLength.mockReturnValue(true)

            expect(() => { new SwedishSocialSecurityNumber(tooShortSSN, mockHelper) })
                .toThrow("To short, must be 11 characters")
        })

        test('constructor_InvalidFormat_throwsError', () => {
            mockHelper.isCorrectFormat.mockReturnValue(false)

            expect(() => { new SwedishSocialSecurityNumber(invalidFormat, mockHelper) })
                .toThrow("Incorrect format, must be: YYMMDD-XXXX")
        })

        test('constructor_InvalidMonth_throwsError', () => {
            mockHelper.isValidMonth.mockReturnValue(false)

            expect(() => { new SwedishSocialSecurityNumber(monthBelowBoundary, mockHelper) })
                .toThrow("Invalid month in SSN")
        })

        test('constructor_InvalidDay_throwsError', () => {
            mockHelper.isValidDay.mockReturnValue(false)

            expect(() => { new SwedishSocialSecurityNumber(invalidDayAboveBoundary, mockHelper) })
                .toThrow("Invalid day in SSN")
        })

        test('constructor_InvalidLuhn_throwsError', () => {
            mockHelper.luhnisCorrect.mockReturnValue(false)

            expect(() => { new SwedishSocialSecurityNumber(invalidLuhnSSN, mockHelper) })
                .toThrow("Invalid SSN according to Luhn's algorithm")
        })
    })

    describe('getYear Method', () => {

        test('getYear_ValidSSN_returnsCorrectYear', () => {
            const ssn = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(ssn.getYear()).toBe('81')
        })
    })

    describe('getSerialNumber Method', () => {

        test('getSerialNumber_ValidSSN_returnsCorrectSerialNumber', () => {
            const ssn = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(ssn.getSerialNumber()).toBe('9874')
        })
    })

})