
// Select one of the Password versions to test

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
import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const validPassword = 'validpassword1'
    const anotherValidPassword = 'anothervalid456'
    const emptyPassword = ''
    const containsOnlyLetters = 'onlylettershere'
    const atBoundaryLength = 'password1234'
    const justBelowBoundaryLength = 'password123' // boundary - 1
    const justAboveBoundaryLength = 'password12345' // boundary + 1

    describe('Constructor - length validations', () => {

        test('constructor_atBoundaryLength_createsPassword', () => {
            const password = new Password(atBoundaryLength)

            expect(password).toBeInstanceOf(Password) // verifierar att objektet skapas och är av rätt typ
        })

        test('constructor_justBelowBoundaryLength_throwsError', () => {
            expect(() => new Password(justBelowBoundaryLength)).toThrow('Too short password') // Arrow function för att fördröja execution
        })

        test('constructor_justAboveBoundaryLength_createsPassword', () => {
            const password = new Password(justAboveBoundaryLength)

            expect(password).toBeInstanceOf(Password) // Ökar inte coverage men säkerställer komplett BVA
        })

        test('constructor_emptyPassword_throwsError', () => {
            expect(() => new Password(emptyPassword)).toThrow('Too short password')
        })
    })

    describe('Constructor - number requirement', () => {

        test('constructor_containsNumber_createsPassword', () => {
            const password = new Password(validPassword)

            expect(password).toBeInstanceOf(Password)
        })

        test('constructor_containsOnlyLetters_throwsError', () => {
            expect(() => new Password(containsOnlyLetters)).toThrow('No number found')
        })

    })

    describe('getPasswordHash method', () => {

        test('getPasswordHash_validPassword_returnsNumber', () => {
            const password = new Password(validPassword)
            const hash = password.getPasswordHash()

            expect(typeof hash).toBe('number')
        })

        test('getPasswordHash_sameObject_returnsConsistentHash', () => {
            const password = new Password(validPassword)
            const firstHash = password.getPasswordHash()
            const secondHash = password.getPasswordHash()

            expect(firstHash).toBe(secondHash)
        })

        test('getPasswordHash_identicalPasswords_returnSameHash', () => {
            const firstPassword = new Password(validPassword)
            const secondPassword = new Password(validPassword)

            expect(firstPassword.getPasswordHash()).toBe(secondPassword.getPasswordHash())
        })

        test('getPasswordHash_differentPasswords_returnsDifferentHashes', () => {
            const firstPassword = new Password(validPassword)
            const secondPassword = new Password(anotherValidPassword)

            expect(firstPassword.getPasswordHash()).not.toBe(secondPassword.getPasswordHash())
        })
    })

    describe('isPasswordSame method', () => {

        test('isPasswordSame_identicalPasswords_returnsTrue', () => {
            const firstPassword = new Password(validPassword)
            const secondPassword = new Password(validPassword)

            expect(firstPassword.isPasswordSame(secondPassword)).toBe(true)

        })

        test('isPasswordSame_differentPasswords_returnsFalse', () => {
            const firstPassword = new Password(validPassword)
            const secondPassword = new Password(anotherValidPassword)

            expect(firstPassword.isPasswordSame(secondPassword)).toBe(false)
        })

        test('isPasswordSame_invalidArgument_throwsError', () => {
            const password = new Password(validPassword)

            expect(() => password.isPasswordSame('string')).toThrow('Invalid argument')
        })
    })
})