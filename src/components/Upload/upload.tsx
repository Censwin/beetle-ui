import React, { useRef, useState } from 'react'
import Button from '../Button/button'
import axios from 'axios'
import UploadList from './uploadList'

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
  defalutFileList: IFileInfo[]
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  beforeUpload?: (file: File) => boolean | Promise<File>
  onChange?: (file: File) => void
  onRemove?: (file: IFileInfo) => void
}

const Upload: React.FC<IUploadprops> = (props) => {
  const { action, defalutFileList } = props
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
    setFileList([currentFile, ...fileList])
    const formData = new FormData()
    formData.append(file.name, file)
    axios
      .post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (e) => {
          let perc = Math.floor((e.loaded * 100) / e.total) || 0
          if (perc < 100) {
            updateFileInfo(currentFile, { percent: perc, status: 'uploading' })
            if (onProgress) {
              onProgress(perc, file)
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
          onSuccess(res.data, file)
        }
      })
      .catch((err) => {
        updateFileInfo(currentFile, { status: 'fail', response: err })
        if (onError) {
          onError(err, file)
        }
      })
      .finally(() => {
        if (onChange) {
          onChange(file)
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
  return (
    <div className="whale-upload-wrapper">
      <Button btnType="primary" onClick={handleClickUpload}>
        上传文件
      </Button>
      <input
        ref={InputRef}
        className="whale-file-input"
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileChange}
      />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

export default Upload
