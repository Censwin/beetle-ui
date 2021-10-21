import React, { useRef, useEffect } from 'react'

export type strokeType = 'line' | 'circle'
export interface IProgressProps {
  percent: number
  showInfo?: boolean
  type?: strokeType
  style?: React.CSSProperties
}

const Progress: React.FC<IProgressProps> = (props) => {
  const { percent, showInfo, type, style } = props
  const progressBar = useRef<HTMLDivElement>()
  const progress = useRef<HTMLDivElement>()
  useEffect(() => {
    const barwidth = progressBar.current.clientWidth
    const offsetWidth = (percent / 100) * barwidth
    progress.current.style.width = `${offsetWidth}px`
  }, [percent])
  return (
    <div className="whale-progress-bar" style={style}>
      <div className="bar-inner" ref={progressBar}>
        <div className="progress" ref={progress} />
      </div>
      {showInfo && <span className="progress-text">{percent}%</span>}
    </div>
  )
}
Progress.defaultProps = {
  percent: 0,
  showInfo: true,
}
export default Progress
