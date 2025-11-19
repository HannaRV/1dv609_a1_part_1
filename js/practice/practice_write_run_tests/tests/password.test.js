
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
    const validPassword = 'validpassword123'
    const anotherValidPassword = 'anothervalid456'
    const emptyPassword = ''
    const containsOnlyLetters = 'onlylettershere'
    const atBoundaryLength = 'password1234'
    const justBelowBoundaryLength = 'password123' // boundary - 1
    const justAboveBoundaryLength = 'password12345' // boundary + 1

    describe('Constructor tests, length validations', () => {

        test('constructor_atBoundaryLength_createsPassword', () => {
        const password = new Password(atBoundaryLength)

        expect(password).toBeInstanceOf(Password) // verifierar att objektet skapas och är av rätt typ
    })


})
})