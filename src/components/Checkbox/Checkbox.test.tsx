import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {
  render,
  screen,
  fireEvent,
  RenderResult,
  cleanup,
} from '@testing-library/react'
import Checkbox, { ICheckboxProps } from './Checkbox'

describe('Checkbox component', () => {
  it('should render a checkbox', () => {
    const wrapper = render(<Checkbox>checkbox test</Checkbox>)
    // screen.debug()
    const element = wrapper.getByText('checkbox test').parentElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('checkbox-wrapper')
  })

  it('should change the checkbox state when check', () => {
    const mockFn = jest.fn()
    const wrapper = render(<Checkbox onChange={mockFn} />)
    const target = wrapper.getByTestId("checkbox") as HTMLInputElement
    fireEvent.click(target)
    const timesActionDispatched = mockFn.mock.calls.length;
    expect(timesActionDispatched).toBe(1);
    expect(mockFn.mock.calls[0][0]).not.toBeFalsy()
    expect(target.checked).toEqual(true)
    // uncheck
    fireEvent.click(target)
    expect(target.checked).toEqual(false)
  })

  it('default checked test if checked or defaultchecked provided', () => {
    const Component = () => {
      return (
        <>
        <Checkbox checked={true}>provide checked</Checkbox>
        <Checkbox defaultChecked={true}>provide defaultchecked</Checkbox>
        </>
      )
    }
    const wrapper = render(<Component />)
    // screen.debug()
    const target1 = wrapper.getByText('provide checked').parentElement?.querySelector('input')
    const target2= wrapper.getByText('provide defaultchecked').parentElement?.querySelector('input')
    expect(target1?.checked).toBeTruthy()
    expect(target2?.checked).toBeTruthy()
  })

  it('can not operate checkbox when the `disabled` is true', () => {
    const mockFn = jest.fn()
    const wrapper = render(<Checkbox onChange={mockFn} disabled={true} defaultChecked={true}>checkbox test</Checkbox>)
    const element = wrapper.getByText('checkbox test').parentElement
    expect(element).toHaveClass('disabled')

    const target = wrapper.getByTestId("checkbox") as HTMLInputElement
    expect(target.checked).toBeTruthy()
    fireEvent.click(target)
    expect(mockFn).not.toBeCalled()
    expect(target.checked).toBeTruthy()
  })

})