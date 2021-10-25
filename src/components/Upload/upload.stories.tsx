/*
 * @Author: Censwin
 * @Date: 2021-10-24 23:33:38
 * @LastEditTime: 2021-10-26 00:20:17
 * @Description: 
 * @FilePath: /whale-design/src/components/Upload/upload.stories.tsx
 */
import React from "react";
import Upload, {UploadStatus, IUploadprops} from "./upload";
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


export default {
  title: '表单/Upload',
  component: Upload,
  argTypes: {
    action: {
      description: '【必填】上传地址',
    },
    defalutFileList: {description: 'filelist 初始化数据；IFileInfo[]'},
    onProgress: {description: 'function(perc, file)'},
    onSuccess: {description: '成功回调；funtion(res, file)'},
    onError: {description: '失败回调；funtion(err, file)'},
    beforeUpload: {description: '上传前回调；funtion(file): boolean | Primise<File>'},
    onChange: {description: '选中文件回调: function(file)'},
    onRemove: {description: '移除文件回调: function(file)'},
    name: {description: '上传的文件名'},
    data: {description: '提交时额外数据'},
    withCredentials: {description: '是否携带cookie'},
    accept: {description: '接收的文件格式'},
    multiple: {description: '是否多选'},
    dragable: {description: '是否开启拖拽模式'},
  }
}
const Template = (args: IUploadprops) => <Upload {...args}/>
export const Default = Template.bind({})
Default.args = {
  action: 'http://jsonplaceholder.typicode.com/posts',
  defalutFileList: [],
  onProgress: () => {},
  onSuccess: () => {},
  onError: () => {},
  beforeUpload: () => {},
  onChange: () => {},
  onRemove: () => {},
  name: 'testFile',
  data: {now: Date.now()},
  withCredentials: true,
  accept: '.jpg',
  multiple: false,
  dragable: false
}

export const Drag = Template.bind({})
Drag.args = {
  ...Default.args,
  dragable: true
}