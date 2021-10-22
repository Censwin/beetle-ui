import React, { useRef, useState } from 'react'
import Button from '../Button/button'
import axios from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'
export type UploadStatus = 'success' | 'fail' | 'ready' | 'uploading'
export interface IFileInfo {
  id?: string
  size: number
  name: string
  status?: UploadStatus
  percent?: number
  rawFile?: File
  response?: any
  error?: any
}
export interface IUploadprops {
  action: string
  defalutFileList?: IFileInfo[]
  onProgress?: (percentage: number, file: IFileInfo) => void
  onSuccess?: (data: any, file: IFileInfo) => void
  onError?: (err: any, file: IFileInfo) => void
  beforeUpload?: (file: File) => boolean | Promise<File>
  onChange?: (file: IFileInfo) => void
  onRemove?: (file: IFileInfo) => void
  headers?: { [key: string]: any }
  name?: string
  data?: { [key: string]: any }
  withCredentials?: boolean
  accept?: string
  multiple?: boolean
  dragable?: boolean
}

const Upload: React.FC<IUploadprops> = (props) => {
  const {
    action,
    defalutFileList,
    headers,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    dragable,
    children,
  } = props
  const { onProgress, onSuccess, onError, beforeUpload, onChange, onRemove } =
    props
  const InputRef = useRef<HTMLInputElement>(null)

  const [fileList, setFileList] = useState<IFileInfo[]>(defalutFileList || [])

  const updateFileInfo = (file: IFileInfo, editedObj: Partial<IFileInfo>) => {
    setFileList((fileList) => {
      return fileList.map((item) => {
        if (item.id === file.id) {
          return { ...item, ...editedObj }
        } else {
          return item
        }
      })
    })
  }

  const uploadFiles = (files: FileList) => {
    const _files = Array.from(files)
    _files.forEach((file) => {
      if (!beforeUpload) {
        postData(file)
      } else {
        const res = beforeUpload(file)
        if (res && res instanceof Promise) {
          res.then((file) => postData(file))
        } else if (res !== false) {
          postData(file)
        }
      }
    })
  }

  const postData = (file: File) => {
    const currentFile: IFileInfo = {
      id: Date.now().toString(),
      size: Math.round(file.size / 1024), // 转kb
      name: file.name,
      status: 'ready',
      percent: 0,
      rawFile: file,
    }
    setFileList((fileList) => {
      return [currentFile, ...fileList]
    })
    const formData = new FormData()
    formData.append(name || file.name, file)
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: (e) => {
          let perc = Math.floor((e.loaded * 100) / e.total) || 0
          if (perc < 100) {
            updateFileInfo(currentFile, { percent: perc, status: 'uploading' })
            if (onProgress) {
              onProgress(perc, currentFile)
            }
          }
        },
      })
      .then((res) => {
        updateFileInfo(currentFile, {
          status: 'success',
          response: res.data,
          percent: 100,
        })
        if (onSuccess) {
          onSuccess(res.data, currentFile)
        }
      })
      .catch((err) => {
        updateFileInfo(currentFile, { status: 'fail', response: err })
        if (onError) {
          onError(err, currentFile)
        }
      })
      .finally(() => {
        if (onChange) {
          onChange(currentFile)
        }
      })
  }

  const handleClickUpload = () => {
    InputRef.current.click()
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFiles(files)
    if (InputRef.current) InputRef.current.value = ''
  }
  const handleRemove = (file: IFileInfo) => {
    setFileList((fileList) => {
      return fileList.filter((item) => item.id !== file.id)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const renderContent = () => {
    if (children) {
      return children
    }
    return <Button btnType="primary">点击上传</Button>
  }
  return (
    <div className="whale-upload-wrapper">
      {dragable && (
        <div onClick={handleClickUpload}>
          <Dragger
            onFile={(files) => {
              uploadFiles(files)
            }}
          />
        </div>
      )}
      <div style={{ display: 'inline-block' }} onClick={handleClickUpload}>
        {!dragable && renderContent()}
        <input
          ref={InputRef}
          className="whale-file-input"
          data-testid="whale-file-input"
          style={{ display: 'none' }}
          type="file"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

export default Upload
