import chai from 'chai'
const expect = chai.expect

import hello from '../server'

describe('hello', () => {

  it('should return a greeting to the parameter', () => {
    const greeting = hello('world')
    expect(greeting).to.be.equal('Hello world!')
  })

})
