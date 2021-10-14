import React, { createContext, ReactNode } from 'react'
import {
  render,
  fireEvent,
  RenderResult,
  cleanup,
} from '@testing-library/react'
import Menu, { IMenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testMenuProps: IMenuProps = {
  defaultSelectedIndex: '0',
  onSelect: jest.fn(),
  className: 'testmenu',
  mode: 'horizontal',
}

const testVerticalProps: IMenuProps = {
  defaultSelectedIndex: '0',
  mode: 'vertical',
  defaultOpen: ['3'],
}

const renderMenu = (props) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled={true}>disabled</MenuItem>
      <MenuItem>target</MenuItem>
      <SubMenu title="test">
        <MenuItem>subitem1</MenuItem>
        <MenuItem>44444</MenuItem>
      </SubMenu>
    </Menu>
  )
}

const createStyle = () => {
  const styles = `
    .whale-submenu {
      display: none
    }
    .whale-shubmenu-open {
      display: block;
    }
  `
  const el = document.createElement('style')
  el.type = 'text/css'
  el.innerHTML = styles
  // document.body.appendChild(el)
  return el
}

let wrapper: RenderResult
let menuElement: HTMLElement
let activeElement: HTMLElement
let disabledElement: HTMLElement

describe('test Menu component', () => {
  beforeEach(() => {
    wrapper = render(renderMenu(testMenuProps))
    wrapper.container.appendChild(createStyle())
    menuElement = wrapper.getByTestId('menu-test')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render different component when props changed', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('whale-menu')
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item-active')
    expect(activeElement).toHaveClass('menu-item')
    expect(disabledElement).toHaveClass('is-disabled')
  })
  it('should change activeItem when click', () => {
    const target = wrapper.getByText('target')
    fireEvent.click(target)
    expect(target).toHaveClass('menu-item-active')
    expect(activeElement).not.toHaveClass('menu-item-active')
    expect(testMenuProps.onSelect).toBeCalledWith('2')
    const disabledTarget = wrapper.getByText('disabled')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('menu-item-active')
    expect(testMenuProps.onSelect).not.toBeCalledWith('1')
  })
  it('should render vertical mode', () => {
    cleanup()
    const verticalWrapper = render(renderMenu(testVerticalProps))
    const target = verticalWrapper.getByTestId('menu-test')
    expect(target).toBeInTheDocument()
    expect(target).toHaveClass('menu-vertical')
  })
  it('should show sub menu when mouse hover for horizontal mode', () => {
    const target = wrapper.getByText('subitem1')
    expect(target).not.toBeVisible()
    //
    const submenuTitle = wrapper.getByText('test')
    fireEvent.mouseEnter(submenuTitle)
    expect(target).toBeVisible()
    // fireEvent.mouseLeave(submenuTitle)
    // expect(target).not.toBeVisible()
    //
    fireEvent.click(target)
    expect(testMenuProps.onSelect).toBeCalledWith('3-0')
  })
})
let VerWrapper: RenderResult
describe('test submenu component for vertical mode', () => {
  beforeEach(() => {
    VerWrapper = render(renderMenu(testVerticalProps))
    VerWrapper.container.append(createStyle())
  })
  it('show or hide submenu when the title click', () => {
    const taeget = VerWrapper.queryByText('subitem1')
    expect(taeget).toBeVisible()
    const submenuTitle = VerWrapper.getByText('test')
    fireEvent.click(submenuTitle)
    expect(taeget).not.toBeVisible()
  })
})
