

 import { SSNHelper } from '../src/correct/SSNHelper'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'



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
            const helper = new SSNHelper()

            expect(helper.isCorrectLength(validSSN)).toBe(true)
        })

        test('isCorrectLength_tooLongSSN_returnsFalse', () => {
            const helper = new SSNHelper()

            expect(helper.isCorrectLength(tooLongSSN)).toBe(false)
        })
    })

    describe('isCorrectFormat Method', () => {

        test('isCorrectFormat_invalidFormat_returnsFalse', () => {
            const helper = new SSNHelper()

            expect(helper.isCorrectFormat(invalidFormat)).toBe(false)

        })
    })

    describe('isValidMonth Method', () => {

        test('isValidMonth_monthZero_returnsFalse', () => {
            const helper = new SSNHelper()

            expect(helper.isValidMonth(monthBelowBoundary)).toBe(false)
        })
    })

    describe('isValidDay Method', () => {

        test('isValidDay_day31_returnTrue', () =>{
            const helper = new SSNHelper()

            expect(helper.isValidDay(anotherValidDay)).toBe(true)

        })
    })
})