import { describe, it, expect } from 'vitest'
import { validateForm } from './form'

describe('Form Validation Test', () => {

  it('Valid name', () => {
    expect(validateForm("Paras")).toBe(true)
  })

  it('Invalid name', () => {
    expect(validateForm("ab")).toBe(false)
  })

  it('Empty name', () => {
    expect(validateForm("")).toBe(false)
  })

})