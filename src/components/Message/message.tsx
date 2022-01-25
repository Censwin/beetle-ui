import React from 'react'
import ReactDOM from 'react-dom'
import animations from 'create-keyframe-animation'
import Icon from '../Icon'
// ==================== Type =======================
interface IParams {
  name: string
  animation: any[]
  presets: { duration: number; easing: string; delay?: number }
}
// ==================== Content Layout =======================

interface ILayout {
  content: React.ReactNode
}
const Layout: React.FC<ILayout> = (props) => {
  const { content } = props
  return (
    <div className="beetle-message-content">
      <Icon
        style={{ color: 'green', marginRight: '0.5em' }}
        icon="info-circle"
      />
      {content}
    </div>
  )
}

// ==========================================
const nodePosition = (num: number) => {
  const marginTop = 25
  const msgHeight = 40
  const gap = 10
  return [0, marginTop + (num - 1) * msgHeight + gap]
}

const unmountMsgWrapper = () => {
  const wrapper = document.getElementsByClassName('beetle-message')[0]
  const parent = wrapper.parentElement
  parent?.removeChild(wrapper)
}

const getMsgWrapper = () => {
  const wrapper = document.createElement('div')
  wrapper.setAttribute('class', 'beetle-message')
  const child = document.createElement('div') // 目标不能为空节点，否则无法 render
  wrapper.appendChild(child)
  document.body.appendChild(wrapper)
  return wrapper
}
// ==================== for sign =======================
let nums = 0
// ==================== main function =======================

const alert = (type: string, content: React.ReactNode) => {
  let msgWrapper = getMsgWrapper()
  let timer = 0
  let duration = 500

  ReactDOM.render(
    <Layout content={content} />,
    msgWrapper as HTMLElement,
    () => {
      nums++
      let params: IParams = {
        name: `msgFade${nodePosition(nums)[1]}`,
        animation: [
          {
            opacity: 0,
            top: 0,
          },
          {
            opacity: 1,
            top: `${nodePosition(nums)[1]}px`,
          },
        ],
        presets: {
          duration: duration,
          easing: 'linear',
        },
      }
      animations.registerAnimation(params)
      animations.runAnimation(msgWrapper, params.name)
      timer = window.setTimeout(() => {
        let _params: IParams = JSON.parse(JSON.stringify(params))
        _params.animation = _params.animation.reverse()
        _params.name = `${_params.name}H`
        _params.presets.delay = 800 // 停留一下
        animations.registerAnimation(_params)
        animations.runAnimation(msgWrapper, _params.name, () => {
          nums--
          ReactDOM.unmountComponentAtNode(msgWrapper as HTMLElement)
          clearTimeout(timer)
          unmountMsgWrapper()
        })
      }, duration)
    }
  )
}

interface IMessage {
  info: (content: React.ReactNode) => void
}
const info = alert.bind(this, 'info')
const Message: IMessage = {
  info,
}
export default Message
