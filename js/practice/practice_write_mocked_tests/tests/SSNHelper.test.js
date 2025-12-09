

import { SSNHelper } from '../src/correct/SSNHelper'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth13' // egen tillagd byggsy fil


describe('SSNHelper Test suite', () => {
    const validSSN = '811228-9874'
    const tooLongSSN = '811228-98745'
    const tooShortSSN = '811228-987'
    const invalidFormat = '8112289874'

    const monthAtMinBoundary = '01'
    const monthAtMaxBoundary = '12'
    const monthAboveMaxBoundary = '13' // boundary + 1
    const monthBelowMinBoundary = '00' // boundary - 1

    const dayAtMinBoundary = '01'
    const dayAtMaxBoundary = '31'
    const dayAboveMaxBoundary = '32' // boundary + 1
    const dayBelowMinBoundary = '00' // boundary - 1

    const invalidLuhnSSN = '811228-9875'


    describe('isCorrectLength method', () => {

        /*test('isCorrectLength_validLength_returnsTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectLength(validSSN)).toBe(true)
        })*/

        test('isCorrectLength_tooLongSSN_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectLength(tooLongSSN)).toBe(false)
        })

        /*test('isCorrectLength_tooShortSSN_returnFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectLength(tooShortSSN)).toBe(false)
        })*/
    })

    describe('isCorrectFormat method', () => {

        /*test('isCorrectFormat_validFormat_returnsTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectFormat(validSSN)).toBe(true)
        })*/

        test('isCorrectFormat_invalidFormat_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectFormat(invalidFormat)).toBe(false)

        })
    })

    describe('isValidMonth method', () => {

        /*test('isValidMonth_monthAtMinBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(monthAtMinBoundary)).toBe(true)
        })*/

        test('isValidMonth_monthBelowMinBoundary_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(monthBelowMinBoundary)).toBe(false)
        })

        /*test('isValidMonth_monthAtMaxBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(monthAtMaxBoundary)).toBe(true)
        })*/

        test('isValidMonth_monthAboveMaxBoundary_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(monthAboveMaxBoundary)).toBe(false)
        })
    })

    describe('isValidDay method', () => {

        /*test('isValidDay_dayAtMinBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(dayAtMinBoundary)).toBe(true)
        })*/

        /*test('isValidDay_dayBelowMinBoundary_returnFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(dayBelowMinBoundary)).toBe(false)
        })*/

        test('isValidDay_dayAtMaxBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(dayAtMaxBoundary)).toBe(true)

        })

        /*test('isValidDay_dayAboveMaxBoundary_returnFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(dayAboveMaxBoundary)).toBe(false)
        })*/
    })

    describe('luhnisCorrect method', () => {

        test('luhnisCorrect_validSSN_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.luhnisCorrect(validSSN)).toBe(true)
        })

        /*test('luhnisCorrect_invalidLuhn_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.luhnisCorrect(invalidLuhnSSN)).toBe(false)
        })*/
    })
})