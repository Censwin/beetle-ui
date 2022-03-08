// TODO more tests
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {
  render,
  screen,
  fireEvent,
  RenderResult,
  cleanup,
} from '@testing-library/react'

import Group, { IGroupProps } from './Group'

const defaultProps: IGroupProps = {
  options: [
    { label: 'aaa', value: '111' },
    { label: 'bbb', value: '222' },
    { label: 'ccc', value: '333' },
    { label: 'ddd', value: '444' },
    { label: 'eee', value: '555' },
    { label: 'fff', value: '666' },
    { label: 'ggg', value: '777' },
    { label: 'hhh', value: '888' },
    { label: 'iii', value: '999' },
    { label: 'ii1', value: '991' },
    { label: 'ii2', value: '992' },
    { label: 'ii3', value: '993' },
    { label: 'ii4', value: '994' },
    { label: 'ii5', value: '995' },
  ],
}

describe('Group', () => {
  describe('initialize', () => {
    it('Should render Group Component', () => {
      render(<Group {...defaultProps} />)
      const GroupElement = screen.getByTestId('Group-test')
      expect(GroupElement).toBeInTheDocument()
    })
  })
  describe('select test', () => {
    let wrapper: RenderResult
    let container: HTMLElement
    const mockFn = jest.fn()
    const props = {
      options: [
        { label: 'aaa', value: '111' },
        { label: 'bbb', value: '222' },
      ],
      onChange: mockFn,
    }
    beforeEach(() => {
      wrapper = render(<Group {...props} />)
      container = wrapper.container
    })

    it('default selected if `value` provided', () => {
      const { container } = render(<Group {...props} values={['111']} />)
      const element = container.querySelector(
        'input[name="aaa"]'
      ) as HTMLInputElement
      expect(element).toBeChecked()
    })

    it('should pass the correct value into the onChange ', () => {
      const [target1, target2] = Array.from(
        container.querySelectorAll('input')
      ) as Array<HTMLInputElement>
      // check
      fireEvent.click(target1)
      expect(target1.checked).toEqual(true)
      expect(mockFn).toBeCalledWith([{ label: 'aaa', value: '111' }])
      fireEvent.click(target2)
      expect(target2.checked).toEqual(true)
      expect(mockFn).toBeCalledWith([
        { label: 'aaa', value: '111' },
        { label: 'bbb', value: '222' },
      ])
      // uncheck
      fireEvent.click(target1)
      fireEvent.click(target2)
      expect(target1.checked).toEqual(false)
      expect(target2.checked).toEqual(false)
      expect(mockFn).toBeCalledWith([])
    })
  })
})
