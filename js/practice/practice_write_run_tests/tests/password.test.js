
 import { Password } from '../src/Correct'
// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/BugNoArgumentValidation' // egen buggfil


describe('Password class, test suite', () => {
    const validPassword = 'validpassword1'
    const anotherValidPassword = 'anothervalid456'
    const emptyPassword = ''
    const passwordWithSpaces = '   validpassword1   '
    const containsOnlyLetters = 'onlylettershere'
    const atBoundaryMinLength = 'password1234'
    const justBelowBoundaryMinLength = 'password123' // boundary - 1
    const justAboveBoundaryMinLength = 'password12345' // boundary + 1

    describe('Constructor - trim behavior', () => {

        test('constructor_untrimmedPassword_trimsCorrectly', () => {
            const untrimmedPassword = new Password(passwordWithSpaces)
            const trimmedPassword = new Password(validPassword)

            expect(untrimmedPassword.getPasswordHash()).toBe(trimmedPassword.getPasswordHash())
        })
    })

        describe('Constructor - length validations', () => {

            /*test('constructor_atBoundaryLength_createsPassword', () => {
                const password = new Password(atBoundaryMinLength)

                expect(password).toBeInstanceOf(Password)
            })*/

            test('constructor_justBelowBoundaryMinLength_throwsError', () => {
                expect(() => new Password(justBelowBoundaryMinLength)).toThrow('Too short password')
            })

            /*test('constructor_justAboveBoundaryMinLength_createsPassword', () => {
                const password = new Password(justAboveBoundaryMinLength)
                
                expect(password).toBeInstanceOf(Password)
            })*/

            /*test('constructor_emptyPassword_throwsError', () => {
                expect(() => new Password(emptyPassword)).toThrow('Too short password')
            })*/
        })

        describe('Constructor - number requirement', () => {

            /*test('constructor_passwordWithNumber_createsPassword', () => {
                const password = new Password(validPassword)

                expect(password).toBeInstanceOf(Password)
            })*/

            test('constructor_passwordWithoutNumber_throwsError', () => {
                expect(() => new Password(containsOnlyLetters)).toThrow('No number found')
            })

        })

        describe('getPasswordHash method', () => {

            test('getPasswordHash_validPassword_returnsNumber', () => {
                const password = new Password(validPassword)
                const hash = password.getPasswordHash()

                expect(typeof hash).toBe('number')
            })

            /*test('getPasswordHash_sameObject_returnsConsistentHash', () => {
                const password = new Password(validPassword)
                const firstHash = password.getPasswordHash()
                const secondHash = password.getPasswordHash()

                expect(firstHash).toBe(secondHash)
            })*/

            /*test('getPasswordHash_identicalPasswords_returnsSameHash', () => {
                const firstPassword = new Password(validPassword)
                const secondPassword = new Password(validPassword)

                expect(firstPassword.getPasswordHash()).toBe(secondPassword.getPasswordHash())
            })*/

            /*test('getPasswordHash_differentPasswords_returnsDifferentHashes', () => {
                const firstPassword = new Password(validPassword)
                const secondPassword = new Password(anotherValidPassword)

                expect(firstPassword.getPasswordHash()).not.toBe(secondPassword.getPasswordHash())
            })*/
        })

        describe('isPasswordSame method', () => {

            /*test('isPasswordSame_identicalPasswords_returnsTrue', () => {
                const firstPassword = new Password(validPassword)
                const secondPassword = new Password(validPassword)

                expect(firstPassword.isPasswordSame(secondPassword)).toBe(true)

            })*/

            test('isPasswordSame_differentPasswords_returnsFalse', () => {
                const firstPassword = new Password(validPassword)
                const secondPassword = new Password(anotherValidPassword)

                expect(firstPassword.isPasswordSame(secondPassword)).toBe(false)
            })

            test('isPasswordSame_invalidArgument_throwsError', () => {
                const password = new Password(validPassword)

                expect(() => password.isPasswordSame('string')).toThrow('Invalid argument')
            })

            /*test('isPasswordSame_nullArgument_throwsError', () => {
                const password = new Password(validPassword)

                expect(() => password.isPasswordSame(null)).toThrow('Invalid argument')
            })*/
        })
    })
