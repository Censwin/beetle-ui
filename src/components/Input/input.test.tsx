import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input, { InputProps } from './input'

const TestProps: InputProps = {
  placeholder: 'test',
}

describe('test Input Component', () => {
  it('should rendered the Input Component', () => {
    const wrapper = render(<Input {...TestProps} />)
    const target = wrapper.getByPlaceholderText('test')
    expect(target).toBeInTheDocument()
  })
})
