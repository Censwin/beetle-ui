import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Upload, {UploadStatus} from "./upload";
import Button from '../Button/button'

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('文件过大')
    return false
  }
  return true
}

const changeFileName = (file: File) => {
  const newFile = new File([file], 'new_name.txt', {type: file.type})
  // https://developer.mozilla.org/zh-CN/docs/Web/API/File
  return new Promise<File>((res, rej) => {
    res(newFile)
  })
}
const _defaultFileList = [
  {
    id: '1',
    size: 1024,
    name: '1.txt',
    status: 'uploading' as UploadStatus,
    percent: 30
  },
  {
    id: '2',
    size: 1024,
    name: '2.txt',
    status: 'success' as UploadStatus,
    percent: 30
  },
  {
    id: '3',
    size: 1024,
    name: '3.txt',
    status: 'fail' as UploadStatus,
    percent: 30
  },
]
const renderUpload = () => {
  return (
    // <Upload 
    //   action="http://jsonplaceholder.typicode.com/posts" 
    //   onProgress={action('progress')} 
    //   onSuccess={action('success')} 
    //   onError={action('error')} 
    // />
    <Upload 
      action="http://jsonplaceholder.typicode.com/posts" 
      // dragable
      onChange={action('change')}
      // beforeUpload={changeFileName}
      defalutFileList={[]}
      onRemove={action('Removed')}
      multiple />
  )
}

storiesOf('Upload', module).add('Upload', renderUpload)