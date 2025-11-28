

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
    const monthAboveBoundary = '13'
    const monthBelowBoundary = '00'
    const validDay = '01'
    const anotherValidDay = '31'
    const invalidDayAboveBoundary = '32'
    const invalidDayBelowBoundary = '00'
    const invalidLuhnSSN = '811228-9875'

    describe('isCorrectLength method', () => {

        test('isCorrectLength_validLength_returnsTrue', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectLength(validSSN)).toBe(true)
        })

        test('isCorrectLength_tooLongSSN_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectLength(tooLongSSN)).toBe(false)
        })

        test('isCorrectLength_tooShortSSN_returnFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectLength(tooShortSSN)).toBe(false)
        })
    })

    describe('isCorrectFormat Method', () => {

        test('isCorrectFormat_invalidFormat_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isCorrectFormat(invalidFormat)).toBe(false)

        })
    })

    describe('isValidMonth Method', () => {

        test('isValidMonth_monthZero_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(monthBelowBoundary)).toBe(false)
        })

        test('isValidMonth_month13_returnsFalse', () => {
            const sut = new SSNHelper()

            expect(sut.isValidMonth(monthAboveBoundary)).toBe(false)
        })
    })

    describe('isValidDay Method', () => {

        test('isValidDay_day31_returnTrue', () =>{
            const sut = new SSNHelper()

            expect(sut.isValidDay(anotherValidDay)).toBe(true)

        })
    })

    describe('luhnisCorrect', () => {

        test('luhnisCorrect_validSSN_returnTrue', () => {
            const sut = new SSNHelper()

            expect(sut.luhnisCorrect(validSSN)).toBe(true)
        })
    })
})