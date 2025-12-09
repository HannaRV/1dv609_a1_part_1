import { jest } from '@jest/globals'

import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLuhn'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberWrongYear'

describe('SwedishSocialSecurityNumber Test suite', () => {
    const validSSN = '811228-9874'
    const validSSNWithWhitespace = '  811228-9874  '
    const anySSN = '811228-9874' // Mocken styr beteendet

    let mockHelper

    beforeEach(() => {
        mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }
    })

    describe('Constructor', () => {

        /*test('constructor_validSSN_createsInstance', () => {
            const sut = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(sut).toBeInstanceOf(SwedishSocialSecurityNumber)
        })*/

        test('constructor_untrimmedSSN_trimsThenValidates', () => {
            const sut = new SwedishSocialSecurityNumber(validSSNWithWhitespace, mockHelper)

            expect(mockHelper.isCorrectFormat).toHaveBeenCalledWith('811228-9874')
        })

        test('constructor_invalidLength_throwsError', () => {
            mockHelper.isCorrectLength.mockReturnValue(false)

            expect(() => new SwedishSocialSecurityNumber(anySSN, mockHelper))
                .toThrow("To short, must be 11 characters")
        })

        test('constructor_invalidFormat_throwsError', () => {
            mockHelper.isCorrectFormat.mockReturnValue(false)

            expect(() => new SwedishSocialSecurityNumber(anySSN, mockHelper))
                .toThrow("Incorrect format, must be: YYMMDD-XXXX")
        })

        test('constructor_invalidMonth_throwsError', () => {
            mockHelper.isValidMonth.mockReturnValue(false)

            expect(() => new SwedishSocialSecurityNumber(anySSN, mockHelper))
                .toThrow("Invalid month in SSN")
        })

        test('constructor_invalidDay_throwsError', () => {
            mockHelper.isValidDay.mockReturnValue(false)

            expect(() => new SwedishSocialSecurityNumber(anySSN, mockHelper))
                .toThrow("Invalid day in SSN")
        })

        test('constructor_invalidLuhn_throwsError', () => {
            mockHelper.luhnisCorrect.mockReturnValue(false)

            expect(() => new SwedishSocialSecurityNumber(anySSN, mockHelper))
                .toThrow("Invalid SSN according to Luhn's algorithm")
        })
    })

    describe('getYear method', () => {

        test('getYear_validSSN_returnsCorrectYear', () => {
            const sut = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(sut.getYear()).toBe('81')
        })
    })

    /*describe('getMonth method', () => {

        test('getMonth_validSSN_returnsCorrectMonth', () => {
            const sut = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(sut.getMonth()).toBe('12')
        })
    })*/

    /*describe('getDay method', () => {

        test('getDay_validSSN_returnsCorrectDay', () => {
            const sut = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(sut.getDay()).toBe('28')
        })
    })*/

    describe('getSerialNumber method', () => {

        test('getSerialNumber_validSSN_returnsCorrectSerialNumber', () => {
            const sut = new SwedishSocialSecurityNumber(validSSN, mockHelper)

            expect(sut.getSerialNumber()).toBe('9874')
        })
    })
})

