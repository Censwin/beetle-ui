import React from 'react'
import {
  render,
  fireEvent,
  RenderResult,
  cleanup,
} from '@testing-library/react'
import Menu, { IMenuProps } from './menu'
import MenuItem from './menuItem'

const testMenuProps: IMenuProps = {
  defaultSelectedIndex: 0,
  onSelect: jest.fn(),
  className: 'testmenu',
}

const testVerticalProps: IMenuProps = {
  defaultSelectedIndex: 0,
  mode: 'vertical',
}

const renderMenu = (props) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled={true}>disabled</MenuItem>
      <MenuItem>target</MenuItem>
      <li>hello</li>
    </Menu>
  )
}
let wrapper: RenderResult
let menuElement: HTMLElement
let activeElement: HTMLElement
let disabledElement: HTMLElement

describe('test Menu component', () => {
  beforeEach(() => {
    wrapper = render(renderMenu(testMenuProps))
    menuElement = wrapper.getByTestId('menu-test')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render different component when props changed', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('whale-menu')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item-active')
    expect(activeElement).toHaveClass('menu-item')
    expect(disabledElement).toHaveClass('is-disabled')
  })
  it('should change activeItem when click', () => {
    const target = wrapper.getByText('target')
    fireEvent.click(target)
    expect(target).toHaveClass('menu-item-active')
    expect(activeElement).not.toHaveClass('menu-item-active')
    expect(testMenuProps.onSelect).toBeCalledWith(2)
    const disabledTarget = wrapper.getByText('disabled')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('menu-item-active')
    expect(testMenuProps.onSelect).not.toBeCalledWith(1)
  })
  it('should render vertical mode', () => {
    cleanup()
    const verticalWrapper = render(renderMenu(testVerticalProps))
    const target = verticalWrapper.getByTestId('menu-test')
    expect(target).toBeInTheDocument()
    expect(target).toHaveClass('menu-vertical')
  })
})
