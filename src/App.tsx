/*
 * @Author: Censwin
 * @Date: 2021-10-08 23:19:50
 * @LastEditTime: 2021-10-13 15:33:28
 * @Description:
 * @FilePath: /whale-design/src/App.tsx
 */
import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { Alerttype } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Menu mode="vertical">
        <MenuItem>11111</MenuItem>
        <MenuItem disabled={true}>22222</MenuItem>
        <MenuItem>33333</MenuItem>
        <MenuItem>44444</MenuItem>
      </Menu>
      <Alert message="testtetstestestetsett" title="Error" />
      <Alert
        message="testtetstestestetsett"
        title="INFO"
        type={Alerttype.Info}
        closable
      />
      <Alert
        message="testtetstestestetsett"
        title="Success"
        type={Alerttype.Success}
      />
      <Alert
        message="testtetstestestetsett"
        title="Warning"
        type={Alerttype.Warning}
      />
      <Button
        btnType={ButtonType.Primary}
        onClick={() => {
          alert(1)
        }}
      >
        Primary
      </Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Default}>
        Default
      </Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Warning}>
        Warning
      </Button>
      <Button
        size={ButtonSize.Large}
        btnType={ButtonType.Danger}
        disabled={true}
      >
        Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        disabled={true}
        href="www.baidu.com"
        target="_blank"
      >
        Link
      </Button>
      {/* <Button btnType={ButtonType.Link}>Link</Button> */}
    </div>
  )
}

export default App
