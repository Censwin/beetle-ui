import React, { useState, useEffect } from 'react'
import { IFileInfo } from './upload'
import Icon from '../Icon/icon'
import Progress from '../Progress/progress'
interface IUploadListProps {
  fileList: IFileInfo[]
  onRemove: (file: IFileInfo) => void
}

const UploadList: React.FC<IUploadListProps> = (props) => {
  const { fileList } = props
  const { onRemove } = props
  const getIconPattern = (status) => {
    switch (status) {
      case 'uploading':
        return ['spinner', 'primary']
      case 'success':
        return ['check-circle', 'success']
      case 'fail':
        return ['exclamation-circle', 'danger']
      default:
        return ['spinner', 'primary']
    }
  }
  const renderList = () => {
    return fileList.map((item) => {
      console.log(item)
      const [_icon, _theme] = getIconPattern(item.status)
      return (
        <li key={item.id} className="upload-list-item">
          <div className="item-row">
            <span className="file-name">
              <Icon icon="paperclip" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              <Icon icon={_icon} theme={_theme} spin={_icon === 'spinner'} />
            </span>
            <span className="file-operat">
              <Icon
                icon="trash"
                theme="secondary"
                onClick={() => {
                  onRemove(item)
                }}
              />
            </span>
          </div>
          {item.percent < 100 && <Progress percent={item.percent} />}
        </li>
      )
    })
  }
  return <ul className="whale-upload-list">{renderList()}</ul>
}

export default UploadList
