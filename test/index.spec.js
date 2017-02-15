import { expect } from 'chai'
import { getName } from '../src'

describe('ask@getName', () => {
  it('should be right result', () => {
    expect(getName('test')).to.equal('test - name')
  })
})
