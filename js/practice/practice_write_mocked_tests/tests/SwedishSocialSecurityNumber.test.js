import { jest } from '@jest/globals'
import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'



//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Test suite', () => {
    const validSSN = '811228-9874'
    const validSSNWithWhitespace = '  811228-9874  '


    let mockHelper

    beforeEach(() => {
        mockHelper = {
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
    })
})