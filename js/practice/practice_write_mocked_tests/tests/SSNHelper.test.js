

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
    const validMonth = '01'
    const anotherValidMonth = '12'
    const invalidMonthAboveMaxBoundary = '13'
    const invalidMonthBelowMinBoundary = '00'
    const validDay = '01'
    const anotherValidDay = '31'
    const invalidDayAboveMaxBoundary = '32'
    const invalidDayBelowMinBoundary = '00'
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

    describe('isCorrectFormat Method', () => {

        /*test('isCorrectFormat_validFormat_returnsTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectFormat(validSSN)).toBe(true)
        })*/

        test('isCorrectFormat_invalidFormat_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectFormat(invalidFormat)).toBe(false)

        })
    })

    describe('isValidMonth Method', () => {

        /*test('isValidMonth_monthAtMinBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(validMonth)).toBe(true)
        })*/

        test('isValidMonth_monthBelowMinBoundary_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(invalidMonthBelowMinBoundary)).toBe(false)
        })

        /*test('isValidMonth_monthAtMaxBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(anotherValidMonth)).toBe(true)
        })*/

        test('isValidMonth_monthAboveMaxBoundary_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(invalidMonthAboveMaxBoundary)).toBe(false)
        })
    })

    describe('isValidDay Method', () => {

        /*test('isValidDay_dayAtMinBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(validDay)).toBe(true)
        })*/

        /*test('isValidDay_dayBelowMinBoundary_returnFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(invalidDayBelowMinBoundary)).toBe(false)
        })*/

        test('isValidDay_dayAtMaxBoundary_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(anotherValidDay)).toBe(true)

        })

        /*test('isValidDay_dayAboveMaxBoundary_returnFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidDay(invalidDayAboveMaxBoundary)).toBe(false)
        })*/
    })

    describe('luhnisCorrect', () => {

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