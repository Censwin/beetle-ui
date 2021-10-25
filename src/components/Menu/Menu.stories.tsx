/*
 * @Author: Censwin
 * @Date: 2021-10-25 23:31:22
 * @LastEditTime: 2021-10-25 23:45:21
 * @Description: 
 * @FilePath: /whale-design/src/components/Menu/Menu.stories.tsx
 */
import Menu from './menu'
import SubMenu from './subMenu'
import MenuItem from './menuItem'

export default {
    title: '通用/Menu',
    compoent: Menu,
    argTypes: {
        mode : {
            options: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
            control: { type: 'radio' },
            description: '横向纵向选择'
        },
        defaultSelectedIndex: {
            defaultValue: '0',
            description: '默认选中'
        },
        defaultOpen: {
            description: '默认展开; string[]'
        }
        
    }
}


export const ManyItems = (args) => (
    <Menu {...args}>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
    </Menu>
)
export const OneSubmenu = (args) => (
    <Menu {...args}>
        <MenuItem>Item 1</MenuItem>
        <MenuItem disabled={true}>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <SubMenu title="test">
            <MenuItem>subItem 1</MenuItem>
            <MenuItem>subItem 2</MenuItem>
        </SubMenu>
    </Menu>
)